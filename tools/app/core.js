/* Level Up Speedrun — core: data indexes, state, sync, XP, streaks, SRS, daily quests, badges, fx. */
"use strict";
const C = window.COURSE || { modules: [], notes: {}, route: {}, schedule: {}, capstone: [], bosses: {} };
const MODS = C.modules.slice().sort((a, b) => a.order - b.order);
const BY = Object.fromEntries(MODS.map((m) => [m.id, m]));
const BITES = [], BITE = {}, CARDS = [], CARD = {}, QUEST = {};
for (const m of MODS) {
  m.sections.forEach((s) => s.bites.forEach((b) => { const x = { ...b, mod: m.id, sec: s.title }; BITES.push(x); BITE[x.id] = x; }));
  m.flashcards.forEach((f) => { const x = { ...f, mod: m.id }; CARDS.push(x); CARD[x.id] = x; });
  m.sideQuests.forEach((q) => (QUEST[q.id] = { ...q, kind: "side", mod: m.id }));
  m.mainQuests.forEach((q) => (QUEST[q.id] = { ...q, kind: "main", mod: m.id }));
  m.playLabs.forEach((q) => (QUEST[q.id] = { ...q, kind: "lab", mod: m.id, title: q.title || "Play Lab: " + q.game }));
}
const bitesOf = (id) => BITES.filter((b) => b.mod === id);
const cardsOf = (id) => CARDS.filter((c) => c.mod === id);
const questsOf = (id) => Object.values(QUEST).filter((q) => q.mod === id);

/* ---------- tiny utils ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const rich = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
const dkey = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const knum = (k) => Math.round(Date.UTC(+k.slice(0, 4), +k.slice(5, 7) - 1, +k.slice(8, 10)) / 864e5);
const todayNum = () => knum(dkey());
const cnt = (o) => Object.keys(o || {}).length;
const pick = (a, r = Math.random) => a[Math.floor(r() * a.length)];
function seeded(seed) {
  let s = 0;
  for (const ch of String(seed)) s = (Math.imul(s, 31) + ch.charCodeAt(0)) >>> 0;
  return () => { s = (s + 0x6d2b79f5) >>> 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
function shuffle(a, r = Math.random) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
const later = (fn, ms = 0) => setTimeout(fn, ms);

/* ---------- storage ---------- */
const LS = {
  get(k) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : null; } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* storage blocked: keep going in memory */ } },
  raw(k, v) { try { if (v === undefined) return localStorage.getItem(k) || ""; localStorage.setItem(k, v); } catch { return ""; } },
};
const KEY_P = "lus.progress.v1", KEY_R = "lus.srs.v1";
function freshP() {
  return {
    v: 1, updatedAt: 0, startDay: null, xp: 0, days: {},
    streak: { count: 0, last: null, freezes: 0, best: 0 },
    seen: {}, got: {}, saved: {}, read: {}, started: {}, quiz: {}, quests: {}, recall: {}, badges: {}, cap: {},
    daily: null, n: { chests: 0, focus: 0, reviews: 0, coach: 0, revive: 0 },
    settings: { route: "f2p", pace: "speedrun", newPerDay: 15, sound: false }, onboarded: false,
  };
}
const freshR = () => ({ v: 1, updatedAt: 0, c: {}, newLog: {} });
const isObj = (x) => !!x && typeof x === "object" && !Array.isArray(x);
function hydrate(base, data) {
  if (!isObj(data)) return base;
  for (const k of Object.keys(data)) {
    const b = base[k], d = data[k];
    // object sections merge; a damaged one (null, wrong type) keeps its default instead of crashing the app on start
    base[k] = isObj(b) ? (isObj(d) ? { ...b, ...d } : b) : d;
  }
  return base;
}
let P = hydrate(freshP(), LS.get(KEY_P));
let R = hydrate(freshR(), LS.get(KEY_R));

/* ---------- account sync: claude.ai db capability, or Firebase on a static host; localStorage stays the instant cache ---------- */
const KEY_OWNER = "lus.owner.v1"; // which account the cached progress belongs to
const FB_VER = "10.12.2";
// On the hosted site (Firebase config, not inside claude.ai) the app is locked behind sign-in so every run is saved to an account
const GATED = !!window.FIREBASE_CONFIG && !(window.claude && typeof window.claude.use === "function");
const Sync = { db: null, pRef: null, rRef: null, state: GATED ? "checking" : "local", backend: null, who: "", fb: null, dirtyP: false, dirtyR: false, busy: false, t: 0 };
let GUEST = false; // guest run on the hosted site: kept in memory only, never written to this device or an account
function saveP() { P.updatedAt = Date.now(); if (GUEST) return; LS.set(KEY_P, P); Sync.dirtyP = true; scheduleSync(); }
function saveR() { R.updatedAt = Date.now(); if (GUEST) return; LS.set(KEY_R, R); Sync.dirtyR = true; scheduleSync(); }
function startGuest() { GUEST = true; P = freshP(); R = freshR(); render(); }
// Signing in ends a guest run: the account (or this device's cache) loads instead, so a guest run never overwrites real progress
function endGuest() { if (!GUEST) return; GUEST = false; P = hydrate(freshP(), LS.get(KEY_P)); R = hydrate(freshR(), LS.get(KEY_R)); }
function scheduleSync(ms = 2500) { if (!Sync.db) return; clearTimeout(Sync.t); Sync.t = setTimeout(flushSync, ms); }
async function writeDoc(ref, body, flag) {
  try { await ref.set(JSON.parse(JSON.stringify(body))); return true; }
  catch (e) {
    Sync[flag] = true;
    const code = e && e.code;
    if (["revoked", "not_granted", "capability_disabled", "capability_removed", "permission-denied", "unauthenticated"].includes(code)) { Sync.db = null; Sync.state = "local"; }
    else Sync.state = code === "quota_exceeded" || code === "resource-exhausted" ? "full" : "retry";
    return false;
  }
}
async function flushSync() {
  if (!Sync.db || Sync.busy) return;
  Sync.busy = true;
  let ok = true;
  if (Sync.dirtyP) { Sync.dirtyP = false; ok = (await writeDoc(Sync.pRef, P, "dirtyP")) && ok; }
  if (Sync.db && Sync.dirtyR) { Sync.dirtyR = false; ok = (await writeDoc(Sync.rRef, R, "dirtyR")) && ok; }
  if (ok && Sync.db) Sync.state = "synced";
  Sync.busy = false;
  renderSyncDot();
  if (Sync.db && (Sync.dirtyP || Sync.dirtyR)) scheduleSync(ok ? 2500 : 8000 + Math.random() * 4000);
}
function wipeLocal() { clearTimeout(Sync.t); P = freshP(); R = freshR(); LS.set(KEY_P, P); LS.set(KEY_R, R); Sync.dirtyP = Sync.dirtyR = false; }
// Progress made while signed out is claimed by the first account that signs in on this device;
// progress cached for a different account is dropped, so two accounts never share a save.
async function attachRemote(owner, db, pRef, rRef) {
  const prev = LS.raw(KEY_OWNER);
  if (prev && prev !== owner) wipeLocal();
  LS.raw(KEY_OWNER, owner);
  Object.assign(Sync, { db, pRef, rRef });
  await pullRemote(true);
}
// Newer side wins, per document: adopt the account's copy, or mark ours to be pushed.
async function pullRemote(first) {
  if (!Sync.db) return;
  try {
    const [ps, rs] = await Promise.all([Sync.pRef.get(), Sync.rRef.get()]);
    let changed = false;
    const adopt = (snap, local, fresh, key, flag) => {
      if (snap.exists) {
        const d = snap.data();
        if ((d.updatedAt || 0) > (local.updatedAt || 0)) { const v = hydrate(fresh(), JSON.parse(JSON.stringify(d))); LS.set(key, v); changed = true; return v; }
        if ((local.updatedAt || 0) > (d.updatedAt || 0)) Sync[flag] = true;
      } else if (local.updatedAt) Sync[flag] = true;
      return local;
    };
    P = adopt(ps, P, freshP, KEY_P, "dirtyP");
    R = adopt(rs, R, freshR, KEY_R, "dirtyR");
    Sync.state = "synced";
    if (Sync.dirtyP || Sync.dirtyR) scheduleSync(500);
    if (changed || first) render(); else renderSyncDot();
    if (changed && !first) toast("Synced progress from your other device");
  } catch { Sync.state = "retry"; renderSyncDot(); }
}
async function initClaude(cl) {
  const [db, user] = await Promise.all([cl.use("db"), cl.use("user")]);
  if (!db || !user) return;
  const uid = await user.id();
  if (!uid) return;
  Sync.backend = "claude";
  await attachRemote("claude:" + uid, db, db.doc(`data/users/${uid}/progress`), db.doc(`data/users/${uid}/srs`));
}
async function initFirebase(cfg) {
  const base = `https://www.gstatic.com/firebasejs/${FB_VER}/`;
  const [fapp, fauth, fstore] = await Promise.all(["firebase-app.js", "firebase-auth.js", "firebase-firestore.js"].map((f) => import(base + f)));
  const app = fapp.initializeApp(cfg), auth = fauth.getAuth(app), store = fstore.getFirestore(app);
  Sync.backend = "firebase";
  Sync.fb = {
    async signIn() {
      const provider = new fauth.GoogleAuthProvider();
      try { await fauth.signInWithPopup(auth, provider); }
      catch (e) {
        const code = (e && e.code) || "";
        if (code === "auth/popup-blocked" || code === "auth/operation-not-supported-in-this-environment") await fauth.signInWithRedirect(auth, provider);
        else if (code !== "auth/popup-closed-by-user" && code !== "auth/cancelled-popup-request") toast(code === "auth/unauthorized-domain" ? "This site isn't on the Firebase sign-in allow list yet." : "Sign-in didn't work. Try again.");
      }
    },
    async signOut() { clearTimeout(Sync.t); await flushSync(); await fauth.signOut(auth); },
  };
  // users/<uid>/state/{progress,srs}; the body is stored as a JSON string so any shape round-trips intact
  const ref = (uid, id) => {
    const r = fstore.doc(store, "users", uid, "state", id);
    return {
      async get() { const s = await fstore.getDoc(r); const d = s.exists() ? JSON.parse(s.data().json || "null") : null; return { exists: !!d, data: () => d }; },
      set: (body) => fstore.setDoc(r, { json: JSON.stringify(body), updatedAt: body.updatedAt || 0 }),
    };
  };
  fauth.onAuthStateChanged(auth, async (u) => {
    if (u) {
      Sync.who = u.email || u.displayName || "your Google account";
      endGuest();
      Sync.state = "connecting"; renderGate();
      await attachRemote("firebase:" + u.uid, store, ref(u.uid, "progress"), ref(u.uid, "srs"));
    } else {
      const wasIn = !!Sync.db;
      Object.assign(Sync, { db: null, pRef: null, rRef: null, state: "signedout", who: "" });
      if (wasIn) { wipeLocal(); LS.raw(KEY_OWNER, ""); } // signing out leaves nothing of that account on this device
      render();
    }
  });
}
async function initSync() {
  const cl = window.claude;
  try {
    if (cl && typeof cl.use === "function") await initClaude(cl);
    else if (window.FIREBASE_CONFIG) await initFirebase(window.FIREBASE_CONFIG);
  } catch { Sync.state = GATED ? "fberror" : "local"; renderGate(); renderSyncDot(); }
}
document.addEventListener("visibilitychange", () => {
  if (!Sync.db) return;
  if (document.visibilityState === "hidden") { clearTimeout(Sync.t); flushSync(); }
  else if (!Sync.busy) pullRemote(false);
});

/* ---------- AI coach (sample capability) ---------- */
let COACH = null;
async function initCoach() {
  const cl = window.claude;
  if (!cl || typeof cl.use !== "function") return;
  try { COACH = await cl.use("sample"); } catch { COACH = null; }
  $$(".needs-coach").forEach((el) => (el.hidden = !COACH));
}

/* ---------- XP, levels, streak ---------- */
const TITLES = ["N00b", "Button Masher", "Save Scummer", "Tutorial Skipper", "Playtester", "Bug Hunter", "Junior Designer", "Level Designer", "Systems Designer", "Economy Wizard", "LiveOps Captain", "Senior Designer", "Lead Designer", "Creative Director", "Legendary Designer"];
const lvlOf = (xp) => Math.floor(Math.sqrt(xp / 40)) + 1;
const xpAt = (l) => 40 * (l - 1) ** 2;
const titleOf = (l) => (l <= TITLES.length ? TITLES[l - 1] : `Legendary Designer ★${l - TITLES.length}`);

function streakNow() {
  const s = P.streak;
  if (!s.last) return 0;
  const gap = todayNum() - knum(s.last);
  return gap <= 1 || gap - 1 <= s.freezes ? s.count : 0;
}
function touchStreak() {
  const s = P.streak, d = dkey();
  if (s.last === d) return;
  if (!s.last) s.count = 1;
  else {
    const gap = todayNum() - knum(s.last);
    if (gap === 1) s.count++;
    else if (gap > 1) {
      const miss = gap - 1;
      if (miss <= s.freezes) { s.freezes -= miss; s.count++; later(() => toast(`🧊 Used ${miss} streak freeze${miss > 1 ? "s" : ""}. Streak saved.`)); }
      else s.count = 1;
    }
  }
  s.last = d;
  s.best = Math.max(s.best, s.count);
  if (s.count % 7 === 0 && s.freezes < 2) { s.freezes++; later(() => toast("🧊 7 days in a row: you earned a streak freeze")); }
}
function gain(xp, why) {
  if (!xp) return;
  const before = lvlOf(P.xp);
  P.xp = Math.max(0, P.xp + xp);
  if (xp > 0) { const d = dkey(); P.days[d] = (P.days[d] || 0) + xp; touchStreak(); pruneDays(); }
  saveP();
  if (why) toast(why, `${xp > 0 ? "+" : ""}${xp} XP`);
  if (xp > 0) blip(why ? 660 : 880, 0.05);
  const after = lvlOf(P.xp);
  checkBadges();
  renderHud();
  if (after > before) later(() => levelUp(after), 250);
}
function pruneDays() {
  const keys = Object.keys(P.days);
  if (keys.length > 400) keys.sort().slice(0, keys.length - 400).forEach((k) => delete P.days[k]);
}

/* ---------- spaced repetition (SM-2 style) ---------- */
// card state: [dueDay, intervalDays, ease%, reps, lapses]
function schedulePreview(id, g) {
  const t = todayNum();
  let [, ivl, ease, reps] = R.c[id] || [t, 0, 250, 0, 0];
  if (g === 0) return 0;
  if (g === 1) return reps === 0 ? 1 : Math.max(1, Math.round(ivl * 1.2));
  if (g === 2) return reps === 0 ? 1 : reps === 1 ? 3 : Math.max(ivl + 1, Math.round((ivl * ease) / 100));
  return reps === 0 ? 3 : Math.max(ivl + 2, Math.round(((Math.max(ivl, 1) * ease) / 100) * 1.3));
}
function rateCard(id, g) {
  const t = todayNum(), isNew = !R.c[id];
  let [due, ivl, ease, reps, lapses] = R.c[id] || [t, 0, 250, 0, 0];
  const next = schedulePreview(id, g);
  if (g === 0) { reps = 0; lapses++; ease = Math.max(130, ease - 20); ivl = 0; due = t; }
  else {
    if (g === 1) ease = Math.max(130, ease - 15);
    if (g === 3) ease += 15;
    ivl = next > 4 ? Math.round(next * (0.95 + Math.random() * 0.1)) : next;
    reps++;
    due = t + ivl;
  }
  R.c[id] = [due, ivl, ease, reps, lapses];
  if (isNew) { const d = dkey(); R.newLog[d] = (R.newLog[d] || 0) + 1; for (const k of Object.keys(R.newLog)) if (todayNum() - knum(k) > 7) delete R.newLog[k]; }
  saveR();
  P.n.reviews++;
  bump("cards");
  gain(g === 0 ? 1 : 2);
}
const fmtIvl = (d) => (d <= 0 ? "now" : d === 1 ? "1d" : d < 30 ? `${d}d` : d < 365 ? `${Math.round(d / 30)}mo` : `${(d / 365).toFixed(1)}y`);
function deckIds(mod) { return (mod ? cardsOf(mod) : CARDS.filter((c) => P.started[c.mod])).map((c) => c.id); }
function newLeftToday() { return Math.max(0, (P.settings.newPerDay || 15) - (R.newLog[dkey()] || 0)); }
function srsQueue(mod) {
  const t = todayNum(), ids = deckIds(mod);
  const due = ids.filter((id) => R.c[id] && R.c[id][0] <= t).sort((a, b) => R.c[a][0] - R.c[b][0]);
  const order = routeIds();
  const fresh = ids.filter((id) => !R.c[id]).sort((a, b) => order.indexOf(CARD[a].mod) - order.indexOf(CARD[b].mod));
  return { due, fresh: fresh.slice(0, newLeftToday()), freshTotal: fresh.length };
}
const dueCount = () => { const q = srsQueue(); return q.due.length + q.fresh.length; };

/* ---------- route & progress ---------- */
function routeIds() {
  const r = (C.route && C.route[P.settings.route]) || MODS.map((m) => m.id);
  return r.filter((id) => BY[id]);
}
function levelStats(id) {
  const m = BY[id];
  const bites = bitesOf(id), seen = bites.filter((b) => P.seen[b.id]).length;
  const qs = questsOf(id), qd = qs.filter((q) => P.quests[q.id]).length;
  const qNeed = Math.max(1, Math.ceil(qs.length * 0.4));
  const best = (P.quiz[id] && P.quiz[id].best) || 0;
  const parts = {
    read: P.read[id] ? 1 : 0,
    bites: bites.length ? seen / bites.length : 0,
    boss: Math.min(1, best / 0.7),
    quests: Math.min(1, qd / qNeed),
  };
  const p = (parts.read + parts.bites + parts.boss + parts.quests) / 4;
  return { m, parts, p, seen, bitesTotal: bites.length, qd, qTotal: qs.length, qNeed, best, won: !!(P.quiz[id] && P.quiz[id].won) };
}
function frontier() { const r = routeIds(); return r.find((id) => levelStats(id).p < 0.999) || r[r.length - 1]; }
// The built schedule fixes how many levels each week holds; the levels themselves follow the chosen route,
// so Book order gets a week plan that matches its map (cut into the same week sizes as the F2P plan)
function weekPlan() {
  const sizes = ((C.schedule && C.schedule[P.settings.pace]) || []).map((w) => w.length);
  const ids = routeIds(), plan = [];
  for (let i = 0, at = 0; i < sizes.length && at < ids.length; i++) { plan.push(ids.slice(at, i === sizes.length - 1 ? ids.length : at + sizes[i])); at += sizes[i]; }
  if (!plan.length) return null;
  const start = P.startDay || dkey();
  const w = Math.max(0, Math.floor((todayNum() - knum(start)) / 7));
  return { week: Math.min(w, plan.length - 1), total: plan.length, ids: plan[Math.min(w, plan.length - 1)].filter((id) => BY[id]), overtime: w >= plan.length };
}

/* ---------- daily quests & chest ---------- */
const DAILY = [
  { id: "bites", label: "See 15 bites in the feed", target: 15, xp: 30, go: "#feed" },
  { id: "cards", label: "Review 20 flashcards", target: 20, xp: 30, go: "#cards" },
  { id: "quizRight", label: "Land 8 correct quiz answers", target: 8, xp: 30, go: "#map" },
  { id: "quests", label: "Finish 1 quest or Play Lab", target: 1, xp: 40, go: "#map" },
  { id: "reads", label: "Read a whole level and mark it read", target: 1, xp: 40, go: "#map" },
  { id: "recall", label: "Answer 5 recall questions closed-book", target: 5, xp: 30, go: "#map" },
  { id: "focus", label: "Finish one focus sprint", target: 1, xp: 30, go: "#today" },
  { id: "got", label: "Tap “Got it” on 10 bites", target: 10, xp: 25, go: "#feed" },
];
const DQ = Object.fromEntries(DAILY.map((q) => [q.id, q]));
function ensureDaily() {
  const d = dkey();
  if (P.daily && P.daily.day === d) return;
  const r = seeded("daily" + d);
  const core = ["bites", "cards"]; // always one "light" quest so the day is winnable in 5 minutes
  const first = pick(core, r);
  const rest = shuffle(DAILY.map((q) => q.id).filter((id) => id !== first), r).slice(0, 2);
  P.daily = { day: d, picks: [first, ...rest], c: {}, claimed: {}, chest: false };
}
function bump(counter, n = 1) {
  ensureDaily();
  P.daily.c[counter] = (P.daily.c[counter] || 0) + n;
  checkPlan();
  saveP();
}

/* ---------- today's run: three guided steps ---------- */
// Each day freezes a short path (warm-up, main quest, lock-in) so there is always exactly one obvious next thing
// and a clear finish line. Steps are sized in minutes, and reading is timeboxed instead of "finish the level".
const STEP_NAMES = ["Warm-up", "Main quest", "Lock it in"];
function nextAction(id) { // the next thing to do inside a level: bites first (easy start), then read, boss, quests
  const s = levelStats(id);
  if (s.seen < s.bitesTotal) return { kind: "bites", left: s.bitesTotal - s.seen };
  if (!s.parts.read) return { kind: "read" };
  if (!s.won) return { kind: "boss" };
  return { kind: "quests" };
}
function mainStep(id) {
  const m = BY[id], a = nextAction(id), name = `${m.emoji} ${m.label}`;
  if (a.kind === "bites") { const n = Math.min(10, a.left); return { kind: "bites", counter: "bites", target: n, min: Math.ceil(n / 3) + 1, title: `Swipe ${n} bites from ${name}`, why: "Bite-size intro to the level. One card at a time." }; }
  if (a.kind === "read") return { kind: "read", counter: "focus", alt: "reads", target: 1, min: 15, title: `Read ${name} for 15 minutes`, why: "The button starts a 15-minute timer. You don't have to finish the level today." };
  if (a.kind === "boss") return { kind: "boss", counter: "quizRight", target: 5, min: 6, title: `Fight ${(C.bosses[id] && C.bosses[id].name) || "the boss"}`, why: "5 correct answers clears the step. Losing still teaches you." };
  return { kind: "quests", counter: "quests", target: 1, min: 15, title: `Finish one quest from ${name}`, why: "Make something real. That's how designers learn." };
}
function buildPlan() {
  const fr = frontier(), due = srsQueue().due.length;
  const warm = due > 0
    ? { id: "warm", kind: "cards", counter: "cards", target: Math.min(due, 10), min: 4, title: `Review ${Math.min(due, 10)} flashcards`, why: "These are the ones you're about to forget. Quick win first." }
    : { id: "warm", kind: "feed", counter: "bites", target: 5, min: 2, title: "Swipe 5 bites", why: "Two minutes to get rolling. Momentum beats motivation." };
  const main = { id: "main", mod: fr, ...mainStep(fr) };
  const lock = warm.kind === "cards"
    ? { id: "lock", kind: "recall", mod: fr, counter: "recall", target: 3, min: 5, title: `Recall 3 answers from ${BY[fr].emoji} ${BY[fr].label}`, why: "Pulling ideas out of your head is what makes them stick." }
    : { id: "lock", kind: "cards", counter: "cards", target: 5, min: 3, title: "Review 5 flashcards", why: "Locks today's ideas into long-term memory." };
  return [warm, main, lock];
}
// Steps sharing a counter stack their targets, so one action never completes two steps at once
function planState() {
  ensureDaily();
  if (!P.onboarded || !routeIds().length) return null;
  if (!P.daily.plan) { P.daily.plan = buildPlan(); saveP(); }
  const used = {};
  let prevDone = true;
  const steps = P.daily.plan.map((s) => {
    const before = used[s.counter] || 0;
    used[s.counter] = before + s.target;
    const prog = Math.max(0, Math.min(s.target, (P.daily.c[s.counter] || 0) - before));
    const done = prog >= s.target || (s.alt && (P.daily.c[s.alt] || 0) > 0) || stepGoalMet(s, prevDone);
    prevDone = prevDone && done;
    return { ...s, prog, done };
  });
  const cur = steps.findIndex((s) => !s.done);
  return { steps, cur, allDone: cur < 0 };
}
// The step's real goal is already reached, e.g. the warm-up swiped the level's last unseen bites,
// or there are no cards left to review today (only once the earlier steps are done, so day one doesn't skip ahead)
function stepGoalMet(s, prevDone) {
  const m = s.mod && BY[s.mod];
  if (s.kind === "bites" && m) { const x = levelStats(s.mod); return x.bitesTotal > 0 && x.seen >= x.bitesTotal; }
  if (s.kind === "read" && m) return !!P.read[s.mod];
  if (s.kind === "boss" && m) return !!(P.quiz[s.mod] && P.quiz[s.mod].won);
  if (s.kind === "recall" && m) return m.retrieval.every((_, i) => P.recall[`${s.mod}-${i}`]);
  if (s.kind === "quests" && m) return questsOf(s.mod).every((q) => P.quests[q.id]);
  if (s.kind === "cards") return prevDone && dueCount() === 0;
  return false;
}
function checkPlan() {
  const st = planState();
  if (!st) return;
  P.daily.stepsClaimed = P.daily.stepsClaimed || {};
  st.steps.forEach((s, i) => {
    if (!s.done || P.daily.stepsClaimed[s.id]) return;
    P.daily.stepsClaimed[s.id] = true;
    const next = st.steps.find((x) => !x.done);
    later(() => { gain(20, `Step ${i + 1} done`); confetti(); stepNudge(next, st.allDone); });
  });
}
const dailyAllDone = () => { const st = planState(); return !!st && st.allDone; };
function allTruths() {
  const pool = [];
  const mods = MODS.filter((m) => P.started[m.id]);
  (mods.length ? mods : MODS).forEach((m) => m.truths.forEach((t) => pool.push({ t, m })));
  return pool;
}
function openChest() {
  ensureDaily();
  if (!dailyAllDone() || P.daily.chest) return null;
  P.daily.chest = true;
  P.n.chests++;
  const r = Math.random();
  const xp = r < 0.5 ? 25 : r < 0.8 ? 40 : r < 0.95 ? 70 : 120;
  let freeze = false;
  if (Math.random() < 0.25 && P.streak.freezes < 2) { P.streak.freezes++; freeze = true; }
  const loot = pick(allTruths());
  saveP();
  gain(xp, "Daily chest");
  confetti(40);
  return { xp, freeze, loot, jackpot: xp >= 120 };
}

/* ---------- badges ---------- */
const questsDone = (kind) => Object.keys(P.quests).filter((id) => QUEST[id] && QUEST[id].kind === kind).length;
const bossesBeaten = () => MODS.filter((m) => P.quiz[m.id] && P.quiz[m.id].won).length;
const BADGES = [
  { id: "first_bite", emo: "🍪", name: "First Bite", desc: "See your first bite", test: () => cnt(P.seen) >= 1 },
  { id: "scroll50", emo: "📱", name: "Good Doomscroll", desc: "See 50 bites", test: () => cnt(P.seen) >= 50 },
  { id: "scroll250", emo: "🌀", name: "Feed Goblin", desc: "See 250 bites", test: () => cnt(P.seen) >= 250 },
  { id: "scroll_all", emo: "🏁", name: "Seen It All", desc: "See every bite in the course", test: () => BITES.length > 0 && cnt(P.seen) >= BITES.length },
  { id: "card1", emo: "🃏", name: "Card Pulled", desc: "Review your first flashcard", test: () => P.n.reviews >= 1 },
  { id: "card100", emo: "🦈", name: "Card Shark", desc: "100 flashcard reviews", test: () => P.n.reviews >= 100 },
  { id: "card1000", emo: "🧠", name: "Big Brain", desc: "1,000 flashcard reviews", test: () => P.n.reviews >= 1000 },
  { id: "boss1", emo: "⚔️", name: "Boss Slayer", desc: "Beat your first boss", test: () => bossesBeaten() >= 1 },
  { id: "boss5", emo: "🛡️", name: "Raid Leader", desc: "Beat 5 bosses", test: () => bossesBeaten() >= 5 },
  { id: "boss_all", emo: "👑", name: "Final Boss", desc: "Beat every boss", test: () => MODS.length > 0 && bossesBeaten() >= MODS.length },
  { id: "flawless", emo: "💎", name: "Flawless Victory", desc: "Score 100% in a boss fight", test: () => Object.values(P.quiz).some((q) => q.perfect) },
  { id: "streak3", emo: "🔥", name: "On Fire", desc: "3-day streak", test: () => P.streak.best >= 3 },
  { id: "streak7", emo: "📅", name: "Week Warrior", desc: "7-day streak", test: () => P.streak.best >= 7 },
  { id: "streak30", emo: "🌋", name: "Habit Formed", desc: "30-day streak", test: () => P.streak.best >= 30 },
  { id: "read1", emo: "📖", name: "Bookworm", desc: "Read your first level", test: () => cnt(P.read) >= 1 },
  { id: "read_all", emo: "📚", name: "Read the Whole Thing", desc: "Mark every level read", test: () => MODS.length > 0 && MODS.every((m) => P.read[m.id]) },
  { id: "side1", emo: "🎯", name: "Side Hustle", desc: "Finish a side quest", test: () => questsDone("side") >= 1 },
  { id: "main1", emo: "🗡️", name: "Main Character", desc: "Finish a main quest", test: () => questsDone("main") >= 1 },
  { id: "lab1", emo: "🔬", name: "Lab Rat", desc: "Finish a Play Lab", test: () => questsDone("lab") >= 1 },
  { id: "focus1", emo: "⏱️", name: "Deep Focus", desc: "Finish a focus sprint", test: () => P.n.focus >= 1 },
  { id: "chest1", emo: "🎁", name: "Loot Goblin", desc: "Open a daily chest", test: () => P.n.chests >= 1 },
  { id: "coach1", emo: "🧑‍🏫", name: "Coachable", desc: "Get feedback from the coach", test: () => P.n.coach >= 1 },
  { id: "revive", emo: "💔", name: "Felt the Pull", desc: "Take the free revive in a boss fight", test: () => P.n.revive >= 1 },
  { id: "cap1", emo: "🧱", name: "Prototype", desc: "Finish a capstone milestone", test: () => cnt(P.cap) >= 1 },
  { id: "cap_all", emo: "🚀", name: "Shipped It", desc: "Finish the whole capstone", test: () => (C.capstone || []).length > 0 && cnt(P.cap) >= C.capstone.length },
  { id: "night", emo: "🦉", name: "Night Owl", desc: "Study between midnight and 4am", test: () => new Date().getHours() < 4 && (P.days[dkey()] || 0) > 0 },
];
function checkBadges() {
  for (const b of BADGES) {
    if (P.badges[b.id]) continue;
    let ok = false;
    try { ok = b.test(); } catch { ok = false; }
    if (!ok) continue;
    P.badges[b.id] = dkey();
    P.xp += 20;
    P.days[dkey()] = (P.days[dkey()] || 0) + 20;
    saveP();
    later(() => { toast(`${b.emo} Badge unlocked: ${b.name}`, "+20 XP"); confetti(30); }, 400);
  }
}

/* ---------- design x-ray: every hook in this app is a real F2P mechanic ---------- */
const XRAY = {
  streak: "Streak = loss aversion + a habit loop. You don't want to lose the number, so you show up. The freeze is a mercy mechanic so one bad day doesn't make you quit (the Duolingo trick). → F2P1 retention, L13 rewards.",
  daily: "Daily quests = appointment mechanic. Three small, winnable goals give you a reason to come back today and steer you toward what the designer wants you to do (here: actually learning). → F2P1, F2P2 LiveOps.",
  chest: "The chest is a variable-ratio reward: not knowing what's inside makes opening it feel better than a fixed prize. Same psychology as gacha and loot boxes. Strong stuff; use it to delight, not to drain wallets. → L13, F2P2.",
  xp: "XP bar + player level = progress feedback. Being visibly close to the next level (the goal-gradient effect) pulls you into one more action. → L13.",
  map: "The saga map is the meta layer, Candy Crush style: long-term progress made visible, with the next node glowing like Disneyland's 'weenie' that draws you forward. → L09, F2P1.",
  boss: "Hearts are lives. Losing feels worse than winning feels good, and the revive offer appears exactly when you're closest to winning: the classic F2P continue offer. → L10 death, F2P2 monetization & ethics.",
  feed: "The feed is infinite, swipeable short-form: tiny effort per item, lots of variety, a surprise every few swipes. That's why it's hard to put down. Here it's pointed at your brain's long-term memory instead of your attention span.",
  badges: "Badges = achievements & collections. Empty slots create a completion itch (the Zeigarnik effect), and each one is a mini-goal. → L13.",
};

/* ---------- fx: toasts, confetti, sound, level up ---------- */
function toast(msg, xp) {
  const box = $("#toasts");
  if (!box) return;
  const el = document.createElement("div");
  el.className = "toast";
  el.innerHTML = `<span>${esc(msg)}</span>${xp ? `<span class="x">${esc(xp)}</span>` : ""}`;
  box.appendChild(el);
  while (box.children.length > 3) box.firstChild.remove();
  setTimeout(() => el.remove(), 2600);
}
const reducedMotion = () => window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function confetti(n = 24) {
  if (reducedMotion()) return;
  const cs = getComputedStyle(document.documentElement);
  const colors = ["--gold", "--hot", "--go", "--accent"].map((v) => cs.getPropertyValue(v).trim());
  const fx = document.createElement("div");
  fx.className = "fx";
  for (let i = 0; i < n; i++) {
    const p = document.createElement("i");
    p.style.left = Math.random() * 100 + "%";
    p.style.background = colors[i % colors.length];
    p.style.animationDelay = Math.random() * 0.25 + "s";
    p.style.animationDuration = 0.9 + Math.random() * 0.8 + "s";
    fx.appendChild(p);
  }
  document.body.appendChild(fx);
  setTimeout(() => fx.remove(), 2000);
}
let audioCtx = null;
function blip(freq = 660, dur = 0.06) {
  if (!P.settings.sound) return;
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    const o = audioCtx.createOscillator(), g = audioCtx.createGain();
    o.type = "triangle"; o.frequency.value = freq;
    g.gain.setValueAtTime(0.08, audioCtx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + dur * 3);
    o.connect(g).connect(audioCtx.destination);
    o.start(); o.stop(audioCtx.currentTime + dur * 3);
  } catch { /* audio unavailable */ }
}
function levelUp(l) {
  confetti(60);
  blip(523, 0.08); later(() => blip(784, 0.1), 120);
  const el = document.createElement("div");
  el.className = "lvlup";
  el.innerHTML = `<div class="card hero pop"><div class="eyebrow">Level up</div><div class="h1">LV ${l}</div><div class="h3">${esc(titleOf(l))}</div><p class="muted small">New title unlocked. Every title on this ladder is a real job (or a real meme) in game dev.</p><button class="btn primary" data-act="close-overlay">Keep going</button></div>`;
  document.body.appendChild(el);
}

/* Level Up Speedrun — views & interactions. Depends on core.js. */

let current = "today";

/* ---------- HUD & tabs ---------- */
let focus = null; // { end, min, iv }
function renderHud() {
  const l = lvlOf(P.xp), a = xpAt(l), b = xpAt(l + 1);
  const pct = Math.max(2, Math.round(((P.xp - a) / (b - a)) * 100));
  $("#hud").innerHTML = `
    <div class="hud-lvl" title="Player level ${l}"><span><small>LV</small>${l}</span></div>
    <div class="hud-mid">
      <div class="hud-title">${esc(titleOf(l))}</div>
      <div class="xpbar" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100" aria-label="XP to next level"><i style="width:${pct}%"></i></div>
      <div class="hud-xp">${P.xp - a} / ${b - a} XP → LV ${l + 1}</div>
    </div>
    <div class="hud-chips">
      ${focus ? `<a class="chip-stat timer" id="focus-chip" href="#today" title="Focus sprint running">⏱ ${fmtClock(focus.end - Date.now())}</a>` : ""}
      <span class="chip-stat hot" title="Day streak">🔥 ${streakNow()}</span>
      <span class="sync-dot" id="sync-dot"></span>
    </div>`;
  renderSyncDot();
  const st = planState(), left = st ? st.steps.filter((x) => !x.done).length : 0;
  const tb = $('[data-tab="today"] .badge');
  if (tb) { tb.textContent = left; tb.hidden = !left; }
  const due = dueCount();
  const cb = $('[data-tab="cards"] .badge');
  if (cb) { cb.textContent = due > 99 ? "99+" : due; cb.hidden = !due; }
}
function renderSyncDot() {
  const d = $("#sync-dot");
  if (!d) return;
  const on = Sync.state === "synced";
  d.className = "sync-dot" + (on ? " on" : "");
  d.title = GUEST ? "Guest run: nothing is saved" : on ? "Progress synced to your account" : Sync.state === "retry" ? "Sync paused, retrying" : Sync.state === "signedout" ? "Not signed in: progress is saved on this device only" : "Progress saved on this device";
}
const fmtClock = (ms) => { const s = Math.max(0, Math.round(ms / 1000)); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`; };
function startFocus(min) {
  if (focus) clearInterval(focus.iv);
  focus = { end: Date.now() + min * 60000, min, iv: 0 };
  focus.iv = setInterval(() => {
    const left = focus.end - Date.now();
    const chip = $("#focus-chip");
    if (chip) chip.textContent = "⏱ " + fmtClock(left);
    if (left <= 0) {
      clearInterval(focus.iv);
      const m = focus.min;
      focus = null;
      P.n.focus++;
      bump("focus");
      gain(5 + m, `Focus sprint done (${m} min)`);
      confetti();
      blip(784, 0.12);
      renderHud();
      if (current === "today") render();
    }
  }, 1000);
  renderHud();
  toast(`⏱ ${min}-minute sprint started. Phone face down, one tab, go.`);
}
function stopFocus() { if (focus) clearInterval(focus.iv); focus = null; renderHud(); }

/* ---------- shared bits ---------- */
const stars = (n) => "★".repeat(n || 0) + "☆".repeat(Math.max(0, 5 - (n || 0)));
const xrayBtn = (k) => `<button class="xray" data-act="xray" data-k="${k}" aria-expanded="false">🩻 Design X-Ray</button><p class="xray-note" data-xray="${k}" hidden>${esc(XRAY[k])}</p>`;
const meter = (p, cls = "") => `<div class="meter ${cls}"><i style="width:${Math.round(p * 100)}%"></i></div>`;
function modChip(id) { const m = BY[id]; return m ? `<span class="pill">${m.emoji} ${esc(m.label)}</span>` : ""; }

/* ---------- TODAY ---------- */
// One screen, one job: show today's run (3 short steps), open only the current step, end with a clear "done for today".
// Everything else lives in the collapsed "More" card so the first view never turns into a wall to scroll.
function viewToday() {
  ensureDaily();
  let html = signInCard();
  if (!P.onboarded) {
    return html + `<section class="card hero pop">
      <div class="eyebrow">New game</div>
      <h1 class="h1">Level Up Speedrun</h1>
      <p>Learn F2P game design like a game. Every day you get a short run of <b>3 steps</b>. Do them, open the chest, done.</p>
      <div class="eyebrow">Pick your pace</div>
      <div class="grid2">
        <button class="btn primary tall" data-act="pace" data-pace="speedrun">⚡ Speedrun · 4 weeks<br><small>~60–90 min/day</small></button>
        <button class="btn tall" data-act="pace" data-pace="chill">🌿 Chill · 8 weeks<br><small>~30–45 min/day</small></button>
      </div>
      <p class="small muted">You can change it later in Me.</p>
    </section>`;
  }
  const st = planState();
  if (!st) return html;
  const done = st.steps.filter((s) => s.done).length;
  html += `<section class="card hero run">
    <div class="row between"><div class="eyebrow">Today's run · ${done} of 3 done</div><span class="chip-stat hot" title="Day streak">🔥 ${streakNow()}</span></div>
    ${st.allDone ? runDoneHtml() : ""}
    <ol class="path">${st.steps.map((s, i) => stepHtml(s, i, i === st.cur)).join("")}</ol>
  </section>`;
  return html + moreHtml();
}
function stepHtml(s, i, now) {
  if (s.done) return `<li class="step done"><span class="dot">✓</span><span>${esc(s.title)}</span></li>`;
  if (!now) return `<li class="step later"><span class="dot">${i + 1}</span><span>${esc(s.title)}</span></li>`;
  const sprint = s.kind === "read" && focus;
  return `<li class="step now"><span class="dot">${i + 1}</span><div class="step-body">
      <div class="eyebrow">Step ${i + 1} · ${STEP_NAMES[i]} · ~${s.min} min</div>
      <h2 class="h2">${esc(s.title)}</h2>
      <p class="muted">${esc(s.why)}</p>
      ${s.target > 1 ? `<div class="step-prog">${meter(s.prog / s.target, "gold")}<span class="mono small">${s.prog}/${s.target}</span></div>` : ""}
      ${sprint ? `<p class="small"><b>⏱ Sprint running: ${fmtClock(focus.end - Date.now())} left.</b> Keep reading until it rings.</p>` : ""}
      <button class="btn primary block step-go" data-act="step" data-id="${s.id}">${sprint ? "Back to reading" : s.prog > 0 ? "Continue" : "Start"} →</button>
    </div></li>`;
}
function runDoneHtml() {
  if (!P.daily.chest) return `<div class="chest"><div class="emo">🎁</div><b>Run complete! Your chest is ready.</b><button class="btn gold" data-act="chest">Open it</button></div>`;
  return `<div class="run-done"><div style="font-size:2.4rem">✅</div><h2 class="h2">Done for today</h2>
    <p class="muted">Your streak is safe. Rest is part of the game. Come back tomorrow for a new run.</p>
    <details class="bonus"><summary>Still got energy? Bonus round</summary>
      <div class="row"><a class="btn sm" href="#feed">📱 Swipe more bites</a><a class="btn sm" href="#cards">🃏 Extra cards</a><a class="btn sm" href="#map">🗺️ Open the map</a></div>
    </details></div>`;
}
function moreHtml() {
  const s = streakNow(), week = weekPlan();
  const last7 = [...Array(7)].map((_, i) => { const d = new Date(); d.setDate(d.getDate() - (6 - i)); return d; });
  const tod = seeded("truth" + dkey()), pool = allTruths();
  const truth = pool.length ? pool[Math.floor(tod() * pool.length)] : null;
  return `<details class="card more"><summary><span class="eyebrow">More</span><span class="small muted">Streak · this week · focus timer · truth of the day</span></summary>
    <div class="stack">
      <div class="row between"><b>🔥 Streak</b>${xrayBtn("streak")}</div>
      <div class="small muted">${s} day${s === 1 ? "" : "s"} in a row · best ${P.streak.best} · 🧊 freezes ${P.streak.freezes}/2</div>
      <div class="streak-days">${last7.map((d) => { const k = dkey(d); return `<div class="sday ${P.days[k] ? "on" : ""} ${k === dkey() ? "today" : ""}"><i>${P.days[k] ? "🔥" : ""}</i>${"SMTWTFS"[d.getDay()]}</div>`; }).join("")}</div>
    </div>
    ${week ? `<hr class="sep"><div class="stack"><b>🗺️ Week ${week.week + 1} of ${week.total} (${esc(P.settings.pace)})</b>
      ${week.ids.map((id) => { const x = levelStats(id); return `<a href="#${id}" class="quest-line" style="color:inherit;text-decoration:none"><span style="font-size:1.3rem">${x.m.emoji}</span><span><b>${esc(x.m.label)}</b> <span class="small muted">${esc(x.m.title)}</span>${meter(x.p)}</span><span class="mono small">${Math.round(x.p * 100)}%</span></a>`; }).join("")}</div>` : ""}
    <hr class="sep"><div class="stack"><b>⏱ Focus timer</b>
      ${focus ? `<p class="small"><b>Sprint running: ${fmtClock(focus.end - Date.now())} left.</b></p><button class="btn sm ghost" data-act="focus-stop">Stop sprint</button>` : `<p class="small muted">Phone face down, one thing until it rings. Bonus XP at the end.</p><div class="focus-btns">${[5, 10, 15, 25].map((m) => `<button class="btn sm" data-act="focus" data-min="${m}">${m} min</button>`).join("")}</div>`}</div>
    ${truth ? `<hr class="sep"><div class="stack"><div class="row between"><b>🎲 Truth of the day</b>${modChip(truth.m.id)}</div>
      <button class="btn ghost block" data-act="reveal" data-target="truth-today">Tap to reveal</button><p id="truth-today" class="h3" hidden>${rich(truth.t)}</p></div>` : ""}
  </details>`;
}

/* ---------- guidance: step popup, one-time tab hints ---------- */
let nudgeT = 0;
function stepNudge(next, allDone) {
  if (current === "today") { render(); return; }
  let el = $("#nudge");
  if (!el) { el = document.createElement("div"); el.id = "nudge"; el.setAttribute("role", "status"); document.body.appendChild(el); }
  el.innerHTML = allDone
    ? `<span>🎁 <b>Run complete!</b> Your chest is waiting.</span><a class="btn sm gold" href="#today">Open</a>`
    : `<span>✓ Step done. Next: <b>${esc(next.title)}</b></span><a class="btn sm primary" href="#today">Go</a>`;
  el.hidden = false;
  clearTimeout(nudgeT);
  nudgeT = setTimeout(() => (el.hidden = true), 9000);
}
const TIPS = {
  map: "This is your route, top to bottom. The glowing node is your next level.",
  cards: "Flip a card, then rate honestly how well you knew it. The app spaces reviews from that.",
  me: "Your stats, badges and settings live here. Nothing you need to do daily.",
  level: "Each level has tabs. The one marked ▶ is your next step, and it opens first.",
};
function tipHtml(key) {
  if (!TIPS[key] || (P.tips && P.tips[key])) return "";
  return `<div class="tip" data-tip="${key}"><span>💡 ${esc(TIPS[key])}</span><button class="btn sm ghost" data-act="tip-ok" data-k="${key}">Got it</button></div>`;
}

/* ---------- FEED ---------- */
const feed = { mode: "mix", items: [], shown: 0, obs: null, more: null, timers: new Map() };
function quizFor(mod) { const m = BY[mod]; return m && m.quiz.length ? pick(m.quiz) : null; }
function buildFeed(mode) {
  let list = [];
  if (mode === "saved") list = Object.keys(P.saved).map((id) => BITE[id]).filter(Boolean);
  else if (BY[mode]) { const bs = bitesOf(mode); list = [...bs.filter((b) => !P.seen[b.id]), ...bs.filter((b) => P.seen[b.id])]; }
  else {
    const route = routeIds();
    let f = route.findIndex((id) => bitesOf(id).some((b) => !P.seen[b.id]));
    if (f < 0) f = route.length;
    const unseen = route.slice(f, f + 2).flatMap((id) => bitesOf(id).filter((b) => !P.seen[b.id]));
    const seen = shuffle(route.slice(0, f + 2).flatMap((id) => bitesOf(id).filter((b) => P.seen[b.id])));
    let i = 0, j = 0;
    while ((i < unseen.length || j < seen.length) && list.length < 500) {
      for (let k = 0; k < 3 && i < unseen.length; k++) list.push(unseen[i++]);
      if (j < seen.length) list.push(seen[j++]);
    }
  }
  const out = [];
  list.forEach((b, n) => {
    out.push({ t: "bite", b });
    if ((n + 1) % 7 === 0) { const q = quizFor(b.mod); if (q) out.push({ t: "quiz", q, mod: b.mod }); }
    if ((n + 1) % 15 === 0) out.push({ t: "loot", mod: b.mod });
  });
  out.push({ t: out.length ? "end" : "empty" });
  return out;
}
function slideHtml(it, i) {
  if (it.t === "bite") {
    const b = it.b, m = BY[b.mod];
    return `<div class="slide" data-i="${i}" data-bite="${esc(b.id)}"><article class="bite">
      <div class="bite-top"><span class="pill">${m.emoji} ${esc(m.label)}</span><span class="pill accent">${esc(b.tag || "concept")}</span><span class="seen-mark" data-seen="${esc(b.id)}">${P.seen[b.id] ? "✓ seen" : ""}</span></div>
      <h2 class="bite-hook">${rich(b.hook)}</h2>
      <p class="bite-body">${rich(b.body)}</p>
      ${b.example ? `<div class="bite-box ex"><b>🎮 Example</b>${rich(b.example)}</div>` : ""}
      ${b.f2p ? `<div class="bite-box f2p"><b>📱 F2P</b>${rich(b.f2p)}</div>` : ""}
      ${b.memory ? `<div class="bite-box mem"><b>🪝 Make it stick</b>${rich(b.memory)}</div>` : ""}
      <div class="bite-actions">
        <button class="btn sm ${P.got[b.id] ? "go" : "primary"}" data-act="got" data-id="${esc(b.id)}">${P.got[b.id] ? "✓ Got it" : "👍 Got it"}</button>
        <button class="btn sm ghost" data-act="save" data-id="${esc(b.id)}">${P.saved[b.id] ? "★ Saved" : "☆ Save"}</button>
        <a class="btn sm ghost" href="#${b.mod}">↗ Level</a>
      </div>
      <div class="small muted">${esc(b.sec)}</div>
    </article></div>`;
  }
  if (it.t === "quiz") {
    const q = it.q, m = BY[it.mod], qid = `fq${i}`;
    const order = shuffle(q.options.map((_, k) => k));
    return `<div class="slide" data-i="${i}"><article class="bite special">
      <div class="bite-top"><span class="pill gold">⚡ Pop quiz</span><span class="pill">${m.emoji} ${esc(m.label)}</span></div>
      <h2 class="h3">${rich(q.q)}</h2>
      <div class="opts" id="${qid}">${order.map((k) => `<button class="opt" data-act="pop-answer" data-q="${qid}" data-k="${k}" data-ans="${q.answer}">${rich(q.options[k])}</button>`).join("")}</div>
      <p class="why" id="${qid}-why" hidden>${rich(q.why)}</p>
    </article></div>`;
  }
  if (it.t === "loot") {
    const pool = BY[it.mod] ? BY[it.mod].truths : [];
    const t = pool.length ? pick(pool) : null;
    if (!t) return `<div class="slide" data-i="${i}"></div>`;
    return `<div class="slide" data-i="${i}"><article class="bite loot">
      <div class="bite-top"><span class="pill gold">🎁 Loot drop</span><span class="pill">${BY[it.mod].emoji} Universal truth</span></div>
      <button class="btn gold" data-act="loot" data-target="loot${i}">Open (+3 XP)</button>
      <h2 class="bite-hook" id="loot${i}" hidden>${rich(t)}</h2>
    </article></div>`;
  }
  if (it.t === "empty") return `<div class="slide"><div class="bite special empty"><div style="font-size:2rem">🫙</div><b>Nothing here yet.</b><p>${feed.mode === "saved" ? "Tap ☆ Save on any bite to keep it here." : "No bites in this filter."}</p></div></div>`;
  return `<div class="slide"><div class="bite special empty"><div style="font-size:2rem">🏁</div><b>End of this run.</b><p>Lock it in: review your cards, or fight this level's boss.</p><div class="row" style="justify-content:center"><a class="btn gold" href="#cards">🃏 Cards</a><button class="btn" data-act="feed-mode" data-mode="${esc(feed.mode)}">🔁 Shuffle again</button></div></div></div>`;
}
function viewFeed() {
  const route = routeIds();
  const started = route.filter((id) => P.started[id] || id === frontier());
  return `<div class="feed-wrap">
    <div class="feed-filter" role="toolbar" aria-label="Feed filter">
      <button class="pill" data-act="feed-mode" data-mode="mix" aria-pressed="${feed.mode === "mix"}">🔀 My route</button>
      <button class="pill" data-act="feed-mode" data-mode="saved" aria-pressed="${feed.mode === "saved"}">★ Saved (${cnt(P.saved)})</button>
      ${route.map((id) => `<button class="pill" data-act="feed-mode" data-mode="${id}" aria-pressed="${feed.mode === id}">${BY[id].emoji} ${esc(BY[id].label)}${started.includes(id) ? "" : ""}</button>`).join("")}
    </div>
    <div class="feed" id="feed" tabindex="0" aria-label="Bite feed, scroll for the next card"></div>
  </div>`;
}
function mountFeed() {
  feed.items = buildFeed(feed.mode);
  feed.shown = 0;
  const el = $("#feed");
  if (feed.obs) feed.obs.disconnect();
  feed.timers.forEach((t) => clearTimeout(t));
  feed.timers.clear();
  feed.obs = new IntersectionObserver((entries) => {
    for (const e of entries) {
      const s = e.target, id = s.dataset.bite, i = +s.dataset.i;
      if (e.isIntersecting) {
        if (i >= feed.shown - 3) appendSlides(8);
        if (id && !P.seen[id] && !feed.timers.has(id)) feed.timers.set(id, setTimeout(() => { feed.timers.delete(id); markSeen(id); }, 1300));
      } else if (id && feed.timers.has(id)) { clearTimeout(feed.timers.get(id)); feed.timers.delete(id); }
    }
  }, { root: el, threshold: 0.6 });
  appendSlides(10);
  const act = $(`.feed-filter [aria-pressed="true"]`);
  if (act) act.scrollIntoView({ block: "nearest", inline: "center" });
}
function appendSlides(n) {
  const el = $("#feed");
  if (!el) return;
  const end = Math.min(feed.items.length, feed.shown + n);
  const frag = document.createElement("div");
  frag.innerHTML = feed.items.slice(feed.shown, end).map((it, k) => slideHtml(it, feed.shown + k)).join("");
  [...frag.children].forEach((s) => { el.appendChild(s); feed.obs.observe(s); });
  feed.shown = end;
}
function markSeen(id) {
  if (P.seen[id]) return;
  const b = BITE[id];
  P.seen[id] = 1;
  if (b) P.started[b.mod] = P.started[b.mod] || 1;
  bump("bites");
  gain(1);
  const mark = $(`[data-seen="${CSS.escape(id)}"]`);
  if (mark) mark.textContent = "✓ seen";
}

/* ---------- MAP ---------- */
function viewMap() {
  const ids = routeIds();
  const fr = frontier();
  const ROW = 128, X = [50, 76, 50, 24];
  const pts = ids.map((id, i) => ({ id, x: X[i % 4], y: 70 + i * ROW }));
  const H = 70 + ids.length * ROW;
  let d = pts.length ? `M ${pts[0].x} ${pts[0].y}` : "";
  for (let i = 1; i < pts.length; i++) { const a = pts[i - 1], b = pts[i]; d += ` C ${a.x} ${a.y + ROW / 2}, ${b.x} ${b.y - ROW / 2}, ${b.x} ${b.y}`; }
  const caps = C.capstone || [];
  return `
  <section class="card">
    <div class="row between"><div><div class="eyebrow">World map</div><h1 class="h2">Your route</h1></div>${xrayBtn("map")}</div>
    <div class="row"><div class="route-toggle" role="group" aria-label="Route order">
      <button data-act="route" data-route="f2p" aria-pressed="${P.settings.route === "f2p"}">📱 F2P route</button>
      <button data-act="route" data-route="book" aria-pressed="${P.settings.route === "book"}">📖 Book order</button>
    </div></div>
    <p class="small muted">${P.settings.route === "f2p" ? "Reordered so the most F2P-critical levels come first. Nothing is locked: tap any node." : "The book's own chapter order, with the two DLC levels at the end."} A node fills as you read it, see its bites, beat its boss (70%+) and finish ~40% of its quests. 👑 = boss beaten.</p>
  </section>
  <div class="saga" style="height:${H}px">
    <svg viewBox="0 0 100 ${H}" preserveAspectRatio="none" aria-hidden="true"><path d="${d}" vector-effect="non-scaling-stroke"></path></svg>
    ${pts.map((p) => { const s = levelStats(p.id), m = s.m; return `<a class="node ${p.id === fr ? "next" : ""} ${m.kind === "dlc" ? "dlc" : ""}" href="#${p.id}" style="left:${p.x}%;top:${p.y}px" aria-label="${esc(m.label)}: ${esc(m.title)}, ${Math.round(s.p * 100)}% complete">
      <span class="node-ring" style="--p:${Math.round(s.p * 100)}"><span class="node-core">${m.emoji}</span>${s.won ? `<span class="node-crown">👑</span>` : ""}</span>
      <span class="node-label">${esc(m.label)}</span><span class="node-title">${esc(m.title)}</span></a>`; }).join("")}
  </div>
  ${caps.length ? `<section class="card">
    <div class="eyebrow">Capstone · build your own F2P game</div>
    <h2 class="h2">From idea to pitch</h2>
    <p class="small muted">One game concept that grows as you learn. Each milestone uses what the linked levels taught. Post your milestones publicly (X, Reddit r/gamedesign, a Discord): public commitment is an ADHD cheat code.</p>
    ${caps.map((c, i) => `<div class="card tight" style="border-style:${P.cap[c.id] ? "solid" : "dashed"}">
      <div class="row between"><b>${i + 1}. ${esc(c.title)}</b><span class="pill gold">+${c.xp} XP</span></div>
      <p class="small">${rich(c.task)}</p>
      <p class="small muted"><b>Deliverable:</b> ${rich(c.deliverable)}</p>
      <div class="row">${(c.after || []).map((id) => (BY[id] ? `<a class="pill" href="#${id}">${BY[id].emoji} ${esc(BY[id].label)}</a>` : "")).join("")}
      <button class="btn sm ${P.cap[c.id] ? "go" : ""}" data-act="cap" data-id="${esc(c.id)}">${P.cap[c.id] ? "✓ Done" : "Mark done"}</button></div>
    </div>`).join("")}
  </section>` : ""}`;
}

/* ---------- LEVEL ---------- */
const levelTab = {};
const LTABS = [["read", "📖 Read"], ["bites", "🍪 Bites"], ["boss", "⚔️ Boss"], ["quests", "🎯 Quests"], ["cards", "🃏 Cards"], ["recall", "🧠 Recall"]];
const notesCache = {};
function notesHtml(id) {
  if (notesCache[id]) return notesCache[id];
  const md = (C.notes && C.notes[id]) || "";
  let html;
  if (window.marked && typeof window.marked.parse === "function") html = window.marked.parse(md, { gfm: true });
  else html = `<pre>${esc(md)}</pre>`;
  const box = document.createElement("div");
  box.innerHTML = html;
  box.querySelectorAll("table").forEach((t) => { const w = document.createElement("div"); w.className = "tbl"; t.replaceWith(w); w.appendChild(t); });
  box.querySelectorAll("input[type=checkbox]").forEach((c) => c.setAttribute("disabled", ""));
  box.querySelectorAll("a[href^='http']").forEach((a) => { a.target = "_blank"; a.rel = "noopener"; });
  const walker = document.createTreeWalker(box, NodeFilter.SHOW_TEXT);
  const hits = [];
  while (walker.nextNode()) { const n = walker.currentNode; if (/\b(L(?:0\d|1[0-7])|BX|F2P[12])\b/.test(n.nodeValue) && !n.parentElement.closest("a,code,pre,h1")) hits.push(n); }
  for (const n of hits) {
    const span = document.createElement("span");
    span.innerHTML = esc(n.nodeValue).replace(/\b(L(?:0\d|1[0-7])|BX|F2P[12])\b/g, (m) => (BY[m] && m !== id ? `<a class="lv" href="#${m}" title="${esc(BY[m].title)}">${m}</a>` : m));
    n.replaceWith(...span.childNodes);
  }
  notesCache[id] = box.innerHTML;
  return notesCache[id];
}
function viewLevel(id) {
  const s = levelStats(id), m = s.m;
  if (!P.started[id]) { P.started[id] = 1; saveP(); }
  const rec = nextAction(id).kind;
  const tab = levelTab[id] || rec;
  return `<section class="lvl-head">
      <div class="row between"><a class="btn sm ghost" href="#map">← Map</a><span class="pill">${m.kind === "dlc" ? "🧩 DLC · not from the book" : "📖 Book pp. " + esc(m.bookPages)}</span></div>
      <div class="row" style="align-items:flex-start;flex-wrap:nowrap"><div class="lvl-emoji">${m.emoji}</div><div style="min-width:0"><div class="eyebrow">${esc(m.label)} · ⏱ ~${m.minutes} min</div><h1 class="h2">${esc(m.title)}</h1></div></div>
      <p>${rich(m.tagline)}</p>
      <div class="small"><span class="stars" aria-label="F2P relevance ${m.f2pRelevance} of 5">${stars(m.f2pRelevance)}</span> <span class="muted">F2P relevance: ${esc(m.f2pWhy)}</span></div>
      ${meter(s.p)}
      <div class="small muted mono">${Math.round(s.p * 100)}% · read ${s.parts.read ? "✓" : "–"} · bites ${s.seen}/${s.bitesTotal} · boss ${s.won ? "👑 " : ""}${Math.round(s.best * 100)}% · quests ${s.qd}/${s.qTotal}</div>
      <div class="tabs" role="tablist">${LTABS.map(([k, label]) => `<button role="tab" aria-selected="${tab === k}" class="${k === rec ? "rec" : ""}" data-act="ltab" data-id="${id}" data-tab="${k}">${k === rec ? "▶ " : ""}${label}</button>`).join("")}</div>
    </section>
    <section id="ltab-body">${levelTabHtml(id, tab)}</section>`;
}
function levelTabHtml(id, tab) {
  const m = BY[id];
  if (tab === "read") {
    return `<div class="card">
      <div class="eyebrow">⚡ TL;DR</div>
      <ul class="stack" style="margin:0;padding-left:1.2em">${m.tldr.map((t) => `<li>${rich(t)}</li>`).join("")}</ul>
    </div>
    <article class="card"><div class="prose">${notesHtml(id)}</div></article>
    <div class="card">${P.read[id] ? `<p><b>✓ Marked as read.</b> Now lock it in: fight the boss or review its cards.</p><div class="row"><button class="btn" data-act="ltab" data-id="${id}" data-tab="boss">⚔️ Boss</button><button class="btn" data-act="ltab" data-id="${id}" data-tab="recall">🧠 Recall</button></div>` : `<p>Finished reading? Claim it.</p><button class="btn primary" data-act="mark-read" data-id="${id}">✓ Mark as read · +40 XP</button>`}</div>`;
  }
  if (tab === "bites") {
    return `<div class="row"><button class="btn primary" data-act="feed-level" data-id="${id}">📱 Swipe these in the feed</button></div>
      ${m.sections.map((sec) => `<div class="card"><div class="eyebrow">${esc(sec.title)}</div>${sec.bites.map((b) => `<div class="card tight" style="border-color:${P.seen[b.id] ? "var(--go)" : "var(--line)"}">
        <b>${rich(b.hook)}</b><p class="small">${rich(b.body)}</p>
        ${b.example ? `<p class="small muted">🎮 ${rich(b.example)}</p>` : ""}${b.f2p ? `<p class="small muted">📱 ${rich(b.f2p)}</p>` : ""}${b.memory ? `<p class="small muted">🪝 ${rich(b.memory)}</p>` : ""}
      </div>`).join("")}</div>`).join("")}`;
  }
  if (tab === "boss") return bossIntro(id);
  if (tab === "quests") {
    const group = (title, list, kind) => list.length ? `<div class="stack"><div class="eyebrow">${title}</div>${list.map((q) => questCard(q, kind)).join("")}</div>` : "";
    return `${group("🎯 Side quests · 5–15 min", m.sideQuests, "side")}${group("⚔️ Main quests · homework", m.mainQuests, "main")}${group("🔬 Play Labs · play a real game with a designer's eye", m.playLabs, "lab")}`;
  }
  if (tab === "cards") {
    const q = srsQueue(id), total = cardsOf(id).length;
    const learned = cardsOf(id).filter((c) => R.c[c.id] && R.c[c.id][1] >= 7).length;
    return `<div class="card">
      <div class="statgrid"><div class="stat"><b>${total}</b><span>cards</span></div><div class="stat"><b>${q.due.length}</b><span>due now</span></div><div class="stat"><b>${q.freshTotal}</b><span>never seen</span></div><div class="stat"><b>${learned}</b><span>solid (7d+)</span></div></div>
      <div class="row"><button class="btn primary" data-act="srs-start" data-id="${id}" ${q.due.length + q.fresh.length ? "" : "disabled"}>🃏 Review this level (${q.due.length + q.fresh.length})</button><button class="btn" data-act="cram" data-id="${id}">⚡ Cram all ${total} (no scheduling)</button></div>
      <p class="small muted">New cards per day are capped at ${P.settings.newPerDay} across all levels (change it in Me). Cram mode doesn't touch your schedule.</p>
    </div>
    <div class="card"><div class="eyebrow">Browse all cards</div>${cardsOf(id).map((c) => `<details><summary>${rich(c.q)}</summary><p class="small" style="padding:6px 0 4px">${rich(c.a)}</p></details>`).join("")}</div>`;
  }
  if (tab === "recall") {
    const draftId = `fey-${id}`;
    return `<div class="card">
      <div class="eyebrow">🔁 Retrieval check · answer in your head (or type) before revealing</div>
      ${m.retrieval.map((r, i) => { const key = `${id}-${i}`, done = P.recall[key]; return `<div class="card tight">
        <b>${i + 1}. ${rich(r.q)}</b>
        <button class="btn sm ghost" data-act="reveal" data-target="rc-${key}">Reveal answer</button>
        <div id="rc-${key}" hidden class="stack"><p class="small">${rich(r.a)}</p>
          <div class="row"><span class="small muted">How did you do?</span>${[["3", "😎 Nailed"], ["2", "🤏 Partly"], ["1", "🙈 Missed"]].map(([v, l]) => `<button class="btn sm ${done == v ? "go" : "ghost"}" data-act="recall" data-key="${key}" data-v="${v}">${l}</button>`).join("")}</div>
        </div></div>`; }).join("")}
    </div>
    <div class="card">
      <div class="eyebrow">🗣️ Feynman check</div>
      <p><b>${rich(m.feynman)}</b></p>
      <label class="lbl" for="${draftId}">Your explanation (saved on this device)</label>
      <textarea id="${draftId}" data-draft="${draftId}" placeholder="Explain it simply, like you're talking to a friend...">${esc(LS.raw("lus.draft." + draftId))}</textarea>
      <div class="row"><button class="btn primary needs-coach" ${COACH ? "" : "hidden"} data-act="coach" data-mod="${id}" data-kind="feynman" data-ta="${draftId}" data-out="out-${draftId}">🧑‍🏫 Coach me</button><button class="btn ghost" data-act="reveal" data-target="key-${id}">Compare with the key ideas</button></div>
      <div class="coach-out" id="out-${draftId}" hidden></div>
      <div id="key-${id}" hidden class="stack"><div class="eyebrow">Key ideas</div><ul style="margin:0;padding-left:1.2em">${m.tldr.map((t) => `<li class="small">${rich(t)}</li>`).join("")}</ul></div>
    </div>
    <div class="card">
      <div class="eyebrow">🏆 Universal truths & clever ideas (${m.truths.length})</div>
      <ol style="margin:0;padding-left:1.3em" class="stack">${m.truths.map((t) => `<li>${rich(t)}</li>`).join("")}</ol>
    </div>
    ${m.mnemonics.length ? `<div class="card"><div class="eyebrow">🪝 Memory hooks</div>${m.mnemonics.map((x) => `<div class="card tight"><b>${rich(x.name)}</b><p class="h3">${rich(x.device)}</p><p class="small muted">${rich(x.unpacks)}</p></div>`).join("")}</div>` : ""}`;
  }
  return "";
}
function questCard(q, kind) {
  const done = P.quests[q.id];
  const draftId = "q-" + q.id.replace(/[^A-Za-z0-9_-]/g, "");
  const title = kind === "lab" ? `${q.game} · ${q.minutes || 10} min` : q.title;
  const body = kind === "lab" ? `<p><b>Look for:</b> ${rich(q.lookFor)}</p><p><b>Answer:</b> ${rich(q.question)}</p>` : `<p>${rich(q.task)}</p>${q.deliverable ? `<p class="small"><b>Deliverable:</b> ${rich(q.deliverable)}</p>` : ""}${q.doneWhen ? `<p class="small"><b>✅ Done when:</b> ${rich(q.doneWhen)}</p>` : ""}`;
  const xp = q.xp || (kind === "lab" ? 40 : 30);
  return `<div class="card tight" style="border-color:${done ? "var(--go)" : "var(--line)"}">
    <div class="row between"><b>${esc(title)}</b><span class="row" style="gap:6px">${q.minutes ? `<span class="pill">⏱ ${q.minutes}m</span>` : ""}<span class="pill gold">+${xp} XP</span></span></div>
    ${body}
    <details><summary class="small">📝 Notes & coach feedback</summary>
      <div class="stack" style="padding-top:8px">
        <textarea id="${draftId}" data-draft="${draftId}" placeholder="Your answer, notes or links (saved on this device)">${esc(LS.raw("lus.draft." + draftId))}</textarea>
        <button class="btn sm needs-coach" ${COACH ? "" : "hidden"} data-act="coach" data-mod="${q.mod}" data-kind="quest" data-qid="${esc(q.id)}" data-ta="${draftId}" data-out="out-${draftId}">🧑‍🏫 Get feedback</button>
        <div class="coach-out" id="out-${draftId}" hidden></div>
      </div>
    </details>
    <button class="btn sm ${done ? "go" : "primary"}" data-act="quest" data-id="${esc(q.id)}">${done ? "✓ Done (tap to undo)" : "Mark done"}</button>
  </div>`;
}

/* ---------- BOSS FIGHT ---------- */
let fight = null;
function bossIntro(id) {
  const m = BY[id], best = P.quiz[id] || {};
  const boss = (C.bosses && C.bosses[id]) || { name: "The Level Boss", emoji: "👹" };
  if (fight && fight.id === id) return bossFightHtml();
  return `<div class="card hero">
    <div class="row between"><div class="eyebrow">Boss fight</div>${xrayBtn("boss")}</div>
    <div class="boss-top"><div class="boss-face">${boss.emoji}</div><div><h2 class="h2">${esc(boss.name)}</h2><p class="small muted">${m.quiz.length} questions in its moveset. You have ❤️❤️❤️. Score 70%+ to win the crown.</p></div></div>
    ${best.attempts ? `<p class="small mono">Best ${Math.round((best.best || 0) * 100)}% · ${best.attempts} attempt${best.attempts > 1 ? "s" : ""} ${best.won ? "· 👑 beaten" : ""}</p>` : ""}
    <div class="grid2"><button class="btn primary" data-act="fight" data-id="${id}" data-n="10">⚔️ Fight · 10 questions</button><button class="btn" data-act="fight" data-id="${id}" data-n="all">🔥 Full gauntlet · ${m.quiz.length}</button></div>
  </div>`;
}
function startFight(id, n) {
  const m = BY[id];
  const qs = shuffle(m.quiz).slice(0, n === "all" ? m.quiz.length : Math.min(10, m.quiz.length));
  fight = { id, qs, i: 0, right: 0, hearts: 3, revived: false, answered: false, dead: false, done: false, order: shuffle(qs[0].options.map((_, k) => k)) };
  refreshLevelTab();
}
function bossFightHtml() {
  const f = fight, m = BY[f.id];
  const boss = (C.bosses && C.bosses[f.id]) || { name: "The Level Boss", emoji: "👹" };
  const hp = 1 - f.right / f.qs.length;
  if (f.done) {
    const score = f.right / f.qs.length, won = score >= 0.7 && !f.dead;
    return `<div class="card hero pop" style="text-align:center;justify-items:center">
      <div style="font-size:3rem">${won ? "👑" : "💀"}</div>
      <h2 class="h2">${won ? "Boss defeated!" : f.dead ? "Defeated" : "So close"}</h2>
      <p class="mono">${f.right}/${f.qs.length} correct · ${Math.round(score * 100)}%</p>
      <p class="small muted">${won ? "Crown earned. The cards from this level are now in your review deck, so it sticks." : "Read the explanations, swipe this level's bites, then rematch. Failing a boss is just a tutorial with extra steps."}</p>
      <div class="row" style="justify-content:center"><button class="btn primary" data-act="fight" data-id="${f.id}" data-n="10">🔁 Rematch</button><button class="btn" data-act="fight-exit">Back</button></div>
    </div>`;
  }
  if (f.dead) {
    return `<div class="card hero pop">
      <div class="eyebrow">Out of hearts</div>
      <h2 class="h2">💔 Revive for 💎 50?</h2>
      <p>In a real F2P game, this is the moment the continue offer appears: you're invested, you're close, and losing your progress hurts more than 50 gems feels like money. That's loss aversion plus sunk cost, timed perfectly.</p>
      <p><b>Here it's free.</b> Notice how much you wanted to tap it anyway. That feeling is a design tool. Use it kindly.</p>
      <div class="row"><button class="btn gold" data-act="revive">💎 Revive (free)</button><button class="btn ghost" data-act="give-up">Give up</button></div>
    </div>`;
  }
  const q = f.qs[f.i];
  return `<div class="card hero boss-arena">
    <div class="boss-top"><div class="boss-face" id="boss-face">${boss.emoji}</div><div class="stack" style="gap:6px"><b>${esc(boss.name)}</b><div class="hp" aria-label="Boss HP"><i style="width:${Math.round(hp * 100)}%"></i></div><div class="row between small"><span class="hearts" aria-label="${f.hearts} hearts">${"❤️".repeat(f.hearts)}${"🖤".repeat(3 - f.hearts)}</span><span class="mono">${f.i + 1}/${f.qs.length}</span></div></div></div>
    <h3 class="h3">${rich(q.q)}</h3>
    <div class="opts">${f.order.map((k) => `<button class="opt" data-act="boss-answer" data-k="${k}">${rich(q.options[k])}</button>`).join("")}</div>
    <p class="why" id="boss-why" hidden></p>
    <button class="btn primary" id="boss-next" data-act="boss-next" hidden>${f.i + 1 < f.qs.length ? "Next attack →" : "Finish fight"}</button>
  </div>`;
}
function bossAnswer(btn) {
  const f = fight;
  if (!f || f.answered) return;
  f.answered = true;
  const q = f.qs[f.i], k = +btn.dataset.k, right = k === q.answer;
  $$(".boss-arena .opt").forEach((o) => { o.disabled = true; if (+o.dataset.k === q.answer) o.classList.add("right"); });
  const why = $("#boss-why");
  why.hidden = false;
  why.innerHTML = (right ? "✅ " : "❌ ") + rich(q.why);
  why.classList.toggle("bad", !right);
  if (right) {
    f.right++;
    bump("quizRight");
    gain(8);
    const face = $("#boss-face");
    if (face) { face.classList.remove("hit"); void face.offsetWidth; face.classList.add("hit"); }
    const bar = $(".boss-arena .hp > i");
    if (bar) bar.style.width = Math.round((1 - f.right / f.qs.length) * 100) + "%";
  } else {
    btn.classList.add("wrong");
    f.hearts--;
    const h = $(".boss-arena .hearts");
    if (h) h.textContent = "❤️".repeat(Math.max(0, f.hearts)) + "🖤".repeat(3 - Math.max(0, f.hearts));
  }
  $("#boss-next").hidden = false;
}
function bossNext() {
  const f = fight;
  if (!f) return;
  if (f.hearts <= 0 && !f.revived) { f.dead = true; refreshLevelTab(); return; }
  if (f.hearts <= 0 && f.revived) { endFight(true); return; }
  f.i++;
  f.answered = false;
  if (f.i >= f.qs.length) { endFight(false); return; }
  f.order = shuffle(f.qs[f.i].options.map((_, k) => k));
  refreshLevelTab();
}
function endFight(dead) {
  const f = fight;
  f.done = true;
  f.dead = dead;
  const score = f.right / f.qs.length, won = score >= 0.7 && !dead;
  const rec = P.quiz[f.id] || { best: 0, attempts: 0, won: false };
  rec.attempts++;
  rec.best = Math.max(rec.best || 0, score);
  if (won) { rec.won = true; if (score === 1 && f.qs.length >= 10) rec.perfect = true; }
  P.quiz[f.id] = rec;
  P.started[f.id] = 1;
  saveP();
  if (won) { gain(50, "Boss defeated"); confetti(50); } else renderHud();
  refreshLevelTab();
}
function refreshLevelTab() {
  const body = $("#ltab-body");
  if (body && BY[current]) body.innerHTML = levelTabHtml(current, levelTab[current] || "read");
}

/* ---------- CARDS (SRS session) ---------- */
let sess = null; // { queue: [ids], i, flipped, cram, done: n, scope }
function viewCards() {
  if (sess) return sessHtml();
  const q = srsQueue();
  const deck = deckIds().length;
  const startedMods = MODS.filter((m) => P.started[m.id]);
  const mature = Object.values(R.c).filter((c) => c[1] >= 21).length;
  return `<section class="card hero">
      <div class="eyebrow">Spaced repetition</div>
      <h1 class="h2">${q.due.length + q.fresh.length ? `${q.due.length + q.fresh.length} cards ready` : "All caught up ✨"}</h1>
      <p class="small muted">${q.due.length} due for review · ${q.fresh.length} new today (cap ${P.settings.newPerDay}/day). Cards from a level join your deck once you open it or see its bites.</p>
      <button class="btn primary block" data-act="srs-start" ${q.due.length + q.fresh.length ? "" : "disabled"}>🃏 Start review</button>
      <p class="small muted">Rate honestly: <b>Again</b> = blanked, <b>Hard</b> = got it with a struggle, <b>Good</b> = got it, <b>Easy</b> = instant. Keys: Space flips, 1–4 rate.</p>
    </section>
    <section class="statgrid">
      <div class="stat"><b>${deck}</b><span>cards in your deck</span></div>
      <div class="stat"><b>${cnt(R.c)}</b><span>cards started</span></div>
      <div class="stat"><b>${mature}</b><span>mature (21d+)</span></div>
      <div class="stat"><b>${P.n.reviews}</b><span>total reviews</span></div>
    </section>
    <section class="card"><div class="eyebrow">Levels in your deck</div>${startedMods.length ? startedMods.map((m) => { const ids = cardsOf(m.id); const s = ids.filter((c) => R.c[c.id]).length; return `<a href="#${m.id}" class="quest-line" style="color:inherit;text-decoration:none"><span>${m.emoji}</span><span><b>${esc(m.label)}</b>${meter(ids.length ? s / ids.length : 0, "accent")}</span><span class="mono small">${s}/${ids.length}</span></a>`; }).join("") : `<p class="small muted">Open a level or swipe the feed to add cards.</p>`}</section>
    <section class="card"><div class="eyebrow">Why flashcards work</div><p class="small">Pulling an answer out of your head (retrieval) strengthens memory far more than rereading. Spacing reviews right before you'd forget makes each one count. This deck schedules that for you, so 10 minutes a day keeps the whole book in your head.</p></section>`;
}
function startSession(mod, cram) {
  let queue;
  if (cram) queue = shuffle(cardsOf(mod).map((c) => c.id));
  else { const q = srsQueue(mod); queue = [...q.due]; q.fresh.forEach((id, i) => queue.splice(Math.min(queue.length, i * 3 + 2), 0, id)); }
  if (!queue.length) { toast("Nothing due here right now."); return; }
  sess = { queue, i: 0, flipped: false, cram: !!cram, n: 0, scope: mod || null };
  if (current !== "cards") location.hash = "#cards"; else render();
}
function sessHtml() {
  const s = sess;
  if (s.i >= s.queue.length) {
    return `<section class="card hero pop" style="text-align:center;justify-items:center"><div style="font-size:2.6rem">🧠</div><h2 class="h2">Session complete</h2><p class="mono">${s.n} cards ${s.cram ? "crammed" : "reviewed"}</p><p class="small muted">${s.cram ? "Cram mode doesn't schedule. Use normal review to make it stick long-term." : "Come back tomorrow: the deck will hand you exactly what's about to fade."}</p><button class="btn primary" data-act="sess-exit">Done</button></section>`;
  }
  const c = CARD[s.queue[s.i]], m = BY[c.mod];
  const left = s.queue.length - s.i;
  return `<section class="stack">
    <div class="row between"><span class="pill">${m.emoji} ${esc(m.label)}</span><span class="mono small">${left} left${s.cram ? " · cram" : ""}</span><button class="btn sm ghost" data-act="sess-exit">✕ Quit</button></div>
    <div class="fc" data-act="flip" role="button" tabindex="0" aria-label="Flashcard, press to reveal answer">
      <div class="eyebrow">${esc(c.type === "cloze" ? "fill the blank" : c.type === "why" ? "why?" : c.type === "apply" ? "apply it" : "recall")}</div>
      <div class="fc-q">${rich(c.q)}</div>
      ${s.flipped ? `<div class="fc-a">${rich(c.a)}</div>` : `<div class="small muted">Answer in your head, then tap to flip</div>`}
    </div>
    ${s.flipped ? (s.cram ? `<div class="grid2"><button class="btn" data-act="cram-next" data-v="0">🔁 Again later</button><button class="btn go" data-act="cram-next" data-v="1">✓ Knew it</button></div>` : `<div class="rate">${[["0", "Again", "hot"], ["1", "Hard", ""], ["2", "Good", "go"], ["3", "Easy", "primary"]].map(([g, l, cls]) => `<button class="btn ${cls}" data-act="rate" data-g="${g}">${l}<small>${fmtIvl(schedulePreview(c.id, +g))}</small></button>`).join("")}</div>`) : `<button class="btn primary block" data-act="flip">Show answer</button>`}
  </section>`;
}
function sessRate(g) {
  const s = sess, id = s.queue[s.i];
  if (!s.flipped) return;
  rateCard(id, g);
  if (g === 0) s.queue.splice(Math.min(s.queue.length, s.i + 4), 0, id);
  s.i++; s.n++; s.flipped = false;
  render();
}

/* ---------- ME ---------- */
function viewMe() {
  const l = lvlOf(P.xp);
  const weeks = 16, end = new Date();
  const cells = [];
  const startD = new Date(end); startD.setDate(end.getDate() - (weeks * 7 - 1) - end.getDay());
  for (let d = new Date(startD); d <= end; d.setDate(d.getDate() + 1)) { const v = P.days[dkey(d)] || 0; cells.push(`<i class="${v >= 120 ? "l3" : v >= 50 ? "l2" : v > 0 ? "l1" : ""}" title="${dkey(d)}: ${v} XP"></i>`); }
  const read = MODS.filter((m) => P.read[m.id]).length;
  const qdone = Object.keys(P.quests).filter((id) => QUEST[id]).length;
  return `<section class="card hero">
      <div class="eyebrow">Player card</div>
      <div class="row"><div class="hud-lvl" style="min-width:64px;height:64px;font-size:1.3rem"><span><small>LV</small>${l}</span></div><div><h1 class="h2">${esc(titleOf(l))}</h1><p class="mono small">${P.xp} XP total · ${xpAt(l + 1) - P.xp} to LV ${l + 1}</p></div></div>
      ${xrayBtn("xp")}
    </section>
    <section class="statgrid">
      <div class="stat"><b>${cnt(P.seen)}<small class="muted">/${BITES.length}</small></b><span>bites seen</span></div>
      <div class="stat"><b>${read}<small class="muted">/${MODS.length}</small></b><span>levels read</span></div>
      <div class="stat"><b>${bossesBeaten()}<small class="muted">/${MODS.length}</small></b><span>bosses beaten</span></div>
      <div class="stat"><b>${qdone}</b><span>quests done</span></div>
      <div class="stat"><b>${P.n.reviews}</b><span>card reviews</span></div>
      <div class="stat"><b>${P.streak.best}</b><span>best streak</span></div>
    </section>
    <section class="card"><div class="eyebrow">Last ${weeks} weeks</div><div class="heat">${cells.join("")}</div></section>
    <section class="card"><div class="row between"><div class="eyebrow">Badges · ${cnt(P.badges)}/${BADGES.length}</div>${xrayBtn("badges")}</div>
      <div class="badges">${BADGES.map((b) => `<div class="badge-tile ${P.badges[b.id] ? "got" : ""}"><span class="emo">${b.emo}</span><b>${esc(b.name)}</b><small>${esc(b.desc)}</small></div>`).join("")}</div></section>
    <section class="card"><div class="eyebrow">🩻 Design X-Ray: this app is a F2P game, on purpose</div>
      <p class="small">Every hook here is a real retention or monetization mechanic, pointed at learning instead of your wallet. Feel each one working on you; that's free field research.</p>
      ${Object.entries({ streak: "🔥 Streak", daily: "📋 Daily quests", chest: "🎁 Daily chest", xp: "📈 XP & levels", map: "🗺️ Saga map", boss: "❤️ Hearts & revive", feed: "📱 Infinite feed", badges: "🏅 Badges" }).map(([k, l]) => `<details><summary><b>${l}</b></summary><p class="small" style="padding:6px 0">${esc(XRAY[k])}</p></details>`).join("")}
    </section>
    <section class="card"><div class="eyebrow">Settings</div>
      <div class="grid2">
        <div class="stack"><label class="lbl" for="set-route">Route order</label><select id="set-route" data-set="route"><option value="f2p" ${P.settings.route === "f2p" ? "selected" : ""}>📱 F2P route (recommended)</option><option value="book" ${P.settings.route === "book" ? "selected" : ""}>📖 Book order</option></select></div>
        <div class="stack"><label class="lbl" for="set-pace">Pace</label><select id="set-pace" data-set="pace"><option value="speedrun" ${P.settings.pace === "speedrun" ? "selected" : ""}>⚡ Speedrun · 4 weeks</option><option value="chill" ${P.settings.pace === "chill" ? "selected" : ""}>🌿 Chill · 8 weeks</option></select></div>
        <div class="stack"><label class="lbl" for="set-new">New flashcards per day</label><select id="set-new" data-set="newPerDay">${[5, 10, 15, 20, 30, 50].map((n) => `<option value="${n}" ${+P.settings.newPerDay === n ? "selected" : ""}>${n}</option>`).join("")}</select></div>
        <div class="stack"><label class="lbl" for="set-sound">Sound effects</label><select id="set-sound" data-set="sound"><option value="0" ${P.settings.sound ? "" : "selected"}>Off</option><option value="1" ${P.settings.sound ? "selected" : ""}>On</option></select></div>
      </div>
      ${syncNote()}
    </section>
    <section class="card"><div class="eyebrow">Backup</div>
      <div class="row"><button class="btn sm" data-act="export">📋 Copy progress</button><button class="btn sm ghost" data-act="reveal" data-target="import-box">📥 Import…</button><button class="btn sm ghost" data-act="reveal" data-target="reset-box">🗑 Reset…</button></div>
      <div id="import-box" hidden class="stack"><label class="lbl" for="import-ta">Paste a progress backup</label><textarea id="import-ta"></textarea><button class="btn sm hot" data-act="import">Replace my progress with this backup</button></div>
      <div id="reset-box" hidden class="stack"><p class="small"><b>This wipes all XP, streaks, cards and quests.</b> Type RESET to confirm.</p><input type="text" id="reset-in" autocomplete="off"><button class="btn sm hot" data-act="reset">Wipe everything</button></div>
      <textarea id="export-ta" hidden readonly></textarea>
    </section>
    <p class="small muted" style="text-align:center">Notes are original study material based on <em>Level Up! The Guide to Great Video Game Design</em> by Scott Rogers (Wiley, 2010). Get the book; it's full of drawings this app can't show you.</p>`;
}

/* ---------- account ---------- */
function signInCard() {
  if (GUEST) return `<section class="card"><p class="gate-warn small">⚠️ <b>Guest run: nothing is saved.</b> Refreshing or closing this page wipes your XP, streak and cards. Signing in starts from your account's save, not from this run.</p>${Sync.fb ? `<div class="row"><button class="btn sm primary" data-act="signin">Sign in with Google</button></div>` : ""}</section>`;
  if (Sync.backend !== "firebase" || Sync.db || Sync.state !== "signedout") return "";
  return `<section class="card"><div class="row between"><p class="small"><b>Sign in to sync.</b> Keep your streak and cards on phone and PC.</p><button class="btn sm primary" data-act="signin">Sign in with Google</button></div></section>`;
}
function syncNote() {
  if (Sync.backend === "firebase" && Sync.db) return `<p class="small muted">🟢 Signed in as <b>${esc(Sync.who)}</b>. Progress syncs to your account on every device.</p><div class="row"><button class="btn sm ghost" data-act="signout">Sign out</button></div>`;
  if (GUEST) return `<p class="gate-warn small">⚠️ <b>Guest run: nothing is saved.</b> Sign in to keep your progress. Your account's save loads instead of this run.</p><div class="row"><button class="btn sm primary" data-act="signin">Sign in with Google</button></div>`;
  if (Sync.backend === "firebase") return `<p class="small">⚪ Progress is saved in this browser only. Sign in to keep it in your account and continue on any device.</p><div class="row"><button class="btn sm primary" data-act="signin">Sign in with Google</button></div>`;
  return `<p class="small muted">${Sync.state === "synced" ? "🟢 Progress syncs to your Claude account, so phone and desktop share it." : "⚪ Progress is saved in this browser. Open the published page while signed in to sync across devices."}</p>`;
}

function renderGate() {
  const g = $("#gate");
  if (!g) return;
  const show = GATED && !Sync.db && !GUEST;
  g.hidden = !show;
  $("#app").inert = show;
  if (!show) { g.innerHTML = ""; return; }
  const st = Sync.state;
  const guest = `<div class="gate-or small muted">or</div>
    <button class="btn block" data-act="guest" aria-describedby="guest-warn">Play as guest</button>
    <p class="gate-warn small" id="guest-warn">⚠️ <b>Guest progress is not saved.</b> Refreshing or closing the page wipes your XP, streak and cards.</p>`;
  const action = st === "fberror"
    ? `<p class="small">Couldn't reach the sign-in service. Check your connection and try again.</p><button class="btn primary block" data-act="reload">Try again</button>${guest}`
    : st === "signedout"
      ? `<button class="btn primary block gate-go" data-act="signin">Sign in with Google</button><p class="small muted">Your XP, streak and flashcards are saved to your account, so your phone and PC always show the same run. Only your study progress is stored.</p>${guest}`
      : `<p class="small muted gate-wait">${st === "connecting" ? "Loading your save…" : "Checking your account…"}</p>`;
  g.innerHTML = `<section class="card hero gate-card" role="dialog" aria-modal="true" aria-labelledby="gate-title">
    <div class="eyebrow">Level Up Speedrun</div>
    <h1 class="h1" id="gate-title">Press start</h1>
    <p>F2P mobile game design, learned like a game. Sign in to begin. Your progress follows you to every device.</p>
    ${action}
  </section>`;
}

/* ---------- router ---------- */
function render() {
  renderGate();
  const h = (location.hash || "#today").slice(1);
  current = BY[h] ? h : ["today", "feed", "map", "cards", "me"].includes(h) ? h : "today";
  const tabKey = BY[current] ? "map" : current;
  $$(".tab").forEach((t) => t.setAttribute("aria-current", t.dataset.tab === tabKey ? "page" : "false"));
  const mainEl = $("#main");
  mainEl.classList.toggle("full", current === "feed");
  if (current !== "feed" && feed.obs) { feed.obs.disconnect(); feed.obs = null; }
  if (current === "feed") { mainEl.innerHTML = viewFeed(); mountFeed(); }
  else {
    const html = current === "today" ? viewToday() : current === "map" ? viewMap() : current === "cards" ? viewCards() : current === "me" ? viewMe() : viewLevel(current);
    mainEl.innerHTML = `<div class="view" id="view">${tipHtml(BY[current] ? "level" : current)}${html}</div>`;
  }
  if (current === "feed" && !(P.tips && P.tips.feed)) { P.tips = { ...(P.tips || {}), feed: 1 }; saveP(); later(() => toast("Swipe up for the next bite. Tap 👍 when it clicks."), 400); }
  if (current === "today") { const n = $("#nudge"); if (n) n.hidden = true; }
  renderHud();
}
let lastHash = location.hash;
window.addEventListener("hashchange", () => {
  const scroll = location.hash !== lastHash;
  lastHash = location.hash;
  render();
  if (scroll) $("#main").scrollTop = 0;
});

/* ---------- actions ---------- */
const ACT = {
  "close-overlay": (t) => t.closest(".lvlup").remove(),
  xray: (t) => { const n = t.nextElementSibling; n.hidden = !n.hidden; t.setAttribute("aria-expanded", String(!n.hidden)); },
  reveal: (t) => { const el = document.getElementById(t.dataset.target); if (el) { el.hidden = !el.hidden; if (t.textContent.includes("Tap to reveal")) { t.remove(); gain(2); } } },
  pace: (t) => { P.settings.pace = t.dataset.pace; P.onboarded = true; P.startDay = P.startDay || dkey(); saveP(); gain(10, "Run started"); render(); },
  chest: () => {
    const r = openChest();
    if (!r) return;
    const el = document.createElement("div");
    el.className = "lvlup";
    el.innerHTML = `<div class="card hero pop"><div class="eyebrow">Daily chest</div><div style="font-size:3rem">${r.jackpot ? "💰" : "🎁"}</div><div class="h2">+${r.xp} XP${r.jackpot ? " · JACKPOT" : ""}</div>${r.freeze ? `<p><b>🧊 Bonus: a streak freeze!</b></p>` : ""}${r.loot ? `<div class="bite-box mem"><b>🃏 Loot card · ${esc(r.loot.m.label)}</b>${rich(r.loot.t)}</div>` : ""}<button class="btn primary" data-act="close-overlay">Nice</button></div>`;
    document.body.appendChild(el);
    render();
  },
  focus: (t) => startFocus(+t.dataset.min),
  "focus-stop": () => { stopFocus(); render(); },
  "feed-mode": (t) => { feed.mode = t.dataset.mode; render(); },
  "feed-level": (t) => { feed.mode = t.dataset.id; location.hash = "#feed"; },
  got: (t) => {
    const id = t.dataset.id;
    markSeen(id);
    if (P.got[id]) return;
    P.got[id] = 1;
    bump("got");
    gain(2);
    t.classList.replace("primary", "go");
    t.textContent = "✓ Got it";
    const slide = t.closest(".slide");
    const nxt = slide && slide.nextElementSibling;
    if (nxt) later(() => nxt.scrollIntoView({ behavior: reducedMotion() ? "auto" : "smooth" }), 250);
  },
  save: (t) => { const id = t.dataset.id; if (P.saved[id]) delete P.saved[id]; else P.saved[id] = 1; saveP(); t.textContent = P.saved[id] ? "★ Saved" : "☆ Save"; },
  "pop-answer": (t) => {
    const box = document.getElementById(t.dataset.q);
    if (box.dataset.done) return;
    box.dataset.done = "1";
    const ans = +t.dataset.ans, right = +t.dataset.k === ans;
    $$(".opt", box).forEach((o) => { o.disabled = true; if (+o.dataset.k === ans) o.classList.add("right"); });
    if (!right) t.classList.add("wrong");
    const why = document.getElementById(t.dataset.q + "-why");
    why.hidden = false;
    why.classList.toggle("bad", !right);
    if (right) { bump("quizRight"); gain(8); confetti(14); }
  },
  loot: (t) => { const el = document.getElementById(t.dataset.target); el.hidden = false; t.remove(); gain(3); blip(988, 0.06); },
  route: (t) => { P.settings.route = t.dataset.route; saveP(); render(); },
  cap: (t) => {
    const c = (C.capstone || []).find((x) => x.id === t.dataset.id);
    if (!c) return;
    if (P.cap[c.id]) { delete P.cap[c.id]; saveP(); gain(-c.xp, "Milestone undone"); }
    else { P.cap[c.id] = dkey(); saveP(); gain(c.xp, "Capstone milestone"); confetti(40); }
    render();
  },
  ltab: (t) => { levelTab[t.dataset.id] = t.dataset.tab; if (fight && t.dataset.tab !== "boss") fight = null; render(); },
  "mark-read": (t) => { const id = t.dataset.id; if (P.read[id]) return; P.read[id] = dkey(); bump("reads"); gain(40, "Level read"); confetti(); render(); },
  quest: (t) => {
    const q = QUEST[t.dataset.id];
    if (!q) return;
    const xp = q.xp || (q.kind === "lab" ? 40 : 30);
    if (P.quests[q.id]) { delete P.quests[q.id]; saveP(); gain(-xp, "Quest undone"); }
    else { P.quests[q.id] = dkey(); bump("quests"); gain(xp, q.kind === "main" ? "Main quest complete" : q.kind === "lab" ? "Play Lab complete" : "Side quest complete"); confetti(q.kind === "main" ? 50 : 20); }
    refreshLevelTab();
  },
  recall: (t) => {
    const key = t.dataset.key, v = +t.dataset.v, first = !P.recall[key];
    P.recall[key] = v;
    saveP();
    if (first) { bump("recall"); gain(v === 3 ? 5 : v === 2 ? 3 : 1); }
    $$(`[data-act="recall"][data-key="${CSS.escape(key)}"]`).forEach((b) => b.classList.toggle("go", +b.dataset.v === v));
    $$(`[data-act="recall"][data-key="${CSS.escape(key)}"]`).forEach((b) => b.classList.toggle("ghost", +b.dataset.v !== v));
  },
  fight: (t) => startFight(t.dataset.id, t.dataset.n),
  "fight-exit": () => { fight = null; refreshLevelTab(); },
  "boss-answer": (t) => bossAnswer(t),
  "boss-next": () => bossNext(),
  revive: () => { fight.revived = true; fight.dead = false; fight.hearts = 1; P.n.revive++; saveP(); checkBadges(); bossNext(); },
  "give-up": () => endFight(true),
  "srs-start": (t) => startSession(t.dataset.id || null, false),
  cram: (t) => startSession(t.dataset.id, true),
  flip: () => { if (sess && !sess.flipped) { sess.flipped = true; render(); } },
  rate: (t) => sessRate(+t.dataset.g),
  "cram-next": (t) => { const s = sess; if (!s.flipped) return; if (t.dataset.v === "0") s.queue.splice(Math.min(s.queue.length, s.i + 4), 0, s.queue[s.i]); s.i++; s.n++; s.flipped = false; render(); },
  "sess-exit": () => { const scope = sess && sess.scope; sess = null; if (scope) location.hash = "#" + scope; else render(); },
  coach: (t) => coach(t),
  export: async () => {
    const txt = JSON.stringify({ app: "level-up-speedrun", P, R });
    try { await navigator.clipboard.writeText(txt); toast("📋 Progress copied. Paste it somewhere safe."); }
    catch { const ta = $("#export-ta"); ta.hidden = false; ta.value = txt; ta.select(); toast("Select-all and copy the text box."); }
  },
  import: () => {
    try {
      const d = JSON.parse($("#import-ta").value);
      if (!d || d.app !== "level-up-speedrun") throw new Error("not a backup");
      P = hydrate(freshP(), d.P); R = hydrate(freshR(), d.R);
      saveP(); saveR();
      toast("📥 Backup restored");
      render();
    } catch { toast("That doesn't look like a Level Up Speedrun backup."); }
  },
  signin: async (t) => {
    if (!Sync.fb || t.disabled) return;
    t.disabled = true; t.textContent = "Opening Google…";
    try { await Sync.fb.signIn(); } finally { if (t.isConnected) { t.disabled = false; t.textContent = "Sign in with Google"; } }
  },
  reload: () => location.reload(),
  step: (t) => {
    const st = planState(), s = st && st.steps.find((x) => x.id === t.dataset.id);
    if (!s) return;
    if (s.kind === "feed") { feed.mode = "mix"; location.hash = "#feed"; }
    else if (s.kind === "bites") { feed.mode = s.mod; location.hash = "#feed"; }
    else if (s.kind === "cards") location.hash = "#cards";
    else { levelTab[s.mod] = s.kind; if (s.kind === "read" && !focus) startFocus(15); location.hash = "#" + s.mod; }
  },
  "tip-ok": (t) => { P.tips = { ...(P.tips || {}), [t.dataset.k]: 1 }; saveP(); t.closest(".tip")?.remove(); },
  "dsk-hide": () => { LS.raw("lus.dskHint", dkey()); renderDesktopHint(); },
  guest: () => { startGuest(); toast("Guest run started. Nothing will be saved."); },
  signout: async () => { if (!Sync.fb) return; await Sync.fb.signOut(); toast("Signed out. Your progress stays in your account."); },
  reset: () => {
    if ($("#reset-in").value.trim() !== "RESET") { toast("Type RESET (capitals) to confirm."); return; }
    P = freshP(); R = freshR(); saveP(); saveR();
    toast("Fresh save file. New game!");
    location.hash = "#today";
    render();
  },
};
document.addEventListener("click", (e) => {
  const t = e.target.closest("[data-act]");
  if (!t) return;
  const fn = ACT[t.dataset.act];
  if (fn) { e.preventDefault(); fn(t, e); }
});
document.addEventListener("change", (e) => {
  const t = e.target;
  if (t.dataset && t.dataset.set) {
    const k = t.dataset.set;
    P.settings[k] = k === "newPerDay" ? +t.value : k === "sound" ? t.value === "1" : t.value;
    if (k === "pace" && !P.startDay) P.startDay = dkey();
    saveP();
    toast("Saved");
  }
});
let draftT = 0;
document.addEventListener("input", (e) => {
  const t = e.target;
  if (t.dataset && t.dataset.draft) { clearTimeout(draftT); draftT = setTimeout(() => LS.raw("lus.draft." + t.dataset.draft, t.value), 400); }
});
document.addEventListener("keydown", (e) => {
  if (current !== "cards" || !sess || e.target.closest("textarea,input,select")) return;
  if ((e.key === " " || e.key === "Enter") && !sess.flipped) { e.preventDefault(); ACT.flip(); }
  else if (sess.flipped && !sess.cram && ["1", "2", "3", "4"].includes(e.key)) { e.preventDefault(); sessRate(+e.key - 1); }
});

/* ---------- AI coach ---------- */
async function coach(btn) {
  if (!COACH) return;
  const m = BY[btn.dataset.mod];
  const ta = document.getElementById(btn.dataset.ta), out = document.getElementById(btn.dataset.out);
  const answer = (ta && ta.value.trim()) || "";
  out.hidden = false;
  if (answer.length < 40) { out.textContent = "Write a few sentences first, then I can coach you."; return; }
  let task;
  if (btn.dataset.kind === "feynman") task = `Feynman check: ${m.feynman}`;
  else { const q = QUEST[btn.dataset.qid]; task = q.kind === "lab" ? `Play Lab in ${q.game}. Look for: ${q.lookFor}. Question: ${q.question}` : `${q.title}: ${q.task}${q.deliverable ? " Deliverable: " + q.deliverable : ""}${q.doneWhen ? " Done when: " + q.doneWhen : ""}`; }
  const prompt = `You are a sharp, warm game-design mentor. Your student has ADHD and is learning game design fast from Scott Rogers' "Level Up!", specializing in free-to-play mobile games.
Module: ${m.label} — ${m.title}
Key ideas of the module: ${m.tldr.join(" | ")}
Universal truths of the module: ${m.truths.slice(0, 20).join(" | ")}
Task given to the student: ${task}
Student's answer:
"""
${answer.slice(0, 6000)}
"""
Coach them. Be specific to what they wrote; quote their words when pointing at something. Plain text, short lines, max 170 words, exactly this shape:
SCORE: x/10
✅ Nailed: 1-3 bullets
🔧 Fix or add: 1-3 concrete bullets (name the principle from the module)
📱 F2P angle: 1 bullet
🎯 Next 5-minute step: 1 line`;
  btn.disabled = true;
  out.textContent = "Thinking…";
  try {
    const res = await COACH(prompt, { modelTier: "default", cache: false, onText: ({ text }) => { out.textContent = text; } });
    out.textContent = res.text;
    P.n.coach++;
    saveP();
    gain(10, "Coached");
  } catch (e) {
    const code = e && e.code;
    out.textContent = code === "rate_limited" ? "The coach is busy right now. Try again in a minute." : code === "not_granted" ? "Coach access is off for this page. You can allow it from the page's permissions." : "The coach couldn't answer this time. Try again later.";
    if (code === "not_granted") { COACH = null; $$(".needs-coach").forEach((el) => (el.hidden = true)); }
  } finally { btn.disabled = false; }
}

/* ---------- phone browser stuck in "Desktop site" mode ---------- */
// Chrome's Desktop site mode ignores the viewport tag and lays the page out ~980px wide, so a phone sees a shrunken desktop UI.
// A page can't turn that mode off, so detect it (touch screen, phone-sized screen, much wider layout) and say how to fix it.
function renderDesktopHint() {
  const el = $("#dsk");
  if (!el) return;
  const short = Math.min(screen.width, screen.height);
  const stuck = navigator.maxTouchPoints > 0 && short > 0 && short <= 600 && innerWidth > short * 1.6;
  el.hidden = !stuck || LS.raw("lus.dskHint") === dkey();
  if (el.hidden) return;
  el.innerHTML = `<div class="dsk-card"><b>📱 Chrome is showing the desktop version, so everything looks tiny.</b>
    <span>Tap <b>⋮</b> (top right) and untick <b>Desktop site</b>. If it comes back: Chrome Settings → Site settings → Desktop site → off.</span>
    <button class="btn sm" data-act="dsk-hide">Hide for today</button></div>`;
}
addEventListener("resize", renderDesktopHint);

/* ---------- boot ---------- */
function boot() {
  ensureDaily();
  checkBadges();
  render();
  renderDesktopHint();
  initSync();
  initCoach();
}
boot();

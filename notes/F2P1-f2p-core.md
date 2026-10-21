# 💎 DLC 1 — F2P Core: Loops, Progression & Economy
> 🧩 DLC — not from the book · ⏱️ ~150 min study (split it into 3 sittings) · 📱 F2P relevance ★★★★★ — this is the operating system every F2P mobile game runs on; the book (2010, console-first) never covers it.

**Why this DLC exists:** *Level Up!* teaches you how to make a game *fun*. It was written when games were sold once, in a box. F2P mobile games are a different beast: the game is free, so it has to earn its money **after** the player falls in love with it, for months or years. That needs four extra skills the book doesn't teach: reading **metrics**, designing **loops**, pacing **progression**, and balancing an **economy**. This pack installs them.

> 📏 **Numbers disclaimer (read once, apply everywhere):** every benchmark in this DLC is a **rough rule of thumb**. Real values swing wildly by genre, platform (iOS vs Android), country, audience, traffic source, and year. Use them to sanity-check, never as gospel. When a number matters, find current data for *your* genre.

## ⚡ TL;DR — the 30-second version
- **F2P = free to start, paid to accelerate/express/compete.** Most players never pay; a small share of payers funds the whole game. Non-payers still matter: they're the crowd, the opponents, the word-of-mouth, and the ad revenue.
- **The game makes money only if LTV > CPI** (what a player is worth over their life > what it cost to get them). Every design decision either raises LTV (retention × monetization) or lowers CPI (a hookier, more shareable game).
- **Loops are the skeleton:** a **core loop** (seconds–minutes: play → reward → upgrade → play) wrapped in a **meta loop** (days–weeks: collection, base, rank, story, seasons). Sessions are the rhythm those loops play in.
- **FTUE + progression + economy decide your retention curve.** Get to fun in seconds, teach by doing, pace unlocks, shape difficulty like a saw-tooth, and make every currency faucet flow into a sink that matters.
- **Retention mechanics are power tools:** daily rewards, streaks, timers, collections, clans, notifications. Used with respect they build habits; abused they become dark patterns that burn players out (and attract regulators).
- **Your weekly superpower = the teardown.** Play real games with a template, map their loops and economies, and write hypotheses about *why*. That's how designers level up fast.

## 🗺️ Chapter map
- [ ] 1. How F2P works as a business — funnel, spenders, ads vs IAP
- [ ] 2. The KPI dictionary — speak the language of data
- [ ] 3. Core loop, meta loop & sessions — the skeleton and the heartbeat
- [ ] 4. FTUE / onboarding — first minute, session, day, week
- [ ] 5. Progression systems — levels, upgrades, curves, saw-tooth difficulty
- [ ] 6. Economy design — currencies, faucets, sinks, pricing, energy
- [ ] 7. Retention mechanics — habits without the dark side
- [ ] 8. Player motivation models — Bartle, Quantic Foundry, SDT & friends
- [ ] 9. How to deconstruct a F2P game — your weekly teardown method

---

## 1. How F2P works as a business
**🧠 Big idea:** In a premium game the sale happens *before* the fun. In F2P the fun happens first and money is earned *after*, so the design itself is the business model. You can't bolt monetization onto a finished game any more than you can bolt a skeleton onto a jellyfish.

**📋 The details:**

**1.1 What "free-to-play" actually means**
- **Free-to-play (F2P)**: the game is free to download and play; revenue comes from optional spending and/or advertising. Also called **freemium** or **game-as-a-service (GaaS)** when it's run and updated for years.
- **The main revenue streams:**
  - **IAP (in-app purchases)**
    - **Consumables** — used up: gems, coins, boosters, extra moves, energy refills.
    - **Durables / non-consumables** — bought once, kept forever: a hero, a skin, "remove ads", a permanent second builder.
    - **Subscriptions & passes** — recurring value: **battle pass / season pass** (a track of rewards unlocked by playing during a season; a premium tier costs money), VIP memberships, monthly "daily gem" cards.
  - **Ads (IAA, in-app advertising)**
    - **Rewarded video** — the player *chooses* to watch an ad in exchange for a reward (double coins, a revive, a free chest). Opt-in, so it feels like a fair trade.
    - **Interstitials** — full-screen ads between levels/sessions. Not opt-in; good money, but can hurt retention if overused.
    - **Banners** — small persistent strips; low revenue, low annoyance, mostly in hyper-casual.
    - **Offerwalls** — "install this other app / reach level 10 in it, get 500 gems". Niche but real in some genres.
  - **Hybrid** — IAP + ads together. Today the default for most casual games: payers get IAP, non-payers still generate ad revenue.
- **Platform fees:** stores take a cut of IAP revenue (historically 15–30% depending on program and product type; rules have been changing by region, e.g. around web shops and external payment links). Ad revenue goes through ad networks/mediation platforms, which also take a share.

**1.2 The funnel (install → retain → engage → monetize)**
Think of every F2P game as a leaky funnel. Players pour in at the top, and every stage leaks.

```
   ┌──────────────────────────────────────────────┐
   │  ACQUIRE    store page, ads, virality, ASO,   │  ← cost: CPI
   │             featuring, influencers            │
   └───────────────┬──────────────────────────────┘
                   ▼
     ┌──────────────────────────────────────┐
     │ ACTIVATE   FTUE: first minute,       │  ← tutorial funnel, D1
     │            first win, first "aha"    │
     └─────────────┬────────────────────────┘
                   ▼
       ┌──────────────────────────────┐
       │ RETAIN   come back tomorrow, │      ← D7, D30
       │          next week, next mo. │
       └───────────┬──────────────────┘
                   ▼
         ┌──────────────────────┐
         │ ENGAGE  sessions,    │            ← sessions/day, stickiness
         │         social, meta │
         └─────────┬────────────┘
                   ▼
           ┌──────────────┐
           │ MONETIZE     │                  ← conversion, ARPDAU, LTV
           │ IAP + ads    │
           └──────┬───────┘
                  ▼
            ┌──────────┐
            │ REFER    │  → feeds ACQUIRE again (K-factor)
            └──────────┘
```

- This mirrors the classic startup **AARRR "pirate metrics"** (Acquisition, Activation, Retention, Referral, Revenue).
- **Order matters:** you can't monetize players who left. Retention is the multiplier on everything below it. A rule designers repeat constantly: *fix retention before monetization*.
- **The core equation:** a game is profitable to grow when **LTV > CPI** (lifetime value per player is greater than the cost per install), with margin for overhead. That's why "D1 retention" and "ARPDAU" show up in pitch meetings (→ L17).

**1.3 Spender tiers (why a few players fund everyone)**
- Typical F2P spending follows a **power law** (a long tail):
  - **The majority never pay.** Across many casual and midcore games, the share of players who *ever* pay is often in the low single digits of percent (rough rule of thumb; some genres higher, some much lower).
  - Among payers, spending is very uneven: a small fraction of payers commonly generates a large share (often around half or more) of IAP revenue. Again, a rough pattern, not a law of physics.
- **Spender tiers** (industry slang is "minnows / dolphins / whales"; prefer neutral tier names):

| Tier | Who | Typical behaviour | Design that serves them |
|---|---|---|---|
| **Non-payers** | Most players | Play free, may watch rewarded ads | Fair free path, rewarded ads, generous core fun |
| **Low spenders** | Occasional buyers | Starter pack, battle pass, ad removal | High-value low-price offers, pass |
| **Mid spenders** | Regular buyers | Pass every season + occasional packs | Monthly cards, event offers, collection completion |
| **High spenders** | Very small % | Buy to be top of leaderboards / complete everything | Deep progression, status, competitive endgame, VIP care |

- **Why non-payers are not "freeloaders":**
  1. **They're the content.** In PvP, payers need opponents; in social games they need neighbours and clanmates. Matchmaking needs **liquidity** (enough players online).
  2. **They spread the game** (word of mouth, shares, invites), lowering CPI.
  3. **They watch ads** (rewarded/interstitial revenue).
  4. **They're future payers.** Many first purchases happen days or weeks in, once players trust the game.
- **⚠️ Ethics:** high spenders are people, not wallets. Some are vulnerable (minors, problem spending). Responsible studios add spending visibility, parental controls, limits, and never design traps aimed at compulsive behaviour. Section 7 covers the line.

**1.4 What do people actually pay for?**
- **Time / convenience** — skip waits, refill energy, speed-ups ("I'd rather pay than wait").
- **Progress** — more resources to advance faster through content.
- **Power** — stronger units/cards. Most controversial when it decides PvP outcomes.
- **Expression / cosmetics** — skins, emotes, decorations. Safest ethically; works best in social/competitive games where others *see* it.
- **Access** — new heroes, content, modes, a premium pass track.
- **Status & belonging** — leaderboard rank, clan contribution, exclusive items.
- **Avoiding loss** — continues, extra moves after a fail, streak repairs. Powerful and easy to abuse.

| Model | What money buys | Pros | Risks |
|---|---|---|---|
| **Pay-to-win** | Direct, decisive power in competition | High ARPPU | Free players feel cheated → churn → kills liquidity |
| **Pay-to-progress** | Speed through content you could reach for free | Fair if free path is real | "Walls" if the free path is too slow |
| **Pay-for-cosmetics** | Looks, no power | Feels fair, community-friendly | Needs huge audience + social visibility |

**1.5 Ads vs IAP vs hybrid, by genre tier**

| Tier | Example games | Core feel | Typical session | Main revenue | Retention expectation (rough) | Depth of meta |
|---|---|---|---|---|---|---|
| **Hyper-casual** | Helix Jump, Flappy Bird-likes, "io" games | One mechanic, instantly readable | 1–5 min | Ads (interstitial + rewarded) | Low; short lifetimes | Almost none |
| **Hybrid-casual** | Archero, Survivor.io-style games | Simple control + upgrade meta | 3–15 min | Ads + IAP | Medium | Light–medium |
| **Casual** | Royal Match, Candy Crush Saga, Homescapes, Block Blast! | Easy to learn, puzzle/match/merge | 5–15 min, several/day | IAP-heavy (+ ads in many) | Medium–high; long tails | Medium (map, decor, events) |
| **Midcore** | Clash Royale, Brawl Stars, Clash of Clans, Marvel Snap, AFK Journey | Strategy/collection/PvP depth | 5–20 min, many/day | IAP (passes, offers), few ads | High for the engaged | Deep (collections, clans, ladders) |
| **Hardcore** | Genshin Impact, PUBG Mobile, Call of Duty: Mobile, 4X games | Console-like depth or heavy competition | 20–60+ min | IAP (gacha, passes, cosmetics) | Lower reach, very high engagement | Very deep |

- **Rule of thumb on economics:** the cheaper and broader the game, the more it leans on ads and volume; the deeper the game, the more it leans on IAP and long lifetimes.
- **Hyper-casual** lives or dies on **CPI** (installs must be very cheap) and quick ad monetization; it's closer to a marketing business.
- **Hybrid-casual** grew as hyper-casual got harder (ad tracking changes, rising costs): keep the simple, ad-friendly front door, add a progression meta that makes people stay and buy.

**1.6 The modern landscape in five bullets**
- **Live service:** launch is the *beginning*. Games are run with **LiveOps** (events, seasons, offers, balance patches) for years.
- **Soft launch:** games launch quietly in a few test countries to measure retention and monetization *before* spending big. Many projects are cancelled there if KPIs miss targets.
- **User acquisition (UA)** is mostly paid ads in other apps and social platforms. Your game's ad creatives are part of your design (they set expectations the FTUE must keep).
- **Privacy changes** (e.g. Apple's App Tracking Transparency, from 2021) made ad targeting harder and pushed studios toward stronger organic hooks, better retention, and hybrid monetization.
- **Regulation & platform rules** are tightening: loot-box odds disclosure, consumer-protection scrutiny of virtual currencies and manipulative purchase flows, and age-appropriate design rules in several regions.

**🎮 Game examples:**
- **Clash Royale / Brawl Stars** → midcore PvP: passes, offers and progression IAP; free players provide the opponent pool.
- **Royal Match / Candy Crush Saga** → casual puzzle: lives, boosters, extra moves after a fail, events; huge free audience.
- **Survivor.io / Archero** → hybrid-casual: simple runs, rewarded ads (revives, double rewards) plus gear/upgrade IAP.
- **Helix Jump-style hyper-casual** → interstitials between levels, almost no meta.
- **Marvel Snap** → collection-driven card game monetized through passes, bundles and cosmetics on top of a slow-but-real free path.

**📱 Apply it (designer moves):**
- Before designing a feature, ask: *which funnel stage does this serve?* A beautiful endgame raid does nothing for a game with a leaky FTUE.
- Design for **all spender tiers**: a great free experience, a cheap "yes" (starter pack/pass), and a deep sink for those who want more.
- Pick the monetization model in **pre-production**. It shapes session length, difficulty, currencies and even art (a game sold on skins needs characters worth dressing up).

**🔗 Book link:** L17 (business & pitching) assumes boxed retail sales. In F2P, your pitch must also argue *retention and LTV*.

**🪝 Make it stick:** A F2P game is a **free restaurant with a dessert menu**. Everyone eats for free; a few people order *a lot* of dessert. If the free food is bad, nobody stays long enough to see the dessert menu. If the dessert waiter is pushy, everyone leaves, including the dessert lovers.

> ⚠️ **2010 → 2026:** The book's business chapter (L17) thinks in units sold and launch weeks. Mobile F2P thinks in **cohorts, retention curves and lifetime value**, and a launch is just the start of years of LiveOps. The book's core principle still holds: know your audience and pitch the *fun* first. Metrics are how you prove the fun exists at scale.

---

## 2. The KPI dictionary every designer must speak
**🧠 Big idea:** **KPIs (key performance indicators)** are how a F2P team sees players it will never meet. A designer who can't read them is designing blindfolded. A designer who *only* reads them designs spreadsheets. You need both eyes.

**📋 The details:**

**2.1 Audience size & engagement**
- **DAU / WAU / MAU** — Daily / Weekly / Monthly **Active Users**: unique players who opened the game in that period.
- **Stickiness = DAU ÷ MAU.** "What fraction of this month's players show up on a given day?"
  - Rough rule of thumb: ~10–20% is common; 20%+ is strong; deeply social/competitive/habit games can go higher.
  - Levers: daily rewards, daily quests, timers, social obligations, events.
- **Session length** — average minutes per session. Rough: hyper-casual a few minutes; casual ~5–15; midcore/hardcore longer.
- **Sessions per day** — rough: 2–6 for many mobile games; timer- and energy-based games often push more, shorter sessions.
- **Playtime per day** = session length × sessions/day. Better than either alone.
- Levers: session caps (energy, lives, timers), content per session, appointment mechanics, load time, "one more go" pacing.

**2.2 Retention**
- **D1 / D7 / D30 retention** — % of a **cohort** (players who installed on the same day) who come back on day 1, day 7, day 30 after install.
  - **Classic (bounded) retention:** played *on* day N exactly. The standard most dashboards show.
  - **Rolling (unbounded) retention:** played on day N *or any later day*. Always higher; don't compare across definitions.
- **Rough rules of thumb** (vary hugely by genre and traffic source):
  - The old shorthand "**40 / 20 / 10**" (D1/D7/D30) is a decent "healthy casual game" sanity check.
  - Strong casual/midcore titles often beat it; hyper-casual typically shows lower D7/D30.
  - D1 below ~30% usually means a **FTUE or core-fun** problem; D7/D30 weak with OK D1 points to **mid/meta loop** problems.
- **Churn** — players who stop playing. **Churn rate** = % of active players lost per period. **Churn points** = *where* they leave (a tutorial step, level 12, the first PvP loss).
- **The retention curve** — plot retention by day: a steep drop then a flattening tail. The *height of the tail* is where long-term revenue lives.
- Levers: D1 = FTUE + core fun + first-session hook; D7 = goals, unlock pacing, early meta, first social ties; D30+ = deep meta, social, LiveOps, endgame.

**2.3 Monetization**
- **Conversion (payer conversion)** — % of players who make at least one purchase (lifetime or within a period). Rough: low single digits % lifetime is common in casual/midcore; **daily** payer share is much smaller (often well under 1% of DAU on a given day).
  - **First-purchase conversion** and **repeat purchase rate** are tracked separately — the second purchase is a big signal of trust.
- **ARPU** — Average Revenue Per User (total revenue ÷ users in a period).
- **ARPDAU** — Average Revenue Per Daily Active User = daily revenue ÷ DAU. The favourite daily health number.
  - Rough rule of thumb: hyper-casual a few US cents; casual roughly ten-ish cents to a few tens of cents; deep midcore/strategy/RPG can be much higher. Very genre- and country-dependent.
- **ARPPU** — Average Revenue Per *Paying* User. Tells you how much payers spend; often tens of dollars per month among payers in IAP-driven games (rough).
- **The handy identity:**
  - **IAP ARPDAU ≈ daily payer % × ARPPU (daily)**
  - **Ad ARPDAU ≈ ad impressions per DAU × eCPM ÷ 1000**
  - **ARPDAU = IAP ARPDAU + Ad ARPDAU**
- **eCPM** — effective revenue per 1,000 ad impressions. Depends on country, ad format (rewarded usually highest), and season.
- Levers: offer design, pricing, store UX, pass value, rewarded-ad placements, sinks that matter, segmentation, events.

**2.4 Growth & unit economics**
- **CPI** — Cost Per Install from paid UA. **eCPI** — effective CPI blending paid + organic installs.
  - Rough rule of thumb: very low for hyper-casual (they need it), higher for casual, much higher for midcore/strategy/RPG in rich markets like the US; iOS generally above Android. Varies by year and auction pressure.
- **LTV (Lifetime Value)** — total expected revenue per player over their life in the game.
  - **Back-of-napkin:** **LTV ≈ ARPDAU × average lifetime active days.**
  - **Average lifetime days ≈ 1 + sum of daily retention over the horizon** (area under the retention curve).
  - Teams also track **cohort LTV at D7/D30/D90/D180/D365** and use models to **predict** long-term LTV from early data.
- **ROAS** — Return On Ad Spend = cohort revenue ÷ UA spend for that cohort (e.g. "D7 ROAS 15%" = the cohort has earned back 15% of what it cost in 7 days).
- **Payback period** — days until a cohort's revenue covers its UA cost (ROAS = 100%). Shorter is safer; many teams aim for months, not years (rough).
- **K-factor (virality)** — new players each player brings in (invites × conversion). K > 1 means self-sustaining growth (rare in games); any organic lift lowers eCPI.

**2.5 Worked example (hypothetical numbers)**
A hypothetical casual game, 180-day horizon:
- Day 0 = 1.0 day (everyone plays install day).
- Days 1–6: retention averages ~25% → 6 × 0.25 = **1.5 days**
- Days 7–29: averages ~9% → 23 × 0.09 ≈ **2.1 days**
- Days 30–179: averages ~3% → 150 × 0.03 = **4.5 days**
- **Average lifetime ≈ 1 + 1.5 + 2.1 + 4.5 ≈ 9.1 active days**
- ARPDAU = $0.12 → **LTV ≈ 9.1 × $0.12 ≈ $1.09**
- If CPI is $1.50, every paid install **loses ~$0.40**. Options: raise retention (more days), raise ARPDAU (better offers/ads/sinks), lower CPI (better creatives, stronger hook, more organic/viral). Notice that **design moves all three.**

**2.6 The KPI cheat sheet — what moves what**

| KPI | Question it answers | Design levers that move it |
|---|---|---|
| Tutorial funnel / FTUE completion | Do new players get through the door? | Time to fun, fewer popups, teach by doing, skip options |
| D1 retention | Was the first session worth coming back for? | Core fun, first win, clear next goal, open loops (timers, chests) |
| D7 retention | Is there a reason to keep going this week? | Unlock pacing, goals, early meta, first social link, events |
| D30+ retention | Is there a long-term life here? | Deep meta, collections, clans, PvP ladders, LiveOps, endgame |
| Stickiness (DAU/MAU) | Is it a daily habit? | Daily rewards/quests, streaks, timers, appointments |
| Sessions/day | How often do they return today? | Timers, energy regen, notifications, short-session design |
| Session length | How long per visit? | Content per session, caps, "one more go" pacing |
| Conversion | Will they pay at all? | Starter pack, first-purchase bonus, pass, clear value, trust |
| ARPPU | How much do payers spend? | Deep sinks, tiered offers, collections, competitive endgame |
| ARPDAU | Daily earning power | All of the above + rewarded ads + events |
| LTV | Total worth of a player | Retention × monetization over time |
| CPI | Cost to get a player | Hook clarity, store page, ad creatives that match the game, virality |
| ROAS / payback | Is growth spending profitable? | LTV vs CPI; early monetization moments (without burning retention) |
| Churn points | Where exactly do they leave? | Difficulty spikes, walls, confusing features, broken pacing |

**2.7 Metric hygiene (how not to fool yourself)**
- **Always read KPIs by cohort** (install date, country, platform, traffic source). Blended averages hide everything.
- **Goodhart's law:** when a measure becomes a target, it stops being a good measure. Cranking interstitials can spike ARPDAU this week and crater retention next month.
- **Vanity metrics** (total downloads, total registered users) feel good and predict little. Watch retention and LTV instead.
- **A/B tests:** show variant A to one random group and variant B to another, compare KPIs, ship the winner. Test one meaningful change at a time; wait for enough players and enough days (some effects show only at D7/D30).
- **Numbers say *what*, playtests say *why*.** Pair dashboards with playtests and player interviews.

**🎮 Game examples:**
- A typical **match-3** watches its **level funnel** (% of players reaching each level) to find churn points; one level with an outsized drop is a prime candidate for retuning.
- A typical **PvP game** watches **matchmaking times** and **win-rate by spend tier** to make sure free players still have a good time (they are the liquidity).
- A typical **hybrid-casual** game tunes **rewarded ads per DAU** and interstitial frequency against D7 retention.

**📱 Apply it (designer moves):**
- For every feature you pitch, write: **"This should move ___ because ___; we'll know by ___."** That one sentence makes you sound like a senior designer.
- Learn to read a **retention curve** and a **level funnel** chart. They tell you where to aim your design effort.

**🔗 Book link:** L09's pacing and L11/L13's difficulty and rewards were designed by feel in 2010; in F2P, the level funnel and churn points tell you whether the feel landed.

**🪝 Make it stick:** **"R × E × M = LTV"** — **R**etention × **E**ngagement × **M**onetization. It's a *multiplication*: if R is zero, the fanciest shop in the world earns zero. Picture a gorgeous dessert menu in a restaurant with no customers.

> ⚠️ **2010 → 2026:** In 2010 console designers got feedback from reviews and sales charts months after launch. Today you get *daily* data on every level of your game. The book's love of playtesting still holds: data tells you *where* players struggle, a playtest tells you *why*.

---

## 3. Core loop, meta loop, and session design
**🧠 Big idea:** Every F2P game is a set of **nested loops**. The **core loop** is what your thumbs do over and over (seconds to minutes). The **meta loop** is *why* you keep doing it (days to months). **Sessions** are the rhythm: how long one visit lasts and what pulls you back for the next.

**📋 The details:**

**3.1 Anatomy of a core loop**
```
          ┌───────────────┐
          │    ACTION     │  play a level / battle / run / harvest
          └───────┬───────┘
                  ▼
          ┌───────────────┐
          │    REWARD     │  coins, cards, XP, stars, loot
          └───────┬───────┘
                  ▼
          ┌───────────────┐
          │    INVEST     │  upgrade, unlock, build, equip, decorate
          └───────┬───────┘
                  ▼
          ┌───────────────┐
          │  NEW POWER /  │  stronger, more options, new content opens
          │ NEW CHALLENGE │
          └───────┬───────┘
                  └──────────► back to ACTION (feels different this time!)
```
- A good loop **changes as it repeats**: the investment step makes the next action feel different (stronger deck, new crop, new area). If nothing changes, it's just a grind.
- You should be able to say your core loop in **one sentence**: "Battle to earn cards, upgrade cards to battle better."
- **Terminology:** older F2P talk called this a **compulsion loop**. Many designers now avoid the term because "compulsion" implies manipulating players; **core loop** is the neutral standard.
- A related model is the **Hook model** (Nir Eyal): **trigger → action → variable reward → investment**. It describes how habits form. It's a tool; whether it builds a healthy habit or an unhealthy one is a design (and ethics) choice.

**3.2 The three layers of loops**

| Layer | Timescale | What it is | Typical F2P examples |
|---|---|---|---|
| **Core loop** | Seconds–minutes | The repeated play action + immediate reward | Match tiles, fight a battle, do a run, harvest crops |
| **Mid loop (session/daily loop)** | One session to one day | Goals that string several core loops together | Daily quests, chest unlocks, event milestones, energy cycle, pass missions |
| **Meta loop** | Days–months | Long-term progression and identity | Collection completion, base/town level, trophy rank, story/renovation, seasons, clan status |
| **LiveOps layer** (on top) | Weeks, recurring | Fresh, time-limited reasons to play | Limited events, seasonal passes, tournaments, new heroes |

- **Each layer feeds the next.** The core loop produces resources the meta consumes; the meta changes how the core plays (new cards → new strategies).
- **Retention mapping:** core loop quality drives D1; the mid loop drives D7; meta + social + LiveOps drive D30 and beyond.

**3.3 Real loops, drawn** (simplified; games change across updates, so verify the current version when you play)

**Clash Royale** (real-time 1v1 card battler, short matches):
```
   ┌──► BATTLE (short 1v1 match: spend elixir, place cards, take towers)
   │         │ win
   │         ▼
   │    TROPHIES ↑  +  REWARDS (cards, gold; historically timed chests
   │         │              that unlocked over hours; the reward system
   │         │              has been reworked across updates)
   │         ▼
   │    UPGRADE CARDS (needs card copies + gold)
   │         │
   │         ▼
   └──── TUNE YOUR 8-CARD DECK
META: trophy road & arenas (unlock new cards), clans (request/donate
      cards, clan wars), season pass, ranked play for the top end.
```
- Why it works: matches are short (mobile-friendly), outcomes feel skill-based, and upgrades + collection give a long meta. Timed rewards historically capped how much progress one session could produce (a natural session cap).

**Candy Crush Saga** (match-3 on a saga map):
```
   SAGA MAP ──► next level ──► PLAY (limited moves, a goal to hit)
                                  │
                   ┌──────────────┴──────────────┐
                  WIN                           FAIL
          stars + map progress             lose a life
                   │                  retry (if lives left), buy extra moves,
                   │                  use a booster, or wait for lives to refill
                   ▼                               │
            next level on map ◄────────────────────┘
META: episodes along the map, recurring events and competitions.
```
- Why it works: instant readability, a huge library of hand-made levels, lives as a soft session cap, and the fail state as a (careful) monetization moment.

**Royal Match / Homescapes** (match-3 + decoration meta):
```
   MATCH-3 LEVEL ──win──► earn STAR(S) ──► spend stars on AREA TASKS
         ▲                                (renovate / decorate a room or castle area)
         │                                          │
         └────── new area / story beat unlocks ◄────┘
```
- Why it works: the meta gives *meaning* to puzzle wins (a visible place you're building + light story). Same core genre as Candy Crush, different "why".

**Hay Day** (farming sim):
```
   PLANT crops ──► wait (timer) ──► HARVEST ──► PRODUCE goods in machines
       ▲                            (bakery, feed mill, dairy…; feed → animals → animal goods)
       │                                                 │
       │                                                 ▼
       │                                   FULFILL ORDERS (truck orders, boat)
       │                                   or SELL in your roadside shop
       │                                                 │
       └── unlock new crops & machines ◄── COINS + XP → LEVEL UP
META: expand & decorate the farm, neighborhood (guild) + derby events,
      trading with other players.
```
- Why it works: production chains create satisfying planning puzzles; timers create natural **appointments** ("come back when the bread's done"); trading makes other players part of your economy.

**Survivor.io** (hybrid-casual "survivor-like"):
```
   START A RUN (energy cost) ──► move with one thumb, weapons auto-attack
         ▲                              │
         │              kill waves → XP gems → level up mid-run →
         │              choose one of several offered skills (build a combo)
         │                              │
         │                 survive / beat the boss → REWARDS
         │                 (gold, gear, upgrade materials)
         │                              ▼
         └──────── UPGRADE GEAR & STATS (permanent power)
META: chapter progression, equipment rarity/evolution, events, passes.
```
- Why it works: two loops in one. The **in-run loop** (level up → pick a skill) is a mini roguelite with fresh choices every run; the **out-of-run loop** (permanent upgrades) gives long-term progress. Rewarded ads slot naturally into revives and doubled rewards.

**Monopoly GO!** (social board / casino-lite):
```
   ROLL DICE (dice refill over time) ──► land on tiles → cash, bonuses;
        ▲                                special tiles trigger minigames that
        │                                interact with friends' boards
        │                                         │
        └── NEW BOARD ◄── complete board ◄── BUILD LANDMARKS with cash
META: sticker albums (collect, trade with friends), a dense calendar of
      events & tournaments with milestone rewards.
```
- Why it works: almost no skill barrier, a strong social layer, and a busy event calendar that always gives "a reason to roll today".

**3.4 Loop health checks (run these on any design)**
1. **The no-reward test:** strip away rewards. Is the core action still satisfying? If the only fun is the payout, the loop is fragile.
2. **Every reward has a home:** each thing the loop gives must be spendable on something the player wants (→ §6 sinks).
3. **Loops interlock:** the core feeds the meta, the meta changes the core.
4. **One-sentence clarity:** if you can't say it in one sentence, players won't feel it.
5. **Variety on repeat:** new levels, enemies, opponents, choices, modes. Same action, new context.
6. **A reason to stay + a reason to return:** a "one more go" pull *and* an open loop for later.

**3.5 Session design**
- **Time to fun:** seconds from tapping the icon to meaningful play. Long loads and a stack of popups (news, offer, daily reward, event, another offer…) at every launch are a classic retention leak.
- **The session arc:**
  1. **Arrive & collect** — claim timer rewards and the daily reward, see what changed (a quick win, 10–30 s).
  2. **Core play** — the main content (levels, battles, runs).
  3. **Invest & set up** — spend currency, start timers, queue builds, choose the next goal.
  4. **Exit hook** — something pending: "chest ready in 3h", "energy full at 6 pm", "event ends tomorrow".
- **Natural stopping points** — end of a level/match/run, energy spent, all timers running. Good for the player's day, and the polite place for an interstitial or an offer.
- **Session caps** (energy, lives, timers, attempts) vs **uncapped sessions** (endless runners, block puzzles):
  - Caps pace content consumption, create appointments, and give monetization moments; too tight = frustration.
  - Uncapped games need highly replayable mechanics and usually lean on ads.
- **Open loops & the Zeigarnik effect:** people remember unfinished tasks better than finished ones. A pending timer or a half-complete collection pulls players back. Use it, but also give **closure** ("all done for today!").
- **Session types:** **check-in sessions** (1–2 min: collect, set timers) and **deep sessions** (15+ min: event push, PvP climb). Great games serve both.
- **Mobile reality:** people play on buses, in queues, during TV breaks. So: **interruption-friendly** (autosave, pause, instant resume), **one-thumb portrait** play where possible, short rounds, offline tolerance, low battery/data use.

**🎮 Game examples:** (see the diagrams) Clash Royale (short PvP + collection meta), Candy Crush Saga (levels + lives cap), Royal Match/Homescapes (puzzle + decoration meta), Hay Day (production chains + timers), Survivor.io (in-run + out-of-run loops), Monopoly GO! (dice regen + events + social).

**📱 Apply it (designer moves):**
- Draw the loop **before** you design features. Every new feature should plug into a loop arrow; if it doesn't, it's a feature looking for a reason to exist.
- Design the session on a timeline: "0:00–0:30 collect, 0:30–6:00 play, 6:00–7:00 set up, exit hook = X".

**🔗 Book link:** L12 (mechanics) gives you the verbs inside the core loop; L09 (level design/pacing) shapes the content each loop runs through; L13 (rewards/power-ups) is the reward step; L10 (combat) and L11 (enemies) are the action step for battle-based games.

**🪝 Make it stick:** **Core loop = the hamster wheel. Meta loop = the reason the hamster cares.** Without the meta, it's just running. Without the wheel, there's nothing to do. Bonus image: the hamster checks its phone because its sunflower seeds finish baking in 3 hours (the session hook).

> ⚠️ **2010 → 2026:** Console games of 2010 were built around a campaign you finish. F2P games are built around loops you *repeat*, with a meta that never quite ends. The book's principles of pacing and variety (L09) still matter, but you apply them to repetitions and seasons instead of one linear story.

---

## 4. FTUE / onboarding
**🧠 Big idea:** The **FTUE (First-Time User Experience)** is the most important few minutes of your game, because it's where the most players leave. Its job: deliver fun fast, teach the core loop by doing, give a first win, and plant a reason to come back.

**📋 The details:**

**4.1 The onboarding timeline**

| Window | Player's silent question | Your goals | Watch these KPIs |
|---|---|---|---|
| **First 60 seconds** | "Is this the game from the ad? Is it fun?" | Instant play, show the fantasy, a first satisfying action | Load time, time to first tap, drop-off on steps 1–3 |
| **First 5 minutes** | "Do I get it?" | One full core loop (action → reward → upgrade → action); a first win | Tutorial funnel steps |
| **First session (~5–15 min)** | "Where is this going?" | First glimpse of the meta, a clear next goal, an **exit hook** | First-session length, tutorial completion |
| **First day (D0 → D1)** | "Why come back tomorrow?" | Reasons to return: a timer, a daily reward preview, a feature unlocking tomorrow | D1 retention |
| **First week** | "Is there more?" | Drip-feed features (clans, PvP, events) one at a time; first social tie; first purchase only if it's great value | D3/D7, feature adoption, first-purchase timing |

**4.2 The first 60 seconds**
- **Play first, admin later:** no account creation, no long logo sequence, no wall of text. Guest play first; cloud-save/login prompts later.
- **Show the fantasy:** give a taste of the cool end state (a powerful hero, a big combo, a glimpse of the finished mansion), then rewind to "you start here".
- **Keep the ad's promise:** many players arrive from an ad. If the first minute doesn't look like what was promised, they leave (and store ratings suffer).
- **Make the first action juicy:** big feedback, sound, particles, a clear "you did that!" (→ L15 sound, L08 HUD).

**4.3 The first session**
- **Complete one full loop** so the player has felt every step: play → reward → spend → stronger.
- **Give a first victory** (scripted or very easy). Competence early = motivation later (→ §8 SDT).
- **Introduce one meta element** (the map, the base, the collection) and show the next goal.
- **End with an exit hook:** a chest ticking, crops growing, a feature that "unlocks at level 5", an event starting tomorrow.

**4.4 The first day and the first week**
- **The D0 → D1 bridge:** tell players *what* they get if they come back (daily reward calendar preview, finished timer, a new mode).
- **Notification permission:** ask *after* the player has seen value, ideally with a friendly pre-prompt explaining the benefit ("Want a ping when your crops are ready?"). Asking at launch wastes your one good chance (on iOS the system prompt is opt-in, and a "no" is hard to undo).
- **Feature drip (progressive unlocks):** clans, PvP, events, crafting, shop tabs: unlock them across the first days so each gets its own spotlight moment. Dumping every system on day 0 overwhelms; hiding the best feature until day 10 loses everyone who never gets there.
- **First purchase:** show the store and a strong-value **starter pack** after the player has had real fun and progress. Never block the tutorial behind a purchase.

**4.5 Teach by doing (the techniques)**
- **One new thing at a time.** Introduce safely → let them practice → add a twist → test it. Then combine with earlier skills.
- **Show, don't tell:** a highlighted tile and a pointing **tutorial hand** beat a paragraph. Text: a few words max per screen.
- **Progressive disclosure:** hide UI buttons until their feature unlocks. A clean early HUD lowers cognitive load (→ L08).
- **Contextual teaching:** teach a mechanic the first time it matters (the first locked tile, the first boss), not in a lecture up front.
- **Forced vs soft tutorial:** forced steps (only one button active) guarantee learning but feel restrictive; keep them few and switch to soft guidance (hints, highlights) quickly.
- **Let level design teach:** early levels are built so the right move is obvious and the "aha" happens naturally (→ L09).
- **Safe early failure (or none):** early levels are tuned so players win; the first real failure should feel fair and arrive after they understand the rules.
- **Generous first rewards:** many gacha games guarantee a strong unit on an early pull so new players feel the fantasy. Effective; just avoid a "generosity cliff" where rewards suddenly dry up after the tutorial.
- **Skippable story:** short, punchy, skippable. Long unskippable intros are FTUE killers (→ L16 cutscenes).
- **Respect veterans:** genre veterans want to move fast; let them skip or speed through.

**4.6 "Leave the training level for last" (→ L09)**
- The book's level-design advice: build the tutorial/first level **last**, because only then do you truly know your mechanics and what needs teaching.
- **F2P translation:** stub the FTUE early so you can playtest, but expect to **rebuild it several times**: after the vertical slice, before soft launch, and again on soft-launch data. The FTUE is usually the most-iterated part of a F2P game and one of the highest-leverage things to improve, because every single player passes through it.

**4.7 FTUE anti-patterns (the hall of shame)**
- Walls of text and modal popups stacked on top of each other.
- Long unskippable cutscenes or logos before any play.
- Asking for notifications, ratings, tracking permission, or a login before showing value.
- Teaching the meta (clans! crafting! shop!) before the core loop is fun.
- A tutorial that's 20+ minutes of forced taps.
- An offer popup in the first minute.
- A difficulty or reward cliff right after the tutorial ends (the training wheels fall off *and* the road becomes a wall).
- An FTUE that doesn't match the ad creative.

**4.8 How to measure it**
- Log **every tutorial step** as an analytics event → build a **tutorial funnel**. Steps with unusually large drops are your fix list.
- Track **time to complete**, **first-session length**, **% reaching the first "aha" moment** (first upgrade, first win), and **D1**.
- **Watch real people play** with no help; a handful of strangers will surface most big problems. The funnel says *where*, the playtest says *why*.

**🎮 Game examples:**
- **Royal Match / Homescapes** → a quick win, then immediately spending stars on the first decoration task: the player feels the whole loop within minutes.
- **Clash Royale / Brawl Stars** → early matches are gentle introductions, so the first battles feel winnable while teaching controls and objectives.
- **Gacha RPGs** (Genshin Impact-style) → a spectacular opening that shows the fantasy, plus a generous early pull.
- **Hyper-casual** → the "tutorial" is often a single animated hand showing one gesture. The whole game *is* the onboarding.

**📱 Apply it (designer moves):**
- Write your FTUE as a **minute-by-minute storyboard**: what the player does, learns, earns, and feels each minute, and which KPI checks it.
- Make a table of **when** each feature unlocks across days 0–7. That table *is* your onboarding design.

**🪝 Make it stick:** **"Fun in 1, loop in 5, hook by 15."** Fun in the first minute, one full loop within five, an exit hook by the end of the first session (~15). Picture a theme park that makes you fill in tax forms at the gate: that's an FTUE with a login wall.

> ⚠️ **2010 → 2026:** Console players in 2010 had already *paid* for the game, so they tolerated a slow opening. A F2P mobile player has paid nothing and has a hundred other free games one tap away. The book's L09 idea (build the training level last, teach through play) is truer than ever; the patience budget is just far smaller.

---

## 5. Progression systems
**🧠 Big idea:** **Progression** is the player's answer to "am I getting somewhere?". In F2P it has to stretch over months, so you pace it like a long TV series: a highlight-reel first hour, steady episodes after, and a season finale (plus a new season) to keep going.

**📋 The details:**

**5.1 The progression toolbox**

| System | What grows | Typical F2P example |
|---|---|---|
| **Player / account level** | XP from everything you do; levels unlock features | Hay Day farm level unlocks crops and machines |
| **Unit upgrades (heroes/cards/troops)** | Level of each unit, usually needing **duplicates/shards + soft currency** | Card levels in Clash Royale, hero levels in RPGs |
| **Gear / equipment** | Item level, rarity, merges/evolutions | Survivor.io and Archero gear |
| **Skill trees / talents** | Permanent passive bonuses | Talent trees in hybrid-casual and RPGs |
| **Saga map / level number** | How far along the level list you are | Candy Crush Saga's map |
| **Chapters / stages (campaign)** | Story or difficulty chapters | Survivor.io chapters, RPG campaigns |
| **Ladders (trophies / rank / MMR)** | Skill-based standing vs other players | Trophies and ranked leagues in PvP games |
| **Collection** | % of items/units owned | Card collections, sticker albums |
| **Base / town level** | A central building that gates everything else | Town Hall levels in Clash of Clans |
| **Season / battle pass tiers** | Tiers earned by playing during a season | Brawl Stars' pass, most modern F2P passes |
| **Prestige / rebirth** | Reset progress for a permanent multiplier | Common in idle/incremental games |

- **Stack them:** most games run 3–6 progression tracks at once, each on a different timescale (pass = weeks, account level = months, collection = forever). Multiple tracks mean a player almost always has *something* close to completion.

**5.2 Vertical vs horizontal progression**
- **Vertical progression** = more **power** (higher stats, bigger numbers). Easy to understand, easy to monetize, but leads to **power creep** and pay-to-win worries in PvP.
- **Horizontal progression** = more **options** (new heroes, new cards, sidegrades, new strategies) without raw stat inflation. Keeps competition fair and expression rich; harder to sell as "progress".
- **Example:** in **Marvel Snap**, upgrading a card changes its *look* (cosmetic), and those upgrades raise your **Collection Level**, which unlocks *new cards*. Progress = more options, not stronger copies. A clean horizontal design.
- **Power creep:** releasing ever-stronger new content (often to sell it) makes old content obsolete and erodes trust. Every live game fights it with balance passes and careful release design.

**5.3 Unlock pacing**
- **Early game = a highlight reel:** something new nearly every session in the first days (a new mechanic, feature, area, or hero).
- **Mid game = rhythm:** a meaningful unlock every few sessions or days; goals are visible ahead.
- **Late game = systems + LiveOps:** the novelty comes from events, seasons, new content and social play, not from the base unlock list.
- **Show what's coming:** locked content with "unlocks at level 8", a greyed-out next area, a silhouette of the next hero. Visible goals pull players forward (the **goal-gradient effect**: motivation rises as a goal gets closer).
- **Hypothetical unlock schedule:**

| Account level | Unlock | Why here |
|---|---|---|
| 1 | Core loop | Fun first |
| 2–3 | First upgrade system | Close the loop: reward → invest |
| 4–5 | Daily quests + daily reward | Build the D1 habit |
| 6–8 | Clans / friends | Social ties before the first slowdown |
| 9–12 | PvP or events | Long-term goals for engaged players |

**5.4 Level / XP curves (the maths, gently)**
- XP needed per level usually **grows** so that later levels take longer. Two common shapes:
  - **Polynomial:** XP(L) = base × L^p (e.g. p = 1.5)
  - **Exponential:** XP(L) = base × g^(L−1) (e.g. g = 1.15)
- Worked numbers (base = 100):

| Level | Polynomial (100 × L^1.5) | Exponential (100 × 1.15^(L−1)) |
|---|---|---|
| 1 | 100 | 100 |
| 2 | 283 | 115 |
| 3 | 520 | 132 |
| 5 | 1,118 | 175 |
| 10 | 3,162 | 352 |
| 20 | 8,944 | 1,423 |
| 30 | 16,432 | 5,758 |
| 50 | 35,355 | ~94,200 |

- **Lesson:** exponential curves look gentle early and **explode** later (here they overtake the polynomial somewhere between levels 30 and 50). Great for a soft endgame slowdown; dangerous if you didn't intend a wall.
- **What players feel is time, not XP.** XP income also rises as players progress, so the real design target is **time-to-level** ("level 5 in the first session, level 10 by day 3…"). Model both XP needed *and* XP earned.

**5.5 Gates (how progress gets paced)**
- **Hard gate:** a requirement (reach level 10, own hero X, finish chapter 3).
- **Soft gate:** difficulty. You *can* try; you'll probably need to get stronger or smarter.
- **Time gate:** timers, daily caps, energy.
- **Currency gate:** the next upgrade costs more than you have.
- **Social gate:** needs a clan, friends, or co-op partners.
- **Skill gate:** pure player skill (great for competence; can frustrate casual players).
- **Paywall:** a gate only money opens. Avoid hard paywalls on core progression; players accept "pay to go faster" much more than "pay or stop".
- **Wall** = when free progression slows dramatically (often by design in midcore games). If you have one, telegraph it, give alternative goals (events, PvP, collection), and make sure the free path still moves.

**5.6 Difficulty curves**
- **Flow:** players are happiest when challenge roughly matches skill. Too hard → anxiety; too easy → boredom (the **flow channel**, from psychologist Mihaly Csikszentmihalyi).
```
 challenge
    ▲        ANXIETY
    │            ╱ ╱
    │          ╱ ╱   ← the FLOW channel: challenge rises with skill
    │        ╱ ╱
    │      ╱ ╱        BOREDOM
    │    ╱ ╱
    └──────────────────► player skill (and power)
```
- **Saw-tooth difficulty:** inside each group of levels, difficulty ramps up to a **spike** (a hard level / boss), then **drops** to a breather, then climbs again, while the overall trend rises.
```
 difficulty
    ▲                                    ╱│
    │                        ╱│        ╱  │
    │            ╱│        ╱  │      ╱    │
    │          ╱  │      ╱    │    ╱      │
    │        ╱    │    ╱      │__╱        │__
    │      ╱      │__╱
    │    ╱
    └───────────────────────────────────────────► level number
          ramp   spike → breather   ramp   spike → breather
```
- Why saw-tooth works: the spike tests mastery (competence!), the drop delivers relief and a feeling of power ("I've gotten good"), and the rhythm keeps each level from feeling the same.
- **Hard-level cadence (rough rule of thumb):** many puzzle games put a notably hard level every handful of levels and follow it with easier ones. Many modern match-3 games **label** hard levels up front, so failure feels expected and the win feels earned.
- **The monetization tension:** difficulty spikes are where boosters and extra moves sell. That's fine when the level is **fair** and beatable for free with some retries; it becomes a dark pattern when levels are tuned to be near-impossible without paying.
- **Dynamic difficulty adjustment (DDA):** some games quietly ease difficulty after repeated fails (or tune it per player). It can rescue frustrated players; tying it to spending behaviour is ethically murky.

**5.7 Power curve vs content curve**
- Plot **player power** (what a typical player can field) against **content difficulty** over time:
  - Power lagging content → frustration, walls, churn (or pressure to pay).
  - Power far ahead of content → boredom, no reason to upgrade (and the economy inflates).
- Model it **per spender tier**: a free player, a light payer and a heavy payer get different power curves. The free curve must still cross the content curve often enough to feel progress.

**5.8 Progression in PvP**
- **Matchmaking** by trophies/rating keeps matches close; showing rank and leagues is progression in itself.
- **Seasonal soft resets** pull top ratings back a bit so the climb feels fresh and rewards return.
- Some PvP games run modes where unit levels are **normalized** so skill decides, giving competitive players a fair arena.
- Watch for **"pay-to-win at the top"** complaints: a ladder where spend beats skill drains the free players who are everyone's opponents.

**5.9 Keeping progression alive for years**
- **The content treadmill:** players consume content faster than you can build it. Answers: replayable systems (PvP, roguelite runs, procedural levels), LiveOps events, reusable formats, user-generated content.
- **Catch-up mechanics:** boosted XP for late joiners, returning-player packs, "skip to current season" options. Don't let a newcomer feel hopelessly behind.
- **Prestige / rebirth loops** (idle games) turn "finished" into "start again, stronger".
- **Make progress visible:** progress bars, maps, collection %, before/after base views. Progress you can't see doesn't motivate.

**🎮 Game examples:**
- **Candy Crush Saga** → saga-map progression with hard levels sprinkled in; the map itself is a giant progress bar.
- **Clash of Clans** → Town Hall as a master gate: each level unlocks new buildings and upgrades, pacing the whole game.
- **Marvel Snap** → horizontal progression via Collection Level.
- **Survivor.io** → chapters (content curve) vs gear/talents (power curve), in plain view.
- **Brawl Stars / most PvP games** → trophy ladders + seasonal passes as parallel tracks.

**📱 Apply it (designer moves):**
- List every progression track in your game with its **timescale**. If they all run on the same timescale, players will hit dead zones where nothing is close to done.
- Build a **time-to-milestone table** per spender tier before you build the content.

**🔗 Book link:** L09 (level design, pacing, beat charts) is where saw-tooth rhythm lives; L11 (enemies/bosses) gives you the spikes; L13 (rewards/power-ups) gives you the drops and the "number goes up" feeling.

**🪝 Make it stick:** **The saw-tooth = a gym session.** Warm up, push to a heavy set (spike), rest (breather), push heavier. Nobody trains at max weight every rep, and nobody gets strong lifting the same 2 kg forever.

> ⚠️ **2010 → 2026:** The book's games had an end. A 2010 difficulty curve rose to a final boss and stopped. F2P curves never end, so they're built from repeating teeth, layered tracks, seasons and resets. The book's core rule still holds: challenge should match the player's growing skill.

---

## 6. Economy design
**🧠 Big idea:** A F2P **economy** is plumbing: currencies flow in through **faucets (sources)** and out through **drains (sinks)**. Balance the pipes and every reward feels valuable. Leak too much in and money becomes worthless (**inflation**); drain too hard and players feel starved and quit.

**📋 The details:**

**6.1 Currency types**

| Type | Examples | How earned | Role |
|---|---|---|---|
| **Soft currency** | Coins, gold | Plentiful from play | Everyday upgrades and purchases |
| **Hard / premium currency** | Gems, diamonds, crystals | Mostly bought; small free trickle | Speed-ups, premium items, gacha, offers |
| **Resource currencies** | Wood, food, elixir, ore | Production/gathering | Specific upgrade paths (create planning choices) |
| **Shards / tokens / duplicates** | Hero shards, card copies, wildcards | Chests, events, gacha | Unit-specific progression |
| **Event currencies** | Event tokens, medals | Only during an event | Event shop/track; often expire (prevents hoarding) |
| **Energy / stamina / lives** | Hearts, energy | Regenerate over time | Session pacing (see 6.7) |
| **Tickets / keys** | Raid tickets, chest keys | Rewards, daily allowances | Access to modes, chests |

- **Why separate soft and hard currency?**
  - Hard currency **abstracts real money** (a single price list for wildly different items: a skin, a speed-up, a refill).
  - It lets you **give free players a taste** of premium items through small earnable amounts.
  - It **simplifies pricing** across countries and price tiers.
  - ⚠️ It can also **obscure real prices** ("is 280 gems a lot?"). Regulators and consumer groups increasingly scrutinize this, so be clear about what things really cost.

**6.2 Faucets & drains (sources & sinks)**
```
  FAUCETS (sources)                     DRAINS (sinks)
  levels / battles ──┐              ┌──► upgrades (scaling costs)
  daily rewards    ──┤              ├──► consumables (boosters, refills)
  quests / pass    ──┼──► WALLET ───┼──► unlocks (heroes, areas)
  events           ──┤              ├──► time skips / speed-ups
  rewarded ads     ──┤              ├──► chance (chests, gacha pulls)
  IAP              ──┘              ├──► cosmetics / decoration
                                    └──► social (gifts, clan donations)
```
- **Sink families:**
  - **Progression sinks** — upgrades with rising costs; the backbone.
  - **Consumable sinks** — boosters, revives, refills: used up, so demand renews.
  - **Convenience/time sinks** — speed-ups, auto-complete, extra builders/queues.
  - **Chance sinks** — chests, gacha, rerolls.
  - **Luxury/cosmetic sinks** — skins, decorations: bottomless, great for rich late-game players.
  - **Social sinks** — gifting, clan contributions, trading fees.
- **Rule:** every faucet needs a matching drain that players actually *want*. A currency with nothing worth buying is just noise in the HUD.

**6.3 Inflation & deflation**
- **Inflation:** sources outpace sinks → balances pile up → prices feel meaningless → no reason to earn, and no reason to buy. Warning signs: median balances rising level after level; players sitting on huge stockpiles.
- **Deflation / starvation:** sinks outpace sources → every upgrade feels impossible → frustration and churn (or pressure to pay, which breeds resentment).
- **LiveOps inflation:** every event adds faucets. Balance with event sinks, expiring event currencies, and new late-game sinks.
- **Hoarding:** savvy players stockpile for future content; design for it (or it will break your next launch).

**6.4 Economy spreadsheets & simulations**
- Every F2P designer builds these. A basic model has:
  - **Player archetypes:** casual free player, engaged free player, light payer, heavy payer.
  - **Income per session × sessions per day** (+ daily rewards, events, ads, purchases).
  - **Cost curves** for every upgrade/unlock.
  - **Outputs:** balance over time, **time-to-milestone** per archetype, days stuck at each gate, and the gap between free and paying players.
- **Hypothetical example** — a farm game, one upgrade track (barn levels cost 500 → 1,000 → 2,000 → 4,000 → 8,000 coins; each doubling):
  - Income: 3 sessions/day × 200 coins + 100 daily reward = **700 coins/day**.
  - **Flat income** → days to afford each level: 0.7, 1.4, 2.9, 5.7, 11.4 → reaching barn level 5 takes ~**22 days**, with the last step alone taking over 11. That's a wall.
  - **Income growing 25% per barn level** (700 → 875 → 1,094 → 1,367 → 1,709/day) → days per level: 0.7, 1.1, 1.8, 2.9, 4.7 → ~**11 days** total. Same costs, a far smoother curve.
  - Lesson: **costs and income must be designed together.** Doubling costs against flat income always ends in a wall.

| Barn lvl | Cost | Flat income: days | Growing income: coins/day | Growing income: days |
|---|---|---|---|---|
| 1 | 500 | 0.7 | 700 | 0.7 |
| 2 | 1,000 | 1.4 | 875 | 1.1 |
| 3 | 2,000 | 2.9 | 1,094 | 1.8 |
| 4 | 4,000 | 5.7 | 1,367 | 2.9 |
| 5 | 8,000 | 11.4 | 1,709 | 4.7 |
| **Total** | 15,500 | **~22 days** | | **~11 days** |

- **Tools:** spreadsheets (Google Sheets/Excel) for most work; **Monte Carlo simulations** (run thousands of random players) for anything with randomness like drops or gacha; **Machinations**, a visual tool for diagramming and simulating game economies.
- **Then validate with live data:** currency balances by level, earn/spend ratios, sink participation, % of players stuck at gates.

**6.5 Pricing & anchors**
- **Store price tiers:** IAPs use fixed store price points (e.g. $0.99, $4.99, $9.99, $19.99, $49.99, $99.99 in USD; local equivalents elsewhere).
- **Bigger packs, better rate:** hard-currency packs typically give more currency per dollar as the price rises. Hypothetical:

| Pack | Price | Gems | Gems per $ | Tag |
|---|---|---|---|---|
| Handful | $0.99 | 80 | ~81 | |
| Pouch | $4.99 | 500 | ~100 | |
| Bag | $9.99 | 1,200 | ~120 | "Most popular" |
| Chest | $19.99 | 2,500 | ~125 | |
| Vault | $49.99 | 6,500 | ~130 | |
| Mountain | $99.99 | 14,000 | ~140 | "Best value" |

- **Anchoring:** the first or biggest price seen sets a reference point. A $99.99 pack on screen makes $9.99 feel modest.
- **Decoy effect:** a deliberately less attractive option makes the target option look better by comparison.
- **"Most popular" / "Best value" tags** guide choice (social proof + value framing). They must be true.
- **First-purchase bonus** (e.g. double currency on your first buy of each pack) and the **starter pack** (one-time, very high value, low price, offered early) exist because **the first purchase is the hardest**: once someone has paid once, paying again is much easier.
- **Limited-time offers** add urgency; honest timers only.
- **Bundles** mix items so they feel generous (and are harder to price-compare; keep them transparent).
- **Personalized / segmented offers** match offers to behaviour (a PvP player sees card offers, a builder sees speed-ups).
- **Exchange-rate consistency:** keep a clear internal value for 1 gem (in time and in soft currency) so prices feel fair and players can learn them.
- **⚠️ Watch out:** pack sizes that never match item prices (always leaving leftover gems), fake "800% value!" claims, and fake countdowns erode trust and are exactly what consumer regulators target.

**6.6 Time as a currency**
- In timer-based games, **time is the real currency**: every timer is a price paid in waiting, and premium currency buys it back.
- **Value of time:** work out how much soft currency a player earns per minute of play; that anchors the soft-currency price of a time skip and keeps systems consistent.
- **Skip pricing:** many games make very short skips cheap or free and charge a lower *per-minute* rate for longer skips (a concave curve). Hypothetical formula: gems = ⌈minutes^0.75⌉ → 5 min ≈ 4 gems, 1 hour ≈ 22 gems, 24 hours ≈ 234 gems (per-minute price falls from ~0.8 to ~0.16).
- **Design reason for timers:** they pace content consumption, create appointments (§7), and give patient players a free path and impatient players a paid one.
- **Builders/queues** (how many things can upgrade at once) are a time multiplier, and therefore one of the most valuable things you can sell or give.

**6.7 Energy systems**
- **Energy / stamina / lives** cap how much you can play (or earn) in a period.
- **Design parameters:** maximum cap; regen rate (e.g. 1 per X minutes); cost per attempt (or only on failure, like lives); whether rewards can **overflow** the cap; refill price (gems, ads, friends' gifts).
  - Hypothetical: 5 lives, 1 life per 30 min → a full refill every 2.5 hours, which encourages ~2.5-hour gaps between deep sessions.
- **Why use them:** pace content (players don't burn through levels in a weekend), create return appointments, protect against burnout, create monetization moments (refills).
- **Why players hate them:** they stop you when you're having the most fun. Feels like a parking meter on fun.
- **Modern softening:**
  - Lives lost only on **failure** (winning is free).
  - **Unlimited-lives** rewards for a time window (event prizes, offers).
  - Energy that gates **rewards, not play** (e.g. in Genshin Impact, exploring is free while claiming rewards from certain challenges costs a regenerating resource).
  - Ad-based or friend-gifted refills; generous caps; energy only in certain modes.

**6.8 Random rewards (gacha & chests) — the economy view**
- **Gacha / loot boxes:** pay (currency or tickets) for a random reward from a published pool. Big engagement and revenue driver in RPG/collection games; also the most regulated area.
- **Pity systems:** a guarantee after a set number of pulls without a top-rarity result. Caps the worst-case cost and makes simulations easier.
- **Duplicates:** convert into shards/upgrade materials so a "bad" pull still has value.
- **Odds disclosure:** major app stores require showing the odds of paid random items; some countries regulate or restrict paid loot boxes, and age ratings can be affected. Always check the current rules for your markets.
- **Economy rule:** simulate the full distribution (median *and* unlucky players) before shipping a banner. Your unluckiest 10% of players are a real group of humans.

**6.9 Player-to-player economies (when players trade)**
- Trading creates social depth (Hay Day's roadside shop makes other players part of your supply chain) but brings risks: bots, real-money trading, scams, runaway prices.
- Typical guardrails: **price ranges/clamps**, trade limits, cooldowns, non-tradeable premium items.

**6.10 Economy health checklist (what to monitor)**
- Median and top-percentile **balances** of each currency, by player level.
- **Earn/spend ratio** per currency over time.
- **Sink participation** — are players actually using each sink?
- **% of players stuck** at a gate for more than N days.
- **Time-to-milestone** per spender tier vs your design targets.
- **Free vs bought premium currency** share.

**🎮 Game examples:**
- **Clash of Clans** → multiple resource currencies + gems for speed-ups and builders: time-as-currency in its purest form.
- **Hay Day** → coins vs diamonds, production timers, player trading through roadside shops.
- **Candy Crush Saga / Royal Match** → lives as an energy system, boosters as consumable sinks, coins for extra moves.
- **Genshin Impact** → a regenerating resource that gates rewards rather than exploration; gacha with pity.
- **Survivor.io** → energy per run, gear upgrades as a progression sink, rewarded ads as a faucet.

**📱 Apply it (designer moves):**
- Draw your **faucet/drain diagram** on day one of a design. Every time you add a reward, add (or confirm) the sink.
- Build the **barn-style spreadsheet** for your top progression track before you set a single price.

**🔗 Book link:** L13 (rewards/power-ups) treats rewards as moment-to-moment pickups; in F2P every pickup is also an entry in an economy ledger. L12 (mechanics) gives the actions that become faucets.

**🪝 Make it stick:** **Your economy is a bathtub.** Faucets fill it, drains empty it. Too many faucets: the bathroom floods and nobody cares about water (inflation). Too many drains: everyone's sitting in an empty tub, cold and annoyed (starvation). The designer's job is to keep the water *pleasantly warm and rising slowly*.

> ⚠️ **2010 → 2026:** In 2010 a game's "economy" was usually a shop where you spent gold you found, and the game ended before inflation mattered. F2P economies run for years and touch real money, so they need spreadsheets, simulations, live monitoring, and an ethical line.

---

## 7. Retention mechanics
**🧠 Big idea:** Retention mechanics turn "a fun game" into "a game I come back to". They work by building **habits**, **goals**, and **relationships**. They're power tools: in good hands they build a daily ritual players love; in bad hands they build anxiety, chores, and churn (plus regulator attention).

**📋 The details:**

**7.1 The retention toolbox**
- **Daily login rewards**
  - **Calendars:** 7-day cycles with a big reward on day 7, or monthly (28–30 day) calendars with milestone prizes.
  - **Consecutive** (miss a day → reset) vs **cumulative** (each login counts, missing a day just pauses). Cumulative is kinder and still effective.
  - Make claiming a 2-second, satisfying moment, not a popup obstacle course.
- **Streaks**
  - A counter of consecutive days/wins. **Duolingo's** daily streak is the famous reference; it also offers **streak freezes** so one missed day doesn't erase months.
  - **Win streaks** in many puzzle games: consecutive wins grant bonus boosters at the start of the next level; a fail resets them (adds tension to each attempt).
  - Always provide a safety valve (freeze, grace day, repair) so the streak motivates rather than terrorizes.
- **Appointment mechanics** — reasons to return at a specific time:
  - **Timers** (crops ready, chest unlocked, building finished, energy full).
  - **Daily reset** (new quests, new shop items, refreshed attempts) and **weekly reset** (weekly chests, leaderboard payouts).
  - **Scheduled events** (Pokémon GO's recurring Community Days, clan war battle days, weekend tournaments).
- **Daily & weekly quests / missions** — small goals that guide players through different features each day ("win 3 battles", "use 5 boosters"). Often feed a battle pass.
- **Collections** — albums, sets, rosters (Monopoly GO! sticker albums, Coin Master card sets, hero collections). The urge to **complete** a set is strong; duplicates + trading add social play.
- **Social obligation & reciprocity**
  - **Clans/guilds**: teammates depend on you (war attacks, donations, co-op event tasks). Leaving feels like letting friends down.
  - **Gifting and requests** (sending lives, donating cards) trigger reciprocity: you got a gift, you want to give back.
  - **Friend leaderboards** create local, personal competition.
  - Social ties are among the strongest long-term retention drivers: people stay for people.
- **Push notifications** — the only retention tool that works while the game is closed (see 7.3).
- **LiveOps events & passes** — limited-time content creates fresh goals and a sense of "now". A **battle pass** gives a seasonal track of daily/weekly reasons to play.
- **Visible goals & near-completion** — progress bars, "2/3 done", next-unlock previews (**goal-gradient effect**). **Endowed progress**: starting a track partially filled ("you already have 2 of 10 stamps!") makes people more likely to finish it.
- **Variable rewards** — chests and surprise drops create anticipation. Very powerful; also the mechanic closest to gambling psychology, so use with care and transparency.
- **Comeback / returning-player rewards** — welcome-back packs, catch-up boosts, a summary of "what's new" to re-onboard lapsed players.

**7.2 What drives retention at each horizon**

| Horizon | Main drivers | If it's weak, look at… |
|---|---|---|
| **D1** | Core fun, FTUE, first win, an exit hook | Tutorial funnel, first-session pacing, load time |
| **D7** | Clear goals, unlock pacing, early meta, daily rewards/quests, first social tie | Mid-loop, feature drip, first walls |
| **D30** | Meta depth, collections, clans, PvP ladders, events | Meta loop, social features, economy starvation |
| **D90+** | Community, LiveOps cadence, endgame, identity/status | Content treadmill, power creep, burnout |

**7.3 Notifications done right**
- **Types:** timer complete ("your bread is ready"), resource full ("energy is full"), social ("your clanmate needs cards", "you were attacked"), event ("the weekend tournament starts now"), win-back ("we miss you", use sparingly).
- **Rules of thumb:**
  - **Value first:** every notification should tell the player something *they* want to know.
  - **Personal & relevant:** based on their timers, their clan, their goals.
  - **Capped:** a small number per day; batch when possible.
  - **Quiet hours:** never at 3 a.m. local time.
  - **Controllable:** easy per-category opt-outs in settings.
  - **No guilt trips:** "Your farm animals are sad and hungry 😢" is manipulation; "Your eggs are ready" is information.
- **Permission:** iOS requires opt-in, and Android (since version 13) also asks at runtime. Ask after value, with a pre-prompt explaining why (→ §4).

**7.4 Burnout: when retention mechanics backfire**
- **The chore-list problem:** too many dailies, timers and events turn play into a job. Players don't drift away; they **rage-quit after months**, often deleting the game to escape the obligation.
- **Signals:** high daily-task completion but falling session satisfaction or sentiment; churn spikes among long-tenured players; community posts about "dailies feeling like work".
- **Healthy design:**
  - A **daily time budget** — e.g. core dailies done in ~10–15 minutes (rough rule of thumb; tune to your genre).
  - A clear **"done for today"** state.
  - **Weekly** rather than strictly daily goals where possible (flexibility for real life).
  - **Auto-complete / sweep** options for already-beaten content (many RPGs let players instantly re-clear stages they've mastered).
  - **Catch-up mechanics** and grace periods so missing days isn't punished harshly.
  - Events with breathing room between them.

**7.5 Dark patterns vs healthy alternatives**

| Dark pattern | Why it's harmful | Healthier alternative |
|---|---|---|
| Streak wipe for one missed day, sold back at a price | Builds anxiety, punishes real life | Free streak freezes, grace days, cumulative calendars |
| Fake urgency (countdowns that silently reset) | Deceptive; destroys trust | Honest timers; real limited windows |
| **Confirmshaming** ("No thanks, I like losing") | Shames the player for declining | Neutral "No thanks" buttons |
| **Currency obfuscation** (odd pack sizes, leftover gems, unclear real cost) | Hides real prices | Clear prices, pack sizes that match item costs, show real-money equivalents where possible |
| Stacked loss offers after every fail | Exploits frustration | One optional offer, with cooldowns |
| **Friction for sale** (deliberate annoyance removed only by paying) | Makes the free game worse on purpose | A genuinely fun free path; sell speed or expression, not relief from torture |
| Notification spam & guilt trips | Disrespects the player's attention | Capped, valuable, opt-out-able notifications |
| Spamming friends without consent | Abuses players' social graph | Opt-in sharing only |
| Hidden or misleading odds | Deceptive; often illegal | Published odds, pity systems |
| Accidental/one-tap purchases, unclear buttons | Unwanted charges, especially by kids | Clear confirmations, parental controls, easy refunds |
| Targeting vulnerable spenders / minors | Real harm | Spending limits, age-appropriate design, never personalizing offers toward compulsive patterns |

- **The legal reality:** this isn't just ethics. Examples: the US FTC's 2022 settlement with Epic Games targeted purchase-flow dark patterns; EU consumer authorities have published principles on transparency of in-game virtual currencies; loot boxes are regulated or restricted in some countries; age-appropriate design codes exist in several regions. Expect more, not less.
- **The business reality:** dark patterns can lift short-term numbers and still lose long-term: trust drops, store ratings fall, high-value players burn out, regulators arrive.

**🎮 Game examples:**
- **Duolingo** → streaks + streak freezes + leagues: the gamification reference for habit design with a safety valve.
- **Clash of Clans / Clash Royale** → clans with wars and card donations: social obligation and reciprocity.
- **Hay Day** → timers as appointments, neighborhood derby tasks as team obligation.
- **Monopoly GO! / Coin Master** → collections (albums/card sets) and a constant event calendar.
- **Pokémon GO** → scheduled real-world events that create community appointments.

**📱 Apply it (designer moves):**
- For every retention mechanic, write its **"healthy version"** next to it before you build it (the freeze next to the streak, the cap next to the notification).
- Design a **"day in the life"** of a committed player: how many minutes do your dailies demand? If the answer scares you, it'll scare them.

**🔗 Book link:** L14 (multiplayer) is the foundation of clans, co-op and social obligation; L13 (rewards) underpins daily rewards and collections; L08 (HUD) is where badges, timers and progress bars live.

**🪝 Make it stick:** **Retention mechanics are like seasoning.** A pinch of salt (a daily reward) makes the dish. A whole shaker (twelve dailies, five streaks, nine notifications) makes people spit it out. Season to taste, and the taste is the *player's*, not the dashboard's.

> ⚠️ **2010 → 2026:** The book's retention tools were "make it fun" and "unlock cool stuff". That still matters most. F2P adds a whole layer of habit mechanics the book never imagined, and with them a responsibility the book didn't need to discuss: respecting the player's time, money and attention.

---

## 8. Player motivation models useful for F2P
**🧠 Big idea:** Different players play for different reasons. **Motivation models** give you a vocabulary for those reasons, so you can choose which players you're designing for and which features will matter to them. They're lenses, not laws.

**📋 The details:**

**8.1 Bartle's player types (1996)**
- Richard Bartle studied players of MUDs (text-based online worlds) and proposed four types on two axes: **acting on ↔ interacting with**, and **players ↔ world**.
```
                     ACTING ON
                         ▲
          KILLERS        │        ACHIEVERS
      (act on players)   │   (act on the world)
   PLAYERS ◄─────────────┼─────────────► WORLD
        SOCIALIZERS      │        EXPLORERS
   (interact w/ players) │  (interact w/ the world)
                         ▼
                  INTERACTING WITH
```
- **Achievers** — points, levels, completion, status. F2P: progression tracks, achievements, leaderboards.
- **Explorers** — discovering systems, secrets, new content. F2P: new areas, hidden mechanics, deep systems, events with new rules.
- **Socializers** — relationships and community. F2P: clans, chat, gifting, co-op.
- **Killers** — dominating or impacting other players. F2P: PvP, raids, ladders, attacking bases.
- **Limits:** built from one kind of game (MUDs), not designed as a validated survey model, and real players are mixes. Great shorthand, weak science.

**8.2 Quantic Foundry's Gamer Motivation Model (Nick Yee & colleagues)**
- Built from large-scale survey data of gamers. **12 motivations in 6 pairs:**

| Group | Motivations | What they want |
|---|---|---|
| **Action** | **Destruction**, **Excitement** | Explosions and chaos; fast pace, thrills, surprise |
| **Social** | **Competition**, **Community** | Beat others; belong, chat, team up |
| **Mastery** | **Challenge**, **Strategy** | Hard content, practice; planning, thinking ahead |
| **Achievement** | **Completion**, **Power** | Collect everything, finish goals; grow strong, big numbers |
| **Immersion** | **Fantasy**, **Story** | Be someone else somewhere else; characters and plot |
| **Creativity** | **Design**, **Discovery** | Customize, build, express; explore, experiment, tinker |

- These group into **three broad clusters**: **Action–Social**, **Mastery–Achievement**, **Immersion–Creativity**.
- Their published findings suggest motivations shift across age and demographics (for example, competition-driven motivation tends to decline with age), which is one reason casual mobile audiences respond to different features than core PvP audiences.
- Free online **Gamer Motivation Profile** quiz: take it yourself (Side Quest 7).

**8.3 Self-Determination Theory (SDT)**
- A major psychology theory (Edward Deci & Richard Ryan): people are most motivated, and feel best, when three needs are met. Applied to games through the **PENS** model (Player Experience of Need Satisfaction; Scott Rigby & Richard Ryan).

| Need | Meaning | F2P features that feed it | Features that starve it |
|---|---|---|---|
| **Autonomy** | Meaningful choice, acting by my own will | Deck/team building, base layout, choosing goals, cosmetics | Forced linear tasks, pressure offers, "do this or lose it" |
| **Competence** | Feeling effective, growing mastery | Saw-tooth difficulty, clear feedback, visible progress, skill-based wins | Opaque difficulty, pay-to-win losses, walls |
| **Relatedness** | Connection with others | Clans, co-op, gifting, chat, friendly leaderboards | Toxic chat, solo-only design, exploitative social spam |

- **Intrinsic vs extrinsic motivation:** intrinsic = doing it because it's enjoyable; extrinsic = doing it for an external reward.
- **The overjustification effect:** heavy external rewards for an already-enjoyable activity can *reduce* intrinsic interest ("I only play for the chest now"). Design rewards that **inform** ("you got better!") rather than **control** ("do this or else").

**8.4 Bonus lenses (quick hits)**
- **MDA framework** (Hunicke, LeBlanc & Zubek): **Mechanics → Dynamics → Aesthetics**. Designers build mechanics; players experience aesthetics. Its "8 kinds of fun": **Sensation, Fantasy, Narrative, Challenge, Fellowship, Discovery, Expression, Submission** (fun as a relaxing pastime; huge for casual mobile).
- **Nicole Lazzaro's 4 Keys to Fun:** **Hard Fun** (mastery, triumph), **Easy Fun** (curiosity, novelty), **Serious Fun** (playing to change how you feel: relax, focus, de-stress), **People Fun** (social).
- **Octalysis** (Yu-kai Chou): 8 core drives: **Epic Meaning & Calling, Development & Accomplishment, Empowerment of Creativity & Feedback, Ownership & Possession, Social Influence & Relatedness, Scarcity & Impatience, Unpredictability & Curiosity, Loss & Avoidance**.
  - **"White hat"** drives (meaning, accomplishment, creativity) make people feel good and in control.
  - **"Black hat"** drives (scarcity, unpredictability, loss avoidance) create urgency but feel bad if overused.
  - F2P games lean hard on black-hat drives (timers, gacha, streak loss). Balance them with white-hat ones, or players feel manipulated.

**8.5 Mapping motivations to F2P features**

| Motivation | F2P features that serve it | Example games |
|---|---|---|
| Destruction | Explosive combos, big hit effects | Survivor.io screen-clearing skills, match-3 special combos |
| Excitement | Short intense rounds, surprise | Brawl Stars matches, Subway Surfers |
| Competition | PvP ladders, leaderboards, tournaments | Clash Royale, Marvel Snap ranked |
| Community | Clans, co-op events, chat | Clash of Clans clans, Hay Day neighborhoods |
| Challenge | Hard levels, bosses, ranked tiers | Labeled hard levels in match-3 |
| Strategy | Deckbuilding, base layout, resource planning | Clash Royale decks, Hay Day production planning |
| Completion | Collections, albums, 100% maps | Monopoly GO! albums, hero rosters |
| Power | Upgrades, number-go-up, rarity | RPG hero levels, Survivor.io gear |
| Fantasy | Strong theme and role | Genshin Impact's world |
| Story | Narrative meta, characters | Homescapes' story beats |
| Design | Decoration, customization, base building | Royal Match/Homescapes choices, Hay Day farm decor |
| Discovery | New content, hidden mechanics, events | Seasonal events with new rules |

**8.6 How to use motivation models**
1. Pick a **target audience** and its **top 2–3 motivations** (a cozy puzzle audience ≠ a PvP shooter audience).
2. Check that your **core loop** directly serves the #1 motivation.
3. Make sure your **meta** serves #2 and #3.
4. Cut or delay features that serve motivations your audience doesn't care about ("everything for everyone" = nothing for anyone).
5. During teardowns (§9), profile each game's motivation mix; it reveals who it's for.

**🔗 Book link:** L02 asks "what do gamers want?". These models are the research-backed upgrade to that question: they tell you *which* gamers want *what*, so your L02 ideas can be aimed at a specific audience.

**🪝 Make it stick:** **Bartle = 4 suits in a deck of cards. Quantic Foundry = 12 flavours on an ice-cream menu. SDT = the 3 vitamins (A-C-R: Autonomy, Competence, Relatedness).** Card suits sort players, the menu describes tastes, and the vitamins keep everyone healthy.

> ⚠️ **2010 → 2026:** Bartle's model predates mobile entirely and the book's era leaned on gut feeling about "gamers". Today you can survey audiences, read published motivation data, and A/B test features. The principle survives: design for a specific player, not "everyone".

---

## 9. How to deconstruct a F2P game (your weekly teardown method)
**🧠 Big idea:** A **teardown (deconstruction)** is a structured play-and-analyse session where you reverse-engineer a game's loops, progression, economy, monetization and retention, and write down *why* the designers made each choice. One serious teardown a week will teach you more than a stack of articles.

**📋 The details:**

**9.1 Setup (before you tap the icon)**
- **Pick a game** in (or near) the genre you want to work in. Alternate: one chart-topper, one rising newcomer, now and then one that failed or got cancelled.
- **Context notes:** genre, developer/publisher, release date, chart position, store rating. (Download and revenue figures from market-intelligence tools such as Sensor Tower or AppMagic are **estimates**; label them that way.)
- **Fresh install** on your phone, a notes doc open, **screen recording on** for the FTUE.
- **Date your teardown.** Live games change weekly; your teardown is a snapshot.

**9.2 The 14-step teardown**
1. **Store page & promise** — icon, screenshots, video, description, ratings, top reviews. What fantasy and audience does it promise? Who is it for?
2. **FTUE log (with timestamps)** — minute by minute: what's taught, first win, first reward, first upgrade, first meta glimpse, first notification ask, first offer, when the tutorial lets go. Note where you felt bored or confused.
3. **Core loop diagram** — draw it (Action → Reward → Invest → New challenge). Say it in one sentence.
4. **Mid & meta loops** — daily goals, long-term goals, how they feed the core.
5. **Session design** — session length, caps (energy/lives/timers), the session arc, exit hooks, natural stopping points.
6. **Progression inventory** — every track (account level, units, gear, map, ladder, pass, collection), its timescale, its gates, vertical vs horizontal.
7. **Difficulty** — chart difficulty across the levels you play; find the saw-tooth, the spikes, and the first wall.
8. **Economy map** — every currency, a **sources & sinks table**, exchange rates (gems → time, gems → coins), the faucet/drain diagram.
9. **Monetization** — store layout, pack prices and bonuses, starter pack timing, pass value, offer triggers (when do offers pop?), ad placements (rewarded vs interstitial), gacha/odds/pity if any.
10. **Retention & LiveOps** — daily rewards, streaks, quests, events calendar, notifications received (log them for the whole week: time, text, purpose).
11. **Social & competitive** — clans, friends, chat, PvP, co-op, gifting, leaderboards; how soon they unlock.
12. **UX, feel & presentation** — HUD clarity (→ L08), controls and one-thumb play (→ L07), juice, sound (→ L15), camera (→ L06), character appeal (→ L05).
13. **Motivation profile** — which of Quantic Foundry's 12 motivations it serves most; SDT check (autonomy, competence, relatedness).
14. **Synthesis** — strengths, weaknesses, "steal this", "I'd change this", and **hypotheses** written as "They do X, probably to move KPI Y, because Z."

**9.3 The teardown template (copy this for each game)**
```
# Teardown: <Game> — <date> — <device/OS> — played <N> days
## 0. Snapshot
Genre / sub-genre: · Developer: · Released: · Chart position (est.): · Rating:
One-sentence pitch (in my words):
Target audience + top 3 motivations:
## 1. Store promise
Icon/screens/video show: · Promise kept in-game? (Y/N + notes)
## 2. FTUE log
| Time | What happened | What it teaches | Reward | My feeling |
First win at: · First upgrade at: · First offer at: · Notification ask at: · Tutorial ends at:
## 3. Core loop (diagram + one sentence)
## 4. Mid & meta loops
## 5. Session design
Avg session I played: · Caps: · Exit hooks: · Popups on launch:
## 6. Progression tracks
| Track | Timescale | Gates | Vertical/Horizontal |
## 7. Difficulty notes (levels 1–N; spikes; first wall at)
## 8. Economy
| Currency | Soft/Hard/Other | Sources | Sinks | Exchange rate notes |
## 9. Monetization
Store packs & prices: · Starter pack (when/what): · Pass (price/value): · Offer triggers: · Ads (where/rewarded?): · Random rewards/odds/pity:
## 10. Retention & LiveOps
Daily reward type: · Streaks: · Quests: · Events seen: · Notifications log:
## 11. Social & competitive
## 12. UX / feel / presentation (HUD, controls, juice, sound)
## 13. Motivation & SDT profile
## 14. Synthesis
Top 3 strengths: · Top 3 weaknesses: · Steal this: · I'd change: 
Hypotheses (They do X → to move KPI Y → because Z):
```

**9.4 The weekly ritual**

| Day | Time | Task |
|---|---|---|
| Day 1 | 45–60 min | Store page, fresh install, recorded FTUE, FTUE log, first loop sketch |
| Days 2–6 | 10–20 min/day | Play like a normal player; log notifications, offers, events, walls; fill the economy table |
| Day 7 | 60–90 min | Finish the template, draw clean diagrams, write the synthesis + hypotheses |
| Optional | 15 min | Post a short summary (thread/blog/portfolio): build-in-public accountability |

**9.5 Pro tips**
- **Play free first.** Then, if budget allows, consider one small purchase (e.g. the starter pack) to see the payer experience. Never spend money you'd miss.
- **Separate "what" from "why".** Observations are cheap; hypotheses are where learning happens.
- **Compare, don't just describe.** "Royal Match teaches boosters faster than Candy Crush" teaches you more than "Royal Match has boosters".
- **Read around the game:** patch notes, community forums/Reddit, developer talks (the GDC Vault has many F2P postmortems), and analysis outlets such as Deconstructor of Fun, Mobile Dev Memo and Naavik.
- **Keep a swipe file:** a folder of screenshots of great (and terrible) FTUE moments, stores, offers and HUDs.

**9.6 Biases to watch**
- **You are not the target audience** (probably). A designer finds dailies tedious that a target player finds cozy.
- **Survivorship bias:** studying only hits hides why similar games failed. Study a flop sometimes.
- **You see one variant:** live games A/B test constantly and differ by region; your experience may not be everyone's.
- **Estimates aren't facts:** third-party revenue/download numbers are modelled.
- **Snapshot bias:** a teardown describes one moment in a live game's life.

**🎮 Game examples (great teardown subjects by genre):** Royal Match (casual puzzle + meta), Clash Royale (midcore PvP), Hay Day (farming economy), Survivor.io (hybrid-casual), Monopoly GO! (social/events), Marvel Snap (card collection), AFK Journey (idle RPG), Whiteout Survival (4X strategy).

**📱 Apply it (designer moves):** Your teardowns become your **portfolio**. A hiring manager reading a sharp teardown with clear hypotheses learns more about you than from any CV line.

**🔗 Book link:** L04 (design documents) and the BX templates show how to write a game down; a teardown is the same skill in reverse: reading a game back into a design doc.

**🪝 Make it stick:** **Be a mechanic, not a driver.** Drivers enjoy the car. Mechanics pop the hood, label every part, and figure out why the engine purrs. Each teardown = one engine on your workbench.

---

## 🏆 Universal Truths & Clever Ideas
1. **Fun first, money second.** You can only monetize players who stay, and they only stay for fun. 📱 so for F2P: fix retention before monetization.
2. **LTV > CPI or bust.** A game grows profitably only when a player is worth more than they cost to acquire.
3. **Retention is a multiplier.** R × E × M: zero retention multiplies everything else to zero.
4. **Non-payers are content, crowd and marketing.** Design a great free game, not a demo.
5. **Every feature serves a funnel stage and moves a KPI.** If you can't name which, rethink it.
6. **A core loop must change as it repeats.** Investment should make the next round feel different.
7. **Every reward needs a home.** Each faucet needs a sink players want.
8. **Time is a currency.** Timers are prices; skips are purchases; builders are multipliers.
9. **Costs and income are designed together.** Doubling costs against flat income always builds a wall.
10. **Difficulty is a saw-tooth, not a ramp.** Tension, spike, relief, repeat, with an upward trend.
11. **Fun in 1, loop in 5, hook by 15.** The FTUE is where most players are won or lost.
12. **Build the FTUE last, rebuild it often.** (→ L09.) It's the highest-traffic feature in your game.
13. **Every retention mechanic needs a safety valve.** Streak → freeze, notification → cap, daily → time budget.
14. **Design for specific motivations.** Everything for everyone = nothing for anyone.
15. **Numbers say *what*, playtests say *why*.** Use both eyes.
16. **Dark patterns borrow from the future.** They lift today's metrics and spend tomorrow's trust.
17. **Study a game a week.** Teardowns are the fastest way to grow as a F2P designer.

## 🧩 Connect the dots
- **→ L02 (ideas / what gamers want):** §8 motivation models are the research upgrade; aim ideas at specific motivations.
- **→ L04 (design docs) & BX templates:** a F2P design doc adds sections the 2010 templates lack: core/meta loop diagrams, economy (currencies, sources/sinks), progression tables, monetization, LiveOps, KPI targets.
- **→ L05 (character):** collectible characters/heroes are both appeal and progression units; character appeal drives gacha and skins.
- **→ L06 (camera) & L07 (controls):** mobile sessions demand one-thumb, portrait-friendly, interruption-friendly play (§3.5).
- **→ L08 (HUD):** currency bars, timers, badges, progress bars, the store button: the economy lives on the HUD; progressive disclosure keeps it clean (§4).
- **→ L09 (level design):** saw-tooth pacing, hard-level cadence, "leave the training level for last".
- **→ L10 (combat) & L11 (enemies):** the action step of battle loops; bosses are your difficulty spikes.
- **→ L12 (mechanics):** the verbs in the core loop; actions become faucets.
- **→ L13 (rewards / power-ups):** rewards become economy entries; power-ups become consumable sinks (boosters).
- **→ L14 (multiplayer):** clans, co-op, async PvP, gifting: the social retention engine.
- **→ L15 (sound):** reward and level-up sounds make the loop feel good.
- **→ L16 (cutscenes):** keep story short and skippable in the FTUE.
- **→ L17 (business / pitching):** F2P pitches must argue retention, LTV and KPI targets, not just units sold.
- **→ F2P2 (DLC 2 — F2P Live):** the next pack goes deep on what this one only frames: monetization design, LiveOps, social systems, and getting hired.
- **F2P concepts:** core loop · meta loop · FTUE · retention · economy · monetization · LiveOps · ethics.

## 🔁 Retrieval check (do it closed-book!)
1. What inequality decides whether paid user acquisition is profitable?
2. Give three reasons non-paying players are valuable.
3. What's the difference between classic and rolling retention?
4. Write ARPDAU as the sum of its IAP and ad parts.
5. How do you estimate LTV on a napkin?
6. What are the four steps of a core-loop diagram?
7. Describe the four-part session arc.
8. What does "fun in 1, loop in 5, hook by 15" mean?
9. Why does the book's "leave the training level for last" matter even more in F2P?
10. What is vertical vs horizontal progression? Give an example of horizontal.
11. Draw (in words) the saw-tooth difficulty curve and explain why it works.
12. What happens when faucets outpace drains? And the reverse?
13. Name three energy-system parameters and two modern ways to soften energy.
14. Name SDT's three needs and one F2P feature for each.
15. List five dark patterns and their healthier alternatives.

<details><summary>Answers</summary>

1. **LTV > CPI** (lifetime value per player greater than cost per install, with margin for overhead).
2. They're **opponents/neighbours/clanmates (liquidity & content)**, they **spread the game** (lower CPI), they **watch ads**, and they're **future payers**.
3. **Classic**: played *on* day N exactly. **Rolling**: played on day N *or later* (always higher). Don't compare across definitions.
4. **ARPDAU = (daily payer % × daily ARPPU) + (ad impressions per DAU × eCPM ÷ 1000).**
5. **LTV ≈ ARPDAU × average lifetime active days**, where lifetime days ≈ 1 + the sum of daily retention over the horizon (area under the retention curve).
6. **Action → Reward → Invest → New power/new challenge → back to Action.**
7. **Arrive & collect → core play → invest & set up → exit hook.**
8. Fun in the **first minute**, one **full core loop within ~5 minutes**, an **exit hook by the end of the first session (~15 min)**.
9. You only truly know what to teach at the end; in F2P the FTUE is where most players leave, so it gets rebuilt repeatedly (before and after soft launch) and is among the highest-leverage features.
10. **Vertical** = more power (stats); **horizontal** = more options (new cards/heroes/strategies). Example: Marvel Snap card upgrades are cosmetic and raise Collection Level, which unlocks new cards.
11. Difficulty **ramps up to a spike** (hard level/boss), **drops** to a breather, climbs again, with the overall trend rising. Works because spikes test mastery, drops give relief and a feeling of power, and the rhythm adds variety.
12. **Inflation** (balances pile up, prices feel meaningless, no reason to earn or buy). The reverse is **deflation/starvation** (everything feels unaffordable → frustration, churn, resentful paying).
13. Parameters: **cap, regen rate, cost per attempt, overflow rules, refill price**. Softening: lives lost only on failure, unlimited-lives windows, energy that gates rewards not play, ad/friend refills, generous caps.
14. **Autonomy** (deck building, base layout), **Competence** (saw-tooth difficulty, visible progress), **Relatedness** (clans, co-op, gifting).
15. Examples: streak wipes → freezes/grace days; fake countdowns → honest timers; confirmshaming → neutral buttons; currency obfuscation → clear prices; notification spam → capped valuable notifications; hidden odds → published odds + pity; friction for sale → a fun free path; accidental purchases → confirmations + parental controls.
</details>

## 🎯 Side quests (5–15 min each)
1. **Loop Trio** — Draw the core loop of 3 games you've played (one casual, one midcore, one hybrid-casual) as 4-box diagrams, each with a one-sentence summary. *(15 min)*
2. **Napkin LTV** — A game has ARPDAU $0.20, and its average player is active 7 days in their lifetime. CPI is $1.20. Profitable? Then list 3 design changes that could fix it. *(10 min)* (Answer: LTV ≈ $1.40 > $1.20, a thin margin.)
3. **Notification Audit** — Open your phone's notification history/settings for every game installed. Classify each recent game notification: timer, social, event, win-back, or guilt-trip. Which would you keep? *(10 min)*
4. **Tier List** — Put 6 games on your phone into hyper-casual / hybrid-casual / casual / midcore / hardcore and note the main revenue model of each (ads, IAP, hybrid). *(10 min)*
5. **Sixty-Second Storyboard** — Storyboard the first 60 seconds of an imaginary F2P game in 6 panels: no login, show the fantasy, first juicy action. *(15 min)*
6. **Faucets & Drains** — For one game you play, list every way you earn its soft currency and every way you spend it. Is anything piling up in your wallet? What does that tell you? *(10 min)*
7. **Know Thyself** — Take Quantic Foundry's free Gamer Motivation Profile online. Write your top 3 motivations and one F2P game that fits them (and one that doesn't). *(15 min)*
8. **Saw-Tooth Hunt** — Play 15 levels of a puzzle game and rate each level's difficulty 1–5 (attempts + feeling). Sketch the curve. Do you see teeth? *(15 min)*

## ⚔️ Main quest (homework)
**Main Quest 1 — The Full Teardown (7 days)**
- Pick one F2P game you've never played (suggestions: Royal Match, Hay Day, Survivor.io, Marvel Snap). Use the §9 method and template across 7 days.
- **Deliverable:** a completed teardown document (2–6 pages) with an FTUE log, core + meta loop diagrams, an economy sources/sinks table, a monetization summary, a notifications log, a motivation profile, and at least 5 hypotheses in the form "They do X → to move KPI Y → because Z".
- **✅ Done when:** every template section is filled; you include at least 2 diagrams; you've written 3 strengths, 3 weaknesses, 1 "steal this" and 1 "I'd change this"; you've posted a short summary publicly (thread, blog or portfolio page) for build-in-public accountability.

**Main Quest 2 — The Tiny Economy Spreadsheet**
- Design a mini economy for a hypothetical cozy farm (or any) game: 1 soft currency, 1 hard currency, 3 sources, 4 sinks, a 10-level upgrade track.
- Model 30 days for three archetypes: a casual free player (2 sessions/day), an engaged free player (5 sessions/day), and a light payer (engaged + one $4.99 pack on day 3).
- **Deliverable:** a spreadsheet with income per day, cost per level, cumulative balance, and **days-to-milestone** per archetype, plus a short paragraph on where walls appear and how you smoothed them.
- **✅ Done when:** every source maps to at least one sink; no archetype is stuck more than ~3 days on any step in the first two weeks (or you explain why the wall is intentional); the payer is ahead but the free path still reaches level 10 within 30 days; you've charted balances over time.

## 🔬 Play Lab
1. **Royal Match — 10 min — The FTUE stopwatch.** Fresh install, start a timer. Look for: the first win, the first star spent, the first booster taught, the first offer, the first notification request. **Question:** At what timestamps did the core loop and the meta loop each "click" for you, and what was taught *before* it was needed?
2. **Clash Royale — 10 min — Loop & cap.** Play a few matches. Look for: what you earn after a win, what you can spend it on, what (if anything) limits how much you can progress in one sitting. **Question:** Draw the core loop and identify the session cap or exit hook. What brings you back in 3 hours?
3. **Hay Day — 10 min — The economy plumbing.** Look for: every currency and every timer; what you produce, what orders ask for, what diamonds are offered for. **Question:** List 3 faucets and 3 drains for coins. Where is time being used as a currency?
4. **Survivor.io — 10 min — Two loops and the ads.** Play one run. Look for: in-run choices, out-of-run upgrades, every rewarded-ad offer and energy cost. **Question:** Which loop keeps a run exciting, which one keeps you coming back tomorrow, and where do ads appear as a fair trade?

## 🗣️ Feynman check
Explain to a producer (or your grandma) in 60 seconds: **"How does a game that's free make money, and why does that make the core loop, progression and economy the most important things a F2P designer designs?"** Use the words *retention*, *LTV*, *CPI*, *core loop*, and *sink*, and don't use any number you can't explain.

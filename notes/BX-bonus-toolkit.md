# 🧰 Bonus Levels — The Designer's Toolkit — Bonus Levels 1–9
> 📖 Book pp. 431–479 · ⏱️ ~120 min study (then keep it open as a reference forever) · 📱 F2P relevance ★★★★☆ — these are the real documents you will write at a studio; they just need an F2P retrofit (economy, monetization, LiveOps, KPIs).

## ⚡ TL;DR — the 30-second version
- The back of the book is a **toolbox, not a lecture**: two worked **samples** (a one-sheet and a ten-pager, both for a silly game called *Farm Wars*), four **templates** (GDD, enemy, boss, pitch deck) and three **idea lists** (story themes, environments, mechanics & hazards).
- The documents form a **ladder**: one-sheet (1 page, sells the idea) → ten-pager (broad strokes, ~10 topics) → pitch deck (≈9 slides, wins the green light) → GDD (everything, living document). Each rung reuses and grows the one below.
- The golden rules running through all of them: **information beats styling**, **keep it short and exciting**, **repeat the one-sheet until the team quotes it back at you**, and **a rough "TBD" is better than a blank**.
- Enemy and boss templates are really **production checklists**: every animation, effect, sound, HUD element and reward that an enemy needs, so nobody forgets the death animation two weeks before ship.
- The lists are **idea generators**: combine a theme + an environment + a mechanic and you have a level concept in 30 seconds.
- 📱 For F2P mobile you add what 2010 console docs didn't need: **core loop, meta, economy (sources/sinks), monetization, FTUE, LiveOps, analytics events, target KPIs and a UA/ad-creative hook**. Adapted fill-in templates for all of these are below.

## 🗺️ Chapter map
- [ ] 0. The document ladder — how the nine tools fit together
- [ ] 1. Bonus Level 1: The One-Sheet Sample — one page that sells
- [ ] 2. Bonus Level 2: The Ten-Page Design Document Sample — broad strokes, ten topics
- [ ] 3. Bonus Level 3: Game Design Document Template — the everything document
- [ ] 4. Bonus Level 4: The Medium-Sized List of Story Themes — genre menu for stories
- [ ] 5. Bonus Level 5: The Big List of Environments — level-setting menu
- [ ] 6. Bonus Level 6: Mechanics and Hazards — gameplay-object menu
- [ ] 7. Bonus Level 7: Enemy Design Template — enemy production checklist
- [ ] 8. Bonus Level 8: Boss Design Template — boss + arena checklist
- [ ] 9. Bonus Level 9: High Concept Pitch Presentation — nine slides to green-light

---

## 0. The document ladder (how the toolkit fits together)
**🧠 Big idea:** Every tool in the back of the book is a different zoom level of the same game. Learn which document answers which question for which reader, and you'll never write the wrong one.

**📋 The details:**

| Tool | Length | Main reader | Job | Grows into |
|---|---|---|---|---|
| **One-sheet** (BL1) | 1 page | Team, managers, marketing, sales, licensors | Get everyone aligned + excited | Ten-pager, pitch |
| **Ten-pager** (BL2) | ~10 topics (pages are flexible) | Team + decision makers | Broad strokes of the whole game | Pitch, GDD |
| **High-concept pitch** (BL9) | ~9 slides | Publisher / execs / investors | Win approval and money | Production |
| **GDD** (BL3) | As long as it needs | Whole dev team | Every detail; a living reference | Updated until ship |
| **Enemy / boss templates** (BL7, BL8) | 1–2 pages per enemy | Artists, animators, audio, programmers | Asset + behavior checklist | Sections of the GDD |
| **Theme / environment / mechanic lists** (BL4–6) | Lists | You, while brainstorming | Spark and combine ideas | Concepts, levels |

- The book itself states the chain: the ten-pager's foundation turns into your **pitch and your GDD**, and the GDD can be broken into **one-pagers** when that serves the team better.
- The *Farm Wars* sample appears in **three** forms (one-sheet, ten-pager, pitch deck), so you can watch one idea travel up the ladder.

**📱 F2P mobile translation:** studios today usually run: **concept one-pager → pitch deck (with market + KPI targets) → prototype → feature one-pagers / wiki GDD → soft launch**. The GDD rarely lives as one giant Word file any more; it is a wiki (Confluence, Notion, etc.) with one page per feature, plus spreadsheets for economy and balancing.

**🪝 Make it stick:** Think of a **camera zoom**: one-sheet = satellite photo, ten-pager = city map, pitch = guided tour, GDD = street view with every lamppost labeled.

---

## 1. Bonus Level 1 — The One-Sheet Sample
**🧠 Big idea:** The **one-sheet** (a.k.a. **concept overview**) is a single page that keeps the team aligned on priorities and objectives *and* can be handed to management, marketing, sales and licensors to get them excited. What it says matters far more than how it looks.

**📋 The details (the book's guidance):**
- **Two jobs at once:**
  - Internal: keep the team and managers "on the same page" about project **priorities and objectives**.
  - External: a hand-off tool for **management, marketing, sales and licensors**, built to make them excited about your game.
- **Style is secondary to information.** The book shows two styles on purpose:
  - Example 1 is **text-only**.
  - Example 2 **adds images**.
- **Whatever the format: short and informative.**
- **Repeat it constantly.** Restate the one-sheet's points every time you talk about the game.
- **The victory condition:** one day you suggest a feature and a teammate objects that it doesn't match the one-sheet, *and they're right*. Count that as a win (the author jokes designers have to take their wins where they can).

### 🔍 Worked example A — *Farm Wars*, the text-only one-sheet (p. 432)
*What the game is:* a comedy action-strategy hybrid. Old MacDonald's farm animals are sick of being exploited, so they suit up in cybernetic war armor and attack. You play the farmer: grow crops, sell them, buy weapons and upgrades, and fight off waves of killer livestock. The pitch-pun is that if you can't farm *and* fight, you'll "buy the farm."

A neat trick: the sample is **also a template**. After each field the author left his instructions in bold brackets. Here's every field, what the sample does with it, and why:

| Field | What *Farm Wars* puts there (paraphrased) | The embedded instruction | Why it works |
|---|---|---|---|
| **Title + "concept overview"** | *Farm Wars* | — | Name first; the reader knows what they're holding. |
| **Platform** | Downloadable on Xbox Live, WiiWare and PS3 | — | Platform sets budget, price and scope expectations instantly. |
| **Target age** | 15–21 | (target audience) | Tells marketing who to talk to. |
| **Rating** | E10 | — | Content boundaries (how violent can cartoon cows be?). |
| **Game summary** | Animals rebel in death armor; farmer defends his produce against cows, sheep and chickens; sell crops to upgrade farm and buy weapons | Give the story's **beginning, middle and end**, a hint of **play style**, the **player's objectives and elements**. **Short and sweet.** | One paragraph covers story hook + what you *do* + why. |
| **Game outline** | Rounds: **Farming** (plant and tend), **Battle** (enemies attack), **Selling** (sell what survived), **Buying** (seed, rebuilds, weapon upgrades). A **Season** = 4 sets of 4 rounds, then a **boss** unlocks the next season. Later seasons add **weather** that affects farming, selling and battling | **Not great detail, but deeper than the summary** | This is the loop, stated as a cycle. A reader can picture a session. |
| **USPs (unique selling points)** | Six bullets: RTS action meets farming sim · build and breed farm, weapons and crops in hundreds of combinations · 50+ weapons from a humble hoe up to an absurd super-weapon · hordes of enemies and bosses · multiple endings depending on performance · a multiplayer brawl mode | Highlight **play style, game modes, single/multiplayer, tech innovations, cool features**. **No more than 5–7.** | Each bullet is a "back of the box" claim marketing can reuse word for word. |
| **Similar competitive products** | Tower-defense games, the *Harvest Moon* series, *Lock's Quest* | Pick comps that are **successful, recent, or very well known; ideally all three** | Comps let a busy exec "get it" in one second (farming sim + tower defense). |

### 🔍 Worked example B — *Maximo vs. Army of Zin*, the illustrated one-sheet (p. 433)
*What the game is:* a single-player combat/action sequel to *Maximo: Ghosts to Glory* (Capcom's real PS2 series; the 2004 sequel shipped under this name). This sheet is landscape, packed with art, and reads like a mini poster. Notice how **every picture is paired with a selling claim**.

How the layout is organized (top to bottom, left to right):
- **Header band:** series logo, the title, genre line ("single-player combat/action"), "sequel to…" line, rating (**Teen, for violence**), three mood words (excitement, fun, heroic), and a tagline promising a mystery story told through **cinematic and puppet-style story sequences**.
- **Hero block (left):** big character art with a caption noting that **his look shows his status** (gear reveals how powerful he currently is).
  - *Feature bullets about the hero:* more heroic (now saves others, not just himself) · more attack moves and combos that stay simple to input · gets stronger through a **new experience system** (abilities, armor, weapons) · **responsive movement and combat feel** · customization via unique (comedy) boxer shorts and abilities.
  - *Character image:* brave, heroic, impulsive; a physical man of action; always does the right thing even when it costs him.
  - *Telling character traits:* always holding a sword · keeps fighting even stripped to his underwear · has Death as a companion. (These are the **iconic, marketable hooks**: things you could put on a T-shirt.)
- **Villain block (center):** the Army of Zin, sold as unique, marketable and very cool, **designed by a famous artist (Susumu Matsushita)**, with **enemy variety** spelled out: different size, shape, movement, attack and way to defeat each.
- **Accessibility promise:** a headline claiming the game is easy to pick up and fun right away.
- **Backstory blurb:** the Zin legend: centuries ago the clockwork army was beaten and locked in a Great Vault, waiting to march again.
- **Collectible hooks:** collect **Death Coins** to play as Death himself (the reaper in invulnerable floating form) · collect **Koins** to buy unique items · innocent and not-so-innocent characters to interact with and rescue · promise of unexpected situations, enemies and story twists.
- **Story setup (right):** months after the first game, the hero and Grim are still searching for Sophia when they find a maiden menaced by a clockwork monster.
- **World strip (right column):** five location thumbnails, each topped with a **gameplay-promise headline**, then a story sentence:
  - *Promise: stylish jumping and smashing* → **Besieged Village** (village bombarded; seek a mysterious Gearmaster).
  - *Promise: moody, creepy, stylized places* → **Haunted Forest** (meet Tinker the Gearmaster, who explains the Zin before she's abducted by the villain Lord Bane).
  - *Promise: dangerous obstacle runs and physics puzzles* → **Crystal Mountains** (teetering bridges, crumbling paths, a castle; duel an old rival, the Baron).
  - *Promise: levels that react and transform when you break things* → **Dead Sea** (drained by the Zin Fortress; fight to the Soul Crusher).
  - **Zin Fortress** finale (grinding gears; rescue Tinker; destroy the soul crusher and the soul stones powering the army).

**Why example B works (steal these moves):**
- The **world strip = level list + feature list + story beats** in one glance.
- **Headlines sell verbs** ("jump," "smash," "puzzle"), not just places.
- Hero traits are **specific and visual** (underwear! Death sidekick!), which is what marketing needs.
- It answers the classic one-sheet questions (genre, platform/sequel, rating, story, hero, enemies, features, collectibles, levels) without a single paragraph longer than four lines.

**🎮 Book examples:** *Farm Wars* (fictional, text one-sheet) → structure + embedded instructions; *Maximo vs. Army of Zin* (real sequel concept) → image-driven poster style; comps *Harvest Moon*, *Lock's Quest*, tower defense → how to choose reference products.

**📱 F2P mobile translation — the F2P one-sheet (fill-in):**
```markdown
# <GAME TITLE> — Concept One-Sheet          v0.1 · <date> · <owner/contact>
**Genre / subgenre:** <e.g., merge-2 + home renovation>   **Platforms:** iOS / Android (portrait/landscape)
**Target audience:** <age band, motivations (relax / compete / collect / express)>, <core geos>
**Age rating target:** <IARC / PEGI / App Store age band>
**Hook (one sentence):** <"Plants vs. Zombies meets Hay Day: grow it, then defend it.">
**Core loop (one line):** <action> → <reward> → <upgrade> → <harder action>
**Session shape:** <typical session 3–5 min, N sessions/day>   **Meta:** <what grows over weeks>
**Monetization model:** <IAP-led / hybrid IAP+ads / ads-led> · key offers: <starter pack, pass, ...>
**LiveOps promise:** <weekly event types, seasonal cadence>
**USPs (5–7 max):**
- <the twist nobody in the top 100 has>
- <the social/competitive feature>
- <the collection/expression feature>
**Comps (successful + recent + well known):** <Game A (why)>, <Game B (why)>, <Game C (why)>
**Ad-creative hook:** <the 3-second moment that makes a scroller stop>
```

**🪝 Make it stick:** The one-sheet is your game's **dating-app profile**: one photo-rich page, honest, specific ("fights in his underwear" beats "fun personality"), and if your teammates can't quote it, nobody swipes right.

> ⚠️ **2010 → 2026:** Xbox Live Arcade / WiiWare / ESRB fields become **App Store / Google Play**, **IARC/PEGI/store age ratings** and **target geos**. "Comps" should be **top-grossing or top-downloaded games from the last 1–2 years** (market-intelligence tools like Sensor Tower or AppMagic are where studios check this). The principles (short, specific, repeated, comps that are successful + recent + famous) are unchanged.

---

## 2. Bonus Level 2 — The Ten-Page Design Document Sample
**🧠 Big idea:** The **ten-pager** covers *all the broad strokes* of the game in about ten topics. Unlike the strict one-page rule of the one-sheet, "ten pages" is a **guideline, not a law** (the author compares it to the pirate's code). Think "ten-pointer": what matters is that every big topic is covered and the document is **accessible and exciting to read**. Its foundation later becomes your **pitch** and your **GDD**.

**📋 The details: the ten "pages" (topics) and what each must answer:**

| # | Page | What goes in it / questions to answer |
|---|---|---|
| 1 | **Title page** | A graphic if possible · the title (ideally as a **logo**) · your **contact info** · **target platform** · **target audience** · **target rating** · **expected ship date** |
| 2 | **Story and gameplay** | A few short paragraphs of story with **beginning, middle and end** (or at least a **cliffhanger**), mentioning **setting, characters and conflict** · a brief sense of the **gameplay flow** (split into stages or bullets if that's clearer) |
| 3 | **Game flow** | How does the player **grow as challenges increase**? How does that tie to the **story**? Briefly describe the growth **systems** (experience points, money, score, collectibles) and **what the player gains** (new abilities, weapons, moves, unlockables) |
| 4 | **Character(s) and controls** | Who does the player control and what's their story? What can they do that is **unique to this game**? Several activity types (driving, shooting…)? Does the player **switch characters**, and how does play differ? Show a **control mapping** that highlights special/unique moves, with an image of the platform's (SKU's) controller |
| 5 | **Main gameplay concepts + platform-specific features** | What kind of play and which **genres** (driving, shooting, platform…)? How is play **broken up** (levels, rounds, story chapters)? **Minigames** listed by name with short descriptions · cool **gameplay scenarios** · the **USPs** from the concept overview, briefly detailed · **diagrams** encouraged · features that **exploit the hardware** (hard drive, touch screen, multiple screens, memory card…) with examples |
| 6 | **Game world** | Where does play happen? **List the environments** with short descriptions · how they tie into the story · the **mood** of each world · how they **connect** (linear or **hub**-style) · a simple **flow diagram** of world navigation |
| 7 | **Interface** | How does the player navigate the **shell** (menus)? What **mood** do the interface screens evoke? What **music** plays? A simple **flow diagram** of interface navigation |
| 8 | **Mechanics and power-ups** | *Mechanics:* what unique mechanics exist, how they relate to the **player's actions**, how they're used **in the environment**. *Power-ups:* what power-ups/collectibles exist, their **benefits**, can they **buy** items or abilities? |
| 9 | **Enemies and bosses** | *Enemies:* what kinds, their **cool attacks**, their **AI**, what makes each **unique**. *Bosses:* what kinds, **which environments** they appear in, **how they're defeated**, and **what the player gets** for beating them |
| 10 | **Cutscenes, bonus material and comps** | How cutscenes are **presented** and **when** (between levels? start and end?) and in what **format** (CG, Flash, even puppet show) · what the player can **unlock** and what the **incentive to replay** is · which games will be your **competition** at release |

**📏 How strictly to count pages (the author's own caveat):**
- The **one-sheet is held to exactly one page**; the ten-pager is only a **set of guidelines**, so the "ten" is a checklist of topics, not a page limit.
- If a topic deserves more room, **give it a whole page of its own**; if two topics fit together, merge them (the *Farm Wars* sample does exactly that).
- The non-negotiables are that **every broad stroke of the game is covered** and the document stays **easy to get into and exciting to read**.

### 🔍 Worked example — the *Farm Wars* ten-pager (book pp. 438–444)
Same game as the one-sheet, now at the next zoom level. Fun fact that proves the "guideline, not policy" point: the sample is **seven pages** (cover + six), because several topics are merged. Every page shares a **footer** with the logo, "name and contact info" and the date. Here's how each page works:

**Cover (title page).** Full-page comic splash: a furious cow piloting a spiked-flail war-mech towering over a farmer with a hoe. Below: the logo, designer credit, platforms (Xbox Live Arcade, PSN, WiiWare), rating **E10+**, ship date **TBD**.
- *Why it works:* the art alone tells you genre (action), tone (comedy) and conflict (farmer vs. mechanized livestock) before you read a word.

**Page: Game story + Game play + Elevator pitch.**
- *Story:* the animals, tired of being exploited for milk and eggs, **mail-order** giant mechanical "Deth-tech" suits and invade; the farmer fends off waves of livestock threatening to stomp his crops; the war **escalates across the county**, each side adding tech and allies; it ends on a **cliffhanger question** (will he defend the homestead or "buy the farm"?).
- *Gameplay:* you are the farmer; play is split into **five timed phases**; you plant and raise crops, sell them to buy defense and weapon upgrades, defend your customized farm from waves, sell survivors at a **roadside produce stand**, replant and upgrade… or save up to build your *own* Deth-tech.
- *Scope in numbers:* rounds last **15–30 minutes**; **6 environment maps × 6 weather conditions × 6 boss rounds** promise **10+ hours** of play.
- *Elevator pitch:* **FarmVille × tower defense × MechWarrior** (the sample uses the classic **X meets Y meets Z** formula: three famous references triangulate the game instantly).
- *Why it works:* a story with an end-hook, a loop you can picture, and concrete numbers that make scope believable.

**Page: Player character + Controls.**
- *Character:* customize the farmer's face, hair, clothes and sex at the start; later buy headgear, clothing and armor, and upgrade tools, weapons, defenses and mecha. A three-figure sketch shows the farmer's evolution: overalls and pitchfork → steampunk gear → chrome battle armor.
- *Tech trees:* spend cash to research; technology advances **visually and functionally** from rural farm gear → steampunk → chrome-and-steel.
- *Trade-offs:* every advance has **pros and cons** (high-tech armor protects more but slows you down compared to its low-tech version).
- *Controls:* an annotated Xbox 360 controller: left stick moves (click to run) · right stick rotates the camera (click to zoom) · face buttons for swing/use and drop/plant · d-pad left/right selects tool/weapon, up/down selects inventory/special · left shoulder target-lock, left trigger special attack 2 · right shoulder toggles the map, right trigger special attack 1 · options and pause buttons.
- *Why it works:* this page covers template pages 3 **and** 4 (growth + character + controls); the visual progression sells "you'll get cooler," and the trade-off rule shows the designer thought about balance, not just bigger numbers.

**Page: Game world + Game experience.**
- *World inspirations:* the charming farming of *Harvest Moon*, the deadpan animals of the *Far Side* comics, and steampunk-meets-mecha robot art (illustrator Brian Despain and *MechWarrior*). Citing references gives artists a **mood board in words**.
- *Farm size rule:* farms are very **customizable but of manageable size**, so the player can cross from one end to the other within a play session. Players customize **crops, buildings and defenses**.
- *Variety engine:* randomly generated elements on **six farm maps** and **six weather conditions** (summer, winter, spring, fall, tornado, rain).
- *The round = five phases:*
  1. **Buying:** order from a mail-order catalog (a cartoon ACME-style joke): seeds, new vegetables, farm equipment, fertilizer, irrigation, defenses (fences from wood all the way to laser beams), weapons and "special" items; eventually build and upgrade your own robotic death suit, which doubles as a tractor/combine.
  2. **Planting:** move around a 3D isometric, dynamic farm; till, water, and set up missile defenses. **Crop selection, tending and placement** decide victory; **seasons affect crops**.
  3. **Defending:** start armed only with a hoe; the mech-animals try to wreck crops, destroy land and drive you out of business, or just kill you. Defenses + skill keep you alive.
  4. **Boss:** every **four rounds** you face one of the main animals (pig, cow, chicken…) in a fight to the finish. Lose and you're mulch; win and, er, there's fresh bacon or beef for sale.
  5. **Selling:** run a roadside stand; **customers give tips** on resource management, beating enemies, what next season brings, and which crop will be "hot."
- *How to win:* survive and defeat **all the animal bosses**. *How to lose:* **go broke**, have your **farm devastated**, or get **killed**.
- *Why it works:* this is template pages 5 + 6 merged. The loop is explicit, each phase has a purpose, and **win/lose conditions are stated** (many beginner docs forget this!). Notice the selling phase hides a **hint system** inside fiction (customer gossip).

**Page: Game mechanics.**
- Isometric view of **3D characters, elements and terrain**; camera **zooms and rotates 360°** for close or far views of the battlefield.
- The player runs around **in real time**, farming, building and fighting; a **HUD mini-map** shows navigation, enemy positions and defense status.
- Actions stay **simple** (build defense, use tools, plant, wield weapons) and controls stay **contextual**: advanced tech and weapon upgrades **reuse the same basic control scheme**.
- After battle, surviving crops are **auto-harvested** into inventory to sell; the selling phase is a **simple static screen** that reuses in-game assets (cheap to build, a producer-pleasing detail).
- Research, buy and build defenses and tools; every item has **several improvement levels**, each with a **distinct visual and effect**.
- Unusual rule: new tech **doesn't replace** old tech, it **adds to your arsenal**; the only limits are **your choices and your finances** each round.
- Sample defensive progression: **Fence < Barbed Wire < Electric Fence < Force Field < Laser System**.
- *Why it works:* template page 8 in action: mechanics are tied to player actions and the environment, and a single concrete progression line explains the whole upgrade philosophy.

**Page: Enemies.**
- Each **boss animal** has its own attacks and Deth-tech mech, plus **minions that escalate** in power as the seasons progress. Sample roster (each animal gets one minion and one signature attack):
  - **Chicken:** kamikaze egg minions that explode on impact · a scratch attack that rips up crops.
  - **Sheep:** woolly minions that zap farmers with static electricity · a battering-ram that smashes structures.
  - **Duck:** a hunter minion that pops out of water to shoot · a rotten-egg attack that bursts into poison gas.
  - **Rooster:** a fighter minion whose peck shatters armor · a sonic crow that stuns players and overloads electronics.
  - **Pig:** charging boar minions with tusks · a mud-maker machine that turns fertile land into useless mud.
  - **Cow:** a minion that sprays sour milk to wilt crops · a cud cannon firing gooey projectiles.
- *Why it works:* template page 9. Look at the pattern: attacks threaten **different things**: the player's body (stun, gore), the **defenses** (ram, armor-shatter, electronics overload) and the **economy** (wilted crops, mud fields). That makes every enemy matter to the farming loop *and* the combat loop. The puns sell tone.

**Page: Cutscenes + Bonus materials.**
- *Cutscenes:* short **puppet-show sequences built from in-game assets** (cheap and in-style).
- *Bonus materials:* a plan for **at least six months of downloadable content**: more farm maps · new crops · **crop trading with other players** · new Deth-tech and defense upgrades · a farmer's **dog companion** · **holiday-themed costumes** · **co-op and competitive multiplayer**.
- A closing gag drawing: the farmer's produce stand offering to trade for ammunition, with pork chops as today's special.
- *Why it works:* template page 10, with a post-launch content plan that, in 2026 terms, is basically a **LiveOps roadmap**.

**What the sample skipped or merged (and why that's fine):**
- No separate **Interface** page (shell navigation folded away) and no **comps** page (comps already live on the one-sheet).
- Game flow + character + controls merged; world + gameplay concepts merged.
- Lesson: the template is a checklist of *questions*, not a page count.

**Spot the drift (a hidden lesson):** compare the three *Farm Wars* documents and details change: the one-sheet's round has four parts (farming, battle, selling, buying) and targets ages 15–21 at E10; the ten-pager has five phases including a boss phase and says E10+; the pitch deck later says E10 for ages 8–15 on XBLA and PSN, and swaps crazed chickens for deadly ducks in the story blurb. Designs **evolve** between documents. That's exactly why the GDD template insists on **version numbers and revision history**, and why you should re-sync your older docs when the design changes.

**🎮 Book examples:** *Farm Wars* ten-pager → how each template page is answered; *Harvest Moon*, *The Far Side*, *MechWarrior*, *Farmville*, tower-defense games → references as instant shorthand.

**📱 F2P mobile translation:**
- *Farm Wars* is weirdly close to a modern mobile game: a farm you customize (*Hay Day*, which even has a roadside shop for selling goods), a defense layer (*Plants vs. Zombies 2* style lane/lawn defense), seasons, holiday costumes and six months of post-launch content. Most of it maps straight onto F2P systems:

| *Farm Wars* element | F2P mobile equivalent |
|---|---|
| Buying/planting/defending/selling phases | **Core loop**: produce → defend → sell → upgrade, in 2–5 minute chunks |
| Tech trees, Fence → Laser System | **Upgrade meta** with soft-currency sinks and timers |
| Customization (crops, buildings, outfits) | **Cosmetics** shop; decoration meta |
| Seasons and weather | **Seasonal events** + a **season/battle pass** |
| Holiday costumes (DLC) | **Limited-time cosmetics** in LiveOps events |
| Crop trading with other players | **Social economy** (trading, gifting, help requests) with anti-abuse limits |
| Dog companion (DLC) | **Pet/companion** system (premium or pass reward) |
| Boss every 4 rounds | **Chapter gate** boss or weekly **event boss** |
| 15–30 minute rounds | ⚠️ Far too long for mobile; split into **sessions under ~5 minutes** with save points |

- **F2P ten-pager (fill-in), same "ten-pointer" spirit:**
```markdown
# <TITLE> — Ten-Pager   v0.1 · <date> · <owner/contact>
1. **Title page:** key art · logo · platforms (iOS/Android, orientation) · target audience & geos · age rating target · soft-launch target date
2. **Fantasy + story hook:** who you are, the conflict, the cliffhanger (2–3 short paragraphs max)
3. **Core loop:** diagram (action → reward → upgrade → harder action) · session length target · what happens in the first 60 seconds
4. **Meta & progression:** what grows over days/weeks (player level, map/chapters, collection, base, decorations) · how it ties to the fantasy
5. **Controls & feel:** touch gestures (tap/swipe/drag/hold), one-thumb portrait reach, haptics, the "juice" moment
6. **Content & world:** chapters/areas with mood + one-line descriptions · level count at launch · content pipeline per update
7. **Economy:** currencies (soft/hard/event) · main sources & sinks · energy/lives? · reward tables at a glance
8. **Monetization:** model (IAP/ads/hybrid) · starter pack · core offers · pass · rewarded-ad placements · ethical guardrails
9. **Retention, social & LiveOps:** daily loop (login, quests, streaks) · social (clans, friends, leaderboards) · event calendar for the first 3 months
10. **Market & comps + UA hook:** 3 comps (successful, recent, famous) and how you differ · the ad-creative hook · target KPIs (D1/D7/D30, payer conversion, ARPDAU)
```

**🪝 Make it stick:** The ten-pager is a **pirate's code**: rules that are really guidelines. Ten topics, any page count, and if it's boring to read, you've already lost the room.

> ⚠️ **2010 → 2026:** "Platform-specific features" used to mean hard drives, memory cards and dual screens. On mobile it means **touch gestures, haptics, portrait one-thumb play, push notifications, cloud save/account linking, short sessions and running well on low-end Android devices**. Cutscene "format" questions (CG? Flash?) shrink to "skippable, tiny, in-engine." The "bonus material / replay incentive" question became the whole discipline of **LiveOps**, and "competition" became a **market analysis** with download/revenue estimates.

---

## 3. Bonus Level 3 — Game Design Document Template
**🧠 Big idea:** The **GDD** is the everything-document the whole team builds from. The template is a giant checklist of sections and questions so nothing gets forgotten. Fill what you can, rough out the rest, and keep it alive.

**📋 The four ground rules (from the intro):**
1. **Genre skew:** the outline leans toward **action, adventure, platform, RPG and shooter** games, but most elements adapt to any style.
2. **Rough beats blank:** you don't need every detail filled in, but a roughed-out area beats a missing one. As Rogers tells developers, "a 'TBD' is better than nothing at all."
3. **It's a living thing:** everything in it is **liquid** and can change because of **technology limits** or **production-time realities**.
4. **Make it yours:** use it however works best for **you and your team**: draw more pictures if needed, or split the data into **one-pagers** (see Bonus Level 1).

**📐 Layout (from the rendered pages):** a **cover page**, then an outline where **bold** headings are the top-level sections, *italic* lines are sub-sections, bullets are details, and dashes go one level deeper.

### 3a. Every section of the template, in plain words
*(Grouped into "acts" for readability; the book's order is preserved.)*

**🅰️ Admin & front matter**
- **Cover:** an **evocative cover image** · the **game's title** · **document version number** (keep it current!) · **written by** (team name) · **point of contact** (producer or lead designer, with phone number) · **date of publishing** · **version number**.
- **Footer on every page:** **copyright + company + date**, **page number**, **current date**.
- **Table of contents:** keep it current.
- **Revision history:** publishing dates and **which author changed what**.

**🅱️ Vision**
- **Game goals:** the **high concept** · the "**back of the box**" list of new or novel mechanics/features · **all Internet and wireless features**.

**🅲 Story**
- **Story overview:** keep it **short** and framed **in the context of gameplay**:
  - **Set-up:** the opening situation, i.e. how the player's journey begins.
  - **Locations and how they relate to the narrative:** the story's places and what moves the player from each one to the next.
  - **Finale:** how it ends, and what the player should have become or achieved by that point.

**🅳 Controls & tech**
- **Game controls:** an **overview** listing the moves the player will do (no detail on each move *yet*) · the **control scheme** · an **image of the controller** (one per platform if multi-platform) with button mapping.
- **Technological requirements:** keep it brief; most of this belongs in the **technical design document (TDD)**:
  - *Tools the game will use:* how will camera, physics, bosses, etc. be done? Implemented by a **programmer** or a **designer**? **Hard-coded** or **scripted**?
  - *Design tools:* **level-creation tools**, **scripting system**.
  - *Proposed cheat tools (with their controls):* a **level** cheat, an **invulnerability** cheat and a **camera** cheat, then a catch-all for refills such as health, armor and money.

**🅴 The shell: front end and screens**
- **Front end of the game:** which **credit screens** show at power-on: **publisher**, **studio logo**, **licensors**, **third-party software makers**, **legal screen**.
- **Cutscene description (if any):** not the whole script, just what it's about.
- **Attract mode description (if any):** what in-game footage plays if the game sits idle on the start screen.
- **Title/start screen** (the first impression of the actual game):
  - An **image** of the screen.
  - What's presented: **title name and how it appears**, any **animation/graphics**.
  - The **list of selectable options** and **how the player navigates them** (cursor, d-pad…).
  - **Save/load:** how a game file is saved and loaded · **how a save is named** (keyboard or other naming convention) · **save details shown**: name, date, level/chapter, time played, an image of a save file (if applicable) · any **cross-save** features.
  - **Player options** (with image, sound/music and interface details, plus links between options): **video**, **audio**, **music**, **subtitle** settings, a **contrast tool**, **alternate controls** (reverse joystick, vibration feedback on/off…).
- **Other screens** (possibly unlockable from the title screen; include image, sound/music and interface details):
  - **Credits:** team photo, studio images.
  - **Bonus material:** screen images, how the player interacts, how it's **activated** (unlockable, buyable, Easter egg…): alternate costumes or weapons · cheats · **functional cheats** (invulnerability, full health…) · **licensor-required cheats** (for marketing) · **other cheats** (big-head mode, color swap…) · art/sound/animation **galleries** · a **video player** to rewatch cutscenes/movies · **trailers** for other games/products.
  - **Special features** (DVD-style extras): director-style **commentary**, **interviews** with the team, **deleted** material, a making-of **documentary**, and a **gag reel** of bloopers.
- **Game flowchart:** how every screen from **title/start** to **game over** connects.
- **Loading screen:** what the player sees while loading: an **image** of it (and whether there are several) and the **data shown** (hints, trivia questions, a minigame). *(The book's sub-lines say "pause screen" here, which reads like a slip for loading screen.)*

**🅵 Camera & HUD**
- **Game camera(s):** call out each camera type with an **image of its point of view**: from the player's eye (**first person**) or over the shoulder (**third person**), a **three-quarters** angle, a **2.5-D** view (3D art, mostly 2D movement), a **forced-scroll** camera, a **spline** (on-rails path) camera, and a **locked** camera.
  - **Camera logic:** game-specific situations needing unique cameras · a **camera troubleshooting guide** (what the camera does when it hits problems).
  - **Cheat/screenshot camera logic:** how developer/publisher can access and drive it.
- **HUD system** (images of all): health/status · lives and continues · money, score and rank · power or fuel · ammunition · abilities/skills · the timer · a map or navigation aid · option links to outside screens · **plings** (context-sensitive prompts) · the targeting reticule/cursor · a speedometer. If the game is **HUD-less**, explain how all that information reaches the player instead.

**🅶 The player character**
- **Player character(s):** name · inspirational image or concept drawing · a short description of **motivation** and **relationships** to other major characters.
- **Player metrics:** **size relationships** to other world elements/characters · **movement** (walk, run, sneak, duck, roll, crawl), with metrics · **navigation** (jump, swim, fly), with metrics and **conditions** · **hoist/hang**, with metrics · **context-sensitive moves** (push/pull, operate switch, swing…), with examples, metrics and conditions · **reactions/damage/death**, with examples and metrics · **idles**.
- **Player skills:** basic skills described · the list of **skill upgrades** (description, **skill modifiers**, metrics if applicable).
- **Player inventory tools** (equipment, spells, buffs…):
  - *List of tools:* image, what each does, controls for using it.
  - *Inventory screen:* image, how the player **opens** it, how they **select** a tool.
  - *Melee combat:* combat moves (metrics + controls) · combat reactions (metrics + controls): **block, dodge, parry, grab** · the **kinds of effect** a hit can have (plain damage, being knocked back, stunned or poisoned…) · **combat progression** (how the player improves moves) · **combo moves** (controls + combo progression) · **combat gauge** (gauge descriptors and the combat-value modifiers based on them). *(The book lists "descriptions of combo moves" twice; same content.)*
  - *Weapon combat* and *weapon progression:* **technology tree** · weapon inspiration/concept images · **damage and effects** (targeting-system details, **lock-on** details) · **ammo required** · **range** · special attributes (**breakable**, **degrades**) · controls (how to use, how to **swap** weapons).
- **Power-ups / state modifiers:** list each with **description + image**, **effect**, **duration**, and **effect on controls** (if any).
- **Health:**
  - *General:* HUD display · how to **replenish** · power-ups and health items · **low-health warning**.
  - *Alternate states* (stunned, poisoned, turned into a baby…): controls, examples and metrics.
  - *Lives* (if applicable): how they're **earned**, how they're **lost**, what happens when you **run out**.
  - *Death:* **instant-death conditions** (combat, fire, drowning…) · **game-over conditions**: penalty for dying, game-over screen (image).
  - *Checkpoints:* the **continue system**.

**🅷 Scoring & economy**
- **Scoring (if applicable):** **point values** · **bonuses** (what triggers them) · **leaderboard setup** (image, what contributes to the score) · **achievements** (list, icon images).
- **Rewards and economy:** the **monetary system**: the **shopping interface** (description, player navigation), **what money buys**, **costs**.

**🅸 Vehicles**
- How the player **enters/exits** · how the vehicle **interacts** with world, enemies, objects · **description** (with image) · **controls** · **metrics** (size, speed…) · **attributes** (armor, weapons…) with **stats** and **special effects**.

**🅹 Cast**
- **Major characters in the story:** anyone from the story outline who **impacts story or gameplay**: allies/helpers, love interests, rivals/villains. Include visuals, their **relationship to the player character**, and **where they appear**.

**🅺 Progression & levels**
- **Game progression outline:** an overview of all levels via a **beat chart**:
  - Include **story beats** to show how gameplay and story intertwine; mark each beat as **cutscene or in-game**.
  - Mark **progression/reward elements**: where new skills, abilities, weapons and collectibles are earned relative to the story.
- **Gameplay classifications:** descriptions of each gameplay type (stealth, battle arena, driving, flying…).
- **World overview / level select / navigation screen:** images (if applicable) · the **levels listed** on it · how info is presented · how the player navigates it (cursor, character…) · required **animation** (characters and/or elements) · required **sound and music**.
- **Universal game mechanics** (mechanics found throughout the game; **always include images**):
  - *Platform mechanics:* description, metrics relative to the player.
  - *Portal mechanics:* **doors** (handle/switch-operated, key-operated, breakable, hatch via context-sensitive move) · **teleportals** (description/image, effects, navigational aids).
  - *Checkpoints.*
  - *Breakable objects* (crates, furniture, grass clumps…): how they break · **what they yield and at what percentage** · other effects (explosion, timer, switch…).
  - *Non-breakable objects* (treasure chests…): description/image · yield and percentage · other effects.
  - *Puzzle objects* (push blocks, keys…), *switches*, *climbable/swingable objects*: description/image and how the player interacts.
- **Game levels** (every level named on the world overview):
  - Name/title · short description · **player's objective** (training, get from A to B, find the key…) · **reward** (level up, magic sword, progression…) · **major gameplay** in the level (stealth, platform, vehicle…) plus any **sub-game** with its gameplay and control scheme · **enemies** found there · **visual style guide** (inspirational and concept art, **time of day**, **color guide**) · **music** (examples/sound files).
  - **Hub level:** description/image · locations in the hub · **travel/unlock requirements** · **state changes** · save/load options (if any).
  - **Training level:** its goals and list of activities.
  - **Level-specific mechanics:** **hazards** (spikes, flame jets, laser fields…): description/image · **timing info** · damage/effect · how it affects the player (movement, health…) · **how the player avoids or thwarts it** · special effects/elements needed.
  - **Level-specific contextual mechanics:** description/image · timing · effect · how it affects the player · how the player interacts · special effects/elements needed.

**🅻 Enemies & bosses**
- **General enemy rules** (the rules every enemy obeys): **behavior types** (patroller, hunter, flyer…) · how the **AI** thinks, with the numbers for how far and how well enemies **detect** the player · how and where they **spawn** · what counts as **defeating** one · how loot **payouts** work.
- **Level-specific enemies** (one entry per enemy): picture · description including its **type** · which levels it shows up in · **movement pattern** (with metrics) · **attacks** (how much damage, plus side effects like knockback or stun) · how it reacts to damage and dies · its idle behavior · special effects · what it drops.
- **Bosses:** picture plus description (**show its scale**) · **weak points/attack spots** · **interaction with the player** (hurts on collision? only in certain states?) · **movement patterns** (metrics relative to player) · **attack patterns** (**warnings**, each attack's damage and special effects, reactions/damage/death, idles) · **the player's experience** (intro/cutscene, **number of rounds**, how the action **ramps**) · the **environment** (description/image, hazards and mechanics used, power-ups/collectibles found, other enemies in the fight) · **how the boss is defeated** · **reward yield**.

**🅼 NPCs, collectibles, minigames**
- **Non-player characters:** **NPC type overview** (information giver, mission deliverer, escort/defend…) · **character list** (name, sex, age, background, NPC type, level where met) · **interacting with NPCs** (dialogue, collision) · **NPC rewards**.
- **Collectibles / object sets:** list with images, level(s) where found, and what the object or set **unlocks**.
- **Minigames:** types · how they're **accessed** · player controls · **elements needed or repurposed** · levels where encountered.

**🅽 Cutscenes, music & sound**
- **Cutscenes:** list · short outline of each · level where shown.
- **Music and SFX:** list of music with the **level where each is needed** (don't forget **title, pause, options, end credits**) and the **tone/feeling** of each.

**🅾️ Licensor**
- **Licensor points and concerns** (for licensed games: what the IP holder cares about).

**🅿️ Appendixes**
- Player-character **animation lists** · enemy **animation lists** · **sound-effects list** · **music list** (with level location) · **cutscene scripts** (with storyboards) · **voice-over scripts** for the hero, the enemies, the bosses and the **NPC barks** (short shouted lines) · **in-game text**: warning screens, tutorial copy, and dialogue or subtitles.

**🎮 Book examples:** this section is a template, so its "examples" are the sample entries inside it: camera types (first person to locked), HUD elements (plings, speedometer…), hazards (spikes, flame jets, laser fields), alternate states (turned into a baby!), cheats (big-head mode, color swap).

### 3b. What survives the trip to F2P mobile (book field → mobile reality)

| Book section | Still useful? | Mobile F2P version |
|---|---|---|
| Version number, revision history | ✅ More than ever | Changelog on every wiki page; link to the live remote-config version |
| Game goals / back of the box | ✅ | **Pillars** + store-page feature bullets |
| Story overview | ✅ shorter | Fantasy + light narrative wrapper (renovation story, rescue story) |
| Controller image + mapping | 🔄 | **Gesture map** (tap/swipe/drag/hold), thumb-reach zones, haptics |
| Cheats (level, invulnerability, money…) | ✅ | **Debug/cheat panel** for QA and balancing (grant currency, skip level, set time) |
| Credit screens, legal screen | 🔄 | Splash kept **very short**; consent/ATT/privacy prompts; age gate |
| Attract mode | 🔄 | Store **preview video** and **ad creatives** do this job now |
| Save/load, file naming, cross-save | 🔄 | **Cloud save + account linking**, automatic saving; no manual saves |
| Options screen | ✅ | Sound/music/haptics/notifications/language/account/support/privacy |
| Bonus material, unlockable costumes | 🔄 | **Cosmetics shop**, pass rewards, event skins |
| Loading screen hints/minigame | ✅ | Tips + keep loads short; first launch must be fast |
| Camera types | 🔄 | Usually fixed: top-down, isometric, side, or a static puzzle board |
| HUD system | ✅ | Plus currency bar, energy/lives, event timers, **red-dot** notifications, offer buttons |
| Player metrics | ✅ (action games) | Hitboxes and touch-target sizes; for puzzle games: board size, tile counts |
| Lives / game over / continue | ✅ big deal | **Lives/energy systems**, **continue offers** (soft/hard currency or rewarded ad) |
| Scoring, leaderboards, achievements | ✅ | Leagues, weekly leaderboards, quests/missions |
| Rewards and economy (monetary system) | ⭐ Expand massively | A full **economy section**: currencies, sources/sinks, pricing, inflation control |
| Game progression outline / beat chart | ✅ | **Level/chapter map** + difficulty curve + reward cadence chart |
| Universal mechanics, hazards | ✅ | Puzzle blockers, boosters, obstacles (see §6) |
| Enemies / bosses | ✅ | §7–8 templates; also event and guild bosses |
| Licensor concerns | ✅ | **IP collaborations** are common LiveOps events |
| Appendixes (animation, SFX, VO, text) | ✅ | Plus **localization string tables** and an **analytics event dictionary** |
| *(missing in 2010)* | ➕ | **FTUE, monetization, LiveOps, analytics/KPIs, A/B testing, compliance, live balancing** |

### 3c. 📱 Ready-to-use F2P mobile GDD template (fill in the blanks)
```markdown
# <GAME TITLE> — Game Design Document
Version: <x.y> · Last updated: <date> · Owner: <lead designer> · Contact: <email/Slack>
Footer: © <company> <year> · page # · current date
> Status legend: ✅ final · 🟡 draft · ⬜ TBD (a TBD beats a blank!)

## 0. Admin
- Table of contents (auto) · Revision history (date · author · what changed)
- Links: economy sheet · balancing tables · remote-config dashboard · analytics dashboard · art bible · backlog

## 1. Vision & pillars
- High concept (1 sentence): ____
- 3 design pillars (decide every argument with these): 1) ____ 2) ____ 3) ____
- Player fantasy: "I am ____ who ____"
- Target audience: age ____, motivations (relax/compete/collect/express/socialize) ____, core geos ____
- Platforms & orientation: iOS/Android · portrait/landscape · min-spec device ____
- Session target: ____ min × ____ sessions/day

## 2. Market & comps
- Genre/subgenre: ____ · Top 3 comps (successful + recent + well known) and our difference: ____
- Market gap / trend we ride: ____

## 3. Core loop
- Diagram: [action] → [reward] → [spend/upgrade] → [harder action]
- Moment-to-moment gameplay (what the thumb does every second): ____
- One session, step by step: open → ____ → ____ → natural stopping point ____
- Win/lose conditions per level/match: ____

## 4. Controls & feel
- Gestures: tap ____ / swipe ____ / drag ____ / hold ____ · one-thumb reach respected? Y/N
- Feedback ("juice"): animation ____, VFX ____, haptics ____, sound ____
- Touch-target minimums (approx. 44pt iOS / 48dp Android) · safe areas / notch handling

## 5. Meta loop & progression
- Long-term goals (player level, chapters/map, base/home, collection, hero roster): ____
- Progression curve: levels/chapters at launch ____, unlock schedule ____
- Reward cadence chart (what the player gets at minute 1, 5, 15, day 1, day 3, day 7): ____

## 6. Content
- Level/chapter list (name · objective · new mechanic introduced · reward · difficulty tier) — table
- Difficulty curve rules (spikes, "breather" levels, hard/super-hard markers): ____
- Mechanics & blockers catalogue (name · behavior · counter · first level) — table
- Content pipeline: levels per update ____, tooling ____

## 7. Characters / units / heroes
- Roster table: name · role · rarity · stats · skills · how obtained
- Enemies & bosses → link to Enemy/Boss templates (§7–8 of the Toolkit)

## 8. Economy
- Currencies: soft ____ · hard (premium) ____ · event ____ · energy/lives ____
- Sources & sinks table (currency · source · amount/day · sink · cost) — keep it balanced
- Inflation/deflation controls: ____ · Reward tables & drop rates (publish odds where required): ____
- Pity/guarantee rules (if any randomized rewards): ____

## 9. Monetization
- Model: IAP-led / hybrid / ads-led · Price-point ladder: ____
- Store layout & offers: starter pack ____, value packs ____, personalized offers ____ (trigger: ____)
- Season/battle pass: free track ____, premium track ____, length ____
- Rewarded-ad placements (opt-in, value given): ____ · Interstitial policy (frequency caps; none in FTUE): ____
- Ethical guardrails: no pay-to-progress walls without a free path, spending limits for minors, clear odds, no fake urgency ____

## 10. FTUE / onboarding
- First 60 seconds: ____ · First session goal: ____ · Tutorial steps (one mechanic per step) — table
- D1 hook (why come back tomorrow?): ____
- Funnel events to track each step: tutorial_step_<n>_complete

## 11. Retention systems
- Daily: login calendar ____, daily quests ____, streaks ____
- Weekly: leagues/leaderboards ____, weekly events ____
- Social: clans/teams ____, friends ____, gifting/help ____, chat moderation ____
- Push notifications (opt-in, capped, useful): ____

## 12. LiveOps
- Event types (collection, race, tournament, boss, mini-game, collab): ____
- Calendar for first 90 days (week-by-week) · season length & theme rotation: ____
- Remote config: tunable values list ____ · Content-drop process ____

## 13. UX/UI
- Screen flow diagram (boot → home → level → results → home/shop) · HUD layout (currencies, timers, red dots)
- Store UI · notifications/badges rules · accessibility (color-blind safe, text size)

## 14. Art & audio direction
- Style references ____ · color guide ____ · readability at phone size ____ · music list (home, level, win, lose, shop, event) ____ · SFX list ____

## 15. Tech
- Engine ____ · backend/server authority ____ · save/cloud/account linking ____ · offline behavior ____
- SDKs (analytics, ads mediation, attribution, crash reporting) ____ · download size budget ____ · performance budget ____

## 16. Analytics & KPIs
- Target KPIs (illustrative — set per genre): D1 ____ · D7 ____ · D30 ____ · payer conversion ____ · ARPDAU ____ · session length ____
- Event dictionary: | event_name | trigger | parameters | e.g. level_start, level_complete, level_fail(reason), purchase(sku, price), ad_watched(placement), currency_earned(source, amount), currency_spent(sink, amount), tutorial_step |
- Funnels to watch: install → tutorial complete → level 10 → first purchase
- A/B test plan: hypothesis · variant · metric · duration

## 17. Compliance & legal
- Age rating ____ · privacy (GDPR/CCPA/COPPA as applicable) ____ · loot-box/odds disclosure rules per country ____ · store policy checks ____

## 18. Localization
- Launch languages ____ · string table location ____ · text expansion rules ____

## 19. Appendixes
- Animation lists · SFX/VO lists · in-game text (tutorial, warnings, dialogue) · debug/cheat panel commands
```

**🪝 Make it stick:** The GDD is a **sourdough starter**: alive, needs feeding (updates), smells bad if neglected, and a jar labeled "TBD" is still better than no jar.

> ⚠️ **2010 → 2026:** Console-era GDDs spent pages on save files, attract modes and controller maps. Mobile GDDs spend those pages on **economy, monetization, FTUE, LiveOps and analytics**, because in F2P the game keeps changing after launch. The book's "living document" rule is now literal: values sit in **remote config** and change weekly. Keep the book's habits: **version numbers, revision history, images everywhere, TBDs instead of blanks, one-pagers per feature.**

---

## 4. Bonus Level 4 — The Medium-Sized List of Story Themes
**🧠 Big idea:** A one-glance **menu of story genres** (about 48 entries) to pick from, remix, or use as a checklist when your concept feels generic. It's a brainstorming tool, not a rulebook.

**📋 The details: how the list is built:**
- **Alphabetical, two columns**, with a **"Family: flavor"** naming pattern so one big genre splits into sub-genres. The families and how many flavors each gets:
  - **Adventure** (4 flavors): e.g., period piece, survival/disaster, swashbuckler/pirate, pulp "two-fisted" action.
  - **Comedy** (2): romantic, screwball/slapstick.
  - **Fantasy** (4): e.g., fairytale, **mythology** (Greek, Japanese, Chinese, Norse…), swords and sorcery, whimsical.
  - **Horror** (5): e.g., B-movie/giant monster, gothic (vampires, werewolves, Frankenstein), sci-fi horror, slasher, zombie/end of the world.
  - **Sci-fi** (7, the biggest family): e.g., cyberpunk, Japanese giant-robot/sentai, realistic, 1930s retro, space opera, steampunk, undersea.
  - **Sports** (3): Olympic, racing, team sports.
  - **War**, split by era (World Wars, revolutions and civil wars, crusades, Napoleonic, modern conflicts). A footnote apologizes to international readers for the list's **American bias** in war and history.
- **Stand-alone genres** fill the rest, covering crime and law (police/crime drama, caper/heist/thief, mobster, espionage, mystery, film noir), drama (family, medical, school/teen, political), entertainment (musical, rock 'n' roll, game show, documentary/showbiz), plus western/spaghetti western, superhero, martial arts/ninja, cartoon/anthropomorphic animals, educational, **nurture/tamagotchi**, grindhouse/exploitation, and adult/erotic.

**🛠️ How to use it as an idea generator:**
- **Mash two themes:** pick one entry from each column. *Farm Wars* is literally "cartoon/anthropomorphic" + "war" + "sci-fi: steampunk/giant robot."
- **Re-skin a mechanic:** keep your core loop, swap the theme, and see which one gives the strongest player fantasy (a heist match-3? a gothic-horror merge game?).
- **Theme-check your audience:** some themes fit your target rating/age, some don't (the list deliberately includes adult themes so you can rule them in or out).
- **Pair with Bonus Levels 5 and 6:** theme + environment + mechanic = instant level pitch.

**🎮 Book examples:** none beyond the list itself; the *Farm Wars* sample shows themes being mashed in practice.

**📱 F2P mobile translation — themes that proved themselves on phones (my additions):**

| Theme (mobile flavor) | Why it works on mobile | Real examples |
|---|---|---|
| **Home renovation / makeover** | Visible progress, cozy, broad appeal | *Homescapes*, *Gardenscapes* |
| **Family mystery + renovation** | Story drip-feeds reasons to keep playing | *Merge Mansion* |
| **Royal / kingdom** | Simple, bright, aspirational | *Royal Match*, *Royal Kingdom* |
| **Cozy farming / small town** | Relaxing routines, social trading | *Hay Day*, *Township* |
| **Frozen post-apocalypse survival** | Stakes + city-building + alliances | *Whiteout Survival* |
| **Cartoon fantasy warfare** | Readable units, humor, competition | *Clash of Clans*, *Clash Royale* |
| **Cute food / candy world** | Instantly readable, all ages | *Candy Crush Saga*, *Cookie Run: Kingdom* |
| **Anime fantasy / space opera** | Character collection fantasy | *Genshin Impact*, *Honkai: Star Rail* |
| **Board-game party / money** | Familiar IP-like fantasy, social | *Monopoly GO!* |
| **Urban escape runner** | One-screen chase fantasy | *Subway Surfers* |
| **Lost-temple adventure** | Classic chase-for-treasure | *Temple Run* |
| More to try (my ideas): cooking/restaurant tycoon · pet rescue · magic academy · island resort · dream wedding · detective case files · cozy café · space colony | | |

**🪝 Make it stick:** It's a **cocktail menu**: one shot of "gothic horror," a splash of "cooking tycoon," shake well, serve as a portrait-mode merge game.

> ⚠️ **2010 → 2026:** The list is genre-complete but console-flavored. On mobile, the theme must **read in a 1-second ad and a 3-icon store page**, and cozy/aspirational themes (renovation, farms, kingdoms) are proven at scale. Edgy themes (grindhouse, slasher, adult) shrink your audience and can complicate age ratings and ad networks.

---

## 5. Bonus Level 5 — The Big List of Environments
**🧠 Big idea:** A long **alphabetical menu of settings** (roughly 150) for levels and worlds. The author notes he'd rebuilt this list about half a dozen times over his career, so it's as much for him as for you: keep your own version.

**📋 The details: what kinds of places it covers (with representative entries):**
- **Natural biomes:** beach, cave, desert, forest, jungle, mountain, swamp, glacier, volcano, underwater, savannah.
- **Elemental worlds:** the classic **fire world**, **ice** world, sky/clouds, even the **surface of the sun**.
- **Urban spaces:** city street, rooftops, sewer, subway, skyscraper, suburbs, freeway, a famous real city.
- **Buildings and interiors:** bank, hospital, museum, library, hotel, kitchen, mansion, office, school, police station, prison.
- **Industrial:** factory, chemical plant, oil refinery, nuclear reactor, junkyard, construction site, mines.
- **Historical and cultural:** Egyptian tomb, Mayan temple, medieval village, castle, Wild West town, pirate ship/town, prehistoric caves, ancient ruins.
- **Sci-fi:** alien planet, alien ship, space station, a **cyberspace** world (Tron-style), a **biomechanical** area (Alien-style), futuristic city, utopia.
- **Fantasy and whimsy:** candy land, toy land, fairytale land, a **sock-puppet world**, heaven/Olympus, underworld, Atlantis.
- **Moving vehicles as levels:** airplane, moving train, cruise ship, submarine interior, zeppelin interior.
- **Entertainment venues:** arcade, casino, circus, carnival, theme park, movie set/TV studio, concert hall, disco, sporting arena.
- **Scale modifiers (a clever trick):** a **giant-sized world** (the book notes this can apply to *any* theme), a **"little" world** where the player has been shrunk, and **inside a creature / on top of a giant creature**.
- **Military and conflict:** battlefield / war zone / no man's land, fort, military base (Area 51 style), missile silo, a Russian city or base, even Fort Knox (the classic heist target).
- **Faith, death and the spooky:** church, monastery, temples and dojos (Chinese, Japanese, "oriental"), graveyard, funeral home, haunted house, heaven/Olympus on one end and underworld/hell on the other.
- **Water and coast:** beach, marina/seaport, river, bayou, ocean surface, desert island, aquarium and ocean park, undersea base/city/grotto.
- **Commerce, food and nightlife:** restaurant, fast-food joint, mall/marketplace, bar/cantina, toy store, strip club (casinos sit under entertainment venues above).
- **Rural, domestic and green spaces:** farm/ranch, rustic village, house, garden, park, playground, campsite, treehouse village, topiary maze or hedge labyrinth.
- **Transport hubs:** airport/airship port, train station, freeway, subway, plus the moving vehicles above.
- **Cultural districts and landmarks:** Chinatown, an Indian reservation/village/burial ground, a famous monument, New York City, a Russian city.
- **Mature settings** are included too (so you can consciously rule them in or out for your rating).

**🛠️ How to use it as an idea generator:**
- **Scale flip:** apply "giant world" or "shrunken player" to any ordinary entry (a kitchen becomes a jungle of pots).
- **Theme × place:** story theme (BL4) × environment = a world concept (gothic horror × cruise ship; steampunk × farm…).
- **Variety audit:** check your world list covers different moods, colors and mechanics (a level set of forest/jungle/swamp is three greens in a row).
- **Mechanic seeding:** each place suggests hazards and props (factory → conveyors, presses; ice → slippery floors).

**🎮 Book examples:** none beyond the list; Tron and Alien are cited as style references for cyberspace and biomechanical areas.

**📱 F2P mobile translation — how environments are used on mobile (my additions):**
- **Puzzle games:** the environment is usually the **meta backdrop** you renovate or decorate between levels (rooms, gardens, castles), not the level itself.
- **4X / strategy:** environments become **world-map biomes** and **seasonal map themes**.
- **Runners / arcade:** environments are **track skins**, often rotated with **LiveOps seasons** (a city in winter, a beach in summer).
- **Event re-skins:** the cheapest LiveOps content is a known mode in a **new environment + new music + themed currency**.
- **Mobile-proven places to add to your list:** cozy living room, garden, bakery, café, flower shop, beauty salon, pet shop, hotel lobby, island resort, ski lodge, frozen settlement, zombie-ridden outpost, castle grounds, magic school, dream house, food truck, theme-park midway, holiday village (seasonal).

**🪝 Make it stick:** A **travel agency brochure**: every page is a destination, and the "shrink ray" coupon works on all of them.

> ⚠️ **2010 → 2026:** On a phone, an environment has to **read at thumbnail size and not clutter the play area**. Busy backgrounds hurt puzzle readability; mobile art typically uses lower-contrast backgrounds and high-contrast gameplay pieces.

---

## 6. Bonus Level 6 — Mechanics and Hazards
**🧠 Big idea:** A quick-reference list (about 35 items) of the **gameplay objects** action and platform games are built from: things that move you, things that hurt you, and things you interact with. It's the parts bin for level design.

**📋 The details: the list grouped into families (representative items, not the full list):**
- **Traversal and movers:** moving platforms (in several directions) · platforms that **sink, shrink or collapse** · ladders · swinging vines · zip lines · conveyor belts · slippery ice · springs and jump pads · climbable walls · catapults that launch the player or objects · …and a few more movers.
- **Timing hazards:** pendulums and swinging objects (timing puzzles) · spinning hazards · things that **smash down or up** · blasting flame, wind or cannons (timing puzzles) · exploding objects.
- **Area hazards:** deadly surfaces, sticky floors or poison gas that **slow the player** · something that **grabs the player and needs a different move to break free** · **spotlights to avoid** (stealth).
- **Gates and transport:** teleportals · opening/closing doors and drawbridges · locked doors needing a **key or another method**.
- **Puzzle props and interactives:** push blocks · pressure plates · levers · carryable/throwable objects · breakable objects · **two-stage** openable or breakable objects · lighting fixtures that control **light and darkness** · …plus a couple of other switch-style props.
- **Rewards and support:** treasure chests and resource dispensers (health/ammo).
- **Also on the list (the leftovers, so nothing is skipped):** an **accelerator** (a speed-boost tile or strip) · a **rotating platform** · a **crank or pump** the player operates · a **balance beam** · a **shootable target** that triggers something · a **two-stage** openable or breakable object (listed above under props). Note how many of these are *player-operated* (crank, lever, target, carryable): the list mixes hazards that act on you with tools you act on.

**🛠️ How to use it:**
- **Pick 1 new + 2 familiar per level:** introduce one mechanic, combine it with known ones (→ L12 orchestration, → L09 level design).
- **Combine with timing:** most items get interesting when paired (conveyor + smasher = a timing gauntlet).
- **Fill the GDD's "universal mechanics" and "level-specific hazards" sections** straight from this list: each item needs description, image, timing, effect, and how the player avoids or uses it (→ §3 above).

**🎮 Book examples:** none in this bonus level; the deep dive lives in → L12 (Nuts and Bolts of Mechanics).

**📱 F2P mobile translation — the mobile mechanics parts bin (my additions):**

| Mobile mechanic | Input | Known example | Hazard/twist ideas (the "BL6" layer) |
|---|---|---|---|
| **Match-3 swap** | Swipe two pieces | *Candy Crush Saga*, *Royal Match* | Spreading blockers (Candy Crush's chocolate), locks, layered ice, countdown bombs, conveyor belts, portals, drop-to-bottom collectibles |
| **Tap-to-blast groups** | Tap 2+ same-color pieces | *Toon Blast* | Balloons, crates with layers, color-changing blockers |
| **Connect the dots** | Drag a line | *Two Dots* | Anchors to sink, ice to crack, spreading hazards (ideas) |
| **Triple tile-match** | Tap items into a tray | *Match Factory!* | Limited tray slots, hidden layers, timers |
| **Block placement** | Drag shapes onto a grid | *Block Blast!* | No-fit board states, combo streak bonuses |
| **Merge-2** | Drag identical items together | *Merge Mansion*, *Travel Town* | Board space limits, generators with energy, locked or covered tiles |
| **Lane swipe runner** | Swipe left/right/up/down | *Subway Surfers*, *Temple Run* | Trains, barriers, low/high obstacles, speed ramp |
| **Slice** | Swipe across | *Fruit Ninja* | Bombs you must not slice |
| **Drag-aim slingshot** | Pull back and release | *Angry Birds 2* | Destructible structures, TNT, wind |
| **Cut / physics puzzle** | Swipe to cut | *Cut the Rope* | Spikes, bubbles, air cushions |
| **One-tap flap / timing** | Tap | *Flappy Bird* | Gaps, moving pipes |
| **Rotate-the-world** | Drag sideways to spin the tower | *Helix Jump* | Danger-colored segments, faster drops |
| **Gas/brake physics** | Two pedals | *Hill Climb Racing* | Fuel limit, flips, terrain |
| **Auto-attack when still** | Move to dodge, stop to shoot | *Archero* | Projectile patterns, traps, skill choice on level-up |
| **Auto-battle survivor** | Move only | *Survivor.io* | Enemy swarms, elites, timed bosses |
| **Auto-battle team placement** | Choose and place team | *AFK Arena*, *AFK Journey* | Formation counters, faction advantages |
| **Card deploy with resource** | Drag cards onto arena | *Clash Royale* | Elixir timing, counters, towers |
| **Dice roll board** | Tap to roll | *Monopoly GO!* | Multipliers, events, tiles that trigger mini-games |
| **Idle / tap-to-upgrade** | Tap, then wait | Idle tycoon genre | Offline caps, prestige resets, boosts |

- **Key insight:** the book's console hazards map straight onto puzzle-game obstacles: **conveyor belts** and **teleportals** literally exist on match-3 boards; **two-stage breakables** = multi-layer blockers; **spreading poison gas** = spreading chocolate/slime; **locked door needing a key** = locked tiles cleared by an adjacent match.

**🪝 Make it stick:** A **LEGO bin**: about 35 pieces, infinite castles. The mobile bin just has more 1×1 pieces (tap, swipe, drag, hold).

> ⚠️ **2010 → 2026:** Precise-timing platform hazards are hard on a glass screen with no buttons. Mobile versions favor **forgiving timing, bigger hitboxes, one-input controls, and turn-based or puzzle hazards** that test planning more than reflexes.

---

## 7. Bonus Level 7 — Enemy Design Template
**🧠 Big idea:** One sheet per enemy that captures **who it is, how it moves and attacks, how it dies, and every asset it needs** (animations, effects, sounds, HUD bits, rewards). It turns a cool sketch into a buildable, testable enemy.

**📋 The details: every field and what goes in it:**

| # | Field | What goes in it |
|---|---|---|
| 1 | **Enemy name** | The name (a blank line to fill) |
| 2 | **Enemy image** | Concept art or an inspirational reference image |
| 3 | **Description** | A short write-up of the enemy's **personality and motivation** (why does it fight?) |
| 4 | **Animation list** | Stand · idle · **taunts** · melee attacks · projectile attacks · **hit reactions** · death animations · **victory animations** (what it does when it beats you) |
| 5 | **Movement patterns** | As many as needed: Move 1, Move 2… each with an **image and description** |
| 6 | **Attack descriptions** | As many as needed: Attack 1, Attack 2… each typed as **melee, projectile or special** |
| 7 | **Enemy is defeated by** | How the player beats it |
| 8 | **Damage description** | How damage is **communicated** to the player; any special visual effects needed |
| 9 | **Particle effects** | VFX needed for **attacks, movement and damage states** |
| 10 | **Projectiles** | If used, the list of projectiles its attacks need |
| 11 | **HUD elements** | Any extra HUD needed for the fight (e.g., icons for **QTEs**, quick-time events) |
| 12 | **Sound effects list** | **Matched to the animation list** (every animation gets its sounds) |
| 13 | **Voice effects list** | Also **matched to the animation list** |
| 14 | **Special requirements for the player character** | Animations/effects the *player* needs because of this enemy's attacks (e.g., a grab attack means the hero needs a "grabbed" animation) |
| 15 | **Player reward** | What, if anything, the player gets for defeating it |

**Why the template is built this way:**
- **Fields 4 + 12 + 13 cross-check each other:** if an animation has no sound line, someone forgot something.
- **Field 14 catches cross-team dependencies** early (the enemy team's cool attack creates work for the player-character animators).
- **Personality first (field 3):** behavior and animation (taunts, victory dances) flow from character, which makes enemies memorable (→ L11).

**🎮 Book examples:** the template itself; the *Farm Wars* enemy roster in BL2 shows the "attacks + minions" thinking in prose.

**📱 F2P mobile adapted enemy template (fill in):**
```markdown
# Enemy: ______________      Status: ⬜ TBD / 🟡 draft / ✅ final   Owner: ____
**Image:** <concept / reference>   **Silhouette test:** readable at thumb size on a phone? Y/N
**Personality & motivation:** ____ (one line players could repeat)
**Role / archetype:** tank / swarmer / ranged / charger / healer / bomber / splitter / support
**First appears:** level/chapter ____  · **Intro moment:** "New enemy!" card / tutorial hint ____
**Stats (base):** HP ____ · damage ____ · speed ____ · range ____ · armor ____
**Scaling rule:** per level/chapter/event tier ____ (formula or table link)
**Animation list:** spawn · idle · move · **telegraph/wind-up** · attack(s) · hit react · stun · death · victory/taunt
**Movement patterns:** 1) ____ 2) ____ (image + description each)
**Attacks:** name · type (melee/projectile/area/special) · **telegraph time (ms)** · damage · effect (knockback/stun/slow/DoT) · how to dodge/counter
**Defeated by / countered by:** ____ (which hero, card, booster or tactic counters it — always beatable for free)
**Damage feedback:** hit flash · damage numbers · health bar above head · **haptic** pulse ____
**VFX (with budget):** attacks ____ · movement ____ · damage states ____ · max particles on screen ____
**Projectiles:** ____ (pooled? speed? size readable?)
**HUD elements:** off-screen indicator · warning icon · boss-style bar? ____
**SFX list (match animation list):** ____   **VO/barks (match animation list):** ____
**Player-side requirements:** new player reactions/VFX needed? ____
**Spawn rules:** waves ____ · max on screen (performance cap on low-end devices) ____
**Reward yield:** XP ____ · soft currency ____ · drop table (item · %) ____
**LiveOps variants:** event skin ____ · elite/champion version ____
**Analytics:** enemy_killed(enemy_id, level) · player_killed_by(enemy_id) · avg time-to-kill ____
**Accessibility:** color-blind safe telegraphs? ____
```
- **Puzzle-game variant ("blocker template"):** name · image · **layers** (how many hits) · behavior (static / spreads / moves / counts down) · **how it's cleared** (adjacent match, special piece, booster) · first level + tutorial text · difficulty weight (how much harder levels get when it appears) · VFX/SFX for each layer break · analytics (levels failed with blocker remaining).

**🪝 Make it stick:** The enemy template is a **casting call sheet**: name, headshot, personality, every scene they're in (animations), their costume and props (VFX, projectiles), their lines (VO) and their paycheck (reward).

> ⚠️ **2010 → 2026:** QTE icons and long taunt animations are rare on mobile. Instead add **telegraph timing, readability at small sizes, performance caps (enemy count, particles), scaling formulas, drop tables and analytics** — the fields that matter when enemies are tuned live for months.

---

## 8. Bonus Level 8 — Boss Design Template
**🧠 Big idea:** The boss template is the enemy template **plus** two boss-specific upgrades (weak spots/vulnerable states and the health bar) and a whole second page for the **Boss Fight Arena**, because a boss fight is an enemy *and* a level designed together.

**📋 The details: every field:**

*Page 1 — the boss (same skeleton as the enemy template):*
- **Boss name** · **boss image** (concept or inspirational) · **description** (**personality and motivation**).
- **Animation list:** stand, idle, taunts, melee attacks, projectile attacks, hit reactions, death animations, victory animations.
- **Movement patterns** (as many as needed, image + description) · **attack descriptions** (as many as needed; melee, projectile or special).
- **Boss is defeated by:** how the player wins **+ does the boss have weak spots or vulnerable states?** *(boss-specific)*
- **Damage description:** **what the boss's health bar looks like** *(boss-specific)*, how damage is communicated, any special VFX.
- **Particle effects** (attacks, movement, damage states) · **projectiles** (if used).
- **HUD elements** (extra HUD such as QTE icons) · **sound effects list** and **voice effects list** (both matched to the animation list).
- **Special requirements for the player character** (animations/effects needed to go with the boss's attacks).
- **Player reward:** what the player gets for defeating the boss (note: unlike the enemy template, the "if anything" is gone; a boss should always pay out).

*Page 2 — the Boss Fight Arena:*
- **Arena image:** concept drawing or **map** of the environment.
- **Arena description:** a short description of the place and **the action that takes place there**.
- **Level elements:** mechanics, hazards or props needed for the fight (→ BL6 list).
- **Boss fight music tracks:** the list of tracks, including notes on **contextual music** (e.g., music that shifts when the boss enters a new phase).

**Why it's built this way:**
- **Weak spots + vulnerable states** are the heart of a boss puzzle (→ L11): the template forces you to define *how* the player learns and exploits them.
- **Health bar design** is a communication tool: segments and phase markers tell players they're making progress.
- **The arena is half the fight:** hazards, cover and props define the dance; separating them makes the level designer a co-owner.

**🎮 Book examples:** the template itself; *Farm Wars*' "boss every four rounds" (BL2) shows bosses as progression gates.

**📱 F2P mobile adapted boss template (fill in):**
```markdown
# Boss: ______________     Owner: ____   Status: ⬜/🟡/✅
**Boss type in the meta:** chapter gate / weekly event boss / guild (co-op) boss / world boss / PvE raid
**Image + on-screen scale:** fits portrait safe area? weak points visible without camera moves? ____
**Personality & motivation:** ____  · **Intro:** 3-second skippable reveal ____
**Phases:** P1 (100–70% HP) ____ · P2 (70–40%) ____ · P3 (40–0%) ____ — each adds one new pattern
**Animation list:** idle · move · telegraph per attack · attacks · hit react · **phase transition** · stunned/vulnerable · death · victory
**Attacks:** name · telegraph (ms + visual + audio cue) · damage · effect · counterplay
**Weak spots / vulnerable states:** where, when, how long open · **tap-target size ≥ ~44pt/48dp**
**Health bar:** segmented? phase markers? shield layer? shared guild HP pool?
**Defeat condition & fail state:** time limit? lives? → retry flow · continue offer (soft currency or rewarded ad; never the only path)
**Target win rate / attempts:** first-try clear ____% · expected attempts ____ (tune with live data)
**Arena:** image/map ____ · hazards & props ____ · power-ups/boosters usable ____ · adds/minions ____
**Music:** main loop ____ · phase change stinger ____ · win/lose jingles ____
**Rewards:** first clear ____ · repeat clears ____ · damage leaderboard / guild rewards ____
**Monetization touchpoints (ethical):** pre-fight boosters ____ · continue offer ____ · no unwinnable-without-paying design
**LiveOps:** rotation schedule ____ · reruns with modifiers ____ · themed skins ____
**Analytics:** boss_attempt · boss_win(time, attempts) · boss_fail(phase, cause) · continue_offer_shown/accepted
```

**🪝 Make it stick:** A boss without an arena is a **rock star without a stage**: same guy, no show. Book the venue (arena), the lights (VFX), the band (music) and the encore (rewards).

> ⚠️ **2010 → 2026:** Bosses still work on mobile, but they often live in the **meta** (event bosses, guild bosses with shared HP and damage leaderboards) and are tuned against **live win-rate data**. Continue offers make bosses a monetization moment, which is exactly why they need **ethical guardrails**.

---

## 9. Bonus Level 9 — High Concept Pitch Presentation
**🧠 Big idea:** A **nine-slide** presentation that sells the game to people with money and power. Each slide answers one question a decision maker has, in order, with big art and few words. The *Farm Wars* sample slides show it in action.

**📋 The details: every slide, what goes on it, and what the sample shows:**

| Slide | What goes on it (book guidance) | *Farm Wars* sample slide |
|---|---|---|
| **1. Cover page** | A **compelling image + logo** that sums up the game · the **date of the presentation** (so they remember when the meeting happened) · author credit as the **studio's name** (no one makes a game alone) · **contact info** (email and/or phone) | Logo, the cow-mech splash art, "game pitch by…", date, contact line |
| **2. Company profile** | Briefly: **who you are, what you've done, how long** you've done it · a great place to show **covers of your studio's games** · skip it when presenting to your **own peers** | (Text guidance only) |
| **3. Target specs** | The basics: **what kind of game**, **rating**, **audience**, **how long to play** | Genre action/strategy · E10 (ages 8–15) · Xbox Live Arcade and PSN · 10+ hours |
| **4. Game story** | **Who is the player**, what's the **story**, what's the **conflict** · beginning, middle and end, or at least a **cliffhanger** that makes them want the ending | The farm-under-attack story with a duck piloting a mech |
| **5. Game goals** | The **most kick-ass features**; why should they care? Aim for **five "back of the box" goals** | Five bullets: farm *and* fight (two popular genres combined) · fast action + massive bosses · customize everything (farm, crops, farmer, weapons) · a gigantic tech tree (hundreds of weapons, defenses, sellable crops) · multiplayer to defend, raid and trade together |
| **6. Gameplay summary** | Major points of play: **basics of play**, **camera view**, how play **expands/increases in challenge**, the **environments**, the **"hooks"** that make it unique | Gameplay paragraph + two "gameplay continued" slides (isometric camera, contextual controls, the five phases) |
| **7. Gameplay details** | The more interesting details, so they can imagine **what playing feels like** · give any **important element its own slide** so its impact is clear | A "technology trees" slide: six trees (armor, offensive weapons, Deth-tech, farming tools, crops/seeds, defense systems) + the drawn fence-to-laser progression |
| **8. Download strategy** | Most games need **download support to extend life beyond release**: outline those plans | Six-plus months of DLC (maps, crops, crop trading, tech, dog companion, holiday costumes, co-op/competitive multiplayer) |
| **9. Production specs** | The production plan: **team size**, **how long** it takes, **how much it costs** | Number of programmers/artists/designers · a timeline with schedule and milestones · estimated production cost |

**Why the order works:** *Who are you?* (cover, company) → *What is it?* (specs, story) → *Why care?* (goals) → *How does it play?* (summary, details) → *Will it last?* (downloads) → *Can you deliver, for how much?* (production). It's the questions in the order a publisher asks them.

**🎮 Book examples:** the *Farm Wars* pitch slides (and you can compare them to the one-sheet and ten-pager to see what got cut, sharpened and changed).

**📱 F2P mobile adapted pitch deck (fill in):**
```markdown
1. **Cover** — key art + logo · studio name · date · contact
2. **Team** — who we are · shipped/live titles · LiveOps and F2P experience (skip for internal pitches)
3. **The hook** — one sentence + a 10–15 s gameplay GIF/video ("<Game A> meets <Game B>, but ____")
4. **Market opportunity** — genre size & growth · top grossers · the gap we fill · data source & date
5. **Target audience** — demographics · motivations · core geos · platform/orientation
6. **Target specs** — genre · age rating · session length · launch content (levels/chapters/heroes)
7. **Core loop** — diagram + what the thumb does each second
8. **Meta & progression** — what grows over days, weeks, months
9. **Game goals (5 back-of-the-store-page USPs)** — ____ · ____ · ____ · ____ · ____
10. **Monetization** — model (IAP/ads/hybrid) · key offers · pass · rewarded ads · ethical stance
11. **Retention & LiveOps plan** — daily/weekly systems · event calendar · season cadence (today's "download strategy")
12. **UA & marketing hook** — 2–3 ad-creative concepts (storyboard the first 3 seconds) · playable-ad idea · ASO angle · target CPI ____
13. **Target KPIs (labeled as targets)** — D1 ____ · D7 ____ · D30 ____ · payer conversion ____ · ARPDAU ____ · LTV > CPI by ____
14. **Competitive landscape** — 3 comps (successful, recent, famous) · our differentiation
15. **Production plan** — team size & roles · timeline (prototype → vertical slice → soft launch → global) · **kill/go gates with metrics** · budget
16. **Post-launch roadmap** — first 6–12 months of features and events
17. **The ask** — what you need (budget, publishing, UA spend, headcount) and what they get
*(Appendix: prototype/playtest metrics, economy sketch, art samples)*
```

**🪝 Make it stick:** Nine slides = a **heist crew briefing**: the crew (company), the target (specs), the backstory (story), the loot (goals), the plan (gameplay), the getaway (download strategy), the budget (production). Nobody funds a heist without a getaway plan.

> ⚠️ **2010 → 2026:** "Download strategy" (DLC) became **LiveOps**, and it moved from slide 8 to the center of any F2P pitch. F2P decks also add **market data, monetization, target KPIs and a UA plan**, because a mobile game's success depends as much on **CPI vs. LTV** as on fun. The book's core advice still holds: compelling art up front, studio credit (no solo heroes), five punchy goals, and production numbers that prove you can deliver.

---

## 🏆 Universal Truths & Clever Ideas
*(The Bonus Levels have no official end-list, so here are the toolkit's rules, collected in my own words.)*
1. **The one-sheet serves two masters:** team alignment and outside excitement (management, marketing, sales, licensors). 📱 so for F2P: the same page briefs your UA team.
2. **Information beats styling.** Text-only or illustrated, it just has to be short and informative.
3. **Repeat the one-sheet** every time you talk about the game; you've won when teammates correctly quote it back at you.
4. **USPs: 5–7 max**, covering play style, modes, single/multiplayer, tech and cool features. 📱 so for F2P: they become your store-page bullets.
5. **Comps should be successful, recent and very well known — ideally all three.** 📱 so for F2P: check top-grossing charts, not your childhood favorites.
6. **The ten-pager is a guideline, not policy:** a "ten-pointer," accessible and exciting, that seeds the pitch and the GDD.
7. **A TBD is better than a blank** in the GDD.
8. **The GDD is a living, liquid document**; tech and schedule will change it. Version it, track revisions, keep the TOC current.
9. **Use templates the way that serves you and your team:** more pictures, or one-pagers, whatever works.
10. **Always include images** of mechanics (and controllers, HUD, screens).
11. **Match sound and voice lists to the animation list** so nothing ships silent.
12. **Bosses need weak spots/vulnerable states, a readable health bar, an arena, music, and a guaranteed reward.**
13. **No one makes a game by themselves:** credit the studio on the pitch cover.
14. **Date your pitch** so the audience remembers when the meeting happened.
15. **Aim for five "back of the box" goals** on the pitch.
16. **Plan post-release content** ("download strategy") to extend the game's life. 📱 so for F2P: that's LiveOps, and it's the whole business.
17. **Lists are idea generators:** combine theme + environment + mechanic; flip scale (giant world, shrunken player) on anything.

## 🧩 Connect the dots
- → **L04** (paperwork): where the one-sheet, ten-pager, GDD and beat chart are explained; this module is its worked-example appendix.
- → **L17** (the hard part): pitching rules; BL9 is the slide-by-slide deck.
- → **L02** (ideas) and **L03** (story): BL4 themes and BL5 environments as brainstorming fuel.
- → **L05 / L06 / L07 / L08**: the GDD's character metrics, camera, controls and HUD sections.
- → **L09** (level design): game progression outline, beat chart, hub and training levels, level-specific hazards.
- → **L10** (combat): melee, combos, combat gauge, weapon progression sections.
- → **L11** (enemies & bosses): BL7/BL8 templates are its production sheets.
- → **L12** (mechanics & hazards): BL6 is its quick-reference list.
- → **L13** (power-ups & rewards): power-ups/state modifiers, economy and reward fields.
- → **L14** (multiplayer), **L15** (music), **L16** (cutscenes): matching GDD sections.
- → **F2P1** (core loops, progression, economy) and **F2P2** (LiveOps, monetization, analytics): everything the F2P templates added.
- F2P concepts touched: core loop, meta, economy sources/sinks, monetization, FTUE, LiveOps, analytics events, KPIs (D1/D7/D30, ARPDAU, CPI, LTV), UA & ad creatives, soft launch, ethical design.

## 🔁 Retrieval check (do it closed-book!)
1. What are the two jobs of a one-sheet, and who are its outside readers?
2. What's the "victory" sign that the one-sheet has sunk in?
3. What three qualities should a competitive product have to be a good comp?
4. How many USPs should a one-sheet list, and what should they highlight?
5. Name the ten topics of the ten-pager.
6. Why is the *Farm Wars* ten-pager only seven pages, and why is that OK?
7. What were the five phases of a *Farm Wars* round, and what were the win/lose conditions?
8. What did the *Farm Wars* enemies threaten besides the player's health, and why is that smart?
9. Give the four ground rules from the GDD template's introduction.
10. What goes on a GDD cover and in its footer?
11. List at least six fields of the enemy design template.
12. What does the boss template add beyond the enemy template?
13. Name the nine slides of the high-concept pitch, in order.
14. Why should the pitch cover credit the studio and show the date?
15. Name four things a 2026 F2P pitch adds that the 2010 deck didn't have.

<details><summary>Answers</summary>

1. Align the team and managers on priorities/objectives, and excite outsiders: management, marketing, sales and licensors.
2. A teammate pushes back on a feature because it contradicts the one-sheet, and they're right.
3. Successful, recent, and very well known (ideally all three).
4. No more than 5–7; play style, game modes, single/multiplayer, technology innovations, cool features.
5. Title page; story & gameplay; game flow; character(s) & controls; main gameplay concepts & platform-specific features; game world; interface; mechanics & power-ups; enemies & bosses; cutscenes, bonus material & comps.
6. Several topics were merged (and interface/comps folded away); the ten pages are a guideline ("ten-pointer"), so coverage matters more than page count.
7. Buying, planting, defending, boss, selling. Win: survive and beat all animal bosses. Lose: go broke, farm devastated, or get killed.
8. Defenses/structures/electronics and the economy (wilting crops, turning land to mud). It ties combat to the farming loop so every enemy matters to both.
9. Skewed toward action/adventure/platform/RPG/shooter but adaptable; rough-out beats blank ("TBD" > nothing); it's living and liquid (tech/production changes); use it however suits you and your team (more pictures, one-pagers).
10. Cover: evocative image, title, document version (kept current), written by (team), point of contact (producer/lead designer + phone), publishing date, version number. Footer: copyright/company/date, page number, current date.
11. Name, image, description (personality/motivation), animation list, movement patterns, attack descriptions, defeated by, damage description, particle effects, projectiles, HUD elements, SFX list, VO list, special player-character requirements, player reward.
12. Weak spots/vulnerable states, the health bar's look, a guaranteed reward, and the Boss Fight Arena page (arena image, description, level elements, music tracks incl. contextual music).
13. Cover; company profile; target specs; game story; game goals; gameplay summary; gameplay details; download strategy; production specs.
14. No one makes a game alone (studio credit), and the date helps the audience remember when the meeting happened.
15. Any four: market data, target audience/geos, core loop and meta, monetization, LiveOps plan, UA/ad-creative hook, target KPIs, kill/go gates, the ask.
</details>

## 🎯 Side quests (5–15 min each)
1. **Speed one-sheet (15 min):** fill the F2P one-sheet from §1 for a game idea you have. Hard cap: one screen, no paragraph longer than 3 lines.
2. **Triple-roll generator (10 min):** pick a random story theme family, a random environment and a random mobile mechanic (§4–6). Write a one-line hook for three combos; keep the best.
3. **Back of the store page (10 min):** write exactly five "game goals" for your concept. Cross out any that a top-10 game in your genre could also claim.
4. **Blocker sheet (10 min):** pick one obstacle from a match-3 game you know and fill the puzzle-game "blocker template" from §7.
5. **Farm Wars goes mobile (15 min):** draw the *Farm Wars* core loop as a 4-box diagram sized for 3-minute sessions, and list which of its six DLC items become LiveOps events.
6. **Event dictionary (10 min):** write 10 analytics events for your game's first session (name, trigger, parameters).
7. **Three-second hook (10 min):** storyboard an ad creative in 3 frames: what happens in seconds 0–1, 1–2, 2–3 that would stop a scroller?
8. **Doc drift hunt (5 min):** list three differences between the *Farm Wars* one-sheet, ten-pager and pitch. Write the version note you'd add to each.

## ⚔️ Main quest (homework)
**Quest A — The F2P paper trail (2–3 hours).** For your own F2P mobile concept, produce: (1) the F2P one-sheet, (2) the F2P ten-pager (all ten topics), and (3) one filled enemy template + one filled boss template (or blocker + chapter-boss level for a puzzle game).
- ✅ **Done when:** the one-sheet fits one page; every ten-pager topic has content or an honest TBD; the core loop is a diagram; the economy lists at least 2 sources and 2 sinks per currency; both templates have telegraphs, rewards and analytics events filled; you've posted the one-sheet publicly (Twitter/X, LinkedIn, a Discord) and asked one question for feedback.

**Quest B — The 15-slide F2P pitch (3–4 hours).** Build the adapted pitch deck from §9 for the same concept.
- ✅ **Done when:** every slide has a visual; the hook slide works without you talking; KPI targets are clearly labeled as targets; the production slide has a timeline with at least two kill/go gates; you've rehearsed it out loud in under 10 minutes and changed at least one slide based on a friend's reaction.

## 🔬 Play Lab
1. **Royal Match or Candy Crush Saga (10 min):** list every obstacle/blocker you meet and the level it appears. *Question:* which of the book's console mechanics (conveyor, teleportal, two-stage breakable, spreading gas, locked door) does each one echo?
2. **Archero or Survivor.io (10 min):** pick one enemy and fill the mobile enemy template from memory. *Question:* how long is its telegraph, and how does the game make it readable on a small screen?
3. **Any top-grossing game's store page (10 min):** reverse-engineer its one-sheet (hook, genre, audience, USPs, comps). *Question:* which 5 "back of the box" goals does the store page sell, and in what order?
4. **Monopoly GO! or Hay Day (10 min):** list every live event, timer and limited offer on the home screen. *Question:* what would this game's "download strategy" slide (BL9 slide 8) look like in 2026 terms?

## 🗣️ Feynman check
Explain to a producer in 60 seconds: "What's the difference between a one-sheet, a ten-pager, a pitch deck and a GDD, who reads each one, and what would you add to all of them for a free-to-play mobile game?"

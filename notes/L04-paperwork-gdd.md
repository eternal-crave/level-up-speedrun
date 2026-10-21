# 📝 Level 4 — You Can Design a Game, But Can You Do the Paperwork?
> 📖 Book pp. 57–82 · ⏱️ ~75 min study · 📱 F2P relevance ★★★★★ — In F2P studios, writing is the job: one-pagers, feature specs and economy sheets are what you ship every week, and they are exactly what design tests ask you to produce.

## ⚡ TL;DR — the 30-second version
- **Docs are the recipe.** Rogers says making a game is like making chili: recipe (documentation), ingredients and tools (team and software), boiling (crunch, keep it short) and simmering (polish). No recipe, no chili.
- **There are four preproduction docs, and each one grows into the next:** **one-sheet → ten-pager → beat chart → game design document (GDD).** The GDD should be just long enough to describe the game accurately, and no longer.
- **Write for your reader.** Financiers want excitement and bullets; the production team wants diagrams and precise terms. Group examples in **threes**, pick **winning comps**, write about **five real USPs**, and **design toward your age rating** from day one.
- **The awful truth: nobody reads the GDD.** Write it anyway, because you'll need it yourself. Communicate with whatever works (storyboards, diagrams, animatics, beat charts, wikis). Use specific words ("clockwork undead", not "robots"). **Everything is liquid**, so expect the design to change.
- **The beat chart** maps the whole game on one page (15 fields per level). It shows you clumping, samey-ness, repeated colors and music, and a broken economy before any of it gets built.
- **Don't be a schmuck.** Good ideas come from anywhere. Make a decision and stick to it. Update often, tackle the hard problems first, pick your fights, put people where they're strong, save and back up everything, name files sensibly, and build cheats and demo hooks early.
- 📱 **F2P add-on:** the modern versions are the **feature one-pager**, the **LiveOps feature spec**, the **economy spreadsheet**, **IARC / Apple / Google Play age ratings**, and **living docs** in Confluence, Notion or Miro. This file gives you F2P versions of the One-Sheet and the Ten-Pager.

## 🗺️ Chapter map
- [ ] 1. The chili recipe (chapter intro): why docs matter, explained as cooking
- [ ] 2. The four preproduction documents: one-sheet → ten-pager → beat chart → GDD
- [ ] 3. Writing the GDD, Step 1: The One-Sheet: eight fields on one page
- [ ] 4. ESRB ratings (and the age-rating world): design toward your rating
- [ ] 5. Comps & USPs: pick winning horses, five real features
- [ ] 6. Writing the GDD, Step 2: The Ten-Pager: broad strokes, aimed at its audience
- [ ] 7. The Rule of Threes: three examples is the magic number
- [ ] 8. Ten-Pager outline, page by page: what goes on all ten pages
- [ ] 9. The GDD (and the awful truth about writing them): nobody reads it, write it anyway
- [ ] 10. Gameplay progression: five ways to start a player
- [ ] 11. The Beat Chart: the whole game on one page
- [ ] 12. Above all, don't be a schmuck: nine rules for being a pro
- [ ] 13. 📱 F2P paperwork toolkit: one-pagers, specs, sheets, ratings, design tests
- [ ] 🏆 Universal Truths & Clever Ideas

---

## 1. The chili recipe (chapter intro)
**🧠 Big idea:** Making a game works like cooking chili. You need a recipe (documentation), ingredients and tools (people and software), the right order of steps, a short boil (crunch) and a long simmer (polish and iteration).

**📋 The details:**
- **The fishing story.** A visiting Japanese game director, whose wisdom was mostly about how much money his last game made, left the team with a riddle: game-making resembles fishing, and they were to explain why by the time he came back. Rogers thought it over and decided games are *nothing* like fishing, because fishing is quiet, slow, and mostly waiting for something that may never happen. (A footnote adds that he doesn't enjoy fishing.) So he wrote his own analogy.
- **The analogy, mapped step by step:**

| Chili step | Game-dev equivalent | Lesson |
|---|---|---|
| **Recipe** | The game's **documentation** | Get the *right* recipe (you're making chili, not soup or stew). A good recipe says what goes in *and how to make it*. Follow it, but expect to change it when something goes wrong. |
| **Season to taste** | Emphasize the "meatier" parts | Some parts of the game deserve more weight. Turn them up. |
| **Ingredients** | **People + tools** | You need a team and the tools to build with. |
| **Equipment** (pots, spoons, stove) | Hardware, software, pipeline | You won't always have exactly what you want. Improvise; cowboys made good chili with a campfire and a tin can. |
| **Combining ingredients** | Production style | Chili forgives prep style: neat chopping or everything thrown in a pot. Productions range from very methodical to a mad dash, and both can work. **Follow the recipe so nothing gets forgotten.** |
| **Order of steps** ("brown the meat first") | Dependencies | Do things in the right order. Rogers learned this one the hard way. |
| **Boiling** | **Crunch** | A frantic burst to get everything in and running. Boil too long and the chili is ruined, the pot scorched, the kitchen ablaze. **Overlong crunch has wrecked whole games and whole studios, so treat it with responsibility.** |
| **Simmering** | **Polish + bug fixing + iteration** | Chili isn't ready the moment it's assembled. Budget time to find and fix bugs and code, art and design problems. Let the team play sections to learn what works. Chili tastes better the next day. |
| **Last-minute additions** | Eleventh-hour rescues | Troubled games *have* been saved at the last minute, but don't plan on it ("stomach upset"). |
| **Ugly but delicious** | Gameplay over looks | Chili can look awful and taste great. A game that isn't pretty can still entertain if the gameplay is good. Good games and good chili both satisfy. |

- **Visuals on these pages:** the chapter opens with doodles of a bored fisherman in a rowboat and a grinning chef stirring a steaming pot (dual-coding the two analogies). The book then celebrates with a fake Xbox-style "Achievement Unlocked: Exactly Like Making Chili" badge.

**🎮 Book examples:** The fishing director → an example of a vague, mystical "philosophy" that doesn't help anyone. The chili analogy → a concrete, step-by-step model you can act on.

**📱 F2P mobile translation:**
- **Recipe = docs, but they're never finished.** An F2P game is a live service, so after launch the "recipe" keeps getting new pages: event specs, offer specs, balance passes.
- **Boil vs simmer = launch vs LiveOps cadence.** F2P has no single ship date. Crunching every content update burns teams out fast, so sustainable cadence (2-week sprints, event calendars planned months ahead) is the modern "don't boil too long".
- **Simmer = soft launch.** Studios often soft-launch in a few test markets for months, tuning retention and monetization before global launch. That's the "next-day chili" of mobile.
- **Ugly but delicious = prototype-first culture.** Mobile studios often test gray-box prototypes, and even fake ads, before investing in art. If the core loop is fun ugly, it'll be fun pretty.

**🪝 Make it stick:** Picture a chef in a paper hat stirring a pot labeled **GDD**. The ladle is the producer, the steam is crunch (open a window!), and the sticky note on the fridge reads "brown the meat FIRST." 🌶️ *Recipe → Ingredients → Combine → Boil (briefly) → Simmer (long) → Serve.*

> ⚠️ **2010 → 2026:** The crunch warning has aged well. Since 2010, crunch has become a public industry issue, and many studios now plan explicitly to avoid it. Rogers' "be responsible" is now the baseline expectation.

---

## 2. The four preproduction documents
**🧠 Big idea:** You don't write a 300-page GDD from nothing. You climb a ladder of four documents, each bigger and more detailed than the last, and they all eventually merge into the **game design document (GDD)**.

**📋 The details:**
- **The four documents that guide preproduction:**
  1. **The one-sheet**: a one-page overview.
  2. **The ten-pager**: a broad-strokes design of about ten pages.
  3. **The beat chart**: the whole game's structure, level by level, on one page.
  4. **The game design document (GDD)**: everything in the game.
- Each has a specific job during preproduction and production, and **all of them eventually evolve into the GDD**.
- **GDD length:** many GDDs average **300+ pages**, but that's not a rule. Some are much shorter and some much longer, and a GTA-style game needs a far longer GDD than Tetris.
- **The length debate:** there's a movement to keep GDDs as short as possible. Rogers' position: a GDD should be **just long enough to accurately describe what's going on in the game.** Don't be intimidated, because the three smaller docs are stepping stones to it.
- **No official format exists** for any of these documents. Rogers' versions are one way to do it.
  - Example: video game consultant **Mark Cerny** writes design material as **one page per topic, in bullet points**, because his teammates find that easier to read and digest.
  - Use whatever works best for you.
- **The real goal of design documentation is communication**: to the player, to your teammates, and to your publishing partners. The clearer you communicate, the easier it is to get coworkers excited about your ideas.

**🎮 Book examples:** Grand Theft Auto vs Tetris → the length a GDD needs depends on the game's scope. Mark Cerny → a short, one-page-per-topic format is a legitimate professional choice.

**📱 F2P mobile translation:**
| Book doc | F2P studio equivalent today |
|---|---|
| One-sheet | **Concept one-pager** for a new game, or a **feature one-pager / brief** for a new feature or event |
| Ten-pager | **Pitch / concept deck** for a greenlight meeting (gameplay plus KPIs, market and monetization) |
| Beat chart | **Level progression sheet** (puzzle games), **event / LiveOps calendar**, **content roadmap** |
| GDD | A **living wiki** of many small **feature specs**, plus the **economy model spreadsheet**, plus a **game bible** for art and narrative |

- Mobile teams rarely write one monolithic GDD now. They write a **hub page** that links to dozens of feature specs, each owned by a designer, versioned, and tied to tickets.
- Cerny's one-page-per-topic idea is close to how many modern F2P teams work: short, linkable pages.

**🪝 Make it stick:** **"One, Ten, Beat, Bible-sized."** Think of a rocket with four stages: the one-sheet lights the fuse, the ten-pager is lift-off, the beat chart is the flight plan, and the GDD is orbit.

> ⚠️ **2010 → 2026:** The "keep it short" movement Rogers mentions mostly won. Agile and live-ops teams prefer short, modular, frequently updated docs. His principle, "just long enough to describe the game," still holds. It now applies *per feature* rather than per game.

---

## 3. Writing the GDD, Step 1: The One-Sheet
**🧠 Big idea:** The one-sheet is a **one-page** overview that teammates and publishers will read. It must be interesting, informative and, above all, **short**.

**📋 The details:**
- **Who reads it:** your teammates, your publisher, and plenty of other people. Keep it interesting, informative and short.
- **Length:** no longer than a single page.
- **Format:** any layout you like, as long as it includes these **eight fields**:
  1. **Game title**
  2. **Intended game systems** (which platforms or consoles)
  3. **Target age of players**
  4. **Intended ESRB rating** (see §4)
  5. **A summary of the game's story, focused on gameplay** (what the player *does*, not just the plot)
  6. **Distinct modes of gameplay** (story mode, multiplayer, minigames…)
  7. **Unique selling points (USPs)** (see §5)
  8. **Competitive products ("comps")** (see §5)
- The book's samples are in its appendix: the chapter text points to Bonus Levels 1 and 2, but in the table of contents **Bonus Level 1** is "The One-Sheet Sample". (The chapter's appendix cross-references are off by one compared with the TOC.)

**🎮 Book examples:** The appendix sample one-sheet shows how all eight fields fit on one page.

**📱 F2P mobile translation:** The one-sheet survives almost unchanged as the **concept one-pager**, and it's the #1 artifact in F2P design tests. Mobile needs extra fields (business model, KPIs, session design), so the full **📱 F2P One-Sheet template** is in §13. Quick preview of how each field changes:
- "Intended game systems" → iOS / Android, phone and tablet, portrait or landscape, low-end device support, offline play.
- "Target age" → age **plus player motivation or segment** (e.g., "relaxing puzzle fans who play in short breaks").
- "Intended ESRB rating" → **IARC rating (Google Play) + Apple age rating**, plus "In-Game Purchases" and "Random Items" descriptors.
- "Story summary focused on gameplay" → **player fantasy + core loop in one sentence**.
- "Distinct modes" → core loop, meta loop, social, LiveOps events.

**🪝 Make it stick:** **"T-S-A-R-S-M-U-C"** = *Title, Systems, Age, Rating, Story-as-gameplay, Modes, USPs, Comps.* Picture a **TSAR** holding a **SMUC**ked-up page: if it needs a second page, the Tsar throws it in the fire.

---

## 4. ESRB ratings (and the wider age-rating world)
**🧠 Big idea:** Your age rating shapes who can buy your game, where it can be sold, and how it's marketed. **Pick your target rating up front and design toward it.**

**📋 The details:**
- **What the ESRB is:** a **self-regulatory** body in the **United States and Canada**. It runs a rating system and also enforces advertising and online-privacy principles for software.
  - Its creation resembles the comic industry's **Comics Code**, which enforced content and morality rules together with concerned parent groups.
  - The *rating system itself* looks more like the **MPAA movie ratings** (G, PG, PG-13, R, X): games are reviewed and given a **letter rating based on content**.
- **Other systems (footnote):** ESRB is American. Others include **PEGI** (Pan-European Game Information), the UK's **BBFC** (British Board of Film Classification), and Germany's **USK** (Unterhaltungssoftware Selbstkontrolle). Age and content limits vary by country.
- **The six ESRB ratings (as of 2010):**

| Rating | Meaning (paraphrased) |
|---|---|
| **eC** (Early Childhood) | Nothing parents would find inappropriate |
| **E** (Everyone) | May include fantasy, cartoon or mild violence and occasional mild language |
| **E10+** (Everyone 10+) | More fantasy, cartoon or mild violence, mild language, suggestive themes |
| **T** (Teen) | Violence, suggestive themes, crude humor, minimal blood, occasional strong language |
| **M** (Mature 17+) | Intense violence, blood and gore, sexual content, strong language |
| **AO** (Adults Only 18+) | Not for under-18s; may include prolonged intense violence, graphic sexual content, nudity |

- **The stigma problem:** the ratings inform parents well, but some carry stigma among developers and fans:
  - **eC** is seen as "baby games" because it mostly appears on edutainment and licensed titles for very young kids.
  - **AO** is commercial death. **No brick-and-mortar retailer in America** would stock an AO game; it's the game industry's X rating. Most publishers won't even consider making an AO game and work hard to avoid getting one.
- **Example (footnote): The Punisher (THQ, 2005).** Interrogation scenes, including curb-stomping and feeding criminals into a woodchipper, were gruesome enough that the developer **reframed the camera and drained the footage to black and white**, lowering the rating from **AO to M**. That's designing toward a rating.

**🎮 Book examples:** The Punisher → presentation choices (camera, color) can move your rating, so you can design toward a target rating instead of hoping.

**📱 F2P mobile translation, the 2026 rating stack:**
| System | Where it applies | How you get it |
|---|---|---|
| **IARC** (International Age Rating Coalition) | **Google Play** and several other digital storefronts | You fill in **one questionnaire** (in Play Console for Google Play) and IARC produces a rating for each participating region: **ESRB** in North America, **PEGI** in Europe, **USK** in Germany, **ClassInd** in Brazil, **ACB** in Australia, among others. Regions without a participating board get a generic IARC age (3+, 7+, 12+, 16+, 18+). |
| **Apple App Store age rating** | iOS / iPadOS | Apple's **own questionnaire** in App Store Connect. Apple overhauled its tiers in 2025 to **4+, 9+, 13+, 16+, 18+** (replacing the old 4+/9+/12+/17+). Check App Store Connect for the current tiers and questions. |
| **ESRB / PEGI on console & PC** | Retail and console stores | Still the classic route for cross-platform releases. |

- **F2P-specific descriptors matter more than violence.** ESRB added an **"In-Game Purchases"** notice in 2018 and **"In-Game Purchases (Includes Random Items)"** in 2020. PEGI has matching in-game purchase descriptors. If your game sells gacha or loot boxes, players and parents *will* see it.
- **Loot-box rules:** Apple and Google both require you to **disclose the odds** of randomized paid items before purchase. Some countries regulate paid loot boxes further, so check each launch market.
- **Kids:** if your audience includes children, you're in **COPPA** territory (US) and inside Google Play's **Families** policies or Apple's **Kids** category rules. That affects ads, data collection and purchase flows. In F2P, designing toward "a kids rating" is a whole compliance project, not a label.
- **The modern "AO problem" = store rejection.** Mobile stores won't host certain content at all (for example, overtly sexual content), and **simulated gambling** content pushes your rating up. Just as nobody made AO console games in 2010, nobody builds F2P content the stores will reject.
- **The modern "eC stigma":** a rating far younger than your audience can make the game look childish on the store page. Teens skip "baby games" in 2026 just as they did in 2010.

**🪝 Make it stick:** *"Rate first, design second."* The Punisher went from woodchipper to black-and-white movie, the rating equivalent of putting a lid on the chili so the neighbors don't see what's in it.

> ⚠️ **2010 → 2026:** The **eC rating was retired in 2018** (folded into E), so the ESRB now has five main ratings plus "Rating Pending." On mobile, ratings come from **questionnaires** (IARC and Apple), not from a human reviewing your game in a box. Rogers' Universal Truth, "know your target rating and design toward it," matters even more now, because your rating decides which **ad networks, audiences and store features** you can access.

---

## 5. Competitive products ("comps") & unique selling points (USPs)
**🧠 Big idea:** **Comps** tell the reader "it's like *these*." **USPs** tell them "but here's why it's special." Pick successful comps, and write about five USPs that are actually unique.

**📋 The details:**
- **Competitive products ("comps")** are already-released games similar to your idea.
  - They help the reader understand quickly what your game will be.
  - Choose comps that are **(a) very familiar** to people or **(b) successful**.
  - Publishers and marketers know exactly how well every game sold. A comp that **flopped** can scare a publisher off.
  - Rogers' motto: **"always pick a winning horse."**
- **Unique selling points (USPs)** are the "back of the box" bullet points.
  - Rule of thumb: **about five USPs**. Rogers got that number from realizing only about five bullets fit on the back of a game box.
  - **These don't count:** "amazing graphics," "awesome story," "sequel to the award-winning…" Every game should already have, or be, these things (the sequel one only applies if it really is a sequel). Gamers smell marketing BS a mile away.
  - USPs must be the **distinctive features that set your game apart from the pack**.
  - **The book's six sample USPs** (deliberately "spun" marketing-style), and what each one demonstrates:
    - A huge **cooperative multiplayer mode** (a number of simultaneous players, stated concretely) → scale, made concrete.
    - A **licensed soundtrack** of more than a thousand songs → a content-volume hook.
    - An **open world with hundreds of levels** and freedom to go anywhere → scope and freedom.
    - **Named signature weapons** with flavorful made-up names (one is a fire-ant weapon) → specific, memorable gameplay toys.
    - **Lifelike physics and effects** from a named new engine → tech as a feature.
    - **Downloadable** costumes and content → post-launch content.
  - **The concrete specifics inside those six samples** (worth remembering, because specifics are what make a USP real): co-op for **256 players**, a soundtrack of **1,000+ tunes** from popular bands, an open world of **200 levels**, three named signature weapons (the **blastinator**, the **skull-defiler**, the **fire-ant anguisher**; a built-in Rule of Threes), and a new engine called **Realitech**. Each sample is a single line: a number or a name plus a hook, with no explanation.
  - 📱 **F2P:** same trick in store captions. "100+ heroes", "3-minute 3v3 matches" and a named signature feature beat vague adjectives.
  - A good USP **excites without lengthy detail**. The detail belongs in the ten-pager.

**🎮 Book examples:** "Always pick a winning horse" → comparing to a flop tells a publisher your game will flop too.

**📱 F2P mobile translation:**
- **Comps = top-grossing / top-download charts.** In an F2P pitch, comps usually come with numbers (downloads, revenue rank, retention benchmarks from market-intelligence tools). Recent and successful beats old and famous. "Royal Match meets home renovation" says more to a publisher than a dead 2014 game.
- **Use the Rule of Threes for comps** (see §7): three comps, each covering a different part (core gameplay, meta, art style).
- **USPs = store-page screenshot captions.** The modern "back of the box" is the App Store / Google Play **screenshot strip and preview video**. Most browsers only see the first few screenshots, so your top **3–5 USPs** become their captions. "Amazing graphics" is still banned; "Build your dream team of 100+ heroes" or "Real-time 3v3 battles in under 3 minutes" works.
- **USPs also drive user acquisition (UA) ads.** Each USP should be something you can show in a 15-second video ad. If you can't show it, it probably isn't a USP.

**🪝 Make it stick:** **"Bet on winners, brag about specifics."** Picture a racetrack where your game's jockey rides a champion horse (comps) while waving five sparkly, oddly specific banners (USPs). One of them says "Fire-Ant Anguisher!" Nobody ever waved a banner saying "Good Graphics."

> ⚠️ **2010 → 2026:** Boxes are mostly gone, but the five-bullet constraint now applies to store screenshots, ad hooks and store feature pitches. The number may shift, but the rule holds: a few concrete, unique, visual features.

---

## 6. Writing the GDD, Step 2: The Ten-Pager
**🧠 Big idea:** The **ten-pager** is a broad-strokes design doc that lays out the **spine** of your game. People who might *fund* it will read it, so it has to be readable, visual, interesting, and aimed at its audience.

**📋 The details:**
- **Purpose:** expand the one-sheet and add detail. Readers should quickly grasp the basics of the final product **without excruciating detail**.
- **Keeping it interesting may be the single most important thing about it**, because the people who'll finance your game read it.
- **Visuals:** use plenty, but keep them **relevant**.
- **No fancy fonts or ornate layouts.** **Readability is key.**
- **Tool tip:** build it in **PowerPoint (or similar)**. That helps formatting, and you can **present it on screen in a pitch meeting** or **print it as a "leave-behind" handout**.
- **For any document:** the goal is to make the reader *want to keep reading*. Keep asking **"Who is my audience?"** A ten-pager passed around your team is very different from one presented to marketing.
- **Audience table: how to angle the same content:**

| For the **production team** | For **marketing / executives** |
|---|---|
| Clear **diagrams of gameplay** | Exciting **concept images** |
| **Short, punchy sentences** | Text in **bullet points** |
| **Specific terminology** so your intent is unambiguous | **Vivid, descriptive examples** |
| Compare gameplay to **appropriate games, even old ones** | Compare to **successful, modern games** |

- You **don't need two documents**; just remember **both audiences will read it**. (Footnote: sometimes it *is* worth having a version tailored to one audience. It never hurts to be prepared.)
- **"Ten" is a guideline, not a law.** Going over or under is fine as long as you communicate the basics concisely. (Footnote: *preferably under.*) The "guidelines, not rules" line is a pirate-movie joke.
- The book's sample ten-pager is in the appendix (the chapter says Bonus Level 3; the TOC lists it as **Bonus Level 2: The Ten-Page Design Document Sample**).

**🎮 Book examples:** The two-column audience table above → same game, different emphasis per reader.

**📱 F2P mobile translation:**
- **Ten-pager → pitch / greenlight deck.** F2P execs read for **market fit and KPIs**, not just fun: target audience, comps with numbers, monetization model, LiveOps plan, D1/D7/D30 targets, team and timeline. Write the gameplay pages for the team and the market and KPI pages for the money people.
- **Same content, two cuts:** designers on your team want the **flow diagram and the rules**; product managers and publishers want the **"why will this retain and monetize?"** story. One deck, with the KPI slide up front for execs and the systems slides with diagrams for the team.
- See the full **📱 F2P Ten-Pager outline** in §13.

**🪝 Make it stick:** A ten-pager is a **movie trailer**, not the movie. Two cinemas show it: the crew's screening (blueprints and jargon) and the investors' premiere (explosions and bullet points). Same trailer, different popcorn.

> ⚠️ **2010 → 2026:** Decks are now often shared as **Google Slides / Figma / Pitch links** instead of printed leave-behinds. The leave-behind still exists as a **PDF export** or a short **vertical-slice video**. In F2P greenlights, a **playable prototype** and **early test data** (CPI tests, playtest results) often count for more than the document.

---

## 7. The Rule of Threes
**🧠 Big idea:** **Three is a magic number.** When you give examples, give three: the first gives an idea, the second gives contrast, the third keeps it from feeling binary. A fourth is just boring.

**📋 The details:**
- Rogers calls it a **very important rule of thumb** for writing a ten-pager: **THREE IS A MAGIC NUMBER.**
- "All good things come in threes," shown with a playful list: the Christian Holy Trinity, the original Star Wars trilogy ("the good ones"), *Goldilocks and the Three Bears*, "three's a crowd," Asimov's three laws of robotics, the movie *Three Men and a Baby*, and "getting to third base."
- **The rule comes back later in the book.** People like things in threes, *especially examples*.
- **Why three works:**
  1. **Example #1** gives the reader an idea of what you mean, **but can still mislead them**.
  2. **Example #2** gives them **something to compare or contrast** with the first.
  3. **Example #3** **complements or contrasts** the other two, so your examples **don't feel binary or contrived**.
  4. **More than three** gets **too long and boring**, and you should never be too long or boring.
- **Action:** when you list examples in your ten-pager, **group them in threes.**

**🎮 Book examples:** The trilogy list itself → the rule demonstrated (with jokes).

**📱 F2P mobile translation:**
- **Comps in threes:** core-gameplay comp + meta comp + art or tone comp.
- **Feature pitches in threes:** three rewards on an event track tier, three bullet "how it works", three KPIs (primary + two guardrails).
- **The mobile UI loves threes:** many F2P shops show **three offer tiers** (small, "best value" middle, big), and many games show **three-star** level ratings. Whether or not that's deliberate, players read threes quickly.
- **Design tests:** reviewers skim. Three crisp options or examples per point reads as confident and complete. Seven bullets reads as unedited.

**🪝 Make it stick:** **"One misleads, two divides, three decides."** Picture Goldilocks testing three porridges: too hot, too cold, just right. With only two she'd be stuck in a binary argument; with four she'd fall asleep before the bears got home.

---

## 8. Ten-Pager outline, page by page
**🧠 Big idea:** Every page of the ten-pager answers one question a reader will have: what is it, what happens, who am I, what do I do, where am I, how does it feel, what do I interact with, what fights me, what do I watch, and why replay?

**🗺️ The ten pages at a glance:**
```
+-------------+--------------+-------------+-------------+--------------+
| 1 TITLE     | 2 GAME       | 3 CHARACTER | 4 GAMEPLAY  | 5 GAME       |
| PAGE        | OUTLINE      |             |             | WORLD        |
| what is it? | what happens?| who am I?   | what do I   | where am I?  |
|             | story + flow | + controls  | do? + tech  | map + mood   |
+-------------+--------------+-------------+-------------+--------------+
| 6 GAME      | 7 GAMEPLAY   | 8 ENEMIES   | 9 CUTSCENES | 10 BONUS     |
| EXPERIENCE  | MECHANICS    |             |             | MATERIALS    |
| how does it | mechanics,   | what fights | what do I   | why play     |
| feel?       | hazards,     | me? +bosses | watch?      | again?       |
| (gestalt)   | power-ups,   |             |             |              |
|             | collectibles,|             |             |              |
|             | economy      |             |             |              |
+-------------+--------------+-------------+-------------+--------------+
```

### Page 1: Title page
- **Contents:** game title · intended game systems · target age · intended ESRB rating · **projected ship date** (the field the one-sheet didn't have).
- **Game logos:** make a **placeholder logo** for the title. The right **font tells the reader the genre instantly, without pictures.**
- **The book's font quiz:** three made-up titles, each in a font that gives away its genre:
  - *"Super Magic World"* in a chunky, bouncy, cartoony face → colorful family platformer / fantasy.
  - *"Very Fast Cars"* in a wide, angular, techno face → racing.
  - *"Dude with Sword"* in a classic, carved-serif face → medieval fantasy / sword action.
- 📱 **F2P:** your **app icon + store title** do this job now. A puzzle game's rounded candy-colored logo vs a 4X game's metallic serif tells the genre at thumbnail size. Test icons, since stores let you A/B test store assets.

### Page 2: Game outline
- **Contents:** **game story summary** + **game flow**.
- **Game story summary:** start from the one-sheet's story and flesh it out. Keep it to **a few paragraphs**, but tell the **beginning, middle and end**. Readers want to know if the hero rescues the princess. (He does.)
- **Game flow:** briefly describe the action **in the context of the locations** the player visits.
  - **Book example:** a one-sentence summary of **Tomb Raider: Legend** packs in **who** you play (Lara Croft), the **camera** (third person), the **genre** (action-adventure), the **locations** (jungles of Bolivia to mountains of Tibet) and the **goals** (find a mysterious artifact key, the *Ghalali* key, and solve the mystery of Lara's lost mother). One sentence, five answers.
  - **List the environments** the player will visit, and point out any **special gameplay** in each.
- **Questions the game flow must answer:**
  - Which **challenges** stand in the player's way, and **by what methods** can they beat them?
  - How do **progression and rewards** operate, and in what way does the player **get stronger** as the difficulty climbs?
  - Where does **gameplay connect to the story**? Do solved puzzles open new areas? Do bosses block progress?
  - What is the **victory condition**? Save the universe? Kill every enemy? Collect 100 stars? All of these?
- **No main character?** Focus on the **environments the levels represent**. **Peggle** has no hero, but each level stands for the challenge of a "Peggle Master" who lives in a particular place.
- **Sports game?** Cover special events (bowl games, famous stadiums). **Driving game?** Cover the tracks and races.
- **The key, always:** walk the reader through the gameplay experience with **vivid images of the locales and activities**.
- 📱 **F2P:** replace "story arc" with **loops over time**: what the player does in 30 seconds (core), in a session, in a day (dailies, energy refills), in a season (pass / event), and over months (meta collection). Victory condition → **there usually isn't one**, so describe the **long-term goal** (finish the mansion, max the roster, climb the league).

### Page 3: Character
- **Contents:** specifics about the character the player controls (or the vehicle they drive).
- **Dossier details** (age, sex, background) go here **if they do the character justice**. Don't list blood type unless it adds something to the game; if it does, include it.
- **Concept art is a must.** What does the character look like?
- **Backstory & personality:** How did they end up in this predicament? What's their personality type? How do they react to the game's challenges?
  - **Book example (God of War):** the team constantly described **Kratos** as **"brutal"**, and *everything* he did, from killing enemies to **opening treasure chests**, had to show that.
- **Tie it back to gameplay:** signature moves, abilities, weapons or attacks?
  - **Mario** → jump and stomp. **Simon Belmont (Castlevania)** → his whip.
  - Other kinds of play (driving, flying, swimming)? **Mention every major style of play** in the game.
- **Control map:** find an image of the controller your game uses (mouse and keyboard, Wii Remote…) and **label what each input does**.
  - **The book's example: a PS3 action-game control map (rendered page):**
```
  L/R triggers  -> cycle targets         L/R shoulders -> cycle weapons
  Select        -> map / inventory       Start         -> pause / options
  D-pad L/R     -> choose inventory item Triangle      -> vertical attack
  D-pad U/D     -> choose potion         Square        -> horizontal attack
  Left stick    -> move character        Circle        -> interact (items / characters)
  Right stick   -> move camera           X             -> jump / double jump
```
- 📱 **F2P:** the controller map becomes a **gesture map** on a phone outline: tap, swipe, drag, hold, pinch, plus **thumb zones** (what's reachable one-handed in portrait). For heroes in collection games, "character" = **roster**: rarity, role, the signature skill as a one-line fantasy, and how it looks at icon size.

### Page 4: Gameplay
- Apply the **genres from Level 3** to your game.
- **Sequence of play:** multiple story chapters? Levels or rounds?
- **Cool scenarios:** driving while shooting, running from a giant boulder. **Call them out.**
- **Big set pieces:** include them; they hook readers.
- **Reuse your USPs** from the concept overview here.
- **Minigames:** outline any, each with a **short description and an illustration**.
- **Diagrams** are great for gameplay that's hard to picture.
- **Platform-specific features:** what uses the platform's hardware? Memory card, hard drive, or downloadable? Camera or motion controller? Split-screen multiplayer? These matter because they tell readers **what technology the game needs**.
- 📱 **F2P platform features to cover instead:** portrait vs landscape, **one-thumb play**, session length, **download size** (smaller installs help conversion from store page to install), low-end Android performance, **offline play**, **push notifications**, haptics, cloud save / account linking, cross-play, and store features (in-app events, subscriptions).

### Page 5: Game world
- **Images and descriptions** of the world.
- **List the environments** from the story, each with a **short description** of what the player finds there.
- How does each location **tie into the story**?
- What **mood** does each world create? What **music** plays there?
- How are the locations **connected**, both in the game world and in the player's journey?
- Include a **simple map or flow chart** of how the player moves through the world.
  - **The book's illustration:** two map styles side by side, a **galaxy of planets** joined by dotted routes and a **linear path** of nodes (castle → tree → mountain → castle). The caption's point: **path or galaxy, it doesn't matter, as long as it shows the player where to go.**
- 📱 **F2P:** this is your **saga map / chapter map / base screen**. Puzzle sagas use a winding level path; strategy games use a base plus a world map; RPGs use chapter maps. Show how **new areas unlock** (stars, keys, player level) and where **events** appear on that map.

### Page 6: Game experience
- **Gestalt** (German, roughly "the whole"): critics use it for the overall feel of a work or the ambience of a restaurant. Despite sounding fancy, it's a great concept for games.
- A complete game experience means accounting for the feel of the **start screens, cinematics, music, sound design, camera…** in other words, *the whole thing*.
- **What's your game's gestalt?** Humorous? Horrific? Thrilling? Hardcore? Foreboding? Sexy?
- How will that feeling reach the player **from the very first moment**?
- **Inspiration:** **DVD menus and packaging** (especially deluxe editions), which capture a movie's feel with a little music, some fonts and a few visuals.
- **Special modes or interfaces:** e.g., the **attack-helicopter gunner sequence** (**Call of Duty 4: Modern Warfare**) and the heroine Rubi's **"Rage Mode"** (**Wet**).
- **Questions to answer:**
  - What does the player **see first** when the game starts?
  - What **emotions or moods** should the game create?
  - How do **music and sound** convey the feel?
  - How does the player **navigate the game's shell** (menus)? Include a **simple flow chart** of the interface. (Plenty of games ship with a poor interface simply because nobody on the team planned it.)
- 📱 **F2P:** gestalt starts at the **store page and the ad**, continues through the **loading screen** and the **first 60 seconds (FTUE)**, and lives in the **home screen**: a cluttered lobby of red badges and pop-up offers creates a very different feeling from a calm, focused one. **Draw the shell flow:** home → play → result → rewards → shop / events / pass / social. Pop-up order at login (daily reward, offer, event) is a gestalt decision too.

### Page 7: Gameplay mechanics
- **Terminology that makes you sound like a real designer:** **mechanics** and **hazards**.
  - **Mechanic:** something the player **interacts with to create or help gameplay**. Examples: moving platforms, opening doors, rope swings, slippery ice. (The illustration shows a figure on a moving block next to a rope and an icy ledge by a door.)
  - **Hazard:** a mechanic that **can hurt or kill the player but has no intelligence**. Examples: electrified platforms, spike pits, swinging guillotine blades, jets of flame. (The illustration shows a spike pit, a swinging blade, fire jets and an electrified floor.)
  - Describe **some, not all**. Rogers finds **three** enough at this stage. What unique mechanics does the game have? How do they relate to the player's actions? How are they used in the environments?
- **Power-up:** an item the player collects that **helps with gameplay**. Examples: ammo, extra lives, invulnerability. Not every game has them, but they show up in many genres, from platformers to racing games. List some and what they do. (Illustration: a mushroom, a star-burst orb, a capsule and a health kit.)
- **Collectibles:** items the player collects that **don't immediately affect gameplay**. Examples: coins, puzzle pieces, trophy items. (Illustration: a coin, a money bag, a diamond and cash.)
  - What does the player collect? What's the benefit? Can collectibles **buy items, unlock abilities, or unlock content later**? Do they earn **trophies or achievements**?
- **Economy:** if the game has one, cover it briefly: how players **earn money** and **buy things**, and **the shopping setup** (a store? a wandering peddler?).
- 📱 **F2P:** in a match-3, **mechanics** are tiles and special pieces, **hazards** are **blockers** (ice, chains, spreading goo), **power-ups** are **boosters** (pre-level and in-level), and **collectibles** are **stars, album cards, event tokens**. The **economy** section is no longer "brief": in F2P it's the business model. Summarize **soft currency vs hard currency, main sources and sinks, and where real money enters**, and link to the economy spreadsheet (§13).

### Page 8: Enemies
- **Definition:** if a hazard uses **artificial intelligence (AI)**, it's an **enemy character**.
- What enemies are in the world? What makes each one **unique**? How does the player **beat** them?
- **Boss characters:** larger, scarier enemies, usually at the **end of levels or chapters**. Many have **unique personalities** because they're the **villains of the story**.
  - Who are they? **Where** do they appear? **How** are they beaten? **What does the player earn** for beating them?
  - Bosses are fun and make **great visuals** for your document, so show them off. (Illustration: a skeleton warrior, a huge horned ogre and a flying eyeball-bat facing a cheerful stick-figure hero.)
- 📱 **F2P:** "enemies" may be **obstacles and level goals** (puzzle), **enemy waves** (Survivor.io-style), **rival players** (PvP) or **enemy teams** (RPG). Bosses become **boss levels** (hard/super-hard puzzle levels), **raid or guild bosses** (shared HP bars that drive co-op), and **event bosses** (limited-time). Always say **what the boss drops**, since rewards drive F2P motivation.

### Page 9: Cutscenes
- Does the game have **movies or cutscenes**? **How** are they presented?
- **How they'll be made**: CG, Flash animation, even a puppet show. (A footnote promises these terms are covered later.)
- **When** the player sees them: during gameplay, at the **start and end of levels**, etc.
- Mention any **attract-mode** movies (the demo loop that plays when nobody touches the game).
- 📱 **F2P:** keep story beats **short, skippable and optional**. Mobile players often play in short breaks with the sound off, so plan for **subtitles**. Many casual games put narrative into the **meta** (characters commenting on renovation tasks, comic panels between chapters) rather than long movies. The modern attract mode is your **store preview video and UA ads**.

### Page 10: Bonus materials
- The last page: **bonus materials and unlockables** that make players **replay**.
- Give examples of what players can unlock. What's the **incentive to play again**?
- This is where you mention **multiplayer, downloadable content, episodic content**, and so on.
- 📱 **F2P:** this page becomes the **most important one**: **LiveOps** (events, seasons, battle pass), **new content cadence** (new levels every N weeks), **collections**, **social systems** (clans, co-op, leaderboards), **daily/weekly missions**. In F2P, "replay" *is* the business, because revenue depends on players coming back for months.

**🪝 Make it stick, the Ten-Pager memory palace (walk through your home):**
1. **Front door** = Title page (your name on the doorbell, in the right font).
2. **Hallway** = Game outline (the hallway is the "flow" from room to room).
3. **Mirror** = Character (who's looking back? Kratos opening a chest *brutally*).
4. **Living room couch** = Gameplay (where you actually play).
5. **Window** = Game world (the view, with a map taped on the glass).
6. **Stereo + mood lighting** = Game experience / gestalt.
7. **Kitchen gadgets** = Mechanics, hazards (hot stove!), power-ups (coffee), collectibles (fridge magnets), economy (grocery receipt).
8. **Basement monster** = Enemies and the boss.
9. **TV** = Cutscenes.
10. **Bonus room / garage full of unlockables** = Bonus materials.

> ⚠️ **2010 → 2026:** Pages 4 and 9 are the most dated (memory cards, Flash animation, attract modes). Page 10 flipped from "extras" to the core of the business model. The *structure*, one reader question per page, transfers perfectly.

---

## 9. The Game Design Document (and the awful truth about writing them)
**🧠 Big idea:** The GDD describes **everything in the game** and the whole team refers to it during production. The awful truth is that **almost nobody reads it**. Write it anyway (you'll need it), make it easy to digest, keep it about **gameplay**, and accept that **everything is liquid**.

**📋 The details:**
- **What a GDD is:** the document that lays out **everything that will be in the game**. The whole team refers to it during production. With the ten-pager as the skeleton, the GDD is the flesh.
- **GDD ≠ game bible.** Don't confuse them.
  - A **show bible** is a TV-production term. It concentrates on how the **world works** (its rules) and on each **character's history and ties to the others**.
  - It's useful when world and character info must be shared with others, such as people making **marketing materials (websites), comic book adaptations, merchandise**.
  - But **the bible has nothing to do with gameplay. That's the GDD's job.**
  - Write the bible **after** you've started fleshing out the GDD.
- **The horrible irony:** GDDs take a lot of time and effort, and **no one on your team wants to read them**, because most are **long, intimidating** and full of information ranging from useful to arcane. Rogers found that everyone was *interested* in his GDDs but nobody took the time to *read* them.
- **So why write it?** Because **you will eventually need to read your own GDD.** Docs help you as much as the team. If you keep the game "in your head," at some point you'll have too much to track and get overwhelmed, or worse, **forget a great idea** (like the gun that shoots fire ants).
- **No official format.** Unlike screenwriting, GDDs have no standard form. Each designer finds what works.
  - **Rogers illustrated his GDDs** because he likes to draw, and teammates understood concepts faster from pictures.
  - **The book's sample page (rendered, Maximo III "Merged Grim Form"):** one landscape page for **one feature**: a title; a sketch of the hero and a painting of the Grim Reaper form; short paragraphs with **key terms in bold**; and **comic-strip panels** showing what the form can do (gliding and sliding up walls for traversal, scythe attacks that weaken enemies so the hero can finish them, freeing possessed innocents). It also has a **boxed story note** and a **handwritten margin note**. The rules are compact: the transformation **drains health over time**, collecting enemy souls **sustains** it, and some situations require **switching** forms. The whole feature fits on one glanceable page.
  - That was *his* way: easy and fun for him, and it worked for his team. Not every designer will want to work like that; **find your own way.** A GDD outline is in the appendix (chapter text says Bonus Level 4; TOC lists **Bonus Level 3: Game Design Document Template**).
- **How you communicate doesn't matter, as long as you're clear.** Five techniques:
  1. **Storyboards:** gameplay can be storyboarded like a film. Detailed drawings or stick figures both work, because a picture is worth a thousand words. For inspiration, look at published movie storyboards, comics, or the gameplay diagrams in the book.
  2. **Diagrams:** worried about art skills? (Don't be; even stick figures convey information.) Diagram the gameplay. Use **consistent shapes and colors** for game elements and **always include a legend**.
  3. **Animatics:** animate your storyboards or diagrams (PowerPoint, Flash). It takes more time, but **seeing gameplay in motion leaves very little room for misinterpretation**.
  4. **The beat chart:** a document spanning **the entire game**, so readers can **grok** a lot of information on one page and compare and contrast the flow. (Footnote: *grok* means "understand completely", a slang word coined by sci-fi writer Robert Heinlein.) Details in §11.
  5. **The team wiki:** publish the GDD electronically instead of killing trees. Teammates stay up to date and can **contribute**. **The danger:** as preproduction becomes production, the design team can easily **neglect the wiki until it's out of date**.
- **Gameplay comes first in a GDD:** it covers how the character **acts upon** the world, not how they **connect emotionally** to it. The distinction is subtle but matters. Interaction is GDD; relationships and lore are bible.
- **EVERYTHING IS LIQUID** (a very important thing to keep in mind):
  - Game designs are **living things**. They change, flow, mutate and evolve.
  - If you don't let the idea **simmer** (like chili!), you may miss a great idea or a chance for great gameplay.
  - Much of what you write **will become obsolete**.
  - Past a certain point, **extra writing becomes counterproductive** and everything shifts to **finishing the game**.
  - Still, the design needs a first draft to start from, and the GDD is that **launching pad**.
- **Know your audience (again).** The GDD mainly serves **four kinds of reader: producer, designer, artist and programmer.** Understanding how each discipline **thinks, works and ranks information** is essential for getting your point across.
- **COMMUNICATION IS THE MOST IMPORTANT PART OF THE DESIGNER'S JOB.** Ask teammates what they care about most in the design, **adjust the GDD's format** if needed, and they'll appreciate it in the long run.
- **Words are powerful: be specific.** Give very specific examples and terms, especially for **characters and mechanics**. **If an accurate term doesn't exist, make one up.**
  - **Book example (Maximo vs. Army of Zin):** Rogers first called the Zin enemies **"robots."** Everyone pictured something different, from **C-3PO** to the **Iron Giant**. His actual image was a **metal skeleton of riveted brass with turning gears for guts**, so he started calling them **"clockwork undead."** The specific phrase got everyone picturing the same thing. (Illustration: a boxy classic robot next to a skeletal clockwork Zin with a curved blade.)
- Being specific also applies to how gameplay **unfolds over the course of the game**, which is called **progression** (§10).

**🎮 Book examples:** Maximo III illustrated GDD page → one feature per page, pictures first, bold key terms. Maximo vs. Army of Zin "clockwork undead" → precise invented terms align the team. The fire-ant gun → ideas kept only in your head get lost.

**📱 F2P mobile translation:**
- **The wiki won, and so did wiki rot.** Today the "team wiki" is **Confluence, Notion, Google Docs** and boards in **Miro / FigJam**. Rogers' warning still applies: docs that nobody owns go stale within weeks. Common fixes: **one owner per page**, a **status tag** (Draft / In review / Approved / Live / Deprecated), a **changelog** at the top, and links from **Jira tickets** back to the spec.
- **Bible vs GDD in F2P:** the **game bible** (world, characters, tone, art direction) matters a lot for LiveOps, because new event themes, characters and store art must stay on-brand for years. Keep it separate from feature specs.
- **Storyboards, diagrams and animatics → wireframes, flowcharts, clickable Figma prototypes.** For a LiveOps feature, a **UI flow mockup** (entry button → event screen → progress → reward claim) gets the point across faster than three pages of text. A **gray-box prototype** is the modern animatic.
- **The four readers in an F2P team:** add **product manager / LiveOps manager, economy designer, data analyst, UA / marketing, QA**. The analyst wants **telemetry events and success metrics**; QA wants **edge cases**; the economy designer wants **numbers**.
- **"Clockwork undead" for F2P:** name things precisely. "Reward" is the "robot" of F2P docs. Say "**3 Gold Chests (soft-currency bundle, 500–800 coins)**" instead. Agree on a **glossary page** (e.g., what counts as a "session", a "payer", an "active player").
- **Everything is liquid = A/B tests and live tuning.** In F2P, your design changes *after launch* based on data. Specs should mark which values are **remote-config tunable**.

**🪝 Make it stick:** The GDD is a **cookbook nobody reads, except the chef at 2 a.m.** And when you write "robot," your team imagines a toaster, a Terminator and a Roomba at the same time. Say **"clockwork undead"** and everyone sees the same rattling brass skeleton.

> ⚠️ **2010 → 2026:** Flash is dead, so animatics are made in **Figma, After Effects, Unity/Unreal gray-box**, or even screen recordings. Perforce-era file docs moved to cloud wikis. "Everything is liquid" became official process in live games: specs are versioned, and post-launch data rewrites them.

---

## 10. Gameplay progression
**🧠 Big idea:** **Progression** is how gameplay unfolds for the player over the game. Decide deliberately **how the player starts** (five classic options), and know **how the game ends**. That's where the beat chart comes in.

**📋 The details:** Introducing gameplay is tricky. **Five ways to start a game:**
1. **Ground zero:** the player starts at level 1 with **no skills, gear or abilities**.
2. **Shown but locked:** several skills are **shown at the start but unlocked over time**. The **gate** can be **experience, money, or some other factor**.
3. **Has skills, doesn't know how to use them… yet.**
   - Footnote: **the amnesiac hero is one of the oldest clichés in games.** Avoid it unless you have an exceptionally clever twist; nothing makes gamers roll their eyes faster, except maybe "it was all a dream."
4. **Big power, then lose it:** the player has significant power right away, then **loses it after a boss fight or first confrontation**.
5. **Big power, then flashback:** the player has significant power right away, then must **"start back at zero"** because the story is told as a **flashback**.
- **Just as you need to know how the game begins, you need to know how it ends.** The beat chart helps with that.

**🎮 Book examples:** (no specific games named) The amnesia cliché and "it was all a dream" → story crutches that annoy players.

**📱 F2P mobile translation:**
| Book start | F2P version |
|---|---|
| Ground zero | Most puzzle and hyper-casual games: level 1 teaches one thing, with no menus at first. |
| Shown but locked | Very common: home screen features **appear grayed out with "Unlocks at level X"**, which builds anticipation. Gates are player level, chapter, or stars. |
| Has skills, learns them | Boosters given free during FTUE with a guided "tap here" tutorial, then sold or earned later. |
| Big power then lose it | **"Power fantasy" FTUE**: let new players play a battle with a maxed hero or full team, then reset to the starter roster, showing what they're working toward. (Many RPG/gacha and strategy games use a variant of this.) |
| Flashback | A cinematic opening battle "in the future", then "3 days earlier…". Rarer on mobile because FTUE time is precious. |
- **"Know how it ends" → know the long-term arc:** F2P games often have no ending, so define **content runway** (how many levels or chapters at launch vs how fast players finish them) and the **endgame loop** (PvP ladder, guild raids, collection completion).

**🪝 Make it stick:** **"Zero, Locked, Clueless, Robbed, Rewind."** Five ways to wake up a hero: in a crib (zero), at a locked toy chest (locked), holding a sword upside down (clueless), as a god who gets mugged by the first boss (robbed), or at the end of the movie before "Three days earlier…" (rewind). And never wake up with amnesia.

---

## 11. The Beat Chart
**🧠 Big idea:** The **beat chart** maps the **whole game's structure** level by level on one sheet. Line up the columns and you can see where content clumps, repeats, starves or bloats, and fix it before anything gets built.

**📋 The details:**
- **What it does:** helps you develop GDD content **and** gives a **"map" of the game's structure**, which is extremely important when examining **gameplay progression**.
- **The 15 required elements of every beat chart (per level/environment):**
  1. **Level / environment name**
  2. **File name** (the level's designation, e.g., "1-1")
  3. **Time of day** (in the game's fiction)
  4. **Story elements** for the level
  5. **Progression:** the level's **gameplay focus** (what's being taught or tested)
  6. **Estimated play time**
  7. **Color scheme** of the level
  8. **Enemies / bosses** introduced and used
  9. **Mechanics** introduced and used
  10. **Hazards** introduced and used
  11. **Power-ups** found there
  12. **New abilities, weapons or gear** introduced / unlocked
  13. **Treasure:** amount and type available
  14. **Bonus material** found there
  15. **Music track(s)** used
- **The book's example (rendered and checked): two levels of *Maximo: Ghosts to Glory*,** laid out as side-by-side columns:

| Field | World 1-1, "Grave Danger" (Boneyard) | World 1-2, "Dead Heat" (Boneyard) |
|---|---|---|
| Time of day | Night | Night |
| Story | Hero enters the graveyard, fighting through undead blocking his way | The villain's drill has cracked the ground and lava pits open across the graveyard |
| Progression | **Teaches** basic movement, combat, defensive moves, and collecting and assigning abilities | **Masters** hazardous jumps and more intense combat |
| Est. play time | 15 min | 15 min |
| Color map | Green (trees), brown (trees/rock), purples (tombstones) | **Red (lava)**, brown, purples |
| Enemies | 7 types: basic skeleton, red sword skeleton, axe skeleton, ghost, basic zombie, wooden coffin, chest mimic | Keeps several and **adds** a blue sword skeleton, a guardian skeleton and a raven |
| Mechanics | ~14: holy ground, breakables (tombstone, torch, crypt lid, rocks), key statue + lock, opening gates, prize wheel, chests (normal, locked, hidden), end plinth | Similar set, **adds** an enemy coffin and a floating platform |
| Hazards | Unholy ground, statue, fall-away ground, skull tower, breakaway bridge, deep water, lava pit | Unholy ground, skull tower, lava pit, **adds** a swinging gate and a flame jet |
| Power-ups | ~14: coin types, diamond, spirit, life up, flame weapon, shield and sword recharges, health, keys, armor up | Nearly identical (one key type fewer) |
| Abilities | Five combat abilities (including a joke-named one, "foot cheese") | Four of the same, **adds** throw shield |
| Economy | 200 koins, 2 death koins | 200 koins, 1 death koin |
| Bonus materials | N/A | N/A |
| Music | Graveyard 1 | Graveyard 2 |

  - The book says **italics mark new gameplay features**, but in this printing the italics don't show. The "adds" above come from **diffing the two columns yourself**, which is exactly the skill the beat chart trains.
  - **Diff in both directions: what 1-2 drops from 1-1.** Enemies: the wooden coffin and chest mimic are gone (a coffin returns as an *enemy coffin* mechanic). Mechanics: breakable rocks and the cave gate are gone. Hazards: the Achille statue, fall-away ground, breakaway bridge and deep water are gone (the new swinging gate and flame jet take their slot; lava pits appear in both). Power-ups: the iron key is gone. Abilities: "foot cheese" is swapped for throw shield. Net effect: the level isn't just "more stuff"; it **rotates the hazard set (water and bridges out, fire and gates in)** while the core combat kit stays, which is how a mastery level stays fresh.
  - **Villain's name:** the "drill" in 1-2's story is **Achille's** (Maximo's villain). His name already appears on the 1-1 key statue and statue hazard, so the villain's presence is seeded into the props before the story pays it off.
- **Reading the chart:** compare **two or more columns** and patterns appear in how new **enemies, mechanics, items and abilities** are introduced. Then **spot deficiencies and move things around**: fill holes here, trim bloat there.
- **What to look out for (the beat-chart checklist):**
  - **"Clumping":** too many new enemies or mechanics introduced **at once**. Spread them out over the game. (The **first level always has several elements**, so it technically doesn't count.)
  - **"Samey-ness":** the same **enemy-plus-mechanic pairings** recurring too often. Vary the pairings so encounters stay fresh.
  - **Alternate time of day and color schemes.** Too many identical lighting or color setups in a row looks and feels repetitive.
  - **Alternate music tracks.** Players get bored hearing the same music over and over.
  - **Economy problems:** players need **enough money to buy useful items**, but **not so much that money becomes worthless**.
  - **Introduce mechanics and enemies together with the items and abilities needed to beat them.**
  - **When does the player have "everything"?** (All weapons, skills, vehicles, armor upgrades.) Give them time to play with it. Rogers aims for **everything unlocked by ~75% of the game**, so the last quarter lets players use all their cool stuff.
  - **Rule of thumb: each level should bring in just 2 or 3 fresh mechanics, enemies and rewards.**
- **Session length debate:** "bite-size" vs longer, more involved play. With the **rise of casual games**, most players seemed to prefer **shorter sessions, averaging about 15 minutes**, though tastes might swing back toward hardcore. **What matters most: give players their money's worth.**
- **Total length:** Rogers advises **at least 8–10 hours of gameplay for action games**, **not counting** replays, cutscenes or reading dialogue. More content never hurts: if the worst happens, **you can always cut content** during production delays. (Level 9 has tricks for estimating play time.)

**🎮 Book examples:** Maximo: Ghosts to Glory beat chart → how a teaching level (1-1) hands off to a mastery level (1-2) with a new color (lava red), a couple of new enemies, mechanics and hazards, one new ability and new music. That's the 2–3-new-things-per-level rule in action.

**📱 F2P mobile translation, the F2P beat chart(s):**
- **Puzzle-game level progression sheet** (a beat chart with one row per level instead of one column; there can be thousands of levels). Example columns: level #, chapter/area, **goal type** (collect, clear blockers, reach target), **moves**, **new blocker/mechanic introduced**, **booster unlocked**, **difficulty tier** (normal / hard / super hard), **target win rate or attempts-to-win**, rewards, **monetization touchpoint** (e.g., the first "out of moves, continue?" offer), narrative/meta beat, theme/music.
  - **Clumping →** two new blockers in the same level = a churn spike.
  - **Samey-ness →** ten "collect X" goals in a row = boredom. Alternate goal types.
  - **Alternate color/time of day →** alternate **chapter themes**, and use a **difficulty sawtooth** (easy-easy-hard-easy) instead of a flat ramp.
  - **Economy →** coins earned per level vs booster prices. Players should be able to afford a booster sometimes, but coins shouldn't pile up uselessly.
  - **Introduce with the counter →** give a free booster or tutorial when a nasty blocker first appears.
  - **"Everything by 75%" →** there's no end, so translate it to: **every new tool gets a playground window** of several easy levels to enjoy it before the next gate.
- **LiveOps calendar = a beat chart across weeks.** Columns are weeks, rows are event types (competitive, collection, co-op, sale, season pass). Watch for **clumping** (three demanding events in one weekend), **samey-ness** (the same race event every week), **economy floods** (stacked reward events inflating currency) and **color/theme repetition** (alternate themes and seasonal skins).
- **Session length:** mobile sessions are typically **short and frequent** (a few minutes, several times a day). Design the **session beat**: a full loop of start → challenge → reward should fit inside a short break.
- **"Money's worth" in F2P = value perception and respect.** Players who never pay should still have a fun game, and payers should feel offers are fair. The 8–10 hour target becomes **content runway**: make sure players can't finish all your content faster than you can make more.

**🪝 Make it stick:** **"Beat chart = EKG of your game."** A flat line (samey-ness) means the patient is dead; a spike of five new enemies at once (clumping) is a heart attack. Healthy rhythm: **2–3 new things per level, colors and music alternating, a wallet that's never empty or overflowing, all the toys unlocked by 75%.**

> ⚠️ **2010 → 2026:** "Casual players prefer about 15-minute sessions" was a 2010 observation. On phones, sessions are usually shorter and more frequent, and the bigger metric is **retention over days and months**. The beat-chart method is more relevant than ever: puzzle teams manage huge level lists in spreadsheets and tune them using **live win-rate data**.

---

## 12. Above all, don't be a schmuck
**🧠 Big idea:** Documents are worthless if you're not a **responsible designer**. Nine habits, all "common sense," and as Rogers notes, common sense isn't that common.

**📋 The details (nine rules):**
1. **A good idea can come from anywhere.**
   - Beware **"not invented here" syndrome**: the belief that ideas from anyone outside the design team don't count. Only an enormously arrogant person believes that.
   - Good designers keep their **ear to the ground** for suggestions from others.
   - **Always share your ideas and designs.** People may disagree, and you don't always have to take their advice.
2. **Make a decision and stick with it.**
   - Designs always change, but the **worst thing is redoing work over and over**.
   - Perfectionism isn't a crime, but many design issues can be **worked out on paper before a single pixel is rendered or line of code typed**.
   - Projects **drain time, resources and team morale** when design leads can't commit to a direction.
3. **Update often.** Send emails, comment on documents, and use systems like **comments or page colors** so colleagues know when things change.
4. **Hit the hardest problems first.** Consult your **art and programming leads early** on how they work and which parts of your design they expect trouble with. **Don't leave hard problems for the end.** If a solution fails, you still have time to change course.
5. **Trust your instincts.** Sometimes you'll have an idea nobody believes in, and you'll have to defend it stubbornly. **Pick your fights**: if everything becomes drama, you'll turn teammates off and get **branded a prima donna**. But do stand up for a genuinely good idea; time may prove you right.
6. **Respect your peers' abilities and be mindful of their limitations.** People are better at some things than others. Work with your **producer** to find the best person for each job. Avoid assigning work to someone with no talent for it or no interest in it. **Ask teammates what they'd like to work on**, because people do better work on things they're into.
7. **Save often and always.**
   - Illness, holidays and even **new babies** all happen mid-project, so the designer may be absent exactly when something critical comes up.
   - Make designs **accessible to all relevant teammates, especially the producer**.
   - Store documents with tools like **Perforce, Alienbrain or Subversion** on a **regularly backed-up drive**.
   - **Don't keep the game in your head. Write it down.** Have a **filing system** so you can find your own work too.
8. **Stay organized.**
   - Use **naming conventions humans understand**: a forest level should have "forest," or at least "f," in its name.
   - Rogers prefers the **"European" date format: day, month as text, year** (e.g., "27 JUL 09"), which is easier to read when many versions exist.
   - **Dating file names** helps, especially on projects longer than a calendar year.
   - **Name everything in the game consistently.**
9. **Be prepared.**
   - Others will need ways to get around your game: build in **level skips**, a **flexible cheat camera** (for screenshots), and **cheat codes** (invulnerability, power-ups, money, etc.).
   - Ask your **publishing/marketing partners about their needs early**. They may want **extra levels, costumes or bonus material** for marketing and sales. Be ready to make it; don't leave it to the last minute.
   - You may need to make a **demo**. Think about what would show the game at its best, and **earmark levels or experiences for a demo** early.
- **Payoff:** follow this advice and your project runs much more smoothly. Next up: the **Three Cs**, which Rogers calls a pillar of game design.

**🎮 Book examples:** (no specific games) The "babies are born" line → the bus factor: if the design lives only in one person's head, the project stalls when they're out.

**📱 F2P mobile translation:**
| Rule | F2P version |
|---|---|
| Ideas from anywhere | **Community managers, player support tickets, reviews, Discord, and data analysts** are huge idea sources. So are **UA creative tests**: an ad concept that converts well can become a real feature. |
| Decide and stick | Use **decision logs** in the spec. "Liquid" in F2P means *data-driven* change via A/B tests, not opinion churn. Decide, ship, measure, then iterate. |
| Update often | Changelog at the top of every spec, Slack announcements, comment threads in Confluence/Notion, status tags. |
| Tough ones first | In F2P the tough ones are often **server-side**: real-time multiplayer, anti-cheat, economy exploits, event scheduling across time zones, store compliance. Prototype and de-risk them early. |
| Trust instincts | Back instincts with a **cheap test** (a prototype, a fake-door test, a small A/B) instead of an argument. |
| Respect peers | Cross-discipline squads (feature teams): ask the artist and engineer what they're excited about. |
| Save often | **Git / Perforce / Unity Version Control**, cloud docs with version history, and **remote config** values kept in source control or documented. |
| Stay organized | Naming conventions for **events, offers, SKUs, analytics events and remote-config keys** (e.g., `evt_chilicookoff_2026w42_tier3`). **ISO dates (2026-10-10) sort correctly** in file lists. |
| Be prepared | **Debug/cheat menus** in dev builds (add currency, skip level, unlock all, time travel for timers), **GM tools** for LiveOps, **UA creative needs** (gameplay captures, playable-ad builds), **store screenshot builds**, featuring assets. The modern "demo" = **soft launch, vertical slice, or playable ad**. |

**🪝 Make it stick:** **"Good Decisions Usually Take Teams Really Seriously, Organized & Prepared."** = **G**ood idea from anywhere · **D**ecide & stick · **U**pdate often · **T**ough ones first · **T**rust instincts · **R**espect peers · **S**ave often · **O**rganized · **P**repared. Or picture the **schmuck**: hoards ideas, flip-flops daily, never emails, leaves the boss fight until the last week, throws tantrums, keeps the only copy of the GDD on a USB stick in his pocket… and goes on vacation.

> ⚠️ **2010 → 2026:** Alienbrain and Subversion are rarely used now. Perforce survives in bigger studios, and Git (with LFS) and Unity Version Control are common. Rogers' "27 JUL 09" format is human-readable, but **ISO 8601 (YYYY-MM-DD)** is the modern standard because it sorts chronologically. The principle (unambiguous, consistent naming) is unchanged.

---

## 13. 📱 F2P paperwork toolkit: what you'll actually write at a mobile studio
**🧠 Big idea:** Rogers' four-document ladder still exists in F2P, but it has been broken into smaller, living pieces: **concept one-pagers, feature one-pagers, feature specs, economy spreadsheets, level/LiveOps beat charts, and an age-rating plan.** These are also the artifacts **design tests** ask for, so learning them is a hiring skill.

### 13.1 The modern doc stack
| Document | Length | Purpose | Book ancestor |
|---|---|---|---|
| **Concept one-pager** | 1 page | Pitch a whole new game | One-sheet |
| **Feature one-pager / feature brief** | 1 page | Pitch one feature or event and get a go/no-go | One-sheet, applied to a feature |
| **Pitch / greenlight deck** | ~10–20 slides | Get funding or approval for a game | Ten-pager |
| **Feature spec** (e.g., a LiveOps event) | 3–15 pages | Tell the team *exactly* how to build it | A GDD chapter |
| **Economy spreadsheet** | Many tabs | The numbers: currencies, sources, sinks, prices, curves | GDD "economy" section, grown up |
| **Level progression sheet / LiveOps calendar** | Spreadsheet | Structure over time | Beat chart |
| **Game bible / art bible** | Wiki | World, characters, tone, style for years of content | Show bible |
| **Hub wiki page** | Living | Links everything; replaces the 300-page GDD | GDD |

### 13.2 The feature one-pager (feature brief)
A one-page pitch for a single feature, shared before anyone builds anything. Fields:
1. **Feature name + one-line pitch** (player-facing fantasy).
2. **Problem / opportunity**, with data if you have it (e.g., "players drop between levels 40–60", "weekends have low engagement").
3. **Goal + primary KPI** (e.g., D7 retention, sessions per day, event participation, payer conversion) **+ guardrail metrics** (what must not get worse).
4. **Target segment** (new players, lapsed, non-payers, engaged payers, clan members).
5. **How it works**, in **three bullets** (Rule of Threes) + a tiny flow diagram.
6. **Rewards & economy impact** (sources added, sinks added, rough amounts).
7. **Monetization hook** (if any) + **ethics check** (no pay-to-win surprises, odds disclosed, no manipulative timers).
8. **Comps**: three games that do something similar well (winning horses!).
9. **Effort estimate** (T-shirt size: S/M/L per discipline) + **dependencies** (server, art, UI).
10. **Risks & open questions.**
11. **Success criteria + test plan** (A/B test or staged rollout, what result means "keep it").

### 13.3 The feature spec for a LiveOps feature (template)
Use this for an event, a pass, a new mode, a social feature. Section headers:
1. **Header**: owner, status (Draft / Review / Approved / Live / Deprecated), version, last updated, links (one-pager, tickets, Figma, economy tab).
2. **Summary & goals**: pitch, KPI targets, guardrails, target segment.
3. **Player fantasy & experience**: what it should *feel* like (Rogers' gestalt!).
4. **Rules & mechanics**: precise, numbered rules; glossary of new terms ("clockwork undead"-level specificity).
5. **Player flow**: entry points (home button, pop-up, push notification) → event screen → play → progress → reward claim → end. Include **wireframes** and a **flowchart**.
6. **Rewards & economy**: reward tables per tier, costs, currency flows, expected earnings per player type (non-payer / low / mid / high spender), and a **link to the economy sheet**.
7. **Monetization**: offers tied to the event, pricing tiers, pass structure; **compliance** (random-item odds disclosure, regional loot-box rules, age-rating impact).
8. **Content & assets**: art list, audio, localization strings, theme (link to the bible).
9. **Timing & scheduling**: duration, start/end times and **time zones**, recurrence, calendar slot, conflicts with other events.
10. **Edge cases**: late joiners, players who quit mid-event, ties on leaderboards, disconnects, refunds, players below the unlock level, device or time changes (cheating timers), what happens to leftover event currency.
11. **Tech requirements**: client vs server logic, **remote-config parameters** (what's tunable live), backend services, anti-cheat.
12. **Analytics / telemetry**: events to log (start, progress, claim, purchase, quit), dashboards, success metrics.
13. **Test plan**: QA checklist, **cheat tools needed** (Rogers' "Be prepared"!), A/B test design, soft-launch plan.
14. **Rollout & LiveOps plan**: first run, iteration plan, how results feed the next version.
15. **Risks, open questions, decision log, changelog.**

### 13.4 The economy spreadsheet *as a document*
In F2P, the economy sheet is a design document in its own right, often the most-read one. Typical tabs:
- **Currencies:** soft (coins), hard (gems), event currencies, energy/lives, and how each is earned and spent.
- **Sources & sinks:** every faucet and drain, with **amount per day by player type**.
- **Progression curves:** XP per level, upgrade costs, level difficulty, time-to-unlock.
- **Reward tables:** chests, event tiers, pass tiers, drop rates (needed for odds disclosure).
- **Store & pricing:** IAP price points, bundle contents, value per currency unit, **value-per-dollar comparison** across offers.
- **Simulation:** a day-by-day model of a non-payer vs a payer: balance over time, when they hit walls, how long a goal takes.
- **Sanity checks:** inflation (does currency pile up?), starvation (can a non-payer ever afford a booster?). These are Rogers' beat-chart economy check: enough money to buy things, never so much it's worthless.
- **Write a README tab:** what each tab is, who owns it, which cells are inputs vs formulas. A sheet nobody can read is "the GDD nobody reads," in spreadsheet form.

### 13.5 Age ratings on app stores (quick reference; full detail in §4)
- **Google Play → IARC questionnaire** → regional ratings (ESRB, PEGI, USK, ClassInd, ACB… or generic IARC ages).
- **Apple → its own questionnaire** in App Store Connect (tiers updated in 2025: 4+, 9+, 13+, 16+, 18+).
- **Put the target rating on the one-pager**, plus descriptors you'll trigger (**in-game purchases, random items, user interaction/chat, ads, simulated gambling**). Changes that add chat, loot boxes or gambling-like mechanics can change your rating, so flag them in the spec.

### 13.6 Living docs: Confluence, Notion, Miro (keeping the wiki alive)
- **Confluence** (common in studios that use Jira), **Notion** (common in smaller/indie teams), **Google Docs/Sheets** (specs and economy), **Miro / FigJam** (flowcharts, loop diagrams, brainstorming boards, event calendars), **Figma** (UI wireframes and prototypes).
- **Rules to beat Rogers' "wiki rot":** one **owner** per page · a **status** label · **changelog** at the top · **"last verified" date** · archive deprecated pages instead of leaving them · link specs **from** tickets · a **hub page** per feature area · a team **glossary** page.

### 13.7 Design tests: what F2P studios commonly ask for
Many mobile studios give designer candidates a take-home test. Common prompts (generic examples, not quotes from any specific company):
- "Write a **one-pager** for a new **LiveOps event** for [our game]."
- "Design a feature to improve **D7 retention / engagement / conversion**; deliver a **feature spec** (2–5 pages)."
- "**Deconstruct** [a competitor]: core loop, meta, monetization, what you'd change."
- "Balance this **economy** / build a **progression curve** in a spreadsheet."
- "Design **10 levels** introducing a new blocker" (a beat-chart test!).

**How to ace them, using this chapter:**
1. **Lead with the problem and the KPI** (execs-first page), then the rules and flow (team pages). That's Rogers' two-audience table.
2. **One page means one page.** Respect the length limit; reviewers read dozens of these.
3. **Visuals beat walls of text:** a flowchart, a wireframe, a reward table (storyboards/diagrams, with a legend!).
4. **Use precise terms and define new ones** ("clockwork undead" rule).
5. **Rule of Threes:** three comps, three bullets per point, three KPIs (one primary, two guardrails).
6. **Show numbers:** a mini economy table proves you think like an F2P designer.
7. **Cover edge cases and ethics:** it signals seniority.
8. **State your assumptions** (you don't have their data; say what you'd measure).
9. **Fit their game:** respect its gestalt, audience and rating.

### 13.8 📱 F2P One-Sheet template (adapted from Rogers' 8 fields)
| # | Field | What goes in it | From Rogers' field |
|---|---|---|---|
| 1 | **Title + subtitle** | Store-ready name; subtitle hints at genre/keyword | Game title |
| 2 | **Platforms & device profile** | iOS/Android, phone/tablet, **orientation**, min spec, online/offline | Intended game systems |
| 3 | **Target audience** | Age range + **motivations** (relax, compete, collect, create, socialize) + play context (commute, couch) | Target age |
| 4 | **Target age rating** | IARC + Apple tier; descriptors (in-game purchases, random items, chat) | Intended ESRB rating |
| 5 | **Player fantasy + core loop** | One sentence of fantasy + a 3–4 step loop | Story summary focused on gameplay |
| 6 | **Loops & modes** | Core loop, meta loop, social layer, LiveOps event types | Distinct modes of gameplay |
| 7 | **USPs (3–5)** | Written as **store screenshot captions**; each must be showable in a 15-second ad | Unique selling points |
| 8 | **Comps (3)** | Successful, recent; what we borrow / what we do differently | Competitive products |
| 9 | **Business model** | IAP / ads / pass / subscription mix; main offers; ethical guardrails | *(new)* |
| 10 | **Session design** | Target session length, sessions per day, what brings players back | *(new; Rogers' "15-min sessions")* |
| 11 | **Target KPIs** | D1/D7/D30 retention targets, conversion, ARPDAU ballpark (labeled as targets) | *(new)* |
| 12 | **Why now / risks** | Market gap; top 3 risks and how you'd test them cheaply | *(new)* |

**Filled example (hypothetical game, for practice): *Simmer Down!***
- **Title:** *Simmer Down! Match & Cook* (hypothetical).
- **Platforms:** iOS + Android phones, portrait, one-thumb, plays offline (events need a connection).
- **Audience:** adults who like relaxing puzzles in short breaks; motivations: relaxation, light progression, decorating.
- **Rating target:** low-age tier (e.g., IARC 3+ / Apple 4+); descriptor: in-game purchases; **no paid random items**.
- **Fantasy + loop:** "Turn a run-down roadside diner into the hottest chili joint in town." Loop: play match-3 level → earn stars + coins → spend stars to renovate the diner → unlock the next story chapter.
- **Loops & modes:** core (levels), meta (diner renovation + recipe book collection), social (teams that share lives), LiveOps (weekend Chili Cook-Off race, monthly pass).
- **USPs:** "Cook up 10 new blockers, from boiling pots to sticky salsa" · "Renovate a diner room by room" · "Race your team in the weekend Chili Cook-Off" (a fourth could come from the recipe collection).
- **Comps:** Royal Match (puzzle feel), Homescapes (renovation meta), a cooking-themed casual game (tone). The rule here is three winning horses.
- **Business model:** IAP (coins, booster bundles, lives), monthly pass, opt-in rewarded ads for an extra booster.
- **Session:** about 3–5 minutes; lives refill + daily rewards + team requests bring players back.
- **KPI targets:** set as hypotheses to validate in soft launch (e.g., benchmark D1 against top puzzle comps).
- **Risks:** crowded genre → differentiate with the cooking theme and blockers; test with CPI ad tests before full production.

### 13.9 📱 F2P Ten-Pager outline (mapped from Rogers' ten pages)
| Page | Rogers' page | 📱 F2P version: what goes on it |
|---|---|---|
| **1** | Title page | **Title & snapshot:** placeholder logo + **app icon mock**, genre/subgenre, platforms & orientation, target audience, **target age rating (IARC/Apple)**, business model, **soft-launch target date & test markets**. |
| **2** | Game outline (story + flow) | **Pitch & loops:** player fantasy, story hook (beginning/middle/end if any), **core loop diagram**, loops over time (30 sec / session / day / season / months), long-term goal instead of a victory condition. |
| **3** | Character | **Characters / roster & controls:** hero or mascot concept art, personality in one word (Kratos-"brutal" style), roster structure (rarity, roles, signature skills) if a collection game; **gesture map** (tap/swipe/drag) instead of a controller map. |
| **4** | Gameplay | **Core gameplay:** level/match structure, goal types, set-piece moments, USPs shown in action, modes/minigames; **device features** (one-thumb, offline, download size, notifications, haptics, low-end support). |
| **5** | Game world | **World & meta map:** saga/chapter/base map, how areas unlock, themes and moods per area, where events appear. |
| **6** | Game experience | **Experience & FTUE:** first 60 seconds, first session, art and audio direction, **UI shell flowchart** (home, shop, events, pass, social), login pop-up order. |
| **7** | Gameplay mechanics | **Mechanics, boosters & economy:** three key mechanics, three blockers/hazards, boosters (power-ups), collectibles (cards, stars, tokens), **economy summary** (currencies, top sources & sinks) with a link to the sheet. |
| **8** | Enemies | **Opposition & challenge:** obstacles/enemy types/rival players; boss levels, raid bosses, event bosses, and their rewards; difficulty philosophy (sawtooth, win-rate targets). |
| **9** | Cutscenes | **Narrative & presentation:** short skippable story beats, meta-narrative (characters, chapters), subtitles for silent play; **store video & UA ad concepts** (the modern attract mode). |
| **10** | Bonus materials | **LiveOps, social & business:** event calendar sample, season/pass, collections, clans/teams/leaderboards, monetization summary + ethical guardrails, **KPI targets**, analytics plan, team/timeline, top risks. |

> ⚠️ **2010 → 2026:** Rogers' ten-pager sells a *product* that ships once. The F2P ten-pager sells a *service*: it must convince readers the game can **retain** players for months and that the team can **feed it content** forever. That's why page 10 becomes the heaviest page.

**🪝 Make it stick:** In 2010 you wrote **a cookbook**. In 2026 you write **a restaurant's operating manual**: daily specials (events), the price list (economy sheet), health inspection (age ratings) and a whiteboard menu that changes every week (living docs).

---

## 🏆 Universal Truths & Clever Ideas
1. **Making a game resembles making chili: get a proper recipe, the right tools and ingredients, and allow enough cooking time.**
   📱 *so for F2P:* the "time" includes soft launch and post-launch simmering. A live game is never finished cooking.
2. **A GDD should be just long enough to describe the game's action.**
   📱 *so for F2P:* apply it per feature. Each spec should be just long enough to build and test that feature.
3. **Know your target age rating and design toward it.** *(The book says ESRB.)*
   📱 *so for F2P:* know your **IARC and Apple** targets and the descriptors (purchases, random items, chat) your features trigger.
4. **Work your way up: one-sheet → ten-pager → GDD.**
   📱 *so for F2P:* feature one-pager → approval → feature spec → wiki and live tuning.
5. **Use tools like beat charts to catch design problems early.**
   📱 *so for F2P:* level progression sheets and LiveOps calendars are your beat charts.
6. **Nobody likes reading long design docs, so find the best way to communicate with your team.**
   📱 *so for F2P:* wireframes, flowcharts, reward tables, short pages, clear owners.
7. **Everything is liquid: your design WILL change during production.**
   📱 *so for F2P:* it keeps changing after launch too, through A/B tests and remote config.
8. **Give players their money's worth.**
   📱 *so for F2P:* respect non-payers' time and make offers feel fair. Value perception drives long-term revenue.
9. **Name and organize documents and files intelligently.**
   📱 *so for F2P:* naming conventions for events, SKUs, analytics events and config keys; ISO dates.

---

## 🧩 Connect the dots
- **← L02 Ideas:** the one-sheet is where a brainstormed idea first becomes a shareable artifact.
- **← L03 Writing the Story:** the "story summary focused on gameplay" and the bible-vs-GDD split; L03's genre list feeds Ten-Pager **Page 4**.
- **→ L05 / L06 / L07 (Three Cs: Character, Camera, Controls):** Ten-Pager **Page 3** (character + control map) previews these chapters; the Three Cs should be locked early in preproduction.
- **→ L08 HUD & icons:** the UI shell flowchart (Page 6) and readable icons in your docs.
- **→ L09 Level design:** beat charts feed level design; L09 has play-time estimation tricks.
- **→ L10 / L11 Combat, enemies & bosses:** Ten-Pager **Page 8** and the beat chart's enemy rows.
- **→ L12 Mechanics & hazards:** the mechanic/hazard definitions introduced on **Page 7**.
- **→ L13 Power-ups & rewards:** power-ups, collectibles, economy, and the beat chart's treasure rows.
- **→ L14 Multiplayer / L16 Cutscenes:** Pages 9–10.
- **→ L17 The Hard Part:** pitching and production reality; these docs are your pitch ammo.
- **→ F2P1 (core loop, meta, economy, FTUE)** and **F2P2 (LiveOps, events, A/B tests, ratings, ethics):** the modern doc stack in §13 is how those systems get designed and communicated.

---

## 🔁 Retrieval check (do it closed-book!)
1. What are the four preproduction documents, in order, and what do they all eventually become?
2. List the eight fields of Rogers' one-sheet.
3. What were the six ESRB ratings in 2010, and which two carried stigma (and why)?
4. What did The Punisher's developers change, and why?
5. What makes a good comp, and what's Rogers' motto about choosing them?
6. How many USPs does Rogers recommend, where does that number come from, and which phrases don't count?
7. Fill in the audience table: what does the production team want vs marketing/executives?
8. Explain the logic of the Rule of Threes, example by example.
9. Name all ten Ten-Pager pages, in order, with one key item on each.
10. What's the difference between a mechanic, a hazard and an enemy? A power-up vs a collectible?
11. What's the difference between a game bible and a GDD?
12. What are Rogers' five techniques for communicating a design, and what's the danger with the wiki?
13. What does "Everything is liquid" mean, and who are the GDD's four primary readers?
14. Name the five ways to start a game's progression and the cliché to avoid.
15. Name at least ten of the beat chart's 15 elements and five of its warning signs (with Rogers' two numeric rules of thumb).

<details><summary>Answers</summary>

1. One-sheet → ten-pager → beat chart → game design document (GDD). All eventually evolve into the GDD.
2. Game title; intended game systems; target age; intended ESRB rating; story summary focused on gameplay; distinct modes of gameplay; unique selling points; competitive products.
3. eC, E, E10+, T, M (17+), AO (18+). eC was seen as "baby games" (edutainment, licensed titles for young kids). AO meant no US brick-and-mortar retailer would stock the game, the industry's X rating, so publishers avoid it. (eC was retired in 2018.)
4. They changed camera angles and showed the brutal interrogation scenes in black and white to bring the rating down from AO to M. That's designing toward a rating.
5. Comps are released games similar to yours. Pick ones that are very familiar or successful, because a flop comp scares publishers. Motto: "always pick a winning horse."
6. About five, because only about five bullets fit on the back of a game box. "Amazing graphics," "awesome story" and "sequel to an award-winning game" don't count; every game should have those, and gamers spot marketing BS.
7. Production: clear gameplay diagrams, short punchy sentences, specific terminology, comparisons to appropriate games (even old ones). Marketing/execs: exciting concept images, bullet points, vivid descriptive examples, successful modern comps. It can be one document, since both audiences read it.
8. The first example gives the idea but can mislead; the second gives something to compare or contrast; the third complements or contrasts so it doesn't feel binary or contrived; more than three gets long and boring.
9. 1 Title page (title, systems, age, rating, ship date, placeholder logo font); 2 Game outline (story summary + game flow, victory condition); 3 Character (dossier, concept art, personality, signature moves, control map); 4 Gameplay (sequence of play, set pieces, minigames, platform features); 5 Game world (environments, mood, music, map); 6 Game experience (gestalt, first screen, shell flowchart); 7 Gameplay mechanics (mechanics, hazards, power-ups, collectibles, economy); 8 Enemies (enemies + bosses, rewards); 9 Cutscenes (method, timing, attract mode); 10 Bonus materials (unlockables, replay, multiplayer, DLC, episodic).
10. A mechanic is something the player interacts with to create or aid gameplay. A hazard is a mechanic that can hurt or kill but has no intelligence. An enemy is a hazard with AI. A power-up is collected and helps gameplay (ammo, lives, invulnerability). A collectible has no immediate gameplay effect (coins, puzzle pieces, trophies) but may buy or unlock things later.
11. A bible (from TV) covers world rules and character backgrounds and relationships, for sharing with marketing, comics and merch, and has nothing to do with gameplay. The GDD is about gameplay: how the character interacts with the world. Write the bible after the GDD is underway.
12. Storyboards, diagrams (consistent shapes and colors plus a legend), animatics, beat charts, and the team wiki. The danger: once production starts, the wiki gets neglected and goes out of date.
13. Designs are living things that change, flow and evolve; much of the doc will become obsolete, and eventually finishing the game matters more than writing, but the GDD is the launching pad. The four readers: producer, designer, artist, programmer.
14. Ground zero (no skills); skills shown but unlocked over time (gated by XP, money, etc.); has skills but doesn't know how to use them yet; big power that's lost after a boss or first fight; big power, then back to zero because the story is a flashback. Avoid the amnesia cliché (and "it was all a dream").
15. Elements: level name; file name; time of day; story; progression focus; estimated play time; color scheme; enemies/bosses; mechanics; hazards; power-ups; new abilities/weapons/gear; treasure; bonus material; music. Warning signs: clumping, samey-ness, repeated time of day or colors, repeated music, economy too tight or too loose, mechanics introduced without the tools to beat them, getting "everything" too late. Numbers: everything unlocked by about 75% of the game; 2–3 new mechanics, enemies and rewards per level.
</details>

---

## 🎯 Side quests (5–15 min each)
1. **🌶️ Recipe card (10 min):** Write your own analogy for making games (not chili, not fishing) with at least five mapped steps, including crunch and polish.
2. **🏷️ USP detox (10 min):** Open the store page of a top-grossing F2P game. Rewrite its screenshot captions as 5 USPs. Delete any that are "amazing graphics"-type filler, and note which ones you could show in a 15-second ad.
3. **🔤 Font genre quiz (5 min):** Mock up the same fake title ("Gem Kingdom") in three fonts that signal three different genres. Ask a friend to guess each genre.
4. **🤖 Clockwork undead drill (10 min):** Take three vague words from a doc you've written or seen ("reward," "enemy," "event") and replace each with a specific, vivid term or definition that nobody could misread.
5. **🎯 Rating detective (10 min):** For one F2P game, find its rating on Google Play and on the App Store. What descriptors are listed (in-app purchases, random items, user interaction)? Why do you think it got that tier?
6. **3️⃣ Rule of Threes rewrite (5 min):** Take any list of five or more examples you've written and cut it to the best three: one that sets the idea, one that contrasts, one that rounds it out.
7. **🧱 Mini beat chart diff (15 min):** Make two columns for levels 1 and 2 of any mobile game you play (goal, new mechanic, new blocker, booster, reward, theme). Mark what's new in level 2. Clumping or samey-ness?

---

## ⚔️ Main quest (homework)
### Quest A: The F2P One-Sheet + Feature One-Pager (design-test simulation)
Pick a real F2P game you know well. Write:
1. A **one-page F2P One-Sheet** for it (all 12 fields from §13.8), as if you were pitching it before it existed.
2. A **feature one-pager** (§13.2) for a **new LiveOps event** for that game, including a mini reward table and a three-step player flow diagram.

**✅ Done when:**
- Each document is **exactly one page** (export to PDF to check).
- Comps follow the **Rule of Threes** and are all **successful** games.
- There are **3–5 USPs**, each showable in a 15-second ad, and none are filler.
- The feature one-pager has a **primary KPI and two guardrails**, a **target segment**, a **rewards/economy line**, an **ethics check**, and **at least two edge cases**.
- You list the **age-rating impact** (does the event add random items, chat or gambling-like mechanics?).
- Bonus: post it publicly (LinkedIn, X, a portfolio site, a design Discord) with "Day N of learning F2P design," and ask for one piece of feedback.

### Quest B: The F2P beat chart
Build a **20-level progression sheet** for a hypothetical puzzle game (or for *Simmer Down!* from §13.8) in Google Sheets: one row per level with goal type, moves, new mechanic/blocker, booster unlocked, difficulty tier, reward, theme and music track.

**✅ Done when:**
- No level introduces **more than one** new blocker (except level 1); about **2–3 new things per chapter of five levels**.
- Goal types and themes **alternate** (no more than three identical goal types in a row).
- There's a **difficulty sawtooth** (marked hard levels after easy runs).
- Each new blocker arrives **with its counter** (a booster or tutorial).
- A **coin column** shows earnings vs a booster price: the player can afford a booster about every 3–5 levels.
- You write three sentences on what you'd change after seeing win-rate data.

---

## 🔬 Play Lab
1. **Royal Match (or Royal Kingdom), 10 min:** Play the earliest levels (or watch a fresh-account playthrough). **Look for:** when each new blocker or booster appears, and whether it comes with a tutorial or a free sample. **Question:** Does the game follow Rogers' "2–3 new things per level" and "introduce with the counter" rules, or does it go even slower? Why might mobile go slower?
2. **Brawl Stars or Clash Royale, 10 min:** Start a new account or look at the home screen of a low-level account. **Look for:** features that are visible but locked ("unlocks at…"). **Question:** Which of Rogers' five progression starts is this? What does showing locked features do for motivation?
3. **Monopoly GO! (or any event-heavy casual game), 10 min:** Open the events area and note every event running right now, with its timer and reward. **Look for:** overlap, themes and reward types. **Question:** Sketch a one-week LiveOps beat chart from what you see. Is there clumping or samey-ness? How do they keep it from feeling repetitive?
4. **Any top-10 F2P game's store page, 10 min:** Read the age rating, descriptors, screenshots and first lines of the description. **Question:** What are its "five USPs"? Which comps would you put on its one-sheet, and what rating did it design toward?

---

## 🗣️ Feynman check
**Explain to a producer in 60 seconds:** "Why should we write a one-page feature brief and a short spec, plus a beat chart, before building our next LiveOps event, when nobody reads design docs anyway?" (Hint: the chili recipe, your own memory, two audiences, catching clumping early, everything is liquid, and the spec as a launching pad.)

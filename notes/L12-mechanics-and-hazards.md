# ⚙️ Level 12 — The Nuts and Bolts of Mechanics
> 📖 Book pp. 332–354 · ⏱️ ~55 min study · 📱 F2P relevance ★★★★★ — every match-3 blocker, merge-board obstacle, build timer and "watch an ad for a hint" button is a Level 12 decision.

## ⚡ TL;DR — the 30-second version
- A level with nothing in it is a hallway, not a game. You fill it with **four kinds of stuff: mechanics, hazards, props and puzzles.**
- **Hazards must look deadly, move predictably and kill fairly.** "No dropping rocks on the player's head": if the player dies, it should be *their* mistake, never the designer's whim. **Challenge builds skill; difficulty just punishes.**
- **Orchestrate like music:** move → one mechanic → second mechanic → combine → hazard → enemies → enemies + hazards → twist. A few mechanics, combined cleverly and rotated like baseball pitchers, beat a hundred mechanics used once.
- **Checkpoints are calm spots.** Face them forward, keep them away from danger, respawn on flat ground, save automatically.
- **A puzzle is a challenge with a right answer.** Show the goal first ("show 'em the door, then send 'em after the key"), keep pieces simple, give hot/cold feedback, offer paid-but-fair hints, and **no cat mustaches** (no absurd, overclever solutions).
- **Minigames/microgames:** simple controls, short sessions, gentle ramp, clear end. Whack-a-Mole is the last stop on the creativity train.

## 🗺️ Chapter map
- [ ] 1. Intro: the four types + mechanics — doors, switches, cranks, platforms
- [ ] 2. Holy Death Trap! — hazards, fairness, challenge vs difficulty
- [ ] 3. Time to Die — timing puzzles, props, crates, just-for-fun objects
- [ ] 4. The Music of Mechanics — flow, Peter and the Wolf, combos
- [ ] 5. A Nice Little Calm Spot — checkpoint rules
- [ ] 6. Riddle Me This — puzzle design + trivia formats
- [ ] 7. A Short Word on Minigames and Microgames — rules + Whack-a-Mole
- [ ] 8. Universal Truths & Clever Ideas

---

## 1. Intro — the four types, and mechanics themselves
**🧠 Big idea:** An empty level you just walk through is dead air (the book's footnote yells that walking is not gameplay). You need *stuff in the way*: good stuff, bad stuff, stuff that makes players grin and stuff that makes them groan. The epigraph sets the tone: a path with zero obstacles probably goes nowhere.

**📋 The details:**
- **The four types of level "stuff":**
  1. **Mechanics** — interactive objects that create gameplay.
  2. **Hazards** — mechanics that hurt you.
  3. **Props** — objects that sit there until you interact with them.
  4. **Puzzles** — challenges with a correct solution.
- **"MDS" — multiple definition syndrome.** The word *mechanics* means different things to different designers:
  - **Board-game designers:** mechanics = the *rules systems* you play with — turns, action points, resource management, bidding, dice rolling.
  - **Video-game designers (this chapter's meaning):** mechanics = **objects that create gameplay when the player interacts with them** — you jump on them, activate them with a button, or shove them around. They get interesting when combined with level layouts and enemies.
- **Common video-game mechanics:** opening/closing doors · pushable blocks · switches and levers · slippery floors · conveyor belts · moving platforms.

### 1a. Platforms — the "Platform Primer" (book figure, p. 333)
**Platforms** are the action designer's favorite toy. The book gives a hand-drawn, suitable-for-framing chart of 26 species of platform "in the wild". Dual-code this: picture a stick figure riding each one.

| Family | Platform types in the primer |
|---|---|
| **Static / basic** | floating |
| **Moves on a path** | moving (horizontal), moving (vertical), Ferris-wheel pattern (rides a circle), pendulum (swings on an arm), swinging (hangs from a rope), rolling (platform on wheels), extending/retracting (slides in and out of a wall) |
| **Changes shape or angle** | flips to create stairs, flips to reveal a hazard (spikes underneath), expanding/shrinking, tilting, tipping (tall post that topples left/right), weight balance (see-saw that tilts with your weight), growing (rises upward like a column) |
| **Breaks or disappears** | exploding (3-2-1 countdown), collapsing (crumbles under you), smashable (you break it from below), sinking (goes under in liquid) |
| **Reacts to you** | bouncy (springboard), switch-activated, returns when stepped off, rope bridge |
| **Carries danger with it** | scrolling hazard (fire slides along it toward you), "chasing" hazard (spikes pop up behind you as you move), moves into hazard (carries you toward fire) |

The lesson behind the joke: one "platform" idea can be twisted dozens of ways. Variety comes from **behavior**, not from new art.

### 1b. Doors
- **Doors look trivial and aren't.** Decide *how* the player opens them: normally, carefully, aggressively? **Match the character's personality:**
  - Kratos (God of War) kicks doors open.
  - "Soap" MacTavish (Call of Duty: Modern Warfare) blows them open with explosives.
  - Jill Valentine (Resident Evil) eases them open slowly and nervously.
  - Do you need to pick the lock first?
- **Which way does it open?** In, out, rising like a portcullis, lowering into the floor? Each creates different gameplay:
  - **Mappy** (Namco, 1983): swinging doors whack enemies and stun them briefly.
  - A **portcullis** that slams back down → a timed dash under it.
  - In survival horror, **slamming a door in a monster's face** buys time to reload or flee.
- **Door problems:** fast-opening doors can clip into the player or knock them back; players snag on doorframe geometry. It sounds tiny, but after a few hundred snags players get furious. That's why so many games make door-opening a **canned animation**.
  - **Early Resident Evil** used the slow door-opening animation to **hide level loading**, and it built dread at the same time. Two jobs, one door.
- **Rule:** know your answers to all of the above, then **keep the method of entry consistent for the whole game.**
- **Locked doors** push players onto another route, but it must be **instantly clear why** they can't pass: unbreakable-looking metal, a huge lock they lack the key for, or immovable debris. Unclear = frustration.
- Locked doors are the classic (some say overused) setup for **the quest for the key** (keys come back in Level 13 as rewards/access items).
- *Book figure:* four doors side by side: a normal door being pushed, a riveted vault door with a wheel, a glass sliding door with a keypad, and a spiked portcullis. Four doors, four kinds of entry.

### 1c. Switches, levers and cranks
- **Switches and levers** are an old standby. Some designers love them, some avoid them. Rogers admits a lone lever in a room makes his eyes roll; it screams "video game" (when did *you* last pull a lever?). They're still useful.
- **Keep them visually simple and grounded in reality**, because realistic-looking controls make cause and effect easy to read.
- **Switch/lever checklist:**
  1. **Make it visible:** add a glow or icon. Levers are skinny poles and easy to miss.
  2. **Show the effect:** use a camera cut, a voice line and/or a sound so the player sees *what* changed.
  3. **Show the new state:** change its color, position or shape.
     - **One-way switch** (works once) → play a big, meaty "clunk" sound to say *this is permanent*.
     - **Resetting switch** → play a ticking "timer" sound, and maybe show a **timer graphic**, so the player knows how long they have before it reverts.
- **Cranks** are switches that **take time** to operate:
  - Hold a button down, or
  - mash a button furiously, or
  - turn it into a **rhythm game**, syncing presses with the character's animation, or
  - make it a **combat puzzle** (Devil May Cry style): the crank takes X seconds; enemies spawn while you crank; a hit knocks you off and the crank **unwinds**. The player has to alternate between fighting and cranking.
- Need more ideas? The book has a big mechanics list in **Bonus Level 6**.

**🎮 Book examples:** God of War (Kratos kicks doors), Modern Warfare ("Soap" breaches with explosives), Resident Evil (Jill's careful doors; door animations hide loading), Mappy (doors as weapons), Devil May Cry (crank under attack).

**📱 F2P mobile translation:**
- **Match-3 has its own "Platform Primer":** the blockers. A typical match-3 has a catalog of obstacle types that behave differently from each other: **layered** blockers that take several hits, blockers that **spread** if you ignore them (Candy Crush's chocolate), blockers that **lock** a piece in place, **collect-down** items you must drop to the bottom, **conveyor belts** and **portals** that move pieces around (both appear in Candy Crush Saga), and so on. As with platforms, the variety is in the behavior, not the skin.
- **Merge games** (Merge Mansion, Travel Town) use board mechanics too: **generators** you tap to produce items, locked or covered cells you free by merging next to them, and storage limits.
- **Idle games:** the "mechanic" is the tap-and-upgrade machine itself, plus anything that changes its rhythm (boost buttons, timed multipliers).
- **Doors = gates.** In F2P, "locked doors" are level gates, star gates, and "reach level 10 to unlock" messages. Rogers' rule still holds: **make it obvious why it's locked and what opens it.** A greyed-out feature icon with a "Unlocks at Level 12" label is a locked door done right.
- **Resetting switch + timer graphic = every F2P timer UI.** A countdown ring on a boost, a "2× coins: 04:59" badge, a shop refresh clock. Rogers' rule (audio-visual cue + visible remaining time) is basic F2P UX.
- **Canned door animation hiding loading = the F2P "travel" transition.** Many mobile games use a stylized map zoom or cloud wipe to hide asset loading between the meta and the level.

**🪝 Make it stick:** *"Doors, levers, cranks: the three ways a level says 'not yet'."* Picture Kratos, Soap and Jill all arriving at the same door: one kicks it, one blows it up, one opens it a millimetre at a time. Same door, three personalities.

> ⚠️ **2010 → 2026:** Rogers' examples are 3D console doors and levers. On mobile, physical doors are rare, but **gating** (doors), **state changes** (switches) and **progress-over-time actions** (cranks ≈ tap-and-hold or charge-up actions) are everywhere. The principle that survives: *every interactive object must clearly show (1) that it's interactive, (2) what it did, (3) its current state.*

---

## 2. Holy Death Trap! — hazards
**🧠 Big idea:** **Hazards** are the mechanic's evil little brother: they look and act like mechanics, but they hurt. They differ from **enemies** by lacking intelligence and/or mobility, so **hazards always follow predictable patterns and move in limited ways.**

**📋 The details:**
- **Classic hazards:** spike pits · smashing blocks · flame jets · exploding barrels · laser-guided missile turrets. *(Book figure: a stick figure facing a spike pit, a crushing block, a flame jet, a TNT barrel and a ceiling turret, all in one corridor.)*
- **Rule #1: hazards must LOOK dangerous.** Spiky, flaming, icy, sparking, poisonous; slap a skull on it if you must.
- **Theme your hazards to the level.** Rogers' Maximo: Ghosts to Glory dungeon level had:
  - prisoners' hands grabbing up through floor grates,
  - an axe-swinging suit of armor,
  - spinning spiked iron maidens,
  - a toxic sewer with floating coffins as platforms.
- **Borrow from real-world danger** (cacti, razor wire) and use every channel: **shape, color, sound effects, particle effects.** Touching it should obviously mean pain.
- **Anecdote 1, the bee stripes:** Rogers wanted a hazard colored **red** (widely read as "danger" across cultures). The artist wanted yellow-and-black stripes. Rogers assumed she meant industrial safety striping, but her reason was that bees are striped and bees are dangerous. *(Two facepalm drawings.)* The hazard ended up red. **Lesson:** use the danger signal your audience already reads, and don't get clever with it.
- **Anecdote 2, the boat:** A level began with a ship sailing away; the player had to sprint to catch it. Rogers pointed out that players usually stop to look around at the start of a level, so they'd miss the boat. The designer's fix: drop a big rock on the player's head so they die and restart. The level was cut. That gave Rogers his **very important thing:**
  - **NO DROPPING ROCKS ON THE PLAYER'S HEAD** (literally *and* figuratively).
- **Instant-death hazards are cheap and mean.** If a hazard kills the player, it should be because they **weren't paying attention or mistimed it**, so they know it was *their* fault, not a designer's decree. **Death is a terrible teacher;** it just makes people frustrated and sad.
- **The balancing secret:**

| | **Difficulty** | **Challenge** |
|---|---|---|
| Promotes | pain and loss | skill and improvement |
| The game's attitude | does whatever it can to punish you | puts obstacles in front of you that skill and knowledge can beat |
| Who finishes | a proud minority | most players |
| Rogers' verdict | impressive to finish, but niche | **far more rewarding: aim here** |

- **Famously difficult games** (fans love them; few finish them): Battletoads, Defender, Ghosts 'n Goblins, Devil May Cry 3, Shinobi, Ikaruga, Contra, Ninja Gaiden, Demon's Souls. **If you want players to finish your game, make it challenging, not difficult.**
- **The "fun curve":** Rogers' early name for the point where a game stops being challenging and tips into difficult and frustrating. The goal: **never go over the fun curve.** He later learned psychology already had a name for this: **flow** (section 4).
- **The fix = ramping gameplay:** build each system on the previous one. Teach a move, let the player master it against mechanics and enemies, then **combine elements and intensify gently** as the game goes on.

**🎮 Book examples:** Maximo dungeon hazards (themed traps); the red-vs-bee-stripes story; the boat level that would have needed a rock; the "too difficult" hall of fame (Demon's Souls → Battletoads).

**📱 F2P mobile translation:**
- **F2P lives on completion and retention, so "challenging, not difficult" is a business rule, not just a craft rule.** Every unfair death is a churn risk. In a game you only make money from if players come back tomorrow, a rage-quit costs real money.
- **Rocks on the head in F2P look like:** a match-3 board that's unwinnable no matter how you play, a runner obstacle you can't see in time, a PvP matchup you can't possibly win, a "surprise" mechanic that fails the level with no warning. Players can tell "I messed up" apart from "the game screwed me".
- **⚖️ The ethics line:** some games are tempted to tune levels so players lose *by one move* and get offered +5 moves for hard currency. A near-miss that comes from real skill is a challenge. A near-miss **engineered** to sell continues is a rock on the head with a price tag. Players notice, reviews notice, and some regulators are watching too.
- **Hard levels in match-3:** many match-3 games openly label spikes as "Hard" or "Super Hard" levels. That's the honest version: you warn the player, raise the reward, and follow up with easier "relief" levels (a **sawtooth difficulty curve**, standard live-game practice beyond the book).
- **Hazard readability on a 6-inch screen:** mobile hazards need *even louder* signals than console ones: high-contrast red, a skull or "!" icon, a little wind-up animation. A countdown bomb in match-3 shows its number right on the tile.

**🪝 Make it stick:** Imagine your game is a party host. **Challenge** says "bet you can't beat me at this!" **Difficulty** spikes your drink. The rock-on-the-head rule: *if your players die, they should blame their thumbs, not your name in the credits.*

> ⚠️ **2010 → 2026:** The "difficult" list now includes a huge commercial genre (Souls-likes), so "difficult = niche" is less true in premium. In **F2P mobile**, Rogers' stance still holds almost perfectly: mass-market audiences, short sessions and retention metrics all reward *challenge with fairness*.

---

## 3. Time to Die — timing puzzles, props, crates and just-for-fun objects
**🧠 Big idea:** A **timing puzzle** is a mechanic (usually a hazard) that *moves*. It creates tension (wait... wait... NOW!) and anticipation (jumping onto a moving platform). It only feels fair if the player can **read the pattern**.

**📋 The details:**
- **Uses:** tense dashes past whirling blades or smashing pylons; anticipation while waiting to hop onto a moving platform.
- *Footnote worth keeping:* Rogers still tenses up remembering the spinning paddles in Dragon's Lair's Spectre chamber, which might be the **first video-game timing puzzle**.
- **The 4 rules of a timing puzzle:**
  1. **A readable movement pattern:** back-and-forth, up-and-down, zigzag, circle, figure eight. Any shape works as long as the player can track it.
  2. **Predictable timing.** Random timing is unfair, because the player has to learn the pattern to succeed.
  3. **A tight but possible window.** Build in **leeway at both the opening and the closing edge** of the safe window.
  4. **"Tells" in the world** that show where it's safe and where you'll get hurt: bloodstains, grooves in the floor, light and shadow, sound effects, particles, geometry, decoration. Players notice these and use them as markers.
- *Book figure (dual-code it!):* three panels of a stick figure next to a floor flame jet: a tiny flicker ("wait for it…"), a full roaring blast ("wait for it…"), then a wisp of smoke ("…go for it!"). **The flicker is the tell; the smoke is the safe window.**

### 3a. Props
- **Props** are mechanics after a huge Thanksgiving dinner: they won't move unless someone makes them get off the couch. Designers and artists place them so the level **feels like a real place**. Sometimes they work as **barricades/obstacles** to dodge, jump over or **take cover** behind.
- **Typical props:** desks and chairs · parked cars · barricades · statues and gravestones · trees and shrubs · fences and walls · potted plants and water coolers.
- **Brainstorming props = free association.** Start with the obvious items for the setting, then branch out. Rogers' practice exercise, in rising difficulty:
  - **Easy:** a Wild West town street.
  - **Medium:** a supervillain's lair.
  - **Hard:** a Chinese clothing factory.
- **Pro tip:** when your brainstorm turns silly or dirty, you've hit the bottom of the well, so stop. Let it rest overnight or a day or two, or take a research break (books, games, movies, the web).
- **Let players interact with props.** Start with **natural reactions**:
  - shoot a water cooler → watery explosion,
  - knock over light objects, shove heavy ones,
  - let players examine interesting statues, bookshelves, paintings up close.
- **Breakable props can open new areas or drop treasure.** In the **Lego games** (Lego Star Wars, Lego Batman) almost everything smashes into **studs** (the game's money). Smashing junk for loot is deeply satisfying, **but don't overdo it** or your carefully designed gameplay becomes a mindless smash-fest.

### 3b. The crate problem
- **Crates** break open for goodies and double as platforms, but they're an industry joke: visually boring and a **lazy fallback** for teams that won't think up something better to break.
- **"Start to crate":** the gaming site Old Man Murray had a satirical review metric measuring how long a game takes before you meet your first crate. It's a joke, but Rogers finds it a decent **creativity gauge**.
- Rogers lists **50 breakable alternatives** so you never need a crate again. Representative picks from his list: barrel, treasure chest, vase, mailbox, fish tank, hay bale, pile of skulls, tiki idol, fortune-telling machine, ATM, safe, coffin, arcade cabinet, vending machine, fire hydrant, slot machine, copy machine… and a toilet.
- **Your own F2P-flavored alternatives** (not from the book): piñata, gift box with a bow, gumball machine, mystery egg, claw-machine capsule, overstuffed mailbag, treasure-filled snow globe, cracked geode, beehive dripping honey-coins, birthday cake that explodes into confetti.

### 3c. The "just for fun" mechanic
- The **rarest** mechanic is the one that's **purely for fun**: a player piano that tinkles a tune as you approach, a toilet that flushes when you interact with it. It has no gameplay purpose. **Include some anyway.** They make a world feel alive and reward curiosity.

**🎮 Book examples:** Dragon's Lair (first timing puzzle?), Lego Star Wars/Batman (break everything → studs), Old Man Murray's "start to crate" metric.

**📱 F2P mobile translation:**
- **Two completely different "timers" live in F2P. Don't confuse them:**

| | **Timer as a hazard (in-level)** | **Timer as a meta mechanic (out-of-level)** |
|---|---|---|
| Examples | Countdown bombs on match-3 tiles; timed levels; a runner's obstacle rhythm; a resetting switch | Build/upgrade timers (Clash of Clans), crop/production timers (Hay Day, Township), lives/energy refills (Candy Crush lives), chest unlock timers (Clash Royale's original chest system), event countdowns |
| Job | Create tension and skill expression *inside* a session | **Pace sessions**, create **appointments** ("come back in 2 h"), gate progress, and create a **monetizable wait** (speed up with gems) |
| Rogers' rules that apply | Readable pattern, predictable timing, fair window, tells | Show the remaining time clearly (his resetting-switch timer graphic); be consistent; never surprise the player |
| Risk | Feels unfair if random or too tight | Feels like a paywall if waits are long and the "skip" offer is everywhere |

- **The F2P energy/lives system is a "timer hazard" on your *session*:** it stops play after a few failures. Good versions frame it as "take a breather, come back"; bad versions feel like a fine for losing. **⚖️ Ethics line:** a timer that paces play is design; a timer tuned so the wait is painful enough to make people pay is a pressure tactic. Ask yourself whether the timer would still exist if nobody could pay to skip it.
- **Tells on mobile:** match-3 bombs show their remaining moves on the tile and shake on the last one; runners flash obstacles before they arrive; survivor-likes draw a red warning zone before a boss slam. These are Rogers' "bloodstains and grooves" for touchscreens.
- **Props = decorations.** In Hay Day, Township and Clash of Clans, decorations are mostly "just for fun" props that make your space feel like yours, and they're a big **soft-currency sink** and vanity purchase. Rogers' "just for fun" mechanic became a whole F2P product category.
- **Breakables = the reward pop.** Smashing a blocker in match-3 that bursts into coins or confetti is the Lego "studs" feeling. Same warning: if *everything* explodes in rewards, nothing feels special.
- **"Start to chest":** a fun F2P twist on "start to crate". How many seconds after install until the game throws a chest/reward box at you? (Spoiler: in many games, it's under a minute, which is either great onboarding or reward inflation.)

**🪝 Make it stick:** **"Wait for it… wait for it… go for it!"** The flicker is the warning, the blast is the danger, the smoke is your green light. And: *a crate is the "Lorem ipsum" of level design.*

> ⚠️ **2010 → 2026:** On mobile, "timer" mostly means *meta* timers, which Rogers doesn't discuss. His in-level timing rules transfer perfectly; for meta timers, the transferable principle is **readability and fairness**: show the clock, keep it consistent, never punish a player for something they couldn't see coming.

---

## 4. The Music of Mechanics — flow, orchestration, combos
**🧠 Big idea:** Placing mechanics, hazards and enemies is like **composing music**. Bring in "instruments" one at a time, let each be learned, then layer and combine them toward a climax. Done well, it produces **flow**.

**📋 The details:**
- **Chili metaphor:** hazards are the **beans** in the chili of game design. They're filler when there isn't enough meat (enemies) to go around, and (yes, Rogers went there) they help you make "music".
- **Flow** (psychologist Mihály Csíkszentmihályi; Rogers' pronunciation footnote says roughly "cheek-sent-me-high-ee"): a sweet spot **between boredom and too-much-difficulty** where players become absorbed, energized, focused and **lose track of time**. To get there you have to **orchestrate** your elements. A natural rhythm of moving and acting emerges as the player crosses the level; that rhythm *is* the flow.
- **Flow is the stated goal of good level design.** Reaching it should feel like making music: you are not just placing objects, you are composing the cadence of the player's moves. 📱 In F2P the "level" is often one board or one run lasting a couple of minutes, so that cadence has to build fast.
- *Footnote worth keeping:* the ancient Greeks linked music and math. **Vib Ribbon** (SCE, 1999) generated obstacles from the beats of any music CD you inserted. The same orchestration can be thought of **mathematically**, as a formula of combined elements, and Rogers has heard that **Mark Cerny** (Marble Madness, Crash Bandicoot) designs this way.
- **The Peter and the Wolf analogy** (Prokofiev's piece where each character = an instrument):

| Instrument (character) | What it does in the music | Game equivalent |
|---|---|---|
| Strings (Peter) | walking-through-the-forest theme | **basic movement**: walking, driving, controlling the character |
| Flute (bird) | a higher theme intertwines, adding excitement | **treasure and collectibles** that keep players motivated |
| Oboe (duck) | music speeds up and grows more complex | **more complex movement and mechanics** |
| Clarinet (cat) | lower theme; the cat chases the bird, adding conflict | **hazards** |
| Wolf's theme | danger arrives | **enemies** |
| Drums (hunters) | crashing climax; the rescue | the big finish / climax |

- **Instruments stack, and the wolf enters last.** The wolf's menacing theme only arrives once all the other voices are already playing, so enemies should appear *after* movement, collectibles, mechanics and hazards are familiar. From there the music keeps **intensifying**: the wolf swallows the duck, the bird attacks the wolf, the heroes are threatened and fight back, until the hunters' crashing drums rescue everyone. In level terms: a rising fight that ends in a big payoff, not one flat wall of danger. 📱 *A match-3 "boss" level works the same way: every earlier blocker and booster is already in the player's hands when the wolf shows up.*

- **The 7-step orchestration recipe:**
  1. Start with **simple movement challenges**: walk, jump, collect goodies.
  2. **Add one mechanic.** Repeat it a couple of times so it sinks in.
  3. **Add a second mechanic**, let it be learned, then **combine it with the first**.
  4. **Add a hazard.** The player keeps doing normal things (traversal, collecting, using mechanics), now with danger in the mix.
  5. **Bring in enemies.** Give players room to learn how to fight them.
  6. **Combine enemies and hazards** for excitement.
  7. **Twist:** just as the player settles in, flip one of the elements on its head to keep them alert.
- *Book figure (dual-code it!):* a side-scrolling strip numbered ①–⑦: ① a stick figure running over simple steps; ② flame jets; ③ spike pits; ④ flames and spikes together; ⑤ a skeleton enemy alone; ⑥ skeleton plus flames; ⑦ skeleton next to an **upside-down flame shooting from the ceiling** right before the EXIT door: the twist.

```
①walk  ②🔥  ③▲▲  ④🔥+▲▲  ⑤💀  ⑥💀+🔥  ⑦💀+🔥(upside down!) → EXIT
learn   mech1 mech2 combine  enemy  enemy+hazard  TWIST
```

- **Enemies + hazards go together like peanut butter and chocolate.** Design them to **complement** each other (footnote joke: easy, since form follows function, right?) and they become versatile building blocks. Decide the **order** of activities and set up scenarios for players to figure out.
- **Three combo recipes from the book (each drawn):**
  1. **Pit + waiting enemy:** jump a hazardous pit with an enemy on the far side. Place the enemy **far enough back that it doesn't engage until the player has landed safely**. Raise the intensity with a timing element: the pit opens and closes, a pendulum swings, fire spurts up, a block slides down.
  2. **Shooter + moving hazard:** an enemy fires projectiles through the path of a moving obstacle, timed so shots pass through when the gap opens. Solutions: **shoot the enemy first**, or **use the moving obstacle as cover** to get close.
  3. **Saw-blade arena:** a whirling saw blade that cuts the player in half, plus multiple enemies. The player has to dance between fighting and dodging. **The blade should also kill enemies**, so the player feels clever luring them into it. Give players chances to **turn the death traps against their makers.** Villains deserve their comeuppance.
- **A handful of mechanics is enough.** Fire pit, moving obstacle, whirling blade: those three alone yield tons of combinations. A well-designed game uses a few mechanics; **the magic is in the combinations.** Study **Treasure** (Gunstar Heroes, Dynamite Headdy, Ikaruga) and **Naughty Dog** (Crash Bandicoot, Uncharted).
- **Overuse kills a mechanic.** Watch the context. A good mechanic is like a **baseball pitcher**: **rotate it in and out** so it stays fresh and effective.

**🎮 Book examples:** Peter and the Wolf (orchestration), Vib Ribbon (music → obstacles), Mark Cerny (math-style design), Treasure and Naughty Dog games (few mechanics, many combinations).

**📱 F2P mobile translation:**
- **This is literally how match-3 level progression is built.** A new blocker gets a showcase level where it appears almost alone (step 2), shows up a few more times, then combines with older blockers (step 3). Special pieces and boosters add excitement (flute). Spreading or countdown blockers act as the hazard (clarinet), and a "boss" or hard level is the wolf. Each new **episode/area** typically introduces one new element. Now you know why.
- **Rotation like pitchers = blocker rotation.** Good match-3 games don't put every blocker in every level; they rotate a subset so each level has its own personality. Same for runners: obstacle sets rotate by zone.
- **Combos → enemies + hazards in action F2P:** in survivor-likes (Survivor.io) and Archero-style games, room hazards (spikes, lasers) combine with enemy patterns, and the best ones let you **use the hazard against enemies** (the saw-blade lesson).
- **Flow at the session level:** F2P sessions are short (often a few minutes), so the "song" is often **one level or one run**. A good level has a mini-arc: easy start → mechanic → pressure → climax → satisfying finish with fanfare (→ L13).
- **Sawtooth difficulty** (beyond the book): live match-3 games alternate harder levels with easier ones so players stay near the flow channel instead of grinding endlessly against a wall.

**🪝 Make it stick:** **"Strings, flute, oboe, clarinet, WOLF, drums"** = *move, collect, mechanics, hazards, enemies, climax.* And: *rotate mechanics like pitchers. Even your ace gets shelled if he pitches every inning.*

> ⚠️ **2010 → 2026:** Rogers frames this as single-level pacing in a console game. In F2P, the same orchestration runs at **three scales**: inside a level, across a sequence of levels (episodes), and across LiveOps seasons (new mechanics introduced via events). The principle is unchanged: one new thing at a time, then combine.

---

## 5. A Nice Little Calm Spot — checkpoints
**🧠 Big idea:** After the hazards, a friendly mechanic: **checkpoints**, pre-set spots where the player can **save progress, take a breather, or rethink their gear and route.**

**📋 The details:**
- Checkpoints can be **visible** or **invisible**. Pick the one that suits your game.

| | **Visible checkpoint** | **Invisible checkpoint** |
|---|---|---|
| Pros | Gives the player a **target**; a **sense of security** when triggered; a chance for a fun or exciting **activation animation**; **accomplishment** every time | **Doesn't break immersion** |
| Cons | Can look "**gamey**"; may need explaining (how do I activate it?) | Player **isn't sure when one triggered or where they'll respawn**, which is frustrating ("how far back will I go?") |

- **Checkpoint rules of thumb (either style):**
  1. **Face the checkpoint in the direction of travel**, so players don't respawn turned around or have to swing the camera.
  2. **Never place one next to a hazard or inside an enemy's detection zone.** Taking damage as you (re)spawn is cheap.
  3. **Respawn on the ground**, not in the air, so there's no waiting for the character to land. **Avoid long respawn animations** for the same reason.
  4. **Flat, even ground**, to avoid collision glitches on respawn.
  5. **Save the game data whenever a checkpoint triggers.** Never make the player go into a menu to save.
- *Book figure:* a sweaty stick figure resting on a crate (ha) with his sword planted beside him: the calm spot.

**📱 F2P mobile translation:**
- **On mobile, the whole app is a checkpoint machine.** Players get interrupted constantly (calls, notifications, the bus stop). **Save on every meaningful action and resume exactly where they left off,** including mid-level when feasible. Losing progress because the OS killed your app is the 2026 version of "respawned next to a spike pit."
- **Level-based F2P structure is checkpointing by design:** every cleared match-3 level is a permanent checkpoint, and the map shows exactly where you are (a *visible* checkpoint with a satisfying "level complete" animation).
- **The paid checkpoint:** runners and puzzle games often offer a **continue** ("Save me", "+5 moves") at the point of failure. Rogers' respawn rules apply directly: the continue should drop you somewhere *safe* (not straight into the obstacle that killed you), with no long animation.
- **⚖️ Ethics line:** a continue is a fair offer when the player made a real mistake and wants to keep going. It turns predatory when the level is tuned so most players *need* it.
- **Cloud save + account linking** is the modern "save data retained": players switching phones expect their progress to follow them.

**🪝 Make it stick:** Checkpoint rules = **"FACE · SAFE · GROUND · FLAT · SAVED."** Picture a hotel concierge: faces you toward the exit, no tigers in the lobby, puts you on the floor (not the ceiling), on a level rug, and already wrote your name in the book.

---

## 6. Riddle Me This — puzzles
**🧠 Big idea:** Puzzles are tricky: hard to design, often needing unique assets, and hard even to *define*. Rogers' own definition centers on **challenge** rather than "fun": "A puzzle is a challenge that has a right answer."

**📋 The details:**

**Defining puzzles**
- **Scott Kim** (a prolific puzzle designer) defines a puzzle as something **fun** that has a **right answer**.
- Rogers' objection: **"fun" is subjective** (like "funny" or "sexy"). He personally finds many video-game puzzles *not* fun, and a puzzle you can't crack is worse than a hard boss, because you can **brute-force a boss** but **not a puzzle**.
- **Rogers' definition swaps "fun" for "challenge".** Challenging the player is a puzzle's job (and the whole game's job). The puzzle's challenge is simply: **"solve me."**

**Show the goal first**
- The player must know **what reward solving the puzzle gives** and **what they're trying to do**: open a door, complete a picture, translate a message.
- Rogers' **very important thing: SHOW 'EM THE DOOR AND THEN SEND 'EM AFTER THE KEY.** (Metaphorically: it needn't be a door or a key.)

**Puzzle pieces**
- Keep pieces **simple and modular**. A few pieces give many combinations.
- Use **as few moving parts as possible** to avoid confusion.
- When a piece is adjusted, the player must **see that it changed**, and there must be a **clear way to reset it** to its original position. It's easy to lose track of progress.
- **Uniform pieces** unless irregularity *is* the puzzle. Consistency helps players understand how things fit together. **Let them think about the puzzle, not wrestle with the controls.**
- **One simple button press should produce a visible result.** It may not solve the puzzle, but the player should sense that repeating it gets them closer.

**Clear relationships and fair tools**
- Rogers "checks" a puzzle against **every ability he has, every item he carries, and every object in the room**, thinking about what each piece *is* and how it relates to the others and to the whole. **Unclear relationships = stumped players.**
- **Avoid cultural references and arcane or weird uses of objects.**
- **Example: Resident Evil 2's chess-piece puzzle.** To open a door in a *police station*, you place chess pieces in a control panel. Why are there chess pieces in a police station, let alone ones that run a control panel? If it had been, say, **ID cards of dead officers** collected around the station, it would have made sense. **Tie puzzles into the story** and they stop feeling abstract.
- **Keep the tools nearby.** Making players roam the whole level (or world) testing random items is unfair.
- **Layout is a clue.** A **board-style layout** lets players visualize moves and patterns before acting. If pieces move in a set way, players can predict the consequences. As with timing puzzles, **movement and layout reveal patterns.**

**Gating and feedback**
- Puzzles are **gating mechanisms**. If you have many, provide **multiple paths of progression** so a stuck player can do something else and come back later, maybe with the answer figured out.
- **Hot/cold feedback:** like the kids' hide-and-seek game where someone says "warmer… colder", tell players whether they're getting close.
  - Make hints **relevant to the puzzle**. Ask: "What would *I* want to know right now?"
  - **Remind them of the goal.**
  - Use **camera cuts** to show cause and effect.
  - Use **voice and sound** for **positive reinforcement**.
- **The four ways to solve a puzzle: reason, knowledge, skill, or dumb luck.** The best puzzles allow all four in some capacity. You don't *want* players stumbling onto the answer, but a stumped player should at least be *able* to.

**The A-Ha! moment and failing gracefully**
- Deliver the **"A-Ha!" moment** (not the band, despite the joke about their catchy 80s single): the instant the player understands how it fits together. After that, **executing the solution should be quick**; it's just grunt work.
- **If a player is stuck, keep the stakes low.** Let the puzzle get resolved regardless: **offer hints, or even the full solution.**
  - Getting the answer **should carry a small price**, such as a bonus or some currency. Example: the **Professor Layton** games' **diminishing rewards** (fewer points the more hints/wrong guesses you use).
  - **Never make the penalty severe**, such as losing a life.
  - **Buying a way past the puzzle must be the player's choice**: they decide to cover the cost and move on.
  - **Moving forward is something the player is owed, not a prize they earn.**

**No cat mustaches**
- Players are usually **smarter than you think**, but don't use cryptic or nonsensical solutions.
- **The cat-hair mustache anecdote:** in one adventure game, to disguise yourself as an NPC you had to put tape over a hole in a fence a cat walked through, collect the cat hair stuck to the tape, and make a fake mustache from it… and **the NPC you were impersonating didn't even have a mustache.**
- Rogers' puzzle motto: **NO CAT MUSTACHES.** Don't be so clever. If your solution is a **Rube Goldberg machine** (footnote: Goldberg was a cartoonist who drew absurdly complex contraptions for simple tasks; the board game Mouse Trap is loosely inspired by them), you've **overthought it. Simplify.**
- The conflict is **player vs. puzzle**, **not designer vs. player.** Check your ego at the door.

**Puzzle-based games (not just puzzles inside story games)**
- **Dexterity-based action puzzles:** Bejeweled, Puzzle Quest.
- **Observation puzzles (hidden object):** the Mystery Case Files games.
- **Pure puzzles:** Sudoku, crosswords.
- **Knowledge/trivia puzzles:** Buzz!, You Don't Know Jack.

**Trivia & knowledge puzzle rules**
- **Don't assume everyone knows what you know.**
- Keep questions **short and clear**.
- **Research your audience:** what would *they* want to answer?
- A **wide difficulty range** from simple to obscure, but **mostly simple**.
- **Write LOTS of questions.** A knowledge game stops being fun the moment you've seen every question.

**Answer formats**

| Format | Rules |
|---|---|
| **Multiple choice** | At least **three** options. Write **"close" wrong answers** that resemble or could be confused with the right one. **Change it up** sometimes by asking the player to pick the *wrong* answer among right ones. |
| **Find the object/image** | Player hunts for the answer among images or objects. **Not pixel-perfect**: leave generous space around the target so it can eventually be spotted and tapped. Vary **orientation, color and size** to keep the hunt interesting. |
| **Fill in the answer** | Needs keyboard or stylus input. Make the **parser flexible**: synonyms, slang, regional terms. (Scribblenauts on DS recognized **22,802 words**.) If your vocabulary is smaller, **let players learn which words are available** so they don't waste guesses. |

**🎮 Book examples:** Resident Evil 2 (chess pieces = arbitrary), Professor Layton (diminishing rewards for hints), the cat-hair mustache adventure game (overclever), Bejeweled/Puzzle Quest, Mystery Case Files, Sudoku, Buzz!, You Don't Know Jack, Scribblenauts (huge parser).

**📱 F2P mobile translation:**
- **Puzzle design is the core of the biggest F2P genre.** Match-3 (Candy Crush, Royal Match), block puzzles (Block Blast!), Two Dots, Cut the Rope, hidden-object and word games are Rogers' "puzzle-based games" category, and his rules map straight on:
  - **Show the door first = the level goal screen.** Match-3 levels open with the objective ("collect 40 red", "clear all ice", "free the cats") before move one.
  - **Simple, modular, uniform pieces** = the tile grid. A board layout is a giant clue, exactly as Rogers says.
  - **One tap = visible result:** every swap animates; invalid moves bounce back.
  - **Hot/cold feedback:** idle hints (the board highlights a possible move after a few seconds), progress bars on goals, "almost there!" messages.
- **Paid hints = Professor Layton's model at scale.** Word and logic games sell or reward hints: watch a rewarded ad or spend coins for a hint. Rogers' rules make a great **ethical checklist**: the cost should be mild, the choice the player's, never a life-like loss. "Progression is a right, not a reward" is in direct **tension with F2P gates**. The fair compromise is that **skill or patience can always progress for free**; money only speeds it up.
- **Boosters as "dumb luck" insurance:** Rogers wants stumped players to have *some* path. In match-3, boosters and extra moves play that role, which is why their pricing and frequency are such sensitive design decisions (→ L13).
- **Multiple paths of progression:** a stuck match-3 player can switch to decorating, events, team chests, or side modes. That's Rogers' "come back later" advice applied to an F2P meta.
- **No cat mustaches on mobile:** mobile players give you seconds, not minutes. Puzzle logic must be readable at a glance. Hyper-casual puzzle ads famously show crystal-clear "pull the pin" logic, which is exactly why they convert.
- **Trivia/word games:** huge content needs (Rogers' "write lots of questions") are why word games ship thousands of levels and use daily puzzles. **Find-the-object** rules (tap-target generosity) matter even more with fat fingers on small screens: big hitboxes, forgiving taps.

**🪝 Make it stick:** **"Door first, then key. No cat mustaches."** Picture a detective gluing cat fur to his lip to impersonate a clean-shaven guard: that's what an overclever puzzle looks like to players. And the four solve-routes as a superhero team: **Reason, Knowledge, Skill and Luck** ("RKSL", say it as *"rascal"*).

> ⚠️ **2010 → 2026:** Rogers mostly means puzzles inside story/action games. In F2P mobile, puzzles **are** the game for a huge audience, and hint/skip systems are **monetized**. His "fine, not a life; the player's choice" stance is a solid ethical anchor for designing paid hints and boosters.

---

## 7. A Short Word on Minigames and Microgames
**🧠 Big idea:** A **minigame** is a small, simple game for **variety**, to **represent an activity**, or to **add value**. A **microgame** is a minigame that lasts **seconds**. Half its challenge is figuring out how to play it before time runs out (WarioWare is a whole compilation of these).

**📋 The details:**
- Many minigames are **based on or remix classic arcade/console games**.
- **Why developers love minigames:** quick to build and test, easy to play, and they work as **metaphors for complex activities**. Rogers believes **any activity** can become a minigame:
  - lockpicking: The Elder Scrolls IV: Oblivion (2006)
  - hacking electronics: Batman: Arkham Asylum (2009)
  - portrait painting: SpongeBob's Atlantis SquarePantis (2008)
  - tagging walls with graffiti: The Warriors (2005)
  - cooking dinner: Cooking Mama (2006)
  - serving dinner: Diner Dash (2003)
  - even sex: God of War (2005)
- **Minigame design rules:**
  1. **Simple controls.** Minigames imply easy-to-learn play.
  2. **Short sessions:** no longer than **5–10 minutes**; microgames last only **seconds**.
  3. **Decide how progression works**: designed or random? **Ramp difficulty gently.** Minigames are for variety, not torture.
  4. **Add something new with each progression step.** A step can be a *group* of levels. It can be **major** (a new weapon or enemy) or **minor** (a new enemy movement pattern, a bonus modifier). Even new background art, a new sound effect or a new song fights staleness.
  5. **Limit controls to a few buttons**, **one action per button or stick**.
  6. **Allow customization if you can.** Upgrade Complete (Kongregate, 2009), a web game, lets you upgrade *everything*: your ship, the backgrounds, even the copyright screen.
  7. **Decide how it ends.** Make the **victory condition clear**. Some games run "forever", or until a kill screen.
- **Minigames can blend with the core game:** Henry Hatsworth in the Puzzling Adventure (platformer + puzzle) and Puzzle Quest (RPG + puzzle) fuse two styles. If you do this, give players time for a **"brain shift"**: a "Ready?" screen or a pause in the action so they can reorient.
- **Whack-a-Mole = the last stop on the designer's creativity train.** Use it only when every other idea is gone, because:
  1. it relies **only on reaction time**, with no thinking or decisions,
  2. it's **random**, so no strategy is possible,
  3. it's **very repetitive**; the only variety is mole speed,
  4. it needs **almost no input**: one motion, press or click,
  5. it's **endless** unless the designer forces an end, and players usually quit from boredom, not victory.

**🎮 Book examples:** WarioWare (microgames), Oblivion lockpicking, Arkham Asylum hacking, The Warriors tagging, Cooking Mama, Diner Dash, Upgrade Complete (customize everything), Henry Hatsworth & Puzzle Quest (hybrids).

**📱 F2P mobile translation:**
- **Minigames as ad creatives:** much of mobile user acquisition runs on short playable or video ads built around a **minigame**: pull-the-pin rescues, "pick the right path" choices, quick merge or sorting puzzles. Rogers' rules (simple controls, seconds-long, instantly clear goal) describe a high-converting creative almost exactly.
  - **⚖️ Ethics/compliance line:** advertising a minigame that barely exists in the actual game is misleading. Regulators such as the UK's ASA have ruled against mobile game ads that didn't represent real gameplay, and several big puzzle titles have since added ad-style minigame levels into their games so the ads match the product.
- **Minigames as meta features / LiveOps:** event minigames (dice boards, digging, spinning wheels, mini-puzzles between levels) add variety, which is Rogers' "variety, not torture". Coin Master's slot machine and Monopoly GO!'s dice roll are minigame-like loops that **became the core**.
- **Hybrid core + meta:** Gardenscapes/Homescapes (match-3 + renovation) and RPG-puzzle hybrids (in the Puzzle Quest tradition) need Rogers' **"brain shift"** moment: a clear transition screen between "puzzle mode" and "meta mode".
- **Microgames → hyper-casual.** Many hyper-casual games (Helix Jump, Flappy Bird) are essentially one microgame stretched into a product: one-touch control, seconds-long attempts, instant restart. Rogers' Whack-a-Mole critique is the classic warning about that genre: **reaction-only + random + repetitive + endless = low long-term retention** unless you add decisions, progression and variety.
- **"Add something new each progression":** idle and hyper-casual games survive by drip-feeding new skins, backgrounds, music and modifiers, exactly Rogers' minor-progression list.

**🪝 Make it stick:** **Whack-a-Mole's five sins = "RRRIE": Reflex-only, Random, Repetitive, Input-minimal, Endless.** If your design checks all five, the mole is whacking *you*.

---

## 🏆 Universal Truths & Clever Ideas
1. **Design mechanics, hazards and props to work with your enemies and complement each other.** 📱 *So for F2P:* blockers, boosters and objectives should interlock; a new blocker should create new decisions alongside old ones.
2. **Good game design works like music: players can sense its rhythm.** 📱 Each level, each episode and each LiveOps season needs a build-up, a climax and a breather.
3. **Aim for challenging, not overly difficult, games.** 📱 Retention is a fairness metric. Hard levels: warn, reward, and follow with relief.
4. **No rocks on the player's head: be fair when you punish.** 📱 Never engineer failure to sell a continue.
5. **Be inventive: steer clear of tired standbys such as crates and Whack-a-Mole, unless nothing else works.** 📱 Check your "start to chest" time and your reaction-only loops.
6. **No cat mustaches: puzzles shouldn't be so cryptic that logic, knowledge or skill can't solve them.** 📱 Mobile players give you seconds; logic must read at a glance.
7. **A puzzle is a challenge with one right answer.** 📱 Every match-3 level is a puzzle; its "right answers" are many, but they must exist.
8. **Show them the door, then send them after the key.** 📱 Show the goal (and the reward) before play begins.
9. **Give players chances to catch their breath with plenty of checkpoints.** 📱 Save constantly; resume instantly; safe continues.
10. **Keep minigames and microgames simple and short.** 📱 This is also the formula for ad creatives and event minigames.

## 🧩 Connect the dots
- **→ L09 (level design):** Level 12 fills the layouts from Level 9 with stuff; orchestration = pacing.
- **→ L10 (combat) & L11 (enemies/bosses):** hazards are enemy partners ("PB & chocolate"); the saw blade that kills enemies too.
- **→ L13 (power-ups & rewards):** keys, treasure, boosters, and the "paid hint" economy pick up where puzzles leave off; L13 also continues the "love thy player" fairness theme (DDB, rubberbanding).
- **→ L08 (HUD/feedback):** timer graphics, state changes and tells are all feedback design.
- **→ Bonus Level 6:** the book's long list of mechanics ideas.
- **F2P concepts:** core loop (the puzzle/merge/idle mechanic), meta loop (decorations, events), **energy/lives & build timers** (session pacing), **FTUE** (one new mechanic at a time), **difficulty curve & retention** (challenge vs. difficulty), **monetization ethics** (continues, paid hints), **UA creatives** (minigames), **LiveOps** (rotating mechanics like pitchers).

## 🔁 Retrieval check (do it closed-book!)
1. Name the four types of level "stuff" Rogers lists.
2. What's the difference between how board-game designers and video-game designers use the word "mechanics"?
3. What separates a hazard from an enemy?
4. State the difficulty vs. challenge distinction in one line each.
5. What are the four requirements of a fair timing puzzle?
6. Give the 7-step "Peter and the Wolf" orchestration order.
7. Why should a saw blade that kills the player also kill enemies?
8. List the five checkpoint rules of thumb.
9. What did Rogers change in Scott Kim's puzzle definition, and why?
10. What are the four ways to solve a puzzle?
11. What should happen when a player can't solve a puzzle (three conditions)?
12. What does "no cat mustaches" mean?
13. Give the three trivia answer formats and one rule for each.
14. List at least five minigame design rules.
15. Why is Whack-a-Mole "the last stop on the creativity train"? (5 reasons)

<details><summary>Answers</summary>

1. Mechanics, hazards, props, puzzles.
2. Board games: mechanics = rule systems (turns, action points, resource management, bidding, dice). Video games: mechanics = interactive objects that create gameplay when the player touches, triggers or pushes them.
3. Intelligence and/or mobility: hazards follow predictable patterns and move in limited ways; enemies think and roam.
4. Difficulty promotes pain and loss (punishes). Challenge promotes skill and improvement (beatable through skill and knowledge).
5. Readable movement pattern; predictable (not random) timing; a tight but possible window with leeway at both ends; world "tells" showing safe vs. deadly spots.
6. Simple movement/collecting → add one mechanic → add a second and combine → add a hazard → add enemies → combine enemies + hazards → twist one element.
7. So players can turn the trap against its makers. Luring enemies into it makes the player feel clever and gives villains their comeuppance.
8. Face the direction of travel; never next to a hazard or in an enemy's detection zone; respawn on the ground with no long animation; flat, even ground; auto-save data when triggered.
9. He replaced "fun" with "challenge", because fun is subjective; a puzzle's job is to challenge ("solve me").
10. Reason, knowledge, skill, dumb luck. The best puzzles allow all four.
11. Make it no big deal: offer hints or the answer; it should cost something mild (a bonus or cash, like Layton's diminishing rewards), never something severe like a life; paying to skip is the player's choice. Moving forward is owed to the player, not earned as a prize.
12. Don't make solutions absurd or overclever (Rube Goldberg logic). Players should be able to solve puzzles with logic, knowledge or skill. It's player vs. puzzle, not designer vs. player.
13. Multiple choice (≥3 options, close wrong answers, sometimes "pick the wrong one"); find the object (not pixel-perfect, space around targets, vary orientation/color/size); fill in the answer (flexible parser for synonyms/slang/regional terms; show available words if the vocabulary is small).
14. Simple controls; 5–10 min sessions (micro = seconds); decide designed vs. random progression and ramp gently; add something new each progression (major or minor); few buttons, one action each; allow customization; clear ending/victory condition; give a "brain shift" moment when mixing with core gameplay.
15. Reaction-only (no decisions), random (no strategy), repetitive (only speed varies), minimal input (one motion), endless (players quit from boredom).
</details>

## 🎯 Side quests (5–15 min each)
1. **Platform Primer remix (10 min):** pick 6 platform types from the primer and translate each into a **match-3 blocker or merge-board obstacle** with the same *behavior*. (E.g., "returns when stepped off" → a tile that refills if you don't clear it within 2 moves.)
2. **Crate ban (5 min):** write 15 breakables for a cozy farming F2P game. None may be a crate, barrel or chest.
3. **Tell-spotting (10 min):** invent a timing hazard for a runner game and list **three tells** (visual, audio, environmental) that warn the player.
4. **Prop brainstorm (10 min):** do Rogers' exercise for a *mobile* theme: Easy = a bakery, Medium = a pirate cove, Hard = a space-station laundromat. Stop when it gets silly.
5. **Checkpoint audit (10 min):** open any mobile game, fail a level or die, and grade its respawn/continue against the 5 checkpoint rules.
6. **Minigame metaphor (10 min):** pick an everyday activity (watering plants, parallel parking, folding laundry) and design a 30-second microgame for it using Rogers' 7 rules.
7. **Rock-on-the-head hunt (5 min):** write down three "rocks on the head" you've hit in mobile games and how to make each one fair.

## ⚔️ Main quest (homework)
**Design a 10-level "episode" for a match-3 (or merge) game using the 7-step orchestration.**
- Invent **2 new mechanics** (one helpful, one hazard-like blocker) and **1 "enemy"** (an active threat, e.g., a spreading blocker or countdown bomb).
- For each level, write: goal ("door first"), elements present, what's new, and the intended feeling (learn / combine / pressure / relief / twist).
- Mark where difficulty spikes, where the relief level sits, and what the level-10 **twist** is.
- Add one paragraph checking your hardest level against **"no rocks on the head"** and **"challenge, not difficulty"**.
- **Deliverable:** a one-page table (spreadsheet or markdown) + a sketch of one level's board.
- ✅ **Done when:** each of the 7 orchestration steps maps to at least one level; no level introduces two new things at once; the hardest level has a written fairness justification; you'd be comfortable showing it to a match-3 level designer. Post it publicly (#buildinpublic) and ask for one piece of feedback.

## 🔬 Play Lab
1. **Royal Match or Candy Crush Saga (10 min):** play until you meet a *new* blocker. **Look for:** how it's introduced (alone? tutorial hand? one level or several?). **Answer:** which of Rogers' 7 orchestration steps can you identify across those levels?
2. **Subway Surfers (10 min):** **look for:** obstacle tells and timing windows, and what happens when you crash (the continue offer). **Answer:** does the respawn follow Rogers' checkpoint rules? Is any death a "rock on the head"?
3. **Clash of Clans or Hay Day (10 min):** **look for:** every timer you see (building, production, boosts, events). **Answer:** which timers pace your session, which create appointments, and which are offered for skipping? Do they all clearly show remaining time?
4. **Block Blast! or any word game (10 min):** **look for:** hints, feedback and how failure is handled. **Answer:** does it follow "show the door first", hot/cold feedback, and mild, optional hint costs?

## 🗣️ Feynman check
Explain to a 12-year-old in 60 seconds **why a game's traps should be "challenging, not difficult"**, using the rock-on-the-head story and the "wait for it… go for it!" flame jet.

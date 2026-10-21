# 👹 Level 11 — They All Want You Dead: Enemies & Bosses
> 📖 Book pp. 281–329 · ⏱️ ~75 min study · 📱 F2P relevance ★★★★☆ — enemy rosters drive survivor-likes, tower defense, RPGs and PvP card games; "blockers" are the enemies of puzzle games; boss events are LiveOps gold.

## ⚡ TL;DR — the 30-second version
- **Form follows function.** Decide what an enemy *does* (size, behavior, speed, movement, attacks, aggression, health) before anyone draws a single claw. The look comes last.
- Build a **roster of complementary behaviors** (patroller, chaser, shooter, guard, flyer, bomber, burrower, teleporter, blocker, doppelganger) and mix them so the player must do **threat analysis**: "who do I kill first?"
- **Fighting enemies is supposed to be fun** and **enemies should be fought, not avoided** — give players reasons to engage (loot, path, key, power, taunts, feeling badass). Telegraph attacks. Not every attack has to do damage.
- **Make the player hate the enemy** (show villainy that hurts the player's *gameplay*, not just the story), let villains recur, and don't baby the player.
- A **boss** = a big and/or hard enemy that blocks progress and is the climax of a level/world. Build it from **patterns**: primary attack → invulnerable attack → vulnerable state → opportunities, escalating in rounds, like a dance.
- Watch the **camera**, design the **arena** as part of the fight, **let the player land the killing blow**, respawn fairly — and remember **drama beats scale**.

## 🗺️ Chapter map
- [ ] 1. Form follows function — function first, looks later
- [ ] 2. Size — five sizes, five ways to fight
- [ ] 3. Behavior — ten enemy archetypes + combos
- [ ] 4. Speed & the Three Ss — non-mobile to quick
- [ ] 5. Movement style — patterns, packs, animal inspiration
- [ ] 6. Pathing AI & waypoints — five questions for programmers
- [ ] 7. Bring on the Bad Guys — intros, spawning, deaths
- [ ] 8. Fought, not avoided — six reasons to fight
- [ ] 9. Enemy attacks & telegraphing — melee, weapon, projectile, lingering
- [ ] 10. Grief without damage + enemy health — the 10-tool toolbox
- [ ] 11. I Love Designing Enemies — bestiary + build-your-own-foe
- [ ] 12. I Hate You to Pieces — villains, hate, taunts, danger
- [ ] 13. Non-Enemy Enemies — gremlin, tormentor, time, humans
- [ ] 14. How to Create the World's Greatest Boss Battle — definition + 3 design approaches
- [ ] 15. Who's the Boss? — what the boss means
- [ ] 16. Size Matters — camera, patterns, the dance, the kill
- [ ] 17. Location, Location, Location — arenas, scrolling, puzzle bosses
- [ ] 18. Why Not to Create the World's Greatest Boss Battle — drama over scale

---

## 1. Form Follows Function (chapter intro: "They All Want You Dead")
**🧠 Big idea:** Games are full of things that want to kill you. Before you design how a monster *looks*, nail down what it *does* — because code, rigging, animation and textures all hang off that decision.

**📋 The details:**
- **Scope of the chapter:** many games use other kinds of conflict (time, human opponents, the player's own skill). This chapter is about the *living* kind of opposition. Rogers ties it back to the three story conflicts from Level 3:
  - **man vs nature** (a storm, a giant white whale),
  - **man vs self** (an inner struggle — his joke: deciding where to eat lunch),
  - **man vs man** — which in games becomes man vs zombie, man vs ninja pirate, man vs horrible alien thing.
  - (Non-living opposition comes back later in §13 "Non-Enemy Enemies".)
- **The golden rule: FORM FOLLOWS FUNCTION.** Rogers states it twice for emphasis. His cartoon: a designer happily drawing a **winged skeleton with a lightning sword** without having decided how it attacks. Put the pencil down.
- **Why it matters (production):** the enemy's function determines
  - how the **programmer** codes it,
  - how the **animator** builds its rig,
  - how the **artist** textures it.
- **The 7 enemy attributes** you must define first:

| # | Attribute | The question it answers |
|---|---|---|
| 1 | **Size** | How big vs the hero? (drives how it's fought, its health, its reactions) |
| 2 | **Behavior** | How does it move, fight, and react when hurt? |
| 3 | **Speed** | Non-mobile, slow, medium, fast or quick? |
| 4 | **Movement** | What *style* of motion — charge, zigzag, flank, ambush? |
| 5 | **Attacks** | Melee, weapon, projectile, lingering effects, non-damaging grief? |
| 6 | **Aggression** | Berserker or coward? (Technically part of behavior, but combat is often treated as its own system, so it gets its own line.) |
| 7 | **Health** | How many hits (from which attacks) to kill it? |

- These attributes, combined with the **level's theme**, tell you *who* the enemies are, what they'll *look like*, and how well they'll *work together* once placed.
- **Cost of skipping this:** redoing an enemy over and over is a team **morale killer** and a waste of time and money — Rogers calls it irresponsible design.

**🎮 Book examples:** the winged-skeleton doodle → the classic mistake of drawing first, designing later.

**📱 F2P mobile translation:**
- In **tower defense** and **survivor-likes**, an enemy is basically a stat block + a behavior: HP, speed, armor type, targeting rule, special trait. Writing that row in a spreadsheet *before* concept art is exactly "form follows function."
- In **Clash Royale**, every card's look screams its function: a giant is a slow building-smasher, a balloon floats over and drops bombs, a skeleton swarm is cheap and numerous. Players read the job from the silhouette.
- In **match-3**, a blocker's art (chocolate, crate, chain, ice) is chosen *after* its rule (spreads, needs 2 hits, locks a tile, sits under a piece).

**🪝 Make it stick:** *"Claws come last."* Picture an artist sculpting gorgeous wings on a monster whose design doc says "burrows underground." Wings: wasted. Team: crying.

---

## 2. Size
**🧠 Big idea:** Size decides how the player fights an enemy, how much punishment it soaks up, how it reacts to hits — and even how the player *feels* about beating it.

**📋 The details:**
- **Five size classes** (relative to the player character):

| Size | Definition | How the player fights it |
|---|---|---|
| **Short** | No taller than the hero's waist | Must crouch, or use low attacks (upward sweep, spinning radial attack) |
| **Average** | About the hero's height | Hit with low and medium attacks |
| **Large** | Several "heads" taller than the hero | Low, medium, and some high attacks |
| **Huge** | At least twice the hero's size | Low, medium **and** high attacks; a vulnerable head may only be reachable with a jump attack |
| **Gigantic** | So big it can only be fully seen from a distance | Usually becomes a boss/set-piece; barely notices normal hits |

- **"Heads" (artist unit, from a footnote):** characters are measured in head-heights. An average 6-foot human ≈ **7 heads** tall; a **heroic** proportioned character ≈ **8.5 heads**.
- **"Fight your way up" the enemy:** design combat so bigger enemies require a wider *range* of the player's moves — average = low + medium; huge = low + medium + high, and so on.
- **Size → health:** bigger enemies traditionally have more health (harder to kill). That's partly why so many **bosses are enormous**.
- **Size → hit reaction:** a knockback that sends a short enemy flying may not budge a large one; a gigantic one may not even notice.
- **Note on the table:** the book spells out only the *average* (low + medium) and *huge* (low + medium + high) cases and says "and so on" — the **large** row is the natural in-between extrapolation, not a quoted rule.
- **Variety** (of sizes) is what keeps players from getting bored.
- **Size → emotion:** beating a huge enemy makes the player feel **heroic**; beating tiny ones can make them feel like a **bully**. (Cartoon: a tiny hero kicking a giant's shin — the giant complains about being bullied.)

**🎮 Book examples:** the size line-up illustration (tiny critter → human-size → horned brute → towering ogre with a club).

**📱 F2P mobile translation:**
- **Survivor-likes** (Survivor.io and similar): small fodder dies in one hit and flies back; **elites** are visibly larger and tankier; **bosses** are the largest thing on screen. Size = instant HP readout on a 6-inch screen.
- **Tower defense:** bigger units = slower + more HP (the classic "tank" enemy that soaks tower fire while small fast ones slip past).
- **Readability rule for phones:** you don't have pixels to spare for subtle cues. Use size jumps of at least ~1.5x between tiers so a thumb-busy player can tell "fodder" from "elite" at a glance (design guideline, not a book number).
- The **bully effect** is real in casual games: if your cute critters get squashed, make sure the *player* is the underdog in the fiction (Angry Birds' small birds vs. fortified pigs).

**🪝 Make it stick:** *"Short, Average, Large, Huge, Gigantic — Some Angry Llamas Hate Giraffes."* And: hit a gnome, he flies; hit a giant, he yawns.

---

## 3. Behavior — the ten enemy archetypes
**🧠 Big idea:** Behavior is the soul of an enemy. Don't repeat behaviors across your roster — design behaviors that **complement** each other so groups of enemies become **combat puzzles**.

**📋 The details:**
- **Three behavior questions** — answer these and you have a robust enemy:
  1. How does it **move**?
  2. What does it do **in combat**?
  3. What does it do **when it's hurt**?
- **Goal:** don't repeat behaviors; better still, make them complement one another.
- **The ten behavior types** (Rogers draws most of them as the same gumdrop-shaped blob wearing different props — a bandana and pistol, a propeller beanie, a shield — which itself is a lesson: one base model, many behaviors):

| Type | What it does | Counterplay / design notes |
|---|---|---|
| **Patroller** | Moves back-and-forth or up-and-down mechanically. Path can be fancier, but it's always **predictable**. | Learn the route, time your move. |
| **Chaser** | Pursues the player once approached or some condition is met. | Patrollers often **become chasers** when they spot the player or get attacked. |
| **Shooter** | Fires projectiles. Shooting patrollers/chasers fire once they spot you. | Tries to **keep its distance** rather than engage up close. |
| **Guard** | AI priority is protecting an **item or location** (e.g., a doorway), not chasing you. | Easily combined with chasing/shooting if the player steals the item or slips past. |
| **Flyer** | An aerial patroller — flight adds a whole extra dimension, so it gets its own class. Swoops in to attack or shoots from a safe distance. | More **advanced**: harder to predict. Players usually stop to aim or use a jump attack. |
| **Bomber** | A flyer that attacks from **above** instead of from the side. | Common in **2D** games, because a 3D camera struggles to show threats overhead. |
| **Burrower** | Has an **invulnerable state** (underground) that lets it reposition for an advantageous attack. | Player must **wait for it to emerge** before hitting it. |
| **Teleporter** | Changes position around the playfield **instantly**. | Unlike the burrower, there's no window during the move — so attack fast, and **give the player a disruption tool** (stun or other interrupt). |
| **Blocker** | Defends with a **shield** or other defensive device. | Get around it (attack from another direction/height: low or behind), **disarm** it with a specific move, **break** the shield with a specific action, or **wait out** a temporary invulnerable state. |
| **Doppelganger** | Looks like the player and **mimics** the player's moves, attacks and AI. | Forces the player to use their moves/weapons in **unusual ways** to beat "themselves." |

- **Harmony:** enemies should live in harmony together, creating **combat puzzles**.
- **Threat analysis:** well-mixed enemies make the player ask: *which one is the bigger threat? Kill that first, and defend against the rest until then.* That decision *is* gameplay.
- **Four combos that work** (each drawn in the book):
  1. **Blocker + shooter behind him** — while you chip at the shield, the shooter plinks you.
  2. **Big chaser + swarm of small flyers** — go for the big guy and the little ones sting you; go for the flyers and the big guy flattens you.
  3. **Teleporter + chaser** — chasing the teleporter leaves you open to the chaser.
  4. **Guard + bomber** — while you're busy with the guard, bombs rain from above.

**🎮 Book examples:** gumdrop-enemy illustrations for every type; the four combo drawings.

**📱 F2P mobile translation — the archetypes are everywhere:**

| Book archetype | F2P example (real or generic) |
|---|---|
| Patroller | Platform-runner obstacles that pace back and forth; "moving blocker" pieces in puzzle games |
| Chaser | Survivor-like hordes that home in on you; Clash Royale's Hog Rider rushing a tower |
| Shooter | Clash Royale's Musketeer/Archers; ranged mobs in Archero-style games that hang back |
| Guard | Tower-defense "boss carriers"; in match-3, a **lock/cage** guarding a tile or item |
| Flyer | Clash Royale's Minions (only air-targeting troops hit them) |
| Bomber | Clash Royale's **Balloon** — flies over and drops bombs on buildings |
| Burrower | Clash Royale's **Miner** — tunnels underground and pops up anywhere |
| Teleporter | Survivor-like elites that blink next to you (generic) |
| Blocker | Plants vs. Zombies' conehead/buckethead and screen-door zombies (armor soaks hits); match-3 **multi-layer crates** |
| Doppelganger | "Mirror match" modes or shadow-clone bosses in RPGs (generic) |

- **Puzzle-game "enemies" = blockers.** In match-3, the opposition is the board itself. Typical blocker behaviors map neatly:
  - **Spreader** (e.g., Candy Crush's chocolate grows if you don't clear some each move) → a chaser/gremlin that undoes progress.
  - **Multi-layer box/crate** (needs several adjacent matches) → a blocker with health.
  - **Lock/chain/cage** → a guard on a tile.
  - **Countdown bomb** → a timer-enemy: defuse it in N moves or lose.
- **Roster design for survivor-likes/TD:** mix a slow tank, a fast runner, a ranged unit and a flyer, then introduce them one at a time and combine them later — exactly Rogers' "complementary behavior" + "threat analysis" loop.

**🪝 Make it stick:** Memory palace — walk through your house: a **P**atroller pacing the hallway, a **C**haser in the kitchen, a **S**hooter on the stairs, a **G**uard at the fridge, a **F**lyer on the ceiling fan, a **B**omber over the bed, a **B**urrower under the rug, a **T**eleporter in the mirror, a **B**locker behind the shower curtain, and your **D**oppelganger in the bathroom mirror. Mnemonic: **"Pirates Can Shoot Guards; Flying Bombers Burrow Through Blocky Doors."**

---

## 4. Speed & the Three Ss
**🧠 Big idea:** Speed and movement make an enemy more dangerous, harder to target, and scarier. And **speed, size and strength trade off** — give an enemy all three and it feels cheap.

**📋 The details:**
- **Five speeds:** **non-mobile, slow, medium, fast, quick**.
- **Hazard vs enemy:** the difference is **mobility and AI** — but there are exceptions:
  - "Non-mobile" doesn't mean motionless. **Movement = character and life.** A colossal tentacled Cthulhu-like thing may be stuck in place (size or tech limits) yet players still see it as an enemy.
  - A **wall-mounted laser-sighted machine gun** has no legs but enough AI to make life miserable. (Cartoon: a stationary turret next to a tank-tread robot barking at it to go get the player — a Star Wars "TK-421" gag.)
  - Keep players engaged against non-mobile enemies with a **timing puzzle** between them and the enemy, or a **puzzle built into the enemy** itself.
- **The Three Ss — speed, size, strength — are inversely proportional:**
  - **Small** → fast but not strong.
  - **Big** → strong but not fast.
  - **Medium** → strong *or* fast. Give it **both** and it feels **"cheap"** — an advantage the player can't match.
  - An overpowered or too-perfect enemy feels like you're fighting **a computer**, not a living creature.

| Speed | How it behaves | Design tips | Book example |
|---|---|---|---|
| **Non-mobile** | Fixed in place (turret, giant immobile creature) | Still give it AI; add timing puzzles or a puzzle on the enemy itself | Wall-mounted laser machine gun; huge tentacle monster |
| **Slow** | Lumbering | **Best in numbers** (one zombie = meh; a dozen = sweat). Often hits **hard** (if it hits you, your fault). Or pair slow movement with a **fast attack**. Often has built-in **defenses** (braces against hits, swats you aside). Slow = **powerful and inevitable** → player panics and blunders. | Resident Evil's Tyrant, Nemesis and Dr. Salvador |
| **Medium** | Matches the player's move/attack speed | Predictable but useful for most situations. Make medium enemies run **slightly slower than the player** when chasing, so the player can retreat at full run, turn and face them in time to attack or defend. Tweak values until it feels **right and fair** — no hard rule. | — |
| **Fast** | Darts in, strikes, backs off — or circles, then leaps in for multiple hits | Great for **horror and action**: less reaction time → panic → mistakes, until players learn to stay calm. **Don't** let it attack nonstop (being hit by something you can't hit back is frustrating) unless that's the intended strategy. **Smaller = quicker.** Give it an **erratic** pattern for real challenge. | — |
| **Quick** | Moves in **bursts**, blindingly fast — can feel unfair | Balance it by **limiting its attacks and moves**. Play a **warning animation** before the burst so the player can dodge, block or strike first. | — |

**🎮 Book examples:** Resident Evil's slow-but-unstoppable stalkers (Tyrant, Nemesis, Dr. Salvador); the turret + robot cartoon.

**📱 F2P mobile translation:**
- **Clash Royale** is a Three-Ss textbook: Golem/Giant (big, strong, slow), Skeletons (tiny, fast, fragile), and medium units that are *either* tough *or* quick. A card that's cheap, fast **and** tanky would be the "cheap" enemy Rogers warns about — that's what balance patches fix.
- **Survivor-likes** live on "slow but many" — the zombie-horde principle is the whole genre.
- **Tower defense** "medium slightly slower than you" equivalent: give fast enemies low HP so towers can still catch them.
- **Mobile tip:** "quick" enemies need **big, bright telegraphs** (flash, wind-up pose, ground marker) because touch controls are less precise than a gamepad.

> ⚠️ **2010 → 2026:** the "run slightly slower than the player" trick assumed a 3rd-person action game. In auto-attack or top-down mobile games, the same idea becomes: **the player's dodge/move speed should beat the common enemy's chase speed**, so skilled kiting is always possible.

**🪝 Make it stick:** *"Small & speedy, big & beefy — never both, or it's cheesy."*

---

## 5. Movement Style
**🧠 Big idea:** *How* an enemy moves defines its attacks *and* its personality. Aim between random and predictable, coordinate groups, and borrow movement from nature.

**📋 The details:**
- **Movement-style questions:** Does it charge like a maniac? Zigzag to dodge fire? Beeline in then retreat? Hop from cover to cover? Crawl on walls to ambush from above? Run away and never fight? (Rogers' footnote: enemies are more fun when you can actually fight them.)
- Knowing the movement style determines both **attacks** and **personality**.
- **Random vs predictable — avoid both extremes, add variety:**
  - Too **random** → feels arbitrary.
  - Too **predictable** → feels "game-y."
- **But patterns often win:** for **Crash Bandicoot 2**, Naughty Dog tried more behavior-driven AI with fewer simple patterns — **focus groups liked it less**. Players enjoyed figuring out patterns.
- **Exception — sports games:** there, players *want* unpredictability; predictable patterns become **exploitable holes** that ruin the experience.
- **Groups:** coordinating several enemies adds complexity. Plan how they behave and cluster in a fight. Some can use **flocking** behavior for realistic group motion.
- **Nature as inspiration** (book diagram: straight arrow, zigzag, looping arc):
  - **Humans** → straight lines.
  - **Predatory mammals** (wolves, tigers) → **looping arcs** circling prey.
  - **Crabs** → sideways.
  - **Birds** → **swooping** patterns riding updrafts.
  - **Insects** → **zigzag** as they course-correct.
- **The Bruce Lee rule:** in kung-fu movies dozens of henchmen surround the hero but attack **one or two at a time** ("very polite"). In games this creates the **illusion of a big group** without overloading the game (performance) or the player (difficulty).

**🎮 Book examples:** Crash Bandicoot 2 focus-group result; sports games as the exception; Bruce Lee fight scenes.

**📱 F2P mobile translation:**
- Survivor-likes **break** the Bruce Lee rule on purpose — the fun is mass, but enemies are trivially weak individually. Elites and bosses re-apply it: one big threat at a time.
- In **PvP** (Clash Royale, Brawl Stars) the "enemy" is human, so unpredictability is built in — like Rogers' sports-game exception.
- **Boss patterns in gacha RPGs** (Genshin Impact weekly bosses, Honkai: Star Rail bosses) are learnable sequences; players watch guides and memorize them — pattern-learning is a feature.
- Mobile perf bonus: "attack in ones and twos" is also a **frame-rate saver** on low-end Android devices.

**🪝 Make it stick:** *"Crab sideways, wolf in circles, bug in zigzags, human in a straight line — and henchmen wait their turn like it's a deli counter."*

---

## 6. Pathing AI & Waypoints
**🧠 Big idea:** Sit down with your programmer and define how enemies get around and how they think. Five questions cover it; waypoints are the usual tool.

**📋 The details — five pathing/behavior AI questions:**

| Question | Things to decide |
|---|---|
| **How mobile?** | More than one movement speed? Can it break into a run or slide to a stop? Leap obstacles? Use doors? |
| **How aggressive?** | Frothing fast berserker or slow, ice-cold killer? Could be **cautious or cowardly** — a sense of **self-preservation** makes enemies feel like real people. |
| **How much of a team player?** | Raises the alarm and calls for help? Pins the player down while another closes in for melee or a better shot? Flushes the player into the open? Grabs/grapples while another attacks? Has a **partner** (guard dog, attack drone)? |
| **How defensive?** | Crouches/ducks behind objects? Uses cover or holds the line? Goes stealthy when it spots the player? Sneaks up from behind? Carries shields or defense systems? |
| **How versatile?** | Picks up dropped weapons or health? Drives vehicles or mans gun emplacements? Takes over a fallen ally's role? Flies or uses non-ground movement? |

- **Waypoint navigation system:** most AI moves using a **grid or path** the designer lays out. As AI travels it, the programmer decides which movements/animations play to create specific behavior. Areas can be marked **"go" / "no-go"** based on geometry or to force a behavior.
  - In plain terms: enemies either follow a **preplanned network of paths** or **wander inside an invisible box (or sphere)**.
  - **Pro:** lets the designer **choreograph** events (enemy crashes through a wall, reaches a spot at a set time).
  - **Con:** placing waypoints is **time-consuming** and doesn't cover every AI need.
  - **Corner-clipping gotcha:** enemies usually take the **shortest path** to the player, so they clip corners and objects. Fix: **pull waypoints in a bit** at corners and near objects.

**🎮 Book examples:** waypoint network diagram (nodes and links between a devil enemy and the hero).

**📱 F2P mobile translation:**
- **Tower defense** is *literally* waypoint design: the lane path is the level. Designing paths = designing difficulty.
- **Survivor-likes** mostly use simple "steer toward player" + separation (flocking) so hundreds of enemies don't stack.
- **Team-player AI** shows up in RPG auto-battles as **roles**: tank pulls aggro, healer heals allies, assassin dives the backline (AFK Arena / Raid-style teams). Same questions, applied to squads.

**🪝 Make it stick:** **"MATDV" → "My Angry Troops Defend Valiantly"** = Mobile, Aggressive, Team player, Defensive, Versatile.

---

## 7. Bring on the Bad Guys — introductions, spawning, deaths
**🧠 Big idea:** How an enemy *enters* and *leaves* the world matters as much as how it fights. A great entrance tells the player "new, exciting, dangerous!" — and a fair spawn and a juicy death make fighting fun.

**📋 The details:**
- **Boring vs dramatic intro (the graveyard skeleton):**
  - Boring: you walk through a graveyard and a skeleton is just… standing there, ready to fight.
  - Dramatic: a tombstone shakes as you pass → camera zooms in on the hero, screen shakes, controller rumbles → camera whip-pans to a grave → a bony hand punches out of the dirt → the tombstone explodes into shards → the skeleton bursts out, eyes glowing, fists clenched. Same enemy, ten times the excitement.
- **Enemy introduction techniques** (signal "something new and dangerous"):
  1. **Freeze the camera or push in** on the newcomer so the player can study it for a beat before it starts hurting them.
  2. **Show the enemy's name on screen** — players like putting a name to a foe.
  3. **Foreshadow** — Resident Evil 2 shows a **licker** running past a window before you actually meet one: a "what was THAT?" moment that builds suspense. Make the meeting an *event*.
  4. **Make a dramatic entrance** — Devil May Cry introduces enemies spectacularly: smashing through windows, kicking doors down, exploding into the world in a burst of effects. Give bad guys a strong first impression.
- **Spawning is as important as removal.** Don't let the player slaughter enemies before they've even arrived. Options:
  - Make enemies **invulnerable while spawning**.
  - **Spawn them off-screen** where the player can't reach them.
  - Invent a **hazard or mechanic** that delivers enemies safely onto the playfield.
- **Maximo: Ghosts to Glory's coffins:** coffins burst up out of the ground to deliver enemies. Touch one → you get **knocked back**. Hit one → the coffin shatters, but the enemy inside is **unharmed** and goes straight into its attack routine.
- **Why bother? Because FIGHTING ENEMIES IS SUPPOSED TO BE FUN!** In an action game you'll fight *a lot* of enemies, so make every fight awesome:
  - big, explosive visual effects,
  - hit reactions that are either comedic or dramatic,
  - satisfying (even gory) **kill animations**,
  - generous **feedback and rewards** (rewards are covered in Level 13).
- **Death design — what happens when an enemy is defeated?** Vanish in a puff of smoke? Pop like soap bubbles? Clutch its heart in a theatrical death? Explode? And **how is treasure delivered** to the player afterward (→ L13)?
- **Model removal:** fade away leaving only weapon pickups? Dissolve into goo that melts? Leave bodies on screen as a gory reminder? **What you show affects your age rating** (ESRB in the book).

**🎮 Book examples:** Resident Evil 2 (licker foreshadowing), Devil May Cry (dramatic entrances), Maximo: Ghosts to Glory (spawn coffins).

**📱 F2P mobile translation:**
- **"New enemy!" cards:** many tower-defense and RPG games pop a card with the enemy's name, art and a one-line hint the first time it appears. That's intro techniques #1 + #2 + a tutorial in one.
- **Level-preview screens** (e.g., Plants vs. Zombies shows which zombie types are coming before a level) = foreshadowing.
- **Spawning in survivor-likes:** enemies spawn just **off the screen edge** — exactly Rogers' off-screen trick, so the player never sees things pop into existence on top of them.
- **Juice on death** is a retention lever: pop, coin spray, XP gem shower, screen shake. On mobile, deaths should be **fast** (fade/pop in <0.5s) so dozens of corpses don't hurt performance or clutter a small screen.
- **Age ratings:** today it's the store ratings (Apple's age rating, Google Play/IARC, PEGI). Gore changes your rating — and your **audience size** and ad eligibility.

**🪝 Make it stick:** *"Entrances are trailers, deaths are confetti."* A skeleton that just stands there is a mannequin; a skeleton that explodes out of its grave is a memory.

---

## 8. Enemies Should Be Fought, Not Avoided — six reasons to fight
**🧠 Big idea:** If players *avoid* an enemy because it's too hard, too cheap or too annoying, the design failed. Give them reasons to **want** the fight.

**📋 The details:**
- **The exploder problem.** Every action game Rogers worked on had this enemy: (1) sees the player, (2) charges like a maniac, (3) explodes on contact. Sounds exciting; the execution always causes trouble:
  - **3rd-person cameras** swing behind the player and **1st-person cameras** only show what's ahead — so the player **never sees the exploder chasing them** and gets no warning.
  - Fixes like flagging it on a **mini-map** or a **grenade-detector HUD** (Call of Duty: Modern Warfare 2) help, but the guy usually still catches you. It's still not good enemy design.
- **The rule: ENEMIES SHOULD BE FOUGHT, NOT AVOIDED.**
  - Not the dodge-the-spinning-blades kind of avoiding (sidestepping a frantic attack) — that is fine and fun.
  - The bad kind: players deliberately skip an enemy because it feels unfair, overtuned or simply not worth the bother.
- **Your job:** make the player realize risking life and limb has **advantages**. Six reasons to fight:

| # | Reason | Details |
|---|---|---|
| 1 | **They have the loot** | Gold, bolts, XP, health — whatever it is, they've got it and you want it. |
| 2 | **They block the path** | Easier in 2D. You can artificially block the player to force a fight, like a **battle arena**. |
| 3 | **They have the key** | And you need it to open the gate to the next room/section/level. (Rogers wonders why it's always the *last* enemy holding the key.) |
| 4 | **You need to take their power** | Tired of being shot? Beat that enemy and take its bigger, better gun. Want your +1 mace to become +2? Go beat up that orc. |
| 5 | **They're making fun of you** | **Taunts** motivate. An enemy that taunts/challenges you when you stand still too long forces action *and* adds character. In fighting games like **Street Fighter**, taunting is a risk: you drop your guard to mock the opponent. |
| 6 | **It makes you feel like a badass** (aka it's fun) | Nothing keeps players fighting like a **solid combat system** (→ Level 10). |

**🎮 Book examples:** Call of Duty: MW2 grenade indicator; Street Fighter taunts.

**📱 F2P mobile translation:**
- **Loot** is F2P's main reason to fight: drops, chests, shards, XP. Bosses that drop **hero shards or upgrade materials** (e.g., Genshin Impact's weekly bosses drop talent-upgrade materials) are fought willingly forever.
- **Block the path** = the level gate. In RPG campaigns, the stage boss is the wall between you and the next chapter.
- **Take their power** = in collection games, defeating event bosses can unlock that boss *as a playable unit*. Powerful motivator (and a monetization hook — keep it earnable).
- **Avoidance signals a problem:** if analytics show players skipping an optional mode or quitting at a particular enemy, it's often "too cheap / not worth it." Fix the reward or the fairness, not just the numbers.

> ⚠️ **2010 → 2026:** the exploder's camera problem mostly disappears in **top-down/isometric** mobile games — you *can* see the kamikaze coming (Clash of Clans' Wall Breakers, suicide units in survivor-likes). The principle still holds: if an enemy's only counterplay is "run away and hope," it's a bad enemy.

**🪝 Make it stick:** **"LPK-PTB": Loot, Path, Key, Power, Taunts, Badass** → *"Lazy Pigs Keep Pinching Tasty Bacon."*

---

## 9. Enemy Attacks & Telegraphing
**🧠 Big idea:** Let enemies be badass too — give them varied, cool attacks. But every attack must be **telegraphed** with a readable "tell," so the observant player can respond.

**📋 The details — four attack families and the questions to ask:**

| Attack family | Questions to answer |
|---|---|
| **Melee attacks** | Hands, claws, tentacles or feet? Raking attacks or punches? Martial arts? Can it **grab or ensnare**? Perform **throws**? **Ground-pound** or cause earthquake attacks? |
| **Weapon combat** | Uses weapons? One- or two-handed? Barbaric brawler or skilled fighter? Can it **disarm** the player — or **be disarmed**? Can the **player use its weapon**? Can the weapon **extend, be thrown, or boomerang**? |
| **Projectile combat** | Guns, magic spells, other ranged weapons? How **accurate**? Fires blindly or waits for the perfect shot? **Tracks** movement or **leads** its aim? Has to **reload**? Projectile **explosive**? Can it be disarmed? Has a **close-range melee fallback** if engaged up close or disarmed? |
| **Persistent damage** | Side effects like **acid, poison, fire**? Damage on hit or as a **lingering** effect? Can the player **heal** it or does it **wear off** over time? Can **gear/equipment** counter it? |

- **Telegraphing** = every attack gets a **"tell" animation** that warns an observant player that something stabby, shooty or clawy is coming. Example tells:
  - cocking a fist back before a punch,
  - a growl or yell before swinging or charging,
  - a body part moving first (twitching tail, flaring reptilian fins),
  - a weapon's **laser sight** having to lock onto the target before firing,
  - a weapon or spell **"charging up"** before it fires.
  - (Book drawing: a caster raising glowing orbs, a skeleton winding up a sword, a robot raising a charging gun.)

**🎮 Book examples:** the telegraph illustration trio.

**📱 F2P mobile translation:**
- **Telegraphs are non-negotiable on phones.** Small screen + thumbs = slower, less precise reactions. Use **ground indicators** (red circles/cones/lines showing where an attack will land), wind-up poses, color flashes and audio stings.
- In Archero-style games, ranged enemies commonly show an **aim line** before firing — a "laser sight" tell.
- **Clash Royale's Sparky** visibly charges before its big shot, and certain stuns reset the charge — a telegraph *and* a counterplay window in one.
- **Persistent damage** = DoT debuffs (poison, burn, bleed) in RPGs like Raid: Shadow Legends; "can gear counter it?" = debuff-resist stats and cleanse skills. Make sure the icon is readable at tiny size.

**🪝 Make it stick:** *"No tell, no hell."* An attack without a wind-up isn't hard — it's a coin flip.

---

## 10. Grief Without Damage + Enemy Health
**🧠 Big idea:** Not every enemy attack has to take HP. Ten "grief" tools disrupt, delay or annoy the player — adding variety without just draining the health bar. Then make sure every enemy can actually be killed, with health balanced against the player's attacks.

**📋 The details — the non-damaging grief toolbox:**

| Tool | What it does | Rules / tips |
|---|---|---|
| **Block / parry** | Enemy blocks or parries, staggering the player's combat flow | Can **break combo chains**, **reset combo meters**, make the player's weapon **rebound/ricochet**. Whether it's a force field, shield or defensive grab, **never make the player wonder why** it happened. |
| **Knockback** | Player is shoved backward instead of (or as well as) taking damage | Distance breaks combat chains and interrupts actions like **spellcasting** or **operating a mechanic**. Brutal when the player stands on a **narrow platform** — knocked off, possibly to their death. |
| **Stun** | Player is dazed and defenseless, standing or knocked down | **Momentary** loss of control only — long stuns are very frustrating. (Circling stars/tweeting birds optional.) |
| **Freeze / paralyze / capture** | Like a stun, but the player can **break out** by button-mashing or wiggling the stick | Often **entombs** the character (e.g., in ice). May or may not deal damage. Give a cool **"victorious breaking free"** animation and effect when control returns. |
| **Repair / heal** | Enemy regains health | Use **sparingly** — feels unfair. Works best with a **healing animation** plus a **health bar** showing the restore. Consider letting the player **interrupt the heal** by attacking. |
| **Buff** | Enemy powers up to charge an attack (magic charge, a gunner spinning up a weapon) | Either the enemy is **invulnerable while buffing**, or the reverse — **vulnerable while buffing**, so it risks losing the advantage it wanted. |
| **Thief** | Enemy steals money or equipment | Shifts the goal from fighting it to **chasing down the thief** (picture an enemy sprinting off with your chainmail) Give the player a **fair chance to get it back**. **Never steal anything bought or earned through progression** — only (somewhat) easily replaceable stuff. |
| **Leech** | Drains the player's **charged-up resources**: super meter, mana, shield power, fuel | Usually the player **can't get it back** from the leech — once gone, gone. Players quickly learn to **kill leeches first**. |
| **Unexpected behaviors** | A surprise move or attack beyond the expected pattern | Adds variety and the **illusion the enemy is learning** and reacting. Player must adapt instead of falling into routine. |
| **Vulnerabilities / resistances** | Weak to some things, immune to others | Must be **clear and logical**: the killer snow angel is weak to fire; the burning corpse laughs at your torch. Never leave players wondering why something didn't work. **Taunts** can convey this — the smugger the better — but don't overdo it: even the best line gets old by the **third** hearing. |

- **Enemy health:** an enemy can have fierce attacks, nimble defenses and cool behaviors, but there must still be a **way to kill it**.
  - Set enemy health the **same way as player health**.
  - **Balance it against the player's attacks.** Start with **how many hits** it should take to die.
  - Consider **all** the hero's attacks: a goblin might take **3 normal hits**, but a **holy sword** kills it in **1**.
  - All the advice about **displaying player health** (→ Level 10) applies to enemy health too.

**🎮 Book examples:** the grief cartoons (crossed swords for parry, a punch launching the hero, a dizzy hero, an ice-block freeze, a leech draining a glow, a torch vs a flaming man).

**📱 F2P mobile translation:**
- RPG auto-battlers are built on this toolbox: **stun, freeze, sleep, provoke**, **turn-meter reduction** (a leech of tempo — a staple in Raid: Shadow Legends), **block buffs**, **heal-reduction**, **lifesteal**. The book's warning about long stuns translates to **stun-lock** complaints in PvP metas.
- **Thief → async raids:** Coin Master raids and Monopoly GO heists steal **soft currency** from other players — replaceable stuff, as Rogers advises. Stealing **purchased** items would be a trust-killer (and a refund nightmare).
- **Heal/buff with interrupt windows:** Clash Royale's Inferno Tower ramps damage up while locked on and resets when it retargets — a "buff" the player can disrupt.
- **Hits-to-kill → time-to-kill (TTK):** in survivor-likes and idle RPGs, upgrades lower TTK — that *felt* drop (goblin from 3 hits to 1) is the progression fantasy you're selling. Watch for power creep making old content trivial.
- **Enemy HP bars** on mobile: boss bars at top of screen; small mobs often show no bar at all to reduce clutter — show it only when damaged.

**🪝 Make it stick:** Ten tools = **"Big Kids Steal Fries, Ham, Burgers; Then Lick Unusual Vinegar"** → Block, Knockback, Stun, Freeze, Heal, Buff, Thief, Leech, Unexpected, Vulnerability.

---

## 11. I Love Designing Enemies — the Bestiary & building your own foes
**🧠 Big idea:** Enemies are where your creativity runs wild — in games, *anything* can be an enemy. Pick from classics, or invent foes from your theme or story, tie them together visually, reuse smartly, and make sure they belong in your world.

**📋 The details:**
- Rogers finds adversaries the most interesting characters in any story — not just the big bad, but the **cannon fodder**: orcs, Cobra troopers, Imperial stormtroopers, Death Eaters, parademons, AIM scientists, Nazi soldiers, the Bond henchmen who somersault through the air from every grenade blast.
- Games out-do every other medium for creative fodder: an angry pickle, a furious toaster, whatever a goomba is. (For huge lists, he points to books like the AD&D *Monster Manual*.)
- **The Alphabetical Bestiary of Choices** — an A-to-Z of classic enemy types, each with a comic rhyming couplet and a framed "monster card" illustration. The categories (with the joke/lesson each carries):

| Letter | Enemy type | The point of the gag |
|---|---|---|
| A | **Arachnids** | Poisonous crawlers; webs that trap |
| B | **Battlemechs** | Huge metal walkers; don't stand under their feet |
| C | **Criminals** | Cowardly — catch them before they shoot |
| D | **Dinosaurs** | A jab at mad-science plots where cloning dinosaurs seemed like a smart plan |
| E | **Evil creepy children** | Easy to beat — unless guarded by a Big Daddy (BioShock) |
| F | **Flying devils** | Harass you while you climb; knock them away before you fall |
| G | **Ghosts** | Chase you out of habit until a power pellet flips the roles (Pac-Man) |
| H | **Henchmen / mercs / soldiers** | Kill for money; shoot first, duck when they shoot back |
| I | **Irradiated insects** | Giant bugs invading your home |
| J | **Jungle beasts** | The barrel-throwing, girlfriend-stealing ape (Donkey Kong) |
| K | **Killer plants** | Pretty but deadly: thorn shooters, whipping weeds |
| L | **Liches** | A skeleton with a fancy title — put plenty in |
| M | **Mutant freaks** | Radiation-scarred, drippy |
| N | **Ninjas** | Vanish and throw stars; if they do anything else, tint them blue (a nod to Red Ninja/Blue Ninja below) |
| O | **Orcs** | The standard foe for knights and wizards, fought by the score in Blizzard games |
| P | **Pirates** | Treasure-laden ships, diseased crews |
| Q | **"The Queen"** | Dragon, spider or alien — anything called "the Queen" is tougher |
| R | **Robots** | Supposed to improve life; in games they kill you |
| S | **Spaceships** | Many flavors — Galaxian, Sinistar, Space Invaders |
| T | **Treasure-chest mimics** | You reach for gold and lose a hand |
| U | **Unholy cultists** | Crazy demon summoners — but without them, who'd you fight? |
| V | **Vampire bats** | Fast and twitchy — hard to aim at |
| W | **Werewolves** | Fearsome claws — and rendering all that fur tanks the frame rate (a production joke!) |
| X | **Xenomorphs** | Ship-infesting, chest-bursting alien pests |
| Y | **Enemies of yore** | Gorgons and animal-men — the lead designer's been watching Ray Harryhausen films |
| Z | **Zombies** | The final foe — they'd be scarier if they weren't in every game |

- **Build your own foes — seven guidelines:**
  1. **Start with your theme.** Brainstorm enemies from the environment. Ice world → killer snowmen, yetis, grumpy skaters, snowball-throwing little guys, penguins with machine guns.
  2. **…or start with your story.** Who's the main enemy? In an original-trilogy Star Wars game you'd expect **stormtroopers on every planet**. Other villains can show up, but keep reminding the player of the **arch-nemesis**.
  3. **Tie them together.** What single **visual or behavioral cue** sets your enemies apart from each other and from other games? Group enemies by **shape, color, physical traits, weapons or uniforms**.
  4. **Be economical.** Reuse models, animations and textures for maximum production value. But when similar-looking enemies have different behaviors/attacks, make them **look different at a glance** — Rogers' **"Red Ninja / Blue Ninja"** rule: the red ninja hops and throws shuriken, the blue one dashes with sai. **Sub-Zero and Scorpion** (Mortal Kombat) began as reskins of each other (footnote: technically blue ninja/yellow ninja — less catchy).
  5. **Does it belong in your world?** No cybernetic death-mecha in a whimsical Super Mario world; no goomba in a realistic Medal of Honor-style shooter.
  6. **Dress the enemy so it reads as hostile on sight.** Use shorthand like glowing red eyes, demonic horns, fangs, claws, spikes, skull decorations, ragged capes, face-hiding masks and helmets. Stereotypical? Yes — and that's the point: players instantly read them and shoot first. Stereotypes exist because they're easy to understand; use them.
  7. **…or go against expectation and type.** Contrast look and behavior: a cute bunny that becomes a slavering killer, a hulking troll that bursts into tears when hit. More personality = more unique. (Footnote: just don't break the **Triangle of Weirdness** — see Level 3.)

**🎮 Book examples:** stormtroopers & friends (cannon fodder), Mario vs Medal of Honor (world fit), Mortal Kombat's Sub-Zero/Scorpion (economical reskins), the A–Z bestiary references (BioShock, Pac-Man, Donkey Kong, Blizzard, Galaxian, Sinistar, Space Invaders, Harryhausen).

**📱 F2P mobile translation:**
- **Red Ninja/Blue Ninja is the F2P content engine.** Plants vs. Zombies' basic, conehead and buckethead zombies are the same body with different headgear = different HP — readable at a glance, cheap to produce. Survivor-likes do color/size variants with an elite glow.
- **LiveOps reskins:** seasonal events reskin enemies (pumpkin heads for Halloween, snow hats in winter) — cheap novelty, same behavior. Fine — as long as *new behaviors* also look new.
- **Theme-first rosters:** a winter event in a tower-defense game → yetis (tanky), penguins (fast swarm), snow spirits (flyers). Theme brainstorm + behavior table = one-week event content.
- **Make it look like an enemy** matters even more on mobile: at thumbnail size, a **red tint, spikes, glowing eyes or an angry silhouette** separates "hit this" from "collect this." Never make enemies and pickups share a color.
- **Go against type** is a great ad hook: the cute thing that turns monstrous is a classic short-video/UA beat.

**🪝 Make it stick:** *"Same ninja, new paint, new trick — but never same paint, new trick."* If behavior changes, the look must change.

---

## 12. I Hate You to Pieces — villains, hatred, taunts and danger
**🧠 Big idea:** Introduce your main villain memorably, make the player **hate** them (in ways that hurt the player's *gameplay*), keep them alive to come back, use taunts and idles to fake intelligence — and sometimes let the bad guys win a round.

**📋 The details:**
- **Memorable boss introductions:** think Darth Vader's first entrance in Star Wars. The player must get a good look and understand: *this is the bad guy I'll eventually fight.*
- **The "Joker moment":** give your villain a scene where they do something truly evil — like executing their own henchman or another NPC — to prove how bad they are. Can be in-game or in a cutscene. (Footnote: even better if other enemies, not just the main villain, get their own "being bad" moment.)
- **Build the legend before the meeting:**
  - Have other characters **talk about** how terrible the boss is.
  - Leave **collectible intel** — audio logs, data files, letters — that warns about the enemy and can **drop hints on how to beat them**. Arm the player with **knowledge** as well as firepower.
  - **Anticipation** is bigger when the player knows the fight is coming.
- **Demolition Man case study:** the villain, Simon, didn't fight the hero until the very end. To keep him present, at the **start of every level** Simon ran onscreen, **shook his fist** at the player and ran off. Players got fired up ("I'm gonna get him!"), blasted through half an hour of action, half-forgot why — then Simon popped up again next level and re-energized them.
- **The rule: MAKE THE PLAYER HATE THEIR ENEMY.**
  - Make sure the boss **does bad things**. (That's why villains keep killing their own henchmen — someone has to die if they can't kill the heroes.)
  - Let the enemy **seize something the player relies on or loves**: murder the hero's parents, abduct the princess/girlfriend, torch the village.
  - Make it **impact gameplay, not just story**:
    - the murdered parent was the **blacksmith** who made your magic sword,
    - the kidnapped girlfriend used to **heal you** whenever you visited,
    - the burned village was where you **stored your collectibles**.
  - JRPGs do this well: they kill the girlfriend who happened to be your **best party member** — are you crying for lost love or for losing your every-other-turn healer?
- **Don't kill the boss at the end of every fight** — it's better if you don't. A surviving villain builds **history** with the player, so they hate them more. Kill your villain in act one and who's left to fight? (Rogers' joke: the unmotivated hero falls apart and moves in with his parents — who, oops, are dead.) Not fun.
- **Taunts** get the player fired up — but don't **overuse** them. (Rogers paraphrases Spider-Man: with great power comes dialogue the player will get sick of hearing.)
  - Taunt **physically** as well as verbally.
  - Build taunts **into attacks**: in Maximo: Ghosts to Glory, a sword-wielding skeleton did a **gunslinger-style sword flourish** after every successful hit — deliberately giving the player an **opening to strike back** and wipe the smirk off its face.
- **Idles and taunts make enemies seem smarter** than they are and add character:
  - Player retreated out of reach? The enemy **berates** them or makes **"come here"** gestures.
  - Player slipped away with stealth? The enemy **shrugs** and mutters that it must have been seeing things.
  - Some games show guards **smoking** or **dozing off** at their posts — easy pickings.
  - But don't give **every** enemy these quirks, or you destroy the uniqueness you wanted.
- **Sometimes let the bad guys win.** Not by killing the player for the enemy's glory — but **don't baby players** (difficulty is covered in Level 13):
  - let the enemy land a hit — even a **cheap shot** — now and then,
  - give it a temporary **invulnerable attack state**,
  - **force** the player to run or at least block,
  - let enemies **outnumber** the player several times over,
  - let the player **sweat** whether they'll survive.
  - The player must feel **real danger**. An enemy that's no struggle isn't threatening — and victory over no challenge feels **hollow**.

**🎮 Book examples:** Star Wars (Vader's entrance), the Joker (villain moment), Demolition Man (Simon's fist-shake), JRPGs (killing the healer girlfriend), Maximo (skeleton sword flourish).

**📱 F2P mobile translation:**
- **Hate drives motivation even in casual games.** Angry Birds' premise — the pigs stole the eggs — is "take something the player cares about" in one line. Plants vs. Zombies builds to Dr. Zomboss as the final villain.
- **"Impacts gameplay, not just story"** → in LiveOps narratives, the villain can *temporarily* seize a feature (e.g., hypothetical: "The Frost Queen froze your mine — beat her event to unfreeze bonus production"). Careful: never hold *paid* features hostage.
- **Recurring villains** suit F2P perfectly — a live game never "ends," so a nemesis who escapes each season (returning stronger) gives every event arc a face.
- **Simon's fist-shake** = a 3-second villain cameo at the start of each chapter or event — cheap, effective re-motivation for players who forgot why they're grinding.
- **Taunt fatigue** is worse in mobile: sessions repeat many times a day. Rotate lines, cap frequency, or make them mutable.
- **Don't baby players** → in F2P, a few failures create tension (and sell boosters), but too many feel predatory. Danger must be **earned, readable and beatable**.

**🪝 Make it stick:** *"Steal the healer, not just the heart."* The best villain takes something off your character sheet.

---

## 13. Non-Enemy Enemies
**🧠 Big idea:** You can push and punish the player without fighting anything sentient. Four kinds of "enemy" that aren't monsters to stab.

**📋 The details:**

| Type | What it is | Book example |
|---|---|---|
| **Gremlin** | Looks like an enemy but doesn't fight you directly — instead it **undoes your progress** | SimCity's Godzilla-like monster stomping through your city |
| **Tormentor** | Challenges and taunts you all game long but **never directly confronts or attacks** you | The alien overlord of Space Fury; Portal's GLaDOS (you "defeat" her by tearing her apart, but — spoiler — she's implied to be "still alive") |
| **Time** | A **ticking clock** that creates pressure without any enemy. Portal designer Kim Swift observed that time pressure makes people believe a problem is much harder than it really is. | Mostly skill games: **racing/driving** and **puzzle** games. Some let you **extend or slow** the clock for relief. Miss the deadline → **lose a life** or the scenario **resets**. Also used as an **endgame**: escape the base before it explodes. |
| **Human competitor** | Other players — PvP, competitive or co-op. Rogers: the best *and* worst thing about multiplayer is the other players. Friends and strangers always invent new ways to torment and humiliate you. | Never underestimate **one-upmanship and revenge** — give players the tools and watch the fun. Keep your friends close and enemies closer — sometimes they're the same person. (Footnote: a nod to Sartre's famous line that hell is other people.) |

**🎮 Book examples:** SimCity, Space Fury, Portal/GLaDOS, Kim Swift (GDC 2008 talk), racing and puzzle games, multiplayer.

**📱 F2P mobile translation — these are F2P's *most common* enemies:**
- **Time:** limited-time events, timed levels, countdown bombs on match-3 boards — and **move limits**, the turn-based cousin of a clock. "Extend the clock" = **+5 moves / +time offers**, a core puzzle-game monetization moment. Keep them fair: the level must be beatable without paying.
- **Human competitor:** PvP ladders (Clash Royale, Brawl Stars), leaderboards, and **revenge** buttons in async games (Clash of Clans' revenge attacks; Coin Master/Monopoly GO-style raids). Rogers' "give them tools for one-upmanship and revenge" is a social-retention engine.
- **Gremlin:** anything that *undoes* progress — spreading blockers in match-3, raids that knock down your base in strategy games. Use carefully: losing progress is a top churn trigger; most F2P games cap or shield losses (e.g., shields after being attacked).
- **Tormentor:** an event narrator-villain who taunts you between levels but is never fought — cheap personality for puzzle meta-stories.

**🪝 Make it stick:** **"Grumpy Toddlers Torture Humans"** → Gremlin, Tormentor, Time, Human. (Rogers' fourth one is basically your little brother on the couch.)

---

## 14. How to Create the World's Greatest Boss Battle
**🧠 Big idea:** A boss is not just an oversized monster with a bloated health bar. It's a complex machine of separate, carefully designed parts — and it must be built on top of a *finished* player moveset.

**📋 The details:**
- **Definition (Rogers' "dictionary entry"):** a **boss** is a big and/or tough enemy that **stands in the way of progress** and acts as the **finale** of an area, level or world.
- First impression = huge enemy, huge health bar. That **underestimates** it: bosses have many unique working parts that each need thoughtful design.
- **Prerequisite:** before designing a boss, **fully define the player's move and attack set.**
- **Three ways to design a boss fight:**

| Approach | How it works | Player feeling | Book example |
|---|---|---|---|
| **Learned moves** | Fight built around the player's **existing** moves — nothing new to teach | "I've **mastered** these skills" | The Mario games |
| **New abilities** | Fight built around a **newly gained weapon or move**; the learning curve *is* part of the difficulty | "I figured out the new tool" | Many Legend of Zelda bosses |
| **Combination** | Mix both — they're not mutually exclusive | — | Stage it with **emphasis on one style**; don't try to do both at full strength at once |

**📱 F2P mobile translation:**
- **Learned moves** = most F2P bosses: a match-3 "boss level" uses the same matching rules with a nastier board; a survivor-like boss tests the build you've already assembled.
- **New abilities** = a boss level that debuts a new booster or hero skill, often right after it's unlocked in the FTUE — the boss *is* the exam for the new tool.
- **Definition check for F2P:** "blocks progression + climax of a world" = the **chapter-end level** in a puzzle map or the **stage boss** in an RPG campaign — usually also the biggest **difficulty spike** in that chapter (and therefore a hot spot for fail offers, boosters and churn — monitor it!).

**🪝 Make it stick:** *"Boss = Blocker + Climax."* And: *"Test what they know, OR teach-then-test — don't do both at full volume."*

---

## 15. Who's the Boss?
**🧠 Big idea:** Form follows function for bosses too — and beyond mechanics, ask what the boss **means**: what it represents to the hero, what it wants, what its job is, and what fans expect.

**📋 The details:**
- **Form follows function, boss edition:** knowing the boss's movement and attacks determines its appearance.
  - If it **shoots**, give it a gun (or a spell, a rocket launcher, or an enormous nose that sneezes projectiles).
  - If it **defends**, give it a shield (or a force field, armored cowling, or a missile-deflecting karate move).
  - In short: **if it can do it, it should visibly have it.**
- **What does the boss represent to the hero?** Rogers uses the 1960s–70s **James Bond formula** — three "boss types" (book drawing: a muscle goon, a cat-stroking mastermind, a doomsday device):

| Boss type | Who/what it is | Bond examples | In video games |
|---|---|---|---|
| **Physical adversary** (the arch-henchman) | A muscle-bound goon who pounds the hero until a gadget or clever move turns the tables (e.g., thrown into a piranha pool) | Jaws, Tee Hee, Oddjob | Monstrously large, freakishly hideous, very heavily armed |
| **Mental adversary** (the mastermind) | Fought at the **climax**; their intellect leaves the hero at a disadvantage against overwhelming odds | (the films' masterminds) | The boss climbs into a **robot suit** to blast the hero, or forces an **environmental puzzle** that, once solved, brings the cackling villain down |
| **Global threat** | Not a person — a **threat to the hero's world** that remains even after the mastermind falls | Goldfinger's nuclear bomb timer, Hugo Drax's deadly spore bombs, SPECTRE's spacecraft-swallowing rocket | The countdown/escape/stop-the-doomsday-device finale |

- **Boss design questions:**
  1. **What makes the boss a worthy adversary?** Most bosses out-class the player on **size, strength, firepower and defenses**; the player should already feel outmatched *before* the first blow lands.
  2. **What does the boss represent to the hero?** Often just an obstacle to true love (rescue the princess) or a threat to peace — don't settle for those tropes. Villains can embody the hero's **inner demons**: in Return of the Jedi, Luke must reject the dark side and become like his father to defeat the Emperor (or at least motivate dad to throw him down a shaft).
  3. **What does the hero get out of beating the villain?** Rogers says the prize should **not** be loot, weapons or power. Most stories let the hero merely save the world and restore the status quo — but the classic **Hero's Journey** sends the hero home carrying **knowledge**. In Indiana Jones and the Temple of Doom, Indy learns fortune and glory aren't everything.
  4. **What are the villain's own motivations and goals?** Better than "he's evil." Rogers suggests the **Seven Deadly Sins** as a starting point: **lust, gluttony, greed, sloth, wrath, envy, pride.** The Joker lives to create chaos and amuse himself; Voldemort wanted his body and power back. Whatever it is, it must **clash with the hero's goals** — the boss is the **primary obstacle**, and only by beating it does the hero truly succeed.
  5. **What's the boss's job?** Most game bosses are **guardians** — of a magic weapon, a captured princess, of progression itself. Stopping there does your villain a disservice: give it a **motivation**.
  6. **Is your game a licensed property?** Boss fights are the **highlight** of the fan's experience. If you're not a fan, research enough to know what fans want to *do*. A Star Wars fan will find a **lightsaber duel with Darth Vader** far more thrilling than shooting down his TIE fighter.
- Once motivation, goals, backstory, menace and attacks are in place, the usual shortcut to a boss that looks truly dangerous is to make it **enormous** → next section.

**🎮 Book examples:** James Bond villains (Jaws, Tee Hee, Oddjob; Goldfinger, Drax, SPECTRE), Return of the Jedi, Temple of Doom, the Joker, Voldemort, Star Wars licensed games.

**📱 F2P mobile translation:**
- **Visible function:** on a phone, a boss's weapon/weak point must be **readable at a glance** — big glowing cannon = "it shoots," glowing core = "hit here."
- **Physical / mental / global → event structure:** a 3-stage LiveOps event can end with a henchman boss (week 1), the mastermind (week 2), and a "global threat" finale where the whole server/guild cooperates against a world-ending timer (a natural fit for **guild/world boss** events).
- **What the hero gains:** F2P usually answers "loot" — but story-driven games (narrative puzzle metas, gacha RPG story quests) earn more emotional payoff by also granting **meaning**: a restored area, a recruited character, a revelation.
- **Licensed F2P games** (Marvel, Star Wars, Dragon Ball mobile titles): fans want to **play the iconic moment** — the signature duel, the famous transformation. Get that wrong and reviews will say so.
- **Seven sins** make fast event-villain briefs: greed (a pirate who hoards the event currency), envy (a rival who copies your hero — doppelganger boss!), pride (a champion who taunts).

**🪝 Make it stick:** *"Muscle, Mind, Megaton"* — physical, mental, global. And the boss's résumé needs a **motive**, not just "Job: guard door."

---

## 16. Size Matters — camera, patterns, the dance, the finishing blow
**🧠 Big idea:** Bigger boss = badder boss = bigger camera headaches. Build the fight from **learnable patterns** with four components, escalate it like a dance, help the player keep fighting, and let the player land the final blow.

**📋 The details:**
- **Camera rules for big bosses:**
  - Always **keep the camera locked on the boss** — it should own the player's attention. Neither the boss nor the player may slip out of frame.
  - Avoid a camera that's **too high**: a high angle **kills drama and the sense of scale**.
  - Avoid a camera that's **too low**: **foreshortening** makes it hard to judge distance to the boss and see incoming attacks; the camera can also **clip** through level geometry.
  - (Book diagram: a "too high!" camera at the giant's head and a "too low!" camera at the hero's feet.)
- **Use elevation** — in the level and on the boss — to fix reach and framing:
  - let the player **climb** geometry to reach higher parts of the boss, or
  - **lower the boss** to hero height at the right moment so the player can land a punch on its face.
  - Avoid **crotch whacking**: when the hero is only tall enough to hit the giant boss in the crotch. (Drawn, and exactly as undignified as it sounds.)
- **Big boss → big attacks.** Why throw rocks when you can throw cars, buildings, whole city blocks? The more dramatic, the more memorable. Inspiration: bombastic bosses in **Contra** and **God of War III**.
- But no matter how spectacular, the player needs a **chance to fight back**. They must work out **when it's safe to attack** — by memorizing **attack patterns**.
- **Patterns** are the heart of every traditional boss fight: several attacks and behaviors **strung together into a predictable sequence**.
- **Worked example — the giant laser mech** (4-panel figure):
  1. **Fig. 1:** the cannon's **laser sight sweeps** the arena three times.
  2. Once it locks on the player, it fires a **stream of laser blasts** — right, then left, then the middle of the arena.
  3. **Fig. 2:** the cannon **transforms** into a bigger weapon and **charges for about a second**.
  4. **Fig. 3:** it fires a **single thick beam that sweeps the ground** — avoidable only by **jumping** or ducking **behind cover**.
  5. **Fig. 4:** the attack ends; the mech's **chest cowling pops open and vents steam**, exposing its core.
  6. After a couple of seconds, the cowling **snaps shut in a burst of electricity** and the cannon reverts to its original form.
  7. The cycle **repeats until the player breaks it** — by taking damage, dying, or landing a successful hit.

```
 [sight sweep x3] → [blasts: R, L, C] → [cannon transforms + charges] → [ground-sweeping mega-beam]
        ↑                (PRIMARY)            (OPPORTUNITY)                 (INVULNERABLE ATTACK)
        |                                                                          ↓
  [electric burst pushes player away]  ←────────  [chest opens, vents steam = VULNERABLE STATE]
```

- **The four components of a boss fight** (from the mech):

| Component | In the mech example | Design rules |
|---|---|---|
| **Primary attack** | The laser blasts | Creates **movement patterns** the player memorizes and follows (the left/right/center sequence). Know the sequence → take no damage. Keep patterns **easy to remember**; you can **shuffle the order** for variety. **Random** patterns are possible, but many players can't read them and get frustrated if they don't "luck" into a good one. |
| **Invulnerable attack** | The charged mega-beam | A **dramatic, large-scale** attack that forces **evasive action**. The boss can't be hurt during it, so the player must play **defensively** — this **breaks up the play pattern**. |
| **Vulnerable state** | Chest cowling opens | Reveals the boss's **Achilles heel**; the player's best chance to deal **the most damage**. The weak spot must be **obvious** — make it **flash, glow, or highlight** it; it should stick out like a sore thumb. You can **prolong** it by **stunning/incapacitating** the boss (clear "free hits" signal). **End it with an attack/event** (the electric burst) that **pushes the player away** and tells them the window has closed. |
| **Opportunities** | The cannon changing form | Smaller attack **windows**, usually **shorter** than the vulnerable state. **Taunts** work well here too — but don't overuse vocal cues or players will tire of them. |

- **The boss fight as a dance** (drawing: hero and boss doing a tango, footprints on the floor):
  - **Alternate offense and defense** for both boss and player.
  - Get more mileage from each attack by changing **timing, speed and range** — but make sure the changes **escalate**.
  - Most bosses **start easy and get harder**. Hence **multiple rounds of patterns**: the boss gets angrier and the threats ramp up until the **climax** when it falls.
- **Keep the fight going** (even while the boss tries to kill the player):
  - Provide plenty of chances to **regain health or power** mid-fight.
  - **Dynamic difficulty** tools can programmatically work out what the player needs to succeed — applicable to **enemy AI, reaction times, almost anything**.
  - Delivering **the right power-up exactly when it's needed** makes the fight feel exciting and dramatic.
- **Rogers' confession — the easy final boss:** most games make the final boss the hardest; he has designed his to be **one of the easiest**, so the player ends on a **high note** feeling like the biggest badass on the planet. They already did the hard part: playing through the whole game.
- **Show the damage** as the player wins:
  - use **animations, sound cues and visual effects**;
  - a **robot** sprays **sparks**, a **fleshy** foe gushes blood or ichor;
  - bosses near death **limp or crawl**;
  - work with your artist so **parts get chopped off**, or use **several models** showing increasingly damaged states.
- **The rule: LET THE PLAYER ADMINISTER THE COUP DE GRACE.**
  - The **last strike must come from the player** — psychologically crucial for feeling the win.
  - It's the **climax** — **don't steal it** with a cutscene or canned animation.
  - Once the boss dies, let the player **savor it**: celebratory **text, music or effects**.
- **When the boss must escape** (story or licensing reasons):
  - Do it **with style** — escaping to fight another day shows it's a **worthy adversary** and that **another encounter is coming**.
  - The fight must still feel **satisfying** → use the **false kill**: first knock the boss **to its knees**, then it gets up and flees. **Hold the camera** on the beaten boss a moment; let it **curse the player's luck** (never their skill, of course). Make it **crystal clear the player won**.
- **When the player dies:**
  - Return them to a **safe spawn spot**.
  - The boss must **hold its attacks until the player has had time to get ready**.
  - Consider **keeping the boss's state** on respawn — resume the fight where it left off instead of restarting the whole sequence.

**🎮 Book examples:** Contra and God of War III (bombastic attacks), the laser-mech pattern figure, the dance drawing, the decapitation "coup de grace" drawing.

**📱 F2P mobile translation:**
- **Camera on mobile:** portrait screens are *narrow*. Many mobile games place the boss at the **top** of a portrait screen with the player below, or pull the camera back for boss waves — a mobile answer to "never let the boss or player leave the view." A **boss HP bar pinned at the top** is standard.
- **Pattern components** map directly to action-RPG and survivor-like bosses: telegraphed primary attacks with ground markers, an invulnerable "rage" phase, a **stagger/break** state where damage multiplies (common in gacha RPGs as **toughness/shield-break** mechanics — e.g., Honkai: Star Rail's Weakness Break), and short opportunity windows.
- **Escalating rounds = phases.** Mobile bosses commonly have **2–3 phases** marked by HP thresholds and a visual change.
- **Dynamic difficulty / "keep the fight going":** survivor-likes drop health pickups and power-ups during boss waves. In puzzle games, design options include gentler board seeding after repeated fails (label this a design technique; be transparent and avoid manipulative tuning).
- **"Keep the boss's state on respawn" → the revive/continue offer.** Revive-for-gems or revive-for-a-rewarded-ad keeps the boss at its current HP — Rogers' fairness idea became a monetization moment. Keep it **fair**: one free revive or an ad option, no pay-only walls.
- **Coup de grace + savor it:** end-of-level celebrations (Candy Crush's "Sugar Crush," leftover moves turning into fireworks) and big boss-kill slow-mo + loot burst. Never end a boss with an auto-play cutscene that robs the final tap.
- **Easy final boss** → in F2P there's rarely a "final" boss, but the principle applies to **event finales and chapter ends**: let the last fight feel triumphant so players leave the session on a high (great for D1/D7 retention).
- **False kill** → recurring event villain: knock it down, it flees, "returns next season."

**🪝 Make it stick:** **"PIVO"** — **P**rimary, **I**nvulnerable, **V**ulnerable, **O**pportunity — *"the boss PIVOts through its moves."* And: *"The player swings last. Always."*

---

## 17. Location, Location, Location
**🧠 Big idea:** Where a boss fight happens is as important as the fight itself. The arena is an extension of the fight — sometimes the level **is** the boss fight.

**📋 The details:**
- **Basic layouts:** a **circular arena** or a **linear, screen-wide walkway**. Both keep the camera pointed at the boss, which usually stays in the **middle or rear** of the space and only now and then wanders toward the sides and edges.
- **Add elevation** for more dynamic fights. Devil May Cry had a fight alternating between the castle **walls** and the castle **courtyard**.
- **Boss + environment:** how does the boss use the level to move or attack? **Dynamic elements** — collapsing statues or walls, break-away floors — keep things exciting and surprising as the arena gets wrecked by the boss (and the player). Bust the place up! **Caveat:** if the player has to **replay** the fight, a scripted collapse can go **stale**.
- **Best of both worlds: arenas with dynamic level elements.** Fill the arena with objects that **react to certain boss attacks/actions** — breakable windows, smashable floorboards, crushable computer consoles. Whatever order the boss hits them in, interesting things happen → a **different experience every time**. (Drawing: a horned giant smashing pillars while the hero scrambles.)
- **Scrolling battle:** player and boss fight their way **through several locations**. First decide **player locomotion**:
  - **on foot** (chasing each other?),
  - **on top of vehicles** — the moving train in Uncharted 2: Among Thieves, or car-hopping as in Wet,
  - **piloting vehicles** (or maybe they **are** vehicles!).
  - Warning: a scrolling boss fight takes **as much work as a full level, or more**.
- **Puzzle boss:** a boss that's actually **invulnerable** to direct attack. The player must **survive** its attacks long enough to **use level objects** to defeat it.
  - Spider-Man 2 (Activision, 2004): Spidey can't hurt the **Rhino** directly, but can trick him into charging into **electrified machinery**.
  - The most obvious (and funniest) puzzle boss: the Grinning Colossus in the web game *You Have To Burn The Rope* — the title tells you the solution.

**🎮 Book examples:** Devil May Cry (walls/courtyard), Uncharted 2 (train), Wet (car-hopping), Spider-Man 2 (Rhino), You Have To Burn The Rope.

**📱 F2P mobile translation:**
- **The level IS the boss** in puzzle games: a "boss level" is a board layout — the blockers' positions, the spreading threat and the move limit are the boss.
- **Arena lock-in:** many survivor-likes trap you inside a **ring/cage** when the boss spawns — Rogers' circular arena, created dynamically.
- **Dynamic arena elements** on mobile: explosive barrels, breakable walls, environmental hazards the boss can trigger — they add replay variety without new boss art (great for **repeatable** daily/weekly bosses, where "stale scripted collapse" is a real risk).
- **Tower defense:** map layout *is* the fight: choke points, multiple lanes, and paths that change mid-level.
- **Puzzle boss** = "use the environment" bosses in casual games (e.g., a boss you defeat by matching next to it or detonating boosters in its row).
- **Scrolling battles** are rare in F2P due to cost — but "runner" boss chases (being chased while dodging) are a cheap, effective variant in endless-runner games.

**🪝 Make it stick:** *"Real estate is half the boss."* Location, location, location — and sometimes the location is the monster.

---

## 18. Why Not to Create the World's Greatest Boss Battle — drama over scale
**🧠 Big idea:** Bosses have real downsides (cost, pacing, skill walls). One fix: swap a big **creature** for big **drama** — a personal, story-driven, interactive confrontation.

**📋 The details:**
- **Arguments against boss fights** (from some designers):
  - too **"old school"**;
  - they **grind progression to a halt**;
  - the effort needed for **one-off art, hard-coded behaviors and bespoke animations** doesn't pay back its price tag;
  - they act as a **skill gateway**: when people tell Rogers why they dropped a game, the culprit is usually **a boss that was too hard**.
- **Alternative:** flip the boss fight — make it about **big drama**, not a big creature. Make the fight **personal** and tied to **pivotal story moments**.
- **Paul Guirao's knife fight** (designer of *Dead to Rights*, *Afro Samurai*) — the best boss design Rogers had ever heard:
  - In prison, the player learns to **arm-wrestle** to win **cigarettes** (the game's currency while the hero is locked up).
  - At the climax, the villain knocks the hero down and tries to drive a **dagger into his eye**. The player uses the **arm-wrestling skill** to push the dagger away — and eventually turns it on the villain.
- **Why it's brilliant — four lessons:**

| Lesson | Explanation |
|---|---|
| **Emphasized drama over scale** | No rocket-firing colossus wrecking a city needed to be exciting. |
| **Intimacy creates urgency** | Very **tight camera** — just the two faces, their hands and the dagger — heightened the danger more than most games ever manage. |
| **Better utilizes existing assets** | Hero, villain, dagger and the **arm-wrestling HUD meter** were all already in the game. **Nothing new** had to be built. |
| **Told story with the boss fight, not cutscenes** | Games are **interactive** entertainment — as Rogers puts it, "playing the story is always better than watching it." |

- **Echo in Call of Duty: Modern Warfare 2 (spoiler):** at the end, the player character, stabbed in the chest by the villain (who is killing your commanding officer), must painfully **pull the knife out of his own chest** and throw it into the villain's eye in dramatic slow motion. Did Infinity Ward know Paul's idea, or was it an idea whose time had come? Either way — just as awesome as it sounded.

**🎮 Book examples:** Paul Guirao's arm-wrestling dagger fight; Call of Duty: MW2's knife finale.

**📱 F2P mobile translation:**
- **Skill gateways = churn walls.** In F2P, the "boss was too hard so I quit" problem shows up as a **cliff in the level funnel**. Watch per-level fail rates and churn at boss/hard levels, and tune them — hard levels should be *tense*, not *walls*.
- **Phones love intimacy.** A tight two-face close-up reads *better* on a 6-inch screen than a city-sized colossus. Drama-over-scale is **perfectly suited to mobile** — and cheaper.
- **Reuse existing mechanics as the climax:** the hero's core mechanic (match, merge, swipe, tap-timing) repurposed as the final confrontation = zero new systems, maximum payoff. E.g., hypothetical: a merge game's season finale where you must merge items under a countdown to "break the villain's spell."
- **Production cost** matters doubly in LiveOps — bosses that reuse rigs/animations with new patterns can ship every week; bespoke spectacle bosses can't.

**🪝 Make it stick:** *"A dagger an inch from your eye beats a robot the size of Tokyo."* Drama > scale.

---

## 🏆 Universal Truths & Clever Ideas
1. **Form follows function.** Decide what an enemy does before what it looks like.
   📱 so for F2P: write the stat/behavior row first; concept art second.
2. **Design enemies to complement and contrast with each other.**
   📱 so for F2P: rosters (TD lanes, survivor waves, match-3 blockers) should force "who do I deal with first?"
3. **Carefully balance an enemy's strength, speed and size** (the Three Ss trade off).
   📱 so for F2P: a unit that's cheap, fast *and* tanky is a balance-patch waiting to happen.
4. **Fighting enemies is supposed to be fun.**
   📱 so for F2P: juice every hit and kill — it's the moment-to-moment core loop.
5. **Enemies are meant to be fought, not avoided.**
   📱 so for F2P: if players skip a mode/enemy, the reward or fairness is off.
6. **Not every enemy attack has to do damage.**
   📱 so for F2P: stuns, knockbacks, drains, steals and debuffs add depth in RPGs and PvP.
7. **You always want the player to hate the enemy.**
   📱 so for F2P: give event villains a "they took something" moment that touches gameplay.
8. **Use dynamic difficulty to give the player some help.**
   📱 so for F2P: mid-fight pickups and fair assists keep players in the fight — stay ethical and transparent.
9. **Watch out for camera issues when creating a large-scale boss.**
   📱 so for F2P: portrait screens are narrow — frame the boss and player together, pin the HP bar.
10. **The setting of a boss fight matters as much as the opponent.**
    📱 so for F2P: in puzzle games, the board layout *is* the boss.
11. **The player has to give the boss the killing blow.**
    📱 so for F2P: never end a boss on an auto-cutscene; celebrate the player's tap.
12. **There are other types of enemies besides big stompy monsters** (gremlins, tormentors, time, other humans).
    📱 so for F2P: timers, move limits and other players are F2P's most common "enemies."
13. **Emphasize drama over scale.**
    📱 so for F2P: intimate, story-driven confrontations read better on small screens and cost less.

---

## 📱 F2P Deep Dive — enemies & bosses in free-to-play
*(Not in the 2010 book — this is the modern translation layer, built on the chapter's principles.)*

### A. Boss events in LiveOps
| Event pattern | How it works | Book principle it uses |
|---|---|---|
| **Clan/guild boss** | One huge shared-HP boss that a clan/guild hits over days; rewards scale with total damage (e.g., Raid: Shadow Legends' Clan Boss, AFK Arena's Guild Hunting) | Gigantic size = absurd HP; human cooperation as a "team player" layer; loot = reason to fight |
| **World/raid boss** | A boss appears for a limited time and players group up to beat it (e.g., Pokémon GO raids at gyms) | Time as a non-enemy enemy + dramatic intro (the egg hatch / countdown reveal) |
| **Weekly/daily bosses** | Repeatable bosses with capped rewards (e.g., Genshin Impact's weekly bosses) | Patterns players memorize; watch for "stale scripted set-pieces" on replay → use dynamic arena elements |
| **Event villain arc** | A themed villain appears across an event's chapters and is beaten at the finale | Joker moment, recurring villain, false kill ("they'll be back next season") |
| **Asymmetric PvP boss** | One player becomes the boss vs a team (Brawl Stars has run modes like this) | Human competitor + boss pattern design |

### B. Boss levels as difficulty spikes & monetization moments
- In puzzle games, chapter-end and "**Hard / Super Hard**"-labeled levels (Candy Crush Saga and Royal Match flag such levels) are the **boss levels**: they block progression and climax a chapter — Rogers' definition exactly.
- These spikes are where **boosters, extra-moves offers and revives** convert — and where players **churn**. Rogers' warnings apply directly:
  - **Skill gateway** risk → monitor fail rate and churn per level; soften true walls.
  - **"Keep the boss's state on respawn"** → continue offers keep progress; offer a **fair free path** (ad, earned booster).
  - **Coup de grace** → the win screen after a hard level should be the biggest celebration in the chapter.
- **Ethics line:** tension is fine; **engineered** failure or hiding the odds is not. Never make a boss *only* beatable with payment.

### C. Enemy readability on small screens — checklist
- [ ] **Silhouette test:** can you tell each enemy type apart as a solid black shape at thumbnail size?
- [ ] **Color coding:** enemies never share a hue with pickups/allies; elites have a consistent glow/aura.
- [ ] **Size tiers:** fodder < elite < boss, with obvious jumps.
- [ ] **Red Ninja/Blue Ninja:** a new behavior always gets a new look.
- [ ] **Telegraphs:** every damaging attack has a wind-up + ground marker or aim line, readable under your thumb.
- [ ] **Weak points glow;** vulnerable windows are obvious; window-closing has a clear "push-back" event.
- [ ] **Boss HP bar** pinned (top of screen), with phase markers.
- [ ] **"New enemy" card** on first encounter (name + one-line counter tip).
- [ ] **Clutter control:** fast death fades, limited on-screen corpses/VFX on low-end devices.

### D. F2P enemy design card (adapted from the chapter's attribute list)
| Field | What to fill in |
|---|---|
| Name + one-line fantasy | "Frost Yeti — a slow tank that freezes towers" |
| **Function / role** | Tank / runner / ranged / flyer / support / spawner / blocker |
| **Size tier** | Fodder / elite / mini-boss / boss |
| **Behavior archetype(s)** | Patroller, chaser, shooter, guard, flyer, bomber, burrower, teleporter, blocker, doppelganger |
| **Speed** (Three Ss check) | Non-mobile / slow / medium / fast / quick — and confirm it isn't fast AND strong AND big |
| **Movement style** | Straight / zigzag / arc / sideways / burst / ambush |
| **Attacks** | Melee / weapon / projectile / persistent (DoT) |
| **Grief tool** (non-damage) | Block, knockback, stun, freeze, heal, buff, thief, leech, surprise, resist |
| **Telegraph** | What the player sees/hears before each attack |
| **Weakness / resistance** | Logical and communicated how? |
| **Health** | Hits-to-kill / time-to-kill at expected player power |
| **Reason to fight** | Loot, path, key, power, taunt, feel badass |
| **Combo partners** | Which other enemies make it a combat puzzle |
| **Intro + death** | Entrance moment; death VFX; drop delivery |
| **Readability** | Silhouette, color, size checks passed? |
| **Production reuse** | Which rig/anims/textures it shares |

**Boss add-on fields:** design approach (learned moves / new ability), what it represents, motivation (a deadly sin?), physical/mental/global type, arena layout + dynamic elements, pattern (primary / invulnerable / vulnerable / opportunities), phases & escalation, assists during fight, damage states, coup de grace + celebration, escape/false kill?, respawn/continue rules, LiveOps reuse plan.

---

## 🧩 Connect the dots
- → **L03 (story):** three conflict types (man vs nature/self/man); the **Triangle of Weirdness** limits "against type" enemies; Hero's Journey for what the hero gains from a boss.
- → **L09 (level design):** arenas, elevation, choke points; the level as an extension of the boss fight; waypoint paths.
- → **L10 (combat):** player moveset must be finished before bosses; health display rules apply to enemies; solid combat = "feel like a badass."
- → **L12 (mechanics & hazards):** hazard vs enemy = mobility + AI; non-mobile enemies sit between the two.
- → **L13 (rewards & difficulty):** loot delivery on death, "don't baby the player," dynamic difficulty.
- → **L14 (multiplayer):** the human competitor as the ultimate non-enemy enemy; taunts, one-upmanship and revenge.
- → **F2P core loop:** fight → loot → upgrade → fight harder enemies. Enemies are the loop's resistance.
- → **F2P meta & LiveOps:** guild/world/weekly bosses, event villains, seasonal reskins (Red Ninja/Blue Ninja at scale).
- → **Monetization:** boss levels = boosters, continues, revives; keep a fair free path.
- → **Retention:** hard-level churn cliffs; an easy-ish triumphant finale ends sessions on a high.
- → **FTUE:** "New enemy" cards and learned-moves bosses as teaching exams.

## 🔁 Retrieval check (do it closed-book!)
1. What's Rogers' golden rule of enemy design, and which three team roles does it protect?
2. List the seven enemy attributes.
3. Name the five size classes and how a huge enemy should be fought.
4. Name all ten behavior archetypes. Which one is invulnerable while repositioning, and how does the teleporter differ from it?
5. Give two of Rogers' four enemy combos and explain why each works.
6. What are the Three Ss and why does a medium enemy with both strength and speed feel bad?
7. What did Naughty Dog's Crash Bandicoot 2 focus groups reveal — and where is the exception?
8. What's the Bruce Lee rule, and what two things does it protect?
9. Name the five pathing/behavior AI questions.
10. Name four ways to introduce an enemy dramatically and three ways to spawn enemies safely.
11. Why is the classic "exploder" a bad enemy, and what rule does it break? Give the six reasons to fight.
12. Name at least seven non-damaging grief tools and one rule for the thief.
13. How does Rogers recommend balancing enemy health?
14. What is a "Joker moment," and how did Demolition Man keep its villain present?
15. Name the four components of a boss pattern (from the laser mech), the three boss design approaches, and the four lessons of Paul Guirao's knife fight.

<details><summary>Answers</summary>

1. **Form follows function** — decide what the enemy does before how it looks. It protects the **programmer** (code), **animator** (rig) and **artist** (textures) from endless redos.
2. Size, behavior, speed, movement, attacks, aggression, health.
3. Short (≤ waist), average (≈ player), large (several heads taller), huge (≥ 2x player), gigantic (only fully visible from afar). Huge: needs low, medium **and** high attacks — a vulnerable head may require a jump attack ("fight your way up").
4. Patroller, chaser, shooter, guard, flyer, bomber, burrower, teleporter, blocker, doppelganger. The **burrower** is invulnerable underground while moving into position (you wait for it to emerge); the **teleporter** moves **instantly**, so you must attack fast — and need a disruption tool like a stun.
5. Blocker + shooter behind (you chip the shield while being shot); big chaser + small flyers (whichever you target, the other punishes you); teleporter + chaser (chasing one exposes you to the other); guard + bomber (pinned by the guard, bombed from above). They force **threat analysis**.
6. Speed, size, strength — inversely proportional (small = fast/weak, big = strong/slow). A medium enemy that's both strong and fast has an advantage the player can't match — it feels **cheap**, like fighting a computer.
7. Players found the less-patterned, more "behavioral" AI **inferior** — they enjoyed learning patterns. Exception: **sports games**, where predictable patterns become exploitable holes.
8. Large groups surround the hero but attack only **one or two at a time**. It creates the illusion of a crowd without overtaxing the **game** (performance) or the **player** (difficulty).
9. How **mobile**? How **aggressive**? How much of a **team player**? How **defensive**? How **versatile**?
10. Intro: freeze/zoom the camera; show the enemy's name; foreshadow (RE2 licker past the window); dramatic entrance (Devil May Cry smashing through windows/doors). Spawning: invulnerable on spawn; spawn off-screen; a hazard/mechanic that delivers them (Maximo's coffins).
11. Cameras rarely show it chasing you, so there's no warning — the only answer is avoiding it. Rule: **enemies should be fought, not avoided**. Reasons to fight: they have the **loot**, they **block the path**, they have the **key**, you can **take their power**, they're **taunting** you, and fighting makes you **feel like a badass**.
12. Block/parry, knockback, stun, freeze/paralyze/capture, repair/heal, buff, thief, leech, unexpected behaviors, vulnerabilities/resistances. Thief: give a fair chance to recover the item, and **never steal anything bought or earned through progression**.
13. Like player health: balance it against the player's attacks, starting from **hits to kill** and considering **every** attack (goblin: 3 normal hits, 1 holy-sword hit). Display it using the player-health rules from Level 10.
14. A scene where the villain does something truly evil (e.g., executes a henchman) to prove they're bad. Demolition Man's Simon ran onscreen at the start of every level, shook his fist at the player and ran off.
15. Components: **primary attack, invulnerable attack, vulnerable state, opportunities**. Approaches: **learned moves** (Mario), **new abilities** (Zelda), **combination** (emphasize one). Guirao lessons: **drama over scale; intimacy creates urgency; reuse existing assets; tell the story through the fight, not cutscenes.**
</details>

## 🎯 Side quests (5–15 min each)
1. **Gumdrop roster (10 min):** draw one simple blob and give it 10 props — one per behavior archetype (beanie = flyer, shield = blocker…). Proof that one model can carry ten behaviors.
2. **Combo chef (10 min):** invent 3 new enemy combos *not* in the book (e.g., healer + burrower). For each, write the "threat analysis" question the player has to answer.
3. **Three-Ss audit (10 min):** pick 6 units from a game you play (Clash Royale, a TD, a survivor-like). Rate each on speed/size/strength 1–5. Flag any that score high on all three — "cheap" candidates.
4. **Telegraph translator (10 min):** for 5 attacks, write the tell — one visual, one audio, one ground marker — that would read on a phone screen held in portrait.
5. **Grief toolbox remix (10 min):** design a puzzle-game blocker for each of 4 grief tools (thief, leech, freeze, heal). E.g., a "thief" crow that steals a booster from the board unless matched within 2 moves.
6. **Villain in a sentence (5 min):** write a LiveOps event villain using a deadly sin + a "Joker moment" + what they take from the player *in gameplay terms*.
7. **Red Ninja/Blue Ninja (10 min):** take one enemy and make three variants with different behaviors. Describe the single visual change that signals each.
8. **Arena doodle (15 min):** sketch a portrait-mode boss arena with 3 dynamic elements the boss can destroy, and mark where the camera frames boss + player.

## ⚔️ Main quest (homework)
**Quest 1 — Design a complete F2P boss event (≈ 90 min)**
Pick a genre (survivor-like, match-3, tower defense, or auto-battler RPG). Deliver a 1–2 page boss design doc using the F2P enemy design card + boss add-on fields:
- design approach (learned moves vs new ability), what the boss represents, motivation (deadly sin), physical/mental/global type;
- a **PIVO** pattern table (primary, invulnerable, vulnerable, opportunity) with **telegraphs**, and 3 escalating phases;
- arena layout with at least 2 dynamic elements;
- intro moment, damage states, coup de grace celebration, false kill or recurrence plan;
- player-death/continue rules with a **fair free path**;
- readability checklist results;
- a LiveOps reuse plan (how to rerun it next month without going stale).

✅ **Done when:** every field is filled; every damaging attack has a tell; the vulnerable state has a clear start and end signal; you can explain why a non-paying player can beat it. Bonus: post a one-image summary publicly (#buildinpublic) and ask for feedback on readability.

**Quest 2 — Enemy roster teardown (≈ 60 min)**
Choose one F2P game with enemies or blockers. Catalogue 8–12 enemies/blockers into a table: archetype, size tier, speed, grief tool, telegraph, reason to fight, combo partners. Then write 5 bullet recommendations using this chapter's rules.
✅ **Done when:** each row maps to at least one book archetype, and you've identified at least one "cheap" or unreadable enemy with a concrete fix.

## 🔬 Play Lab
1. **Clash Royale (10 min)** — Look for: which cards map to Rogers' archetypes (chaser, shooter, flyer, bomber, burrower, blocker). Question: which card breaks the Three-Ss trade-off the most, and how does its cost balance it?
2. **A survivor-like (Survivor.io or similar) (10 min)** — Look for: spawn locations, elite readability, boss intro, the arena lock-in, and death/loot juice. Question: how does the boss fight signal its vulnerable windows — and is the final blow celebrated?
3. **Candy Crush Saga or Royal Match (10 min)** — Look for: blockers and how each "behaves" (spreads, has layers, locks, counts down). Play a "Hard" level. Question: which book enemy archetype does each blocker resemble, and where does the game present a monetization moment around the "boss" level?
4. **Plants vs. Zombies 2 (10 min)** — Look for: how new zombie types are introduced, and Red Ninja/Blue Ninja variants. Question: how does the game teach each zombie's weakness before you need it?

## 🗣️ Feynman check
Explain to a 12-year-old in 60 seconds: **why a great boss fight is a "dance" with four steps (attack you dodge, big attack you survive, weak spot you hit, short openings you grab) — and why the kid must always land the final hit.**

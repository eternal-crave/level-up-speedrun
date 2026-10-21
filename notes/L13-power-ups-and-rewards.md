# ⚡ Level 13 — Now You're Playing with Power — Power-ups & Rewards
> 📖 Book pp. 355–379 · ⏱️ ~70 min study · 📱 F2P relevance ★★★★★ — boosters, currencies, shops, chests, passes, achievements, collections, praise: this chapter is the raw material of every F2P economy and reward loop.

## ⚡ TL;DR — the 30-second version
- **Power-ups** are concentrated, immediate (usually temporary) power. They come in **four families: defensive, offensive, movement, game changers.** Design how each looks, is collected, stacks, trades off and *expires*.
- **"Love thy player."** The designer is a gentle hand pushing the player upward: **dynamic difficulty balancing, optional difficulty drops, rubberbanding, sensible length, autosave.** Never measure design in player deaths. If it *feels* too long, hard or boring, it **is**.
- **Greed + reward are the two most powerful tools to keep people playing.** Never underestimate the player's greed, and use it for good (motivation, collections, "me too", guiding trails), not to lure players to their deaths.
- **Rewards:** show them early, give them soon and often with variety and surprise, celebrate wins with absurd fanfare, and make them *matter*. **The best rewards are hard won.**
- **Economy 101 (from 2010!):** escalating coin values, rarity tiers, price by *when* you want items earned, put enough money in the world, watch out for farmable regenerating treasure, rotate shop stock, and always offer a choice between two great things.
- **Ten reward types:** scoring, achievements, treasure, loot, power-ups, souvenirs, bonus materials, praise, surprise, progression. **Some rewards are just for fun.**

## 🗺️ Chapter map
- [ ] 1. Power-ups: design questions, collection, the four categories, mobile/conditional/anti-power-ups
- [ ] 2. "Love Thy Player": DDB, difficulty adjustment, rubberbanding, length, autosave, designer blinders
- [ ] 3. More Wealth Than You Can Imagine!: greed, reward rules, the 10 reward types (scoring → progression), economy, shops, loot, souvenirs, bonus materials, praise, surprise
- [ ] 4. 📱 F2P Reward & Economy Toolkit (beyond the book): boosters, schedules, daily rewards, chests/gacha, passes, currencies, sources & sinks, collection meta, the ethics line
- [ ] 5. Universal Truths & Clever Ideas

---

## 1. Now You're Playing with Power — power-ups
**🧠 Big idea:** A **power-up** is concentrated action. Touch it and you're instantly faster, stronger, tougher or back from the dead. Effects are **immediate** (the joy) and usually **temporary** (the catch). Power-ups exist in every genre (driving, puzzle, action-adventure, shooters). Enemies drop them, chests and breakables hide them, and sometimes they just lie in the road.
- *Book figure:* a stick figure leaping joyfully, launched off a row of glowing spiky orbs. Power-ups should look like *that*.

**📋 The details:**

### 1a. The power-up design questionnaire
Ask these for every power-up:
1. **What does it do?**
2. **What does it look like?** How do it (and its effects) **stand out** in the world? Does it glow or strobe, rotate or bounce?
3. **Stacking:** can power-ups be **combined**, or is only one active at a time? Can the player **retrieve unused or discarded** ones?
4. **Effect on the player:** movement? speed? number or type of attacks? health or status?
5. **Communication:** how are its effects shown **visually** and **aurally**?
6. **Trade-off:** what does the player give up? Some power-ups reduce speed, mobility or available moves while active.
7. **Expiry cues (if temporary):** how is the player warned that it's about to run out: through the **HUD, a visual signal, a sound effect, or a shift in the music**? Or does it last **until you lose a life**?

### 1b. How is it collected? (book figure: a "distance" bar numbered ①–④)
1. **Walk over it** to collect it (contact).
2. **Reach out and actively choose** to pick it up (button press).
3. **Auto-attract:** it flies to the player inside a certain radius. Decide **how close** and **how fast**.
4. **Proximity activation:** the effect triggers when the player simply gets near.
- **Why it matters:** knowing the pickup distance helps you design what the power-up does once collected (and how it fits level layouts and player metrics).

### 1c. The four categories of power-ups
**🛡️ Defensive:** help the player survive damage and keep progressing.

| Power-up | What it does | Book notes |
|---|---|---|
| **Health-up** | Refills health, partially or fully | If refill amounts differ, **make them look different** |
| **Ability recharge** | Like a health-up, but refills an ability meter | |
| **Extra life** | +1 life/restart after you run out of health | |
| **Invulnerability** | Enemies and their attacks can't hurt you | You usually **still suffer physics/geometry hazards** (e.g., falling off a cliff), or collision detection breaks |
| **Invincibility** | Can't be hurt *and* destroys most enemies on contact | Metroid's screw attack, Mario Kart's super star. Often **doesn't work on bosses** or does only minor damage |
| **Protective** | Temporary force fields, shields or auras vs. projectiles, fire, poison floors | May have its **own health meter**. Unlike invuln/invinc., usually **upgradable, modifiable and extendable** by the player |
| **Indirect attack** | "Fire and forget" traps dropped behind you: smokescreens, oil slicks, cartoon bombs | Car-combat and kart racers; wreaks havoc on whoever's behind |
| **Smart bomb** | Clears the screen | For when things get too tough, or the player needs a breather. *(Book figure: a glowing hero; two skeletons mutter that they're doomed.)* |

**⚔️ Offensive:** improve or modify attacks so the player beats enemies faster, more efficiently or more spectacularly.

| Power-up | What it does | Book notes |
|---|---|---|
| **Ammo boost** | Fully restocks ammo | Usually tied to a specific weapon |
| **Buff** | Temporarily raises skills/abilities | Anything from fantasy combat to basketball; fiery visual flourishes are a bonus, not a requirement |
| **Multi-weapon** | Improves the current weapon *without fundamentally changing it* | Contra's spread gun (5 shots in a fan); heat-seeking rockets |
| **Weapon upgrade/swap** | Raises strength/speed/damage, **or** swaps to a new weapon (stronger, or equal but better suited to a situation) | New visuals accompany it. Ghosts 'n Goblins: lance → dagger → torch. Flamethrowers, rocket launchers, shotguns |
| **Damage modifier** | Adds an element: flame, poison, ice, electricity | Improves base damage, with dynamic visuals |
| **Direction** | Lets you fire behind, above, below; or makes projectiles home in | Common in shooters |
| **Companion** | A small helper appears beside you for extra attack or shielding | May or may not have HP; lasts until you die or for a set time. **Galaga (1981):** a captured ship becomes your partner. You lose a life but gain double shot |

**🏃 Movement:** improve existing movement or add new moves. **⚠️ Account for these when setting player metrics** (jump heights, gaps, speeds) or they'll break your levels.

| Power-up | What it does | Book notes |
|---|---|---|
| **Speed change** | Nitro and similar boosts for extreme speed | Trade-off: **less control**, since reactions must be faster |
| **Access** | Reach normally unreachable places by flying, helicoptering, gliding, swimming | Mario's bee suit (Super Mario Galaxy) |
| **Size change** | Grow or shrink, which unlocks a suite of abilities (like fitting into tiny holes) | Super Mario Bros.' super mushroom: bigger, one extra hit, breaks bricks to reach new areas. New Super Mario Bros.' mini mushroom: shrink and leap huge distances |

**🎲 Game changers:** significantly alter the dynamics of play.

| Power-up | What it does | Book notes |
|---|---|---|
| **Score/treasure modifier** | Multiplies the value of points/treasure for a while | Crazy Taxi's fare multiplier; Rock Band's star power |
| **Change state** | Flips the rules | Pac-Man: you flee ghosts until a power pellet turns *them* vulnerable and you become the hunter |
| **Magnetic** | Pulls treasure toward you | Removes the risk of entering danger and the chore of "cleaning up" loot after a fight |
| **Invisibility/disguise** | Temporarily undetectable by enemies and hazards | Avoid deadly fights; slip past annoyingly alert guards |
| **Comedy** | Exists only to surprise and amuse | MDK's "Earthworm Jim" power-up drops a cow on enemies' heads |

### 1d. Mobile, conditional and anti-power-ups
- **Mobile power-ups:** most sit still waiting to be eaten, but some have a sense of self-preservation. Super Mario Bros.' super mushrooms slide away after popping out; MDK's **"cowardly power-up"** runs and hides when it sees you.
  - **Rule:** give players a fair chance to catch them. **Never faster than the player, and never immune to a magnetic power-up.**
- **Conditional power-ups** only work when conditions are met. In Maximo: Ghosts to Glory (Rogers' own team's game, hence "we had..." in the book), one armor power-up only worked once you'd collected the **full armor set**; another required a **special ability** to activate. **Fine to use, as long as the conditions are clear.**
- **Anti-power-ups** are the evil designer's booby-trapped bonbon: a gorgeous candy with a revolting filling. They look like normal power-ups but are **poisonous**, sapping health, slowing movement, draining experience, even turning you into a zombie with **reversed controls**. Fun **once or twice**, so use them **sparingly and carefully.**

**🎮 Book examples:** Metroid (screw attack), Mario Kart (super star), Contra (spread gun), Ghosts 'n Goblins (weapon swaps), Galaga (captured-ship companion), Super Mario Galaxy (bee suit), Super Mario Bros./New Super Mario Bros. (mushrooms), Crazy Taxi & Rock Band (multipliers), Pac-Man (power pellet), MDK (cow drop, cowardly power-up), Maximo (conditional armor).

**📱 F2P mobile translation — power-ups became *boosters*, the single biggest consumable category in casual F2P:**

| Rogers' category | F2P equivalents (real examples) |
|---|---|
| **Earned in-play power-ups** (skill) | Match-3 **special pieces** made by matching 4–5+: Candy Crush's striped and wrapped candies and color bombs; Royal Match's rockets, TNT and light balls. Free, earned, *the core fun*. |
| **In-level boosters** (consumable, chosen mid-level) | Candy Crush's Lollipop Hammer, Royal Match's hammer-style boosters: tools you spend to break a stuck board. Rogers' **smart bomb / weapon** logic. |
| **Pre-level boosters** (chosen before play) | Start the board with special pieces already placed. Rogers' "conditional" + "buff" logic, and a key **soft-currency/booster sink**. |
| **Defensive → extra moves / extra life** | "+5 moves" continues, unlimited-lives timers, Subway Surfers' **hoverboard** (survive one crash), Duolingo's **streak freeze** (protects a streak), Clash of Clans' **shield** after you've been raided. |
| **Offensive (multi-weapon / direction / damage / companion)** | Archero-style level-up abilities: Multishot (multi-weapon), front/rear/side/diagonal arrows (direction), elemental fire/ice/poison/bolt effects (damage modifier), orbiting spirits or drones (companion). Brawl Stars Showdown **power cubes** (stacking buff). |
| **Movement** | Subway Surfers' Jetpack and Super Sneakers (access/speed), Mario Kart Tour's mushrooms. |
| **Game changers** | Subway Surfers' **Coin Magnet** (magnetic) and **2× multiplier** (score modifier); "Double XP weekend" and "2× coins for 30 min" boosts in many games. |
| **Collection radius** | Survivor-likes (Survivor.io and similar) give XP gems a pickup radius you can upgrade; a magnet pickup vacuums the whole screen. That's Rogers' ①–④ distance diagram as a progression stat. |
| **Conditional** | **Set bonuses**: Genshin Impact artifacts give bonuses for 2- and 4-piece sets, and many RPG gacha games use gear sets. Rogers' Maximo armor set, scaled up into a whole collection loop. |

- **Rogers' questionnaire is a booster spec template.** For every F2P booster, write down: effect, visual, stacking rules, trade-off, duration/expiry cue, **acquisition** (earned vs. bought vs. rewarded ad), and **price/sink role**.
- **Expiry cues on mobile:** countdown rings, flashing icons, a "last 5 seconds" sound. Players who lose a paid boost without warning feel robbed.
- **Anti-power-ups are rare in F2P** for a good reason: when players may have *paid* for consumables, a fake "gift" that hurts them feels like theft. Negative surprises belong in skill-based hazards, not in the reward stream.
- **⚖️ Ethics line:** an earned special piece is delight. A booster that makes a level *beatable only if bought* is a paywall dressed as a power-up. Healthy F2P gives boosters for free regularly (level rewards, events, login gifts) so they read as **help**, not **ransom**.

**🪝 Make it stick:** **"D-O-M-G"** = **D**efensive, **O**ffensive, **M**ovement, **G**ame changer ("**D**on't **O**verthink **M**y **G**ummies"). Picture Pac-Man eating a power pellet while wearing Mario's bee suit, on a hoverboard, magnet in hand, with a cow falling from the sky.

> ⚠️ **2010 → 2026:** Rogers' power-ups are mostly *found in the level* and free. F2P split them into three streams: **earned** (special pieces), **gifted** (rewards, events), and **sold** (booster packs, continues). His design rules still apply; the new question is **economy**: where does each booster come from, how many are in circulation, and does the free supply keep the game fair?

---

## 2. "Love Thy Player"
**🧠 Big idea:** A Japanese game director once told Rogers that every designer's motto should be **"Pureiya aishi nasai"**, roughly "love the player". (Footnote: a different director from the "fisherman" story in Level 4.) Rogers' own (more pronounceable) version: **the designer should be the gentle hand on the player's backside, always boosting them upward.**
- *Book figure:* a giant hand launching a grateful stick figure into the air.

**📋 The details:**
- **Player-enabling systems covered in earlier Levels:** checkpoints, hoists and teeters (helping the character up/over ledges), aim assist, ramping difficulty.
- **New ones in this chapter:** dynamic difficulty balancing, difficulty level adjustment, rubberbanding, game length, autosave.

### 2a. Dynamic difficulty balancing (DDB)
- **Adjusts challenge *and rewards* based on how the player is doing.**
  - Dying too often to an enemy? Quietly **lower its health** a bit or make it **attack less often**.
  - **Low on health when opening a chest?** A **health-up** pops out. **Healthy?** You get **treasure** instead.
- **Goal:** give players **what they need, when they need it**, to propel them toward success.

### 2b. Difficulty level adjustment
- After detecting trouble (e.g., **many deaths**), offer to **drop to a lower difficulty**.
- Two options: **let the player decline** or **switch automatically**. Rogers **doesn't recommend automatic**: many players find it **insulting**.

### 2c. Rubberbanding
- Mostly in **racing games**, but useful anytime the player must **follow or catch** someone. If the player falls too far behind, opponents **slow down** enough to let them catch up. Racing on an empty track is no fun.
- *Book figure:* two go-karts tied together with a rubber band.

### 2d. Game length as a difficulty dial
- **Length is a difficulty tool.** In a battle arena, **10 minutes** of fighting with decent health and modest skill is survivable. Stretch it to **30 minutes** and **fatigue and attrition** set in, and the player probably won't make it.
- Rogers' **very important thing:** **IF A LEVEL OR FIGHT FEELS OVERLONG, TOO TOUGH, OR DULL TO YOU, IT PROBABLY IS.** Go with your gut (Star Wars joke included).
  - You'll play each level **a thousand times or more** (footnote: building, populating, testing mechanics/hazards/combat, placing and re-placing collectibles, then formal playtesting), so you *will* know when it's boring.
- **⚠️ Designer blinders:** after playing so much, **you need a much harder level to feel challenged** than customers, who'll play it only a few times. Rogers has seen this many, many times; the book's fix comes in **Level 17**.
- Meanwhile: **tighten the level and strip out the dull stretches. Boredom is the enemy!** Be willing to **cut** pieces whenever that improves the game.

### 2e. Autosave
- The game **periodically saves automatically**, so players focus on playing rather than juggling save files.
- Protects players when the game **crashes** (the footnote teases that of course YOUR game never crashes) or when they **forget to save** before a critical moment and die.
- Common pattern: **autosave whenever a new area loads** (e.g., Fallout 3).

### 2f. What NOT to do: the anti-examples
- **"The player has to die three times."** A creative director told Rogers to make a mildly-too-easy encounter so hard that **players must die three times before progressing**. Rogers privately thought this was idiotic, kept his job, and **didn't do it**. Neither should you.
  - **Never use player deaths as the measure of a good design.**
  - Handing the player damage or death as a "reward" is **negative reinforcement**.
- **The Maximo mimic chest:** a treasure chest that snaps and attacks like a dog when opened. Fun to design, but players started **cringing before opening any chest**. Fun for the designer, not for the player, which **defeats the point of the game: having fun.** Players will hate you and quit, and **the designer's ultimate goal is to keep the player playing.**
  - Rogers' fix if he did it again: **give clues** so players can spot and prepare for it, such as a **color change**, or **wobbling pots** with an enemy inside (Legend of Zelda: Spirit Tracks).
- **The win-win:** players who can **finish the whole game** are happy. They **tell others** how much they liked it and **buy your next game**.

**🎮 Book examples:** treasure chest DDB (health vs. treasure), racing rubberbanding, Fallout 3 autosaves, the "die three times" director, Maximo's mimic chest, Zelda: Spirit Tracks' wobbling pots.

**📱 F2P mobile translation:**
- **"Keep the player playing" is literally the F2P business model.** Rogers' ultimate goal = **retention** (D1/D7/D30). His win-win (happy players recommend you and buy the next game) = **word of mouth, ratings, and LTV**.
- **DDB in F2P:** many casual and puzzle games adapt to the player: friendlier boards or extra help after repeated fails ("loss-streak relief"), easier early matches, and "need-based" drops like Rogers' chest that gives health when you're low. This is the **good** use of DDB: help when it's needed.
  - **⚖️ The dark mirror:** using the same machinery to make things *harder* for players predicted to pay, or to time "almost-wins" right before an offer. Engagement-driven difficulty and matchmaking are real, debated practices in the industry. **Rogers' test:** is the system helping the player succeed, or steering them toward a purchase?
- **Rubberbanding → matchmaking & bots.** Mobile PvP rubberbands at the *matchmaking* level: many shooters and party games (PUBG Mobile among them) fill low-rank lobbies with **bots** so new players win early. Trophy/rank systems try to match you with similar-skill opponents. Kart racers on mobile still rubberband AI racers. Be honest that bots exist; hiding them erodes trust if players find out.
- **Difficulty adjustment → optional, never insulting.** F2P rarely has difficulty menus, but the principle survives: offer help (a free booster, a hint, a skip) rather than silently downgrading the game, and don't make players feel stupid.
- **Game length → session length.** Rogers' 10-minute vs. 30-minute arena maps to F2P session design: typical casual sessions are a few minutes. A level that drags past its welcome **causes fatigue and churn**. Long events should be broken into bite-size tasks.
- **Designer blinders are deadly in live games.** Live teams play their own game every day and drift toward making content too hard. The fix is **data + fresh testers**: watch funnel drop-off per level, win rates, attempts-per-level, and run playtests with new players (→ L17).
- **Autosave → cloud save + instant resume.** Non-negotiable on mobile.
- **"Die three times" in F2P = designing levels to fail to sell boosters.** Exactly what Rogers refused. Hard levels are fine; levels that exist to force spending are the creative director's bad idea at scale.
- **Mimic chest in F2P = the disappointing mystery box.** If chests and gacha pulls are usually junk, players start flinching before every chest, and the reward ritual loses its magic. Clear odds and guaranteed minimum value keep chests trustworthy.

**🪝 Make it stick:** **"The gentle hand, not the boot."** Picture a coach giving the player a boost over a wall versus a bouncer kicking them off it. DDB = a vending machine that reads your mood: hungry? snack. Fine? coins.

> ⚠️ **2010 → 2026:** Rogers wrote for premium games where "finish the game" was the goal. In F2P there's often no end, so "finishing" becomes **"staying"**. His love-thy-player toolkit transfers almost 1:1 to retention design. The new risk is that the same tools (DDB, matchmaking) can be tuned for revenue instead of fun, which is why the ethics line matters.

---

## 3. More Wealth Than You Can Imagine! — greed, rewards and the economy
**🧠 Big idea:** The section opens with a Han Solo epigraph (his cocky reply that he can imagine quite a lot of wealth). Designers have several tools to keep players playing (**mystery, delight, pride and power** were covered earlier), but the **two most powerful are greed and reward.**

### 3a. Greed
- **Greed makes players do interesting things:**
  - grind through the grindiest MMOs for a stronger sword, a unique hat, the next level;
  - leap onto the tiniest trap-covered platform for **one more coin** (*book figure: a nervous stick figure on a pillar between a flame jet, a swinging axe, a sword-wielding goblin and two cannons, reaching for a single coin and deciding it's worth it*);
  - fight the biggest, meanest enemies to see **what happens next in the story**, or to earn **that achievement**.
- Rogers' **very important thing:** **NEVER UNDERESTIMATE THE GREED OF THE PLAYER.**
- **Use greed for good, not evil.** Evil = luring players to their deaths to prove you're cleverer than them. Good uses:
  1. **Promise treasure and items** to motivate fighting enemies.
  2. **Give players a personal, customizable space to show off trophies and rewards.** Once the "shelves" start filling up, they'll want to **collect them all**.
  3. **Exploit the "me too" factor** (keeping up with the Joneses), especially in multiplayer. Rogers was minding his own business in **World of Warcraft** when another player rode past on a **mechanical chicken mount**, and his goal instantly switched from "reach the next level" to "I *need* that robot chicken". *(Book figure: an armored rider on a steampunk chicken; an onlooker begging for one.)*
  4. **Create placement "guidelines" for treasure and secrets** that sharp players can learn and be rewarded for noticing. In Maximo, **buried treasure was always next to trees**, or, in levels without trees, next to similar **vertical features** like pillars or gravestones.
  5. **String collectibles through the level to guide players**, like the dots in Pac-Man World or the rings in Sonic games. *(Book figure: a stick figure happily munching a trail of dots, with no idea what they are and no intention of stopping.)*
  6. **Half-Life's four-step item introduction:** the player (1) **hears about** a new item from another character, (2) **sees** another character **holding** it, (3) **sees it used** by another character, and finally (4) **gets and uses it** themselves. By then they know what it looks like, what it is and what it does, **and they want it.**

### 3b. Rewards: the rules
- A **reward** is what the player is ultimately working toward. A game needs a **victory condition** to exist at all, and **no victory should ever come without a reward attached.**
- **The four reward rules:**
  1. **Show available rewards early**, so the player has a to-do list for the whole game and knows what each goal earns.
  2. **Reward as soon as possible, reward often, and add variety and surprise.**
  3. **A win must show evidence of success, and there's no such thing as too much fanfare.** Be dramatic, exciting, goofy (even very goofy): fireworks, sweeping camera pans around the hero, the character jumping for joy, cheering crowds, **slot-machine sounds**, visual effects and **particles, particles, particles**. The player should feel like they just won a world war, hit the game-winning run and won the lottery, all at once.
  4. **Make the reward matter.** Hand over something that gives a **boost in the next level** and **fixes a pain point from the previous one.** The ideal reward is something players **only realized they needed once they had it.**
- **The 10 reward types:** **scoring, achievements, treasure, loot, power-ups, souvenirs, bonus materials, praise, surprise, progression.** (Power-ups were section 1; the rest follow.)

### 3c. Scoring
- In gaming's "prehistoric" era (Rogers jokes about rocks tied with vines and yelling at kids to get off his lawn), **the only reward was a high score**: a number plus **three initials**.
- Seeing your initials on an arcade screen was like **writing your name in wet cement**: public proof you mastered the game… until the machine was switched off for the night and the table reset. (Footnote: that's why scoring at a 24-hour convenience store was best: it never closed.)
- Many players **thrive on competition, even against themselves**, and love **bragging rights**.
- **History of scoring:**
  - **Late 1990s:** as arcades died and play moved to PCs and consoles, scores looked old-school, a leftover from designs built to **keep players feeding quarters**. **100% completion and story endings** (full cutscenes) seemed sexier. Scoring was almost extinct.
  - **Early 2000s revival:** browser games like **Bejeweled** (PopCap, 2001) and **Feeding Frenzy** (PopCap, 2004), then **online leaderboards** on Xbox Live and later PlayStation Network, made scores matter again, and they've stayed lively since.

### 3d. Achievements
- **Achievements are high scores with personality.** The book credits their debut to **Halo 2 on the Xbox 360**. *(⚠️ Fact-check: Xbox 360 achievements launched with the console in 2005; Halo 2 was an original-Xbox game whose later Windows port had achievements. The principle is unaffected.)*
- They let players **show off skills and brag**. Valid achievements: do a task **X times**, complete goals (beat bosses, collect a specific item or *all* items), or just **finish the game**.
- **Design notes:**
  - Fun for developers to create: **clever names and fun icons**.
  - Lists are usually **published before release**, so they act as a **to-do list**.
  - A great way to **point players toward gameplay ideas they'd never think of trying.**
  - Can be awarded for **anything** the developer likes.
- **Rogers' favorite achievements** (each shows a different flavor):

| Achievement (game) | What it rewards | Flavor |
|---|---|---|
| Press start (The Simpsons Game) | literally starting | joke/gimme |
| Died on Easy (50 Cent: Bulletproof) | failing on the easiest setting | self-mockery |
| Hide five bodies in hay bales (Assassin's Creed II) | a niche stealth action | encourages play-style experiments |
| Doff your hat in the enemy's freeze-cam shot (Team Fortress 2) | taunting politely (you kill someone and tip your hat so the freeze-cam still the victim sees after dying shows it) | social/comedy |
| Six degrees of Schafer (Brütal Legend) | playing **with or against** anyone who has it, so some link in the chain has played with creator Tim Schafer (the book spells it "Schaefer") | viral/social |
| Idle for 5 minutes (Saw) | doing nothing | ironic |
| Decapitate a shielded captain (Conan) | a specific combat feat | skill |
| Slide 330 feet through blood (Fairy Tale Fights) | an absurd physics stunt | discovery |
| 50 wedgies (Bully: Scholarship Edition) | a repeated silly act | count-based |
| Get slimed by a charging ghost (Ghostbusters) | a fan-service moment | flavor/fandom |
| Crush five Jawas in the garbage grinder (Force Unleashed: Ultimate Sith Edition) | environmental creativity | discovery |
| Find the cake (X-Men Origins: Wolverine) | a hidden in-joke (a nod to Portal's famous cake) | secret/easter egg |

- **The titles are half the joke.** The book lists them by their cheeky names, in the same order as the table: "Easiest achievement ever", "Not bulletproof", "Street cleaner", "Be polite", "Six degrees of Schaefer", "You've wasted your life", "Losing his mind", "Wheeeeeee!", "Skidmark", "I feel so funky", "Jawa juicer", "The cake". Rogers' point: achievements can be awarded for **anything the developer fancies**, so a funny name plus a specific, odd act is a cheap way to give the game personality and point players at things they'd never try.
- 📱 **F2P angle:** name missions and badges with a joke or a wink ("Idle for 5 minutes" energy), not "Win 10 matches", and keep a couple of secret ones for easter-egg hunters.

### 3e. Treasure and the economic system
- **Collecting treasure feels great**: coins jingling out of chests, glittering after a headless enemy falls, spinning in midair to tempt you through a flaming hoop over a spike pit.
- **But what will players spend it on?** **Treasure means nothing without an economic system.**
- **Denominations:** create treasure in **escalating values: 1, 5, 10, 50, 100…** But **don't spread values too far apart**. The worst outcome is the virtual **penny**: treasure nobody bothers picking up.
- **Being rich is fun.** Rogers loves being far richer in games than in life. **Flush players have choices when shopping**, so you need **plenty of things to buy**.
- **Choice between two really good things** is delicious agony, and it gives players something to come back for next time.
- **Stock stores with variety** and **rotate stock** so the selection stays fresh.
- **Pricing process:**
  1. **Classify** treasure, loot and buyables by **rarity: common, uncommon, rare, unique.**
  2. **Price** each item.
  3. Decide **which items are available from the start**.
  4. Always have **some quick buys** and **some items tantalizingly out of reach**, so players itch for just a few more coins.
- **Build a preliminary economy, then place treasure.** Don't set prices in stone; they'll change during production as you learn what players want and need.
  - **Supply must match demand:** if players should afford **$300** of items, put **at least $300** of treasure in the level.
- **Does treasure regenerate?** You must decide:
  - **Yes →** players can **"mine" (farm) levels**, which can wreck your economy.
  - **No →** replaying a level with nothing to collect isn't fun.
  - You *may* **want** players to replay levels to earn enough; **a shortage of funds encourages replay or off-path exploration.**
- **Show all buyable items early** (e.g., an **ability tree** as in Dante's Inferno) so players **plan their spending**. Sometimes they'll have to buy **cheap necessities** (ammo, health) to progress. **Give options.**
- **Make value readable:** use **color** (copper, silver, gold) or **shape** (coins, bags, gems). **Don't get too diverse or wild**, or players will **mistake treasure for power-ups**. *(Book figure: three adventurers looting a defeated ogre, one with silver, one with gold, one disappointed with "a rock", in the spirit of Charlie Brown's Halloween.)*
- **Encumbrance:** is there a carrying limit? If so, how do players carry it? Many RPGs/MMOs force storage solutions (bags of holding, banks). Whatever you do, **never make players shuttle cash from storage to the shop**; just **charge their account**.
- **Treasure needn't be money:** bolts (Ratchet & Clank), studs (Lego games), souls (God of War series), even trash like **bottle caps** (Fallout). It just has to **sparkle** and make a satisfying **cha-ching!**

### 3f. Shops
- Where do players spend it all? RPGs use friendly (and not-so-friendly) **stores**; **Borderlands and BioShock use vending machines**. **Make the store fit your game**: a **garage** for upgrades and customization in a racing game, a **sporting goods shop** in a sports game. It's one more way to add **character and theme**. *(Book figure: an inn counter, a GUNS vending machine, and a shady guy in a trench coat.)*
- **The shady shopkeeper's ten aisles** (Rogers role-plays a trench-coated merchant). Every category of thing a game can sell:

| # | Category | What it sells (book) | 📱 F2P shop equivalent |
|---|---|---|---|
| 1 | **Offense** | new swords, guns, spells | heroes, weapons, attack upgrades, card packs |
| 2 | **Defense** | armor, shields, helmets, force fields | defense buildings, gear, shields (Clash of Clans shield) |
| 3 | **Repairs** | fixing worn-out gear | rare on mobile (durability systems are unpopular); sometimes "repair" meta tasks |
| 4 | **Replenishable resources** | ammo, potions, batteries, gas | **energy, lives, boosters, moves**: the consumables at the heart of casual F2P |
| 5 | **Skills** | new attacks, +2 accuracy, lockpicking | talent trees, skill upgrades, hero abilities |
| 6 | **Access** | keys, treasure maps, a statue that opens a secret door | **event tickets, keys, VIP access, premium pass tracks, extra levels** |
| 7 | **Vanity** | hats, costumes | **skins**, frames, avatars: the biggest *fair* monetization pillar |
| 8 | **Whimsy** | pink hair, a fake mustache | emotes, silly cosmetics, profile flair |
| 9 | **Information** | tips on where the King is hiring adventurers | hints, scouting, "reveal" items, odds/insight features |
| 10 | **Saves** | charging to keep playing (Rogers jokes only a truly cruel designer would) | **continues ("+5 moves", "Save me")**, revives: Rogers' "cruelest" item became a top seller (see ethics below) |

- The merchant visit ends with Rogers grumbling that the shop is overpriced, since **most of this stuff can be found lying around the levels**, which leads to loot.

### 3g. Loot
- **Loot** is everything you could buy, but **free** (if you count fighting through the temple of eternal pain and a goblin army as free).
- **Found loot should always be better than bought loot.** Save the **best weapons, strongest armor and shootiest guns** for loot. Make players **earn** them through **puzzles, hazards and bosses**.
- Rogers' **very important thing:** **THE BEST REWARDS ARE HARD WON.**

### 3h. Souvenirs
- **Souvenirs** are virtual mementos of the player's adventures, displayed at their **base, castle, spaceship or condo**.
- **Give them a special place:** Lara Croft's **trophy room** (Tomb Raider: Anniversary), a nicely lit shelf, **animated interactive exhibits** (Lego Indiana Jones: The Original Adventures), or a **virtual museum** (Uncharted 2: Among Thieves).
- **Presentation:** a **tight camera or viewer** so players can admire them, plus a **label reminding them where it was found**.
- **Make some souvenirs useful.** Useful souvenirs carry more meaning:
  - In World of Warcraft, slay the **Lich King** and **his sword** is yours.
  - **Mega Man** absorbs the **power** of every Robot Master he defeats.
  - Instead of a dragon-skin **rug**, award dragon-skin **boots**: everyone sees who slew the red dragon *as long as you wear them*.
  - Give them **special properties**: fire resistance, walking on hot coals or lava, even a **flaming kick attack**. **Make it special and players will rush to the next encounter to see what they can win.**

**🎮 Book examples:** WoW robot chicken ("me too"), Maximo's tree-adjacent treasure, Pac-Man World dots & Sonic rings, Half-Life's 4-step item intro, Bejeweled/Feeding Frenzy/Xbox Live (score revival), the achievement hall of fame, Dante's Inferno ability tree, Ratchet & Clank bolts / Lego studs / God of War souls / Fallout bottle caps, Borderlands & BioShock vending machines, Tomb Raider: Anniversary trophy room, Lego Indiana Jones exhibits, Uncharted 2 museum, WoW Lich King sword, Mega Man powers.

**📱 F2P mobile translation:**
- **Greed for good = the F2P motivation stack:**
  - **Trophy shelves → collection meta.** Monopoly GO!'s **sticker albums** and Coin Master's **card collections** are Rogers' "shelves filling up" turned into a core retention loop (complete a set → big reward; trade duplicates with friends). Pokémon GO's Pokédex and medals, Marvel Snap's collection track and card variants, Clash Royale's card collection: same instinct.
  - **"Me too" → visible cosmetics.** Skins in Brawl Stars, tower/emote cosmetics in Clash Royale, and flashy profile frames work because *other players see them*. The robot chicken is the reason vanity sells.
  - **Half-Life's item intro → the showcase.** Gacha games put new characters on a **banner with trailers and trial runs** (Genshin Impact lets you try banner characters in trial events) so players hear about, see and use the hero *before* they pull. Shops preview skins in action. Rogers' 4 steps are now a **merchandising funnel**.
  - **Collectible trails → onboarding breadcrumbs.** Coin trails in runners, "tap here" glows and progress paths do Pac-Man World's job.
- **Reward rules → reward roadmaps:**
  - *Show rewards early* = visible **battle pass tracks**, 7-day login calendars showing the big Day 7 prize, level-map chests, event reward ladders.
  - *Reward soon and often* = the FTUE reward cadence: early sessions shower players with rewards to build the habit.
  - *Fanfare* = **juice**: Royal Match/Candy Crush win screens, coin explosions and slot-machine-style counters (Rogers literally recommends slot-machine sounds).
  - *Make it matter* = rewards that solve the player's current problem (a booster for the hard level, the hero your team lacks).
- **Scoring → leaderboards and tournaments.** Rogers' 2000s revival kept going: weekly tournaments, clan leaderboards, PvP trophy roads, Block Blast!'s chase-your-high-score loop. The "wet cement" feeling = being #1 among friends this week.
- **Achievements → missions and quests.** F2P turned achievements into **daily/weekly missions**, achievement trees with currency payouts, and Game Center/Google Play achievements. Rogers' "point players at things they'd never try" is exactly how live teams use quests to **teach and steer** (e.g., "Win 3 games with a new hero").
- **Economy → the F2P economy is Rogers' section with two currencies.** See section 4 for soft/hard currency, sources & sinks.
  - **Escalating denominations & no "pennies":** reward sizes must feel meaningful against prices. Giving 5 coins when items cost 10,000 is the virtual penny.
  - **Rarity tiers:** Common / Rare / Epic / Legendary (Clash Royale adds Champion). Rogers' common/uncommon/rare/unique, renamed.
  - **Rotating stock → daily shop refresh** (Brawl Stars and Clash Royale daily deals). "Tantalizingly out of reach" = aspirational items and offers that sit just above the player's balance.
  - **$300 in the level for $300 of items → sources must match sinks.** Plan earn rates per day/level against costs.
  - **Regenerating treasure = farmable sources.** Exactly why F2P adds daily caps, energy costs and diminishing returns: to stop "mining" from breaking the economy.
  - **Encumbrance → inventory limits.** Rogers says don't make storage a hassle. F2P sometimes **sells** relief from inventory hassle (extra slots). The fair version keeps the base limit comfortable.
- **Loot better than bought = the anti-pay-to-win rule.** If the best gear is only purchasable, the game becomes pay-to-win. Rogers' "best rewards are hard won" is why competitive F2P keeps top-tier power earnable and leans on **cosmetics** for revenue.
- **Souvenirs → badges, frames, titles and event-exclusive items.** A limited-season frame says "I was there", and a useful souvenir (an event-exclusive hero or gear piece) is Rogers' dragon-skin boots: show-off *plus* function.

**🪝 Make it stick:** **"GREED: Goodies, Racks (trophy shelves), Envy (me too), Easter-egg rules (guidelines), Dots (trails)"**, plus Half-Life's **"Hear it, See it, Watch it, Wield it."** And the robot chicken: if your players don't have a robot chicken they'd sell their soul for, you don't have a vanity economy.

### 3i. Bonus materials
- **The problem:** bonus features are usually thrown together **at the last minute** by the production team.
- **The fix:** **design them early, build them late.** Building them near the end lets you judge what actually feels like a "bonus" compared with the rest of the game.
- **The 16 kinds of bonus materials:**

| Bonus | Book notes & examples | 📱 F2P / 2026 equivalent |
|---|---|---|
| **Costume changes** | Variety and humor. Starkiller (Star Wars: The Force Unleashed) wears costumes from other levels; Kratos unlocks a business suit or chef outfit | **Skins**, the #1 cosmetic product in mobile (Brawl Stars, Clash Royale, MOBAs) |
| **Alternate models** | New looks for heroes/villains: a fat version of the hero in Uncharted 2; all enemies as skeletons in Batman: Arkham Asylum | Skin variants, card art variants (Marvel Snap), themed reskins for events |
| **Alternate modes** | Big-head mode: easy to code, endless laughs. Exploding body parts become birthday presents; all cars turn pink. Limited only by imagination and schedule | **Limited-time modes** and party modes (Brawl Stars' rotating events, Clash Royale special challenges) |
| **DLC** | Via Xbox Live Arcade, PSN, WiiWare. Extends a game's life with weapons, modes, achievements, character models, new levels | **LiveOps**: seasons, events, content drops, all free or sold in-game rather than as boxed DLC |
| **New levels** | The most time-consuming bonus. Releasing them **after launch** as DLC gives the team more time and polish | Match-3 games **add new levels regularly**; live games ship new chapters/areas on a cadence |
| **Music** | An in-game audio player (or just put the disc in a CD player) | Sound-test menus are rare; music becomes event themes or collectible tracks |
| **Commentary** | Developer audio commentary; Valve made in-game commentary standard starting with Half-Life 2: Lost Coast | Dev diaries, patch-note videos, community livestreams |
| **"Making of" video** | Documentary featurette; very time-consuming but spotlights the team | Dev blogs and behind-the-scenes social content (also marketing) |
| **Model viewers** | Let players pan, rotate and zoom on 3D models; great for games with distant cameras like RTSs | **3D hero/skin inspectors** in gacha and PvP shops (doubles as merchandising) |
| **Art viewers** | The most common bonus, and often lazy (a scanned slideshow). Do better: music or **artist commentary**, show environments, props, maps and design docs, **let players control the pace**, add a **magnifier**, **hide a reward** in the art, or have players **collect art pieces like a puzzle** for a reward | **Collection albums** and puzzle-piece events where you assemble an image for a prize |
| **Promotional materials** | More common in sequels, since promo assets come late; great nostalgia in long franchises | Anniversary events, throwback skins |
| **Trailers** | Movie trailers (movie tie-ins), previews of other games, a sequel sneak peek; **never mandatory, always skippable** | Cross-promo for a studio's other games; **rewarded video ads** (optional = the F2P version of skippable) |
| **Minigames** | Give players a break from a long grind without leaving the game. Give them a home (an arcade). Easy to make: **re-contextualize your most fun gameplay** (God of War's Challenge of the Gods reused existing code with new victory conditions). Some feed rewards **back into the main economy**; some are **promotional** (iPhone's Mass Effect Galaxy unlocked a reward in Mass Effect 2). Or "just rip off Galaxian like everyone else" (Rogers' joke) | Event minigames feeding the main economy; cross-game rewards (play game A, unlock a skin in game B) |
| **Multiplayer modes** | Beyond gameplay: **asset trading, chat, spectator modes, friends lists, rival rosters** to check friends' stats. Keep interfaces intuitive (Level 8's rules: few clicks, minimal screens, icons over text). Full multiplayer is Level 14 | **Clans/guilds, chat, trading** (Monopoly GO! sticker trades), friend leaderboards, replays/spectating |
| **Alternate endings** | Good or evil, save or doom the world (Knights of the Old Republic, Fable, Heavy Rain, Resident Evil). Great for replay **if players know other endings exist**. A few endings decided at a few key moments isn't enough anymore: make good vs. evil **evenly matched**, build systems to **course-correct** toward an outcome, and let **the player choose**, not the game | Branching story events; choice-based narrative games |
| **Cheats** | Usually dev tools: unlimited health, ammo, lives, invulnerability. **Enable only after one playthrough**, or players cheat themselves out of the intended experience. Some games encourage "proper" play: cheaters miss the good ending, GTA brands you a cheater, and Team Fortress 2 gave **non-cheaters** a wearable angel halo ("the cheater's lament") | **Not in F2P**: cheats would break the economy and fairness. Anti-cheat is a core live-ops job. The TF2 halo idea survives as "fair play" badges |

**Extra bonus-material details (small points worth keeping):**
- **Minigames:** some whole games are just minigame collections (most of the Wii's library, says the book), yet big games should still include a few. The **God of War "Challenge of the Gods"** trick was Rogers' own team's: no new code, just existing gameplay with **different victory conditions**. Minigames can feed the main economy *or* act as marketing (Mass Effect Galaxy on iPhone → a reward in Mass Effect 2).
- **Multiplayer extras are "non-gameplay" modes** (asset trading, chat, spectating, friends, rival rosters). The *gameplay* side of multiplayer deserves, and gets, its own chapter: **Level 14**. Level 8's interface rules still apply: **few clicks, few screens, icons over text**.
- **Alternate endings are only worth the effort if players know other endings exist.** A few endings decided at a few key moments no longer cuts it (Rogers' observation); make good and evil **evenly matched**, give players ways to **course-correct** between outcomes, and make the ending **the player's choice, not the game's**.
- **Cheats are also a design statement:** locking them until after one playthrough protects the intended experience, and a game can *tease* cheaters (worse ending, labelled a cheater in GTA) or *flatter* honest players (TF2's "cheater's lament" halo for anyone who never cheated).
- **Art viewers = the laziest bonus.** Upgrade them with artist commentary or music, environments/props/maps/design docs (not just characters), player-controlled pacing, a magnifier, a hidden reward, or a collect-the-pieces puzzle that pays out.

### 3j. Praise
- **The industry is great at making players feel terrible:** we kill characters at the drop of a hat, force near-impossible situations, mock failure, steal from players and mess with their heads. **We're bad at praise**, then wonder why players complain.
- Anyone who works with children will tell you **nothing gets people to cooperate like praise.** Make the player feel like **the best person in the world.**
- **Gold standard: Zak & Wiki: Quest for Barbaros' Treasure (Capcom, 2007).** Every correct action triggers:
  1. a "success" **musical sting**,
  2. a funny reaction or **victory animation** from the hero,
  3. a **particle effect** off the hero,
  4. **Wiki** (the monkey sidekick) **congratulating** the player in text, with **his own sting and particles**.
- **Completing a puzzle** adds:
  5. a burst of effects that **tints the screen yellow** with streaking stars,
  6. a **longer success tune**,
  7. a **"look at me!" animation** showing off the item or puzzle piece won,
  8. the **item's name** on screen.
- **Eight praise layers** (animation, VFX, music, text) for one solved puzzle. It made Rogers feel like the smartest player alive, so he kept playing.
- **But:** too much of a good thing exists. **Praise becomes meaningless if it's given for nothing or for trivial acts.**
- **Stroke the player's ego often.** In **Fable**, NPCs **recoil in horror or compliment** the hero depending on alignment, which is exactly what players want after investing so much time in being good or evil.

### 3k. Surprise and fun
- Rewards aren't only treasure: **surprise and fun** count too.
- **Disneyland's Pirate's Lair** playground: turning a wheel hauls a treasure chest up out of the water. A video game would stop there: grab treasure, move on. But **keep cranking** and a **skeleton clinging to the chest** appears, still trying to keep it. It serves no purpose except **a laugh**. *(Book figure: the wheel, rope and chest on a little dock.)*
- **Games can have little moments like this:** Marvel creator **Stan Lee's cameo** in Marvel: Ultimate Alliance 2, **Ape Escape's monkeys** hidden in Metal Gear Solid 3's jungle, and **Braid's homage to Super Mario Bros.' World 1-1**.

### 3l. Progression as a reward
- Some argue progression isn't really a reward. Isn't finishing the *point*?
- But **plenty of other things compete for players' spare time**. Holding their attention "only" takes **a gripping story, absorbing level design, outrageously cool boss fights and satisfying upgrades**. No problem, right? And if more than one person wants to play… that's **Level 14 (multiplayer)**.

**🎮 Book examples:** Force Unleashed & God of War costumes, Uncharted 2 & Arkham Asylum alternate models, big-head mode, Half-Life 2: Lost Coast commentary, God of War's Challenge of the Gods, Mass Effect Galaxy → Mass Effect 2, KOTOR/Fable/Heavy Rain/Resident Evil endings, GTA & TF2 cheat handling, Zak & Wiki's 8-layer praise, Fable's reactive NPCs, Disneyland's Pirate's Lair skeleton, Stan Lee cameo, Ape Escape monkeys in MGS3, Braid's World 1-1 homage.

**📱 F2P mobile translation:**
- **Bonus materials became LiveOps.** In 2010, bonus content was the end of a product. In F2P it's the *engine*: new levels, modes, skins and events every week or month keep players returning. Rogers' "design early, build late, and don't leave it to the end" becomes **"plan your content pipeline before launch"**: a live game without a content roadmap dies.
- **Praise = juice.** Candy Crush's booming voice ("Sweet!", "Tasty!", "Delicious!", "Divine!", "Sugar Crush!"), Duolingo's celebratory animations and streak messages, and Royal Match's win sequences are Zak & Wiki's 8 layers on a phone. Audit your own game: how many layers fire when the player does something great?
  - **Praise inflation warning:** if every tap triggers fireworks, nothing feels special. Scale celebration to achievement (small sting for a match, full fanfare for a level clear).
- **Surprise & delight:** easter eggs, rare idle animations, silly seasonal touches, unexpected bonus rewards. Cheap to build, great for social sharing and goodwill.
- **Progression as reward in F2P = the meta.** Without an ending, progress itself is the reward: map progress, renovated rooms, base levels, hero power, rank. Rogers' list (story, levels, bosses, upgrades) is still the recipe for "why keep playing".

**🪝 Make it stick:** **Zak & Wiki's 8 = "Sting, Pose, Sparkle, Sidekick" + "Gold screen, Long song, Show-off, Name it."** And the Pirate's Lair rule: *always reward the player who keeps cranking the wheel.*

---

## 4. 📱 F2P Reward & Economy Toolkit (beyond the book, built on Rogers' principles)
> These concepts aren't in the 2010 book, but each grows directly from a Rogers rule. Learn them as "Level 13, live-service edition".

### 4a. Reward schedules (behavioral psychology)
| Schedule | How it works | F2P example | Rogers root |
|---|---|---|---|
| **Fixed ratio** | Reward after every N actions | A chest every 10 levels; a reward for every 5 wins | "Reward often"; a visible to-do list |
| **Variable ratio** | Reward after an unpredictable number of actions | Random drops, gacha pulls, rare card from a pack | "Variety and surprise", the most compulsive schedule, so handle it with care |
| **Fixed interval** | Reward after a fixed time | Daily login reward, energy refill, daily shop | Autosave-style reliability; habit formation |
| **Variable interval** | Reward at unpredictable times | Surprise events, random flash sales, rare world spawns | Surprise and fun |
- **Design takeaway:** mix them. Fixed schedules build **trust and habits**; variable ones create **excitement**. Relying mainly on variable-ratio rewards *for money* is where delight turns into a slot machine (literally the sound effect Rogers suggested, which is the irony).

### 4b. Daily rewards, streaks and appointments
- **Daily login calendars** (Day 1 → Day 7 big prize) = "show rewards early" + fixed interval.
- **Streaks** (Duolingo is the reference) = pride and loss aversion. **Streak protection** (a streak freeze) is Rogers' defensive power-up applied to habits.
- **Ethics:** streaks are motivating until breaking one feels like punishment. Offer forgiveness (freezes, grace days) so habits stay friendly.

### 4c. Chests, loot boxes and gacha
- **Chests** = Rogers' treasure chests with a timer or key. Clash Royale's original hours-long chest unlocks made opening a ritual.
- **Gacha** (character/item lotteries) = variable-ratio loot. Key mechanics:
  - **Rarity tiers and published drop rates.** App stores require disclosing odds for paid random items, and some countries regulate further (e.g., Belgium treats paid loot boxes as gambling).
  - **Pity systems:** a guaranteed top-rarity result after N pulls (Genshin Impact's character banner guarantees a 5★ within 90 pulls). Pity is Rogers' DDB for luck: it caps the worst-case outcome.
  - **Duplicates → upgrades/shards** so bad pulls still carry value (avoiding the "mimic chest" disappointment).
- **The Half-Life funnel** (hear → see → watch → wield) is how banners sell characters.

### 4d. Battle pass / season pass
- A **visible reward track** (Rogers: show rewards early) unlocked by playing during a season, with a **free track** and a **premium track** (Brawl Pass, Pass Royale, Marvel Snap's season pass).
- It converts "reward often" into a structured **progress bar with a deadline**: strong for retention and monetization.
- **Ethics:** keep pass completion achievable with normal play; passes that need excessive grinding (or paid tier-skips to finish) create stress, not delight.

### 4e. Soft vs. hard currency
| | **Soft currency** | **Hard (premium) currency** |
|---|---|---|
| Examples | Coins, gold, elixir (Clash of Clans), Hay Day coins | Gems, diamonds, crystals |
| Sources | Earned constantly through play | Mostly bought; small free trickles |
| Sinks | Upgrades, boosters, decorations, everyday purchases | Speed-ups, premium items, gacha, passes, continues |
| Rogers link | Escalating denominations, plenty to buy, rotating stock | Value readability (gems ≠ coins, copper/silver/gold logic); "two great choices" |
- **Readability rule (Rogers):** each currency needs a distinct color and shape so players never confuse it with power-ups or with the other currency.

### 4f. Sources and sinks
- **Sources** = where currency/items enter (level rewards, chests, quests, ads, purchases). **Sinks** = where they leave (upgrades, consumables, cosmetics, fees).
- Rogers' "$300 of treasure for $300 of items" is the first sources-and-sinks rule. **Too many sources → inflation** (everything is cheap, rewards feel worthless: the virtual penny problem). **Too many sinks → frustration** (paywall feeling).
- **Farmable sources** (Rogers' regenerating treasure) need caps, energy costs or diminishing returns.
- Build a **spreadsheet economy**: earn rate per session/day vs. cost curve per upgrade. Then tune using live data.

### 4g. Collection meta
- Albums, card sets, sticker books, hero rosters, Pokédex-style lists = Rogers' **trophy shelf + "catch them all"**.
- Good collection metas: clear set structure, **set-completion rewards**, duplicate value, trading/social features, seasonal resets that keep it fresh.

### 4h. The ethics line: delight vs. manipulation
| Delight (Rogers-approved) | Manipulation (rocks on the head with a price tag) |
|---|---|
| Rewards show players what they can earn, early | Hidden odds, confusing currency exchange rates |
| Continues offered after real mistakes | Levels tuned to fail by one move to sell continues |
| DDB that helps struggling players | DDB that makes it harder for likely spenders |
| Boosters gifted regularly as help | Boosters required to beat levels |
| Best items earnable through skill and play | Best power only purchasable (pay-to-win) |
| Fair timers with optional skips | Timers designed to be painful so players pay |
| Praise for real accomplishments | Fake urgency, "only 2 left!" pressure, guilt-tripping pop-ups |
| Clear, mild costs for help (Layton hints) | Spending prompts aimed at minors or people chasing losses |
- **Rogers' compass:** love thy player, never underestimate their greed, but **use it for good**. If a mechanic only works because players *don't understand it*, it's on the wrong side of the line.

---

## 🏆 Universal Truths & Clever Ideas
1. **Create power-ups that are compatible with and complement the player's actions and attacks.** 📱 *So for F2P:* boosters should combo with special pieces and core moves, not replace skill.
2. **Love thy player! Equip them for success with tools like DDB and rubberbanding.** 📱 Loss-streak relief, fair matchmaking, free help when stuck.
3. **If a part of your game feels too hard or dull, it is; cut it.** 📱 Watch level funnels; kill the levels where players quit.
4. **Never underestimate how greedy players are, and use that to spark interesting scenarios and challenges.** 📱 Collections, cosmetics and risky bonus coins: greed for good.
5. **Plan the economy across the whole game, and set item prices to match when you want players to afford them.** 📱 Sources & sinks spreadsheet before launch.
6. **Give players enough money to have real choices when shopping.** 📱 Soft currency should feel plentiful enough to make decisions.
7. **Offer a variety of cool things to buy, and make players choose between (at least) two really good options so they come back for more.** 📱 Rotating daily shops, two great offers side by side.
8. **Decide whether scoring suits your game, then reward high scores and achievements.** 📱 Leaderboards, tournaments, missions.
9. **Don't forget bonus materials and DLC, and remember they take time, so don't leave them to the end of production.** 📱 Plan the LiveOps content pipeline before launch.
10. **Some rewards are just for fun.** 📱 Easter eggs and surprise gifts build love that no offer can buy.

## 🧩 Connect the dots
- **→ L12 (mechanics & hazards):** keys and locked doors, "progression is a right, not a reward", paid hints, checkpoints and continues all feed into L13's rewards and fairness.
- **→ L04:** the earlier Japanese "fisherman" director story Rogers references.
- **→ L08 (HUD/UI):** expiry cues, readable currency icons, and the UI rules for multiplayer features (few clicks, icons over text).
- **→ L11 (enemies & bosses):** loot and souvenirs from boss kills; mimic enemies.
- **→ L14 (multiplayer):** "me too", trading, chat, spectating, clans.
- **→ L17:** the book's fix for designer blinders (playtesting).
- **F2P concepts:** **economy** (sources/sinks, soft/hard currency), **monetization** (boosters, continues, skins, passes, gacha), **retention** (DDB, daily rewards, streaks, collections), **LiveOps** (bonus content → events), **FTUE** (reward cadence, Half-Life funnel), **ethical design** (loot-box odds, no pay-to-win, no engineered failure).

## 🔁 Retrieval check (do it closed-book!)
1. What are the four categories of power-ups? Give two examples of each.
2. List five questions from Rogers' power-up design questionnaire.
3. What are the four ways a power-up can be collected (the distance diagram)?
4. What's the difference between invulnerability and invincibility, and what do they share?
5. Name the rules for mobile power-ups, conditional power-ups and anti-power-ups.
6. Explain dynamic difficulty balancing with the treasure-chest example.
7. Why doesn't Rogers like automatic difficulty reduction?
8. What are designer blinders, and what should you do in the meantime?
9. What two lessons come from the "die three times" director and the mimic chest?
10. List Rogers' four reward rules.
11. Name the 10 reward types.
12. How did scoring fall and rise again?
13. Give five economy rules from the treasure section.
14. Name the ten shopkeeper categories.
15. What's the difference between loot and bought items, and what's the rule?
16. How should souvenirs be displayed, and how can they be made useful?
17. What are the eight Zak & Wiki praise elements, and what's the warning about praise?
18. What's the F2P difference between fixed-ratio and variable-ratio rewards?

<details><summary>Answers</summary>

1. Defensive (health-up, extra life, shield, smart bomb…), offensive (ammo, buff, spread gun, element damage, companion…), movement (speed, access like flying, size change), game changers (score multiplier, change state, magnet, invisibility, comedy).
2. Any five: what it does; how it looks/stands out; can they combine/stack, can unused ones be retrieved; how it affects movement/speed/attacks/health; how effects are communicated visually/aurally; the trade-off; expiry cues (HUD/visual/sound/music) or lasting until you lose a life.
3. Walk over it; reach out and pick it up; auto-attract within a radius (how close, how fast); proximity activation.
4. Both stop enemy damage. Invincibility also destroys enemies on contact (often not bosses). Invulnerable players usually still suffer physics/geometry hazards like falls.
5. Mobile: never faster than the player, never immune to magnets. Conditional: fine if the conditions are clear. Anti: fun only once or twice, use sparingly.
6. DDB adjusts challenge and rewards to performance. A chest gives a health-up if you're low on health, treasure if you're not; enemies weaken slightly if you keep dying.
7. Many players find it insulting; let them choose or decline.
8. After playing your game endlessly, you need far harder content to feel challenged than real players do. Meanwhile, consolidate, kill boring parts, cut elements; the book's full fix comes in Level 17.
9. Never treat player deaths as a measure of design quality (it's negative reinforcement); tricks that are fun for designers but make players flinch (mimic chests) defeat the purpose. Give clues, keep players playing.
10. Show rewards early; reward soon, often, with variety and surprise; win = evidence of success with maximum fanfare; make rewards matter (solve the last problem, give an edge on the next).
11. Scoring, achievements, treasure, loot, power-ups, souvenirs, bonus materials, praise, surprise, progression.
12. Arcade high scores → late-1990s decline (seen as quarter-munching, replaced by 100% completion and story) → early-2000s revival via browser games (Bejeweled, Feeding Frenzy) and online leaderboards (Xbox Live, PSN).
13. Any five: escalating denominations (1, 5, 10, 50, 100) without pennies; plenty to buy; choice between two great items; rotate stock; rarity tiers (common/uncommon/rare/unique); some cheap items and some out of reach; enough treasure in the world to afford items; decide on regeneration (farming risk vs. replay value); show buyables early (ability tree); readable value by color/shape; no storage-to-shop shuttling.
14. Offense, defense, repairs, replenishable resources, skills, access, vanity, whimsy, information, saves.
15. Loot is found (earned through danger) and should be better than store items; the best rewards are hard won.
16. In a special place (trophy room, lit shelf, interactive exhibit, museum) with a close-up viewer and a label of where it was found. Make it useful: Lich King's sword, Mega Man's powers, dragon-skin boots with fire resistance or a flaming kick.
17. Success sting, victory animation, hero particles, sidekick congrats (text + own sting/particles); on puzzle completion: yellow screen tint with stars, longer tune, show-off animation, item name. Praise for nothing or trivial acts becomes meaningless.
18. Fixed ratio rewards every N actions (predictable, builds trust); variable ratio rewards after unpredictable counts (exciting and compulsive, like gacha), which needs ethical care.
</details>

## 🎯 Side quests (5–15 min each)
1. **Booster spec sheet (10 min):** write Rogers' 7-question spec plus "acquisition" and "price/sink" for a new match-3 booster.
2. **D-O-M-G sort (10 min):** list 12 power-ups from mobile games you play and sort them into Defensive / Offensive / Movement / Game changer.
3. **Fanfare audit (5 min):** beat one level in a mobile game and count the praise layers (sound, animation, VFX, text, voice). Compare to Zak & Wiki's 8.
4. **Shop aisles (10 min):** open any F2P shop and map every item to Rogers' 10 shopkeeper categories. Which aisles are missing?
5. **Achievement writer (10 min):** write 8 funny, clever achievements for a merge or farming game, each pointing players at a mechanic they might not try.
6. **Robot chicken hunt (5 min):** find the most "me too" cosmetic in a multiplayer mobile game. What makes people want it?
7. **Ethics flip (10 min):** take three reward features from a game you play and write the "delight" version vs. the "manipulation" version of each.

## ⚔️ Main quest (homework)
**Build a mini F2P economy + reward plan for a hypothetical match-3 (or merge) game.**
- **Currencies:** define soft and hard currency (names, icons, colors), with denominations.
- **Sources & sinks spreadsheet:** coins earned per level, per day, from quests and from login; costs of boosters, decorations and continues. Show day 1, day 7 and day 30 balances.
- **Rewards map:** a 7-day login calendar, a level-chest schedule (fixed ratio), one variable reward (chest odds with a pity rule), and a 30-tier season pass (free + premium) shown to players from day 1.
- **Boosters:** 3 pre-level and 3 in-level boosters, each with Rogers' spec + free supply rate.
- **Ethics review:** a one-paragraph check against the delight vs. manipulation table.
- **Deliverable:** a spreadsheet + one-page summary.
- ✅ **Done when:** day-30 balances aren't runaway inflation or starvation; every booster has a free source; every random reward has published odds and a pity cap; you can name which Rogers rule each element follows. Post the summary publicly and ask a F2P designer for one critique.

## 🔬 Play Lab
1. **Royal Match or Candy Crush Saga (10 min):** **look for:** every way you receive boosters (earned, gifted, bought) and how pre-level boosters are offered. **Answer:** do boosters read as help or ransom? Where's the free supply?
2. **Brawl Stars or Clash Royale (10 min):** **look for:** pass track visibility, daily shop rotation, rarity tiers, cosmetics others can see. **Answer:** which Rogers reward rules (show early, reward often, two great choices, "me too") do you spot?
3. **Monopoly GO! or Coin Master (10 min):** **look for:** the collection album, set rewards, duplicate handling, trading. **Answer:** how does it turn Rogers' trophy shelf into a retention loop, and where is the variable-ratio reward?
4. **Genshin Impact or Honkai: Star Rail (10 min, no spending needed):** **look for:** the banner page, trial characters, odds disclosure and pity info. **Answer:** map the banner to Half-Life's hear → see → watch → wield funnel. Is the pity system clear?

## 🗣️ Feynman check
Explain to a producer in 60 seconds **why "the best rewards are hard won" and "never underestimate the greed of the player" should shape a F2P economy, and where using greed crosses from delight into manipulation.**

# 🗡️ Level 10 — The Elements of Combat
> 📖 Book pp. 243–280 · ⏱️ ~85 min study · 📱 F2P relevance ★★★★☆ — Combat is the core loop of mobile RPGs, gacha, PvP brawlers, survivor-likes and shooters, and even puzzle games borrow its "juice" and its fail-state rules.

## ⚡ TL;DR — the 30-second version
- Combat comes down to three verbs: **hit, move, guard** (B.H. Liddell Hart's trio). Design all three, not just the hitting.
- Violence is everywhere because it gives the **fastest action → result → reward loop**. How violent it *feels* depends on **context** (who does it, how often, how graphic, whether it's rewarded), and that decides your age rating.
- Build attacks out of the character's **personality** and **signature weapon**. Spread them across **ranges** (close / medium / long / area), **elevations** (standing / low / high / aerial) and **directions** (vertical / horizontal). Track them in an **attack matrix** so every move earns its place.
- Combat *feel* = **timing** (instant response, 60 fps, short wind-ups unless it's a risk/reward heavy swing) + **feedback** (hit reactions, VFX, SFX, shake, slow-mo). Players want to **look cool**, so give them QTEs, finishers, lock-on and generous hitboxes.
- Ranged combat is all about **rhythm**: the **Three As** (Action, Aiming, Ammo) plus level design plus the health model. Keep weapons **distinct**: little overlap, and any overlap should come with a cost. Be **generous** with power.
- **Disable** the player instead of killing them (stun, knockback...), but always leave a way out. Make damage obvious. Use death to **keep them playing**, not to punish them.

## 🗺️ Chapter map
- [ ] 1. The Elements of Combat (intro): hit, move, guard; violence and ratings
- [ ] 2. 400 Quatloos on the Newcomer!: designing attacks that feel amazing
  - [ ] 2a. Personality → signature weapon
  - [ ] 2b. Ranges, elevations, directions
  - [ ] 2c. The attack matrix
  - [ ] 2d. Timing, chains, wind-ups
  - [ ] 2e. Juice: VFX, hit reactions, drama
  - [ ] 2f. Close battles, finishers, looking cool, QTEs
  - [ ] 2g. Targeting, melee props, weapon design, world collision
  - [ ] 2h. Stealth kills, grapples, lock-on
- [ ] 3. Now You Have to Kiss Me: missing is fine, so help the strugglers
- [ ] 4. On Moving: dodges, dashes, jump attacks, vaults
- [ ] 5. On Guarding: blocks, shields, armor
- [ ] 6. State of the Art Bang Bang: shooter rhythm and the Three As
- [ ] 7. The Best Gun for You: weapon archetypes and balance
- [ ] 8. Run and Gun: galleries, turrets, rails
- [ ] 9. Not Just Shooting: grenades, bombs, fire, poison, disables
- [ ] 10. Dammit Jones, Where Doesn't It Hurt?: health design and display
- [ ] 11. Death: What Is It Good For?: lives, checkpoints, keep them playing
- [ ] 12. 📱 Bonus: F2P Combat Field Guide (auto vs manual, gacha, survivors, PvP, revive ethics)

---

## 1. The Elements of Combat: hit, move, guard (and the violence question)
**🧠 Big idea:** Every combat action is a hit, a move or a guard. Combat is a huge share of what players actually *do*, so it needs serious design time, plus an honest look at how violent you're making it.

**📋 The details:**
- **Opening quote:** British military theorist **B.H. Liddell Hart** said that every fighting action falls into one of three buckets: **guarding, hitting or moving**. Those are the elements of combat, whether it's a war or a boxing match. He died before games went mainstream, but Rogers thinks the quote sums up game combat perfectly.
- Combat is a **popular, major part** of what players do. Getting a combat system right takes a lot of thought and a lot of team effort.
- **The violence can of worms:**
  - Games are about **action**, and some actions (hitting, shooting, stabbing, killing) are violent. But "all games are violent" is plain wrong. Huge numbers of games have zero violence, from the very first video game (**Tennis for Two**) to the latest phone puzzler. Rogers says he could fill the whole book with a catalog of non-violent games.
  - So why do the violent ones (**Doom, Mortal Kombat, Grand Theft Auto**) get all the attention?
    1. Violence is **graphic, dramatic and visceral**.
    2. Because of that, it gives the **quickest positive feedback loop**: the player acts (hits, shoots) → sees an instant result (the enemy dies) → gets a reward (XP, money, a power-up). Interaction is quick and frequent. Rogers calls it **Freud's pleasure principle** in practice: ring the bell, get a reward, so why would you ever stop ringing?
    - Footnote gag: the studio that invented the FPS is called **id**, which is a little too perfect for a Freud joke.
  - A second reason violence dominates: social interplay such as **talking, romance, humor and manipulation** is **much harder to simulate** in a game. The knock-on effects:
    - (a) Teams explore non-violent ways to play less often.
    - (b) Players tend to keep buying the same kinds of games.
    - (c) So publishers find new styles of play harder to sell. Footnote: EA's own marketing team kept trying to cancel **The Sims** throughout development because they thought nobody would buy it. It became their best seller.
    - (d) Well-meaning parents and social groups don't always check the facts before deciding all games are violent.
  - **Be responsible:** keep mature games away from young players. You wouldn't take a small kid to an R-rated movie, so don't hand them an M-rated game. There are plenty of alternatives.
- **ESRB violence descriptors.** The ESRB ratings board was mentioned back in Level 3. Its descriptors, in my words:

| Descriptor | What it covers |
|---|---|
| **Comic mischief** | Slapstick or suggestive humor in scenes or dialogue |
| **Cartoon violence** | Violence in cartoon-like situations with cartoon-like characters. Victims may be fine afterwards |
| **Fantasy violence** | Fantasy-flavored violence (human or non-human) that's easy to tell apart from real life |
| **Violence** | Scenes of aggressive conflict. May include bloodless dismemberment |
| **Intense violence** | Graphic, realistic physical conflict. May include extreme or realistic blood, gore, weapons, human injury and death |

- **Violence is all about context.** The more violent acts the *player personally* commits, the higher the rating. Questions to rate your own game honestly:
  - Does the player commit the violence themselves? With **realistic weapons**?
  - How **frequently** do they do it?
  - Does the game **reward** violence? Does it show in any way that violence is "not appropriate"?
  - How **graphic** is it? Dismemberment? Does the camera **linger** on it?
  - Is there leftover **residue** like bloodstains or **gibs** (flying body bits)? Better graphics mean more realism, and more realism means more realistic violence.
  - Is the violence aimed at **"bad guys"**? Do enemies visibly **suffer** while dying?
- Once you know how violent your gameplay will be, you can start designing how it happens.

**🎮 Book examples:**
- **Tennis for Two** → games started out non-violent.
- **Doom / Mortal Kombat / GTA** → the headline grabbers, because violence is visceral.
- **The Sims** → publishers are afraid of unfamiliar non-violent genres, even when those genres turn into mega-hits.

**📱 F2P mobile translation:**
- Mobile has age ratings too. Apple runs its own system, and Google Play uses **IARC**, which maps to ESRB, PEGI and others by region. Your rating affects who can find you, which ad creatives and networks you can use, and whether child-privacy rules apply (e.g. COPPA if you aim at kids).
- The biggest mobile combat hits lean on **cartoon or fantasy violence**. In **Clash Royale, Brawl Stars and Squad Busters** enemies pop and poof instead of bleeding. That widens your audience: more UA reach, family-safe ads, easier global launches.
- The pleasure-principle loop is the **F2P core loop in miniature**: tap → enemy pops → coins and XP fly into your counter. **Survivor.io**-style games run that loop dozens of times a second.
- Non-violent conflict is massive on mobile: match-3 levels as "battles" against a board, cartoon raids in **Monopoly GO!** and **Coin Master**, merge games. Rogers' points (b) and (c) are weaker today, because mobile charts reward fresh non-violent loops.

**🪝 Make it stick:** **H-M-G = Hit, Move, Guard.** Picture a **H**eavy **M**achine **G**un that fires only those three verbs. Freud's bell: Pavlov's dog, except the dog is holding a rocket launcher and drooling over loot.

> ⚠️ **2010 → 2026:** ESRB is North American. Mobile runs on IARC and app-store ratings worldwide, and some markets require dialed-down blood or gore in localized builds. The principle still holds: who does the violence, how often and how graphically decides your rating, and your rating decides your reachable audience.

---

## 2. 400 Quatloos on the Newcomer! — designing attacks
*(The title is a Star Trek riff about aliens betting currency on gladiator fights. In other words: place your bets on the new fighter.)*

### 2a. Personality → signature weapon
**🧠 Big idea:** Combat style should express **who the character is**, and the weapon dictates how they fight.

**📋 The details:**
- Start from the character's **personality**: acrobatic like the **Prince of Persia**? Bouncy like **Mario**? Stealthy like **Solid Snake**? Brutal like **Kratos**? Each fights differently *because* each has a different personality.
- Next, ask about **genre** and the **experience** you want players to have. Those answers point you to weapons. (Rogers jokes you can also just hand your hero a laser scimitar *and* a phase-plasma pistol. Either way works.)
- **Study real-world fighting styles** to make attacks feel more realistic and distinct.
- Give the character a **signature weapon**. It defines their personality fast. Try picturing **Cloud Strife** without his giant sword or **Bayonetta** without her guns.
- **The weapon dictates the fighting.** **Rygar's** throwable shield gives a completely different combat experience from a **Big Daddy's** melee drill.
- Unconventional weapon (a giant spatula, a bubble wand)? **Brainstorm every possible use** for it. The more original, the better.

**📱 F2P mobile translation:**
- Brawler and hero kits are personality made playable. In **Brawl Stars** you can usually guess a brawler's role from silhouette and weapon alone, which matters in fast matches.
- In gacha, the **kit sells the pull**. The weapon and the attack animation star in the banner trailer, the store screenshots and the ad creatives.
- *Hypothetical:* a cozy F2P adventure where the hero fights with a **garden hose**. Water knockback, plants that grow on watered tiles, washing slime off allies. Brainstorm every use, just like the spatula advice says.

**🪝 Make it stick:** "Show me your weapon and I'll tell you who you are." Cloud without the sword is just a guy with very ambitious hair.

### 2b. Ranges, elevations, directions
**🧠 Big idea:** The attack you use depends on **how far away the target is**. Your character's range(s) shape how players approach every single fight.

**📋 The details — the four ranges of combat:**

| Range | Typical moves | What the player tries to do |
|---|---|---|
| **Close** | Grapples, punches, strikes, sweeps, tickle fights, quick burst moves (head butts, uppercuts) | Get in close and stay there |
| **Medium** | Weapon swings, flying kicks, dash attacks | Control the spacing |
| **Long** | Shooting or throwing projectiles or spells | Keep enemies away |
| **Area effect** | Smart bombs and "super" attacks that hit at long range or across the whole screen | Clear the crowd / panic button |

- **Mario** is almost entirely close/medium range: he has to touch enemies to beat them. **Contra** is long range: you win by shooting things *before* they get close.

**The four elevations.** You don't have to use all four, but every elevation you *do* use needs its **own set of attacks**, because each makes the player handle combat differently:
- **Standing**: the player's basic shoulder height. Hits man-sized and bigger opponents.
- **Low**: strikes at the enemy's waist or below, delivered from a crouch or kneel.
- **High**: over the head of an average enemy. Only possible by **jumping, then attacking**. Used against flyers and big enemies like bosses.
- **Aerial**: the player has jumped or flown up to attack. Either **extended jumps** (Devil May Cry, Dante's Inferno) or **true flight** (Marvel Ultimate Alliance, Dark Void).

**Directions:** any attack, at any range or elevation, can be **vertical** or **horizontal**.
- **Maximo: Ghosts to Glory** (Rogers' own game): one skeleton guard wore an armored helmet that **deflected overhead vertical** strikes. Another carried a shield that **blocked horizontal** swings. The fix was to use the opposite direction on each.

**🖼️ The book's range diagram (p. 246), redrawn:**
```
            ↑ aerial            "entire screen = smart bomb"
   high ┤   (o)      ↗ diagonal
   mid  ┤  /|\  ───────→ straight        (cone = the wedge between
   low  ┤  / \       ↘                    diagonal-up and diagonal-down)
        └──[ melee ]──[ projectile ]──→
        ( ……… radial circle around the hero = area attack ……… )
```
Melee owns the ground near the hero. Projectiles own the ground farther out. Attack *shapes* are straight, diagonal, cone and radial, and the outermost layer is the whole screen.

**📱 F2P mobile translation:**
- **Clash Royale** cards spell this out: every unit has a **range** and a **target type** (ground, air, buildings). "Can it hit air?" is Rogers' elevation idea turned into a rule.
- **Brawl Stars** brawlers split into short-range bruisers, long-range sharpshooters and **throwers** that lob over walls. The lob arc is an elevation trick for a top-down camera.
- **Archero** ability picks like Front Arrow, Diagonal Arrows and Side Arrow are literally Rogers' straight / diagonal / spread shapes, sold as roguelite upgrades.
- The Maximo skeletons are the grandparents of **gacha weakness systems**. **Honkai: Star Rail** shows each enemy's weakness types, and **Genshin Impact** has elemental shields that need a specific element to crack. "Hit it with the right attack type" is the same idea.

**🪝 Make it stick:** **Range × Height × Direction = the Combat Rubik's Cube.** Every new face you twist adds a new enemy design. Maximo's skeletons are a cube puzzle with bones.

### 2c. The attack matrix
**🧠 Big idea:** Put every attack in a table so you can **compare, contrast and guarantee variety**. Each attack should be distinct and useful in a specific situation.

**📋 The details — Rogers' sample matrix (p. 248), reconstructed:**

| Attack | Control | Range | Speed | Direction | Damage | Special |
|---|---|---|---|---|---|---|
| Slash | Square | Close | Medium | Horizontal | Medium (10 hp) | A shield can block it |
| Overhead strike | Triangle | Close | Medium | Vertical | Medium (10 hp) | A helmet can stop it |
| Thrust | Forward on stick + Triangle | Close | Fast | Forward | Strong (25 hp) | Knocks the target back |
| Jump strike | X, then down on stick + Triangle | Close/medium | Slow | Downward | Strong (25 hp) | Stuns any target within a two-unit radius |

**Columns an attack matrix should have:**
1. **Attack name**
2. **Control scheme** (the input)
3. **Range**
4. **Speed**
5. **Direction**
6. **Damage**: both a strength label *and* the number (a value or a percentage)
7. **Special**: whatever makes this attack different from the others

- Add as many extra columns as you need: degrees of severity, defensive items/moves, and so on.
- Look at how the sample table works: the two "medium" attacks are each countered by a different defense (shield vs helmet). The two "strong" attacks pay for their damage with something (one is fast but short; one is slow but adds an area stun). That's variety by design.

**📱 F2P mobile translation:**
- In F2P the attack matrix is your **unit / hero / card stat sheet**, the spreadsheet that drives balance and LiveOps tuning. Clash Royale's in-game card info shows this kind of data publicly (hitpoints, damage, hit speed, range, targets...).
- Modern columns to add: **cooldown**, **cost** (elixir / energy / mana), **DPS**, **time-to-kill (TTK)** vs common targets, **animation lock**, **counters / countered by**, **rarity**, **per-level scaling**, **status effects**, **AI target priority**.
- Balance smell test: if two rows have nearly identical numbers and no unique "Special", one of them is dead content, and in a gacha that means a pull nobody wants.

**🪝 Make it stick:** The attack matrix is a **dating profile for moves**. If two moves have the same profile, one is getting ghosted.

### 2d. Timing, chains, wind-ups
**🧠 Big idea:** **Timing** is one of the biggest keys to great combat. Inputs should feel instant. Chains reward rhythm. Slow wind-ups belong only to heavy, risky, huge-payoff attacks.

**📋 The details:**
- When the player presses the button, the attack should come out **quickly**.
- For smooth combat animation, aim for **60 frames per second**. Plenty of games are fine at **30 fps**, but the lag and stutter that can happen at lower frame rates really hurts combat.
- **Don't** use long, elaborate **wind-up** animations on normal attacks. They throw off the player's timing, so they miss, or they hit when they didn't mean to.
- **Quick moves** can be done rapidly one after another, but they tend to cause **button mashing**.
- **Lunges** are smoother thrusts that bring the character back to their original stance. Mix quick strikes with lunges to build a **combat chain**, so the basic attack doesn't get boring.
- **How to build a combat chain:**
  - Make **three or more** attack moves that play one after another.
  - Press once → first animation.
  - Press again within a **short window (usually within about a second)** → second attack, which usually does **more damage**. That's the reason to chain.
  - A third attack does even more, and so on.
- **Forward translation rule:** if the player can land several hits in a row, the animation (or the code) must **move the character forward**. Otherwise the knocked-back enemy drifts out of reach and the next hit in the chain whiffs. The book's drawing shows the hero missing until he steps in.
- **The exception: elaborate wind-ups are great for heavy hitters.** Long wind-ups lead to devastating attacks, perfect for oversized or heavy weapons. The player has to **risk the wait** for the **reward** of a monster hit. Rogers flags **risk vs. reward** as a huge theme that comes back later in the book.

**🖼️ Chain timing diagram** (the 10/15/25 numbers are my example values):
```
TAP ─▶ [Hit 1 · 10 dmg] ─(≤ ~1 s window)─▶ TAP ─▶ [Hit 2 · 15 dmg] ─(window)─▶ TAP ─▶ [Hit 3 · 25 dmg + knockback]
            │ each hit also steps the hero FORWARD so the knocked-back target stays in reach
            └─ miss the window → chain resets to Hit 1

HEAVY:  HOLD ──── long wind-up (vulnerable!) ────▶ [SMASH · 60 dmg]   ← risk vs reward
```

**📱 F2P mobile translation:**
- **Touch latency + frame rate:** low-end Android phones throttle when hot. Offer 30/60 fps options and keep input response snappy even at 30. Many phones now run 90–120 Hz, so players notice sluggish input.
- **Genshin Impact** normal attacks are multi-hit strings you get by tapping repeatedly, and holding gives a **charged attack**: a combat chain plus a wind-up, one button, mobile-friendly.
- **Brawl Stars** gives each brawler an **ammo bar** that reloads over time. It's a built-in anti-mashing limiter, so every shot is a decision.
- Auto-attack genres (**Survivor.io**, idle RPGs) remove mashing completely. That's great for one-thumb play, but you lose the timing skill layer. See Section 12.

**🪝 Make it stick:** **"Quick, Quick, SLAM."** Fast taps chain the rhythm; the slow slam is a bet. And remember the moonwalking hero who chains three hits into empty air because nobody told him to step forward.

### 2e. Juice: VFX, hit reactions, drama
**🧠 Big idea:** A hit has to **look, sound and feel** like a hit. Feedback *is* the reward.

**📋 The details:**
- **Particle and visual effects** make attacks feel dynamic and rewarding:
  - **Slice streaks** on sword swings and **speed lines** on dashes (the **Onimusha** games).
  - Old standbys: **fire trails** and **blood splatter** (**MadWorld**, Sega, 2009).
  - Big moves like ground pounds and smashing uppercuts deserve **screen-filling effects**: debris, dust, lightning bolts, any eye-catcher. Be big, dynamic and dramatic. The more spectacular, the better.
- **Hit reactions:** if the enemy doesn't react, the hit feels like it **skipped off the surface**. If you can't afford reaction animations (memory limits, say), at least play **effects and sound effects** that confirm the hit landed.
  - **Powerful sound effects** make attacks feel more rewarding.
  - **Vocal reactions**, like a big "Oof!" from the enemy, are always satisfying.
- **Exaggerate the impact** of powerful hits to sell strength and drama. Enemies should **react where they were hit**: smack the head and the head (and some teeth) snaps back; kick the leg and a bone splinters, or at least they topple. **Ragdoll physics** (Havok, PhysX) makes this easier in code, but good hand-made **keyframe animation** is sometimes still best.
  - The book's three drawings escalate: stars on contact → head snaps with teeth flying → head and helmet launch off.
- **If conflict is drama, combat should be full-blown opera.** Hype it up. A particularly powerful strike gets **camera shake**, controller **rumble**, or **slow motion** to show off the hit. **Batman: Arkham Asylum** slows time when you take out the last enemy in an encounter.

**📱 F2P mobile translation — juice on a 6-inch screen:**
- **Hit-stop** (freezing for a few frames on impact) sells weight even when the characters are tiny.
- **Floating damage numbers** are mobile RPG juice. Crits come bigger, colored and bouncier. Idle and gacha games make the number *itself* the spectacle.
- **Haptics** replace controller rumble: one short tick on hit, a stronger buzz on kills and crits. Make them toggleable.
- **Screen shake: less is more** on a handheld screen held close to the face. Always add a reduce-motion option.
- **Readability beats spectacle:** in a 3v3 Brawl Stars–style match, effects must never hide **enemy telegraphs** (attack wind-ups, danger zones). Team colors (blue = yours, red = theirs) are non-negotiable.
- Reward juice is combat juice: coins bursting out of an enemy and flying into the counter is a **hit reaction for your economy**.

**🪝 Make it stick:** A hit with no reaction is a **high-five to a ghost**. Combat should be an opera: Valkyries, a glass-shattering final note, and a shower of teeth.

### 2f. Close battles, finishers, looking cool, QTEs
**🧠 Big idea:** **Close battles are more exciting**, and people want games that **make them look cool**. Finishers and QTEs turn players into action heroes, so use them carefully.

**📋 The details:**
- **Pearl of wisdom: close battles are more exciting.** Stomping hordes is satisfying, but for most of the game keep the player **evenly matched to their skill level**.
- **Cinematic finishing moves:** the action slows or freezes and the camera swings around the action. Common in fighting games (**Soul Calibur, Street Fighter**), and they spread into other action games because they look so cool. That sets up the chapter's rallying cry:
  > "PEOPLE WANT TO PLAY GAMES THAT MAKE THEM LOOK COOL" — Scott Rogers
- **QTEs (Quick Time Events):** nothing makes a player look cooler. The book's **Mighty Bedbug** drawing shows button prompts (A, X, B) over each beat of a choreographed beatdown, so the fight looks spectacular.
- **Batman: Arkham Asylum** uses prompt-driven choreography instead of letting the player flail around. Batman never misses a punch, so why should the player? Nail the prompt and you feel like a combat expert, just like Batman.
- **What a QTE is:**
  - Around since **Dragon's Lair**, and still in modern action games.
  - A **combat minigame** triggered mid-fight when an enemy or boss drops to a certain health level.
  - The player presses a specific button, or does a specific motion (waggle a motion controller or stick), inside a **very short window**.
  - Success → an animation of the hero pulling off an elaborate attack.
  - Most QTEs need **several presses** to reach the end of the sequence, which ends with the enemy or boss dying.
- **QTE design tips:**
  1. **Save QTEs for the most bombastic, elaborate attacks only.** Player control is limited during a QTE, so ask: "Could the player just do this themselves?" **Single-button QTEs** make good **finishing moves** (Darksiders, Batman: Arkham Asylum).
  2. **Put the button prompt in the same place on screen every time**, or players get confused about what to press.
  3. **Give players time** to recognize the prompt *and* press it. Recognition takes most people about a beat (a "one-one-thousand" count).
  4. **On a failure, get them back to the QTE fast.** If it took three attack patterns to reach the QTE, make them redo just **one** pattern before it triggers again.
  5. **Instant death on a failed QTE?** Rogers is torn. It allows great "hero gets torn apart" animations, but he dislikes instant kills in general. His recommendation: failing costs **substantial damage**, so the player survives to try again. If they're already on their last sliver of health, go ahead and play that brutal animation.

**📱 F2P mobile translation:**
- **Matchmaking is "close battles" as a system.** PvP ladders try to pair you with near-equals so most matches feel winnable. PvE difficulty is tuned so levels are *just* beatable. Narrow wins and comebacks are what get players talking.
- **Gacha ultimates are cinematic finishers.** **Honkai: Star Rail** ultimates and **Genshin Impact** bursts trigger short cinematic animations: the "look cool" payoff that sells characters. Players usually get options to skip or speed them up, because a finisher on loop 500 gets old (same as QTE tip #1).
- **Timing taps = mobile QTEs.** **Pokémon GO**'s shrinking throw ring (Nice / Great / Excellent) is a one-button QTE with graded success. It follows the rules: same spot every time, readable, forgiving.
- Mobile ad creatives are basically "make the player look cool" highlight reels.

**🪝 Make it stick:** **"Batman never misses, and neither should your player."** And QTEs are like hot sauce: one dash makes the dish, a whole bottle ruins dinner.

### 2g. Targeting, melee props, weapon design, world collision
**🧠 Big idea:** Help the player **pick targets**, make **grabbing world objects** easy, make **weapon upgrades visible**, and make weapons **respond to the world**.

**📋 The details:**
- **Targeting systems:**
  - Some let the player choose enemies in front of or behind them with a button or a stick direction.
  - Others treat targeting like a QTE: the attack window stays open as long as the enemy is on screen or nearby.
  - Footnote: **The Mark of Kri** (SCEA, 2002) had an inventive lock-on. You swept the analog stick like a **radar** to queue up a sequence of enemies, then took them down. The creators patented it.
- **Melee** = hand-to-hand combat. All the combat rules apply, but hands are lethal weapons *and* can grab **impromptu weapons** from the world: lead pipes, chairs, even cars. Make **picking up and dropping** them easy, with on-screen prompts if needed.
- **Weapon design checklist:** **speed, range, damage**, plus **extra effects** like fire or poison.
- **Upgrades must show on the weapon.** A "+3" on a stat screen doesn't give the player the gameplay information or the visual reward they've earned.
- **Sorting** (a weapon clipping through objects) looks bad. Instead, weapons should **respond to the world**: **rebound** off stone or metal, **blades sink** into wood (the book shows an axe stuck in a tree).
  - **Flip side:** the weapon will bounce off **any unbreakable object**. Design arenas around that, for or against the player. Example: a hero learns not to swing his giant axe in an arena full of unbreakable stone pillars, because the rebound gives the skeletons a free hit.

**📱 F2P mobile translation:**
- **Brawl Stars** shows the two-mode targeting idea well: **tap** the attack button to auto-aim at the nearest enemy, or **drag** to aim by hand. New players get help, experts get precision.
- **Visible upgrades are a monetization AND retention tool.** Good F2P gear shows **tier visuals**: rarity colors, glows, model changes at milestones (e.g. star-up or ascension). A grey "+3%" is a missed dopamine hit. Rogers was right in 2010 and it matters even more now.
- Context-sensitive props become **one big contextual button** on touch screens (e.g. auto-pickup when you walk over an item).

**🪝 Make it stick:** **"+3 is invisible. Flames are forever."** If your sword level went up and it doesn't glow, did it even level up?

### 2h. Stealth kills, grapples, lock-on
**🧠 Big idea:** Special situational attacks (**stealth kills, grapples**) are spectacular, but they need **strict conditions**. **Lock-on** makes any player look like an expert.

**📋 The details:**
- **Stealth kills**: quick attacks that kill or disable an enemy **in one move without alerting** enemies nearby.
  - Usually done from a **crouch or cover**, or by getting **behind** the target.
  - They often use **QTE-style prompts** to trigger and pay off with a **dramatic kill**.
  - **Only allow them under specific conditions** (right position, in cover, in shadow). Otherwise players use them instead of regular attacks all the time, which makes them an **exploit**.
  - Don't let a cool move get stale.
- **Grapples**: like stealth kills, they only trigger under **specific circumstances**.
  - Rare outside **fighting and wrestling** games (e.g. **WWE SmackDown vs. Raw 2010**, THQ, 2009).
  - Technically hard: **two-character collision** means the hero and the enemy must be **animated together** so it looks natural and nothing clips through (no sorting).
  - Worth it if you invest: devastating slams and throws.
  - Same as picking up items: make **grab and release easy**. Many games make it a **context-sensitive** move.
- **Lock-on systems**: another way to make the player look like an expert.
  - The later **Legend of Zelda** games do it especially well. Press a button to lock onto the **nearest enemy (or the one in front)**, flick the stick to **switch to the next enemy** left or right, and stay locked **while the button is held**. When an enemy dies, the system **automatically latches onto the next** available one.
  - Lock-on needs **HUD visuals** so players can track their target. The book's four examples:

| Lock-on marker | What it looks like |
|---|---|
| **Floor marker** | A ring or splat under the target's feet |
| **Pointer arrow** | An arrow hovering above the target |
| **Glowing aura** | An outline or glow around the target |
| **Health bar** | The target's health bar floating above it |

**📱 F2P mobile translation:**
- On mobile, **auto-lock is the default**. Touch screens can't do precise twin-stick target switching, so most top-down games auto-target the nearest enemy. MOBAs like **Mobile Legends: Bang Bang** let you set a **target priority** (e.g. lowest HP vs closest) so the auto-lock does what you mean.
- **Floor rings and floating health bars** are the standard target markers in top-down mobile games: readable at small size and never covering the character art.
- Stealth kills are rare in F2P, but the "**conditions or it's an exploit**" rule applies to any burst move: an assassin's backstab bonus, an execute below X% HP, a crit-from-stealth effect. If it has no conditions, it becomes the whole meta.

**🪝 Make it stick:** A stealth kill with no conditions is a **cheat code with a nice animation**. Lock-on = the game holding your hand while you look like a ninja.

---

## 3. Now You Have to Kiss Me — missing is fine (but rescue the strugglers)
**🧠 Big idea:** Letting players miss builds **mastery**. Players who keep failing should get **quiet help**, because the real goal is to keep them playing.

**📋 The details:**
- **Missing isn't a bad thing.** It forces players to get better with their attacks, and mastering combat timing makes them feel like more of a badass.
- If a player **just doesn't get it**:
  - **Quietly enlarge an enemy's collision (hitbox) at runtime** once the player has whiffed or died several times back to back, or
  - **Offer to drop the difficulty** to a lower setting.
- Bottom line: **do whatever it takes to keep your player playing.** (The book's drawing shows a sword "hitting" an enemy even though it passes beside him: generous collision in action.)

**📱 F2P mobile translation:**
- This is **Dynamic Difficulty Adjustment (DDA)**, and it's everywhere in F2P: aim assist that gets stronger after misses, enemy stats softening after repeated fails, levels offering a free booster after several losses (a labeled pattern, not a claim about any specific game).
- **The ethics line:** DDA that **helps** a struggling player is great. DDA that makes levels **harder on purpose so you'll buy boosters** is a predatory dark pattern, and it's an active topic of player distrust and regulatory interest. Rogers' intent is the right one: help players *continue*, don't squeeze them.
- Track it: watch **fail rate per level** and **churn after N consecutive fails** in your analytics. Those are the "player doesn't get it" signals Rogers was eyeballing.

**🪝 Make it stick:** **"Secretly widen the doorway."** If they keep bumping into the frame, make the door bigger and don't tell them.

---

## 4. On Moving — dodges, dashes, jump attacks, vaults
**🧠 Big idea:** In any martial art, **moving matters as much as attacking**. The goal of a real fight is to **not get hit**. Give players moves to escape damage *and* moves that combine with attacks to make them faster or stronger.

**📋 The details:**
- (Footnote joke: Rogers isn't advocating real-life fighting... the first rule of fight club is... oops.)
- Give the player movement for two jobs: **retreating / avoiding damage**, and **combining with combat moves** so attacks come out faster or hit harder.

**Dodges and rolls:**
- Get the player out of the way of attacks, fast.
- **Quick and easy to do**: one button press plus one stick direction.
- **Mind your metrics!** The dodge must carry the player **completely clear** of:
  - wide-range attacks,
  - long-reach weapons (halberds, huge swords),
  - radius attacks (explosions, magic spells).
  - Otherwise players end up doing what World of Warcraft players call **"the graveyard hustle"** (dying and running back from the graveyard).
- After a dodge, give **a beat to get back on their feet**. It lets the player **reorient**, and it stops dodge-spam from becoming a **movement exploit** (rolling everywhere because it's faster than running).
- Let dodges and rolls **get players past hazards**: dashing through a closing door, rolling under a swinging blade. Nice moments of tension.
- **Camera warning:** during a roll or dash, the camera tends to **collide with the very hazard** being avoided.
  - Don't let the camera **pass through** the hazard (looks sloppy).
  - Don't make the camera **dip down** with the player (disorienting).
  - Instead, **lock the camera in place** during the dodge, then have it **"catch up"** once the player is clear. (→ L06 camera)

**Dashes:**
- **Forward** moves used for **defense or attack**. Like dodges, they must be **very quick to do**.
- **Devil May Cry** (Capcom, 2001) and **Darksiders** (THQ, 2009) have dashes you can **upgrade** with stronger sword or punch moves.
- Even the **basic dash should do something besides moving** you. It should feel quick, powerful, fast and, well, *dashing*.
- Use it to **ram enemies** or **smash breakables**. A dash targets one enemy, but momentum can carry the player into **several enemies at once**, or create a **"sonic boom"** that sends bad guys flying.

**Jump attacks:**
- Jumps are mostly for traversal, but they can be combat moves. Think of Mario's **"butt bounce"** (stomp).
- **Generous collision:** the hitbox should be like a good pair of pants, with **plenty of room in the seat**. Don't make these attacks **pixel-perfect**.
- After the hit, apply a **recoil bounce** that pushes the player a short distance away, so the hero doesn't touch down beside the enemy and get hurt.
- If the bounce doesn't kill the enemy, **stun** it to keep the risk to the player low.
- Many games let the player **steer during the recoil** to **chain bounces** across several enemies' heads. Give an **escalating bonus** for each extra enemy bounced, and make it a **big moment**, because they just did something cool.
- **Jump-attack guidelines for weapon-wielding heroes** (you don't have to be a short Italian plumber):
  1. The player's **maximum jump must be taller than the tallest enemy** you can jump-attack. Otherwise you collide with heads and shoulders, which looks weird.
  2. **Landing = impact.** Apply the same rules as an attack hit: **freeze the action for a beat** (enemy or world), make **explosive effects**, **rumble** the controller, whatever makes it feel powerful.
  3. **Even a miss can do something**, like a radial stun or knockback for nearby enemies.
  4. **Quick recovery**, because players want to get straight back into the action...
  5. ...**or** add a **delay as risk/reward**. Mario plants his butt firmly in the ground after a butt stomp. If he misses, he's vulnerable for a beat.

**Vaulting:**
- If jumping feels too goofy for your big bad space marine or soldier, let them **vault** over obstacles, which gives battlefield traversal more variety.
- Vaulting pairs nicely with **cover systems** and **ducking** (see Section 7).
- **Gears of War 2** (Microsoft Game Studios, 2008) shows a **prompt** when you can vault a low wall.

**🎮 Book examples:** WoW → "graveyard hustle" when dodges fall short. DMC / Darksiders → upgradeable dashes. Mario → butt bounce, recoil, chain bonus and the planted-butt risk. Gears of War 2 → vault prompt.

**📱 F2P mobile translation:**
- **Archero** makes moving *the* defense: your hero only shoots while standing still, and moving is how you dodge. "Not getting hit" becomes the whole skill.
- **Survivor-likes** (Survivor.io and similar) hand all attacking to the game and make **movement the only input**. Rogers' "moving matters as much as hitting" taken to the extreme.
- **Genshin Impact**'s dash/dodge costs stamina and has invincibility frames, so the "get completely clear" metric is built in. Stamina cost is the modern version of Rogers' "beat after a dodge" anti-exploit rule.
- Brawl Stars–style dash abilities follow "do something besides move": dashes that damage, knock back or break walls.
- **Touch input check:** "one button + one stick direction" maps to a **swipe** or a dodge button by the right thumb. Keep it to one gesture.
- Escalating bounce bonuses = **combo multipliers** in arcade mobile games. Make the 4th chained kill feel like a jackpot.

**🪝 Make it stick:** **"Dodge Clear, Dash Hurts, Stomp Bounces."** Hitboxes like good pants (room in the seat). The graveyard hustle is what happens when your dodge is one step too short.

> ⚠️ **2010 → 2026:** "Controller rumble" → phone **haptics**; "camera dips during roll" → mostly a 3D problem. Top-down and isometric mobile cameras avoid it, but the "lock, then catch up" trick still works in 3D mobile action games.

---

## 5. On Guarding — blocks, shields, armor
**🧠 Big idea:** **Blocks must be instant.** How durable your shield is decides whether players actually use it. Armor can protect, inform, unlock abilities and let players customize their look.

**📋 The details — blocks:**
- Rogers' joke: "**WATCH OUT!**" — reading that took about as long as you'll have to react to an attack. So blocks must be **quick to pull off**.
- Two kinds of block:
  - **General blocks** (action games): **one button** to cross weapons or arms, or raise a shield. An **all-purpose** block for any situation and any enemy. Whether it's a one-handed **buckler** or a big Roman **scutum**, it works the same way: press to block, hold during the fight.
  - **Positional blocks** (mostly **fighting games**): tied to a specific **elevation** (high or low), needing a stick move and/or a button press at the right height.
- **Confirm the block:** sound effects matter. A loud **CLANG!** tells players they blocked successfully. Or show **sparks** or another effect, **as long as it's not blood** (blood says "you got hurt").
- Some blocks **push the player back** a little, so they have to step back in to hold their ground. Rogers thinks penalizing a *successful* block is a bit of a jerk move, but it's your game.
- **Can the block be held?**
  - **Arm blocks** are usually quick and **drop after about a second**.
  - Some fighting and action games let you **hold the block indefinitely**, or until an enemy uses a **block-breaking** attack or knocks you off your feet.
  - **Shield blocks** can last longer, letting the player **"hide"** behind the shield for a while.
  - Some designers hate letting players **camp** behind a block. Counter it with **breakable shields** or enemy **knockback attacks**.
  - Polish: don't let the shield **clip through the ground** when the player crouches to block low.

**Breakable vs. unbreakable shields — the Maximo lesson:**
- Decide whether your shield can break. It changes how players use it.
- **Maximo 1:** the shield was **breakable** (and could be upgraded to stronger versions). Because it was still a **limited resource**, players **avoided using it** and jumped or dodged instead.
- **Maximo 2:** to encourage blocking, the shield became **unbreakable**. Players were **much happier to block** once the fear of breaking it was gone.

**Shields aren't just for blocking anymore. Alternate uses:**
1. Combine with a **dash** to clear obstacles
2. **Smash** enemies at close range
3. **Throw** it as a short-range projectile
4. Ride it as a **sled** down steep slopes
5. Hold it **overhead** against falling debris or lava
6. Use it as a **crowbar** to move big objects
7. Wear it on your **back** against back-stabbers
- Bonus: put the shield on a **chain** like **Rygar** and it becomes a whole new weapon.

**📋 The details — armor:**
- **Encumbrance:** the more armor you wear, the **slower (and noisier)** you get. Common in **RPGs**, rare in **action** games. Fine if you're going for "realism", but in an action/combat-focused game you're probably better off skipping it.
- **"Paper doll" armor:** if your combat cares about body parts, the player armors **head, torso, arms, hands, legs and feet** separately.
  - Pros: feels more **realistic**, and gives players **more items to buy and collect**.
  - Cons: needs a **big interface** (it has to show the whole body).
  - Make it **easy to find, select and swap** armor, and to **discard or sell** unwanted pieces.
- **Upgrades must look dramatically different.** Don't cop out with a "+2 chainmail shirt" after the first boss. Full plate should look substantially different (and cooler) than a leather jerkin. When the armor *looks* better, the player can read their **"rank" at a glance**.
- **Give it a unique name**, like "Holy Armor of Protection" or "Dragon Scale Armor", so it feels like a prize worth having.
- **Armor as information:**
  - In **Dead Space**, Isaac's suit has a **health meter running down the spine**: status at a glance, no HUD needed.
  - **Ghosts 'N Goblins** does it in reverse: as Arthur's armor **pops off**, he's closer to death. Works for **enemies** too, showing how many hits are left.
- **Armor as new abilities:** can't move that heavy block? Hydraulic power armor can. The "armor" needn't be a literal suit of metal: Mario's **Tanooki suit** protected him *and* granted flight, growth plus an invincible statue form. (Footnote: a tanuki is a Japanese raccoon dog, so Mario is wearing raccoon-eared footie pajamas.)
- **Armor as customization:** a cheap way to let players personalize their hero **while the base model stays untouched**. **World of Warcraft** nails it: gear can be looted, bought or crafted, and a player who spots someone else's flashy helmet immediately wants one. That motivates people to put more hours into your game. The same trick works with **hats, unique weapons and mounts**. **More customization is better.**

**🎮 Book examples:** Buckler vs scutum → general block is function, not looks. Maximo 1 vs 2 → limited durability makes players hoard. Rygar → chained shield as a weapon. Dead Space / Ghosts 'N Goblins → armor as a health display. Tanooki suit → armor as an ability. WoW → gear envy drives engagement.

**📱 F2P mobile translation:**
- **The Maximo shield lesson = the F2P hoarding problem.** Players hoard limited consumables (boosters, potions, revive tokens) "for later" and never use them, which also means they never feel the value and never buy more. Fixes: give consumables **often and for free early**, make some **regenerate**, add **use-it-or-lose-it** event items, or make the "shield" free and **unbreakable** (a regenerating ability instead of a consumable).
- **"Guarding" in F2P metas:** **Clash of Clans** gives your base a temporary **shield** after it gets raided, and **Coin Master** shields block attacks on your village. These are blocks at the meta level: protection that's limited, so it carries strategy.
- **Paper doll = gear slots.** **Raid: Shadow Legends** heroes equip artifact pieces in slots (weapon, helmet, shield, gloves, chest, boots...) with set bonuses. Rogers' "more items to buy and collect" is exactly why gacha RPGs love slots: more sinks, more chase.
- **Visible upgrades + names = sellable cosmetics.** WoW's "I want that helmet" moment is the engine of **skin monetization** in **Brawl Stars, Mobile Legends: Bang Bang and PUBG Mobile**. Cosmetics are visible to *other* players in the match. That's social proof, and it's the most ethical big money-maker in F2P because it doesn't affect power.
- **Customization without new base models** is a production win: one rig, dozens of skins, a LiveOps calendar full of drops.
- Keep **encumbrance** out of mobile action games: slowness on a touch screen feels like lag.

**🪝 Make it stick:** **"A shield you're scared to break is a shield you'll never use."** And WoW's helmet rule: a cool hat is a walking billboard that says *"you could have this too."*

---

## 6. State of the Art Bang Bang — shooting, rhythm, and the Three As
**🧠 Big idea:** "Aim and pull the trigger" hides a huge design space. Ranged combat is about building a **distinctive rhythm**, and the **Three As (Action, Aiming, Ammo)** are your main controls for it.

**📋 The details:**
- Section opener: a gun-crazy line from the villain Clarence Boddicker in **RoboCop**.
- **Shooting looks simple, but the popular multiplayer shooters play very differently:**

| Game | What defines its combat |
|---|---|
| **Quake** | Maps push **linear action** and **predictable looping movement**. **Weapon and armor pickups** can flip the fight in a heartbeat |
| **Halo** | Plays like a **sport**, with game-like modes. **Slower rhythm** than many shooters. **Regenerating health** encourages **"attack, then retreat"**. **Vehicles** matter a lot |
| **Call of Duty: Modern Warfare** | Multiplayer focuses on **short-range, intense** fights. Players **upgrade weapons and characters like in an RPG** |
| **Team Fortress 2** | RPG-like, with players in **widely different, skill-based roles**. Modes reward **teamwork** over solo play |
| **Left 4 Dead** | **Teamwork or you lose.** Instead of one-on-one, a **handful of players vs. an endless zombie horde**. Modes feel more like **stories** |

- **Ranged combat changes everything**, even in games where shooting isn't the main thing. So **if your game isn't a shooter, hold guns back until later**. Let players learn their moves and attacks without a gun first, then arm them once they've learned everything they can.
- **Hardy LeBel** (creative director on **Halo: Combat Evolved** and **SOCOM 3**): ranged combat is about building a **distinctive rhythm**. Factors that shape it:
  - how targeting works
  - how long reloads take
  - how quickly the weapon cycles
  - how accurate it is
  - how deadly each hit is
  - how plentiful ammo is
  - whether **area-of-effect** weapons (grenades) are on offer
  - player **health mechanics**
  - and also **level design, AI behavior and mechanics**.
- To make that digestible, start with the **Three As: Action, Aiming, Ammo.**

### The First A — **Action** (loading, firing, unloading the gun)
Questions to ask:
- How fast can the player **reload**?
- Is reloading **manual** (button press) or **automatic**? Reloading can create great **risk/reward**, because the player is **vulnerable** while reloading. In **Gears of War**, nailing the timing of a manual ("active") reload speeds it up, while fumbling it makes the reload **slower than normal** and keeps you exposed for longer.
- Is **ammo limited**? Does the player even need to reload at all?
- What's the **rate of fire**? Faster guns burn ammo faster than single-shot weapons. Single shots or **bursts**?
- Does the **firing bloom** (muzzle flash/smoke) block the player's view?
- Can one shot hit **more than one target**?

### The Second A — **Aiming** (how the player sights a target)
- Aiming can **make or break** a shooter.
- Early shooters relied purely on reflexes: get the cursor on the target and fire at the right moment.
- Until **Halo: Combat Evolved** (Microsoft, 2001), most successful FPS games were on **PC**, partly because a **mouse** makes aiming easy. Halo used **aim assist** to tame the Xbox's analog sticks.
- Whatever method you pick (aim assist, auto-aim, free aim...), design the targeting for **your target audience's tastes**.
- **Aiming questions:**
  - What is the aiming method? Is there a **scope**, and how much of the screen does it cover?
  - How does **depth of field** play in? (Nice trick: blurry distant objects snap into focus through a long-range sight.)
  - Is aiming **manual**? Does the gun **drift**? Can the player **steady** the shot? What's the **max distance** for a shot?
  - Is aiming **automatic**? Is there a **quick-fire mode**? An **auto-aim/lock-on** system?
  - Does the gun **kick** and throw off your aim? Does it **climb** like a Thompson submachine gun?
  - Are there **aiming aids**: laser pointers, **bullet time**, heat-seeking ammo?
  - Can the player **move while aiming**? Are there limits on aim direction (diagonal, overhead)?
  - Can the scope **see differently**: infrared, motion detection, heartbeat? Can the gun be **modded**: silencer, add-on grenade launcher, bayonet?
  - Can shooting **solve puzzles or do trick shots**? Shoot targets, shoot locks off doors, shoot the gun out of an enemy's hand, ricochet a bullet into an enemy?
  - Can the player **turn off or swap** the targeting style?
- **The reticule (and iron sights) should be one of the most sophisticated feedback systems in the game.** It may need to show: **aim, bullet spread, recoil, jamming, overheating, ammo, hits vs. near misses, friend or foe**, and more. It has to do all of that while staying **useful and unobtrusive**.
- **Very Important Thing: play the best shooters and study how they solved it.** Deconstructing best-in-class games will improve your own gameplay enormously.

### The Third A — **Ammo** (what the player shoots)
- **Where and how** is ammo carried? Is there a **carry limit**? Does each gun need its **own ammo type**?
- Does ammo have **special effects**: incendiary, poison, heat-seeking, armor-piercing?
- What happens when a shot **misses**? Does it hit the environment and affect it: **break glass, chip plaster, ricochet off metal**?

### Gunplay tricks
- **Sound sells danger and excitement**: weapon fire, bullet impacts, enemy fire, bullets whizzing past.
- Play the **gunshot and impact sounds at full volume regardless of distance**, so players can tell whether their shot landed. Also make sure they can hear the character's **voiceover**.
- **Weapon VFX**: muzzle flash, spent shells flying out, smoke from the barrel. All of it adds realism.
- Players generally prefer **shorter-range gunfights**, because they're more exciting.
- However gory (or not) your game is, **always show an impact effect** when a bullet hits: sparks, explosions, spraying gore.
- **Level design IS game design for ranged rhythm:**
  - **Long open corridors + high lethality** → players play **cautiously**.
  - **Lots of cover + frequently broken line of sight + regenerating health** → fights become **swirling dogfights** as players engage, disengage to heal, and re-engage.
- **LeBel's closing advice (paraphrased):** players expect ranged combat to feel **powerful and satisfying**. It's tempting to make ranged weapons **weak** so the player doesn't seem overpowered. Resist that urge and **be generous** to the player. They'll thank you.

**🎮 Book examples:** Quake / Halo / CoD MW / TF2 / Left 4 Dead → five very different shooter rhythms. Gears of War → active reload risk/reward. Halo CE → aim assist made console FPS work.

**📱 F2P mobile translation:**
- **Mobile aiming is the whole battle.** **Call of Duty: Mobile** offers a **simple mode** that fires automatically when the crosshair is on an enemy, alongside an advanced manual-fire mode. That's "design aiming for your audience" plus "let players swap targeting style". **PUBG Mobile** supports **gyroscope aiming**, a new kind of "aiming aid".
- Aim assist on touch is the modern version of Halo's analog-stick fix: thumbs are worse at aiming than sticks, and sticks are worse than mice.
- **Brawl Stars** packs the Three As into a tiny HUD: **ammo segments** under the brawler (Ammo), an **aim cone/line** while dragging (Aiming), and **reload speed** as a key stat (Action). The reticule-as-feedback rule shrunk down to a phone.
- **Rhythm through maps:** Brawl Stars' **bushes** and walls break line of sight, and brawlers **heal when they're out of combat for a few seconds**. That's LeBel's "cover + broken sightlines + regen = swirling dogfights" recipe on a phone.
- **Be generous:** mobile shooters inflate hit feedback (hit markers, kill banners, damage numbers) because tiny screens weaken the sense of impact.
- "Save guns for later" → **unlock pacing** in FTUE: introduce one combat verb at a time and hand out the power tool once the basics are learned.

**🪝 Make it stick:** **The Three As = Action, Aiming, Ammo**: "**A**lways **A**sk **A**bout the boomstick." Load it, point it, feed it.

> ⚠️ **2010 → 2026:** "Mouse vs analog stick" now has a third contestant, the **thumb on glass**. Expect auto-fire options, generous aim assist and big hit indicators. LeBel's rhythm list is still the perfect checklist.

---

## 7. The Best Gun for You — weapon archetypes and balance
**🧠 Big idea:** Start from **real-world weapon roles**, then design for **effectiveness and distinctness**. Every weapon gets a clear niche, and any overlap comes with a trade-off.

**📋 The details:**
- Even made-up guns benefit from starting with **real-life counterparts**, because real weapons are built for **specific roles** that carry over into your game. That only gets you halfway, though.
- Also think about weapons in terms of **effectiveness**. The book's drawing is a joke ladder of sci-fi guns: **zap pistol = good → zap rifle = better → blazer cannon = best → kill-o-zap = freakin' awesome.** (A progression of tiers.)
- **Balancing is tricky**, especially with real-world equivalents. **Gun-nut players** have strong opinions about which gun is better and how each should behave. You'll go crazy trying to please them all, so **build weapons around what your game needs first**.

**Weapon archetypes (every rule Rogers gives):**

| Archetype | Shot shape and range | Pace / ammo | Strengths | Weaknesses / design notes |
|---|---|---|---|---|
| **Pistol** | **Straight line** (unless you're the curving-bullet guy from *Wanted*) | Slow pace. Magazines of **6–15 rounds**, so **frequent reloads** | Predictable, easy-to-read shots. (Careful: the straight line is also what *limits* where you can shoot and which enemies you can hit, so treat it as a built-in constraint, not only a perk) | **One enemy at a time**, unless the ammo **pierces** several |
| **Rifle / sniper rifle** | Long, straight. You must **aim** | Many carry **big ammo loads**, with **drum magazines up to 100 rounds** | Long-range precision | Usually **can't fire from the hip**. The player is **vulnerable** looking down a scope (**tunnel vision**), a perfect moment for an enemy to sneak up |
| **Shotgun** | **Cone**, shorter range than pistol/rifle | Carries **less ammo** than pistols or rifles | **Hits several targets**. **High damage up close** | Weak at range |
| **Flamethrower** | **Cone**, short range | Burns through **propellant fast** | Blast can be **sustained**. Does **residual (lingering) damage** | Short range |
| **Automatic weapons** (machine guns) | Spray. **Accuracy goes out the window** | High fire rate **eats ammo fast**, even with bigger magazines | Fast killing | Add a little **kick, drift or spray** so it feels real and players have to **master** it. One-handed or two-handed? **Dual-wield?** That decides what else the player can do while shooting |
| **Heavy weapons** (miniguns, grenade launchers) | Big punch. Grenade launchers are **harder to aim** | Magazines from **a dozen grenades** to **hundreds of minigun rounds** | **Huge damage** | Need time to **warm up or cool down**. TF2's Heavy minigun takes a few beats to **spin up**, and you can keep it spinning without firing, but **enemies hear you coming** a mile away. **Call of Duty** changes its grenade launcher's **targeting** to feel different and **less accurate**, a very different "shooting" experience from pistols and rifles |

- **For any weapon, think range, speed and strength.** Track them in an **attack matrix** to compare and maximize variety. The book's weapon matrix (p. 267):

| Weapon | Short range | Medium range | Long range |
|---|---|---|---|
| Dual pistols | Strong | Weak | N/A |
| Assault rifle | Strong but slow | Very strong | Weak |
| Shotgun | Very strong | N/A | N/A |
| Sniper rifle | N/A | Medium | Very strong |

- Read it this way: **very little overlap**, and wherever two weapons overlap (pistols and rifle both "strong" up close), one of them **pays a cost** (the rifle is **slow** there, in shooting or reloading speed). **Distinct weapons make a game feel well-rounded.** Each column has exactly one clear "best pick".
- **Ranged doesn't mean guns.** Fantasy games have arrows, magic missiles, cones of cold... Same guidelines apply: **range, damage, and the Three As**.
- **Friendly fire in multiplayer?** It depends on the mode. It makes more sense in **PvP** than in **co-op**. Whatever you choose, **let players toggle it on or off**.
- **Out of bullets?** Players feel **incredibly powerless** in a shooter with nothing to shoot. Always give them an **always-available melee option**: knife, fists, pistol-whip, rifle-butt smack. Being able to **bash the baddie** keeps things fair and realistic. **Gears of War** goes all out with a **chainsaw bayonet** mounted on the gun.
- **Loadouts:** "you can never have enough guns", but you don't want the player lugging a **golf bag of firearms**. Many games limit you to a **main gun + a sidearm**. If you do, switching must be **fast, ideally one button**. **Call of Duty: Modern Warfare 2** lets you **draw the sidearm faster than you can raise the rifle**, handy when you need a quick shot.
- **Cover systems** (**Gears of War, Uncharted**):
  - Let the player take cover against a surface or barricade to **avoid being shot**, and also **fire blindly** or in a limited way at enemies (the book's drawing: a guy blind-firing over a wall while his buddies wait for him to empty the clip).
  - The player is often **penalized for playing it safe**: no proper aiming while in cover.
  - Usually a **button press/command** to enter and exit cover.
  - Don't make cover too **"sticky"**, or players will snap into cover when they don't want to.

**🎮 Book examples:** Wanted → curving-bullet exception to "pistols shoot straight". TF2 Heavy → warm-up and audible spin as built-in trade-offs. CoD grenade launcher → change the targeting to change the feel. Gears → chainsaw bayonet as a melee fallback. CoD MW2 → fast sidearm draw. Gears / Uncharted → cover.

**📱 F2P mobile translation:**
- **Brawl Stars** brawlers *are* weapon archetypes with faces: short-range spread "shotgun" bruisers, long-range snipers, throwers that lob grenade-style arcs over walls, sustained-fire sprayers. The "little overlap, overlap pays a cost" rule is how a roster of dozens stays readable.
- **Clash Royale** is the cleanest mobile weapon matrix: splash vs single-target, air vs ground, range vs tankiness, cheap vs costly. Every card has a role and a **counter** (rock-paper-scissors with elixir prices).
- **Rogers' good → better → best → awesome ladder** is the ancestor of **rarity tiers** (Common → Rare → Epic → Legendary/Mythic). Make each tier *look* and *feel* different, not just add +10%.
- **"Gun nuts"** = your **meta-chasers and community theorycrafters**. Balance for your game's health, then publish clear patch notes. You can't please every forum.
- **Out-of-ammo rule → never leave the F2P player with zero options.** If energy runs out, there should still be *something* to do (a free mode, a daily chest, a social task). Leaving them stuck = churn.
- **Friendly fire** is almost never in mobile PvP: on small screens with team color confusion, it causes accidental griefing. Rogers' "make it a toggle" is the safe default for custom modes.
- **Loadout limits** map to mobile's **2–3 skill buttons**: main attack + one special + one ultimate. Thumbs only have so much room.

**🪝 Make it stick:** **"One gun, one job."** If two guns do the same job, one is wearing a fake mustache. And never leave a soldier holding an empty gun without a knife: powerless players uninstall.

---

## 8. Run and Gun — shooting galleries, mounted guns, vehicles, rails
**🧠 Big idea:** Many shooting experiences take movement partly or fully out of the player's hands. Then the design work is **readability, fair target timing, and scripted spectacle**.

**📋 The details:**
- Rogers opens with a Dr. Seuss-style rhyme (planes, trains, boxes, foxes): games let you shoot from just about anywhere, in countless ways.
- **Elements of a shooting gallery screen** (the book's numbered drawing, p. 270):
  1. **Turret** showing the weapon and the player (bottom center, in the drawing)
  2. **Shootable object containing a reward or power-up** (a crate)
  3. **Ground-based target** (a jeep)
  4. **A visual element explaining why you can't shoot "past the screen"** (a cliff and palm trees framing the edges)
  5. **Aerial target**, with a **clear indication** that it's been hit (smoke and debris on a plane)
  6. **Smaller aerial target**, usually **worth more points**
  7. **Smaller ground target**, also **worth more points**

```
 ┌─────────────────────────────────────────┐
 │ [4 cliff]     ✈5 (hit! smoke)    ✈6 small │
 │  🌴            🚙3                   🌴    │
 │ 📦2                                 ▬7    │
 │              [ 1 TURRET + player ]         │
 └─────────────────────────────────────────┘
   smaller targets = more points; screen edges justified by scenery
```

- **Mounted ranged combat** = shooting-gallery gameplay where the player **defends against waves** of incoming enemies.
  - **Unlimited ammo** → players **fire constantly**. **Limited ammo** → they fire in **short bursts**. A **cooldown** also pushes players toward bursts.
  - Add **tracer bullets**: they look cool *and* help players **lead** fast-moving or erratic targets.
  - **Tell players the weapon's range.** If some targets are unreachable, give a **visual justification** for the parts of the screen they can't hit.
- **Aerial and vehicular combat:** both the shooter and the target are moving (the book shows a helicopter chasing a jeep).
  - Give the player **chances to line up** the target. If they can see it coming, line it up and fire, they'll **feel in control**.
  - If too many targets **whip past** before the player can react, they'll fire blindly, which feels **mindless and frustrating**.
  - **Adjust the speed** of the targets or of the player's craft, naturally or artificially, to give plenty of shooting opportunities.
- **Rail shooters:** the player **doesn't control movement**. Examples: **House of the Dead: Overkill** (Sega, 2009), **Star Fox** (Nintendo, 1993). Rail sequences also show up inside **Red Faction: Guerrilla, Uncharted 2, Wet**.
  - **Unique advantage:** the developer has **full control of the camera and the sequence of events**, so you can stage guaranteed scares, furious shooting stretches and dramatic scripted events.
  - Some rail shooters are closer to a **theme park dark ride** (like Disneyland's **Haunted Mansion**) than to a video game. Interactive dark-ride shooters now exist in theme parks around the world, so inspiration has come full circle: dark ride → video game → dark ride.
  - Footnote stories: in **1974** a Disneyland guest fired a .22 pistol at a duelist ghost in the Haunted Mansion ballroom, cracking the giant pane of glass behind the "Pepper's ghost" illusion. Replacing it would have meant tearing the roof off (it had been lowered in by helicopter), so an Imagineer stuck a **rubber spider** over the bullet hole and its spiderweb cracks. Rogers says it's still there. A second footnote lists interactive dark-ride shooters to visit (e.g. **Buzz Lightyear's Space Ranger Spin**, **Men in Black: Alien Attack**, **Toy Story Midway Mania**, plus several European park rides).

**📱 F2P mobile translation:**
- **Rails are everywhere on mobile.** Auto-runners (**Subway Surfers**, **Temple Run**) take away forward control. Lane shooters from many 4X **ads** (e.g. **Last War: Survival**'s run-through-gates-and-shoot-the-horde marketing) are rail shooters for one thumb. The developer controls pacing, so spectacle is guaranteed.
- **Tower defense = mounted ranged combat**: waves, fixed guns, range rings. Showing each tower's **range circle** is Rogers' "let the player know the range".
- **Target timing on small screens:** if enemies spawn off-screen and kill you instantly, that's the "whipping past" problem. Add **off-screen indicators**, **spawn telegraphs** and slower first waves.
- **Smaller targets = more points** maps to **risk/reward targeting** in mobile arcade shooters: the tiny fast enemy drops the gem.
- **Screen-edge justification** = clear arena borders in mobile maps (water, walls, fog), so players never wonder why their shot stopped.

**🪝 Make it stick:** **"A rail shooter is a haunted house you're allowed to shoot back in."** And remember the rubber spider: good designers turn a bullet hole into a feature.

---

## 9. Not Just Shooting — grenades, smart bombs, fire, poison, and disabling attacks
**🧠 Big idea:** **Variety = fun.** Explosives, area attacks and lingering effects each need clear **prediction, feedback and limits**. When you take control *away* from the player, do it carefully, and always leave them a way to fight back.

**📋 The details:**
- You don't need a gun or a melee weapon to defeat enemies. There are endless options, and **the more variety in your combat, the more fun players have.**

**Grenades:**
- Let players **predict the arc**. **Gears of War** and **Uncharted** show a **throw-path** aid. The book's drawing shows three parts: a **cook meter**, an **arc range-finder** line, and a **target marker** where it lands.
- **Don't skimp on the explosion:** kick up dust and debris and launch props sky-high to sell it.
- **Risk/reward:** a grenade can go off if held **too long**, or **bounce back** at the thrower. Real soldiers **"cook"** grenades (hold them after pulling the pin) so they explode right where they land.
- **Call of Duty: Modern Warfare** shows a **HUD warning for incoming grenades** *and* lets you **pick them up and throw them back**.
- Grenades can also be fired from **rifles and launchers** for better accuracy and range.
- Players often **duck back into cover** after throwing, so give enough **sound, visual and rumble cues** to tell them when it detonates, even if they can't see it.
- Stand too close to your own explosion? **Blow the player up too.**

**Smart bombs (blow up everything):**
- Carpet bombing or a magical meteor storm, same idea: a **one-shot solution** that buys the player a few seconds of relief from the pursuing enemies.
- **Show the controls clearly** so players don't confuse it with a regular attack.
- When triggered, it should **destroy everything on screen except the player**, including **destructible objects**.
- **Activation options, depending on how much tension you want:**
  - **Instant**, like **Defender**.
  - **Charge-up**, like **R-Type**, where you charge it before firing.
  - Either way, **show what they're charging toward** so they can decide *when* to use it.
- **Don't let it charge too fast or get used too often**, or all your carefully designed encounters get wiped out in a blink.

**Fire:**
- Explosions bring fire, and some things just need burning anyway. Fire gives **great visuals** and **lingering damage** to enemies and environments.
- **Fire takes no sides:** players get hurt if they wander into it.
- Fire should **eventually burn out**, so players don't paint themselves into a napalm-colored corner.
- **Flamethrowers:** the **closer** you are, the **more damage**. They're the weapon for players who **don't like to aim**: let them **"fire and forget"** or **"hose down"** enemies.
- **Fire as a mechanic**, not just damage: flaming swords do extra damage to **ice** enemies, and can also **light braziers, set off explosives, burn through rope, light up dark areas, cauterize wounds**. The possibilities are huge.

**Poison:**
- Another **lingering, indirect** attack.
- Give it a **clear visual**: green gas, a dripping blade, a hovering **death's-head**. These are the classic game signs of poison. Players must be able to tell when they're **holding a poisoned weapon** or have **poisoned an enemy**, so make the visual **unique and distinct**.
- Each **tick** of poison damage needs a **clear sound and visual**.
- You're effectively starting a **timer**: the player's focus shifts from normal play to **"find and use the antidote."**
- If the antidote is an inventory item, **don't make it hard to get to**.
- **Even if poison is rare, make the antidote more common.**
- The worst feeling in a game is believing **death is inevitable**. **Always give players a fighting chance.**

**Taking control away (use judiciously!):**
Losing control is another horrible feeling for players. **Stun, knockback, transformation, loss of balance and sliding** are useful *instead of* damage, but use them sparingly. The book's drawing shows six states: stunned, knockback, knockdown, grabbed, transformed, off-balance.

| State | What happens | Design notes |
|---|---|---|
| **Stun** | Player **loses all control** for a short time | Usually leaves them open to an attack or finisher. Signal it with **visuals** (cartoon stars, "tweeting birds") and **sound** |
| **Knockback (KB)** | Knocked **through the air** a short distance, then falls | Can be **lethal near ledges or platform edges**. Don't let players get **"double bolted"** |
| **Knockdown** | Knocked to the **ground**, needs **a second or two** to get up | Vulnerable to more hits while down. Getting up is **automatic**, or needs **button mashing, stick waggling or a QTE** |
| **Latching on** | Enemy **grabs/pins** the player, restricting movement | Deals **damage every second** it holds on. Shake it off by **waggling**, or with **jump or spin** moves |
| **Transformation** | A spell turns the player into another form. **Ghosts 'N Goblins**: Arthur becomes a **frog**. **Maximo**: a **zombie, old man or baby** | Move set gets **limited** (can't attack or jump, sometimes almost no control). Controls can be **reversed** to confuse. **End it quickly**, and **save it for special occasions** or players get sick of it |
| **Loss of balance** | A **teeter** animation; the player briefly loses control | Works better as an **indicator** (you're at the edge!) than as a disabling move |
| **Sliding / skidding** | After a run, dash or jump, the character **slides** to regain balance | Adds personality, but gets **annoying** when it happens repeatedly while the player fights to stop. Like a KB, it can slide them **off a narrow platform** |

- **"Double bolting"** (footnote, from **Ratchet & Clank**): getting hit makes you drop **bolts** (the currency), which vanish if you don't grab them in time. Sometimes the hit knocks you into *another* enemy or hazard, which knocks out more bolts, and you're still stunned and can't collect any of them. You lose **double** from one mistake. Avoid setups that chain disables into double punishment.
- **Don't let enemies have all the fun.** Design **enemy-disabling attacks** for the player too, so *they* get the advantage. Still be careful: ask what each disabling effect actually **adds to the gameplay**.
- **Very Important Thing: always try to *enable* the player, even while you're *disabling* them.** (Players will thank you for giving them disabling tools of their own.)

**🎮 Book examples:** Gears / Uncharted → throw-path aid. CoD MW → grenade warning and throw-back. Defender vs R-Type → instant vs charged smart bomb. Ghosts 'N Goblins frog / Maximo zombie-old man-baby → transformations. Ratchet & Clank → double bolting.

**📱 F2P mobile translation:**
- **Throw arcs on touch:** **Brawl Stars** throwers show an **aim indicator for the lob** while you drag, which is Rogers' throw-path aid made essential. **Angry Birds**-style slingshot games are one long grenade-arc lesson.
- **Smart bombs = ultimates and boosters.** Brawl Stars **Supers** charge by **landing hits** (an R-Type-style charge-up with a visible meter). **Clash Royale** area spells (Fireball, Zap...) cost elixir, a smart bomb with a price tag. In match-3, power-ups like Candy Crush's **color bomb** clear the board, and **pre-level boosters** are often **sold**. Rogers' warning ("don't let it charge too fast or encounters get wiped") becomes an **economy-balance** rule: if boosters are too cheap or too strong, your levels stop mattering.
- **Lingering hazards that take no sides:** Brawl Stars **Showdown**'s closing **poison clouds** and battle-royale zones (PUBG Mobile) damage everyone, give a timer, and force movement. That's Rogers' poison-as-timer idea at map scale.
- **Status effects in gacha:** **Raid: Shadow Legends** and many RPGs have poison, stun, freeze and similar debuffs, with **cleanse** effects as the "antidote". Follow Rogers: if poison is common, cleanse should be **more** common, and every tick should be readable (icon + number + color flash).
- **CC (crowd control) chains feel awful in PvP**, the mobile version of double bolting. Good PvP designs use **CC immunity windows, diminishing returns or tenacity stats** so a player is never locked down until death. "Always enable while disabling" is a PvP balance law.
- **Fire as a mechanic:** element interactions like Genshin Impact's **Pyro** lighting torches, burning grass and melting ice are Rogers' "flaming sword lights braziers" idea turned into an elemental system (see Section 12).

**🪝 Make it stick:** **"S-K-K-L-T-L-S: Stun, Knockback, Knockdown, Latch, Transform, Lose-balance, Slide."** Think "**S**ome **K**nights **K**eep **L**osing **T**heir **L**ittle **S**words." And the poison rule: *rare poison, common antidote, never hopeless.*

---

## 10. Dammit Jones, Where Doesn't It Hurt? — health: how much, how shown, how regained
**🧠 Big idea:** Combat only means something if the player has **something to lose**: health and lives. Size health with simple math, **show it so it can't be missed**, and pick a regain model that fits your pacing.

**📋 The details:**
- (The title riffs on an Indiana Jones line.) For combat to matter, the player needs something to lose: **health and lives**.
- **Starting-health formula (Rogers' method):** work from **how many hits** the player should survive.
  1. Decide how many enemy hits the hero can take at the start of the game **before losing a life, without healing**. Example: **20 hits**.
  2. Decide the **average enemy hit's damage**. Example: **10 hit points**.
  3. **Starting health = hits × damage per hit** → 20 × 10 = **200 health**.
- **Ways to show health:**

| Display | How it works | Pros | Cons / notes |
|---|---|---|---|
| **Numbers** | A plain number | Simple, transparent | Boring. But they **stand out in cluttered HUDs** (MMOs, RPGs). Keep the font **legible** |
| **Health bar** | A bar along the top or side of the screen | Takes little space. Can be framed with **themed art** so it feels part of the HUD | Hard to see **small** amounts of damage, so **segment** the bar for readability |
| **Icons** | Simple symbols: human outline going **green → red** (**WWE SmackDown**), **crystal globes of blood** (**Diablo**), **hearts** (**Legend of Zelda**) | Artistic, instantly readable | Lower precision |
| **Companion character** | A buddy shows your health. **Crash Bandicoot** is followed by a **tiki mask** that loses **feathers** with every hit | Charming, diegetic | **Can't support large amounts of health** |
| **Character-based** | The character's body/gear shows the damage: **Ghosts 'N Goblins** armor pops off. **Dead Space** and **Ghostbusters** put **status meters on the armor/equipment**. **Resident Evil** characters **clutch their stomach and limp**. Car combat/driving games show **vehicle damage**; in **GTA** a dragging bumper and a smoking engine mean you're nearly done | Readable **without looking away from the action**. Lets players adjust strategy (**retreat, heal**) | Must **not interfere** with movement or attacks |
| **HUD-less** | The screen gets **splattered with blood** that thickens as damage builds. Or more dramatic: screen goes **blood red, monochrome or blurry**. **Sound and music fade away** in favor of **labored breathing and a pounding pulse**. In **Batman: Arkham Asylum**, a **taser** hit makes the screen's video "**short-circuit**" | Immersive, clean screen | Can be less precise |
| **Unclassifiable** | **Sonic**: hold even **one ring** and you can't die. **Bushido Blade 2**: so many **one-hit kills** that the health bar was **dropped entirely** | Unique identity | Very genre-specific |

- **Why feedback matters:** the player **can't always watch the health bar**, so feedback on the character helps them judge how close they are to **death or a restart**, and change strategy.
- **Regaining health:** through **power-ups**, **level / XP increases**, or simply **time**.
  - **Halo: Combat Evolved** pioneered **regenerating health** in FPS: if you weren't taking damage, the meter refilled at a slow, steady rate.
  - The book says the **Ratchet & Clank** team got rid of health entirely (that's Rogers' claim; read it as "removed the game-over punishment") because they wanted players to **reach the end of the game**, not keep seeing a game-over screen.
- **Whatever display you use, the player must clearly know when they're getting hurt:**
  - Don't skimp on **dramatic animations and particle effects**.
  - Pair a **hit sound effect** with a **voiced grunt** from the character ("ow!", "oomph!").
  - Health should **drop in a very obvious way**, because every hit brings them closer to losing a life.

**📱 F2P mobile translation:**
- **Health bars above every unit** are the mobile standard (**Clash Royale, Brawl Stars**, most RPGs). Small-screen rules: **segmented bars**, team-colored, with a **"recent damage" ghost** (a lighter chunk that drains after a hit) so small hits stay visible.
- **Floating damage numbers** turn Rogers' "numbers are boring" on its head: in idle and gacha RPGs, numbers in the thousands or millions *are* the spectacle (number inflation as power fantasy).
- **Regen = pacing tool.** Brawl Stars brawlers **heal after a few seconds out of combat**, Halo-style. That drives the engage → retreat → re-engage rhythm in a 2–3 minute match.
- **Use Rogers' formula as a TTK (time-to-kill) design tool.** *Hypothetical:* if a level-1 hero should survive **8 basic hits** from a standard enemy doing **120 damage**, base HP = **960**. Then check how that ratio holds as both sides level up. Gacha power curves often break it, and that's where "level walls" come from.
- **HUD-less damage** shows up in mobile shooters (**PUBG Mobile**, **CoD: Mobile**) as **red screen-edge vignettes and directional hit indicators**: essential when your thumbs cover half the screen.

**🪝 Make it stick:** **"Hits × Hurt = Health"** (20 × 10 = 200). And GTA's dragging bumper is the ultimate health bar: you don't need a HUD to know your car is begging for death.

---

## 11. Death: What Is It Good For? — lives, game over, and keeping them playing
**🧠 Big idea:** Lives and game-over screens came from **arcade coin economics**. In a game the player already owns, death should **teach and motivate**, never waste time or double-punish. The real goal is to **keep them playing**.

**📋 The details:**
- Rogers' opening claim: **lives and the game-over screen are an outdated concept.**
- **History:**
  - Arcade games existed to **pull quarters out of pockets as fast as possible**. The trick was to make players **want to keep going** even while being killed as often as possible.
  - **Extra lives** became a good **short-term goal** that kept players in the game.
  - When game heroes became **little people** instead of blips and spaceships, **dying** came along with them (a spaceship doesn't really "die", does it?). The **emotional finality** of death (unless... quick, another quarter!) was too good to give up.
  - On **home consoles**, lives stuck around, but players had **already paid** and there were no more quarters to collect. So why kill them? **Why not let them finish the game they paid for?**
- **Frequent death also pushes players into gaming the system:** **Doom** (id, 1993) players found it easier to **reload a save** than to restart from an in-game checkpoint. Using that exploit, they **stopped fearing death** and the game-over screen never appeared for them.
- **Many developers dropped lives entirely.** Instead of game over, players are **reset to checkpoints** in the level and can retry **until they succeed**.
  - **Prince of Persia: The Sands of Time:** **rewind time** to a safe point. Implement it carefully: a player can get into a spot where they **can't rewind far enough** and just die again. When you do die, the **narrator** says that isn't how the story went, and you restart from a checkpoint (death framed as a storytelling slip).
  - **Batman: Arkham Asylum:** when Batman falls to his death, a **QTE** gives you a chance to save him. Succeed and he **climbs back up**.
- Some genres (**action, survival horror**) still use **lives and game-over screens**. **If you must kill the player, follow these rules:**
  1. **Tell players they have lives and that they can lose them.** Players get **protective** of their character and fear for its safety.
  2. **Show lives clearly in the HUD**, and make it obvious when one is lost.
  3. **Give lots of ways to earn lives back**: at **level-ups**, as **power-ups**, or as **rewards for collecting** things.
  4. **Kill the player quickly.** No long, drawn-out death animation they'll have to watch over and over when the game gets hard.
  5. **Same for game-over screens:** no long death cutscenes. Make the path **back into gameplay as fast as possible**.
  6. **Make death as violent as your rating allows.** Let the player feel it. **Empathy** for the character motivates **self-preservation**.
  7. **Don't double-punish.** If the player earned something during a life, **don't take it away** when they lose that life.
  8. **Boss deaths:** don't make them replay the whole sequence. Let them **continue the fight as if nothing happened**, or at most let the boss **regain a little health**.
  9. **The threat of death is still a great motivator** to improve and learn a skill or control. Use that power **judiciously** (Rogers: "I trust you").
  10. **Alternate death systems** (e.g. you die if your **NPC partner** dies): make it clear that (a) protecting the partner is **your job, with your life**, and (b) you **will die** if you fail.
- **Think very carefully about using lives at all.** If killing the player won't make the game better or more exciting, or will just frustrate them, **don't do it**.
- **Very Important Thing: you want to KEEP THEM PLAYING.** Don't hand players a solid excuse to quit. Once you lose them, they may never return.
- **Rogers' "keep going" screen idea:** replace game over with a **"keep going" screen**. When the player dies *or quits*, show a **preview** of the next level, the next story beat, or the next treasure, weapon or power-up, a sneak peek that gets them so excited they don't want to stop.
- Teaser: the next level is crawling with **hordes of enemies** (→ L11).

**🎮 Book examples:** Arcades → lives as a quarter-pump. Doom → save-scumming dodges death. Prince of Persia: Sands of Time → rewind and "that's not how it happened". Batman AA → QTE rescue from a fall.

**📱 F2P mobile translation — this is where F2P breaks from Rogers the most:**
- **Lives came BACK in F2P, as a pacing and monetization tool.** **Candy Crush Saga** made **5 lives that regenerate over time** iconic. A fail costs a life, and running out means wait, ask friends, or pay. Rogers called lives outdated for *paid* games, and he was right for premium. F2P brought back the **arcade economy** (pay to continue) in a new form.
- **Continue offers = the new quarter slot:**
  - Match-3 (**Candy Crush, Royal Match**): out of moves → **buy extra moves** with coins or gold.
  - Runners (**Subway Surfers**): crash → spend **keys** (or watch an ad) to **keep running**.
  - Roguelites and survivor-likes: a common pattern is **one revive per run** for **gems or a rewarded ad**.
- **Rogers' rules still decide whether it feels fair or predatory:**

| Rogers' rule | Ethical F2P version | Predatory version (avoid) |
|---|---|---|
| Kill quickly, fast restart | One-tap retry. Hyper-casual (**Flappy Bird, Helix Jump**) restarts in under a second | Long fail animations to soften you up for an offer |
| Don't double-punish | Keep the loot earned in a failed run (or part of it) | Lose the run's loot *and* your streak *and* a life |
| Boss continues where it left off | Shared or persistent boss HP. **Raid: Shadow Legends' Clan Boss** adds up damage across attempts | Full reset unless you pay |
| "Keep going" screen with a sneak peek | Show progress: "2 more wins to unlock the chest", next hero preview | Fake near-miss framing on rigged levels. Countdown timers that pressure an impulse purchase |
| Threat of death motivates | Clear stakes, readable fail reasons | Hidden difficulty spikes designed to sell boosters |

- **Revive ethics checklist:** transparent price; **"No thanks" as visible as "Revive"**; **cap revives per run** (escalating prices are a red flag); a **rewarded-ad** alternative for non-spenders; never revive offers for minors with dark-pattern pressure; remember that **loot-box and dark-pattern regulation** exists in some countries and keeps expanding.
- **Death as data:** heavy failure at one level = a **churn cliff**. Check **fail rate, attempts per level and churn after level X**. Rogers' "keep them playing" is literally your **D1/D7/D30 retention** curve.
- **The Rogers "keep going" screen is now standard F2P UX.** Fail and pause screens show **what you'll lose if you quit** and **what's next**. Used honestly it's motivation; used aggressively it's loss-aversion pressure.

> ⚠️ **2010 → 2026:** Rogers said lives are outdated, and F2P **resurrected** them as an energy system. The principle survives: never give players a *good reason* to stop. Today the risk isn't a long game-over screen, it's a **paywall at a frustration point**. Design fail states that make players **want** to retry, not **have** to pay.

**🪝 Make it stick:** **"Death is a door, not a wall."** Arcade death sold quarters, F2P death sells continues, and good design makes death sell **"one more try."**

---

## 12. 📱 Bonus: F2P Combat Field Guide
*(Not in the book. This applies Rogers' combat rules to today's mobile genres.)*

### 12a. Auto-battle vs. manual
**🧠 Big idea:** Rogers' Batman insight ("he never misses, so why should you?") taken to its extreme is **auto-battle**: the game executes, you **decide** (team, timing, upgrades). The question is **where the skill lives**.

| Model | Example (real) | Where the skill lives | Rogers' rules that still apply |
|---|---|---|---|
| **Full manual action** | Genshin Impact, Brawl Stars, CoD: Mobile | Execution: aim, dodge, timing | Timing, chains, juice, dodges, lock-on |
| **Turn-based with auto toggle** | Honkai: Star Rail (auto battle + speed-up) | Team building and turn decisions; auto for farming | Attack matrix, status effects, "enable while disabling" |
| **Auto with player-timed ultimates** | AFK Arena-style battles | When to fire the "smart bomb" | Smart-bomb rules: show the charge, don't let it trivialize fights |
| **Full idle / AFK** | AFK Arena / AFK Journey idle rewards | Meta: roster, gear, formation | Attack matrix becomes the *whole* game |

- **Design rules:**
  - **Manual for novelty and hard content, auto for repetition.** Farming a stage for the 40th time should be auto or skippable (sweep tickets, multi-battle).
  - **Keep at least one meaningful decision** per fight, even on auto (formation, ultimate timing, target priority).
  - **"Look cool" still matters on auto:** cinematic ultimates, crits, finishers. Players watch the first 20 times, so make those count, then let them skip.
  - **Close battles still matter:** a fight you lose by 2% teaches you what to upgrade. Show **why** you lost (power gap, element mismatch).

### 12b. Team comps and elemental systems (the Maximo skeletons, grown up)
Rogers' skeletons (helmet blocks vertical, shield blocks horizontal) are the seed of every **weakness system**:

| System | How it works (keep it generic if unsure) | Lesson |
|---|---|---|
| **Genshin Impact** elemental reactions | Applying two elements triggers reactions (e.g. Vaporize, Melt). Elemental shields need the right element | Fire-as-mechanic (Section 9) → full systemic play |
| **Honkai: Star Rail** weakness/toughness | Enemies show weakness types. Hitting them breaks toughness for a big payoff | The Maximo skeleton rule with a visible icon |
| **Raid: Shadow Legends** affinities | A rock-paper-scissors affinity triangle plus a neutral affinity | The attack matrix becomes a counter chart |
| **Pokémon GO** types | The type chart decides super-effective hits | Readable, iconic counter teaching |
| **Clash Royale** roles | Air vs ground, splash vs single target, building-targeters | Elevation + range from Section 2b turned into card roles |

- **Team roles** (tank, damage dealer, healer/support, controller) are Rogers' **ranges and weapon archetypes** spread across a squad.
- **Rules:** show advantage with **icons and colors** before the fight; **always offer a counter** (Rogers' antidote rule: if a threat is common, the counter must be accessible); don't **paywall** the only answer to a mandatory element.

### 12c. Survivor-likes and auto-attack
- **Survivor.io**, **Archero** and the wider survivor-like wave: **auto-attack + movement-only control**, with level-up choices (pick 1 of 3 skills) that build a run.
- **Rogers mapped onto them:**
  - **Ranges and shapes** (Section 2b): orbiting blades (radial), forward lines (straight), spreads (diagonal/cone), area bursts, screen clears (smart bomb).
  - **Juice:** XP gems vacuuming into you, enemies popping, damage numbers. The pleasure-principle bell rings non-stop.
  - **Hordes vs close battles:** mowing hordes is the power fantasy, but **elite and boss waves** bring back the "close battle" tension Rogers values. Pace the run so the screen fills and then **threatens** you.
  - **"Enable while disabling":** slows and knockback from enemies must stay escapable, because movement is your *only* input.
  - **Death and revive:** a run-based game makes death cheap (fast restart) *and* valuable (permanent upgrades carried over). That's "don't double-punish", built in.

### 12d. Readability: the Brawl Stars / Clash Royale school
- **Silhouette + weapon = role** at a glance (Section 2a).
- **Team colors** everywhere (outlines, health bars, projectiles).
- **Range indicators** while aiming (cones, lines, arcs, circles), Rogers' "let the player know the range of the weapon".
- **Telegraphs before big hits** (ground circles, wind-up flashes), Rogers' heavy-wind-up risk/reward made fair for the defender.
- **Few units, big hitboxes, short matches** (about 2–3 minutes), which means lots of **close battles**.
- **Thumb occlusion:** critical information goes where thumbs aren't. HUD corners belong to the buttons.
- **Accessibility:** color **plus** shape for team and status (colorblind safety); reduce-motion and haptics toggles.

### 12e. Juice translation table (console 2010 → phone 2026)

| Rogers' tool | Mobile equivalent |
|---|---|
| Controller rumble | **Haptics** (short tick on hit, stronger on kill/crit) |
| Camera shake | **Small** shake with a toggle; hit-stop for weight |
| Slow-mo on the last enemy | **Kill-cam / victory slow-mo**, a "Victory!" banner moment |
| Vocal "Oof!" | Short, punchy enemy and impact SFX (many players play muted, so pair with visuals) |
| Blood splatter | **Cartoon poofs, coin bursts, damage numbers** (rating-friendly) |
| Upgrades visible on the weapon | **Rarity glows, star tiers, evolution model swaps** |
| Lock-on HUD markers | **Floor rings** and floating bars |

### 12f. Power vs. skill in PvP
- Rogers' rules that apply: **close battles are more exciting**; **be generous** to the player; **always enable**.
- **The spectrum:**
  - **Skill-first:** monetization is mostly cosmetic. Fair, but needs a huge audience and a strong cosmetics pipeline.
  - **Power-gated + matchmaking:** card or brawler levels exist, but **trophy-based matchmaking** pairs similar players (e.g. **Clash Royale** ladders). Skill matters *within* a power band.
  - **Power-heavy:** many 4X games (e.g. **Whiteout Survival, Last War: Survival**) translate spending heavily into power, so server competition becomes economic.
- **Design tools:** matchmaking on power **and** skill; **level-capped or normalized** modes and tournaments; catch-up mechanics for new players; **transparent** power displays before a match; counters that reward knowledge over spending.
- **Why it matters (in Rogers' terms):** a big spender crushing a newcomer is **not a close battle** for either of them. The newcomer churns, and eventually the big spender runs out of opponents. Fair-feeling PvP is a **retention** strategy, not just an ethics one.

**🪝 Make it stick:** **"Auto plays the fight, YOU play the matchup."** In F2P, combat skill often moves from the thumb to the **team sheet**.

---

## 🏆 Universal Truths & Clever Ideas
Level 10's end list (14 items), in my words:

1. **Keep ESRB guidelines in mind when designing violent gameplay.**
   📱 so for F2P: your IARC/store rating decides your audience, ad options and kid-safety obligations.
2. **Violence is about context: it feels more violent when the *player* does it.**
   📱 so for F2P: cartoon "poofs" keep combat satisfying while widening reach.
3. **Give your character a signature attack or weapon.**
   📱 so for F2P: the signature kit is what sells the hero on the banner and in the ad.
4. **Use an attack matrix to track combat moves and reactions.**
   📱 so for F2P: it's your balance spreadsheet. Add cost, cooldown, DPS, TTK and counters.
5. **People want to play games that make them look cool.**
   📱 so for F2P: cinematic ultimates, crits and finishers, plus shareable highlight moments.
6. **Use a lock-on system to help the player in combat.**
   📱 so for F2P: auto-targeting with priority settings, and floor rings that read at small size.
7. **Close battles are more exciting.**
   📱 so for F2P: matchmaking and difficulty tuning aim for "just barely won".
8. **QTEs heighten combat drama, but don't overuse them, because they get old.**
   📱 so for F2P: let players skip or speed up repeated cinematics.
9. **Fighting enemies is supposed to be fun.**
   📱 so for F2P: if players auto and skip *everything*, your combat isn't pulling its weight.
10. **Keep the Three As (Action, Aiming, Ammo) in mind for projectile combat.**
    📱 so for F2P: on touch, aiming is the hardest A. Offer assists and auto-fire options.
11. **Use attacks to hinder and incapacitate the player rather than kill them.**
    📱 so for F2P: CC must stay escapable. Use immunity windows in PvP.
12. **Make it obvious when the player takes damage.**
    📱 so for F2P: damage numbers, red vignettes, haptics, segmented bars.
13. **Always try to enable the player, even when you're disabling them.**
    📱 so for F2P: every debuff should have a counter the player can reach (cleanse, dodge, item).
14. **Keep the player playing.**
    📱 so for F2P: fast retries, no double punishment, honest "keep going" screens. Retention is the business.

---

## 🧩 Connect the dots
- → **L03** (story): Rogers points back to Level 3's ESRB discussion. Rating and violence context shape your story's tone.
- → **L05** (character): personality drives the move set and the signature weapon. Character metrics drive jump height vs enemy height.
- → **L06** (camera): lock-then-catch-up during dodges, slow-mo and orbiting finisher cameras, rail-shooter camera control.
- → **L07** (controls): one-button blocks, one-gesture dodges, QTE button placement, context-sensitive grabs, cover "stickiness".
- → **L08** (HUD): health bars, segmented bars, lock-on markers, reticules as feedback, grenade warnings, HUD-less damage.
- → **L09** (level design): combat arenas, metrics, cover placement, corridors vs dogfight spaces, pillars that bounce your axe.
- → **L11** (enemies): next level. Enemies that block certain attack directions, hordes, enemy disabling attacks.
- → **L12** (mechanics and hazards): fire, poison, explosives, risk vs reward as a design pattern.
- → **L13** (power-ups and rewards): smart bombs, armor that grants abilities, visible upgrades, lives as rewards.
- → **L14** (multiplayer): friendly fire, team roles (TF2, Left 4 Dead), PvP fairness.
- **F2P concepts:** **core loop** (action → result → reward), **FTUE** (hold back the "guns" until basics are learned), **economy** (boosters as smart bombs, the hoarding problem), **monetization** (continues, revives, skins), **LiveOps** (balance patches via the attack matrix), **retention** (fail states, "keep going" screens, close battles), **ethics** (DDA, revive offers, pay-to-win).

---

## 🔁 Retrieval check (do it closed-book!)
1. What are Liddell Hart's three elements of combat?
2. Give Rogers' two reasons violent games get so much attention, and the feedback loop behind the second.
3. List the six questions (or as many as you can) for judging how violent your game feels.
4. Name the four ranges and four elevations of combat, with one example move or game for each.
5. What columns belong in an attack matrix?
6. How does a combat chain work, and why must the character translate forward?
7. When are long wind-up animations good, and what principle do they show?
8. List the QTE design tips.
9. What happened to shield usage between Maximo 1 and Maximo 2, and why?
10. What are the Three As? Give two design questions for each.
11. In the book's weapon matrix, which weapon is "very strong" at each range, and what does the overlap teach?
12. Describe the seven control-loss states and one design caution for each.
13. Give Rogers' starting-health formula with his example numbers.
14. List at least seven of Rogers' rules for killing the player.
15. What is a "keep going" screen, and how has F2P used (and abused) the idea?

<details><summary>Answers</summary>

1. **Hitting, moving, guarding.**
2. (1) Violence is graphic, dramatic and visceral; (2) so it gives the quickest positive feedback loop: action → immediate result → reward (XP, money, power-up), i.e. Freud's pleasure principle ("ring the bell, get the reward").
3. Does the player commit the violence (with realistic weapons)? How often? Is it rewarded, and is it ever shown as not appropriate? How graphic (dismemberment, lingering camera)? Is there residue (blood, gibs; better graphics = more realistic)? Is it against bad guys, and do enemies suffer?
4. Ranges: **close** (punches, grapples, head butts), **medium** (weapon swings, flying kicks, dash attacks), **long** (projectiles/spells, e.g. Contra), **area effect** (smart bombs, supers). Elevations: **standing** (shoulder height), **low** (waist or below, crouching), **high** (jump then attack, vs flyers and bosses), **aerial** (extended jumps in DMC/Dante's Inferno; true flight in Marvel Ultimate Alliance/Dark Void).
5. Attack name, control scheme, range, speed, direction, damage (label + number or %), special. Add more as needed (severity, defensive items/moves).
6. Three or more attacks in sequence. Pressing again within a short window (about a second) moves to the next, stronger attack. The character must step forward, or knocked-back enemies drift out of reach and later hits miss.
7. For heavy or oversized weapons: the long wind-up is a risk the player takes for a powerful payoff, which is **risk vs. reward**.
8. Save them for the most bombastic attacks (single-button QTEs work as finishers); keep the prompt in the same spot; give about a beat to recognize and press; on failure, return quickly (repeat one pattern, not three); prefer heavy damage over instant death, and play the death animation only at low health.
9. Maximo 1's breakable shield was a limited resource, so players avoided blocking and dodged instead. Maximo 2 made it unbreakable, and players happily blocked. Limited durability makes players hoard.
10. **Action** (reload speed? manual or auto reload, e.g. Gears active reload? ammo limits? fire rate/bursts? firing bloom? multi-target shots?). **Aiming** (scope and view blockage? depth of field? drift/steadying/max distance? auto-aim/quick fire? kick/climb? aids like lasers, bullet time, heat-seeking? move while aiming? alt vision/mods? trick shots? swap targeting style?). **Ammo** (carry method/limit/type matching? special ammo? what misses do to the environment?).
11. Short: shotgun (very strong). Medium: assault rifle (very strong). Long: sniper rifle (very strong). Dual pistols are strong up close; where pistols and the assault rifle overlap at short range, the rifle pays with being slow. Minimal overlap, and overlap carries a disadvantage.
12. **Stun** (lose control briefly; show stars/birds + SFX). **Knockback** (flung back; deadly near ledges; avoid double bolting). **Knockdown** (on the ground 1–2 s; get up automatically or via mash/waggle/QTE). **Latching on** (pinned, damage per second; shake off with waggle/jump/spin). **Transformation** (frog/zombie/old man/baby; limited moves, maybe reversed controls; end quickly, use rarely). **Loss of balance** (teeter; better as an indicator). **Sliding** (skid after run/dash/jump; annoying if repeated; can slide off platforms).
13. Starting health = hits the player can take before losing a life (without healing) × average enemy damage per hit → 20 × 10 = **200**.
14. Tell them they have lives; show lives clearly in the HUD; offer many ways to regain lives; kill quickly; short game-over and fast restart; death as violent as the rating allows (empathy → self-preservation); don't double-punish (keep earnings); boss deaths continue the fight or only restore a bit of boss health; use the threat of death judiciously as motivation; make alternate death rules (partner dies = you die) clear.
15. Instead of game over, show a preview of what's next (level, story, treasure, weapon) to excite the player into continuing. F2P uses it in fail and quit screens (progress to the next chest, next hero) and continue offers. Ethical when honest; predatory when it relies on rigged near-misses, pressure timers or paywalled continues.
</details>

---

## 🎯 Side quests (5–15 min each)
1. **Matrix Me (10 min):** pick a Brawl Stars brawler or a Clash Royale card you know. Fill in Rogers' 7 attack-matrix columns for its attacks, then add 3 F2P columns (cost/cooldown, counters, rarity).
2. **Spatula of Destiny (10 min):** pick an absurd weapon (garden hose, umbrella, rubber chicken). Brainstorm 10 combat and non-combat uses, covering at least 3 ranges and 2 elevations.
3. **Juice Audit (10 min):** play 3 minutes of any mobile combat game with sound **on**, then 3 minutes **muted**. List every feedback element (hit-stop, numbers, haptics, flashes, sounds). What breaks when muted?
4. **Weapon Venn (15 min):** design 4 weapons for a hypothetical mobile shooter. Fill a short/medium/long matrix so each range has exactly one "very strong" weapon, and every overlap pays a cost.
5. **Rewrite the Fail Screen (10 min):** screenshot a fail/continue screen from a mobile game. Mark what's ethical and what's pressure, then sketch a fairer version using Rogers' "keep going" screen idea.
6. **CC Fairness Check (10 min):** list every disable effect in a game you play (stun, knockback, freeze...). For each, note how the player can escape or counter it. Any with no counter break "always enable the player".
7. **Health Math (5 min):** using Rogers' formula, pick a hit count and enemy damage for a hypothetical level-1 hero. Then predict what happens if enemy damage grows 15% per level while hero HP grows 10%.

## ⚔️ Main quest (homework)
**Quest A — The Combat One-Pager for a Mobile Game (90 min)**
Design the combat for an original F2P mobile game (survivor-like, hero brawler, or auto-battler: your pick).
- **Deliverable:** a one-page doc containing:
  1. Character personality → signature weapon (2 sentences).
  2. An **attack matrix** with at least 5 moves/skills (Rogers' 7 columns + cost/cooldown + counter).
  3. Ranges/elevations used, plus a sketch like Rogers' range diagram.
  4. **Feel plan:** chain timing, wind-up heavy attack, 5 juice elements adapted for mobile (haptics, hit-stop...).
  5. One **disable** the enemy uses and how the player escapes it.
  6. **Health formula** with your numbers.
  7. **Fail-state design:** retry flow, continue/revive policy and an ethics statement (what you will *never* do).
- ✅ **Done when:** every move in the matrix is distinct (no duplicate rows), every disable has a counter, your fail flow returns to gameplay in ≤ 2 taps, and you can explain each choice using a Rogers principle. Post it publicly (#gamedev / #buildinpublic) for feedback.

**Quest B — Revive Offer Teardown (60 min)**
- **Deliverable:** a teardown comparing the fail/continue flows of 3 F2P games (e.g. a match-3, a runner, a roguelite/survivor-like). For each: time from death to retry, offer price and currency, ad option, cap per run, what you lose if you decline, and a fairness score (1–5) based on Rogers' death rules.
- ✅ **Done when:** you have a table with all 3 games, screenshots, one "steal this" and one "never do this" per game, and a 3-sentence conclusion on what makes a revive feel fair.

## 🔬 Play Lab
1. **Brawl Stars (10 min):** play 3 matches with different brawlers. *Look for:* how range, ammo and reload, auto-aim vs manual aim, and out-of-combat healing shape the rhythm. *Question:* which of LeBel's rhythm factors does Brawl Stars use most, and how does the map (bushes, walls) change fights?
2. **Survivor.io or Archero (10 min):** play one run. *Look for:* which attack shapes (straight, diagonal, radial, area) your skills cover, and how the game creates "close battles" despite hordes. *Question:* when did you feel most in danger, and what did the death or revive screen offer you?
3. **Honkai: Star Rail or AFK Journey (10 min):** do one fight manually and one on auto. *Look for:* where the decisions are (team, element/weakness, ultimate timing). *Question:* what does the game still ask *you* to do on auto, and is the cinematic ultimate skippable?
4. **Candy Crush Saga or Royal Match (10 min):** play until you fail a level. *Look for:* the continue offer, its price, the "no thanks" button, lives and retry speed. *Question:* which of Rogers' death rules does it follow, and which does it bend for monetization?

## 🗣️ Feynman check
Explain to a 12-year-old in 60 seconds: **"Why does a good game fight need hitting, moving AND guarding, and why should a game sometimes let you NOT die?"** Use one example from a game they know (e.g. Brawl Stars or Mario) and avoid the words "mechanic" and "monetization".

# 🪧 Level 8 — Sign Language — HUD and Icon Design
> 📖 Book pp. 171–196 · ⏱️ ~80 min study · 📱 F2P relevance ★★★★★ — on mobile the UI *is* half the game: the lobby, currency bar, red dots, store and results screens decide whether players stay and whether they pay.

## ⚡ TL;DR — the 30-second version
- **The HUD is any visual element that tells the player something.** It's your main communication channel. The 7 classics: **health, targeting reticule, ammo, inventory, score, radar/map, context-sensitive prompt**. The winning formula: **clear, clean, simple.**
- **Placement:** the **center of the screen belongs to the action**. Put the most important info **top-left** (for left-to-right readers). Keep the HUD near the guaranteed-visible area, away from edges that get clipped. Avoid **"bracketing"** the playfield with UI on three sides. **Fade out** inactive elements, but make them easy to call back.
- **Icons:** right picture, current metaphor, **color + shape coding**, no text, strong outlines, nothing that looks like a sibling, feedback on every press. The biggest button = the most important one. Rule of thumb: **KYSS = Keep Your Symbols Simple.**
- **QTEs:** only for big cinematic moments the player couldn't do alone. Give **one beat to see, one beat to press**. Keep them predictable (never random), short, in a consistent spot, and optional where possible.
- **The Three-Press Rule:** no screen should be more than 3 presses away. **Plan your pause screen as carefully as a level.** Every "boring" screen (loading, save, tally, legal, credits) can be fun.
- **Fonts:** themed but readable, high contrast, never too small. 📱 For F2P this all becomes **safe areas, thumb zones, a 1-tap PLAY button, red-dot discipline, store UI and localization.**

## 🗺️ Chapter map
- [ ] 1. Welcome to the HUD zone — the 7 classic elements
- [ ] 2. Health bar — every way to show "almost dead"
- [ ] 3. Targeting — reticules, colors, aim assist
- [ ] 4. Ammo gauge — the most-watched number
- [ ] 5. Inventory — quick access, room to grow
- [ ] 6. Score — big, flashy, cause-and-effect rewards
- [ ] 7. Radar/map — legible, live, legend-ed
- [ ] 8. Context-sensitive prompt — "you can do something here"
- [ ] 9. The clean screen — fade it, or kill it
- [ ] 10. Icon Has Cheezburger? — 16 icon rules + KYSS
- [ ] 11. Don't Get QTE — quick-time events done fairly
- [ ] 12. HUDs, and where to stick 'em — placement + Three-Press Rule
- [ ] 13. There are other screens than the HUD — title screens
- [ ] 14. The pause that refreshes — pause, options, save, loading, controls, tally, legal, credits
- [ ] 15. A final word on fonts — readable beats pretty
- [ ] 16. 📱 F2P Mobile UI Toolkit (beyond the book) — safe areas, thumbs, lobby, red dots, flows, store, localization
- [ ] 17. Universal Truths & Clever Ideas

---

## 1. Welcome to the HUD zone
**🧠 Big idea:** The **HUD** (named after the **heads-up display** projected onto fighter-jet canopies) is the most effective way a game talks to its player. Rogers' definition is deliberately broad: **any visual element that communicates information to the player counts as HUD.**

**📋 The details:**
- The chapter opens with a *Twilight Zone* parody: the HUD lives in a strange dimension *between* the game world and the real world. It's part of the game, but it talks to *you*, not your character.
- HUD mini-screens and icons are among the best tools a designer has. They can communicate:
  - **information** (how much health, how many bullets),
  - **emotion** (a heartbeat pulse, a red flash),
  - **direction**: where to go,
  - **instruction**: what to do.
- **The 7 HUD elements on an "average" game screen:**
  1. **Health bar / lives**
  2. **Targeting reticule**
  3. **Ammo gauge**
  4. **Inventory**
  5. **Score / XP**
  6. **Radar / map**
  7. **Context-sensitive prompt**

**🖼️ The book's figure (dual-coding it):** a zombie shooter screen with every element numbered:
```
+-----------------------------------------------------+
| (5) 4900  <- score, top-left corner                 |
| (1) [////////    ]  <- health bar right under it    |
|                                                     |
|   (7) !   <- context prompt floating over a fire    |
|   [extinguisher]       extinguisher you can use     |
| (3)o                          ZOMBIE                |
|    o  <- ammo shells        (2) --(+)--  reticule   |
|    o     stacked down          on the zombie        |
|    o     the left edge                   .------.   |
|    o  (4) [A] [+][+][pill]               | (6)  |   |
|        inventory slots, bottom-left      | radar|   |
|                                          '------'   |
+-----------------------------------------------------+
```
Notice the pattern: **status info hugs the corners and edges, the reticule sits dead center on the target, and the prompt floats in-world over the object it refers to.** Hold onto that. Section 12 explains why.

**🎮 Book examples:** this section uses the generic zombie figure. Specific games show up per element below.

**📱 F2P mobile translation:** In F2P, "the HUD" stretches far beyond the gameplay screen. By Rogers' definition the **lobby/home screen** is HUD too: currency bars, event buttons, red dots, timers. Here are the 7 classics in mobile clothing:

| Book element | 2010 console version | F2P mobile equivalent | Real/typical example |
|---|---|---|---|
| Health/lives | health bar, lives counter | HP bars above units, **lives that refill on a timer**, **moves-left counter** (a puzzle level's "health") | Clash Royale tower HP; Brawl Stars bar over each brawler; Candy Crush lives and moves |
| Targeting | reticule + aim assist | **tap-to-auto-aim, drag-to-aim**, aim assist, attack-range previews | Brawl Stars (tap auto-aims, drag aims manually); COD Mobile aim assist |
| Ammo | bullets/clip count | **elixir/energy bars, cooldown rings, booster counts** | Clash Royale's elixir bar under the cards |
| Inventory | backpack, hotkeys | booster bar, hero roster, merge-board storage, chest slots | puzzle-game booster tray; merge games' storage slots |
| Score/XP | score, combo meter | stars, trophies, leaderboards, season-pass XP | 3-star level ratings; trophy roads |
| Radar/map | mini-map | MOBA/battle-royale mini-map, 4X world map, **saga map** (progress path) | Mobile Legends mini-map; Candy Crush's level map |
| Context prompt | "press Y" icon | contextual action buttons, tap highlights, **tutorial hand pointer**, "!" over quest givers | PUBG Mobile's open-door / pick-up buttons |

**🪝 Make it stick:** The HUD is the game's **sign language**: it talks without words. If your player needs subtitles to understand your sign language, you're not fluent yet.

---

## 2. Health bar
**🧠 Big idea:** The **health bar** shows how close the player is to death, or to having to restart for some other reason. It's a staple of action, adventure, platform and shooter games, and it's **the most flexible HUD element**: it can take almost any form or metaphor.

**📋 The details: the many forms of "health":**

| Form | How it works | Book example |
|---|---|---|
| **Filled bar / icons** | Bar (often red) or icons drain by a percentage as you take damage; empty = dead | the classic |
| **Damage bar** (inverted) | Bar *fills* as you take damage; full = dead | — |
| **On-board defense system** | "Health" is the status of a suit or ship system | *Metroid* games |
| **Shields** | When all shields are gone, the *next* hit destroys you; can also show as a **numeric percentage** | *Star Wars: X-Wing* (LucasArts, 1993) |
| **Story device** | Health = staying true to the narrative. Stray from the "correct" story, the narrator objects that it didn't happen that way, and you're reset to the right point (the series calls it *desynchronization*) | *Assassin's Creed* (2007) |
| **Regenerating ("wait for health")** | Find cover, wait, and health refills to full | *Halo* |
| **Screen effects instead of a bar** | First-person-style damage effects (also used in third person): blood smears or a red blur that **points toward the damage source** | *Uncharted 2: Among Thieves* (2009) |
| **Screen "fritz"** | Electrical hits make the screen glitch briefly | *Metroid Prime*, *Batman: Arkham Asylum* |
| **Darken + audio** | As damage builds, the screen darkens, with heavy breathing and a heartbeat sound | *Call of Duty* titles, *Uncharted 2* |
| **Haptics** | The controller rumble simulates a heartbeat as you near death | *Silent Hill* |

- **Losing health doesn't have to be permanent.** Rogers likes regenerating "wait for health". It's a good compromise compared with a game-over/death screen, because that screen **pulls the player out of the game**. (In 2010 this was "increasingly popular". Today it's standard in shooters.)
- **Warning for screen-effect health:** never obscure the view so much that the player can't see the action. Ironically, the moment you're nearly dead is the moment you most need to see.
- **🖼️ Figure:** three health styles side by side: a segmented bar, a row of three hearts, and a round liquid-filled orb held up by a little demon (the classic action-RPG "health globe").

**🎮 Book examples:** Metroid (suit system), Star Wars: X-Wing (shields, % readout), Assassin's Creed (narrative health), Halo (regen), Uncharted 2 (directional blood/blur, darkening), Metroid Prime and Batman: Arkham Asylum (electrical fritz), Call of Duty (darken + heartbeat audio), Silent Hill (rumble heartbeat).

**📱 F2P mobile translation:**
- **Health lives above the unit** in most mobile action games, because the playfield is small and your eyes are already on your character. Brawl Stars puts the bar over each brawler, and brawlers regenerate after a few seconds out of combat (Halo-style "wait for health" on a phone). Clash Royale shows HP on the towers themselves.
- **Moves-left is health.** In match-3 games (Candy Crush, Royal Match) the move counter is the level's health bar. It's watched just as nervously.
- **"Lives" became a meta-system:** puzzle games use lives that **refill on a timer**. That's "wait for health" stretched across real hours, and it doubles as a session-pacing and monetization lever (→ F2P1 energy systems).
- **Directional damage indicators** (red arcs at the screen edge pointing at the shooter) are standard in mobile shooters like PUBG Mobile and COD Mobile. That's Uncharted 2's idea, shrunk to fit a phone.
- **Haptics are the new rumble:** a short phone vibration on big hits or low health. Always add a **toggle**, because many players hate it.
- **The fail screen is a business moment in F2P:** "Out of moves! Continue for X gems / watch an ad". Rogers' warning still applies, because a fail screen pulls players out. Make it fast, honest and skippable, and never fake a near-win to sell the continue.

**🪝 Make it stick:** Health bars are shape-shifters: **bar, hearts, orb, shield, story, heartbeat**. Picture a doctor checking your pulse and finding a progress bar.

> ⚠️ **2010 → 2026:** Regenerating health went from a trend to the default in action games. On mobile, full-screen red vignettes cover a much bigger *share* of a small screen, so keep them light, brief and edge-only.

---

## 3. Targeting
**🧠 Big idea:** A **targeting reticule** helps players find and/or lock onto ranged targets. It ranges from a simple laser-sight dot to a full **lock-on system** that also shows target info like health and range. 🖼️ The book's figure: a sniper-scope crosshair next to an ornate lock-on frame full of readouts, captioned "sights can be simple or complex".

**📋 The details: reticule rules:**
1. **Size:** it shouldn't dominate the screen, but it can't be so small that it's hard to see.
2. **Color:** white reticules are common, but they **vanish against some surfaces and backgrounds**. (Fix: outline it or use a contrasting color.)
3. **Zoom modes:** reticules often switch on in a zoomed-in mode like a sniper scope. Some **change size** for more precise aiming when zoomed (*Red Faction: Guerrilla*, 2009).
4. **Feedback:** have the reticule **change color or "sharpen focus" when it's over a target**. That's the player's cue to fire.
5. **Stickiness = aim assist:** when the reticule is near a target, make it **gravitate toward it** for faster targeting. It works especially well for **vehicle weapons**.
6. **Build gameplay into the reticule:** in *Team Fortress 2*, the zoomed sniper reticule also projects a **laser dot that enemies can see**, so they can try to dodge. The UI becomes a mechanic.

**🎮 Book examples:** Red Faction: Guerrilla (size-changing zoom reticule), Team Fortress 2 (visible sniper laser = counterplay).

**📱 F2P mobile translation:**
- **Thumbs aren't precise, so aim assist isn't optional on touch.** Common patterns: **tap the attack button to auto-target** the nearest enemy, **drag to aim manually** (Brawl Stars does both). Shooters like COD Mobile layer aim assist and even an optional auto-fire mode on top.
- **Range and area previews are the modern reticule:** when you drag an ability, the game paints its range, cone or landing zone on the ground. Show it clearly, and color it differently when it will actually hit.
- **Telegraphs = TF2's laser in reverse:** many mobile action games warn you of *enemy* attacks with red ground markers or lines. A targeting display becomes a dodge mechanic.
- **The reticule must survive sunlight.** Phones are played outdoors at low brightness, so a white crosshair needs a dark outline.
- **Your thumb covers part of the screen.** If aiming is by drag, show the preview *away from* the finger, not under it.

**🪝 Make it stick:** A good reticule is a **flirt**: it notices the target, lights up, and leans in (sticky aim). A bad one is a ghost: white on a white wall.

---

## 4. Ammo gauge
**🧠 Big idea:** Whether it shows individual bullets or a simple number, the **ammunition gauge** will be **one of the most-watched readouts on screen**. In games where ammo is scarce (Rogers calls out *Resident Evil 2*), putting it somewhere easy to see matters even more.

**📋 The details:**
- 🖼️ Figure: shell icons, a gun silhouette, and a "**7 | 30**" readout (rounds in the clip | reserve).
- **Show clips *and* individual bullets** if you have the space (*Operation Wolf*, Taito, 1987).
- **Multiple ammo types** (grenades, rockets): let players **bring them up with a button press** (*Ratchet & Clank: Tools of Destruction*).
- **Always show the ammo for the weapon that's currently equipped.** It sounds obvious, which is exactly why teams forget it.
- **Even infinite ammo deserves a display:** it still tells the player **which weapon is armed** (*Metal Slug* games do this).

**🎮 Book examples:** Resident Evil 2 (scarce ammo → visibility matters), Operation Wolf (clips + bullets), Ratchet & Clank: Tools of Destruction (call up other ammo types), Metal Slug (shows infinite weapon anyway).

**📱 F2P mobile translation:**
- **The "ammo" of mobile games is a resource bar or a cooldown.** Clash Royale's **elixir bar** sits right under the card hand, in your thumb's line of sight, because you check it every second. Many action games show a **charge ring filling around the ability button** (Brawl Stars' super). The gauge lives *on the button you'll press*. Smart: no eye travel.
- **Booster counts:** puzzle games put a small number badge on each booster icon. That's Rogers' "multiple ammo types", always visible and one tap away.
- **Show what's equipped:** auto-attack roguelites (Archero, Survivor.io) have no ammo but show which skills/weapons are active, which is the Metal Slug principle.
- **Scarcity + visibility = tension.** If your F2P design makes a resource scarce (energy, boosters), the display must be crystal clear. Hiding a scarce resource feels like a trick.

**🪝 Make it stick:** Ammo gauges are like a car's **fuel gauge in the desert**: the scarcer the stuff, the bigger and closer the gauge should be.

---

## 5. Inventory
**🧠 Big idea:** **Inventory** lets players track and manipulate the objects they collect (keys, potions, puzzle items, weapons). It's a staple of adventure games and RPGs. Rules: fast access, a nice place to admire your loot, readable items, room to grow, and never lose the player's stuff.

**📋 The details: 8 inventory rules:**
1. **Quick access** for things like potions and spell components: use **hotkeys** or **drag-and-drop** so players grab items fast.
2. **A place to admire your loot up close:** *Tomb Raider* (Eidos, 1995) blows up whatever sits in Lara's backpack so you can inspect it at a larger scale.
3. **Inventory as a puzzle:** *Diablo* gives every item a **size** in a limited grid, so packing becomes a game of fitting as much as possible into a small space.
4. **Realistic or iconic, either works**, but items need **clear silhouettes and simple color schemes**.
5. **Restricted inventory? Let it expand later:** start with a pouch → a backpack → eventually a magic bag of infinite holding.
6. **Permanent storage** somewhere safe (like a home base). Nobody likes losing what they found or bought.
7. **The "magic box"** (*Resident Evil 2*): items stored in one box show up in boxes found later in the game, so the player never has to trek back and forth across the world.
8. 🖼️ Figure: a **paper-doll** equipment screen (helmet, armor, sword and shield slots arranged around the character) above a grid of item cells full of potions.

**🎮 Book examples:** Tomb Raider (big-scale item inspection), Diablo (size-based grid puzzle), Resident Evil 2 (linked magic item boxes).

**📱 F2P mobile translation:**
- **Inventory limits are an economy lever.** Expanding bags, hero slots or storage is a classic premium-currency **sink**. Rogers' pouch → backpack → magic bag is literally an upgrade track. Ethical line: limits should create interesting choices, not constant pain whose only cure is paying.
- **Merge games turn the board into Diablo's inventory puzzle:** limited board space plus a small storage area, where every slot matters (Merge Mansion, Travel Town style).
- **The mailbox/inbox is the modern magic box:** rewards, compensation and event prizes wait there instead of overflowing into the void. If the inventory is full, **send overflow to the mailbox, never delete it**.
- **"No one likes losing what they bought" is a trust rule in F2P.** Purchased items must never silently disappear, expire without loud warning, or be wiped by a bug. That's how you get refund requests and 1-star reviews.
- **Readability at thumbnail size:** inventory grids on phones show dozens of items at ~40–60 px. Distinct silhouettes plus **rarity-colored frames** (grey/green/blue/purple/orange is a widespread convention) make sorting instant.
- **Quick access = a booster tray:** the items you use mid-level sit in a tray within thumb reach, never inside a menu.

**🪝 Make it stick:** Pouch → backpack → **bag of holding**. Imagine your inventory hitting the gym every few levels and coming back *roomier*.

---

## 6. Score
**🧠 Big idea:** Scoring is the oldest HUD element. Whatever form it takes, **when the player scores, make it BIG and FLASHY.** Games find a hundred ways to make players feel clumsy, yet rarely bother to make them feel brilliant. **You can't overdo congratulating the player.**

**📋 The details:**
- **A mini history of score:**
  - The earliest games had **single-digit scores** (*Pong*, *Computer Space*). Then **four digits** (*Space Invaders*), then **six** (*Galaxian*).
  - In the early-1980s arcade boom, **the high score was king**. Typing your three initials into the high-score table proved mastery, unless the arcade owner reset the machine and wiped it.
  - As home consoles grew, high scores faded and **stat tracking** took over. Text **combo meters** replaced score bars (*Devil May Cry*, Capcom, 2001).
  - Online **leaderboards** brought scoring back. It now lives alongside combo meters, stats and **achievements**.
  - Scoring is still most common in **arcade-style games** and **Japanese RPGs** (*Final Fantasy*), and it was creeping into Western RPGs like *Borderlands* (2009). (Footnote joke: its developers called it an "RPS", a role-playing shooter.)
- 🖼️ Figure: a chunky "SCORE 150" box next to an **"Achievement Unlocked"** pop-up toast.
- **Gold standard:** *Zack & Wiki: Quest for Barbaros' Treasure* (Capcom, 2007) makes even the worst player feel like a genius. Every small success sets off fireworks, congratulatory text and **happy pirate rabbits doing backflips**.
- **6 rules to make rewards feel rewarding:**
  1. **Voice and sound effects** call attention to every reward.
  2. **Freeze gameplay** so the player can savor the moment, *or* have the **hero celebrate** alongside the player (victory animations, sounds, effects).
  3. **You can never have too many particles**, especially for an achievement or a high score.
  4. **Clear cause and effect:** the player must see *how* they earned the score. Example: a collected gold coin **flies up into the tally**, with a Las Vegas-style "cha-ching!".
  5. **An easy-to-read font:** ornate fonts (medieval script), heavy stylization, even serifs can be hard to read. **Watch text length**, because you may run out of screen space.
  6. **Fill as much of the screen as you can** with celebration, **but never interrupt or cover the gameplay.**

**🎮 Book examples:** Pong/Computer Space → Space Invaders → Galaxian (score digit inflation), Devil May Cry (combo meters), Final Fantasy (JRPG scoring), Borderlands (scoring creeping into Western RPGs), Zack & Wiki (over-the-top praise).

**📱 F2P mobile translation:** This section is the bible of **"juice"**, the thing F2P puzzle games do best.
- **Voice:** Candy Crush's deep-voiced praise words ("Sweet!", "Delicious!") are Rogers' rule #1 at scale.
- **Cause and effect:** in almost every F2P game, coins and gems **fly from where you earned them into the currency counter** at the top, and the counter ticks up. It teaches players where their money lives.
- **Freeze + celebrate:** end-of-level win sequences (a pause, a character dance, confetti, stars stamping down one by one) are the "savor the moment" beat.
- **Results screen = score screen:** stars, score, rewards, and often a "×2 with an ad" button (→ section 14, tally screens).
- **Leaderboards are back, big time:** weekly tournaments, league ladders, trophy roads, guild rankings (→ L14 multiplayer, L13 rewards).
- **Modern caveat: celebration fatigue.** "Never overdo it" holds for *rare* moments. For routine ones (your 400th chest), offer **tap-to-skip or speed-up** and **batch opening**. Juice should feel like applause, not a hostage situation.
- **Sound-off reality:** many mobile players play muted, so every celebration must read **visually** too (and with haptics).

**🪝 Make it stick:** **Back-flipping bunnies.** Whenever you design a reward, ask: "Where are my bunnies?" If the answer is "a +10 in grey text", go find some bunnies.

> ⚠️ **2010 → 2026:** "Fill the screen with celebration" still works, but on a 6-inch screen a celebration *covers* the gameplay. Celebrate during natural pauses (end of level, between waves) and keep in-play feedback local (the number pops where the action happened).

---

## 7. Radar/map
**🧠 Big idea:** The first game radar/map appeared in *Rally-X* (Namco, 1980). It showed where the power-ups were **without** revealing the whole map or the enemy cars. Since then maps have grown into outlines of the whole playfield and even sources of secret clues. A good map is **legible, usable while moving, explained by a legend, and themed.**

**📋 The details: 8 map rules:**
1. **Size:** big enough to read, but not so big it fills the screen. **If the map must go full-screen, pause the game.**
2. **Use it while moving:** opening a map, memorizing it, closing it and heading off is a chore. *GTA4* lets players **place their own markers** on the map, and the route then guides them straight to the objective.
3. **A legend for map icons:** checkpoints, doorways, quest items, traversal goals, story points. The player should identify each at a glance.
4. **Show elevation** if your world has it. Multi-level spaces confuse players fast, so use a **color code** or an **"onion-skin" effect** (other floors faded) to show which layer they're on.
5. **Show the player's facing direction** with an arrow or similar icon, so they know whether to turn to face their goal.
6. **Fog of war** (the map is hidden until the player "clears" an area by moving through it): fine, and you can offer ways to reveal the whole map. **Never re-fog cleared areas.** That confuses players with the very tool meant to orient them.
7. **Add helpful extra info:** *Batman: Arkham Asylum* shows a **distance-to-goal counter**. The *Metal Gear* series shows guards' **detection cones**. *Harry Potter and the Order of the Phoenix* (EA, 2007) shows **NPC names** on the Marauder's Map.
8. **Theme the mini-map:** parchment for fantasy, a holographic display for sci-fi. Even the map adds to the game's **gestalt** (its overall feel; see section 14).
- 🖼️ Figure: a themed circular mini-map with a north arrow on the rim, the player marker in the middle and a red-cross pickup icon, next to a classic black sweep-radar with blips.

**🎮 Book examples:** Rally-X (first radar), GTA4 (custom waypoints), Batman: Arkham Asylum (distance counter), Metal Gear (vision cones), Harry Potter: Order of the Phoenix (NPC names on the map).

**📱 F2P mobile translation:**
- **Corner mini-maps, away from the thumbs:** MOBAs (Mobile Legends) and battle royales (PUBG Mobile) keep the mini-map in a **top corner**, because the bottom corners belong to the joystick and buttons. Tapping it usually opens a full map, and tapping there places a marker or ping (GTA4's waypoint idea, plus team communication).
- **Fog of war is a core 4X mechanic:** in games like Rise of Kingdoms, you send scouts to clear the fog around your city. Clearing fog is itself a reward loop.
- **The saga map is a map whose job is progress, not navigation:** Candy Crush-style level paths show how far you've come and what's next. Same rules apply: show "you are here", make the next goal obvious, theme it.
- **World maps in 4X games** (Whiteout Survival, Last War) are dense. They need a strong legend, filters (show only resources / only allies) and zoom levels that hide clutter.
- **Phones can't afford a big always-on map.** Keep it small and toggleable, or replace it with **edge arrows** pointing to off-screen objectives.

**🪝 Make it stick:** A good map answers three questions in one glance: **"Where am I? Which way am I facing? Where's the good stuff?"** If it can't, it's just a pretty coaster.

---

## 8. Context-sensitive prompt
**🧠 Big idea:** A **context-sensitive prompt** is a little icon or line of text that shows up **whenever the player stands close to something they can use**. The most common version shows **the icon of the button to press**. Example: in *Grand Theft Auto 3*, a "Y" button icon appears whenever you stand next to a car you can hijack. 🖼️ Figure: a treasure chest with a circled (A) button floating above it.

**📋 The details:**
- **"Plings":** on *Maximo: Ghosts to Glory*, Rogers' team made **emoticon-style prompts** that signaled the *impossible* actions as well as the possible ones (a "can't do that yet" pling, not just a "do it now" pling). 🖼️ Figure: a knight with a big "!" over his head.
- **Where to use context prompts (9 suggestions):**
  1. **Doors, gates, hatches.**
  2. **Mechanisms:** cranks, levers, pushable objects.
  3. **NPCs:** not just "talk". Plings and emoticons can show an NPC's **emotional state**: catch them in a good mood and you get a better response or reward than if they're angry, scared or sad.
  4. **Collectible items and weapons.**
  5. **Vehicles or mini-games:** e.g., manning a machine-gun turret in the middle of regular gameplay.
  6. **Jump locations** (*The Legend of Zelda* games).
  7. **QTE prompts** (*God of War*): a preset sequence that advances if you hit the right button (see section 11).
  8. **Combat notifications:** icons showing when an enemy is **vulnerable** to a certain attack type.
  9. **Secret treasure:** the icon appears when the player gets **close to a hidden item**.
- **Self-explanatory HUD elements** exist too: **fuel gauges, speedometers, countdown timers**.
- For *every* HUD element, the winning formula is the same: **clear, clean, simple.**

**🎮 Book examples:** GTA3 (Y button near cars), Maximo (plings for can/can't), Zelda (jump prompts), God of War (QTE prompts).

**📱 F2P mobile translation:**
- **On touch, the prompt *is* the button.** No controller icon is needed: a **contextual action button** pops up near your thumb (open door, pick up, revive, enter vehicle). PUBG Mobile and similar shooters do exactly this. Rule: it appears in a **consistent spot**, so the thumb learns it.
- **Tap highlights and pulses** are the casual version: a gently bouncing building means "collect me" (farm and city builders like Hay Day show produce ready to harvest).
- **The tutorial hand pointer** is the FTUE's context prompt: a ghost finger showing exactly where to tap or swipe. Use it at first, then **fade it out**, or veterans feel patronized.
- **Plings live on as emotes and status bubbles:** emote systems (Clash Royale, Brawl Stars) let players *be* the pling. "!" and "?" bubbles over quest-givers and shopkeepers are still the RPG standard.
- **"Can't do it" feedback matters on mobile:** a greyed-out button with a lock or "Level 12" label beats a silent no-response tap, which players read as a bug.
- **Timers are the F2P self-explanatory gauge:** event countdowns, chest timers, build timers. Clear, clean, simple: one timer format, one style.

**🪝 Make it stick:** A context prompt is a **waiter who appears exactly when you look up**. Too early and it's hovering. Never, and you starve.

---

## 9. The clean screen
**🧠 Big idea:** Reality is a double-edged sword: you want your game to look **cinematic**, but you still have to communicate gameplay and controls. There are two strategies: **fade the HUD when it isn't needed**, or **remove it entirely** and communicate through the world itself.

**📋 The details:**
- **Step 1, fading HUD:** let HUD elements **move or fade off screen while inactive**. They must **reappear when relevant** (taking damage, collecting treasure), and the player needs a **quick, easy way to call them back** (a shoulder-button press usually does it).
- **Step 2, no HUD at all:** *Peter Jackson's King Kong* (Ubisoft, 2005; the movie tie-in game) showed a few prompts at the start, then conveyed nearly everything through **sound, animation and visual effects**. The result was very cinematic and immersive.
- **4 tips if you go HUD-less:**
  1. **Characters react to the world** to show function or interaction: they **look at collectibles**, **reach toward places they can get to**, and **comment on things** they should interact with.
  2. **Prefer full-screen effects over small, subtle ones.** Overemphasizing never hurts. Use everything: sound, voice, VFX, color, lighting.
  3. **Glows and attention effects** make items stand out. Or use the **"Scooby-Doo effect"**: in late-1960s/70s Hanna-Barbera cartoons, backgrounds were lushly painted while animated objects were flat-colored and unshaded, so anything you could interact with *accidentally* stood out. Do it *on purpose*.
  4. **Use cinematic characters to lead the player** through the world. Or, if that's too much work, a big glowing arrow or path markers.
- **The interface galaxy:** picture a galaxy with **Planet "No Interface"** on one side and **Planet "Gobs of Interface"** on the other. (Rogers wonders whether the locals are "No Interfacians" or "Goblings".) RPGs, RTSs, simulations, adventure games and some shooters live on Gobs of Interface. 🖼️ A full-page figure shows that world: an MMO-style screen with a zone-named mini-map, a character-sheet window, a backpack grid and rows of ability icons along the bottom and right edges. **The game world is a sliver between panels.**

**🎮 Book examples:** King Kong (near-HUD-less cinematic design), Hanna-Barbera cartoons (Scooby-Doo effect), the MMO/RPG "Gobs of Interface" illustration.

**📱 F2P mobile translation:**
- **Hyper-casual games live on Planet No Interface:** a score and maybe a pause button. Helix Jump and Flappy Bird-style games prove you can teach entirely with feedback and a single gesture.
- **Mid-core F2P lives on Planet Gobs of Interface,** and the **lobby** is the capital city (see section 16). The book's MMO illustration is basically a 2026 4X home screen.
- **Fade-out on mobile = context-dependent HUD:** hide the booster tray during a cascade, hide the joystick until the thumb touches down (a **floating joystick**), collapse event rails during combat.
- **"Characters react to the world" on mobile:** a character glancing at a chest, or a pet pointing toward the objective. It's cheap, charming, and doesn't steal screen space.
- **Scooby-Doo effect is a mobile staple:** interactive objects get **outlines, rim light or a subtle bounce** so they pop against busy art on a tiny screen.
- **Glowy arrows are honest, not lazy:** with 30-second sessions and distracted players, a clear guiding arrow beats elegant subtlety.

**🪝 Make it stick:** Two planets: **Kong-world** (silence, glances, glowing objects) vs **Gobling-world** (panels everywhere). Know which planet your game lives on, then use as little UI as *that* planet allows.

---

## 10. Icon Has Cheezburger? (icon design)
**🧠 Big idea:** Icon-heavy games (RTS, adventure, RPG, sims) are full of icons for stats, weapons, spells and bag contents. That's part of their charm, because the player makes lots of choices and builds and collects lots of things. Not every game needs to be HUD-less Hollywood. But every icon must be **instantly readable.** Master rule: **KYSS = Keep Your Symbols Simple.**

(The title is a pun on the "I Can Has Cheezburger?" lolcat meme. Rogers apologizes for it in a footnote. A footnote also notes Peter Jackson won his Oscar in 2004 for *Return of the King*, and that he's the same Jackson behind the HUD-less *King Kong* game.)

**📋 The details: the icon rules** (Rogers jokingly promises "157" things, footnoted as plus or minus 150; there are 16 here):
1. **Pick the right image.** If the icon builds tanks, put a tank on it. (A footnote teases readers for looking for the answer down there.)
2. **Make the image current and accurate.** A team Rogers worked with drew a "stamp" function (as in ink stamp) as a **postage stamp**, and younger testers didn't know what a postage stamp was. Metaphors age.
3. **Color-code.** Fire punch = red (or orange). Frost hand = blue. Go further and give whole **categories a background color**: e.g., all "advance to next screen" icons green, all sword-combat icons on red, but a **different red** from fire attacks. Goal: players see similarities and **pick the right icon at a glance**.
4. **When color isn't enough, use shape** as a differentiator.
5. **Avoid text in icons.** You'd have to redo them for **localization**, and text may be **too small to read**.
6. **If a word *is* the icon,** make it legible and make it **look like a button**, not loose text.
7. **Never combine several visual elements** (text + character + logo) on one icon.
8. **Give icons a strong black or white outline** so they **pop** off the background.
9. **View all your icons together** to catch look-alikes. Make each as individual as possible.
10. **Tooltips:** show the item's name (spell or whatever) when the cursor **hovers** over the icon. An occasional reminder never hurts.
11. **Don't leave icons to programmers.** They care about function, not design or art.
12. **Learn from the experts:** Apple, Adobe and Microsoft employ dedicated icon artists. Graphic-design books and font sets with icons are good references, and so are icon-heavy games (RTS, sims). Maximo's ability icons were inspired by **Boy Scout merit badges**. Icons are everywhere, so don't reinvent the wheel.
13. **Pressing an icon must do SOMETHING:** change color, play a click, anything that registers the interaction.
    - **Avoid voice on every click.** Nobody wants a "Wise choice, general!" bark on every single press.
    - If you need voice, **play it only about every third click**, and **record several variants** to rotate (e.g., "Roger!" → "On my way!" → "Consider it done!" → repeat).
    - **How to read the rule (his worked example):** the book's sample run plays a *different* acknowledgment on each of the first three clicks and only loops back to the first line on click 4, then the second on click 5. So the safe reading is: **the same voice line must never come back sooner than about three clicks later**, voice stays sparing overall, and you **record a few extra cues** so the loop never feels canned.
14. **The most important button should be the biggest**, and so should **the most-used** button.
15. **Put the most-used buttons within easy reach** of the screen center, or wherever the cursor spends most of its time.
16. **Make icons a little "sticky"** so the cursor gravitates toward them.

**KYSS = Keep Your Symbols Simple** (a riff on KISS; the footnote stresses it's "Your" with an I).

**The shared icon vocabulary:** audiences already know icons from comics and cartoons (birds and stars circling a dazed head, "POW!" bursts, scribbles over an angry character's head, swirls for a drunk one) and from computer desktops. Games have built their **own icon dictionary** over the years. Use it!

| Icon | Means | Notes |
|---|---|---|
| ➕ **Red cross** | healing items | Footnote: the Canadian Red Cross complained to developers that using its emblem in "violent video games" misuses a protected symbol; the industry hadn't formally responded (as of 2010). |
| **1UP** | extra life | A head or tiny "doll" version of the hero also works |
| ❤️ **Heart** | health | substitute for red cross or 1UP |
| 🍔🥫💊 **Food / soda can / pills** | energy or healing | nod to the classic arcade line about an elf badly needing food |
| ❗ **Exclamation point** | over enemies = **surprise/alert**; over the hero = **can interact** | |
| 🚫 **"No" symbol** | can't use / don't need | (also: ghost-busting) |
| 💀 **Skull** | poison, death, danger | (and sometimes pirates) |
| 🪙 **Coin** | money | or a big sack of cash with a $ |
| 🎮 **Controller-button icons** | "press this control for this action" | common in QTEs |

🖼️ Figures: a row of heart, 1UP, burger, soda can, red-cross box and pill; then a "no" sign, skull and crossbones, coin and a circled (A) button.

**🎮 Book examples:** the postage-stamp story (outdated metaphor), Maximo (merit-badge-inspired ability icons), Apple/Adobe/Microsoft (expert icon design), RTS/sims (icon inspiration).

**📱 F2P mobile translation:** icons matter *more* on mobile than anywhere else.
- **No hover on touch:** rule 10's tooltip becomes **long-press for info**, a small "i" button, or a one-time label the first time the icon appears.
- **No cursor, so "sticky" becomes generous hit areas.** Make the tappable area bigger than the drawn icon. Apple's guidelines suggest roughly **44×44 pt** minimum touch targets and Google's Material guidelines about **48×48 dp**.
- **Biggest button = most important:** the giant **PLAY/BATTLE** button on home screens (Brawl Stars), Monopoly GO!'s big **GO** button, Coin Master's spin button. The core action is the biggest thing on screen.
- **The app icon is your most important icon:** it decides store tap-through. Same rules: one clear subject, no text, strong silhouette, contrast. Test it at tiny sizes next to competitors.
- **Color + shape, never color alone (color-blind safety):** roughly **1 in 12 men** has some color-vision deficiency, most often red–green. Rarity, team and element systems must also differ in **shape, pattern or label**. Test with a color-blindness simulator.
- **Readable at small sizes:** design and review icons at the **actual size on the smallest supported phone**, not zoomed in on a 27-inch monitor. Squint test: blur it, and it should still be recognizable.
- **Rarity frames and currency icons are a vocabulary:** players learn "purple frame = epic" and "green gem = premium" across games. Respect the genre's conventions unless you have a reason to break them.
- **Don't bake text into icons:** localization into 10–15 languages is normal in F2P, and text belongs in a separate, translatable label.
- **Feedback on tap:** a scale "squish", a click sound **and a light haptic**. Mobile players often play muted, so visual feedback is mandatory.
- **Voice barks:** Rogers' "every third click, rotate variants" rule applies to character barks on unit select or hero tap in mobile strategy games. In practice: a pool of at least 3-4 lines per unit, and never the identical line twice within 3 taps.
- **Red cross today:** many games use a heart, green cross or potion for healing, partly to steer clear of the protected Red Cross emblem.

**🪝 Make it stick:** **KYSS your icons goodnight:** one picture, one meaning, one outline. If an icon needs a sentence to explain it, it isn't an icon, it's a riddle.

> ⚠️ **2010 → 2026:** Hover tooltips and cursor stickiness don't exist on touch. The principles (reminders, generous targets, most-used near where attention lives) translate into long-press info, oversized hit boxes and **thumb-zone placement** (section 16).

---

## 11. Don't Get QTE (quick-time events)
**🧠 Big idea:** A **quick-time event (QTE)** is a prompt that forces a split-second action, or you suffer (usually painful or fatal) consequences. Players love them or hate them, but they're **here to stay**. They're just one more tool. **Use them responsibly.**

**📋 The details:**
- The section opens with a fake "book QTE": press the button now... too late, you died. (🖼️ A big round "Button" drawing.)
- **History:**
  - *Dragon's Lair* (Cinematronics, 1983) introduced QTE gameplay. The *whole game* is one long QTE. (🖼️ Figure: a nervous knight hemmed in by thorny walls, the classic split-second-death moment.)
  - A short wave of similar arcade games followed (*Cliffhanger*, *Space Ace*, *Thayer's Quest*), then QTEs nearly died out, like text adventures.
  - *Shenmue* (Sega, 1999) brought them back **and coined the name "QTE"**.
  - *Resident Evil 4* and *God of War* made them a staple.
- **8 rules for responsible QTEs:**
  1. **Never use a QTE for something the player could do with normal controls.** Rogers prefers them as **shortcuts to cinematic sequences**. Save them for **big, exciting moments and nigh-impossible actions**.
  2. **Timing is everything:** give **one "beat" to register the icon appearing** and **another "beat" to press** the button.
  3. **Don't string them out too long.** Failing usually means **repeating the whole sequence**, and doing that over and over is miserable.
  4. **Be fair, which means predictable.** Random QTE icons sound like variety, but this is the one place you *want* predictability. Once players memorize the pattern, they can **enjoy watching the cool action**. Random QTEs exist in real games, but Rogers dislikes them because they make players feel they won by **luck, not skill**.
  5. **One set of controls:** usually the face buttons, sometimes a stick. **Avoid the harder-to-reach shoulder buttons.**
  6. **Big, easy-to-see icons** in a **consistent position**. Don't move them around.
  7. **Try not to make QTEs mandatory:** *Uncharted 2* and *Batman: Arkham Asylum* offer QTEs as *optional* ways to take out enemies. Miss one and you still have plenty of other options.
  8. **Motion-controlled QTEs:** keep the waggling **short** and **don't repeat it too many times in a row**. Players want to play, not get wrist injuries.

**🎮 Book examples:** Dragon's Lair (all-QTE game), Cliffhanger, Space Ace, Thayer's Quest (the early wave), Shenmue (revival and name), Resident Evil 4 and God of War (popularized), Uncharted 2 and Batman: Arkham Asylum (optional QTEs).

**📱 F2P mobile translation:**
- **Timing prompts are everywhere on mobile, just not called QTEs:** Pokémon GO's **shrinking catch circle** (hit it small for a better throw), "tap now for a critical" ultimates in RPGs, and perfect-timing bonuses in casual games. These follow Rogers' rules: **predictable, fair, and rewarding skill without blocking progress.**
- **Thumb rule = Rogers' "single set of controls":** QTE taps should land where the thumb already rests. Never at the top of the screen, never in a spot the hand covers.
- **Prefer "bonus for success" over "death for failure":** in F2P, a mandatory QTE that kills you (and costs a life or energy) feels like a cash grab. An optional QTE that adds a bonus feels like skill.
- **Account for latency and device variety:** cheap phones, touch-sampling differences and Bluetooth audio lag all make tight timing windows unfair. Make windows generous, or calibrate them.
- **Auto-battle games** (AFK Arena-style) often let players manually trigger ultimates for better timing. That's an *optional* QTE: skill expression for those who want it, auto for those who don't.
- **Accessibility:** offer a way to reduce or skip repeated timing challenges for players with motor impairments.

**🪝 Make it stick:** **"Beat to see, beat to press."** Say it like a drummer: *ba-DUM*. If your QTE doesn't fit that rhythm, it isn't quick, it's mean.

---

## 12. HUDs, and where to stick 'em (screen placement)
**🧠 Big idea:** Now that you have a pile of beautiful icons, where do they go? Rogers walks a zombie through four placement diagrams. **Keep the center clear, put the vital stuff top-left, beware edges that get clipped, don't box the player in, and never make anything more than three presses away.**

**📋 The details:**

**🖼️ The zombie diagrams (dual-coding them):**
```
 (1) CENTER = keep clear          (2) TOP-LEFT = vital info
 +-------------------------+      +-------------------------+
 |                         |      | [####]                  |
 |        +-------+        |      | [####]                  |
 |        |ZOMBIE |        |      |                         |
 |        +-------+        |      |        ZOMBIE           |
 |                         |      |                         |
 +-------------------------+      +-------------------------+
 (3) BOTTOM STRIP = ok, but       (4) BRACKETING = bad
     watch for clipping           +-------------------------+
 +-------------------------+      | [####]          [#####] |
 |                         |      |                   [##]  |
 |        ZOMBIE           |      |      ZOMBIE (scared)[##]|
 |                         |      |                   [##]  |
 |[#######################]|      |[######################] |
 +-------------------------+      +-------------------------+
```

1. **The middle of the screen is where the action is**, and screen objects almost never get obscured there. Rogers calls this zone the **"safe frame"**. **Keep HUD out of it**, except for **targeting, reticules, or labels identifying game objects**.
   - *Terminology note:* in TV production, the "title-safe/action-safe area" is the inner rectangle that's guaranteed visible on every TV (old TVs cut off the edges through **overscan**). Rogers uses "safe frame" for that trustworthy inner region. His advice has two sides: keep HUD **out of the very center** (that's for gameplay), but **inside the safe area** (away from the outer edges that might be cut off).
2. **Full-screen displays? Make them translucent**, like the holographic menus in *Dead Space* (EA, 2008). The player stays connected to the environment and doesn't "lose their place" in the world.
3. **Upper-left = the most important info** (health, score...). Western readers' eyes travel left to right, so icons on the left let the eye flow back "into" the game on the right. That feels good.
   - Footnote: many Asian and Middle Eastern languages read right to left, but Rogers couldn't name a single game that laid out its HUD right to left (as of 2010).
4. **The bottom of the screen works too**, but watch for **clipping** on monitors or TVs not calibrated for your game.
   - **Assume at least half your audience has a bad TV.** Even excellent HD sets can clip the sides of the image.
   - Keep info **close to the safe area**, and **always offer screen-calibration options**.
5. **The "bracketing effect":** using the left, right *and* bottom edges makes the game view feel **smaller and claustrophobic**. Rogers has seen RTS screens so packed it felt like peering through a **mail slot**.
6. **Lots of icons? Let players choose** which ones to show and **prioritize where they go**, but **never let them cover the main gameplay area**.
7. **Icons that open other screens** (like inventory lists) need a **quick way back** to the game. Consider **pausing** the game there, so the player doesn't get ambushed while digging for their "+6 rod of killing".
   - **Counter-example on purpose:** *Dead Space* deliberately lets enemies attack while you rummage in your holographic backpack. The team wanted to deny players the "gamey" world-freeze you get in, say, *Resident Evil* inventories. Result: real dread as necromorphs close in and you realize there's no time-out.
8. **🏛️ The very important rule (the Three-Press Rule):** **no game screen may ever sit more than three button presses away from the player.**
   - Why? Players want to *play*, not spend the game navigating menus. (Rogers fakes a meltdown here: let them play the game!)
   - Don't make players **dig** for options or for the gameplay. Aim for everything to be **a press or two away**. **Consolidate screens** if you must.
   - **War story:** on one of his games it took **16 button presses** to reach gameplay. After some re-jiggering, they got it down to **4**.

**🎮 Book examples:** Dead Space (translucent holographic UI; no-pause inventory for dread), Resident Evil (world freezes in inventory, the "gamey" approach), RTS "mail slot" screens (bracketing).

**📱 F2P mobile translation:** Rogers' TV problems (overscan, clipping, bad TVs) have a direct modern equivalent. Phones have **notches, Dynamic Islands, punch-hole cameras, rounded corners and home-indicator bars**.
- **Safe areas are the new safe frame.** iOS (safe-area insets), Android (display-cutout insets) and engines (Unity's `Screen.safeArea`) tell you which rectangle is guaranteed unobstructed. **Anchor all interactive UI inside it**, and let background art bleed to the edges. Test on a notched phone in *both* landscape orientations, since the notch flips sides.
- **Thumb zones replace "upper-left = important".** The question isn't only where the eye goes first, it's **where the thumb can reach**:
```
 PORTRAIT (one hand)              LANDSCAPE (two thumbs)
 +-------------+                  +-----------------------------+
 | HARD  info  |  <- currencies,  | info      INFO      info    |
 | only, no    |     timers,      | (mini-map, score, timers)   |
 | buttons     |     settings     |                             |
 |-------------|                  |  EASY             EASY      |
 |   OK        |                  | [joystick]     [attack]     |
 |-------------|                  | left thumb   right thumb    |
 |   EASY      |  <- PLAY, nav    +-----------------------------+
 | [  PLAY  ]  |     tabs, core      center-top & center-bottom
 +-------------+     actions         are a stretch for both thumbs
```
  - **Portrait games:** read-only info at the **top** (currency bar, level, timers), and **interactive stuff in the bottom third** (big PLAY button, nav tab bar, booster tray).
  - **Landscape action games:** **joystick bottom-left, action buttons bottom-right**, info along the top edge and in the top corners (mini-map, score).
  - Small, rarely used buttons like **settings or pause go in the top corners on purpose**: they're hard to hit by accident.
- **Your hand is part of the HUD layout.** Thumbs cover the bottom corners, so never put critical info *under* where the thumbs rest.
- **Bracketing is the #1 F2P lobby disease:** currency bar on top, event icons stacked down **both** side rails, offer bubbles, a nav bar on the bottom. The actual game art becomes a mail slot (more in section 16).
- **Customizable HUDs are standard in mobile shooters.** PUBG Mobile and COD Mobile let players drag, resize and fade buttons. That's Rogers' "let players choose and prioritize", done well. Keep a "reset to default" button.
- **The pause-in-inventory question is now a PvP question:** in real-time PvP (Clash Royale, Brawl Stars) the world can't freeze, so menus mid-match must be minimal or non-existent. In single-player or PvE, pause.
- **The Three-Tap Rule:** from the home screen, **PLAY should take 1 tap**. The store, events, collection and settings should take 1–2. Some games put the core action *on* the home screen itself (Monopoly GO!'s dice board, Coin Master's slot machine): **zero taps**. Count taps from app launch to first gameplay. It's a tracked FTUE metric for a reason.

**🪝 Make it stick:** **"Center for zombies, corners for numbers, edges for nobody, and never more than three knocks on any door."**

> ⚠️ **2010 → 2026:** "Assume 50% of players have a bad TV" becomes "assume a big share of players have a **small, cheap, notched Android phone with low brightness**". Design and test on that device first, not on the flagship in your pocket.

---

## 13. There are other screens than the HUD (title screens and front end)
**🧠 Big idea:** Games have *lots* of screens beyond the HUD. The first one players see (after the box cover) is the **title/start screen**, so it has to **set the mood**. And don't make players press through a maze to reach the game.

**📋 The details:**
- **Title/start screen:** the first thing the player sees, apart from the box cover. (Footnote: *technically* players first sit through a warning screen, publisher logo, developer logo and the logos of licensed technology, but that makes a boring list.)
- **4 title-screen styles** (🖼️ each illustrated with a parody game and "Press Start"):
  1. **"Movie poster"**: mirrors the box cover. (Figure: *Die Zombie Die!*, a hero with a gun and a zombie horde in an explosion.)
  2. **"Heroic pose"**: the hero on a high bluff, long hair blowing, giant sword and/or gun at the ready. (Figure: *Dude With Sword*, posing in front of a castle.)
  3. **"Enigmatic image"**: something important to the game that the player can't understand yet. Why a jungle? Why a monkey statue? A relic to raid? When they finally learn its significance, **mind blown**. (Figure: *Relic Raider*, a monkey idol in a jungle.)
  4. **"Logo" screen**: a big game logo. Not very exciting but effective. **Add motion**: strobing colors, rotation, bouncing text. (Figure: *Super Magic Guy* on a sunburst.)
- **Title-screen menus** often offer **save/load, number of players, options, bonus features, difficulty**. Players just want the good stuff, so **minimize presses: no more than three screens deep** (not counting front-end logos and legal screens).
- **Many title-screen functions can also live on the pause screen.**

**🎮 Book examples:** the four parody title screens above (Die Zombie Die!, Dude With Sword, Relic Raider, Super Magic Guy).

**📱 F2P mobile translation:**
- **Your real title screen is the app-store page.** The **app icon, screenshots and preview video** set the mood *before install*, and they directly affect conversion and CPI. Rogers' four styles map neatly:
  - movie poster → the store's feature graphic / key art,
  - heroic pose → character-led screenshots,
  - enigmatic image → curiosity-driven ad creatives ("what happens next?"),
  - logo → the splash screen.
- **Mobile launch sequence:** OS splash → publisher/engine logos → legal and consent → loading/asset download → (FTUE or lobby). **Every extra screen bleeds players before they've played a second.** Combine and shorten where you can.
- **Modern F2P often skips the classic title menu.** First launch drops players into gameplay within seconds (the FTUE). Later launches go to a **loading screen with key art** and then straight to the lobby. Save/load, difficulty and player count don't exist as menus: the account *is* the save, difficulty is tuned by level design, and modes live in the lobby.
- **The "logo screen needs motion" rule** applies to loading screens. A static image on a phone reads as "frozen app".

**🪝 Make it stick:** Title screens are **movie posters for a movie that starts when you press a button**. Make the poster great, then get out of the way.

---

## 14. The pause that refreshes (pause screen and its family of screens)
**🧠 Big idea:** A well-designed **pause screen** is more than a break. It's a **hub** for saving, options, map and inventory, and it can even be *enjoyable*. **Plan your pause screen as carefully as you plan a level.**

🖼️ Opening figure: a plain black "PAUSE GAME" list (Save Game / Load Game / Options / Credits / Exit Game, "Return to game: press Start"), with a stick figure begging you not to make yours this boring.

### 14a. Pause
- A pause screen can be used to **save, reach options, the map or inventory**, or even just be enjoyed: *Banjo-Kazooie* (Nintendo, 1998) plays a lovely acoustic version of its theme.
- **The player must never feel they're missing part of the game by pausing.** Remember, most people pause for **bathroom breaks**.
- You *can* skip a pause screen entirely like *Dead Space*... but then when would anyone get a bathroom break?
- **The bad habit:** designers make "Resume" the first option and "Options" the second, burying map and save further down. Think how often a player would press Start → scroll down to Save → save → scroll back up to Resume.
  - **Let the pause button also close the menu.** Then you don't even need a Resume option!
  - **Put the most common action first:** if Save is what players choose most, make it the first option. If not, make it the **map or inventory**.
- **🖼️ Pause-screen hub diagram:** everything that can branch off a pause screen:
```
       Sound / Music volume   Save / Load game   Cheat codes
                     \               |              /
   Controller screen -------- [ PAUSE SCREEN ] -------- Calibration tool
                     /               |              \
   Difficulty settings         Credits    Exit game   Bonus material
```
  (9 spokes: sound and music volume, save/load, cheat codes, calibration tool, bonus material, exit game, credits, difficulty settings, controller screen.)

### 14b. Options
- Like the ancient **labyrinth**, an options screen tends to lead to more screens. **Don't lose the player in a maze of choices.**
- Think of the options screen as a **hub, with the choices as spokes** radiating out. Typical spokes: **sound and music volume, controller settings, difficulty, even bonus and cheat codes**.

### 14c. Calibration tool
- For **dark, moody** games, include a **screen calibration tool**: the player adjusts contrast against a dark image or a set of color bars.
- It's fine inside Options, but Rogers prefers having players calibrate **before the game starts**, so they see it in the best light (or rather, darkness).

### 14d. Save/load game (and autosave)
- **One of the most important parts of your game.** Keep it simple and **automate whenever possible**.
- **Always start a new game by creating a new save file.** Don't make players hunt for saving. Teach where it is quickly, **even in the tutorial**.
- **Offer several save files (at least three).** Why: players **replay after finishing**, keep **backups** in case of catastrophic choices, or **share the game** with someone playing alongside.
- **Customization helps:** let players **name their files**. Store **playtime, level/chapter names, and inventory such as lives or gear**. Show **icons or images** to jog memory. Everything helps.
  - 🖼️ Figure: a "SAVE FILE" screen with three slots and 6 callouts: (1) a **character portrait icon**, (2) a **player-chosen file name** ("Captain Scott"), (3) **percent complete**, (4) **lives remaining**, (5) **current location/level name**, (6) **button prompts** for delete and save.
- **Autosave** is a backup for when players get too engrossed. Let them load from **either a manual save or the autosave**. You *can* let players switch autosave off, though Rogers can't imagine why anyone would.
- **⚠️ Don't let the save system become a "reset system."** In many games it's easier and faster to **reload than to die and restart**. Don't let players use saving as a **gameplay mechanic**. It breaks immersion.

### 14e. Loading screens
- Players see loading screens as a necessary annoyance, but only because **developers fail to treat them as part of the game**.
- Newer games aim for **seamless**, loading-screen-free play by **disguising loads**: slowly opening doors, long elevator rides, fog that slowly lifts. (🖼️ Figure, "just a few ways to hide a load": abnormally long corridors, very slowly unlocking doors... and microwaving popcorn.)
- **If you must have loading screens, spruce them up** (Rogers promises a dozen and lists eleven):
  1. **Concept art**
  2. **Trivia questions**
  3. **A playable mini-game** (footnote: Namco held a US patent on loading-screen mini-games, #5,718,632. That patent has since expired, around 2015.)
  4. **The game map**
  5. **A character bio**
  6. **Gameplay or control tips**, but **don't repeat** them. Even the best tip gets annoying after several viewings, so **don't show control tips the player has already seen**.
  7. **Fill in story gaps**
  8. **A short video briefing** on the upcoming mission or location
  9. **Fight endless waves of enemies** or **destroy a large object**
  10. **"Beauty shots"** of characters or items
  11. **Hand the player something to fiddle with**, such as the game's logo or a prop they can manipulate
- **Platform holders insist on some moving image** during loading, so players can tell the game hasn't crashed.
- **Whatever else you show, include a progress bar or percent-loaded indicator** so players know how long to wait.

### 14f. Controls screen
- **First and foremost, show an image of the controller.** 🖼️ Figure: an Xbox-style controller with every input labeled (bumpers = block / crouch-cover, triggers = force shield / shoot-melee-grenade, Back = map, Start = pause, face buttons = vent cooling, special/talk, grab, jump/vault, sticks = move/run and camera/zoom, d-pad = inventory: health and weapon cycling).
- Some games show the **character performing each action** when you press its button. At minimum, **text explaining each control**.
- Make this screen **easy to reach from inside the game** for quick reference.
- **Let players customize controls**, or at least offer **several preset schemes**.

### 14g. Scoring/stats: the "tally screen"
- Appears **at the end of a level** and shows the player's progress and performance. You can tally almost anything:
  - **score**
  - **completion time**
  - **shooting accuracy**
  - **enemies defeated**
  - **money remaining / collected / spent**
  - **number of lives**
  - **a rating**: a letter grade (A, B, C) or a fun word rating. The book's examples are "Awesome Dude" and "Master of the Universe" (the F2P cousins are star counts and "Perfect!/Great!/Good!" banners)
  - **objectives reached / completed**
  - **secrets found**, usually as **X/Y**
  - and anything fun: gallons of blood spilled, distance traveled, chests smashed...
- 🖼️ Figure: a pirate-game tally (gold collected, treasure chests 18/20, pirates defeated 182/200, shooting accuracy 72 percent, secrets 13/20, overall grade C+), again with the stick figure begging: don't make it this boring.

### 14h. Legal/copyright screens
- **Required by publishers and hardware manufacturers.** Make them **legible**, more importantly **accurate**, and, for Thor's sake, **skippable**.

### 14i. Credits
- Rogers' soapbox: people work very hard on games, and **too many get cheated out of credit** through egos, politics and plain neglect.
- His belief: **if you worked on a game, you get a credit**, and it should match **the title on your business card**. That often doesn't happen, and the industry needs to fix it.
- Credits **celebrate the people who made the game**. They deserve to be seen, so make them **as entertaining as possible**: *LittleBigPlanet* has a famously entertaining credits sequence, and *Typing of the Dead* (Sega, 2000) has a playable mini-game where you **type the credits**.
- **Rule:** give credit where credit is due, **and never, ever be boring**.

### 14j. Gestalt and the screens still to come
- **Inspiration:** movie **DVD menus** do a great job of building a **gestalt** around the film. (Footnote: *Gestalt* is German for "whole"; in games, the **overall feel** of the experience. Rogers' gestalt examples: *Twisted Metal: Black*, *Brütal Legend*, *House of the Dead: Overkill*.) Getting there takes the art director and designers a lot of time and effort, but it's always worth it.
- Other screens in this family (**game over, bonus materials, store**) are covered later in the book (→ L13).

**🎮 Book examples:** Banjo-Kazooie (pause music to enjoy), Dead Space (no pause screen), LittleBigPlanet (entertaining credits), Typing of the Dead (type-the-credits mini-game), Namco's patent (loading mini-games), DVD menus (gestalt), Twisted Metal: Black / Brütal Legend / House of the Dead: Overkill (gestalt).

**📱 F2P mobile translation, screen by screen:**

| Book screen | F2P mobile version | Design rules for 2026 |
|---|---|---|
| **Pause** | Pause button in a top corner during levels; **automatic pause when the app is backgrounded** (call, notification, swipe home) | Single-player/PvE: **auto-pause and save state on focus loss**, then resume with a short **3-2-1 countdown** in action games. Real-time PvP can't pause, so build **reconnect** flows and bot-fill or forgiveness rules. Puzzle games that charge a life for quitting a level must say so clearly in the pause/quit dialog. |
| **Options** | **Settings** hub: music and SFX (separate toggles), haptics, notifications, language, graphics/frame rate/battery saver, account linking, support, privacy, credits, **redeem code** | Hub-and-spokes, one level deep where possible. **Cheat codes became gift/redeem codes**, a live-ops marketing tool (creator codes, community rewards). |
| **Calibration** | Mostly obsolete for brightness; reborn as **accessibility settings** | Text size, color-blind modes, reduced motion and flashing, haptics toggle, one-handed or left-handed layouts. Offer them early, not buried three levels deep. |
| **Save/load + autosave** | **The account is the save:** server-side, saved constantly | Prompt players to **link an account** (platform game services or a studio ID) *once they have something to lose*. Lost progress on a new phone is a top churn and support cause. Multiple save slots mostly disappear. |
| **"Reset system" warning** | **Reroll culture** in gacha: players make fresh accounts to reroll starter pulls; save-scumming RNG | Server-side RNG stops reload-to-win. Decide deliberately whether to allow rerolls (some games offer a free tutorial reroll so players don't have to abuse the system). |
| **Loading** | First-launch **asset downloads** (often large), level loads, matchmaking waits | Real **progress bars with sizes/percent**, let the **tutorial play while assets download in the background**, rotate tips (never repeat seen ones), show event key art. Keep cold start fast: mobile OSes can kill apps that hang at launch. |
| **Controls** | No controller image: **teach by doing** (animated finger, ghost swipes) | Settings for joystick **fixed vs floating**, button size/opacity, **custom layouts** (mobile shooters), left-handed mode. A "how to play" reference stays one tap away. |
| **Tally** | **Results screen** | Stars, score, rewards flying into currency bars, progress toward the next chest or pass tier, often a **"×2 rewards (watch ad)"** option. **"Next level" is the biggest button, in the thumb zone.** The tally doubles as the hook for the next session. |
| **Legal** | **ToS / privacy acceptance, GDPR consent, iOS App Tracking Transparency prompt, age gate, loot-box odds disclosure** (required on some stores and in some countries) | Legible, accurate, and shown once (re-shown only when terms change). **Make declining as easy as accepting.** Consent dark patterns are both unethical and a regulatory risk. |
| **Credits** | Settings → Credits | Live games run for years with rotating teams. Credit LiveOps, community, QA, localization and contractors too. A fun credits roll is a free bit of delight. |
| **Gestalt** | **Consistent UI theme** across lobby, store, events and results | One visual language (fonts, frames, buttons, sounds), themed to your IP. Event re-skins should vary *color and art*, not the *layout* players have learned. |

**🪝 Make it stick:** The pause screen is a **bathroom-break hub**. Imagine a player sprinting back from the loo: what do they want in *one* press? That's your first menu item.

> ⚠️ **2010 → 2026:** Save slots, controller diagrams, calibration bars and legal splash screens were console-era staples. Mobile kept the *principles* (automate saving, teach controls, respect the player's time, make legal text readable and skippable) but replaced the *screens*: cloud accounts, gesture tutorials, accessibility menus and consent flows.

---

## 15. A final word on fonts
**🧠 Big idea:** HUD and menus need fonts, and fonts follow the same **legibility and clarity rules as icons**, plus a few issues of their own. The goal of every screen is the same: **communicate clearly and efficiently.**

**📋 The details:**
1. **Theme your font to the game**, but **avoid overly ornate fonts** that are hard to read.
2. **Mind font color vs background color.** Example: **never put red text on a black background**. It tends to blur on many TVs, especially older ones or consoles hooked up with composite cables.
3. **Size:** HDTVs allow higher-resolution fonts, but Rogers found that **type smaller than 18 point is a struggle to read on a standard-definition TV**. Not everyone has a state-of-the-art screen.
   - Footnote cautionary tale: *Dead Rising* (Capcom, 2006) used text so small that players with standard-definition TVs **couldn't read mission objectives**, which made the game effectively unplayable for them.
- (Section 6 adds: avoid ornate script, heavy stylization and even serifs for score text, and **watch text length** so it fits the screen.)

**🎮 Book examples:** Dead Rising (tiny text = unplayable on SD sets).

**📱 F2P mobile translation:** typography is one of the most underestimated F2P skills.
- **Physical size beats point size.** Test on the **smallest supported phone** at arm's length. Apple's guidelines use 17 pt as the default body size and about 11 pt as the practical floor. Respect the system's text-size setting where you can.
- **Contrast:** red-on-black is still a classic failure (low luminance contrast, and red–green color-blind players lose it entirely). Aim for strong contrast; web accessibility guidance (WCAG) suggests at least **4.5:1** for body text.
- **Text over busy art needs a stroke or shadow.** That's why so many mobile games use **chunky fonts with dark outlines** (Supercell's games are the famous example). It stays readable over any background.
- **Localization (the big one):**
  - **Text expansion:** translations from English often run **~30% longer** (German, French, Russian, Portuguese), and short labels can **double**. Design buttons with breathing room, allow auto-shrink within limits, and avoid fixed-width text boxes.
  - **CJK** (Chinese, Japanese, Korean): fonts contain **thousands of glyphs**, so font files and texture atlases get big. You need fallback fonts, CJK line-breaking rules, and slightly larger sizes for dense characters to stay legible.
  - **Right-to-left (Arabic, Hebrew):** Rogers' footnote couldn't name a right-to-left HUD in 2010. Today, games localized into Arabic often **mirror whole layouts**. Plan for it in your UI system early.
  - **Thai, Vietnamese and others** stack diacritics vertically, so give lines extra height.
  - **Numbers:** format per locale (1,000 vs 1.000) and abbreviate big values consistently (1.2K, 3.4M). F2P numbers get *huge*.
  - **Pseudo-localization** (auto-padding strings by 30–40% and adding accented characters) catches layout breaks before translators do.
- **Never bake text into images or icons** (section 10). It makes localization and A/B testing painful.

**🪝 Make it stick:** A fancy medieval font on a 5-inch phone is a **love letter written in invisible ink**. Pretty, romantic, unreadable.

---

## 16. 📱 F2P Mobile UI Toolkit (beyond the book)
**🧠 Big idea:** Rogers wrote for TVs and controllers, but every principle in this chapter (clear, clean, simple; center for the action; three presses max; readable icons and fonts; never-boring "boring" screens) applies *harder* on a phone. A phone has a tiny screen, fat fingers, a notch, a distracted player, and a business model that wants twelve buttons on the home screen. This section collects the mobile-specific practice.

### 16a. Anatomy of the F2P lobby (home screen)
The **lobby** is where F2P players spend the moments between matches or levels. It's the most valuable real estate in the game. A typical portrait lobby:
```
+-------------------------------------------+
| [Lv.23]  coin 12.4K[+] gem 350[+] nrg 25/30 |  <- PROFILE + CURRENCY BAR
|-------------------------------------------|     (read-only info, top = hard to reach)
| [EVENT  ]                       [PASS   ] |  <- SIDE RAILS: live events, season pass,
| [2d 4h *]                       [Tier 14] |     offers, each with a timer or a red dot (*)
| [OFFER  ]                       [QUESTS*] |
| [ 3h    ]                                 |
|            ( HERO / BASE / ART )          |  <- SHOWCASE: the "game world" sliver
|                                           |
|          [   >  PLAY / BATTLE   ]         |  <- THE biggest button, in the thumb zone
|-------------------------------------------|
| [Shop*] [Heroes] [HOME] [Clan*] [Events]  |  <- BOTTOM NAV TAB BAR (thumb zone)
+-------------------------------------------+
```
**How Rogers' rules apply:**
- **Most important button = biggest** → PLAY. If players have to hunt for it, the lobby has failed.
- **Upper-left = important info** → profile and level top-left, currencies top-right (a widespread convention). Each currency gets a **"+" button that opens the store at the right section**.
- **Coin travels to the tally** → every reward flies into the currency bar, teaching players where their wealth lives.
- **Three-Press Rule** → every major feature is 1 tap from home via the nav bar or rails.
- **Bracketing warning** → side rails on *both* sides plus top and bottom bars make the mail-slot effect. Keep rails short and collapsible.

### 16b. Red notification dots: the most abused icon in F2P
Red dots ("badges") are context prompts for the meta-game: "something here needs you". They work because they exploit our itch to clear notifications, which is why they're so easy to overuse.
- **Only for actionable things:** a reward to claim, an upgrade you can afford, a new message. Not "the store exists".
- **Clicking must clear it.** **Zombie dots** that can never be cleared teach players to ignore *all* dots, and the signal dies.
- **Propagate up the hierarchy:** a dot on a sub-tab puts a dot on its parent tab. Clearing the child clears the parent.
- **Have a vocabulary, and keep it small:** red dot = claimable/actionable; number badge = count of claimables; "NEW" tag = unseen content; "!" = urgent or attention. Same meaning everywhere (that's KYSS for notifications).
- **Budget them:** if the home screen has 8 dots after every login, none of them mean anything. Some teams cap simultaneous home-screen badges.
- **Never fake a dot to drive store traffic.** It's a dark pattern, and players learn fast.

### 16c. Clutter vs. overload: why F2P home screens get bloated, and how to fight it
**Why it happens:** every feature team wants a button. LiveOps adds a new event icon every week. Monetization wants offer bubbles. Nobody gets to *remove* things. The home screen slowly drifts from Planet No Interface to Planet Gobs of Interface (section 9).

**Fixes that respect Rogers' "clear, clean, simple":**
- **An event hub:** one "Events" button opening a hub, instead of six separate event icons.
- **Priority slots:** a fixed number of rail slots (e.g., 3 per side), filled by a priority system (time-limited first, then claimable rewards, then the rest).
- **Collapse/expand rails** (an arrow tab), remembering the player's choice.
- **Context-aware visibility:** hide what's irrelevant to this player (no "starter pack" icon after purchase or expiry; no PvP icon before PvP unlocks).
- **Progressive disclosure:** unlock UI as features unlock, so new players see a calm lobby (a cleaner FTUE).
- **Pop-up discipline at login:** daily reward, offers, event intros and news all queued in front of the player is "pop-up hell". **Queue, cap and prioritize**: e.g., one or two auto-pop-ups per session start, the rest as dots.
- **A/B test removal:** removing or consolidating an icon often costs less engagement than teams fear. Measure it instead of guessing.

### 16d. Screen flow diagrams (the map of your menus)
A **screen flow diagram** is a box-and-arrow map of every screen and how players move between them. It's how you *prove* the Three-Press Rule and spot labyrinths before building them.
```
[App launch] -> [Splash/logos] -> [Consent/ATT*] -> [Loading + download]
                                                          |
                         first launch? --yes--> [FTUE level 1] --+
                                |                                 |
                                no                                v
                                +---------------------------> [ LOBBY ]
                                                                  |
        +-------------+-------------+--------------+--------------+-----------+
        v             v             v              v              v           v
     [PLAY]        [Shop]       [Heroes]        [Clan]        [Events]   [Settings]
        |             |             |                              |
  [Match/level]  [Offer detail] [Hero detail]                [Event hub]
        |             |                                            |
  [Results/Tally] [Purchase confirm]                        [Event screen]
        |
  back to LOBBY (or "Next level" -> PLAY)
   * consent/ATT only on first launch / when required
```
**How to use it:** label every arrow with the tap that triggers it, count taps from launch to PLAY and from lobby to every screen, mark **modal pop-ups** separately, and look for dead ends (screens without an obvious back path) and duplicates to consolidate. The book's war story (16 presses → 4) is what a flow diagram gets you.

### 16e. Store UI
The store is a screen Rogers promised to cover later (→ L13). In F2P it's critical, so here are the UI rules:
- **Structure:** a featured offer → time-limited deals → bundles → currency packs → (often) a **free daily item** that trains players to visit.
- **Clarity first:** show exactly what you get (icons + big numbers), and the **real price in local currency** from the store. Mark premium-currency costs with an unmistakable currency icon.
- **Icon rules apply:** distinct currency icons (soft vs hard), rarity frames, no text baked into images (prices and names change per country, A/B test and event).
- **Honest tags and timers:** "Best value" should actually be the best value, and countdowns should be real (not resetting fake urgency).
- **Confirm real-money and large premium-currency purchases**, and keep **"restore purchases"** reachable (expected on iOS for non-consumables).
- **Gacha / loot boxes:** show the **odds** (required by some stores and countries) and pity progress clearly.
- **Placement:** the store is usually a nav tab (1 tap) plus the "+" buttons on currency bars. It shouldn't ambush players mid-level.

### 16f. Icons at small sizes and color-blind safety (quick checklist)
- [ ] Reviewed at actual device size on the smallest supported phone
- [ ] Blur/squint test passes; silhouettes are distinct
- [ ] Each category differs in **shape** as well as **color**
- [ ] Checked in a color-blindness simulator (protanopia, deuteranopia, tritanopia)
- [ ] Outline or drop shadow keeps it readable on light *and* dark art
- [ ] No baked-in text; labels are separate and localizable
- [ ] Tap target ≥ ~44 pt / 48 dp, even if the art is smaller
- [ ] Pressed state, sound and light haptic feedback

### 16g. Interruptions and app backgrounding
Phones get interrupted constantly: calls, notifications, a bus stop. Translate Rogers' pause-screen thinking:
- **Auto-pause single-player play on focus loss**, persist state, and resume gracefully (countdown in action games).
- **Save often, invisibly.** Assume the OS may kill the app in the background at any time.
- **Real-time PvP:** handle disconnects with reconnect, and decide what happens to an absent player's unit/turn.
- **Session-friendly design:** short levels, and progress that's never lost to an interruption (→ F2P1 session design).

### 16h. Accessibility quick wins
Text-size option, color-blind modes (or shape-coded systems by default), subtitles for voiced lines, separate music/SFX/voice volume, a haptics toggle, reduced flashing and screen shake, left-handed or mirrored layouts, generous timing windows, and no information conveyed by sound or color alone.

**🪝 Make it stick:** The F2P lobby is a **shop window on a busy street**. One big door (PLAY), a few honest signs (dots that mean something), clean glass (no clutter). If it looks like a bulletin board in a college dorm, people walk past.

---

## 🏆 Universal Truths & Clever Ideas
1. **The HUD's job is to communicate the game's concepts to the player.**
   📱 *So for F2P:* the lobby, store and results screens are HUD too. Judge them by how clearly they communicate, not by how many features they advertise.
2. **Players must be able to reach HUD information quickly.**
   📱 *So for F2P:* key resources visible at a glance; details one tap or a long-press away.
3. **Keep HUD elements away from the screen's outer edges and inside the safe area.**
   📱 *So for F2P:* respect device **safe areas** (notches, rounded corners, home bar) and keep interactive UI out from under the thumbs' resting spots.
4. **Design icons that are easy to see and read.**
   📱 *So for F2P:* test at real size on small phones, use color **plus** shape (color-blind safe), no baked-in text.
5. **QTEs must be fair and easy to perform.**
   📱 *So for F2P:* timing prompts should be predictable, generous (latency!), in the thumb zone, and preferably bonus-for-success rather than death-for-failure.
6. **Nothing in the game should take more than three button presses to reach.**
   📱 *So for F2P:* the **Three-Tap Rule**: PLAY is 1 tap from the lobby; every main feature is ≤ 2.
7. **Don't make players dig through screens for important information.**
   📱 *So for F2P:* timers, rewards and event goals live on the surface, and red dots point only at real actions.
8. **Fonts must be easy to read: not too small, not too fancy.**
   📱 *So for F2P:* outlined chunky fonts over busy art, size tested at arm's length, room for ~30% text expansion and CJK glyphs.
9. **Even the most "boring" screens can be exciting and interesting.**
   📱 *So for F2P:* loading, results, settings and even consent screens are part of the experience and of your retention funnel.
10. **Give credit where credit is due.**
   📱 *So for F2P:* credit the whole live team, including LiveOps, community, localization and QA, and make the credits fun.

**Clever ideas worth stealing from this chapter:** regenerating health instead of a death screen · narrative-as-health (Assassin's Creed) · directional damage effects · reticule that changes color over targets · sticky aim · TF2's enemy-visible laser (UI as counterplay) · ammo display even when infinite · inventory that grows (pouch → bag of holding) · linked "magic boxes" · coins that fly to the tally · player-placed map markers · onion-skin elevation maps · never re-fog · themed mini-maps · plings (can *and* can't prompts; NPC mood icons) · fade-out HUD on a button · characters who glance at interactables · the deliberate Scooby-Doo effect · category background colors for icons · voice barks only every ~3 clicks with rotation · KYSS · beat-to-see/beat-to-press QTEs · optional QTEs · translucent full-screen menus · player-customizable HUD layout · the Three-Press Rule · pause button that also closes the pause menu · most-used pause option first · calibrate before play · save files with portraits, names, % and location · avoid save-as-reset · eleven loading-screen ideas plus progress bars · tally screens with fun stats and ratings · playable credits.

---

## 🧩 Connect the dots
- **→ L05 Character:** HUD-less design leans on character animation (glancing at collectibles, reaching for ledges). Character design *is* UI when the HUD is gone.
- **→ L06 Camera & L07 Controls:** placement fights with camera framing and with where hands rest. On mobile, controls and HUD share the same glass, so thumb zones decide both.
- **→ L09 Level design:** maps, path markers, glowing trails and fog of war are level-design signposting delivered through UI.
- **→ L10 Combat & L11 Enemies/Bosses:** reticules, aim assist, vulnerability icons, attack telegraphs and boss health bars.
- **→ L12 Mechanics:** countdown timers, fuel gauges and other "self-explanatory" HUD elements represent mechanics on screen.
- **→ L13 Power-ups & Rewards:** score juice, achievements, tally screens, store and game-over screens ("covered later" in the book).
- **→ L14 Multiplayer:** leaderboards revived scoring. Real-time PvP can't pause, and customizable HUDs matter for competitive play.
- **→ L15 Music & Sound:** voice/SFX feedback, pause-screen music, and the mobile reality of playing muted.
- **→ L16 Cutscenes:** QTEs as shortcuts into cinematic sequences.
- **→ L04 Paperwork:** screen flow diagrams and HUD mockups belong in the GDD.
- **→ L17 Selling your idea:** the store page (icon, screenshots) is your title screen and your pitch.
- **F2P concepts:** **FTUE** (taps to first gameplay, tutorial pointers, progressive UI unlock) · **core loop** (lobby → PLAY → results → lobby) · **meta** (inventory, collections, event hubs) · **economy** (currency bar, store, inventory caps as sinks) · **LiveOps** (event buttons, timers, pop-up queues) · **retention** (red-dot discipline, clean lobby, results-screen hooks) · **monetization** (store UI, "+" buttons, ×2 ad buttons, continue screens) · **ethics** (no fake dots, honest timers, easy consent decline, odds disclosure) → F2P1, F2P2.

---

## 🔁 Retrieval check (do it closed-book!)
1. What is Rogers' definition of a HUD, and what are the 7 classic HUD elements?
2. Name at least six different ways a game can represent health, with an example for each.
3. Give five rules for designing a targeting reticule.
4. What four pieces of advice does Rogers give about ammo gauges?
5. List the inventory rules: quick access, display, puzzle, look, expansion, storage, and the "magic box". What does each mean?
6. What are Rogers' six pointers for making score and rewards feel rewarding?
7. Give at least six rules for in-game maps/radar, including the rule about fog of war.
8. What is a context-sensitive prompt, what are "plings", and where can you use context prompts (name at least six places)?
9. What are the two strategies for a "clean screen", and the four tips for going HUD-less? What is the Scooby-Doo effect?
10. List ten of the icon rules from "Icon Has Cheezburger?" What does KYSS stand for?
11. What are the rules for fair QTEs, and why does Rogers dislike random QTE prompts?
12. Explain the four zombie placement diagrams: center, top-left, bottom, bracketing.
13. What is the Three-Press Rule, and what war story does Rogers tell about it?
14. What's wrong with putting "Resume" first on a pause screen, and what should come first instead?
15. Name eight ways to make a loading screen better, plus the two things every loading screen needs.

<details><summary>Answers</summary>

1. Any visual element that communicates information to the player. The 7: health bar/lives, targeting reticule, ammo gauge, inventory, score/experience, radar/map, context-sensitive prompt.
2. Filled bar or icons that drain; inverted damage bar that fills; on-board defense system (Metroid); shields that leave you one hit from death, or a shield % (Star Wars: X-Wing); narrative health with a reset when you stray from the story (Assassin's Creed); regenerating "wait for health" (Halo); directional blood/red blur (Uncharted 2); screen fritz on electric hits (Metroid Prime, Batman: AA); screen darkening with breathing and heartbeat audio (Call of Duty, Uncharted 2); rumble heartbeat (Silent Hill).
3. Not too big, not too small; beware white (invisible on some backgrounds); zoom modes, with size changes for precision (Red Faction: Guerrilla); change color or sharpen over a target; sticky aim assist (great for vehicles); build gameplay into it (TF2's laser dot visible to enemies).
4. Show clips and bullets if there's room (Operation Wolf); let players bring up other ammo types with a button press (Ratchet & Clank); always show the equipped weapon's ammo; show it even when infinite, to indicate the armed weapon (Metal Slug). Scarce-ammo games need it extra visible (Resident Evil 2).
5. Hotkeys or drag-and-drop for quick access; a screen to admire items at large scale (Tomb Raider); size-based grids turn packing into a puzzle (Diablo); realistic or iconic, but clear silhouettes and simple colors; restricted inventories should expand (pouch → backpack → bag of holding); permanent storage like a home base; linked magic boxes so items follow you without backtracking (Resident Evil 2).
6. Voice and SFX for rewards; freeze gameplay or have the hero celebrate; you can't have too many particles; clear cause and effect (coin flies to the tally with a cha-ching); easy-to-read font, watching text length; fill the screen with celebration but never cover gameplay.
7. Legible but not full-screen (pause if it must be full-screen); usable while moving, with player markers (GTA4); a legend for icons; show elevation via color or onion-skin; show the player's facing direction; fog of war is fine but never re-fog, and you can offer full reveal; add helpful info (distance to goal, vision cones, NPC names); theme it (parchment, hologram).
8. An icon or text that appears when the player is near something interactive, usually showing the button to press (GTA3's Y near cars). Plings (Maximo) are emoticon prompts showing both can and can't. Uses: doors/gates/hatches, cranks/levers/pushables, NPC moods, collectibles/weapons, vehicles/mini-games/turrets, jump spots (Zelda), QTE prompts (God of War), enemy-vulnerability notices, nearby secret treasure.
9. (1) Fade inactive HUD and bring it back when relevant or on a button press; (2) remove HUD entirely (King Kong). Tips: characters react to the world (look, reach, comment); big full-screen effects over subtle ones; glows/attention effects; characters or glowing arrows to lead the way. Scooby-Doo effect: flat-colored interactive objects stand out against detailed painted backgrounds (Hanna-Barbera), used on purpose.
10. Right image; current metaphor (postage stamp story); color-code, including category backgrounds; shape when color isn't enough; avoid text; word-icons must look like buttons; never combine several elements; strong black/white outline; check for look-alikes; hover tooltips; don't leave icons to programmers; learn from experts (Apple, Adobe, Microsoft, merit badges); feedback on press, with voice only every ~3 clicks and rotated; biggest = most important/most used; most-used near where the cursor lives; sticky icons. KYSS = Keep Your Symbols Simple.
11. Only for big cinematic or near-impossible moments, never for things players can do normally; one beat to see, one beat to press; keep them short; predictable patterns; one control set, avoiding shoulder buttons; big icons in consistent positions; optional where possible (Uncharted 2, Batman: AA); short motion waggles. Random prompts make success feel like luck, not skill.
12. Center = action zone ("safe frame"), keep HUD out except reticules and object IDs; full-screen overlays translucent (Dead Space). Top-left = most important info, since Western eyes read left to right and flow back into the game. Bottom = OK but risks clipping on uncalibrated TVs, so stay near the safe area and offer calibration. Bracketing = UI on left, right and bottom makes the view feel small and claustrophobic ("mail slot").
13. Never more than three button presses to reach any game screen. On one of his games it took 16 presses to reach gameplay; they cut it to 4.
14. Players press Start, scroll down to Save, save, and scroll back up to Resume. Instead let the pause button close the menu (no Resume needed) and put the most common choice first: save, or else the map or inventory.
15. Any eight of: concept art, trivia, a playable mini-game, the game map, a character bio, non-repeating gameplay/control tips, story gap-filling, a mission video briefing, endless waves or destroying a big object, beauty shots, an interactive object like the logo. Every loading screen needs a moving image (so it doesn't look crashed) and a progress bar or percentage.
</details>

---

## 🎯 Side quests (5–15 min each)
1. **🔍 HUD bingo (10 min):** Screenshot the gameplay screen of any mobile game. Circle and number the 7 classic HUD elements, or write "absent" and what replaced it (e.g., moves counter = health).
2. **🧟 Zombie placement test (10 min):** On the same screenshot, shade (a) the action center, (b) the thumb-rest zones and (c) the notch/safe-area margins. Does any HUD element sit in a bad zone?
3. **🔴 Red-dot audit (10 min):** Open a F2P game you play. Count every red dot/badge on the home screen. Tap each: is it actionable? Does it clear? Score the game's dot honesty out of 10.
4. **👆 Tap counter (5 min):** From cold app launch, count taps until you're actually playing. Then count lobby → store, lobby → settings, lobby → event. Does it pass the Three-Tap Rule?
5. **🎨 KYSS icon sprint (15 min):** Sketch 6 icons for a hypothetical merge game (energy, coins, gems, storage, quest, settings) at 2 cm size. Then squint, and check them in grayscale. Fix any look-alikes.
6. **⏳ Loading-screen makeover (10 min):** Pick a boring loading screen from any game and redesign it on paper using at least 3 of Rogers' eleven ideas, plus a progress bar.
7. **🌍 Localization stress test (10 min):** Take 5 button labels from a game ("Play", "Claim", "Upgrade", "Shop", "Settings"), look up their German and Russian translations, and check whether they'd fit the original button sizes.

## ⚔️ Main quest (homework)
**Quest 1: "Lobby Surgeon": teardown + redesign of a F2P home screen** (~90 min)
1. Screenshot the home screen of a mid-core F2P game known for a busy lobby (a 4X or RPG game works well).
2. **Annotate every element:** what it is, its category (currency, event, offer, nav, social, core action), whether it has a dot or timer, and its tap distance to its destination.
3. **Score it** against this chapter: biggest button = most important? Bracketing? Safe area? Thumb zone? Dot honesty? Text readable at real size? Color-blind safe?
4. **Redesign:** draw a wireframe (paper or Figma) that keeps all functionality but uses an event hub, priority rail slots and a clear PLAY hierarchy. Write 5 bullet points justifying the changes with Rogers' rules.
- **Deliverable:** annotated screenshot + score table + redesigned wireframe + 5 justifications (one page or one image).
- ✅ **Done when:** every element is annotated, at least 6 rules are scored, the redesign removes the bracketing or mail-slot effect without deleting features, and every main feature is ≤ 2 taps from home. Bonus: post the before/after publicly (#gamedev #UIUX) and ask for feedback.

**Quest 2: "Flow & Icons": a screen flow diagram + icon set for your own concept** (~120 min)
1. For a game idea of yours (or a hypothetical "cozy merge + island building" game), draw the **full screen flow diagram**: launch → consent → loading → FTUE → lobby → every feature → results → back.
2. Label each arrow with the tap that triggers it, and mark modal pop-ups and the login pop-up queue (max 2 auto pop-ups).
3. Design **10 core icons** (currencies, energy, PLAY, shop, inventory, quests, events, settings, mail, clan) following all 16 icon rules and KYSS. Test them at 48 px, in grayscale and in a color-blind simulator.
- **Deliverable:** flow diagram (one image) + icon sheet at 48 px and 128 px + a short note on which rules shaped which icons.
- ✅ **Done when:** no screen is more than 3 taps from launch-to-lobby or from the lobby, there are no dead ends, all 10 icons pass the squint and grayscale tests, and no icon contains text.

## 🔬 Play Lab
1. **Brawl Stars (10 min):** Look at the lobby and a match. Where is the PLAY button and how big is it? Where do joystick, attack and super buttons sit, and how does aiming work (tap vs drag)? **Question:** which of Rogers' rules (biggest = most important, sticky aim, center for action, thumb reach) does the game follow, and which does it bend?
2. **Royal Match or Candy Crush Saga (10 min):** Play 3 levels and watch only the feedback. **Question:** list every "juice" technique you see (voice, particles, freeze, coins flying to the tally, win celebration, results screen). Which ones can you skip, and how fast is the path from results to the next level?
3. **Whiteout Survival or Last War: Survival (10 min):** Count home-screen icons, timers and red dots right after login, and count the pop-ups before you can act. **Question:** is this "Planet Gobs of Interface" justified by the game's depth, or is it bracketing and dot inflation? What would you consolidate first?
4. **Clash Royale (10 min):** Play one match and visit the shop. **Question:** where is the elixir bar relative to your cards and thumbs, and why is that the right place for the "most-watched gauge"? How does the shop show what you get and what it costs?

## 🗣️ Feynman check
Explain to a 12-year-old in 60 seconds: **"Why does a game screen keep the middle empty, put the score in a corner and make the PLAY button huge, and why should you never need more than three taps to get anywhere?"** Use the zombie, the mail slot and the back-flipping bunnies.

# 🎥 Level 6 — The Three Cs, Part 2 — Camera
> 📖 Book pp. 121–153 · ⏱️ ~70 min study · 📱 F2P relevance ★★★☆☆ — most F2P games use fixed, 2D, isometric or top-down cameras, so the 3D follow-cam material transfers only loosely. But picking the camera still decides readability, screen orientation, one-thumb play and how your whole game looks in a store video.

## ⚡ TL;DR — the 30-second version
- **Pick ONE main camera and build around it.** The camera choice drives how it gets programmed, how levels are designed, how controls are mapped and how art gets made. Extra camera styles are for special situations only.
- **Every camera type is a trade-off.** Static, scrolling, parallax, 2.5D, isometric, God view, top-down, first person and third person each have a sweet spot and a weak spot. Choose the one that serves your gameplay. "2D or 3D?" doesn't matter. What matters is the best camera for the game.
- **Camera control: give it, take it, or lend it.** If you take it away, make that obvious to the player and keep the controls consistent while the camera does fancy things.
- **Treat the camera like a person with a spotter.** Give it room to move. Keep players out of corners. Never let the camera pass through geometry ("sorting"), and **never let the character leave the camera's sight**.
- **Steal from Hollywood:** shot sizes, angles, camera moves, the rule of thirds and "don't cross the line". And always **point the camera at the objective**.
- **Motion sickness (DIMS) is real.** High frame rate, smooth camera speed, flat floors and stable reference objects all prevent it.

## 🗺️ Chapter map
- [ ] 1. Get It Right: Camera Views — one main camera rules
- [ ] 2. Static camera — fixed shot, max control
- [ ] 3. Scrollable camera — a window over a desk
- [ ] 4. Parallax scrolling (plain + forced), Mode 7, multi-plane — the world slides past
- [ ] 5. First person camera — immersion vs. motion sickness
- [ ] 6. Third person camera — follow cam and its four traps
- [ ] 7. Giving Up Control — three doors to choose from
  - [ ] 7a. So you've decided to let the player control the camera
  - [ ] 7b. So you've decided NOT to let the player control it
  - [ ] 7c. So you've decided to let them control it *sometimes*
- [ ] 8. Two and a Half D — 3D models, 2D rules
- [ ] 9. Isometric camera (+ God view) — the toy-box view
- [ ] 10. Top-down camera (+ top-down/side view) — old school, still alive
- [ ] 11. Special case cameras — flying and swimming
- [ ] 12. Tunnel vision — caves, sewers, rail cams
- [ ] 13. Camera shot guide — EWS down to ECU
- [ ] 14. Camera angle guide — eye level to Dutch tilt
- [ ] 15. Camera movement guide — arc, dolly zoom, pan and the rest
- [ ] 16. Other camera notes — rule of thirds, crossing the line
- [ ] 17. Always point the camera to the objective — Chekhov's camera
- [ ] 18. Never let the character get out of the camera's sight — ghost, X-ray, arrows
- [ ] 19. Multiple player cameras — split, zoom, picture-in-picture
- [ ] 🏆 Universal Truths & Clever Ideas

---

## 🧭 Master comparison table — every camera in this chapter

| Camera | What it is | ✅ Pros | ❌ Cons | Use it when… | 📱 F2P mobile example |
|---|---|---|---|---|---|
| **Static** | Never moves: one fixed screen | Player sees everything at once. Art only needs to look good from one angle. Strong mood. Events can't be missed | Not dynamic, so it needs lots of animation/FX to stay alive | The whole play space fits on one screen; puzzle, arcade, horror rooms | Match-3 boards (Candy Crush Saga, Royal Match), Block Blast!, merge boards, Clash Royale arena |
| **Scrollable** | Player moves a window over a bigger flat world | Static's pros + the fun of moving the camera + hide/reveal off screen | Bad scroll speed (too fast overshoots, too slow kills you) | Adventure, RTS, dungeon crawl, "tabletop" feel | Clash of Clans village, Hay Day farm, saga maps (drag to pan, pinch to zoom) |
| **Parallax (plain scroll)** | Camera follows player; layered world slides past | Long, deep worlds; strong sense of motion | Player can "outrun the load" | Side-scrolling platformers, runners | Hill Climb Racing, side-view platformers |
| **Forced scroll** | Camera moves on its own; keep up or die | Instant pressure and urgency | Exhausting if overused | Chase sequences, shmups, whole games built around it | Endless runners (Subway Surfers, Temple Run push you forward non-stop) |
| **Mode 7** (historic) | Flat ground plane drawn in perspective and scrolled | Fake 3D on 2D hardware | No true back wall; needs an infinite background | Retro racers | Retro-styled racers; mostly history now |
| **Multi-plane / bi-dimensional** | Camera tracks in/out on Z through layered planes | Depth and parallel paths | Pixelation when zooming on sprites | Layered 2D depth, a precursor of 2.5D | Layered parallax backgrounds in casual games |
| **First person** | You see through the character's eyes | Easy aiming, immersion, atmosphere, close look at items | Hard to judge jumps; no emotional link to an unseen hero; player looks away; pickups must be oversized; DIMS | Shooters, horror, puzzles that need close inspection | FPS modes in Call of Duty: Mobile, PUBG Mobile (first-person option) |
| **Third person (follow cam)** | Camera trails behind the character | See your hero and the world, including what's behind you; less DIMS | Hardest camera to get right: sorting, flipping, corners, control questions | Action-adventure, platformers, open worlds | Genshin Impact, Stumble Guys, Roblox games, PUBG Mobile (TPP) |
| **2.5D** | 3D models but camera locked like 2D (up/down, in/out) | 3D looks with 2D clarity | Inherits parallax rules; limited freedom | Platformers, runners, brawlers | 3D-rendered side-scrollers and runner games |
| **Isometric** | Angled, not side, not top: a "toy box" | Instantly read layout and spatial relationships; hordes look epic; detailed and pretty | Elevation is ambiguous (high+near vs low+far look alike) | Building, sim, strategy, puzzle-by-environment, ARPG | Clash of Clans, Boom Beach, Hay Day, Township base/farm views |
| **God view** | Isometric pulled way back, up to "low orbit" | Huge overview for empire control | Detail is lost | Cities, continents, 4X/RTS | World maps in Rise of Kingdoms, Whiteout Survival, Last War: Survival |
| **Top-down** | Straight down from above | Clear space and positions | Can't see character or world well; no sense of depth | Arcade action, twin-stick, maze games | Brawl Stars and Archero (angled top-down), Survivor.io, Among Us |
| **Top-down / side** | World from above, characters from the side | Charming, readable, cheap | Quirky, not realistic | Snake-likes, tower defense | Tower-defense and lane games where units face sideways on a top-down map |

> 🧠 How to read the table: there is no best camera, only the best camera *for your gameplay*. That one sentence is the whole chapter.

---

## 1. Get It Right: Camera Views
**🧠 Big idea:** A bad camera is the fastest way to make a player quit (or throw a controller through the TV). Choose the camera first, because everything else depends on it.

**📋 The details:**
- Rogers opens with the image of a controller smashed through a fancy HDTV, then jokes that a billion TVs a year die from bad cameras. He admits in a footnote that he made the number up. The point is real though: **nothing makes players quit faster than a poor camera.**
- Your camera choice affects four things at once:
  1. **How the camera is programmed.**
  2. **How the game is designed** (levels, encounters, puzzles).
  3. **How the controls are mapped.**
  4. **How the artwork is created** (what angles need art, what never gets seen).
- Games often have more than one camera style. That's fine, but **pick one "main" camera style for most of the gameplay.** Use other views only for specific gameplay situations.

**🎮 Book examples:** The smashed-TV gag sets the stakes: a camera problem is a quit problem.

**📱 F2P mobile translation:**
- In mobile, the camera choice is welded to **screen orientation**. Portrait means one-handed play, short sessions and casual audiences (match-3, merge, Archero, Survivor.io, Royal Match). Landscape means two thumbs and midcore action (Brawl Stars, Clash of Clans, Mobile Legends, PUBG Mobile). Decide this on day one. Switching later means redoing every screen, every level layout and every UI asset.
- "One main camera, special cameras for special moments" is exactly how mobile RPGs work. You get a stable battle camera, plus a cinematic camera that swoops in only for ultimates or gacha pulls, usually with a skip option.

**🪝 Make it stick:** The camera is the foundation slab of the house. Pour it crooked and every wall you build on it leans.

---

## 2. Static camera
**🧠 Big idea:** A camera that never moves gives *you* full control over what the player sees. It's old school, but it's still the king of puzzle and board games.

**📋 The details:**
- **Definition:** a **static camera** stays put. It's locked onto one screen, one location and one image.
- Why the earliest games used it:
  - (a) Scrolling cameras hadn't been invented yet.
  - (b) The player can keep an eye on **several game elements at once**.
  - (c) In early 3D games, teams could make art that is only ever seen **from certain angles**. Something seen from one side doesn't need a back, which **saves production and processing time**.
- Where it still lives: Flash-era arcade/puzzle games like **Peggle**, and hidden-object ("find the item") games.
- Advantage: **setting the mood.** Early survival horror (**Alone in the Dark**, **Resident Evil**) used one static shot per room, each one framed for maximum dread.
- Advantage: **staging events is easy.** The player can't be looking the other way when your scripted moment fires.
- ⚠️ Danger: a static screen **isn't very dynamic.** Compensate with **lots of animation and effects** so the screen feels alive.
- If a fixed camera isn't enough, ask your programmer (nicely) to turn it into a scrolling one.

**🎮 Book examples:**
- Peggle and hidden-object games → static is still commercially alive.
- Alone in the Dark, Resident Evil → static framing creates mood. One room, one perfectly creepy shot.

**📱 F2P mobile translation:**
- Static is *the* dominant camera in F2P casual. Candy Crush Saga, Royal Match, Toon Blast, Two Dots, Block Blast! and Match Factory! all show the whole board at once, so the player can plan.
- Rogers' warning matters most here: a static board needs juice to feel alive. Think idle animations on pieces, particle bursts on matches, combo text, screen shake on big boosters and characters reacting at the edges. That "juice" layer is a big part of why one match-3 feels premium and another feels dead.
- Clash Royale and Marvel Snap use a fixed view of the whole battlefield so both sides of the match are always readable. That's the static camera's "see everything at once" advantage turned into competitive fairness.

**🪝 Make it stick:** Static camera = a puppet theater stage. The stage never moves, so the puppets had better dance.

---

## 3. Scrollable camera
**🧠 Big idea:** A scrollable camera is a window you slide over a bigger world. You get the clarity of a static screen plus the fun of exploring.

**📋 The details:**
- **Rogers' desk analogy (with a drawing):** picture looking down at a cluttered desk. A gray box shows the part you can see. You can't find your pen, so you slide your view to another part of the desk and there it is, next to a book. Your eyes are the camera.
- Advantages: everything a static screen offers, **plus**
  - (a) **movement**: the player stays busy just sliding the camera around, and
  - (b) the power to **hide things off screen** or **reveal them dramatically.**
- Used in old-school adventure games like **Day of the Tentacle**.
- Pair a scrollable camera with a **God-mode** or **isometric** view and you get a **tabletop miniatures** feel. That's why RTS and dungeon crawlers like **Dawn of War** and **Diablo III** use it.
- Keep the controls for moving the camera **simple and tied to the player's own controller scheme**. Nothing fancy is required.
- **Tune the "hydraulics"** with your programmer, meaning the camera's acceleration and deceleration:
  - **Too fast** → it overshoots the target, the player corrects back and forth, and eventually goes insane (or breaks a monitor).
  - **Too slow** → disaster in games where speed matters. Your platoon gets wiped by tanks while the camera is still crawling over to them.
- You can let **players choose the scroll speed**. Make the option easy to find, and offer **several speeds**. Just "fast" and "slow" isn't enough.

**🎮 Book examples:** Day of the Tentacle (adventure, reveal by scrolling); Dawn of War and Diablo III (tabletop feel via scroll + iso/God view).

**📱 F2P mobile translation:**
- On touch, scrolling *is* the drag gesture. Clash of Clans, Boom Beach, Hay Day and Township let you drag to pan and pinch to zoom around your base. Saga maps in Candy Crush Saga or Royal Match scroll vertically through hundreds of levels.
- "Hydraulics" on mobile means **inertia (fling momentum), friction and edge bounce.** If the fling is too strong, players overshoot their village. If friction is too high, the map feels like it's stuck in mud. Tune it on a real phone, not in the editor.
- The "hide and reveal" trick is a retention tool. Saga maps show the next world blurred or locked just above you, and base builders put a locked zone at the edge of your land. The scroll itself teases what's next.

**🪝 Make it stick:** Scrollable camera = a flashlight on a dark map. Too twitchy and you strobe past the treasure. Too sluggish and the goblins eat you first.

---

## 4. Parallax scrolling (plain + forced), Mode 7 and the multi-plane camera
**🧠 Big idea:** Parallax scrolling moves layered scenery past the player and makes worlds feel long and deep. Its variants, forced scroll, Mode 7 and the multi-plane camera, pushed 2D toward 3D.

**📋 The details:**
- **Mini history:** the static screen was fine for the early-80s arcade classics of 1981 (Rogers jokingly calls them "Invaders from Space" and "Kongs of Donkey") when no one knew any better. Then players cried out for more, and in **1982, Irem** introduced **parallax scrolling** (in its moon-buggy game, Moon Patrol).
- **Parallax scrolling camera:** as the camera moves, the world moves with it. Rogers' drawing shows conveyor-belt layers of background and foreground rolling past a runner who stays in frame. This **revolutionized games** by allowing **longer, deeper worlds**.
- Two ways to treat parallax scrolling:
  1. **Plain scrolling:** the player's movement drives the camera. The player basically stays in the **center** of the screen while the world slides by, like an old western shot where the actor bounces in place in front of a moving backdrop.
     - ⚠️ Watch out: the player may be able to **"outrun the load"** (move faster than the level streams in).
     - ✅ Always **play your level backwards** to make sure the player can't break your game.
  2. **Forced scroll:** the camera moves on its own and the player must **keep up**.
     - Origins: driving/flying games (**Moon Patrol**, **Scramble**). Then first-person shooters (**Operation Wolf**), third-person rail shooters (**Panzer Dragoon**), and later **chase sequences** (**Crash Bandicoot**).
     - Usually, failing to keep up = something horrible (death).
     - Great for **pressure**, but **don't use it all the time**, unless your entire game is built on the idea.
- Parallax games dominated home consoles in the 1990s. So many teams made the genre that innovation crept in, twice:
  - **Mode 7:** named after the **7th (out of 8) background layer** of the Super Nintendo (SNES) hardware. Artists drew the ground layer **in perspective stretching to the horizon**. Scrolling that ground created the illusion of moving infinitely toward or away from the horizon. Add a sprite facing forward or backward and you get a car or character traveling into or out of the screen.
    - Examples: **Mario Kart**, **F-Zero**, **Super Star Wars**.
    - Design trap: there's **no real back wall** in a Mode 7 level. The trick needs a **background that never ends**.
    - Today 3D needs no special mode, but some (ancient) devs still use the term.
    - Footnote: the effect existed **before the SNES**. **Night Racer** (Micronetics, 1977) and **Pole Position** (Namco, 1982) already had a scrolling ground plane that faked 3D space.
  - **Multi-plane camera:** borrowed from traditional animation. It creates depth by moving the camera toward and away from layered planes (Rogers draws a graveyard diorama with tombstones in the foreground, middle and back). A camera that tracks in and out on the **Z-axis** allowed level designs with **parallel paths**.
    - **Disney's Hercules Action Game** (Virgin Interactive, 1997) used it for **bi-dimensional** gameplay, the forerunner of **two and a half D**.
    - Side effect: zooming in on non-scaling sprites caused **severe pixelation**. Retro-style games now imitate that look on purpose.

**🎮 Book examples:** Moon Patrol, Scramble (early forced scroll); Operation Wolf; Panzer Dragoon; Crash Bandicoot chases; Mario Kart, F-Zero, Super Star Wars (Mode 7); Night Racer, Pole Position (pre-SNES fake 3D); Hercules Action Game (multi-plane, bi-dimensional).

**📱 F2P mobile translation:**
- **Forced scroll is the endless runner.** Subway Surfers and Temple Run push you forward and you never stop. The genre is literally "a whole game built on this idea", which is Rogers' one allowed exception.
- **Plain parallax** lives in side-view games like Hill Climb Racing. Background layers sliding at different speeds give depth almost for free, which matters for performance on low-end phones.
- **"Outrun the load"** is a real mobile risk. Streaming chunks on a weak Android device can lag behind a fast runner. Test on your minimum-spec device, at max speed, going backwards if your game allows it.
- Use forced pressure *in moments*: a timed bonus round or a "chase" event inside a calmer game spikes excitement without exhausting players.

**🪝 Make it stick:** Plain scroll = you're on a treadmill and the scenery moves. Forced scroll = the treadmill is chasing *you*, and it has teeth.

> ⚠️ **2010 → 2026:** Mode 7 and multi-plane are history lessons now, since any engine does real 3D. The principle still holds: **layered depth is cheap and powerful.** Parallax backgrounds remain one of the best performance-per-wow tricks on mobile.

---

## 5. First person camera
**🧠 Big idea:** First person gives maximum immersion and precise aiming, at the cost of spatial awareness, emotional connection to the hero and, for some players, nausea.

**📋 The details:**
- A few 1970s games had first-person views, but **Wolfenstein 3D** (Apogee, 1992) and **Doom** (id Software, 1993) made it popular. It's used in racing, platformers and more, but it's most tied to the **first person shooter (FPS)**.
- Rogers isn't sure it's the best camera for gameplay. His pros/cons table (4 vs 4):

| ✅ Advantages | ❌ Disadvantages |
|---|---|
| Easier to aim weapons at targets | Hard to judge jump and movement distances |
| Player sees the character as "self", so immersion goes up | Player can't see their character, so the emotional connection can weaken |
| Easier to build atmosphere (e.g., horror) | Player isn't always looking where the designer wants |
| Close-up look at weapons, world objects and puzzle items | Pickups and objects must be exaggerated in scale to read at distance |

- The verdict: it's pretty much a tie. But first person enables fun **screen effects**:
  - **Blood splatter**: shows damage taken. The screen can also **darken or dim** as the player nears death. Rogers' opinion: it's **unfair to punish a dying player by hiding the gameplay** (or where the damage comes from). Use it lightly.
  - **Raindrops / mist / lens flare**: weather on the "lens", inspired by TV news cameras. Some driving games even give you **windshield wiper controls** to clear it.
  - **"Predator vision"**: thermal/night-vision style filters (after the movie *Predator*) that make you feel you're using high-tech or alien gear. ✅ Rule: the effect must give a **real gameplay advantage**, not just look cool.
  - **Blurry / drunken cam**: puts the player in the character's altered state. It's fine as long as it doesn't **mess with control too much for too long**. An occasional whack on the head or simulated hangover is okay.
  - Most of these effects work in third person too, but first person makes you feel *in the action*.
- **DIMS = Doom-Induced Motion Sickness.** It happens when your eyes register motion but your inner ear (balance) doesn't.
  - Rogers says it's heavily influenced by the camera's **field of view (FOV)**. In his account, the wider the FOV, the more people feel sick. (He jokes that this is why he sits at least seven rows back at the movies.)
  - Symptoms: **clammy skin, sweating, dizziness, headache, nausea.**
  - **Remedies (designer side):**
    1. Get the frame rate as close to **60 fps** as possible.
    2. Avoid **bobbing foreground elements** like the player's weapon.
    3. Keep level **floors as flat as possible.** (Footnote: an undulating-floor level in **GoldenEye** on the N64 made Rogers throw up after half an hour, in a game he otherwise calls brilliant.)
    4. Add **large stationary objects** the player can focus on.
    5. **Don't whip the camera around.**
    6. Don't make the player change **vertical view (look up/down)** too quickly or too often.
  - **Remedies (player side, "not a doctor" disclaimer):** fresh air, a glass of water, and non-drowsy motion sickness medicine for long FPS sessions.

**🎮 Book examples:** Wolfenstein 3D and Doom (popularized first person); the movie *Predator* (thermal vision FX); GoldenEye N64 (bumpy floor → nausea).

**📱 F2P mobile translation:**
- First person is rare in casual F2P but present in mobile shooters. Call of Duty: Mobile and PUBG Mobile offer first-person modes alongside third person.
- Rogers' rule against fully blinding a dying player maps well to mobile, where the screen is already tiny. Use edge vignettes and **directional damage indicators** instead of covering the center.
- "Predator vision must give an advantage" → any visual mode you add (a scanner, a hint-vision booster, an X-ray power-up in a hidden-object game) must change what the player can *do*, or it's just a filter.
- DIMS on mobile: a phone fills less of your vision than a big TV, so it's less common, but camera shake, head-bob and fast rotation still bother some players. Offer **"reduce camera shake"** and FOV options, and respect the OS-level **Reduce Motion** setting where it makes sense.
- The 60 fps advice now runs into battery and heat limits. Many mobile games offer 30/60 fps (or higher) settings. Keep camera motion smooth even at 30.

**🪝 Make it stick:** DIMS fix = the "FRAMES" checklist: **F**rame rate high · **R**ein in weapon bob · **A**nchor objects to stare at · **M**ove the camera gently · **E**levation changes rare · **S**mooth, flat floors.

> ⚠️ **2010 → 2026:** Later motion-sickness research is more nuanced than "wider FOV = sicker". Many players actually feel *worse* with a narrow FOV up close to a big screen. Modern best practice is an **FOV slider plus comfort toggles** (camera shake, head bob, motion blur). Rogers' core principle still holds: comfort is a design responsibility.

---

## 6. Third person camera
**🧠 Big idea:** Pulling the camera behind the character shows the hero and the world, but a good **follow cam** is maybe the hardest thing a team builds. Treat the camera like a person who needs a spotter.

**📋 The details:**
- Third person helps reduce DIMS. It's not a cure-all, but Rogers finds that **having something (the character) to focus on** eases motion sickness.
- It shows **the world, the action, and what's coming up behind you.** The book's drawing has War (the hero of Darksiders) about to be hit by a sword-wielding skeleton.
- Complications pile up fast:
  - You stare at your hero's backside all game. (Footnote anecdote: legend has it **Toby Gard** made **Tomb Raider**'s lead a woman because he didn't want to stare at a guy's behind through the whole production.)
  - Let the character turn and run *toward* the camera? Then the camera must track backward, which raises the question of whether controls are **camera relative or player relative** (→ L07), and how the player **restores the camera** to its default position.
- **Getting a third-person camera right may be the biggest challenge a team faces.**
- **Camera movement:** Rogers filmed sports in high school, got so focused on the shot that he backed into coaches and tripped over gear, and fixed it by recruiting a **spotter**.
  - Lesson: **treat the camera like it's a person.** Give it **room to maneuver**, and give the **player a way to manipulate** it.
  - This kind of camera is called a **follow cam** because it follows the player.
- **Four follow-cam traps Rogers learned to watch for:**
  1. **Sorting:** the camera passes **through a character or geometry.** Nothing breaks the illusion faster, and it often reveals the **background layer** (sky or a flat color). Fixes:
     - Give the camera a **detection radius** so it moves **over, under or around** objects.
     - If that much collision detection is too expensive, make **world objects turn transparent.** This works for objects *inside* the walls but **not for perimeter walls.**
     - **Don't make objects vanish completely.** Things flickering in and out of existence disorient players (and look bad).
  2. **Controls:** many games break when the camera points **straight up or straight down.** Then there's the **"airplane controls vs. player-relative controls"** debate:
     - Unless you're flying a plane, pushing **up** on the stick shouldn't make the character look **down**. Many FPSs do this, and Rogers thinks it's silly because you're playing a person, not an aircraft.
     - If you must have the inverted option, **let players change it.** Best: **character-relative as default, airplane-style as the option.**
  3. **Corners:** the **#1 cause of camera flipping**, when the camera tries to find a resting spot and bounces between two or more objects.
     - Don't build an overcomplicated camera system to fight flipping (it always gets overcomplicated). **Keep players out of corners.**
     - Don't use **invisible walls** (Rogers hates them). Build **blocking geometry** that visibly says "stay out": small retaining walls, shrubs, boulders, fences.
     - Don't invite trouble: keep **collectables out of corners**, keep **enemy AI paths and detection zones out of corners**, and move **gameplay to the middle of the room.**
     - If you absolutely must put a power-up in a corner: as the character walks in, **raise the camera.** Picture Spider-Man as your camera operator: when he hits a wall, he climbs it. Slide the camera up the wall to a **bird's-eye** view. But **avoid a direct top-down view**, which looks bad and invites flipping.
  4. **Position:** designers argue about whether the camera should be **rigidly attached** to the character (like a stick on their belt) or **laid back**, following freely and catching up when it feels like it (or when the player resets it).
     - Rogers prefers **laid back** because there are fewer obstructions, you **see the character's face** now and then, enemies can **sneak up behind** the player, and **chase gameplay** is easier to stage.
     - Why it's contentious: the laid-back approach means designers must **give up control** of the camera. That leads to the next section.

**🎮 Book examples:** War with skeleton (seeing behind you); Tomb Raider / Toby Gard (staring at your hero all game); Rogers' sports-filming spotter story.

**📱 F2P mobile translation:**
- Mobile third-person games (Genshin Impact, Stumble Guys, PUBG Mobile, many Roblox experiences) use a drag-on-the-right-half-of-the-screen camera. All four traps apply. **Sorting** through walls on a small screen is even more disorienting, so mobile games lean heavily on **wall fading/dithering** rather than camera collision.
- **Corners → keep gameplay in the middle** applies to any arena game. Brawl Stars-style maps keep key objectives central and readable, and in top-down games, walls that hide the player get transparency or outlines.
- **Inverted look:** if your mobile shooter has gyro or touch-look, include an invert toggle for both axes. It costs almost nothing.
- **Laid-back vs. rigid:** in top-down mobile action (Archero, Survivor.io) the camera is essentially rigid, keeping the hero centered, because one-thumb players can't manage a camera. A slight **look-ahead** in the movement direction is the mobile cousin of Rogers' laid-back follow.

**🪝 Make it stick:** The four follow-cam traps = **"Some Cameras Can't Park"**: **S**orting, **C**ontrols, **C**orners, **P**osition. A camera that can't find a parking spot flips, clips and panics.


---

## 7. Giving Up Control — the three doors
**🧠 Big idea:** Players with camera control will poke it into walls and miss your best moments. You have three choices: **let** them control it, **lock** it yourself, or **lend** it to them only when they need it. You're the designer, so you call the shots.

**📋 The details:**
- What goes wrong when players control the camera: they point it where it shouldn't go, get it **stuck in geometry**, and generally mess things up. Rogers admits nothing annoys a designer more than watching someone fumble the camera.
- **The three choices** (the book plays it as a "choose your own adventure", with a "turn to page…" for each):
  1. **Let** the player control the camera → 7a.
  2. **Take control away** and own the camera → 7b.
  3. **Decide when** they get control and when they don't → 7c.

```
                 ┌────────────── WHO DRIVES THE CAMERA? ──────────────┐
                 │                                                    │
        🚪 LET (player)            🚪 LOCK (designer)          🚪 LEND (sometimes)
   full 360 follow cam         rail / fixed / scripted       designer by default,
   free-look (button)          cinematic shots               player gets control in
   selective (scope/binocs)    "dark ride"                   specific moments
```

### 7a. So you've decided to let the player control the camera
**📋 Rogers' three methods:**
1. **Complete control of the follow cam.** Using the analog stick (or mouse on PC), the player can look around **360° at any time**: running, standing, fighting, whatever.
   - ❌ Downsides: players get **disoriented**, **miss important events and clues**, or get **DIMS**.
2. **Free-look camera.** The player **stops and looks around**, effectively a first-person view.
   - Usually triggered by a **button press** that switches into a mode where the movement stick **rotates the camera** up to 360°.
   - Some versions limit rotation to **a bit under 180°** to mimic the **human neck**. (Rogers' drawing: side view shows the head tilting up/down through about a quarter circle, front view shows it turning left/right through about a half circle.)
   - Press the button again to return to third person. The player is usually **reoriented to face where the free-look was pointing.**
   - **Reorientation:** players appreciate a way to **snap the camera back to default** (behind the character). It's especially useful in **combat and platform jumping.** Usually a **quick single button press.**
   - **Speed:** when players rotate the third-person camera, it should feel like it has **hydraulics**. It **never stops dead** but eases out as it decelerates, which also helps prevent DIMS.
     - Rogers' trick: because the character is usually moving, let the camera **slightly overshoot** when the player stops, then **creep back to center** if they stay still long enough.
     - And always: **never let the player leave the camera's view.**
3. **Selective control.** A button press brings the camera in **for a close look at an object's detail** or into a **special mode like a sniper scope.**
   - Difference from free-look = **context.** Free-look simulates **turning the character's head**. Selective control simulates **using equipment** (binoculars, a telescope).
   - Any **limits should match the real object's limits.** Realism sells the view, so let reality be your guide.
- **The 3rd → 1st person jolt:** some designers think switching to first person is jarring and breaks the atmosphere. **Resident Evil 4**'s answer: when you aim, the camera drops to **hover just behind the character's shoulder** (the now-standard over-the-shoulder aim).
- **Second person view** (rare): the camera is handed to **an entirely different character**.
  - **Mark of Kri** (SCEA, 2002): you see through the eyes of **Kuzo, a bird** you fly on spy missions.
  - **The Darkness** (2K Games, 2007): a **"tentacle cam"** sees around corners and farther than the player's POV.
  - When the player has seen enough, a button press returns to the third-person view.

### 7b. So you've decided NOT to let the player control the camera
**📋 Rogers says it's a good call, and lists the benefits:**
- **One less thing to worry about.** No camera wrestling means the player can focus on playing.
- **More visual bang for your buck.** You decide what's seen, so art can be built around **polygon and texture limits.** **God of War** built environments like **theater sets**, not full 3D. Why build the back of a building nobody will see?
- **Treat the game like a dark ride.** Disneyland's **Haunted Mansion** is the perfect designer-controlled camera. Its omni-mover carts (footnote: they're called "doom buggies") always aim guests at the best scenes. You'll find this **rail camera** in first-person gun games such as **Time Crisis** (Namco, 1995) and **House of the Dead** (Sega, 1996).
- **The world looks better.** You can **set up shots**, like a **worm's-eye view** to make the boss menacing, or a **skewed camera** to make the world feel demented or creepy, and no one can ruin it.
- **"What did I miss?" never happens.** Important clues, the Tower of Doom looming in the distance, the giant spider creeping up: the player **can't miss** what you show.
- **Go nuts with cinematic moves.** Barrel rolls, zipping between columns, swinging around pillars, over and under objects, matching the player crawling through tight passages. A **rail camera** allows elaborate angles without the player fighting for control.
  - ⚠️ But keep **gameplay controls consistent** during these fancy moves.
- **If the character gets obstructed or leaves view** (your choice):
  - **Character-relative controls** must let the player steer back into view. Example: the character walks behind a fence, and the player keeps pushing the same direction, trusting they'll come out the other side.
  - **Don't put hazards behind the obstruction**, and **don't widen the path there** (which would allow Z-axis wandering). The player could get **hurt unfairly or lost** while unseen.
  - ✅ These hidden spots are **great places for goodies.**
- **THE most important rule when removing camera control: make it clear the player doesn't have it.** Once they know, they stop worrying about the camera and focus on the game.
- **2D vs 3D?** In the end, all that matters is using the camera that's **best for your gameplay.**

### 7c. So you've decided to let the player *sometimes* control the camera
- Rogers teases the "moderate" reader as a fair-minded know-it-all and sends them back to read both other sections. **The lesson:** a hybrid means using the best of both. The designer owns the camera by default and hands over control (free-look, scope, reset) exactly when the player needs it. Every rule from 7a and 7b applies.

**🎮 Book examples:** Resident Evil 4 (over-the-shoulder aim); Mark of Kri (bird POV), The Darkness (tentacle cam); God of War (theater-set environments); Haunted Mansion (dark-ride camera); Time Crisis, House of the Dead (rail shooters).

**📱 F2P mobile translation:**
- **Most F2P mobile games choose "LOCK"**, and Rogers' benefit list is exactly why. One less thing for one thumb to manage, art budgets focused on what's visible (huge for app size and low-end devices), and the player never misses the key moment. Match-3, merge, idle, card battlers, auto-battlers and tower defense all lock the camera.
- **"LEND" is the base-builder model.** Clash of Clans or Hay Day let you freely pan and zoom your base, but battles, cutscenes, rewards and tutorials take the camera over.
- **Make it clear they don't have control.** A fixed board with no hint of scrollability tells players instantly. Ambiguity causes trouble: if a screen *looks* draggable but isn't, players feel the game is broken.
- **Auto-camera in mobile RPGs** is 7b in action. Honkai: Star Rail and many gacha RPGs use designer-controlled cinematic angles for ultimates and summons, with **auto-battle** and **skip** toggles, because repeated cinematics become friction after the 50th viewing.
- **Theater-set art** = what mobile artists do daily. If the camera never rotates, the back of the building doesn't exist. Isometric base buildings are usually drawn or rendered from one angle only.
- **The dark ride** = the FTUE (first-time user experience). The best onboarding flows act as a guided ride, framing exactly what the new player should see next.

**🪝 Make it stick:** **Let · Lock · Lend.** Three doors. Whichever you open, put a big sign on it so the player knows who's driving.

---

## 8. Two and a Half D
**🧠 Big idea:** 2.5D = 3D models living under 2D camera rules. You get modern visuals with old-school readability.

**📋 The details:**
- **Crash Bandicoot** (SCEA, 1996) was one of the first to take 2D platforming into the third dimension.
- **Bi-dimensional** gameplay uses **sprites** for world and characters. **Two and a half D** uses **3D character and world models** but **limits camera movement like a 2D game: up, down, and in/out on the Z-axis.**
- Rule: follow the **same rules as a parallax scrolling camera** (section 4), plus the guidelines for **taking camera control away** (7b).

**🎮 Book examples:** Crash Bandicoot (2D gameplay logic, 3D presentation).

**📱 F2P mobile translation:**
- 2.5D is a mobile sweet spot. 3D-rendered runners and side-scrollers get depth and lighting while keeping controls one-dimensional (lanes, jump, slide). Subway Surfers' three-lane chase camera behaves 2.5D-ish: 3D world, tightly constrained movement and camera.
- Lots of "3D" casual games are really 2.5D: a fixed-angle 3D camera over a mostly flat playfield. That keeps touch input simple, since a screen tap maps cleanly to a world position.

**🪝 Make it stick:** 2.5D = a 3D actor forced to perform on a 2D stage. All the glamour, none of the camera chaos.

---

## 9. Isometric camera (+ God view)
**🧠 Big idea:** Isometric is the "toy box" view: angled from above so layouts and relationships read instantly. Pull it way back and you get **God view** for ruling empires.

**📋 The details:**
- Introduced with **Zaxxon** (Sega, 1982). Not quite side view, not quite top-down, it creates a **toy-like** view of the world.
- The toy-like look plus **smooth-scrolling 3D on a 2D display** is why iso is popular for **building and simulation games.**
- ✅ Advantages of **iso**:
  - A quick snapshot of the **environment's layout** and **how items relate**, which is great for **environmental puzzle solving.**
  - **Hordes of enemies look more impressive** (**Diablo**, **Starcraft**).
  - Even with small subjects, iso games can be **detailed and beautiful.**
- ❌ Disadvantage: **elevation.** Something **higher and closer** can land in the **same screen spot** as something **lower and farther**, so players can't tell which is which.
- **God view:** if you care less about a detailed look at your world's inhabitants, step into the sandals of the divine.
  - Details matter less here, so it suits games about **controlling cities or dominating land masses** (**Spore**, **Supreme Commander**).
  - It's essentially **isometric with a much wider field of view**, sometimes as high as **low orbit**. (Rogers' drawing: a slab of map floating over a planet, with an RTS interface underneath.)

**🎮 Book examples:** Zaxxon (first iso); Diablo, Starcraft (impressive hordes); Spore, Supreme Commander (God view).

**📱 F2P mobile translation:**
- **Iso is the base-builder default.** Clash of Clans, Boom Beach, Hay Day, Township and the city views of many 4X games all use the toy-box angle. It shows the whole base layout (walls, defenses, farms) so you can plan, and it makes the base look like a collectible toy. That toy feeling feeds the pride-of-ownership that drives spending on decorations and upgrades.
- **The elevation problem** shows up when bases have cliffs or multi-level terrain. Mobile iso games usually keep the playfield flat and use shadows and outlines to separate layers.
- **God view = the 4X world map.** Rise of Kingdoms, Whiteout Survival and Last War: Survival let you zoom from your city out to a strategic world map. Usually a second, more abstract level of detail kicks in (icons instead of buildings), which is Rogers' "details matter less up here" in practice.
- **Readability on small screens:** iso units get tiny. Exaggerate silhouettes, use team colors, and add health bars or icons above units. Strong readable shapes beat fine detail at phone size.

**🪝 Make it stick:** Iso = looking at your toys on the bedroom floor. God view = looking at the bedroom from the ceiling fan.

---

## 10. Top-down camera (+ top-down/side view)
**🧠 Big idea:** Looking straight down is "old-fashioned" but still great for arcade action, as long as you don't need depth or a good look at the hero.

**📋 The details:**
- Still found occasionally in **action arcade** games. Classics: **Smash TV**, **Gauntlet**.
- ❌ Disadvantages: you **can't get a good look at the character or the world**, and **depth-based concepts should be avoided** from this angle (no jumping puzzles that depend on height).
- **Top-down/side view variant:** world elements and power-ups are shown from **above**, while characters are drawn from the **side.** It has a charm similar to **Egyptian tomb art**, where figures are always in profile. More recent examples: **Snake**-style and **Tower Defense** games. (Rogers' illustration is a maze seen from above with side-view figures and a countdown timer.)

**🎮 Book examples:** Smash TV, Gauntlet (top-down arcade); Snake and Tower Defense types (top-down/side).

**📱 F2P mobile translation:**
- Top-down is thriving on mobile, usually **tilted slightly** so characters read better. Brawl Stars, Archero, Survivor.io, Squad Busters and Among Us all show the arena from above. That suits **virtual-joystick movement**: up on the stick = up on the screen, no confusion.
- Rogers' "can't see the character well" problem gets solved with **big heads, bold colors and slightly angled cameras.** Brawler designs are made to read as silhouettes at thumbnail size.
- "Avoid depth" still holds: top-down mobile games represent height with clear rules (walls block, bushes hide, water stops) rather than true vertical play.
- Tower defense and many lane-battlers use the **top-down/side hybrid**: a top-down map with units drawn facing sideways or toward the camera, which keeps characters charming and readable.

**🪝 Make it stick:** Top-down = the security-camera view. Great for seeing who's where, terrible for seeing anyone's face, unless they all have giant cartoon heads.

---

## 11. Special case cameras (flying and swimming)
**🧠 Big idea:** Once the main camera works, extra movement modes like flying or swimming add a new layer of complexity. Plan for them.

**📋 The details — Rogers' red flags and tricks:**
- **Keep the camera moving with the player while flying or swimming.** Never let the player **rise or fall off screen.**
- If the player flies or swims **straight up or down**, make sure the camera **doesn't sort through floor geometry.**
- **Swimming:** keep the camera **underwater with the player.** Don't let it pop above the surface unless the player is **swimming at the surface.** Keep a clear distinction between **"in water"** and **"on land."**
- **Resist realistic underwater camera bobbing.** That kind of effect causes **DIMS.**

**📱 F2P mobile translation:**
- Special movement states in mobile games (flying mounts, gliding, underwater zones in open-world gacha games, flying levels in runners) need the same discipline. Keep the character in frame, keep state changes visually obvious (color grading, bubbles, UI changes), and don't bob the camera.
- In casual games, the "special case" is often a **bonus mode** (a flying bonus run in an endless runner, say). Give it a distinct camera framing so players instantly feel "this is a different mode".

**🪝 Make it stick:** Underwater camera = a scuba buddy. It stays *with* you, under the surface, and doesn't seasick-bob around.

---

## 12. Tunnel vision
**🧠 Big idea:** Tight spaces like caves, sewers and dungeons wreck free cameras. Put the camera on a rail there. It fixes the problems *and* adds claustrophobia.

**📋 The details:**
- Low ceilings, narrow passages and tight doorways cause all sorts of camera trouble.
- Rogers' fix: **restrict the camera with a rail camera** in these spots. It **solves the camera problems** and helps **keep the feeling of claustrophobia.**
- **Avoid low angles.** Keep the camera at **shoulder height or slightly above** the character.
- Watch out for **low-hanging stalactites**, which cause **sorting**.

**📱 F2P mobile translation:**
- In top-down/iso mobile games, the "tunnel" problem becomes **occlusion**: tall walls or roofs hiding the hero. Standard fixes are cutaway roofs, fading walls, or silhouette outlines.
- In third-person mobile games, narrow interiors are a good place to **constrain the camera** (tighter, scripted framing) rather than letting the drag-camera fight walls.

**🪝 Make it stick:** In a tunnel, put the camera on train tracks. Trains don't get lost in caves.

---

## 13. Camera shot guide — the "5-second film school"
**🧠 Big idea:** Film has a shared vocabulary for how much of the subject fills the frame. Use it in cutscenes *and* in-game to control emotion, information and drama.

**📋 The details — shot sizes, from far to near** (Rogers illustrates each with the same stick figure getting bigger in the frame):

| Shot | Abbr. | What's in frame | Best used for / Rogers' tip |
|---|---|---|---|
| **Extreme wide shot** | EWS | Subject or place from very far away | Castles looming on the horizon; a planet-killer space station parked in orbit |
| **Very wide shot** | VWS | Closer; some details visible | **Establishing shots** of buildings, spaceships, big things; showing the player is stranded at sea or in a desert |
| **Wide shot** | WS | The **entire** subject (car or person) fits in frame | First introducing a main character or vehicle so the player sees all of it |
| **Medium shot** | MS | About **half** the subject, usually waist up | General character moments. Joke: the character doesn't need pants that day |
| **Medium close up** | MCU | "**Head and shoulders**" | Most common for **talking characters**. ✅ Animate the hands to keep it lively |
| **Close up** | CU | "**Head shot**": tight on the face | Showing expression. ⚠️ CG flaws show (mouth interiors, texture detail), so use **sparingly** |
| **Extreme close up** | ECU | Right up the nose | Eye expressions (spaghetti westerns, old horror); details on objects, **puzzle clues**, or the puzzles themselves |

**Shot types defined by content or purpose:**
- **Cutaway:** the hero says he needs the magic sword → next shot shows the magic sword. Also used for a **character reaction shot.**
- **Cut in:** the hero says "let me examine this clue" → the camera shows a **close-up detail of the clue.**
- **Two shot:** **two elements** (usually talking characters) on screen at the same time.
- **Over the shoulder shot (OSS):** taken from behind a character's shoulder. Great for **revealing hidden things**, like a gun strapped to someone's back or fingers crossed behind a promise.
- **Noddy:** a character **reacting** (nodding) to someone else speaking. Common in news interviews.
- **Point of view shot (POV):** from the perspective of someone or something. Usually the player's eyes, but it can be **a watching enemy, a floating power-up, anything.**

```
SHOT LADDER (how big the subject is in frame)
EWS  [      .      ]   tiny figure, huge world
VWS  [     /o\     ]
WS   [    \o/      ]   whole body
MS   [  waist-up   ]
MCU  [ head+should.]   talking
CU   [   (face)    ]   emotion
ECU  [  ( o  o )   ]   eyes / clue detail
```

**📱 F2P mobile translation:**
- On a phone, **close shots read better than wide shots.** An EWS on a 6-inch screen is a speck. Mobile narrative games lean on **MCU and CU** for dialogue (character portraits in visual-novel-style dialogue are basically MCUs).
- **Cut ins** are a core mobile reward tool. When you unlock a new hero, building or card, the camera "cuts in" to it, full screen, with a spin and shine.
- **Cutaways** show consequences: tap "Upgrade" and the camera briefly cuts to the building transforming. Merge Mansion-style story games cut to the room or area that just got restored.
- **POV shots** can sell gacha moments. Some pull animations frame the reveal like you're opening the chest or pack yourself (Pokémon TCG Pocket's swipe-to-tear pack opening puts the action in your own hands).
- Rogers' CU warning (low-detail models look bad up close) matters even more on mobile, where models are low-poly for performance. Don't push the camera into a face that wasn't built for it.

**🪝 Make it stick:** Far to near: **"Every Very Wide Movie Makes Close Encounters"** = EWS, VWS, WS, MS, MCU, CU, ECU.

---

## 14. Camera angle guide
**🧠 Big idea:** Where the camera sits relative to the subject changes how powerful, weak, creepy or clear things feel.

**📋 The details:**
- **Eye level:** camera aims **level with the subject's eyes.** Neutral.
- **High angle:** camera **above, looking down.** Makes things look **less impressive**. Good for showing **elements in relation to each other.**
- **Low angle:** camera **below, looking up.** Makes things look **menacing or impressive.** Great for **boss fights.**
- **Worm's-eye view:** camera sits at floor level, **looking up**, like a worm's perspective on the action.
- **Bird's-eye view:** shot from **high in the sky**, as if a bird were watching.
- **Dutch tilt:** the camera is **tilted** so everything looks off-kilter. Rogers' team used it in **Maximo: Ghosts to Glory** to feel slightly creepy or wacky, like a **Sam Raimi** horror film or the **1960s Batman** TV show.
  - **Subtle** tilt → the player senses something is wrong but can't say what.
  - **Severe** tilt → things feel really messed up.

**📱 F2P mobile translation:**
- **Low angle for bosses and premium heroes:** boss intros and hero showcase screens in gacha RPGs often frame the character from below to sell power, which also sells the character's value.
- **High angle for clarity:** puzzle and strategy views are high-angle so relationships between pieces read instantly. That's why match-3 and base views look down on the board.
- **Bird's-eye** = world maps and level-select maps.
- **Dutch tilt** works for themed LiveOps events (a Halloween event screen with a subtle tilt reads "spooky") or a "something is wrong" story beat.

**🪝 Make it stick:** Low angle = the boss is a skyscraper. High angle = the boss is a chess piece. Dutch tilt = the boss drank too much coffee.

---

## 15. Camera movement guide
**🧠 Big idea:** How the camera moves is an art in itself. Borrow film's standard moves to make game cameras and cutscenes feel cinematic.

**📋 The details:**
- **Arc:** the camera follows or dollies **around the subject in an arc.** Classic use: a **360° arc around the player** when something amazing happens to them (e.g., gaining a new power). (Drawing: the camera circles a hero raising a glowing sword.)
- **Dolly zoom:** the lens **focal length changes** while the camera **moves forward or back** so the subject stays the **same size** and the background warps. It's a staple of **Steven Spielberg** films for amazement or "uh-oh" realization moments. (Drawing: the hero stays the same size while the castle behind looms larger frame by frame.)
- **Follow:** the camera **moves along with the subject.** For a gritty cutscene, add some **hand-held shake.**
- **Pedestal:** the camera **moves up** to match the subject, like a tracking shot but **vertical.** Pedestaling past **foreground objects** adds **speed**, especially to show something **rising suddenly or powerfully.** (Drawing: frames go feet → waist → head.)
- **Pan:** the camera **moves left or right.** Pan around and past objects, and put items in the **foreground** for more interesting shots.
- **Tilt:** the camera's **aim moves up or down** while its **position stays put.** Effects like **lens flare** make a tilt more interesting.
- **Dolly:** the camera **moves smoothly toward or away from** the subject. Also called a **tracking** or **crab** shot.
  - **Speed matters:** a **slow crawl** for mystery or suspense, **rocket forward** for danger or drama.
  - Try **starting and ending the move before the subject starts moving** for extra dynamism.
- **Zoom:** the lens **focal length changes**, which creates the *illusion* of camera movement.
  - ⚠️ Don't zoom **through objects** (sorting) or **too close to low-detail characters/objects.** Textures going from crisp to pixelated breaks reality.

**📱 F2P mobile translation:**
- **Arc** = the hero unlock or level-up showcase. The new character spins (or the camera orbits them) on a pedestal. It's one of the most common reward presentations in gacha games.
- **Pedestal / rising moves** = evolution and upgrade moments (the building grows, the camera rises with it).
- **Pan** = the "look what's new" move: after an update, the camera pans across the base to the new feature or event building.
- **Dolly in / zoom** = focus. Tutorials push in on the button or tile you need to tap, then pull back. Keep it short so players don't feel their control was hijacked.
- **Zoom warning on mobile:** pinch-zoom in base builders needs **zoom limits**, so players can't zoom into low-res textures and break the illusion.

**🪝 Make it stick:** The 8 moves: **"A Dizzy Fox Pedals Past Ten Donut Zones"** = **A**rc, **D**olly zoom, **F**ollow, **P**edestal, **P**an, **T**ilt, **D**olly, **Z**oom.

---

## 16. Other camera notes — composition and "crossing the line"
**🧠 Big idea:** Now you're the director. Good composition (rule of thirds) and consistent screen direction (don't cross the line) make shots look intentional and keep players oriented.

**📋 The details:**
- **Rule of thirds:** imagine the screen split by **two horizontal and two vertical lines** into a 3×3 grid. Put your **focus item a third of the way up, or a third of the way in from one side.** (Rogers' drawing places the character's face on the upper-left intersection.)
  - Once you've mastered it, **feel free to break it.** You're an artist, after all.
- **Crossing the line** (film's **180° rule**): imagine a line through the middle of the scene.
  - Example: the hero runs from a deadly trap. Cut to a camera on the **other side of the line** and he appears to run **right, then left**. It looks like he reversed direction, which is confusing.
  - Fix: insert a shot **from the front** to show it's the same guy in the same place running the same way.
  - Also applies to **two characters talking.** If both face the same screen direction, they look like they're talking to someone **off screen**. (Rogers' drawing: two pirates. The middle panel, where both face the same way, is crossed out.)

```
RULE OF THIRDS                   CROSSING THE LINE (top view)
┌─────┬─────┬─────┐              cam A 🎥
│  ●  │     │     │                 \
├─────┼─────┼─────┤        A ────── line ────── B    (A faces B)
│     │     │     │                 /
├─────┼─────┼─────┤              cam B 🎥  ← on the same side = OK
│     │     │     │              a camera on the OTHER side flips
└─────┴─────┴─────┘              who faces left/right = confusion
```

**📱 F2P mobile translation:**
- **Rule of thirds in portrait:** in portrait games the bottom third is often covered by the thumb and controls, so key art and focal points tend to go in the **upper two thirds**. Store screenshots and ad creatives also follow thirds for the hero and the call-to-action.
- **Crossing the line in UI and battles:** auto-battlers and card games keep **your side at the bottom and the enemy at the top** (or left vs. right) every single match. Flip it and players misread who's who. That's the 180° rule applied to game layouts.
- **Dialogue scenes:** in portrait dialogue, the speaker on the left faces right and the listener on the right faces left. Swap them mid-conversation and it reads as a new conversation.

**🪝 Make it stick:** Thirds = **tic-tac-toe your shot** and park the star on a corner where the lines cross. The line = an invisible velvet rope your camera may not cross.

> ⚠️ Connection: L07 points out that a camera cut that crosses the line also flips the meaning of "left" on the stick. Camera mistakes become control mistakes.

---

## 17. Always point the camera to the objective
**🧠 Big idea:** The camera's job is to tell the player what to look at: the puzzle, the enemy, the exit, the beauty shot. Show everything they need, and don't make them guess.

**📋 The details:**
- Applies **in-game and in cutscenes.** Example: entering a mysterious underground chamber. The camera's movement can show **where puzzle elements are**, **what enemies look like and where they are**, a **dramatic reveal** of beautiful architecture, or **where the exit is**. Or, better, **all of the above.**
- **Chekhov's gun** (playwright Anton Chekhov's famous principle, from Donald Rayfield's biography in the footnote): if a gun hangs on the wall in act one, it must be fired later. Otherwise don't put it there.
  - For games: **show the player everything they need for the room or scene.** You can **spool clues out gradually**, but **don't make them guess blindly.**
- **If the objective can't be seen, give the player a tool to see it:**
  - **Batman: Arkham Asylum**'s **detective mode** (basically X-ray specs) shows hostiles and points the way to secret paths.
  - **Heavenly Sword** (SCEE, 2007) uses **picture-in-picture** to show puzzle clues and "beauty shots" of enemies during boss fights.

**📱 F2P mobile translation:**
- **Level intro pan:** many puzzle games open a level by quickly showing the **goal** (collect 30 red, free the cat, clear the jelly) before handing control over. That's pointing the camera at the objective.
- **Tutorial focus:** dimming everything except the button to tap, plus a pointing hand, is "point the camera at the objective" done with UI instead of camera moves.
- **Chekhov's gun for F2P:** if a building, currency or button appears on screen in the FTUE, it should matter soon. Don't show five currencies on day one when the player needs only one. Show them as they become relevant.
- **"Give them a tool to see it"** = hint systems, objective arrows and quest markers. In base builders and 4X games, a quest button that jumps the camera straight to the right building is the mobile version of detective mode.

**🪝 Make it stick:** The camera is a tour guide with a red umbrella. It always points at the next thing worth seeing, and never makes you wander the museum looking for the exit.

---

## 18. Never let the character get out of the camera's sight
**🧠 Big idea:** Players must always know where their character is. If geometry hides the hero, use tricks to show them anyway, and never make the camera act differently while they're hidden.

**📋 The details — Rogers' tricks:**
1. Show an **arrow, name tag, or "ghost image" outline** of the character **through geometry.**
2. Make the screen act like an **X-ray or thermal camera**, showing the character's **skeleton or heat signature** behind the object.
3. Make the **wall or object transparent** to reveal the character.
4. If the character goes **off screen** (which can happen in multiplayer), show an **arrow or icon pointing to them.** (Footnote joke: but it won't happen, because you won't let the character leave the camera's sight, right?)
5. **Zoom into first-person mode** to show the character's POV.
6. **Build geometry so a little of the character is always visible:** tinted windows, arrow slits, grates with gaps all show movement behind them.
- ⚠️ While the view is obscured, the **camera must NOT behave differently.** The last thing a player needs is to fight the camera when they can't see their character.

**📱 F2P mobile translation:**
- Mobile top-down and iso games use these tricks constantly. Hero **silhouettes/outlines through walls**, **fading foreground objects**, and **off-screen arrows** for enemies, teammates and objectives in arena shooters and MOBAs (plus minimaps in games like Mobile Legends).
- Brawl Stars-style **bushes** turn "out of sight" into a mechanic: you can hide, but *you* still see your own brawler (shown semi-transparent) while opponents don't. Rogers' rule is kept for the player, broken on purpose for the enemy.
- **Small-screen rule:** the player's own character needs the strongest contrast on screen, often a ring, glow or color highlight under the hero, so it never gets lost in effects-heavy fights.

**🪝 Make it stick:** Picture a **ghost wearing X-ray glasses, peeking through a grate, holding a giant neon arrow** that points at your hero. That's every trick in one image (ghost outline, X-ray, gaps in geometry, arrow).

---

## 19. Multiple player cameras
**🧠 Big idea:** One camera for several players needs a scheme: split the screen, zoom out to fit everyone, or use picture-in-picture. Rogers did the hard work so you don't end up in a padded cell.

**📋 The details:**
- **Split screen:**
  - **GoldenEye 007** (Nintendo, 1997) shipped a well-liked **four-player split** that held up only if you didn't need fine detail.
  - **War of the Monsters** (SCEA, 2003) **split only when the two fighters got far enough apart** to trigger it (dynamic split).
  - Today's **big screens** make split screen work better, since everyone can actually see.
- **Zooming screen:**
  - **LittleBigPlanet** **zooms out** when there's more than one character on screen. Characters who go off screen are tracked with an **arrow**. Stay off screen **too long** and that player is **"killed"** until the next checkpoint.
  - **Power Stone** **dynamically scales in and out** for up to **four players**. Characters get tiny, but with an **indicator arrow system** you can still track yours.
- **Camera in picture:** the main character is on the **"big screen"** and other characters appear in **small inset views**. Not ideal for some multiplayer types like **FPSs**, but it works well for **sports titles.**

**📱 F2P mobile translation:**
- Mobile multiplayer is almost always **one player per device**, so split screen is mostly gone. The modern challenge is **keeping track of everyone else** on one small screen: **minimaps**, **off-screen indicators**, **teammate pings**, and **spectator/replay cameras**.
- **Zoom-to-fit** shows up in party and versus games: cameras widen when action spreads out and tighten when players cluster.
- **Picture-in-picture** survives as **kill cams**, **replays** and **"your teammate needs help"** popups.
- **Async multiplayer** (Clash of Clans attacks, defense replays) gives you a camera on *someone else's* game, which is its own design space: replays should frame the key moments so the defender learns why they lost.

**🪝 Make it stick:** Multiplayer cameras = **slice the pizza** (split), **step back from the table** (zoom), or **put a slice in the corner** (picture-in-picture).

---

## 🏆 Universal Truths & Clever Ideas
1. **Pick the camera that fits your game.** 📱 *so for F2P:* decide portrait vs landscape and fixed vs movable camera before anything else. It decides your UI, art and controls.
2. **Head off DIMS** by watching frame rate, how fast the camera moves, and how bumpy the level is. 📱 *so for F2P:* add camera-shake and motion toggles, and keep camera movement smooth even on 30 fps devices.
3. **First person = deeper immersion.** 📱 *so for F2P:* rare outside shooters. Immersion on mobile usually comes from character, audio and haptics instead.
4. **Third person = a good view of both your hero and the world.** 📱 *so for F2P:* angled top-down is the mobile "third person". You see your hero *and* the arena.
5. **Treat the camera as the player's spotter.** 📱 *so for F2P:* the camera should anticipate (look-ahead in the movement direction, auto-framing threats), not just follow.
6. **Take camera control away whenever it causes trouble.** 📱 *so for F2P:* most casual F2P locks the camera completely, and that's a feature, not laziness.
7. **If you take camera control away, make sure players know.** 📱 *so for F2P:* never make a screen look draggable when it isn't.
8. **Borrow Hollywood's shots and angles** to boost visuals and drama. 📱 *so for F2P:* the arc around a new hero, low angles on bosses and cut ins on rewards all sell content (and offers).
9. **Never lose sight of the character.** 📱 *so for F2P:* outlines, fades and highlight rings so the player's own unit is always the clearest thing on screen.
10. **Plan your camera for multiple players.** 📱 *so for F2P:* minimaps, off-screen arrows, replays and kill cams are the one-screen-per-player versions.

---

## 🧩 Connect the dots
- → **L05 Character:** the camera frames the character. Character size, silhouette and readability depend on camera distance (tiny iso units vs a close third-person hero).
- → **L07 Controls:** camera-relative vs character-relative controls, inverted axes, and crossing-the-line mistakes that flip the stick. Camera and controls are one system.
- → **L08 HUD:** HUD elements fill the screen space the camera leaves. Off-screen arrows, minimaps and picture-in-picture are all HUD/camera hybrids.
- → **L09 Level design:** keep gameplay out of corners, avoid invisible walls, give the camera room. Level geometry and camera are designed together.
- → **L10 Combat / L11 Bosses:** low angles for boss menace, framing threats so the player sees attacks coming.
- → **L14 Multiplayer:** split screen, zooming screens, indicators.
- → **L16 Cutscenes:** the shot, angle and movement guides are the cutscene director's toolkit.
- → **F2P concepts:** **FTUE** (dark ride camera, point at the objective), **core loop readability** (static board + juice), **monetization** (hero showcase arcs and cut ins sell characters and offers), **LiveOps** (event-themed camera framing), **retention** (saga map scrolls that tease what's next), **ASO/ads** (camera framing for store video and creatives, portrait vs landscape).

---

## 🔁 Retrieval check (do it closed-book!)
1. Name four parts of game development that the camera choice affects.
2. Give three reasons early games used static cameras, and one danger of static screens.
3. What are a scrollable camera's "hydraulics", and what goes wrong if they're tuned too fast or too slow?
4. What are the two treatments of parallax scrolling, and what testing tip goes with the first one?
5. List the four advantages and four disadvantages of the first-person camera.
6. What is DIMS, what causes it, and what are Rogers' six designer remedies?
7. Name the four follow-cam traps and one fix for each.
8. What are the three methods for letting the player control the camera? How does selective control differ from free-look?
9. List at least five benefits of taking camera control away. What is the single most important rule when you do?
10. If the character is hidden behind a fence and you don't control the camera, what should controls and level design do?
11. What is the elevation problem in isometric views? What is God view?
12. Order the seven shot sizes from farthest to closest, and define cutaway vs cut in.
13. What does a low angle do to a subject? A high angle? What does a subtle vs severe Dutch tilt do?
14. Explain the rule of thirds and crossing the line, with Rogers' two examples.
15. Name the six tricks for keeping the character visible behind geometry, and the three multiplayer camera schemes.

<details><summary>Answers</summary>

1. How the camera is programmed, how the game and levels are designed, how controls are mapped, how artwork is created.
2. Scrolling didn't exist yet; the player can watch many elements at once; in early 3D, art seen from only one angle needs no back (saves production and processing). Danger: static screens aren't dynamic, so compensate with lots of animation and effects.
3. Its acceleration/deceleration. Too fast: it overshoots the target and the player corrects back and forth. Too slow: it can't get to the action in time (your platoon dies). Let players pick from several speeds, not just fast/slow.
4. Plain scroll (camera follows player, who stays centered) and forced scroll (camera moves itself, keep up or die). Plain-scroll tip: the player might outrun the level loading, so always play the level backwards to try to break it.
5. Pros: easier aiming; player sees the character as "self" (immersion); easier atmosphere/horror; close-ups of weapons, objects, puzzle items. Cons: hard to judge jumps/distance; can't see the character (weaker emotional link); player may not look where the designer wants; pickups must be scaled up.
6. Doom-Induced Motion Sickness: the eyes see motion but the inner ear doesn't feel it. Rogers ties it to wide FOV. Remedies: ~60 fps; no bobbing foreground elements; flat floors; large stationary objects to focus on; don't whip the camera; limit fast or frequent up/down looking.
7. Sorting (detection radius, or transparency for interior objects, never vanishing objects); Controls (character-relative default, airplane/inverted as an option; handle straight up/down); Corners (block corners with visible geometry, keep collectables and AI out; if you must, raise the camera up the wall but not fully top-down); Position (rigid stick vs laid-back follow; Rogers prefers laid-back).
8. Full 360° follow-cam control; free-look (button, stick rotates, maybe limited to under 180°, reorient on exit); selective control (button → zoom on detail or a scope). Free-look simulates turning your head. Selective simulates using equipment, so its limits should match the real object.
9. One less thing to worry about; more art for your budget (theater sets); dark-ride framing; better-looking set-up shots; nothing important gets missed; elaborate cinematic moves. Most important: make it clear the player doesn't control the camera.
10. Character-relative controls let the player keep pushing the same direction until the character comes out the other side. No hazards and no path-widening behind the obstruction. It's a good place to hide goodies.
11. Something high and near can appear in the same screen spot as something low and far, which makes it ambiguous. God view = isometric with a much wider field of view (up to "low orbit") for controlling cities or land masses, where detail matters less.
12. EWS, VWS, WS, MS, MCU, CU, ECU. Cutaway: cut to the thing being talked about (or a reaction). Cut in: cut to a close-up detail of what's being examined.
13. Low angle: menacing or impressive (bosses). High angle: less impressive, shows relationships. Subtle Dutch tilt: something feels wrong but the player can't say why. Severe: everything feels messed up.
14. Thirds: place the focus a third of the way up or across a 3×3 grid (then break the rule once mastered). Crossing the line: keep cameras on one side of an imaginary line. Examples: the running hero who seems to reverse direction (fix with a front shot) and two talkers who seem to talk to someone off screen.
15. Arrow, name tag or ghost outline through geometry; X-ray/thermal view; transparent wall; off-screen arrow/icon; zoom to first person POV; geometry with gaps (tinted windows, arrow slits, grates). And the camera must not act differently meanwhile. Multiplayer: split screen, zooming screen, camera in picture.
</details>

---

## 🎯 Side quests (5–15 min each)
1. **Camera census (10 min, 30 XP):** Open the top 10 grossing games on your phone's store chart. For each, write its main camera (static, scrollable, iso, top-down, third person, etc.) and orientation (portrait or landscape). Which camera dominates? Which genres break the pattern?
2. **Shot-ladder screenshot hunt (10 min, 30 XP):** In any gacha or story-driven mobile game, screenshot one example each of a WS, MCU, CU and a cut in. Label them.
3. **Thumb-occlusion test (5 min, 20 XP):** Play a portrait game one-handed. Screenshot a moment where your thumb blocked something important (or prove the designers avoided it). Where do they put critical info?
4. **Juice audit (10 min, 30 XP):** Play 3 levels of a static-camera match-3. List every animation or effect that keeps the fixed screen alive (idle wiggles, particles, shakes, character reactions). Aim for 10+.
5. **Rewrite a Truth (5 min, 20 XP):** Pick 3 of the 10 Universal Truths and rewrite each as a rule for a specific F2P genre (e.g., "Never let the character out of sight" → "In our tower defense, the selected tower always gets an outline").
6. **Draw the 180° line (10 min, 30 XP):** Sketch a top view of a two-character dialogue scene with 3 camera positions: two legal, one illegal. Mark the line.

---

## ⚔️ Main quest (homework)
**🎬 The Camera Spec One-Pager.** Pick a real or invented F2P game concept and write its **camera spec**:
- Main camera type + orientation (and why, using the comparison table's pros/cons).
- Who controls the camera (Let/Lock/Lend) and *how the player knows*.
- 3 special camera moments (e.g., boss intro low angle, hero unlock arc, level-goal intro pan), with shot size, angle and movement for each.
- How you keep the player's character/units visible (at least 2 of Rogers' tricks).
- Comfort/accessibility: shake toggle, zoom limits, frame-rate target.
- A rough sketch (paper photo is fine) of the main gameplay screen with rule-of-thirds lines and the thumb zone marked.

**✅ Done when:** one page that answers all six bullets, includes the sketch, and names at least 5 terms from this chapter correctly. Bonus: post it publicly (#gamedesign, a Discord, LinkedIn) with "Camera spec for my F2P concept, roast me".

---

## 🔬 Play Lab
1. **Clash of Clans (10 min):** Pan and zoom your village, then start an attack. *Look for:* how scroll inertia, zoom limits and the iso angle behave, and what happens to camera control during an attack. *Question:* Is this Let, Lock or Lend? How does the game tell you when you have control?
2. **Brawl Stars or Archero (10 min):** Play 3 matches or rooms. *Look for:* where your character sits on screen, whether the camera leads your movement, and how you're shown when hidden or behind walls. *Question:* Which of Rogers' "never lose the character" tricks does it use?
3. **Royal Match or Candy Crush Saga (10 min):** Play 2 levels and watch the level intro and the win sequence. *Look for:* the goal reveal and camera or UI moves that point at the objective. *Question:* How does a fully static camera still feel dynamic? List the juice.
4. **Any gacha RPG (Honkai: Star Rail, AFK Journey, Raid: Shadow Legends) (10 min):** Trigger an ultimate and do a summon. *Look for:* shot sizes, angles, arcs and low angles. *Question:* Which film techniques sell the character's power, and can you skip them?

---

## 🗣️ Feynman check
Explain to a 12-year-old in 60 seconds: **"Why do some games let you move the camera and others don't, and how does a designer decide?"** Use one example of each (a match-3 board vs a game where you look around), and mention what goes wrong when the player controls the camera badly.

# 🎮 Level 7 — The Three Cs, Part 3 — Controls
> 📖 Book pp. 155–169 · ⏱️ ~60 min study · 📱 F2P relevance ★★★★★ — on mobile the controller is a slab of glass and your player's thumb. If the touch controls feel bad in the first 30 seconds, nothing else you designed gets seen.

## ⚡ TL;DR — the 30-second version
- **Design for real human hands.** Short fingers, average coordination, nobody holding the device "your special way". Ergonomics first: thumbs and index fingers do the work, ring and pinkie just hold on.
- **Map controls with meaning:** by hand placement, by theme, by real-world motion (push stick forward = fill canteen) and by **genre convention**. Familiar beats clever.
- **The action happens the instant the input happens.** Save pretty animation for the *end* of the move. Long wind-ups are okay only when they pay off big (risk vs. reward).
- **No input should ever do nothing.** Give a negative response, make unlocks a big deal, or temporarily fill empty buttons with a related action. Let first-time button mashers look cool.
- **Pick character-relative or camera-relative controls and never switch mid-game.** Mixing them walks your hero into the zombie's mouth.
- **Feedback hardware (rumble, gyro, motion) is seasoning, not the meal.** Keep its "language" consistent, tell players about hidden controls, keep motions broad and simple, and beware lag and latency.
- 📱 **Mobile translation:** thumb zones, big touch targets (≥44 pt iOS / ≥48 dp Android), one-handed portrait play, forgiving input, auto-attack and haptics as the modern rumble.

## 🗺️ Chapter map
- [ ] 1. Humans are playing these games — ergonomics and the hand chart
- [ ] 2. Mapping strategies — hand placement, keyboard clusters, themes
- [ ] 3. Know your audience — kids, MMO/FPS, fighters, pencil trick, options
- [ ] 4. Dance, Monkey, Dance — the "dance of the buttons" vs button mashing
- [ ] 5. Gamers' thumb — health and break advice
- [ ] 6. Mashing as a teacher + never let a button do nothing
- [ ] 7. Real-world mapping — Pitfall canteen, Maximo buttons, genre conventions
- [ ] 8. Button size and "quick vs slow" moves — triggers vs shoulder buttons
- [ ] 9. Press = act — instant response, risk vs reward wind-ups
- [ ] 10. Character or Camera Relative? — pick one, stick with it
- [ ] 11. Shake, Rattle and Roll — actuators (rumble) and gyroscopes
- [ ] 12. Motion controls — real-world moves, silliness, six future tips
- [ ] 📱 13. BONUS: The Touch Controls Field Guide (not in the book: the F2P translation)
- [ ] 🏆 Universal Truths & Clever Ideas

---

## 1. Humans are playing these games — ergonomics and the hand chart
**🧠 Big idea:** Controls are for real human bodies. If the people who made the game need a "special grip" to beat it, the controls are wrong, not the players.

**📋 The details:**
- **Rogers' story:** he joined a console game three years into production. Overall it was good, but one enemy could only be beaten with a **quick time event** (QTE, more in Level 8) that required pressing a button extremely fast. Even as a skilled action gamer, he couldn't win.
  - He told the creative director the minigame was too hard. The CD asked how he held the controller (Rogers showed the ordinary two-handed hold, as in the first drawing), said he was **holding it wrong**, and demonstrated a contorted grip (the drawing shows a hand twisted over the pad with a finger lifted to hammer the button).
  - Rogers doubted players would change their grip mid-game. The CD said the whole team held it that way. Had they been told to? Yes. Rogers tried it and did even worse. When he pushed back again, the CD told him he was completely wrong and stormed off.
  - **Three months later, playtesting showed the QTE was too hard, and the controls were changed.**
- **The lesson**, in Rogers' words: **"Always remember that humans are playing these games."** The audience is not mutants with extra fingers or alien squid-men. They're real people with **short, even stubby fingers** and **so-so motor coordination**. So consider **ergonomics** when designing control schemes.
- **Ergonomics** = the study of **fitting equipment to the worker.** Hardware makers study exactly how players hold and use controllers, so it makes no sense to design a scheme that ties players' hands in pretzels.
- **The "Gamers' Guide to Flex-O-Fingering"** (Rogers' rule-of-thumb hand chart, a diagram not fully captured in the text):

| Finger | Role(s) on the chart | Strength / reach | Verdict |
|---|---|---|---|
| 👍 **Thumb** | **Primary Control, Primary Response** | Flexible, with reach. Good for **steering and fast response** | ✅ Recommended |
| ☝️ **Index** | **Primary Trigger, Primary Hold, Secondary Response** | **Strong and fast.** Used for response or hold moves | ✅ Recommended |
| ✋ **Middle** | **Secondary Hold, Secondary Trigger** | Weaker but usable for hold moves; decent reach | ⚠️ Use infrequently |
| 💍 **Ring** | **Primary Support** | Weak with poor reach. Better for **stabilization** | ❌ Not recommended |
| 🤙 **Pinkie** | **Secondary Support** | Poor strength; reaching requires hand support | ❌ Not recommended |

- The chart is a drawn hand with a **shading legend**: unshaded = **Recommended** (thumb, index), light grey = **Use infrequently** (middle), dark grey = **Not recommended** (ring, pinkie). The role labels are printed beside each finger.

```
FLEX-O-FINGERING at a glance (✅ use · ⚠️ sometimes · ❌ avoid)

  Thumb ✅  ──── steer + fast response     (sticks, face buttons)
  Index ✅  ──── trigger + hold             (triggers, main shoulder input)
  Middle ⚠️ ──── backup hold/trigger        (rare, secondary inputs)
  Ring  ❌  ──── just stabilizes the grip
  Pinkie ❌ ──── just supports the hand
```

**🎮 Book examples:** The unnamed console game's impossible QTE and its "special grip".

**📱 F2P mobile translation:**
- On a phone, the "Flex-O-Fingering" chart shrinks to **thumbs** (and sometimes an index finger when the phone sits on a table or is held in one hand and tapped with the other). The other fingers are **support**: they hold the phone. In one-handed portrait play, a **single thumb** does everything.
- The story's mobile twin: **"works on my phone."** Devs play on big flagship phones with practiced thumbs. Players use small or cheap phones, in one hand, on a bus, with a coffee in the other. **Playtest on small screens, one-handed, with people who've never seen the game.**
- If a QTE-style "tap fast!" moment needs a special technique, your analytics will show it as a **churn spike at that level**. Rogers' three-month delay is your soft-launch data.

**🪝 Make it stick:** **"Thumbs Steer, Index Shoots, Middle Holds, Ring and Pinkie just hang on for dear life."**

---

## 2. Mapping strategies — hand placement, keyboard clusters, themes
**🧠 Big idea:** Decide control rules up front: by where the hands rest, and by theme. Then players build muscle memory without thinking.

**📋 The details:**
- **Set design rules based on hand placement.** Example: in PC FPS games, the **keyboard handles movement** and the **mouse handles aiming and shooting.**
  - It helps you decide **what goes where**, and players start associating **a muscle movement with an action**, even subconsciously (muscle memory).
- **Keyboards:** having the whole keyboard doesn't mean using every key. Keep controls **clustered around common groupings** (Rogers cites the QWERTY area and the WASD cluster, typed "ASWD" in the book). It makes the game easier to adapt to.
- **Assign controls thematically.** Case study: **Tak and the Guardians of Gross** (THQ, 2008). The motion-sensing **Wii Remote** drove every **magic power**, while the **analog stick/nunchuk** handled **real-world abilities** like interacting with objects and fighting. (Rogers' drawing: a Wii Remote swing makes the hero hit with magic; the nunchuk stick makes him punch.)
  - When unsure how to do a move, players **tried the thematically related controller first.**
  - ⚠️ **Don't cross the signals** by mixing themes across controllers. That leads to confusion (and sadness).
- None of this is a secret. It all boils down to **understanding your audience's control needs.**

**🎮 Book examples:** PC FPS (keyboard move, mouse aim); Tak and the Guardians of Gross (magic = Wii Remote, physical = nunchuk).

**📱 F2P mobile translation:**
- **Hand placement rule for touch:** in landscape, **left thumb = movement, right thumb = actions** is the near-universal mobile convention (Brawl Stars, Mobile Legends, PUBG Mobile, Genshin Impact, Stumble Guys). Don't fight it.
- **Clusters → zones.** The mobile version of "don't use every key" is **don't scatter buttons across the screen.** Keep combat buttons in an arc around the right thumb's resting spot, and keep rare actions (settings, mail, shop) in the top corners.
- **Thematic mapping on touch:** a common split is **world vs. UI**. Tapping the world means "act in the game", while buttons on the edges mean "menus and meta". Card games often use **drag = play, tap = inspect** (Marvel Snap, Clash Royale-style decks). Keep each gesture's meaning consistent across the whole game.

**🪝 Make it stick:** The **4 Ms of mapping**: **M**uscle (hand placement), **M**eaning (theme), **M**irror (real-world motion or shape, section 7), **M**ajority (genre convention, section 7).

---

## 3. Know your audience — kids, MMO/FPS, fighters, the pencil trick, options
**🧠 Big idea:** Different players have different hands, habits and skills. Match the control complexity to the audience, and let players reshape controls when you can.

**📋 The details — Rogers' tips:**
- **Younger players:** keep button presses **simple**, with **no complex combos**, because small fingers can't do them. For a kids' keyboard game, **don't spread commands out**, since kids "hunt and peck" keys, which kills quick actions.
- **MMO and FPS players** build **hotkeys and macros** to chain attacks or spells (his WoW-flavored example: chaining the mage spells Combustion, Icy Veins and Fireball to boost damage per second, **dps**). **Let them customize.** Bonus: **customizable controls are friendly to disabled gamers.**
- **Fighting game fans** (e.g., the Street Fighter series) are proud of mastering ultra-complex inputs, but **not everyone can pull off the dragon punch** in Street Fighter II. For a wider audience, **don't go overboard with complex controls.**
- **Track and Field** (Konami, 1983) demanded frantic button mashing to make the athlete run. It was nearly impossible without the **"pencil trick"**: rolling a pencil across the buttons (Rogers draws it). It **destroyed controllers.** Controller makers probably loved it, but it's **unfair to force players to resort to tricks like that.**
- **Experimenting with unconventional schemes is fine**, but **let players revert to a traditional scheme.**
- **Offer several control options**, or better, **let players remap controls** in the options screen.
- **Never reverse flight controls:** **pulling back should make the plane climb, pushing forward should make it dive.** Rogers jokes that anyone who disagrees should be sentenced to a week of flying through rings in the notorious Superman 64.
  - Note the link to L06: Rogers wants **"look" controls to be character-relative** (push up = look up) because you're a person, while **planes use real flight-stick logic** (pull back = nose up). The real rule: **match the mental model of the thing being controlled.**

**🎮 Book examples:** Street Fighter II (dragon punch barrier); Track and Field (pencil trick); Superman 64 (ring-flying punishment); MMO hotkey and macro culture.

**📱 F2P mobile translation:**
- **Kids and casual = one gesture.** Hyper-casual games live on one input: tap (Flappy Bird), swipe (Fruit Ninja), hold-and-release, or drag (Helix Jump rotates the tower with a horizontal drag). That's Rogers' "younger fingers" rule applied to everyone on a bus.
- **Midcore = customizable.** Call of Duty: Mobile and PUBG Mobile let players **rearrange, resize and fade HUD buttons**, choose gyro aiming, and switch between simplified and advanced fire modes. That's the MMO-macro principle for touch, and it doubles as accessibility.
- **The pencil trick on mobile = the auto-clicker.** If your clicker or idle game demands inhuman tapping, players will use auto-tap apps or quit, and either way you lose. Idle games often evolve **from tapping to automation** (auto-tap upgrades, idle income), which turns the problem into progression.
- **Unconventional + revert:** if you test a novel gesture scheme, keep a "classic controls" option (e.g., floating vs. fixed joystick, tap-to-move vs. joystick). Among Us, for example, lets players choose between joystick and touch-to-move controls.
- **Flight logic on mobile:** if you use tilt or gyro to steer, include **invert options** and a sensitivity slider.

**🪝 Make it stick:** The **pencil trick** test: if a player needs a household object to beat your game, your controls failed (and probably broke a controller, or a phone screen).

---

## 4. Dance, Monkey, Dance — the "dance of the buttons" vs button mashing
**🧠 Big idea:** Good controls feel like a dance: varied, flowing, uncomplicated. Controls that are too complex or too repetitive turn the dance into button mashing.

**📋 The details:**
- A good designer considers how the game is played **in the real world** (the player's fingers on the controller) as well as **in the game world.** Think about **how the player's fingers will travel over the controller.**
- **Avoid repetition** and aim for an **uncomplicated** scheme. Get it right and you create the **"dance of the buttons"**: fingers flowing naturally between inputs.
- Get it wrong (**too complex or too repetitive**) and players resort to **button mashing.**
- **Button mashing** (a derogatory term): when a player **isn't sure how to control the game** and **hits buttons wildly or rapidly** hoping for any positive result. It usually happens in **action and fighting games** when the scheme is **too complex** or the player isn't getting **satisfying feedback.**

**🎮 Book examples:** Action and fighting games as the main breeding ground for mashing. (Drawing: a frantic player hammering a controller.)

**📱 F2P mobile translation:**
- The touch equivalent of mashing is **frantic tapping everywhere**. It happens when players don't know what's interactive, or when taps don't give clear feedback. Fixes: obvious tappable affordances (buttons look like buttons, interactable objects glow or bounce), and instant, distinct feedback for every tap.
- **"Dance of the thumbs"** in mobile action: Brawl Stars mixes a move joystick, an aim/attack joystick, a super and a gadget. That's few inputs with lots of expressive variety, which is a dance, not a mash.
- In match-3, the "dance" is the rhythm of swipe → cascade → anticipation → swipe. Respect it: don't block input during long animations unless you must.

**🪝 Make it stick:** Controls are a choreography. If your players are flailing, they're not dancing. They're trying to escape the dance floor.

---

## 5. Gamers' thumb — health and break advice
**🧠 Big idea:** Mashing and repetitive inputs physically hurt players. Design breaks into play, and look after your own hands too.

**📋 The details:**
- Button mashing contributes to **player fatigue** and **"gamers' thumb"** (also called **occupational overuse syndrome**). Symptoms: **stiffness, burning or cold sensations, numbness or weakness.**
- **Advice and exercises Rogers cites from the American Physical Therapy Association (APTA):**
  1. Keep your **wrists straight** (not drooping) while holding the controller.
  2. **Sit comfortably** in a chair with **good back support.**
  3. **Stretch every 20 minutes** to rest head, neck and shoulder muscles.
  4. **Tap each finger with the thumb** of the same hand. Repeat **5×**.
  5. **Alternate tapping your palm and the back of your hand** on your thigh as fast as you can. Repeat **20×**. (The drawing helpfully labels the thigh.)
  6. **Spread your fingers** as wide as possible and hold **10 seconds**. Repeat **8×**.
  7. **Clasp your hands**, turn palms away from your body, **extend arms forward**. Hold **10 seconds**, repeat **8×**.
  8. **Fold your hands**, palms away, **extend arms overhead** (stretch from upper torso and shoulders to the hands). Hold **10 seconds**, repeat **8×**.

**📱 F2P mobile translation:**
- Mobile has its own strain: tight one-thumb grips, long tapping sessions, phones held at bad angles. Design **natural breaks** into the loop (level ends, reward screens, idle time) rather than demanding endless rapid tapping.
- **Ethical note:** F2P has a reputation for compulsive loops. Healthy session design (natural stopping points, no punishment for stepping away) is good for players and for long-term retention, because burned-out players churn.
- Tap-heavy genres (clickers, rhythm games, some battlers) should offer **automation or alternative inputs** (hold instead of repeated taps) as players progress.

**🪝 Make it stick:** Every 20 minutes, your hands file a complaint. Let them take a coffee break.

---

## 6. Mashing as a teacher + never let a button do nothing
**🧠 Big idea:** New players press everything. Reward that curiosity with something cool, and make sure every single input gets a response, even if the response is "not yet".

**📋 The details:**
- **Not all mashing is bad.** Rogers noticed the first thing players do with a new game is **press every button**, because (a) they **want to see what happens**, and (b) **nobody reads the manual.**
- So how do you teach someone whose instinct is to mash? **Make the character do something cool whenever a button is pressed, even if the player doesn't understand how they did it.**
  - **God of War** does this brilliantly. Kratos pulls off awesome moves even when you mash, and **it's intentional.** After seeing the moves a few times, players **slow down to figure out how they did them.**
- **Never have a button do nothing when pressed.** Three ways to handle buttons that aren't active yet:
  1. **Negative response:** play a "nope" **sound effect or animation** so the player knows the control isn't available. Rogers loved how the hero of **Dark Castle** **shrugged** when out of ammo or missing a key.
  2. **During training, show that a button isn't active yet, then turn its unlock into an event.** **Brütal Legend** halts the game with a **full-screen graphic** each time the hero learns a new move. But:
     - (a) **introduce just one new move per step**, and
     - (b) **don't force-feed new moves too fast.** Overloaded players tune out.
  3. **Assign a redundant but related function.** If triangle will eventually fire a projectile the player doesn't have yet, map **melee** to it until they find the blaster. The player mentally links triangle with **combat** until the "true" move unlocks.

**🎮 Book examples:** God of War (mashing looks cool, then players learn); Dark Castle (shrug = negative response); Brütal Legend (full-screen new-move announcements).

**📱 F2P mobile translation:**
- **Mash-to-cool = the hyper-casual promise.** Any tap should produce satisfying motion, sound and particles. In auto-attack games like Survivor.io or Archero, just moving makes your hero shred enemies, so the first 10 seconds feel amazing before the player understands any systems.
- **Negative response on touch:** a locked button shows a **lock icon**, and tapping it **wiggles** with a soft "nope" sound plus a tooltip: *"Unlocks at level 5"*. Never ignore the tap silently, because players will think the game froze.
  - ⚠️ Ethical line: when players tap something they can't afford, it's fine to show what's missing and where to earn it. Don't ambush every "nope" with a hard-currency offer.
- **One new move at a time = feature unlock cadence.** Good FTUEs unlock one feature per session or level band, each with its own celebratory full-screen moment (like Brütal Legend's), instead of dumping every menu on day one.
- **Redundant function = placeholder slots.** An empty ability slot can trigger the basic attack until the real skill is unlocked, so the button is already linked to "fighting".

**🪝 Make it stick:** Never-dead-button trio: **Shrug** (negative response), **Spotlight** (big unlock moment), **Stand-in** (related placeholder action).

---

## 7. Real-world mapping — Pitfall's canteen, Maximo's buttons, genre conventions
**🧠 Big idea:** Controls feel right when the input *mirrors* the action, through motion on the stick, through the button's position or shape, or through the conventions players already know.

**📋 The details:**
- Motion controls (the **Wii Remote**, Microsoft's **Project Natal**, which shipped as Kinect) let designers recreate real-world moves. But first Rogers shows how to get the most reality out of **traditional controllers.**
- **Pitfall: The Lost Expedition** (Activision, 2004): water = health, carried in a canteen.
  - At a cistern, **push the stick forward** to **fill the canteen.**
  - **Pull back** on the stick and the hero (Harry) **drinks** to restore health.
  - The combination of **intention + animation** feels very satisfying. **Mapping moves to logical control positions immerses the player.**
- **Maximo: Ghosts to Glory** aimed for an **"out-of-game" correlation** between Maximo's moves and the physical **PlayStation 2 controller**:

```
                 △   OVERHEAD SWING
                      (top button → sword swings high to low)

   □  HORIZONTAL SWING                     ○  SHIELD THROW
   (side button, horizontal plane)          (round icon = round shield)

                 ✕   JUMP
                      (lowest button → the jump starts from the ground)
```

- **Genre conventions:** FPS, RTS and platformers have widely accepted control schemes. Example: **space bar, X, or A = jump** in a platformer. **The more your scheme resembles other successful games in the genre, the more easily players will embrace it.**

**🎮 Book examples:** Pitfall: The Lost Expedition (push forward = fill, pull back = drink); Maximo (button position and icon shape match the move); platformer jump conventions.

**📱 F2P mobile translation:**
- **Gesture = motion mirror.** The best touch controls copy real actions:
  - **Swipe to slice:** Fruit Ninja, Cut the Rope (cut the rope).
  - **Pull back and release:** Angry Birds' slingshot.
  - **Flick to throw:** Pokémon GO's Poké Ball throw (with a spin for a curveball).
  - **Drag a tool across crops:** Hay Day's sickle harvest.
  - **Swipe up to jump, down to slide, left/right to change lanes:** Subway Surfers, Temple Run.
  - **Swipe to tear open a card pack:** Pokémon TCG Pocket.
- **Position = meaning (the Maximo trick on glass):** put "up" actions high and "down" actions low, defensive buttons nearer the edge and attack buttons nearer the thumb. Icon shapes should mirror the action (a shield icon for block, a boot for dash).
- **Genre conventions are law on mobile:** left joystick moves and right side acts in action games; swipe or tap-tap swaps in match-3; drag-to-merge in merge games; drag a card onto the field in card battlers. Players arrive with these habits from the games they already play. Breaking convention costs you FTUE retention.

**🪝 Make it stick:** **Pitfall's canteen:** push it *into* the water to fill, pull it *to your mouth* to drink. If your gesture doesn't mime the action, ask why not.

---

## 8. Button size and "quick vs slow" moves — triggers vs shoulder buttons
**🧠 Big idea:** Bigger, easier-to-hit inputs get the urgent, frequent actions. Small, awkward inputs get the slow, deliberate ones.

**📋 The details:**
- Most modern controllers have shoulder inputs, but **consider the physical button size** when mapping.
- Example: on the **Xbox 360** controller, the **shoulder buttons (bumpers)** are **physically smaller** than the **shoulder triggers.**
  - Put **"quick move"** functions on the **triggers**: **shooting, braking, accelerating, melee.** In the heat of combat or while skidding around a corner, the player needs to react instantly, and a finger can **slip off** a small button.
  - Put **"slow move"** functions on the **smaller buttons**: **precision aiming, opening a map, swapping inventory.**

**📱 F2P mobile translation (this is Fitts's law in disguise):**
- **Fitts's law:** the time to hit a target depends on its **distance** and **size**. Close and big = fast. Far and small = slow and error-prone.
- **Quick moves = big buttons in the natural thumb zone:** attack, jump, the main action, "Play", "Collect". In Brawl Stars-style layouts the attack control is the biggest and closest to the right thumb.
- **Slow moves = smaller buttons farther away:** settings, mail, friends, map, inventory, usually tucked into top corners where accidental taps are unlikely.
- **Danger buttons** (spend premium currency, sell, delete) should be **away from quick-tap zones** and/or need a **confirm**, so a fast thumb never spends gems by accident. That's both good UX and ethical design.

**🪝 Make it stick:** **Big and close for panic, small and far for patience.**

---

## 9. Press = act — instant response, and when wind-ups are allowed
**🧠 Big idea:** The moment the input happens, the action should start. Beautiful animation that delays the response gets players killed and makes them furious.

**📋 The details:**
- Rogers calls this a **very important thing** about controls: **when the button is pressed, the action must happen.**
- He loves beautiful animation, but **nothing angers players faster than pressing a button and waiting for a gorgeous animation to finish.** The only thing that happens quickly is the player **dying**, thanks to mistimed reactions or enemy hits they couldn't dodge.
- **Put the pretty animation at the finish (follow-through) of the move.**
- In other words: when the player presses jump, the game's only question should be **"how high?"**
- **Long animations do have their place**, as long as **risk and reward balance.**
  - **Mark of Kri** has very **long wind-ups**, but they're the **most powerful attacks** in the game. Land one and the enemy isn't getting up.
  - **The risk is the wind-up. The reward is high damage or an instant kill.**

**🎮 Book examples:** Mark of Kri (long wind-up, huge payoff).

**📱 F2P mobile translation:**
- **Touch latency is already worse than buttons** (touch sampling + rendering + no physical click), so your game logic must add **zero extra delay.** React visually *on touch-down* (button depresses, piece lifts, haptic tick), even if the action resolves on release.
- **Don't lock input during long celebrations.** If a combo or reward animation plays, let players tap to skip or queue the next move (input buffering).
- **Risk/reward wind-ups on mobile:** charge attacks (hold to charge, release to unleash) are a natural touch mechanic. The hold is the risk, the big hit is the reward. Telegraph the charge clearly.
- **"How high?"** works for gestures too. A longer swipe or longer hold can mean a bigger action, but the action must start immediately.

**🪝 Make it stick:** **Press = act.** Animation is the bow after the performance, not a speech before it.

---

## 10. Character or Camera Relative?
**🧠 Big idea:** Choose one control reference frame, either relative to the character or relative to the camera, and **stick with it for the whole game.** Switching between them is a classic trap.

**📋 The details:**
- **The snare:** controls that **alternate** between **character relative** and **camera relative.** It frustrates players, so **pick one scheme for the entire game and STICK WITH IT.**
- **Camera-relative scheme (as Rogers describes it):** the controls change depending on which way the character faces the camera.
  - Example: the parody survival-horror title **"Terror Zombie Death Mansion 3."** In the hallway, pushing **left** walks the hero **left.** He enters a room where the camera points at him from the **opposite direction.** Now pushing **left** makes him walk **right**, because controls follow how the camera sees him, not his own orientation. He walks straight into a zombie, who eats his brains. (Footnote: someone "crossed the line" with that camera. See L06!)
- **Character-relative scheme (Rogers' preference):** controls are always relative to the **player character**. Push **left** and the character **always goes left, wherever the camera faces.** The game **compensates even if the camera swings 180°.**
- No need to get fancy, unless you're designing for **motion controllers.**

```
HALLWAY (cam behind)          ROOM (cam flipped 180°, "crossed the line")
  🎥                                        🎥
  [hero] ← push LEFT → goes left            [hero] ← push LEFT → walks RIGHT… into 🧟
```

**🎮 Book examples:** "Terror Zombie Death Mansion 3" (camera cut flips left/right).

> ⚠️ **2010 → 2026: the terms have shifted, the principle hasn't.** In today's industry vocabulary, **camera-relative** movement (push up = move away from the camera, push left = move toward screen-left) is the **standard** for 3D games, and "character-relative" usually means **tank controls** (up = forward in the facing direction, left/right = rotate). Rogers' zombie problem is really about **hard camera cuts** flipping the meaning of directions. The modern fix: **keep the previous movement direction "latched" across a camera cut until the player releases or significantly changes the stick**, and avoid cuts that cross the line. The timeless rule: **one consistent frame of reference, no surprise flips.**

**📱 F2P mobile translation:**
- **Top-down and iso mobile games dodge the problem entirely:** the camera never rotates, so **joystick up = screen up = world up**, every time (Brawl Stars, Archero, Survivor.io). That's a big reason fixed cameras dominate mobile action.
- **3D mobile games with a rotating camera** (Genshin Impact, PUBG Mobile) use modern camera-relative movement. Cutscene-to-gameplay transitions should keep the hero facing a sensible direction, so the first push doesn't send players backward.
- **Never rotate the board.** In puzzle and strategy games, keep the orientation fixed between levels and matches (your side at the bottom). Flipping it is the UI version of Rogers' zombie room.

**🪝 Make it stick:** Switching reference frames mid-game = handing your player a mirror while they're driving.

---

## 11. Shake, Rattle and Roll — actuators (rumble) and gyroscopes
**🧠 Big idea:** Controllers can talk back (vibration) and sense motion (gyroscopes). Use vibration with a consistent "language", and always tell players about hidden motion controls.

**📋 The details:**
- Most modern controllers have **actuators** and **gyroscopes**, the parts that make motion controllers (Wii, PS3) possible.
- **Actuator = vibration feedback.**
  - Like control schemes, keep the **"language" of vibration consistent.**
  - **Don't run it all the time.** Limit it to **taking damage** or **earning a reward.**
  - Actuators can be a lot of fun if you **take the time to experiment.**
  - **Rogers' favorite:** **Silent Hill** (Konami, 1999) vibrated the **two actuators at different frequencies** to simulate a **heartbeat.** When the character was scared or hurt, the controller's "heart" pounded, telling the player they were in trouble. Creepy and effective. (Drawing: a sweating player with a thumping heart over the controller.)
- **Gyroscope = rotate the controller to manipulate something on screen.** The applications are rich:
  - **Nudge arrows mid-flight** (**Heavenly Sword**).
  - **Steer falling characters** (**Ratchet & Clank: Tools of Destruction**).
  - **Flip an entire level** (**Super Mario Galaxy**).
- **Most important gyro rule:** **clearly tell the player which direction to turn the controller.** The gyro is **hidden inside the controller**, so players **forget it's an option**. **Remind them** the function exists.

**🎮 Book examples:** Silent Hill (heartbeat rumble); Heavenly Sword (arrow steering); Ratchet & Clank: Tools of Destruction (falling steering); Super Mario Galaxy (level flip).

**📱 F2P mobile translation — haptics are the modern rumble:**
- Phones have **haptic engines**. iOS offers preset feedback styles (light, medium, heavy impact; selection ticks; success, warning and error patterns) plus custom patterns, and Android offers predefined vibration effects. Silent Hill's heartbeat is now a custom haptic pattern any mobile game can ship.
- **Rogers' "consistent language" rule = a haptic style guide:** e.g., light tick = UI selection, medium bump = match/hit, heavy thud = big combo/damage, success pattern = level win. Use haptics sparingly. Constant buzzing becomes noise and drains battery.
- **Always include a haptics toggle**, and respect the device's system settings. Some players hate vibration or play in quiet places.
- **Gyro on phones:** gyro aiming in mobile shooters (PUBG Mobile offers it as an option), tilt-to-lean in Temple Run, AR camera movement in Pokémon GO. Same rule: **tell players it exists, show which way to tilt, and never make it the only way to play.**

**🪝 Make it stick:** Haptics are punctuation. A few well-placed exclamation marks thrill. A buzzing sentence is just a broken phone.

---

## 12. Motion controls — real-world moves, silliness, and six tips for the future
**🧠 Big idea:** Motion controls work best when they mimic real actions and feel physically right. They can be gloriously silly, but they have real pitfalls: fatigue, lag, latency, misread gestures and overuse.

**📋 The details:**
- Players respond best when **moves match a real-world action.** Tell them to swing the controller like a **sword** (or a tennis racket, bowling ball, conductor's baton) and they get it immediately.
- **The trick:** build and tune the virtual sword so it truly ***feels*** sword-like, using **animation and physics.** The right **timing, speed and sense of friction** make actions feel less **"floaty"** and **"gamey"**, which players always dislike.
- **Gyro controls let you get away with silliness.** **WarioWare: Smooth Moves** (Nintendo, 2006) plays with the user like nothing else. The Wii Remote and nunchuk can only do about **20 "moves"** (half of them button presses), but the game has players hold the controller in **bizarre ways** for its microgames, like on your head as a **mohawk** or **flipped like a spatula** tossing a pancake. The goal is to make the player **look silly**, and that's the fun.
- **True motion controls are young** (in 2010, especially at home). **Six things to keep in mind:**
  1. **Many people don't play games to exercise.** Unless weight loss is the goal, **build in breaks and vary the motions** to prevent fatigue and **repetitive stress injuries.**
  2. **Always account for lag**: the time between performing an action and seeing it on screen. Most games are about timing, so nothing is more frustrating than an action that doesn't happen when the player does it. It's maddening especially in **rhythm games** (Rock Band) and **fighting games** (Street Fighter), where it wrecks the player's timing. **Guitar Hero** lets players **adjust (calibrate) the lag to match their own skill level.**
  3. **Latency** in online games: delays in receiving and decoding game data. It can cause **lag, control lock-up, sound distortion, freezes or crashes.** It's **more a programming issue than a design one**: tight code avoids unnecessary data transmission.
  4. **Keep movements broad.** **Precise, subtle motions often don't register** with motion-sensing cameras.
  5. **Keep drawn shapes and glyphs simple:** **circles, triangles, lines.** Even "simple" shapes like **figure eights and squares** get misread by motion controllers.
  6. **Don't overdo it.** Some motion games got called **"waggle-fests"** because every action used motion for its own sake. **Mix** analog stick, button presses and motion.
- Wrap-up: you've mastered the Three Cs! Next, Level 8 covers communicating with the player through the HUD.

**🎮 Book examples:** WarioWare: Smooth Moves (silly holds); Rock Band and Street Fighter (lag hurts timing); Guitar Hero (lag calibration).

**📱 F2P mobile translation:**
- **"Feel like a sword"** = juice and physics on touch. A swipe in Fruit Ninja feels like slicing because the blade trail, the split, the juice splash and the sound arrive instantly. Floaty, delayed response feels "gamey".
- **Silliness, revised:** phones are played **in public** (bus, office, bed). Motions that make players *look* silly are a barrier on mobile. Keep physical motions small and optional, and save the silliness for what happens on screen.
- **Broad vs. precise on touch:** gesture recognizers misread tiny or complex motions, just like Rogers' motion cameras. Prefer **simple swipes (4 directions)** and **taps** over complex drawn glyphs, and make swipe thresholds forgiving.
- **Lag:** mobile rhythm games often include an **audio/visual offset calibration**, Guitar Hero's lesson in pocket form. Measure input-to-photon latency on low-end devices.
- **Latency:** in real-time mobile PvP (Brawl Stars, Clash Royale, Mobile Legends), netcode (client-side prediction, lag compensation) and visible ping indicators matter. Players blame "bad controls" for what's really bad networking.
- **Don't overdo it:** don't make every action a gesture. Mix taps, swipes and holds, each with one clear meaning.

**🪝 Make it stick:** Motion-control tips = **"Big Lazy Lions Bite Simple Donuts, Rarely"**: **B**reaks (vary motions) · **L**ag · **L**atency · **B**road moves · **S**imple shapes · **D**on't overdo it · **R**eal-world mimicry with real feel.

---

## 📱 13. BONUS: The Touch Controls Field Guide (the F2P translation)
> Not in the 2010 book. Rogers wrote for gamepads, keyboards and Wii Remotes. This section translates his principles into the controller your F2P players actually hold: a touchscreen. Every rule below traces back to one of his Universal Truths.

**🧠 Big idea:** A touchscreen has no buttons to feel, no triggers to rest on, and the finger covers what it touches. So every one of Rogers' rules (ergonomics, instant response, no dead inputs, consistency, feedback) matters *more* on mobile, not less.

### 13.1 The gesture vocabulary
| Gesture | Feels like | Best for | Watch out for | F2P examples |
|---|---|---|---|---|
| **Tap** | Pressing a button | Selecting, firing, jumping, confirming | Accidental taps; tiny targets | Flappy Bird (tap = flap), menus everywhere |
| **Double tap** | A quick "special" press | Secondary/special action | Conflicts with single tap (needs a delay to tell them apart) | Special abilities in some runners |
| **Long press / hold** | Charging, inspecting | Charge attacks, info tooltips, auto-repeat | Hidden, so players don't discover it without a hint | Hold-to-charge attacks; hold to see card details |
| **Swipe / flick** | Throwing, slicing, dashing | Directional actions, lane changes | Short swipes misread as taps; diagonal ambiguity | Subway Surfers, Temple Run, Fruit Ninja, Pokémon GO throws |
| **Drag** | Carrying an object | Moving pieces, aiming, placing units, merging | Finger hides the object being dragged | Merge games, Clash Royale card drops, Block Blast!, Angry Birds slingshot |
| **Virtual joystick** | Analog stick | Continuous movement | No tactile center; thumb drift | Brawl Stars, Archero, Survivor.io, Genshin Impact |
| **Pinch / spread** | Zooming a map | Zoom in base or map views | Two hands needed; accidental zoom mid-play | Clash of Clans, Hay Day, 4X world maps |
| **Tilt / gyro** | Steering, aiming | Fine aim, leaning, AR | Fatigue; awkward in bed or on the bus; hidden | Temple Run lean, gyro aim option in PUBG Mobile, Pokémon GO AR |

### 13.2 Virtual joystick flavors
- **Fixed joystick:** always in the same place. Predictable, but the thumb must find it, and it drifts off without tactile feedback.
- **Floating (dynamic) joystick:** appears wherever the thumb lands in a zone. Very forgiving and great for one-thumb portrait play (Archero and Survivor.io use a joystick that appears where you touch).
- **Tap-to-move / point-and-click:** tap a destination. Low effort and great for casual and strategy, worse for twitch action. Among Us lets players choose joystick or touch-to-move, which is Rogers' "offer control options" rule.
- **Twin-stick:** left move, right aim/attack. In Brawl Stars, **tapping** the attack control fires at the nearest target (auto-aim) while **dragging** it aims manually, so one control serves beginners and experts. That's a great example of control depth without complexity.

### 13.3 Thumb zones and one-handed portrait play
- An often-cited 2013 field study by Steven Hoober observed roughly **half of people holding their phone one-handed**, with the thumb doing the tapping. Screens have grown since, so the **top of the screen is now a stretch for one thumb.**
- **Portrait, one hand (right thumb):**

```
┌─────────────────────┐
│ ✖ HARD    ✖ HARD    │  ← info only: currencies, timers, settings, pause
│ ✖ HARD    ⚠ STRETCH │
│ ⚠ STRETCH ⚠ STRETCH │  ← the board / play area (look here, tap less)
│ ✅ OK      ✅ NATURAL │
│ ✅ NATURAL ✅ NATURAL │  ← primary actions: Play, boosters, joystick, main CTA
└─────────────────────┘
```

- **Landscape, two thumbs:** bottom-left = movement, bottom-right = actions (primary biggest and closest), top corners = rare actions (pause, map, chat, settings). The center stays clear so thumbs don't cover the action.
- **Rogers → mobile:** his Flex-O-Fingering chart said put frequent actions on the strongest, most flexible digit. On mobile that means **frequent actions go where the thumb naturally rests**, and **the fewer fingers the game needs, the bigger your audience.**
- **Hyper-casual and most casual F2P = one thumb, portrait.** Midcore action and strategy usually go two thumbs, landscape. Decide early (see L06's camera/orientation choice).

### 13.4 Fat-finger rules (touch targets and occlusion)
- **Minimum touch target:** Apple's guidelines say **at least 44×44 points**, Android's Material guidelines say **at least 48×48 dp** (with roughly 8 dp between targets). That's about the size of a fingertip pad. Smaller targets mean mis-taps and rage.
- **The hit area can be bigger than the art.** Make invisible touch areas generous, especially for small icons, close buttons (✖) and moving targets.
- **The finger hides what it touches.** When dragging, **offset the dragged object above the finger** (block-puzzle games typically lift the piece above your fingertip), show a **preview/ghost** of where it will land, and put feedback **around** the finger, not under it.
- **Mind the edges:** OS gestures (home bar swipes, notification pull-down, back gestures) live at screen edges, and notches and rounded corners eat space. Respect **safe areas** and don't put critical controls on the very edge.
- **Space dangerous buttons apart.** "Buy for 500 gems" should never sit next to "Collect" in the thumb zone. Add a confirm for premium spends.

### 13.5 Input forgiveness (make the game read intent, not pixels)
- **Generous hitboxes and snapping:** a drag that ends *near* a valid slot snaps into it, and a tap *near* a unit selects it.
- **Input buffering:** a jump or attack pressed slightly early (during the previous animation) still fires at the first valid frame. It's Rogers' "press = act" made forgiving.
- **Coyote time:** a jump pressed just after running off a ledge still counts (common in platformers).
- **Aim assist / auto-aim / auto-attack:** Brawl Stars' tap-to-auto-aim, auto-attack in Archero (stop moving and you shoot) and Survivor.io (fully automatic), and simplified auto-fire modes in mobile shooters. These remove the precision tax of glass.
- **Swipe thresholds:** tune how far and fast a swipe must travel. Too strict and it feels unresponsive, too loose and taps become swipes.
- **Undo and confirm:** for irreversible or costly actions, add a short undo or a confirm step. Forgiveness builds trust, and trust builds spending that players don't regret.

### 13.6 Haptics as the modern rumble (Rogers' actuator rules, updated)
- **Consistent language:** one haptic style per meaning (selection, hit, reward, error). Don't vibrate for everything.
- **Reserve strong haptics** for the moments Rogers named: **damage taken** and **rewards earned** (plus big combos and wins).
- **Pair haptics with visuals and audio.** Many players mute sound, so haptics plus visuals carry the feedback.
- **Respect settings:** an in-game toggle, plus the system's vibration settings.

### 13.7 Controls by audience: hyper-casual → casual → midcore
| Audience | Typical inputs | Orientation | Control philosophy | Examples |
|---|---|---|---|---|
| **Hyper-casual** | ONE gesture (tap, hold, swipe or drag) | Portrait | Learnable in 3 seconds without a tutorial; mash-to-cool; instant fail-retry | Flappy Bird, Helix Jump, many ad-driven arcade titles |
| **Casual** | Tap/swipe/drag on a board; a few buttons | Portrait | Fixed camera, no time pressure (or soft), forgiving, one-handed | Royal Match, Candy Crush Saga, Merge Mansion, Block Blast!, Monopoly GO! |
| **Hybrid-casual / casual action** | Move-only joystick + automatic combat | Portrait | Skill in positioning, depth in meta builds | Archero, Survivor.io, Squad Busters |
| **Midcore** | Twin joysticks + 2–5 skill buttons, or drag-deploy + timing | Landscape (usually) | Depth and mastery; customization; aim assist | Brawl Stars, Clash Royale, Mobile Legends, CoD: Mobile, PUBG Mobile, Genshin Impact |

### 13.8 Teach controls the Rogers way
- **One new input at a time** (the Brütal Legend lesson), each with a clear spotlight moment.
- **Let the first touch be awesome** (the God of War lesson). The first tap of the FTUE should produce a satisfying result.
- **No dead inputs:** every tap gets a response, and locked things explain themselves.
- **Show, don't tell:** an animated hand demonstrating the gesture beats a paragraph of text (nobody reads the manual, as Rogers said in 2010, and nobody reads tutorial text in 2026).

**🪝 Make it stick:** Mobile touch rules = **THUMBS**: **T**argets big (≥44 pt / 48 dp) · **H**and zone (key actions bottom, info top) · **U**nblocked view (the finger never hides the action) · **M**ake it forgiving (snap, buffer, auto-aim) · **B**uzz back instantly (visual + audio + haptic) · **S**imple gestures (one meaning each).

---

## 🏆 Universal Truths & Clever Ideas
1. **Let ergonomics shape your control scheme.** 📱 *so for F2P:* design for one thumb, small phones and real-world grips. Test one-handed on the bus.
2. **Consider grouping controls by theme.** 📱 *so for F2P:* one gesture, one meaning (drag = play/move, tap = inspect/select), and keep world actions separate from meta UI.
3. **Copy the control conventions of successful games in your genre, because familiarity removes confusion.** 📱 *so for F2P:* left-move/right-act, swipe-to-swap, drag-to-merge. Players arrive pre-trained.
4. **The action should start the moment the button is pressed.** 📱 *so for F2P:* respond on touch-down, buffer inputs, never lock controls behind celebrations.
5. **Give negative feedback as well as positive.** 📱 *so for F2P:* locked buttons wiggle and explain. Never swallow a tap silently.
6. **Give players breaks to prevent gamers' thumb and other strain, and take one yourself.** 📱 *so for F2P:* natural stopping points and automation over endless tapping. Healthy sessions mean longer retention.
7. **Character-relative or camera-relative? Choose one and keep it.** 📱 *so for F2P:* fixed cameras make "up = up" automatic. Never flip the board or the team's side.
8. **Don't make controls that contradict what the game shows.** 📱 *so for F2P:* if it looks draggable, it drags. If it looks like a button, it's a button. Gestures should mime the visual action.
9. **Use the controller's special features to make controls more intuitive.** 📱 *so for F2P:* haptics, gyro and multi-touch, used to clarify, never as the only way to play.
10. **Watch out for lag and latency.** 📱 *so for F2P:* measure touch-to-screen latency on low-end devices, and invest in netcode for real-time PvP.
11. **Motion-control movements should be broad and mimic reality.** 📱 *so for F2P:* simple, forgiving gestures that mirror real actions (slice, throw, pull back), but small enough to do in public.

---

## 🧩 Connect the dots
- → **L05 Character:** character moves (jump, attack, special) are what the controls trigger. Character metrics and animation timing decide whether "press = act" is possible.
- → **L06 Camera:** crossing the line flips control directions, camera/orientation choice decides the control layout, and fixed cameras make screen-relative joysticks unambiguous.
- → **L08 HUD:** button icons, tooltips, negative-response feedback and control prompts live in the HUD. QTEs (the trigger for Rogers' opening story) are covered there too.
- → **L09 Level design:** the training level teaches controls one at a time. Level layouts must suit the control precision available (touch is less precise than a stick).
- → **L10 Combat:** wind-up vs. payoff (Mark of Kri), mashing that looks cool (God of War), input timing.
- → **L14 Multiplayer:** latency and netcode in online play.
- → **L15 Audio:** "negative response" sounds and feedback layering.
- → **F2P concepts:** **FTUE** (first-touch delight, one input at a time), **D1 retention** (bad controls churn players in the first session), **core loop** (the gesture *is* the loop in casual games), **accessibility and HUD customization** (midcore retention), **ethical monetization** (no accidental spends, confirm premium purchases), **soft launch** (watch funnel drop-offs at control-heavy levels), **A/B tests** (joystick type, button size and haptics on/off are classic tests).

---

## 🔁 Retrieval check (do it closed-book!)
1. What happened in Rogers' "holding the controller wrong" story, and what's the lesson?
2. Define ergonomics, and give the role and verdict for each finger on the Flex-O-Fingering chart.
3. Name two ways to assign controls besides random placement, with a book example for each.
4. What are Rogers' audience tips for kids, MMO/FPS players and fighting-game fans?
5. What was the "pencil trick", and why does Rogers call it unfair?
6. What is button mashing, and what two causes does Rogers name?
7. Name at least five of the APTA tips and exercises.
8. How does God of War turn mashing into learning?
9. What are the three ways to make sure a button never does nothing? What two cautions go with the second?
10. Describe the Pitfall canteen mapping and the Maximo button mapping.
11. Which functions go on big triggers vs small shoulder buttons, and why?
12. What's Rogers' rule about animation and button presses, and when are long wind-ups okay?
13. Explain the "Terror Zombie Death Mansion 3" problem and Rogers' solution. How do modern terms differ?
14. What are actuators and gyroscopes for? What's the key rule for each?
15. List the six motion-control tips.

<details><summary>Answers</summary>

1. A QTE was too hard. The creative director blamed Rogers' grip and showed a contorted "correct" grip the team had been taught. Rogers argued players wouldn't switch grips mid-game, and was told he was 100% wrong. Three months later testing proved the QTE too hard and it was fixed. Lesson: always remember that humans (with ordinary hands and coordination) play these games, so design ergonomically.
2. Ergonomics = fitting equipment to the worker. Thumb: primary control/response, flexible, steering and fast response (recommended). Index: primary trigger/hold, secondary response, strong and fast (recommended). Middle: secondary hold/trigger, weaker, decent reach (use infrequently). Ring: primary support, stabilization (not recommended). Pinkie: secondary support, weak (not recommended).
3. By hand placement (PC FPS: keyboard moves, mouse aims and shoots; keep keys clustered around WASD/QWERTY) and thematically (Tak and the Guardians of Gross: Wii Remote = magic, nunchuk = physical actions; don't mix themes). Also by real-world mirroring (Pitfall, Maximo) and genre convention.
4. Kids: simple presses, no combos, keyboard commands close together (hunt and peck). MMO/FPS: allow customization, hotkeys and macros (also helps disabled gamers). Fighting fans love complexity, but for accessibility don't go overboard.
5. Rolling a pencil across the buttons to mash fast enough in Track and Field. It wrecked controllers, and forcing players into such workarounds is unfair.
6. Randomly or rapidly hitting buttons because you don't know how to control the game. Causes: a control scheme that's too complex, or unsatisfying feedback (often in action and fighting games).
7. Wrists straight; good chair with back support; stretch every 20 minutes; tap each finger with the thumb 5×; alternate palm and back of hand on the thigh 20×; spread fingers 10 s × 8; clasp hands and extend arms forward 10 s × 8; fold hands and extend arms overhead 10 s × 8.
8. Kratos does awesome moves even when you mash (intentionally). After seeing them a few times, players slow down to figure out how they did them.
9. Negative response (sound/animation, like Dark Castle's shrug); mark the button inactive in training and celebrate the unlock (Brütal Legend's full-screen graphic), teaching one move at a time and not too fast; assign a redundant related function (melee on the future projectile button).
10. Pitfall: push the stick forward at a cistern to fill the canteen, pull back to drink and heal. Maximo: triangle (top) = overhead swing, square (horizontal) = horizontal swing, X (bottom) = jump, circle (round icon) = shield throw.
11. Big triggers: quick moves (shoot, brake, accelerate, melee) because fingers can slip off small buttons in a panic. Small shoulder buttons: slow moves (precision aim, map, inventory).
12. The action should happen as the button is pressed. Save pretty animation for the end of the move ("how high?"). Long wind-ups are okay with a matching reward (Mark of Kri's slow but devastating attacks).
13. The camera flips 180° between rooms (crossing the line), so with camera-relative controls "left" suddenly walks right, into a zombie. Rogers: choose one scheme and stick with it, and he prefers character-relative (left always moves the character left, compensating for camera turns). Modern usage calls screen/camera-relative movement standard and "character-relative" usually means tank controls. The modern fix is latching direction across cuts and not crossing the line.
14. Actuators give vibration feedback: keep a consistent language and reserve it for damage and rewards (Silent Hill's heartbeat). Gyroscopes let players rotate the controller to manipulate things (Heavenly Sword arrows, Ratchet & Clank falling, Mario Galaxy level flip): clearly show the direction to turn and remind players the option exists.
15. Build in breaks and vary motions (not everyone wants exercise); account for lag (rhythm and fighting games; Guitar Hero calibration); latency in online play (mostly a programming issue); keep movements broad; keep drawn shapes simple (circles, triangles, lines); don't overdo motion ("waggle-fests"), mix inputs.
</details>

---

## 🎯 Side quests (5–15 min each)
1. **Thumb heatmap (10 min, 30 XP):** Screenshot the main gameplay screen of 3 F2P games. Draw your thumb's natural, stretch and hard zones on each. Are the most-used buttons in the natural zone? Where are the danger buttons (spend gems)?
2. **Dead-button hunt (10 min, 30 XP):** In any F2P game, tap every locked or disabled thing you can find. Rate each response: silent (fail), shrug/wiggle (ok), explanation (good), explanation + path to unlock (great).
3. **Gesture mime (5 min, 20 XP):** List 5 touch gestures from real games that mirror real-world actions (slice, throw, pull back...). Then invent 2 new ones for a hypothetical cooking or fishing game.
4. **Ruler test (10 min, 30 XP):** Measure the smallest tappable button in your favorite F2P game (screenshot, then compare to the 44 pt / 48 dp guideline using your phone's resolution). Does it pass? Is the hit area bigger than the art?
5. **Press = act audit (10 min, 30 XP):** In an action game, record your screen at 60 fps (or slow-mo video your phone with another camera) and count frames between touch and the first visible reaction. Compare two games.
6. **Haptic style guide (10 min, 30 XP):** Write a 5-line haptic "language" for a match-3 (selection, match, combo, booster, level win). Which events get NO haptic, and why?
7. **Control translation (15 min, 40 XP):** Take a console action game you love and redesign its controls for one-thumb portrait play. What do you cut, automate or merge?

---

## ⚔️ Main quest (homework)
**🕹️ The Touch Control Spec + Paper Prototype.** Pick a real or invented F2P game and produce:
1. A **control map**: a phone-frame sketch (portrait or landscape, justified) with every input placed, sized and labeled, plus thumb zones drawn on top.
2. A **gesture table**: each gesture → its one meaning → feedback (visual, audio, haptic) → forgiveness rule (snap, buffer, auto-aim, threshold).
3. A **"no dead inputs" list**: every locked or unavailable control and its negative response.
4. An **FTUE unlock schedule**: which input is taught when, one at a time, with its spotlight moment.
5. A **2-minute paper or clickable prototype test** with 3 people who haven't seen it: note where they mis-tap or hesitate.

**✅ Done when:** the sketch shows all inputs with sizes ≥44 pt/48 dp, every gesture has exactly one meaning, every locked control has a response, and you've written 3 changes based on your test. Bonus: post the before/after sketch publicly ("I playtested my touch controls on 3 strangers, here's what broke").

---

## 🔬 Play Lab
1. **Brawl Stars (10 min):** Play 3 matches. *Look for:* tap-to-auto-aim vs drag-to-aim on the attack control, joystick behavior, button sizes and positions, feedback on hits. *Question:* How does one control serve both beginners and experts? Which of Rogers' truths does it embody?
2. **Archero or Survivor.io (10 min):** Play one run one-handed in portrait. *Look for:* floating joystick, auto-attack, how the first 10 seconds feel. *Question:* What did the designers automate to make one thumb enough, and where does skill still live?
3. **Royal Match or Candy Crush Saga (10 min):** Play 3 levels. *Look for:* tap-tap vs swipe swaps, invalid-move feedback (negative response), input during cascades, haptics. *Question:* What happens when you try an illegal swap, and is any input ever ignored silently?
4. **Call of Duty: Mobile or PUBG Mobile (10 min):** Open the controls/HUD settings before playing. *Look for:* layout editor, button resizing, gyro options, simplified vs advanced fire. *Question:* Which of Rogers' audience tips (customization, revert to traditional, accessibility) does the settings screen fulfill?

---

## 🗣️ Feynman check
Explain to a producer in 60 seconds: **"Why do our touch controls need to respond on the very first frame, never ignore a tap, and keep every gesture's meaning the same?"** Use Rogers' "humans are playing" story, the "press = act" rule, and one F2P example where bad controls would show up as D1 churn.

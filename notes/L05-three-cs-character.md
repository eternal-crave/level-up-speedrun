# 🦸 Level 5 — The Three Cs, Part 1: Character
> 📖 Book pp. 83–119 · ⏱️ ~75 min study · 📱 F2P relevance ★★★★☆ — In F2P mobile the character is the product: the hero you collect, the skin you buy, the face in every ad. And the "feel" of a runner or brawler lives in its character metrics.

## ⚡ TL;DR — the 30-second version
- **Lock the Three Cs early: Character, Camera, Control.** Changing one mid-production ripples through *everything*. Rogers has seen games get cancelled over it. This level covers Character. Camera is → L06, Control is → L07.
- **Form follows function.** What the character *does* and *is* decides how they *look*. Pick **3 personality traits**, then express them through **shape language** (circle = friendly, square = strong or dim, point-down triangle = heroic body or sinister head), a **readable silhouette**, color and texture.
- **Personality types:** humorous, heroic, badass. Each one has rules. **Customization** (naming, looks, gear, home base) creates **ownership**, but keep a **signature item** fixed.
- **The character is the world's ruler.** Height, width, walk/run speed, jump height and distance, melee and projectile reach are the **metrics** every level is built from. Jump ≈ ½ the hero's height, double jump ≈ 2×, a hoist adds up to one body length. Put collision at the **torso**.
- **Walking is NOT gameplay.** Make movement fast and varied. Know your jump's five phases (instant takeoff, fast rise, double jump *before* the apex, short fall, landing that sticks). Respect the **jump zone** and the **safe landing zone**. Give players a teeter, hoist, shadow, readable falls and fast get-ups.
- **The character is your best HUD:** show health, inventory and upgrades *on the body*. Companions and SPCs cost a lot, so make them **opposites that complement** the hero. Balance big casts with an **abilities matrix** (TF2). Every **NPC** must answer *"What does the player need to succeed?"*

## 🗺️ Chapter map
- [ ] 1. The Three Cs and Form Follows Function: lock them, or else
- [ ] 2. Looks that talk: traits, shapes, silhouettes, color
- [ ] 3. Personality: do we really need another badass? Humorous, heroic, badass, sneaky morality
- [ ] 4. Let's get personal (A): names and customization breed ownership
- [ ] 5. Let's get personal (B): signature gear, uncanny valley, stylized
- [ ] 6. Finally, we talk about gameplay (A): metrics, the hero as a ruler
- [ ] 7. Finally, we talk about gameplay (B): head, feet or torso collision
- [ ] 8. Why walk when you can run? (A): walking is NOT gameplay
- [ ] 9. Why walk when you can run? (B): vehicles, weight, speed, dash, stealth
- [ ] 10. The art of doing nothing: idles with personality
- [ ] 11. Might as well jump (A): five phases, game physics
- [ ] 12. Might as well jump (B): five jump types, the jump zone
- [ ] 13. Hoists and teeters: edge helpers, the Wile E. Coyote effect
- [ ] 14. What goes up, must fall down: eight steps of falling
- [ ] 15. Me and my shadow: the shadow is a gameplay tool
- [ ] 16. The water's fine... or is it? Swimming rules
- [ ] 17. Be kind to our four-legged friends: quadruped metrics
- [ ] 18. Using all of the parts: the character as the HUD
- [ ] 19. We are not alone (A): SPCs and companions
- [ ] 20. We are not alone (B): big casts and the abilities matrix
- [ ] 21. Who are the people in your neighborhood? NPCs need jobs
- [ ] 22. 📱 F2P bonus: characters as collectibles, IP and ad stars
- [ ] 🏆 Universal Truths & Clever Ideas

---

## 1. The Three Cs and "Form Follows Function"
**🧠 Big idea:** Most of a design keeps changing during production. Three fundamentals must not: **Character, Camera and Control**. Settle them in preproduction and then defend them.

**📋 The details:**
- The **Three Cs**, in Rogers' order:
  1. **Character**: this level
  2. **Camera**: Level 6
  3. **Control**: Level 7
- **Why lock them early?** So many game elements depend on the Three Cs that changing any one of them causes a **ripple effect** across the whole game: massive gameplay problems, extra rework, and real danger to the project. Rogers says he has watched teams **screw up badly enough to cancel their game** because they didn't stick to their Three Cs plan. He admits that sounds dramatic. It's still true.
- **"Character" here means something new.** Level 3 covered *writing* characters (story, motivation, names). Here "character" means **the way the hero is shown to the player** plus **the activities the player performs with that hero**.
- **The very important rule of character design: FORM FOLLOWS FUNCTION.**
  - Use it as your motto for designing *anything*. It comes back more strongly later in the book (for example in level design and enemies). It matters most of all for the game's main character.
  - In practice, the character's **actions and personality determine their appearance**. You don't draw a cool guy and then work out what he does.
- Rogers skips the deep art-craft of visual character design (other books cover it) and only gives the high-level points. His recommended reading (footnote):
  - *Disney Animation: The Illusion of Life*, Thomas & Johnston (1984)
  - *The Art of Star Wars* book series (Episodes I–VI)
  - Ben Caldwell's cartooning books (*Fantasy! Cartooning*, *Action Cartooning*)

**🎮 Book examples:** No single game here. The warning comes from Rogers' own experience of cancelled projects.

**📱 F2P mobile translation:**
- In F2P the Three Cs get locked even *earlier*, because the **soft launch** tests them with real players and real CPI. Your hero's look, your camera angle and your one-thumb control scheme *are* the ad creative, the store screenshots and the FTUE. Change one after soft launch and you redo marketing, onboarding and a big pile of art.
- Mobile adds a fourth constraint: **the thumb**. Form follows function, and on mobile "function" includes "readable at 1.5 cm tall on a phone, controlled by one thumb, while the player is on a bus".
- Example: in a lane runner like *Subway Surfers*, the character, the chase camera behind them and swipe control are one inseparable package. Swap any one and it's a different game.

**🪝 Make it stick:** The Three Cs are the **three legs of a stool**. Saw one shorter halfway through the meal and everyone's soup ends up on the floor. 🥣 Second hook: **"Function first, fashion second."** Batman wears the cape *because* it shows movement (see §5), not because capes are cool. (They are, though.)

> ⚠️ **2010 → 2026:** Still 100% true. Modern teams even build a **"Three Cs prototype"** or vertical slice first, sometimes with grey-box art, so the feel is proven before content production. F2P adds data: you can A/B test a character's look in ad creatives *before* you lock it.

---

## 2. Looks That Talk: Traits, Shapes, Silhouettes, Color
**🧠 Big idea:** Choose **three personality traits** for your hero, then let shape, silhouette, color and texture *broadcast* those traits before the character does anything.

**📋 The details:**
- **Step 1: the three-trait test.** Which three words describe your hero? Rogers' examples:

| Hero | Trait 1 | Trait 2 | Trait 3 |
|---|---|---|---|
| **Mario** | brave | bouncy | happy |
| **Sonic** | fast | cool | edgy |
| **Kratos** | brutal | vicious | self-serving |

- **Step 2: put the traits into the physical design.** Animators learned long ago that the **shapes** inside a design carry personality (**shape language**):
  - **Circles** → **friendly**.
  - **Squares** → **strong** *or* **dumb**, depending on how big the square is.
  - **Triangles** are the interesting case. A **point-down triangle body** (wide shoulders, narrow waist) lends a heroic figure a **strong build**. Use that *identical* inverted shape for the **head** and the character reads as **sinister**.
  - Experiment by **rotating and combining** shapes until the character feels compelling.
  - 📐 *The book's drawing:* a round, circle-bellied blob waving hello (friendly), a muscular gun-toting soldier built around a point-down triangle torso (hero), and a robed figure whose *head* is a point-down triangle (villain).
- **Step 3: the silhouette.** Every professional character designer and animator uses this trick. A strong, clear silhouette:
  1. Shows the character's **personality at a glance**.
  2. Helps **tell one character from another**.
  3. Marks characters as **"friendly" or "enemy"**.
  4. Makes the character **pop from the backdrop** and from surrounding world objects.
- **Team Fortress 2 example** (the book shows the class lineup as pure black silhouettes): **Heavy**, **Pyro** and **Spy** are told apart at a glance. **Body language** does much of the work of giving each one a distinct personality. The silhouette is both a personality snapshot and a **quick-ID tool mid-fight**: you see who is hunting you and can change tactics, or notice who is lined up in your sights.
- **Designing several characters who share the screen** (for example in multiplayer)? **Design them together**, so their silhouettes "fit together" even when they stand apart. This works especially well for **duo characters**:
  - **Jak and Daxter**: tall vs short
  - **SpongeBob and Patrick**: square vs pointy
  - **Mario and Luigi**: fat vs thin
- **Step 4: color and texture** are further ways to separate characters:
  - Early comic-book **heroes** were drawn in bold, patriotic **reds and blues**, while **villains** got murkier "opposite" shades, such as **greens and purples**.
  - In the first **Star Wars** film the good guys (Luke, Leia, Han) dressed in **black and white**. Vader and the Stormtroopers used that same palette, but their outfits were **angular and metallic**. Same colors, different surface feel, and a fine fit for villains.
- **But in the end, personality decides whether a character is good or evil, noble or not.** The look supports it and doesn't replace it. (That leads straight into §3.)

**🎮 Book examples:** Mario/Sonic/Kratos → three-trait summaries · TF2 → silhouettes that work in gameplay · Jak & Daxter, SpongeBob & Patrick, Mario & Luigi → duo silhouettes that contrast · comics and Star Wars → color and texture coding for good vs evil.

**📱 F2P mobile translation:**
- **Thumbnail readability is life or death on mobile.** A brawler in *Brawl Stars* or a troop in *Clash Royale* might be a few millimeters tall. Silhouette, a signature weapon and bold color have to carry *all* the identity. That's why mobile characters lean on **big heads, big weapons and chunky shapes**.
- ***Angry Birds*** is a shape-language textbook: round **Red** (the everybird), the yellow **triangle Chuck** (speed: he's literally an arrowhead), the round black **Bomb**. Each bird's shape and color hints at its ability before you fire it.
- ***Among Us*** proves that even one shared silhouette works if **color** carries identity. Crewmates are often called by their color ("Red is sus"), and **hats/pets** break up the silhouette.
- **Team color coding** (allies blue, enemies red, as many top-down mobile PvP games do with outlines or rings) is the modern version of "heroes in red/blue, villains in green/purple".
- **Store and ad creatives:** a mobile hero has to read on a **store icon** (tiny), a **feed ad thumbnail** and a 6-second video hook. Test it: shrink your hero to 64×64 px and turn it into a black silhouette. Can you still tell who it is?

**🪝 Make it stick:** **"Circle hugs, square shrugs (or punches), triangle chest = best, triangle head = dread."** 🔵🟥🔻 Then the **Blackout Test**: fill your whole cast with black paint. If two of them become twins, one needs a redesign.

---

## 3. Personality: Do We Really Need Another Badass?
**🧠 Big idea:** Rogers sees three kinds of video game character: **humorous, heroic and badass**. Each needs careful construction, or you get a lame character. Personality should drive *everything* the character does.

**📋 The details:**

**😂 The humorous character**
- **Says funny things.** Comic dialogue is *tough* to write well; if it's not your strength, **bring in a professional writer**.
- **Does funny things.** Please don't fall back on fart and burp gags. They're juvenile, they show you couldn't think of anything actually funny, and all that gas can push up your **ESRB rating**.
- **Funny doesn't always mean jokes.** The 1960s *Batman* TV show was funny because **Adam West played it completely straight**, treating a bat-costume, a bat-car and bat-shark repellent as perfectly normal. The **contrast with the absurdity** is where the comedy came from.

**🦸 The heroic character**
- **Does heroic things**: rescues the princess, the planet, the situation. Whatever the deed, **make sure it carries weight**. A hero can be good *without* turning syrupy.
- **Has one thing they excel at.** Lara Croft finds treasure. Sonic runs. Simon Belmont is a whip expert. Give your hero a **specialty**, a weapon or a skill.
- **But nobody's perfect.** A good hero is **relatable**, so they have problems like ours: **phobias, unrealized ambitions, relationship troubles**. Giving a character a flaw is one thing. **Turning the flaw into gameplay** is the step up:
  - **Indiana Jones** hates snakes. So a chamber swarming with serpents *has* to change how that scene plays.
  - **Trauma Center: Under the Knife** (2005): the hero lacks confidence in his own skill, which adds tension to the story.
  - **Champions Online** (2009, MMO): players can *pick* drawbacks such as weakness to fire or cold attacks.
  - Rogers promises that disadvantages like these will produce **memorable moments**.
- **Go back to your three traits.** Let them guide *everything* the character does: how they **walk**, **fight**, **open a door**, **celebrate**, and what they do when they're **bored waiting for you** (→ idles, §10).

**😎 The badass** (scholars call it the **anti-hero**)
- Very common nowadays, because **video games are wish fulfillment**. Rogers jokes that he'd love to walk into a smoky bar full of criminals and win instant respect with nothing but a narrowed look and a knuckle crack (and then, being the hero, defeat them all).
- Like the other two types, a badass must be **built carefully** or you get a lame character:
  - **Does badass things with flair**, be it killing enemies or even *opening doors*.
  - **Isn't a nice person.** Nearly every game hero kills and steals, yet badasses appear to **relish it** more. They go the extra mile to humiliate their victims and then **gloat** over the result.
  - **Says cool things but (almost) never raises their voice.** They're too cool to need to. ⚠️ Careful: a **stoic** character is easily mistaken for one with **no personality**.

**🕊️ Sneaking morality in (without preaching)**
- The public often blames games for teaching kids bad behavior, and some characters are not great role models. But **preaching morality at the audience is bad form**. There are subtle (read: sneaky) ways to steer a character toward good. **Good doesn't have to mean dumb.**
- **Rogers' trick in *Maximo vs. Army of Zin*:**
  - In the first game Maximo was only in it for himself: rescue the princess, beat the bad guy, grab treasure. He didn't feel heroic.
  - For the sequel Rogers wanted Maximo to *act* like a hero. But this was before **morality-driven character paths** (*Fable*, *Star Wars: Knights of the Old Republic*), and **forcing** the player to do good didn't feel right.
  - **Solution:** scatter **victims being menaced by Zin enemies** through the levels (the book's drawing shows a terrified villager running from a sword-waving skeleton). Rescuing them was **optional**, sometimes required a **detour**, and carried **no penalty** if skipped. Saving them earned a **small reward** (a few coins, an armor power-up).
  - **Playtest result:** players immediately **cared** about the villagers, felt **bad** when they were too late, and went out of their way to save them while progression stayed their main goal. Afterward they said they **liked being a "hero"**, which was exactly the intended feeling.
- **The flip side: bad deeds to avoid.** In ***inFAMOUS*** (2009) being bad is optional. But rob NPCs or murder civilians until you count as "evil", and townsfolk **shout insults and hurl bricks** at you.
- *Footnote fun:* Rogers argues **Link** (Zelda) is about the worst person around. He hacks up everyone's gardens, breaks into houses, steals anything not nailed down and smashes their pottery, yet everyone is thrilled to see him. 🏺

**🎮 Book examples:** 1960s *Batman* → deadpan comedy · Lara, Sonic, Simon Belmont → hero specialties · Indiana Jones, *Trauma Center*, *Champions Online* → flaws that become gameplay · *Maximo vs. Army of Zin* → optional, rewarded rescues make players feel heroic · *inFAMOUS* → the world reacts to evil · Link → the cheerful home-wrecker.

**📱 F2P mobile translation:**
- **Mascot personalities** are a mobile superpower: ***Duolingo's* owl Duo** (its marketing leans hard on a pushy, guilt-tripping persona), ***Royal Match's* King Robert** (a comically helpless king in peril), ***Candy Crush's* Tiffi**, ***Homescapes'* butler Austin**. Each has a clear 3-trait personality that carries ads, push notifications and the FTUE.
- **Humor without jokes:** a deadpan, *serious* character in a ridiculous situation (a king who keeps falling into traps) is a classic ad and level hook.
- **Heroes need a specialty:** in hero collectors, every hero's kit should answer "what are they *best* at?" in one sentence, or players won't remember them.
- **Flaws as gameplay:** "glass cannon" heroes (huge damage, tiny HP) are flaws turned into strategy.
- **Sneaky morality → optional, rewarded good deeds:** "help a neighbor" mechanics in farming sims (*Hay Day* lets you help friends, for example) and clan donations in *Clash of Clans* reward pro-social play without forcing it. The design principle is to **reward the good choice; don't force it**.

**🪝 Make it stick:** **Three flavors of hero: 🤡 Clown, 🦸 Cape, 😎 Shades.** Clown: funny by contrast, not farts. Cape: matters, has a specialty, has a flaw. Shades: style, smugness, quiet. And remember **Maximo's villagers**: give the player a puppy to save and a coin for doing it, and they'll call *themselves* a hero.

---

## 4. Let's Get Personal (A): Names and Customization
**🧠 Big idea:** A name should match the look, and letting players **name and customize** a character creates **ownership**, which turns into caring.

**📋 The details:**
- **Make the appearance match the name** (naming was covered in → L03). The book shows two characters and asks which is "**Dirk Steele**": a square-jawed action man with a pistol, or a buck-toothed goof with a mallet. (Obvious, and that's the point.)
- **The X-Com lesson** (*X-COM: UFO Defense*): you command an international squad fighting an alien invasion, and recruits get bland names. Rogers then discovered you could **rename** them. Suddenly his generic soldiers had personalities, and he **started to care**. He equipped them well, healed them and worked to bring them home alive. Lesson: **the power of customization**.
- **If you're not using a licensed character, let players name the hero.** Even Link, one of gaming's most loved characters, can be renamed in every *Zelda* game. **Anything that lets players customize their character increases ownership.**
- **Deep customization is spreading:**
  - ***Champions Online***, ***Saints Row 2***, ***Oblivion***: extremely detailed hero builders. You can spend **hours** before you "play".
  - ***GTA: San Andreas*** (2004): you shape your character's **physique**. Eat only fast food and he gets fat.
  - ***Spore*** (2008): the creature creator produced everything from detailed dragons to living game controllers, and the creature's **anatomy changes how it moves and acts** in the game.
  - ***Drawn to Life*** (2007): **draw your own hero** from scratch. Stick figures welcome.
  - ***Graffiti Kingdom*** (2004): add **your own sounds** and pick your character's animations.
  - ***LittleBigPlanet*** (2008): you can even "customize" **emotional state**. Make Sackboy smile when you beat a friend to the prize bubble, frown or scowl when they win, or slap them on the head.
  - Rogers predicts customization will only keep growing.
- **Customization isn't just the hero.** It extends to costumes, weapons and **home base** decoration. Rogers' line: "Every player likes to play house."
- **The personalization checklist.** Let players customize:

| Category | What can change |
|---|---|
| **Name** | the character *and* weapons and vehicles |
| **Appearance** | hair/skin/eye color, ethnicity, height, weight |
| **Clothing, armor, gear** | style, color, texture |
| **Vehicles** | paint, weapon and tech loadouts, decals, wheel covers, even the trinket dangling from the rear-view mirror |
| **Home base** | furnishings, lighting, decorations |
| **Weapons** | appearance, decoration, ammo loads, special effects |

**🎮 Book examples:** Dirk Steele drawing → name/look match · X-Com → renaming creates attachment · Zelda → even iconic Link is renamable · Champions Online, Saints Row 2, Oblivion, GTA:SA, Spore, Drawn to Life, Graffiti Kingdom, LittleBigPlanet → the range of customization depth.

**📱 F2P mobile translation:**
- **Customization *is* the cleanest F2P monetization.** Skins, outfits, emotes and home decor sell without pay-to-win: *Brawl Stars* skins, *Among Us* hats and pets, *Stumble Guys* skins, *PUBG Mobile* outfits, *Marvel Snap* card **variants** (art changes, power doesn't).
- **"Every player likes to play house"** → *Homescapes*/*Gardenscapes* let you choose between style options for each renovated item. *Hay Day* and *Township* are basically decorating a home base forever. *Clash of Clans* sells **base sceneries** and hero skins.
- **Naming → ownership:** *Pokémon GO* lets you **nickname** your Pokémon. Clan names, base names and player tags all build identity and social glue.
- **LittleBigPlanet's emotions → emotes:** *Clash Royale* and *Brawl Stars* sell **emotes/pins**, which are emotional expression as a product.
- **Attachment drives retention:** a player who renamed, dressed and leveled a hero is far less likely to churn. That's sunk-cost *and* love.
- ⚖️ **Ethics note:** sell self-expression and don't sell anxiety. Cosmetics that don't affect power are widely seen as the fair F2P model.

**🪝 Make it stick:** **X-Com's "Private Bob" effect**: the moment you name a soldier Bob, Bob's death becomes a tragedy. 🪦 Players protect what they've named.

---

## 5. Let's Get Personal (B): Signature Gear, Moving Markers, Realistic vs Stylized
**🧠 Big idea:** Some things should *not* be customizable: a **signature weapon or look** is part of the character's identity. Then pick a visual approach, **realistic or stylized**, that fits your game and your budget, and watch out for the **uncanny valley**.

**📋 The details:**
- **Signature weapon and gear/appearance: NOT customizable.** They are part of who the character *is*. Licensed characters rely on them to stay unique. Imagine:
  - a **Ghostbuster** without the proton pack,
  - **Dante** (*Devil May Cry*) without his trench coat,
  - **Cloud Strife** without his enormous sword.
- **Think about how those items get used in gameplay**, and make them suit the action. Rogers backs form-follows-function, but admits that sometimes **an item inspires the design** and decides the player's actions (function following form, the exception).
- **The view-from-behind problem:** most game characters are seen **from behind**, so give them **something that shows movement**, typically an object **swinging off their back**:
  - **Lara Croft's ponytail**
  - **Batman's cape** (the book's drawing: Batman tells Lara "Nice tail")
  - Both needed **unique code**. Check with your **art and programming leads** that markers like these are feasible.
- **The uncanny valley:** many art directors chase **realism**, but a character that's *almost* human can look subtly "wrong" to viewers. That's distracting, especially in **cutscenes**.

| | 🧍 **Realistic characters** | 🎨 **Stylized characters** |
|---|---|---|
| **Facial proportions** | Avoid exaggerated features (big eyes, oversized chins, wide mouths). On a realistic face they look **inhuman**. | **Enlarge** eyes, chins and mouths for **more expression and emotional range** (common in Japanese games and anime). |
| **Movement** | Higher model realism usually makes the animation look *worse*, thanks to the uncanny valley again. Watch for **stiff arms and shoulders**. **Hands** are trouble: without jointed fingers they end up looking like **hams**. Humans are very flexible, so **invest in rigging the skeleton** properly. | Can't afford fancy **inverse kinematics, motion capture and dynamics**? Go stylized. **The more stylized the character, the more exaggerated the motion can be.** Study old **Tex Avery** cartoons to see how far you can push it. |
| **Humanity** | If something looks very human (especially a **non-human**, like an alien or robot), people expect human behavior and personality. **R2-D2** plays against that expectation brilliantly. | Stylized characters don't have to be human at all. **Anthropomorphic** heroes like **Ratchet (& Clank)**, **Sly Cooper** and **Aero the Acrobat** can earn just as much feeling and attachment from players as human heroes do. |

- **Realistic or stylized?** Decide by what's **best for your game**. ***Team Fortress 2*** began with realistic characters, then made a **180-degree turn** to a stylized look drawing on the illustrators **J. C. Leyendecker, Dean Cornwell and Norman Rockwell**, filtered through a Pixar sensibility. That shift transformed the franchise's whole tone for the better.

**🎮 Book examples:** Ghostbusters, Dante, Cloud → signature gear · Lara's ponytail, Batman's cape → secondary motion for a character seen from behind · R2-D2 → non-human playing against expectations · Ratchet, Sly Cooper, Aero → stylized animal heroes · TF2 → the switch from realistic to stylized.

**📱 F2P mobile translation:**
- **Stylized dominates the mobile charts** for Rogers' exact reasons: cheaper animation, exaggerated motion that **reads on a small screen**, more expressive faces at tiny sizes, and art that ages well over a **multi-year LiveOps** life. *Clash*, *Brawl Stars*, *Genshin Impact*, *Cookie Run: Kingdom* and *AFK Journey* are all stylized. Realism shows up mainly in shooters (*PUBG Mobile*, *Call of Duty: Mobile*).
- **Signature item = brand anchor in a skin economy.** Skins can change *everything* except the signature. Keep the weapon shape, pose or color accent that makes the hero recognizable in every skin, or players can't read the battlefield.
- **Secondary motion sells "alive" on mobile too**: capes, tails, ears and hair bounce in lobby screens and gacha reveal animations. They make a 2-cm character feel premium.
- **R2-D2 lesson for mascots:** a non-human mascot can be more lovable than a human one. Think birds, cookies, owls.

**🪝 Make it stick:** **"Skin the cat, but never take away its whiskers."** 🐱 Customize everything *except* the signature. And the **Ham Hands Alarm**: if your realistic hero's fingers look like deli meat, go stylized.

---

## 6. Finally, We Talk About Gameplay (A): Character Metrics
**🧠 Big idea:** **All gameplay flows from the main character.** The hero's proportions and abilities become the **metrics**, the measuring system the whole world is built on. Players learn those metrics "by eye", so never break them.

**📋 The details:**
- Define the character's **relationship to the world**:
  - How **tall** is the character?
  - How do **other characters and enemies** compare in height with the hero?
  - How long is the hero's **reach**?
  - For a **four-legged creature or a vehicle**, what are its **length and width**?
- Together, these proportions form the **metrics**, the base that everything in your gameplay and design is built on.
- **The fencing analogy** (the book shows a fencer extending the arm vs. lunging, measured against a ruler): fencers learn exactly how far a step carries them, how far the blade reaches with the arm extended, and that a **lunge** covers more. Knowing these distances tells them how close they must be to score. They get used to them and **adapt their style** around them.
- **Players do the same.** They size up run and jump distances **by eye**, consciously or not. Over time they sense what is within reach and what isn't, so **any change to those constants feels off**.
- **Where metrics start:** the hero's **basic height**, **travel speed** and **reach height**.
- **Use the hero as the yardstick for the world.** On ***Maximo: Ghosts to Glory*** the unit was **"1 Maximo unit"**, based on the hero's height and width. **Every distance, width and height** in the game was expressed in Maximos.
- **Use metrics to set:**

| Metric | Rule of thumb from the book |
|---|---|
| **Height** | the player character's height (the base unit) |
| **Width of passage** | normally **broader than** the hero |
| **Walking speed** | distance traveled per second (or per unit of time) |
| **Running speed** | same measure, but faster |
| **Jump distance** | typically **longer than a walking stride yet short of a run's reach**. Can also be counted in hero widths (e.g. **5 player units across**) |
| **Jump height** | based on the hero's height: a **jump = ½ the player's height**, a **double jump = up to 2× the player's height** |
| **Melee attack distance** | rarely much more than **arm + weapon length** |
| **Projectile distance** | ranges from about the hero's **reach/width** out to the **limit of visible range** |

- 📐 **The book's metrics strip** (dual-coding time; picture it): a row of stick figures across a ruler, labeled left to right **Height** (bracket beside the figure) → **Width** → **Walking Distance** → **Running Distance** → **Horizontal Jumping Distance** → **Vertical Jumping Distance** (a figure rising straight up) → **Melee Distance** ("Pow!") → **Projectile Distance** ("Bang!", with a note to account for shooting distance).

```
 ┌ Height          (the hero = 1 unit tall)
 │  O    O    O     O ~~>      O↑     O-Pow!    O--Bang!-->
 └ /|\  /|\  /|\   /|\        /|\    /|\       /|\
 |Width|Walk|Run |Horiz.Jump |Vert.|Melee|Projectile (shooting range)
```

- 📐 **The reach diagram:** a ruler above the hero marked **half / whole / double**. Players **learn they can reach anything up to double their own height**. Next to it, a cliff ledge **clearly higher than double**. The note: **an unreachable height should be *visibly* taller than the player's jump/reach**, so players read it as "not for me" and **look for another way** instead of frustrating themselves with jump attempts.

**🎮 Book examples:** Fencing → distance-gauging · *Maximo: Ghosts to Glory* → the "1 Maximo unit" yardstick.

**📱 F2P mobile translation:**
- **Runners are pure metrics games.** In a lane runner like *Subway Surfers*, lane width, jump height (clear the low barrier), roll height (duck the high barrier) and the reaction window at a given run speed are the *entire* game feel. The **Super Sneakers** power-up works because it visibly *breaks* the jump metric in the player's favor for a short time.
- **Brawlers and MOBAs** (*Brawl Stars*, *Mobile Legends*) live on **range metrics**: attack range in tiles, movement speed, hitbox size. Stats are often shown as numbers or bars on the hero card, which makes the abilities matrix (§20) visible to players.
- **Top-down mobile = tile metrics.** Many mobile maps are tile grids, so "1 tile" becomes your "Maximo unit". Bushes, walls and lanes are sized in tiles relative to the hero.
- **Readable "nope" geometry:** in mobile, make unreachable areas obviously unreachable (water, cliffs, walls). Players on a tiny screen won't experiment for long. They'll just churn.
- **Tune in data, not a pile of exceptions:** put metrics in a spreadsheet or config (remote config in LiveOps) so balance patches don't need a new build.

**🪝 Make it stick:** **"Measure the world in Maximos."** 📏 Your hero is the ruler, the tape measure and the meter stick. And the **½–1–2 ladder**: jump = ½ body, hoist adds up to +1 body, double jump = 2 bodies.

> ⚠️ **2010 → 2026:** Modern level designers call this a **metrics gym**: a test level full of gaps, ledges and corridors at exact metric sizes, built before real levels. Same idea as the Maximo unit, now standard practice.

---

## 7. Finally, We Talk About Gameplay (B): Where Is the Character "Touching" the World? (Collision)
**🧠 Big idea:** Work with a programmer to decide **collision**, meaning where and how the character interacts with the world. Fewer collision points run faster. If you use a single primary point, the **torso** is the best choice.

**📋 The details:**
- **Collision** = the code working out where and how the character touches the world.
- **Every extra collision point costs processing time.** For that reason, collision is often derived from **a single primary point** on the model.
- There are usually **three candidate locations**: **head, feet, center of the body (torso)**. In the book's drawing, the head dot and the feet dot get a red "no" sign and the torso dot is approved.

| Point | Upside | Problem |
|---|---|---|
| **Head** | handy for attaching hats | as the main point, causes **ground collision** issues. The character can look **unrooted, slightly floating** |
| **Feet** | seems the logical choice | bad for **pickup collection**: a power-up floating in mid-air means the player must **jump** to grab it |
| **Torso** ✅ | Rogers' favorite (IMHO) | spans **upper and lower body alike** and feels natural when the hero sprints or leaps through a pickup |

**🎮 Book examples:** The three-figure collision diagram (head ✗, feet ✗, torso ✓).

**📱 F2P mobile translation:**
- **Generous pickup hitboxes** are a mobile must. Fat fingers, small screens and fast runners mean coins should be collected by a forgiving, torso-centered radius. Runners often go further with **coin magnet** power-ups, collision-radius boosts in disguise.
- **Hitboxes vs hurtboxes:** in mobile action games, players forgive a *big* pickup radius and a *small* damage hitbox (dodges that "should have hit" feel great). Unfair-feeling hits are a top source of rage-quits and one-star reviews.

**🪝 Make it stick:** **"Head floats, feet hop, torso tops."** 🎯

---

## 8. Why Walk When You Can Run? (A): Walking Is NOT Gameplay
**🧠 Big idea:** Every biped walks, but **walking by itself isn't gameplay**. Make walks fast and use them on purpose. Travel should always involve interesting moves.

**📋 The details:**
- Plenty of players **grumble when a hero's walk is sluggish**, so turn the walk into an asset.
- **A sneaky trick: left vs right.** Westerners read **left to right**, and you can use that impulse to steer players.
  - 📐 *The book's figure* ("What the screen shows"): the player starts on the left of the screen. A big **interesting tree** sits on the right edge, with an enemy lurking behind it. Players usually head **toward the interesting object** on the right rather than going **left**, where Rogers hid a goodie just off-screen. The caption's lesson: **use the screen edges to hide surprises and secrets.**
  - Why do this "hateful thing"? Because **making players walk left makes them feel ill at ease**, and you can use that psychologically. For maximum head-messing, make them **travel left for an entire level**. Most players won't be able to say what's wrong, just that something is (literally) *not right*.
- **The klaxon rule:** when you're describing a level walkthrough (→ L09) and you hear yourself say *"and then the character walks through here"*, **loud alarms should go off**. Why? Because **WALKING IS NOT GAMEPLAY!**
  - Don't assume players find **collecting stuff** as interesting as you found **placing** it.
  - Changing the pace is good, but **long stretches of travel are boring**, however pretty the art. Keep even walking interesting.
  - 📐 *The book's figure:* a **flat, empty corridor** vs. the **same A-to-B path with steps up, a plateau and steps down**. Both get the player from A to B, but the second makes the player **mix several moves** instead of just holding forward.
- **"Do you really need a walk?"** Rogers asks teams this regularly. A missing walk cycle sounds odd, but **players always choose a faster move** (jump, roll, dash) over walking.
  - On ***God of War***, Kratos had a **tumble/roll**. The designers rolled around the levels most of the time, even though it **looked stupid**, because it **felt faster** than walking.
  - **If you have a walk, make it fast enough to be useful.**
- **Where walking shines: edges and ledges.** Most players **walk up to an edge** because they're afraid of falling off. Teeters and hoists help (§13), but **the walk is what players use most**, because it keeps them feeling **secure and in command**.
- **The teeter's trade-off:** players **can't attack while teetering** (Rogers has never seen a game that allows it), and a teeter **drops movement to zero**. That's great for preventing a fatal fall and terrible when an enemy is charging at you. *So maybe a walk cycle isn't so bad after all.*

**🎮 Book examples:** The left/right tree figure → screen-edge secrets and directional unease · flat vs stepped path → varied traversal · *God of War* → designers rolling everywhere because walking felt slow.

**📱 F2P mobile translation:**
- **Mobile sessions are 2–5 minutes.** Dead travel time is the enemy of retention. Mobile designs remove walking entirely: tap-to-move, auto-run (*Subway Surfers*, *Temple Run*), instant fast-travel, auto-pathing in RPGs, "skip" buttons.
- **Archero turns "walking isn't gameplay" upside down:** your hero **attacks only while standing still**. Movement becomes a constant *decision* (dodge or shoot?), so walking turns into gameplay.
- **Survivor.io-style games** auto-attack, so **positioning is the gameplay**: every step is a dodge or a kiting choice.
- **Screen-edge secrets** carry over to scrolling map metas (the *Candy Crush* saga map, 4X world maps): put a teaser just off-screen to pull a swipe.
- **Direction psychology:** on mobile, players' thumbs and eyes default to moving *up* or *forward*. A lot of mobile progression maps scroll upward (forward and up = progress). Downward or backward motion can feel like regression.

**🪝 Make it stick:** **🚨 "And then he walks through here…" → WEE-OO WEE-OO.** If the walkthrough has a stroll, the designer has to roll. (Kratos approves, even if it looks dumb.)

---

## 9. Why Walk When You Can Run? (B): Vehicles, Weight, Speed, Dash and Stealth
**🧠 Big idea:** Decide the **speed of your gameplay**, give each movement mode a **clear purpose and a big speed difference**, and handle **weight** carefully, because weight brings skids.

**📋 The details:**
- **Vehicles:** if the character *is* a vehicle (driving, flying, rail shooter) or *rides* one, **driving/flying/jet-skiing must always be faster than the standard walk**.
- **Weight:** large characters (cars, hovertanks, motorbikes) need **weight** to feel real. A car **swings its back end out** around a curve. Leave weight out of the basic movement and metrics and the vehicle feels **"floaty"** and fake.
- **Weight in general** connects any character, car or person, **to the world**. But weight brings **sliding and skidding**, which must be **built into the metrics**.
  - In some games, especially platformers, the **skid is part of movement**. In ***LittleBigPlanet*** it's easy to **skid off a platform** if you land in the wrong spot.
  - Rogers is **torn**: skids frustrate him, but without them movement feels **stiff and artificial**. **Choose what's best for your game.** (A footnote jokes that this is becoming the chapter's running theme.)
- **Ask yourself: is my game's tempo fast or slow?** A fast game should make **most of its verbs fast** too.

| ⚡ Fast moves | 🐢 Slow moves |
|---|---|
| Running | Walking |
| Jumping | Ducking |
| Flying | Crouching |
| Driving | Sneaking |
| Shooting | Swimming |
| Bouncing | Hiding |
| Fighting | Hoisting |
| Spinning | Climbing |
| Falling | |

- **Alternate fast and slow experiences** to keep the pacing interesting (pacing → L09).
- **Running:** ask what it's **for**. Rogers likes a run that is **drastically different** from the walk. In ***Resident Evil***, running isn't just faster travel. It lets you **push through and escape slow-moving zombies**.
- **The dash, the run's cousin:** typically a **burst of extra speed that expires after a set time**.
  - Uses: getting through **timing puzzles** (closing doors, fire jets), or **combat**, either to **escape an attack** or to **land an extra-powerful blow**.
  - To stop players **exploiting** it, give it a **cooldown**: a short wait (**usually a few seconds**) before it can be used again.
- **Stealth, aka "slow walking":** Rogers has mixed feelings.
  - In general he doesn't want the player moving slowly **unless the whole game (or a whole level) is built on stealth**.
  - In games with stealth merely *mixed in*, he ends up **running around blasting enemies** because creeping bores him. Since that isn't how the game is meant to be played, he **loses lots of lives**. The frustration comes from the **agonizingly slow movement**.
  - 📝 *Footnote story:* he once played a well-made game starring a **burly barbarian** loaded with huge weapons, assumed it was a **brawler**, and kept dying. He nearly gave up until a coworker told him he was playing it wrong: *it was a stealth game*. Replaying it stealthily, he finished it. **Lesson: a stealth game's hero must look, or at least act, stealthy.** Mixed signals nearly lost a player who wanted to love it.
- **The creep:** if you include stealthy movement, make it a **significant speed difference** (same principle as walk vs run).
  - Useful when **ducking or behind cover**, **getting into sniping position**, or for **humor** (tiptoeing past a **sleeping dragon**).
  - Make it a **mode the player can switch on any time**, but it works best **with context**.
- **Stealth ≠ slow.** Watch a **SWAT officer or a ninja**: they **move in short bursts**. The stealth happens when they **wait or hide** while something happens, like a clueless guard strolling past. **The tension of good stealth comes from the gameplay of waiting.** (Stealth combat comes later → L10.)

**🎮 Book examples:** cars swinging out on curves → weight · *LittleBigPlanet* → skidding off ledges · *Resident Evil* → running to escape zombies · the barbarian stealth game → mixed signals · SWAT/ninja → stealth as bursts plus waiting.

**📱 F2P mobile translation:**
- **Dash + cooldown is everywhere in mobile action:** dodge rolls in action RPGs, the **Flash** battle spell in MOBAs like *Mobile Legends* (a long cooldown stops spam), dash gadgets in hero shooters. The cooldown is the anti-exploit rule Rogers describes.
- **Weight vs. floatiness:** *Hill Climb Racing* is a whole game about **vehicle weight and physics** (tipping, flipping, momentum). In arcade racers, drift (the controlled skid) is often the core *fun*: the skid turned into a feature.
- **Speed identity:** hyper-casual and arcade games are almost all "fast moves". Strategy and merge games are deliberately slow and calm. Mixing in the wrong speed (a slow stealth section in a fast runner) breaks the genre promise, like the barbarian stealth game.
- **Mixed signals = churn:** if your store creative shows explosive action but the core loop is slow puzzle-solving, you'll pay for installs that churn on D1. (This is the well-known "fake ad" problem: ads promising a game that isn't there.)
- **Stealth as waiting:** timing-based mobile puzzles ("wait for the guard to turn") use exactly this tension.

**🪝 Make it stick:** **"Fast game, fast verbs."** ⚡ And the **sleepy dragon rule**: creeping needs a reason. Nobody tiptoes in an empty hallway. 🐉💤

---

## 10. The Art of Doing Nothing: Idles
**🧠 Big idea:** When the player stops, the character shouldn't freeze. An **idle animation** shows personality and a bit of narrative. Keep it short and smoothly interruptible.

**📋 The details:**
- **Idle** = an animation played while the character **stands still**, kicking in after **a few seconds without player input**. (Rogers likes that the name for the player's inaction doubles as the name of the move.)
- **Sonic the Hedgehog** had the idle that first impressed Rogers: stop playing and Sonic **looks out at you, annoyed, tapping his foot**. *That guy wanted to run!* Funny idles became a **platformer staple through the 1990s**.
- Idles aren't only for laughs:
  - They **convey personality** and even **a little narrative**.
  - At minimum, they add **movement on screen** when nothing else is happening.
  - Apart from character and humor, idles **(usually) give no gameplay benefit**: no ammo, XP or money. **That's fine. Some things should just be for fun.**
  - 📝 *Footnote:* some newer games let you **regain health while idle**, but that comes from *not being shot at*, not from the idle itself.
- **Rules for idles:**
  - **No long, involved animations.** The player may press a button and **cut in** at any time.
  - **An idle that blends badly into the player's next move is a problem**, however long or short it is.
  - **Keep them short and snappy.**
- **Idle idea starter pack** (Rogers' list, grouped):
  - 🔫 **Gear:** twirl, reload or "shoulder" the weapon · adjust armor or pack
  - 🏃 **Body:** stretch or jog on the spot · crack the neck or knuckles · shake dirt off the shoes
  - 🌡️ **Environment reactions:** look around or jump at a phantom sound · shiver from the cold or mop the forehead
  - 🎸 **Personality and fun:** air guitar or a quick dance · whistle while rocking on the heels, visibly waiting · scratch somewhere embarrassing
  - ⏱️ **Waiting-for-you hints:** consult a map or guide, or chat on a phone · glance at a wristwatch · snack or sip a drink · yawn or doze off

**🎮 Book examples:** *Sonic the Hedgehog* → the impatient foot-tap that defined the idle.

**📱 F2P mobile translation:**
- **Lobby idles are prime real estate.** In many hero games the home screen shows your selected hero idling. It's personality, a **skin showcase** ("look how cool this skin's idle is") and a quiet sales pitch.
- **Tap reactions:** letting players poke the lobby character for a reaction line or animation is a cheap, delightful "toy" moment.
- **Idle = the 'nudge':** a character that yawns, checks a watch or points at the Play button after a few seconds of inactivity is a gentle FTUE prompt. It's Sonic's foot-tap repurposed as UX.
- **Skin value:** premium skins often ship with unique idles, victory poses and emotes. The idle becomes part of what you're selling.
- **Not to confuse:** "idle games" (*AFK Arena*'s AFK rewards) are a *genre* where the game progresses while you're away. That's a different meaning, though Rogers' footnote warning applies: be clear whether *being idle* actually earns anything.

**🪝 Make it stick:** **Sonic's foot-tap = "Hey, I'm still here, are you?"** 👟 Idles should be **snack-sized**: a bite, never a buffet.

---

## 11. Might as Well Jump (A): The Five Phases and Game Physics
**🧠 Big idea:** The jump is the most **mysterious, majestic and misunderstood** basic move. Get each phase of the arc right, and use **tweaked "game physics"**, not real physics.

**📋 The details:**
- 📐 **The "slo-mo" jump graphic** (picture it): five stick-figure poses across the ground, numbered 1–5, with a small shadow under each. ① standing, ② a short crouch-launch, ③ rising, then a branch arrow up to **Ⓐ** (a double-jump pose near the top), ④ coming down, ⑤ a landing crouch before standing again. A header drawing shows a jump over a **skull-and-bones pit** onto a **hatched target** on the far platform.

```
                     Ⓐ  (double jump: trigger BEFORE the apex)
                  ↗
          ③ ── apex ── ④
        ↗                ↘
 ①  ②                      ⑤ ─ stick!
rest launch(instant)  short fall  solid landing
```

1. **At rest**: walking, running, etc.
2. **Button press → the jump must happen IMMEDIATELY.** So many jumps are a **response to danger**. Sometimes a short **anticipation** animation sells the leap, but **keep it as short as possible**.
3. **Rise to maximum height quickly.**
   - **A. Double jump:** let the player trigger it **before the apex** (the top of the jump). **Anything past the apex feels wrong.**
4. **The fall is the jump in reverse.** Don't let it **last too long** or it feels **"floaty"**: a negative feeling that also **messes with the player's sense of metrics**. *Exception:* a power-up or ability that lets the player **glide or float** down safely.
5. **The landing** can take a bit longer than the takeoff, but it has to **"stick"** so it feels solid. Rogers dislikes jumps that finish with a **skid or slide**, since a player can nail the jump and still **glide off the platform's edge**. This is one place where **game physics beats real-world physics**.
- **Physics: real, game, or none?** You'd better know the answer for your game.
  - **Real-world physics:** the laws we live with every day (Newton did the heavy lifting in **1687**). Selling them takes some **fidelity to real life**, yet **an exact copy of reality usually plays worse than a tuned version**. Example: **game gravity is not 9.8 m/s²**, whatever the real world says. Some games even use **different gravity constants for different objects**.
  - **Game physics:** programmers **tweak** real values to suit the gameplay. **Run speed, jump height and range, and collision bounce all feel better once adjusted.** Most real people can't jump higher than their **waist**, while the average platformer hero easily **doubles their own height in one bound**.
  - **Unusual settings:** a game in **space**, on a **low- or high-gravity planet**, or with super-powered jumps like ***Jumping Flash***? **Settle all of it in advance** so your **metrics agree with your physics**. **Decide early, then leave it alone**, or you'll cause huge problems (the Three Cs rule again).

**🎮 Book examples:** The slo-mo jump strip · Newton → real physics · *Jumping Flash* → exaggerated jumps that need matching metrics.

**📱 F2P mobile translation:**
- ***Flappy Bird*** is a one-verb jump game. Its brutal, famous feel comes entirely from **tuned game physics**: the gravity and flap impulse are anything but realistic.
- **Mobile input is a tap or a swipe, so responsiveness is everything.** A swipe-up in a runner must jump *instantly*. Even a few frames of anticipation feels like lag on a touch screen, where there's no tactile button feedback.
- **Float vs. stick:** *Helix Jump*'s bouncing ball or a runner's jump arc should feel snappy. Players judge "feel" in the first 30 seconds, and that's your D1 retention.
- **Physics-toy games** (*Angry Birds*, *Cut the Rope*, *Hill Climb Racing*) use exaggerated, consistent game physics. Consistency matters more than realism, because players need to predict outcomes.

**🪝 Make it stick:** **"Launch fast, rise fast, double before the top, drop fast, land with a thud."** 🦘 Or the jump in five words: **Now. Up. (Again?) Down. Stick.**

> ⚠️ **2010 → 2026 (modern jump-feel vocabulary, not from the book):** Today's designers add **coyote time** (a few frames of grace to still jump *after* running off a ledge, named after Rogers' favorite cartoon coyote), **jump buffering** (a press slightly before landing still counts) and **faster fall gravity than rise gravity** (Rogers' "fall like a jump in reverse, but don't float", formalized). They're the exact fixes his principles point toward.

---

## 12. Might as Well Jump (B): Five Jump Types, Air Control, the Jump Zone and the Landing Zone
**🧠 Big idea:** Know the five jump types and your in-air control rules, and **design gaps around how nervous humans actually jump**: from a little way back, aiming well inside the far edge.

**📋 The details:**
- Platformers were **the most popular genre of the 16-bit era**, so jumping has been pushed further than any other player move. Rogers counts **five major ways to jump**:

| Jump type | What it is |
|---|---|
| **Single jump** | one jump, **vertical or horizontal** |
| **Double jump** | an extra vertical or horizontal hop **linked** onto the first |
| **Triple jump** | a **third** jump after the second, usually needing **something to bounce off**, most often **horizontal** |
| **Contextual jump** | a jump that fires **by itself** when the player nears a **specially marked zone**, such as a ledge |
| **Wall jump** | jump **into/toward a wall**, press the button **on contact**, and spring off in the **opposite direction**. **Chaining** wall jumps between **two facing walls** lets you climb. Can be a **natural move** from the start (***Prince of Persia***) or **earned** via a skill or equipment (***Ratchet & Clank***) |

- **Mid-air design decisions:**
  - **Realistic:** no trajectory change after takeoff.
  - **Course correction:** the player can **steer** in the air.
  - **Variable jump:** **height and distance depend on how long the button is held**.
- **Curious facts from years of "hoppy-skippy" games** (Rogers' term for platformers):
  - Players **don't jump from the very edge**. **Edges make them nervous.** They launch from somewhat further back, in a band Rogers names the **"jump zone"**, which may stretch **as far as half a jump's length** from the lip.
  - 📐 *The book's figure:* a **hatched "Jump Zone"** set back from the lip, over a pit labeled **"death™"** full of spikes and skeletons.
  - **What they aim for:** a **safe spot roughly half a jump's length inside the far edge**. **Touching down right on the rim makes them uneasy too!**
  - **So pad your gaps with one extra jump length**, so players land feeling **confident and secure**. 📐 *Figure:* a **"Safe Landing Zone"** hatched well inside the far platform.

```
 [====JUMP ZONE====|edge]   death™ (spikes)   [edge|==SAFE LANDING==]
  ← up to ½ jump →                               ← ~½ jump in →
  => budget the platform lengths with roughly one extra jump length of slack
```

- **Small and floating platforms:** the aim point is the **exact middle**. Leave **enough room to land**. Such platforms are cramped, so **skip any slide after landing**.
- **Nervous players jump again.** If the target is **too small**, they usually **jump themselves to death**. 📐 *Figure:* a chain of shrinking platforms over spikes, ending with a stick figure overshooting and yelling **"oh hell!"**
- **Reserve very tiny platforms for expert jumping puzzles**, normally **late in the game** (difficulty ramp → L09).

**🎮 Book examples:** *Prince of Persia* → wall jump as a natural move · *Ratchet & Clank* → wall jump as an earned upgrade · Rogers' jump-zone/landing-zone diagrams.

**📱 F2P mobile translation:**
- **Contextual jumps rule mobile.** Runners and auto-platformers often auto-vault small obstacles, and many mobile games make traversal **one-tap contextual** because precision jumping on glass is hard. Fewer jump types, more forgiveness.
- **Variable jump (hold-to-jump-higher)** works well on touch: press duration is easy to read even without buttons.
- **Jump zone thinking → touch forgiveness:** thumbs cover the character, screens are small and reaction times vary. Make landing zones *more* generous than on console, and widen windows in early levels for the FTUE.
- **The "oh hell!" chain → difficulty spikes:** a run of tiny targets early in a mobile game is a churn cliff. Introduce precision late, ideally as optional challenge levels or event content.
- **Earned wall jump = progression unlock:** in a meta-progression game, a new traversal move can be a reward (a hero unlock or ability upgrade), the *Ratchet & Clank* model.

**🪝 Make it stick:** **"Players jump from the porch, not the cliff lip, and land in the living room, not on the doormat."** 🏠 Budget one extra jump length for nerves.

---

## 13. Hoists and Teeters
**🧠 Big idea:** **Hoists** (grab a ledge and pull up) and **teeters** (wobbling at an edge) help players get around and stay alive. If you use them, **build them into your metrics**, give them personality, and watch out for the **Wile E. Coyote effect**.

**📋 The details:**
- **Hoist:** lets the player reach a height **slightly above** what their jump allows. **Teeter:** a **warning** that the player is **too close to an edge** and might fall.
- **Not every game has or needs them.** If you use them, **account for them in the player metrics**. A **hoist typically adds up to a full body length** to the jump height.
- **Hang:** the state where the player is in the hoist position but **hasn't climbed up or dropped down** yet.
  - Some games **skip** the hang: the character **auto-hoists** straight up.
  - Others make the hang **part of play**: the hero dangles from objects and surfaces **while timed puzzles and hazards go past**.
- **Character opportunity!** Hoists, hangs and teeters are great moments for **personality**, like a **funny reaction** to hanging on for dear life or wobbling at a cliff edge. 📐 *The book's drawings:* a figure **hoisting** onto a block, a figure **hanging** bored with a "Ho hum" (note the little drop shadow on the ground far below), and a figure **teetering** with windmilling arms and a "!".
- **These animations must loop (cycle)**, because the player may leave the character in a literal **cliff-hanger** for as long as they like.
- **The Wile E. Coyote effect:** remember the classic **Chuck Jones** cartoons, where the Coyote runs off a cliff after the Road Runner, **stands on thin air for a beat**, then drops into a little puff of dust far below? In games, watch out for characters that visibly **stand on or hang off nothing** at an edge (it gets worse with long-bodied characters, §17).
  - 📝 *Footnote:* **Charles "Chuck" Jones (1912–2002)** directed and animated classics like *What's Opera, Doc?*, *Duck Amuck* and *How the Grinch Stole Christmas*, and **created the Road Runner and Wile E. Coyote**. (Rogers: shame on you if you didn't know.)

**🎮 Book examples:** The hoist/hang/teeter drawings · Wile E. Coyote → the hanging-in-mid-air problem.

**📱 F2P mobile translation:**
- **Teeter-style warnings = edge feedback.** In top-down mobile games, an edge "lip", a color warning or a wobble animation tells players they're near a fall. It's essential when a thumb is covering half the character.
- **Auto-hoist is the mobile default:** fewer states to manage on touch. Mobile games tend to remove the hang unless it's a puzzle mechanic.
- **Personality moments sell skins:** a funny teeter or hang animation is the kind of 2-second clip that ends up in ads and social videos.

**🪝 Make it stick:** **Hoist = "+1 body". Teeter = "whoa-whoa-whoa". Hang = "ho hum".** 🧗 And never let your hero pull a **Wile E.** (standing on air for a beat) unless it's a joke on purpose.

> ⚠️ **2010 → 2026:** Modern "ledge forgiveness" tools (auto-grab, ledge magnetism, coyote time) are descendants of the hoist-as-safety-net idea.

---

## 14. What Goes Up, Must Fall Down (Falling, Step by Step)
**🧠 Big idea:** Falling deserves the same slo-mo analysis as jumping. **Warn, give escape options, show the danger, communicate control, make penalties clear and let players recover fast.**

**📋 The details:**
- 📐 **The slo-mo fall figure:** a cliff with numbered poses. ① walking up to the edge, ② teetering, ③ jumping out of the teeter, ④ grabbing the ledge (hoist), ⑤ falling with arms up, ⑥ an air-jump, ⑦ a crash landing (X-eyes, stars, splat), ⑧ popping up with "TADAH!"
- **The eight questions/steps:**
  1. **Approach:** players usually walk to an edge **cautiously**. If they plan to jump, they jump **from the jump zone** (§12).
  2. **Does the character teeter?** It works as a **warning**, but it can also **interrupt the player's control**.
  3. **Allow a jump straight out of a teeter** so players can still reach their goal. **If a missed jump is fatal, show them the pit or death zone as they leap.** **Leaps into the unseen unnerve players badly.**
  4. **Is there a hoist?** Then players can **bail out of a jump** with it or treat it as a **final rescue** from a deadly fall. Some games scale **fall damage by the drop height**, so a hoist can separate a **harmless drop from a fatal one**.
  5. **Can the player control the fall?** Many games permit **course correction**, and a few permit full **steering in mid-air**. **Let the falling animation reveal whether the player is in charge:** a **helpless** fall might **thrash or shriek**, while a **controlled** fall can **recycle the end-of-jump pose**.
  6. **Can the player perform an "air jump" mid-fall?** If so, decide how to **signal** it, and design **many situations** that reward it.
  7. **What happens on impact?** Options:
     - lands on their feet **like a cat**, no damage;
     - lands **hard**, with a **longer recovery animation** that leaves them **vulnerable** to nearby enemies;
     - **bounces like a rag doll and dies**.
     - Whatever you choose, **tell the player early** in the game whether hitting the ground carries a penalty.
  8. **Whether or not they take damage, let them recover fast** so control and movement return at once. **A slow "get up" animation is the worst thing to sit through.**

**🎮 Book examples:** The numbered fall figure (approach → teeter → jump out → hoist → fall → air jump → impact → TADAH).

**📱 F2P mobile translation:**
- **Show the death zone:** in mobile platformers and runners, pits and hazards must be clearly visible *before* commitment. "Blind leap" deaths feel unfair and lead to rage-quits and bad reviews.
- **Fast recovery = fast retry:** the mobile version of "no slow get-up" is **instant restart / continue**. Many F2P games monetize the moment of failure with a **revive** (a rewarded ad or hard currency). That only feels fair if the death was readable and the recovery is instant.
- **Communicate penalties early:** the FTUE should show what failing costs (a life, energy, a streak), the way Rogers wants fall penalties made clear early.

**🪝 Make it stick:** **The fall in 8 beats: "Peek, wobble, hop, grab, flail, flap, splat, TADAH!"** 🎬

---

## 15. Me and My Shadow
**🧠 Big idea:** Don't forget the character's **shadow**. It isn't decoration. It's a **3D positioning tool**, a grounding device, an edge detector, a mood setter and even a gameplay mechanic. Put one in early.

**📋 The details:**
- **Why a shadow helps the player:**
  1. A **reference point in 3D space**, especially for **judging jumps**.
  2. **Grounds** the character in the world and adds to the illusion of **weight and mass**.
  3. **Edge detection:** if the shadow fails to sit flat on the ground, that hints the spot **isn't meant to be stood on**.
  4. **Lighting and mood:** in some **survival horror** games your own shadow can be an unsettling distraction. You literally **jump at your own shadow**.
  5. **Gameplay:** a few games now let enemy AI **react to the player's shadow**, which matters most in **stealth**.
  6. **No shadow, no soul!** (So says **Egyptian mythology**, Rogers notes.)
- **Ways to render a shadow:**
  - a **complex shape** matching the character's **silhouette and motion**;
  - a **rough form** that follows the player;
  - a simple **black spot on the ground**, the **drop shadow**.
  - 📐 *The book's figure:* one figure casting a full, accurate shadow beside a jumping figure with just a little drop-shadow oval under it.
- **The drop shadow** looks **less realistic** but is **very effective** for showing **exactly where the player is**, above all **mid-jump, to predict the landing spot**. However, **small or moving platforms** can make the drop shadow tricky to use as a guide. That's another case of **visual realism clashing with gameplay**.
- **Whatever it looks like, get a shadow in, preferably early in production.**
- **Shadow gotchas:**
  - A character's shadow showing up in **two places at once**. It happens in real life, but in a game it **looks like a bug**.
  - The shadow **casting through surfaces**, especially onto **platforms above** other geometry.
  - Shadows look different under **varied lighting** and across **varied surfaces**. You needn't copy reality, but a **shadow showing up underwater** will strike players as odd.

**🎮 Book examples:** Survival horror → shadow as a scare · stealth games → shadow detection AI · Egyptian myth → no shadow, no soul.

**📱 F2P mobile translation:**
- **Blob shadows everywhere:** most top-down and isometric mobile games put a soft **drop/blob shadow** under every unit. It's cheap on mobile GPUs, reads at tiny sizes, and grounds characters so they don't look pasted on.
- **Jump readability in runners:** the shadow under a jumping runner tells the player where they'll land, which is crucial at high speed.
- **Performance trade-off:** real-time dynamic shadows are expensive on low-end Android phones. Many games fall back to the drop shadow, which is Rogers' "less realistic, more useful" choice made for performance.
- **Shadows as UI:** targeting circles and range rings drawn on the ground under heroes (common in mobile MOBAs and brawlers) are the drop shadow's gameplay descendants.

**🪝 Make it stick:** **"No shadow, no soul, no clue where you'll land."** 👤⬇️

---

## 16. The Water's Fine... or Is It? (Swimming)
**🧠 Big idea:** Water is a classic source of player confusion. **Be consistent (one water rule per environment)**, warn about danger, and decide every swimming rule up front.

**📋 The details:**
- Swimming is still **hard to design around**. Early games **avoided water traversal altogether**, which created a long tradition of **"water = death"**.
- **If you go with water = death, keep the messaging consistent**, or players get confused.
- **Players can't tell safe water from lethal water.** Rogers' rule of thumb: **inside one environment, all the water should behave the same way.** **"No deep end to the pool"**: it is entirely **shallow/safe** or entirely **deep/deadly**.
- **If you *must* have transitional water**, give **clear cues and warnings** about swimming too far. On one game Rogers worked on, a **shark fin** appeared and circled near players who strayed too far out. Ignore the warning and keep going, and a **great white** ate you. (The book's drawing: a huge toothy fish bearing down on a tiny swimmer.)
- **Water gameplay can be great**, because it suits **exploration and exotic environments**. But always settle these **swimming rules**:
  1. **Entering and exiting:** mark water **entrances and exits clearly**: obvious ledges, **sloping ramps**, or those little **pool ladders**. Players should be able to spot **where to climb out** at a glance.
  2. **Underwater or surface only?** Diving is sometimes **unlocked later**, sometimes **never**.
  3. **How long underwater?** Is there a **timer** for **air supply or pressure** that limits time below?
  4. **Does air matter?** Can players **suffocate**? Must they grab **power-ups** or find another way to **refill their air supply**?
  5. **Attacking underwater?** Do they **carry a weapon while swimming**? A normal swim stroke can **look strange** or cause **sorting (render-order) issues** with a weapon in hand.
  6. **Touching bottom:** can they **skim along the seabed**, or does the character **float back up**?
  7. **Land actions underwater?** Can they **pull switches** or open those **submarine hatches** that always seem to turn up in underwater levels?
  8. **Speed:** a **constant speed**, or can they **"swim faster"**?
  9. **Camera:** quick **direction or elevation changes** underwater can make the camera **flip around** as it struggles to match the character's orientation (camera → L06).

**🎮 Book examples:** the "water = death" tradition · Rogers' shark-fin warning followed by the great white.

**📱 F2P mobile translation:**
- **Consistency rule in action:** in many top-down mobile arenas, water tiles **block movement but not projectiles** (*Brawl Stars* works this way). It's one clear, consistent rule players learn instantly.
- **Runners and hyper-casual:** water is almost always a boundary or a hazard. Keep it visually distinct from safe surfaces.
- **The shark-fin warning = telegraphing.** Mobile players need danger telegraphed even louder: color pulses, warning icons, vibration (haptics) before a hazard triggers.
- **Air timers = soft timers:** an underwater air meter is a mini time-pressure mechanic, the same family as move limits in match-3 levels.

**🪝 Make it stick:** **"No deep end to the pool."** 🏊 One water rule per level, and send a shark fin before the shark.

---

## 17. Be Kind to Our Four-Legged Friends (Non-Bipedal Characters)
**🧠 Big idea:** You can play as a hound, an arachnid or a hybrid of the two, but **non-bipedal characters need their own metrics**: turning radius, acceleration, body length and height.

**📋 The details:**
- **Quadruped checklist:**
  1. **Wider turning radius:** bake the extra body length and slower **turn times** into your metrics.
  2. **Four legs usually means faster** than a biped. Account for **acceleration and deceleration**.
  3. **Longer body = more mass** hanging over edges or filling the space. **Adjust the character-to-world metrics.** Be **doubly** careful of the **Wile E. Coyote effect** (a long body hanging half off a ledge looks very silly).
  4. **Many quadrupeds are shorter than an average human**, so account for that in **attacks** and in simple tasks like **opening doors or chests**.
- **Rogers repeats the key point: build your metrics *around* the quadruped.** (The book's drawing: a dog and a spider-creature sharing a heart.)

**🎮 Book examples:** a canine, an arachnid or a hybrid of both → anything goes, as long as the metrics fit.

**📱 F2P mobile translation:**
- **Mounts, pets and vehicles** in mobile RPGs and racers need their own turning and acceleration metrics. A mount that turns like a human feels fake, and one that turns like a truck feels sluggish on a virtual joystick.
- **Big characters in small arenas:** a large or long hero in a brawler needs a hitbox and pathing that fit the map's corridors. Otherwise it gets stuck on corners (Wile E. Coyote's cousin: "stuck on a bush").
- **Short heroes and interactables:** in hero collectors with mixed sizes (tiny critters next to giants), make sure abilities and interaction ranges don't secretly favor one body type unless that's deliberate balance.

**🪝 Make it stick:** **"Four legs, four rules: turn wide, go fast, hang long, stand short."** 🐕🕷️

---

## 18. Using All of the Parts (The Character as the HUD)
**🧠 Big idea:** Players spend most of their time **looking at the character**, so use the character to **communicate status**: health, inventory, upgrades and power. **Keep it clear, expressive and visual.**

**📋 The details:**
- Rogers likes this method because it makes the player's status **extremely clear at all times**. **Every aspect of the player can be shown visually.** Ways to do it:

**🏃 Movement**
- **Subtle clues:** the character's **head turns** to look at **interesting or interactable** objects.
- The character **automatically reaches** for **pickups or door handles**.
- **Positive reactions** to favorite things and **negative reactions** to dangerous ones. You could even have the character **refuse to walk into certain death**.
- **Health shown through movement:** in ***Resident Evil***, wounded characters **limp** and **move slower**.

**👕 Appearance**
- **Health shown through appearance:** many games make the character look **more battered and bruised** as damage builds up.
  - ***Batman: Arkham Asylum***: the more times you "die", the more **ragged Batman's suit** becomes.
  - ***Maximo*** (inspired by ***Ghosts 'n Goblins***): Maximo **loses armor and clothing** as he nears **zero health**.
- **Make status part of the character design:** ***Dead Space***'s Isaac wears a suit whose **glowing spine is the health meter**, plus readouts for **oxygen and weapon status**.
- **Use visual effects for state:** wounded characters **bleed**, **leak oil** or **spark**.

**🎒 Inventory**
- **Gear can live on the character** instead of hiding in an inventory screen. In ***Maximo: Ghosts to Glory***, items like **keys hung on Maximo's belt**, so players always knew what they had without opening a menu.
- **Every big ability upgrade deserves a visual change, whether a new model piece or a new animation.** An **evolving character** keeps things interesting for a player who stares at the same character all game.
- Even better, do what ***World of Warcraft*** does and let players **dress up and customize** characters whenever they earn **new gear and abilities**.

**⚔️ Weapons**
- Rather than a bare **"+3"** on a weapon, give the new power a **visible form**: let it **glow**, **spit fire**, or sprout **runes, scopes, nozzles** and similar **add-ons** that reveal what it can now do.
- If the weapon's look must stay put, **vary the character's animation instead:** a **heavier gun calls for a different firing stance** than a light one.

- **Summary rule: stay clear, expressive and visual and you'll be on solid ground.** (Overall HUD design → L08.)

**🎮 Book examples:** *Resident Evil* limp · *Batman: Arkham Asylum* tattered costume · *Maximo* / *Ghosts 'n Goblins* armor loss · *Dead Space* spine health bar · *Maximo* keys on belt · *World of Warcraft* gear dress-up.

**📱 F2P mobile translation:**
- **Visible upgrades are a core F2P motivator.** *Clash of Clans* buildings and many troops **change appearance at higher levels**. *Clash Royale*'s **card Evolutions** give evolved cards a new look. Players *see* their investment, which drives the upgrade loop (and spending).
- **Gacha "ascension" art:** many hero collectors change a hero's outfit, aura or effects as they ascend or awaken. That's Rogers' "major upgrade = model component" turned into a progression pillar.
- **Screen space is precious on phones**, so putting status *on* the character (glows, auras, color tints, cracked armor) reduces HUD clutter. Health bars over heads are still the norm in fast PvP for clarity. Combine both.
- **Skins vs. readability:** if a skin hides a hero's status cues or signature weapon, competitive players will complain. Keep cues consistent across skins.

**🪝 Make it stick:** **"Wear your stats on your sleeve (and your belt, and your spine)."** 🦴✨ Isaac's glowing spine is the poster child: the HUD *is* the hero.

---

## 19. We Are Not Alone (A): Second Playable Characters and Companions
**🧠 Big idea:** Beyond co-op, games add a **second character**. First decide whether it's **playable (an SPC)** or an **AI companion**. Companions are expensive, but **opposites that need each other** create real attachment.

**📋 The details:**
- **A short history:** early games were one hero against computer enemies or a human rival. ***Double Dragon*** and ***Teenage Mutant Ninja Turtles*** let a friend help, if you didn't mind being bumped into. **Co-op** grew huge in **MMOs and FPS games**, while **console games pushed the other way: the second character.**
- **Decide: playable or companion?**
- **SPC (second playable character):** the player **swaps control** between characters. Whoever you're *not* controlling is run by **AI**.
  - The idea comes from **Japanese RPGs**, where you "control" each party member in battle.
  - It crossed over to US action and sports titles such as ***The Goonies*** (1985) and ***Speedball*** (1988), and to the UK with ***Head over Heels*** (1987).
  - During the **Famicom/NES** era, control went back to **one character for navigation**, partly because of **hardware limits**.
  - ***Mario & Luigi: Superstar Saga*** (2003): you control either brother all game, but they **don't differ much**. In ***Lego Batman*** (2008) the characters have **unique abilities used to solve puzzles** (that's the better use).
  - **"Player zapping"** (the charming name ***Resident Evil 0*** gave to SPC switching): keep it to **a single button press** so players can switch instantly.
  - **Switching between more than two SPCs?** Pick a fast selection method:
    1. **Nearest:** select the SPC **closest** to the player.
    2. **Cycle:** step through a **preset list**.
    3. **Compass-style window:** pick **directly** instead of cycling.
    4. **Location-based:** a **predetermined spot** in the level **switches automatically**.
- **Companion:** controlled by the **game's AI**. Sometimes the companion is also the **second player's** character, as in ***Lego Star Wars*** and ***Army of Two***.
  - **Old AI companions were a pain**: standing **exactly where you wanted to be** and being **useless in fights**. They've improved a lot. Companion roles:

| Companion role | Book examples |
|---|---|
| **Combat help** | *Resident Evil 2*, *F.E.A.R. 2* |
| **Navigation support and advice** | *The Legend of Zelda: The Wind Waker*, *Darksiders* |
| **Puzzle-solving help** | *GoldenEye*, *Mark of Kri* |
| **Healing / rescue when you're in danger** | *Ghostbusters*, *Gears of War 2* |
| **Non-human companions** | the dog **Shadow** in *Dead to Rights 2* (2005), **Dogmeat** in *Fallout 3* (2008), the **Weighted Companion Cube** in *Portal* (2007) |

- **The cost warning:** a companion is a **big asset commitment**. It demands **sophisticated AI** and **animation work on par with the hero's**. The payoff: **smarter, more varied** companions read as **more real**, and **the realer they seem, the more the player cares**.
- **Opposites attract:** give the pair **powers, strengths and weaknesses that both complement and contrast with each other**.
  - ***Resident Evil 2*:** **Claire Redfield** is a capable fighter with two guns. **Sherry Birkin** is a frightened, helpless little girl who can **squeeze into hiding spots** and reach places that hold **puzzle pieces and items**. **Neither could survive without the other.** That's the feeling a companion should create. (Book drawing: dual-wielding Claire next to small Sherry.)
- **Build puzzles and progression around the companion**, so both characters advance by helping each other. The heroes of ***Ico*** and ***Army of Two*** **need** their companion to finish the game. (Book drawing: Army of Two soldiers covering each other, and Ico's horned boy pulling the girl up a ledge.)
- **Establish the relationship early.** Players spend the whole game with the companion, so a strong early bond means you **need less AI programming later** to sell the personality. Strong examples of well-written companions: **Sully** in ***Uncharted: Drake's Fortune*** and the captain in ***Call of Duty 4: Modern Warfare*** (the book prints "Captain Pierce", but the character is **Captain Price**).
- 📝 *Gag drawing:* a sidekick complains that the hero always gets the glamorous companion while he's stuck with a talking squirrel.

**🎮 Book examples:** listed above. Key ones: *Lego Batman* (unique SPC abilities) · *Resident Evil 0* ("player zapping") · *RE2* Claire and Sherry (complementary opposites) · *Ico*, *Army of Two* (companion-dependent progression) · *Uncharted* Sully (personality).

**📱 F2P mobile translation:**
- **Party swapping = SPC switching:** *Genshin Impact* lets you **swap between your party of four** with a single tap on their portraits. That's "player zapping" with a direct-select method, and part of why its elemental combos work.
- **Navigation/advice companions:** *Genshin*'s **Paimon** is a Wind Waker-style guide (love her or not, she carries the FTUE and the exposition). Many mobile games use a mascot guide for onboarding.
- **Pets with gameplay functions:** in *Coin Master* each **pet gives a specific bonus**, and pets in many RPGs heal, buff or fetch loot. They're companions as both gameplay *and* monetization (pet food, pet upgrades).
- **Opposites attract → team synergy:** squad-based mobile games (*AFK Journey*, *Raid: Shadow Legends*, *Squad Busters*) are built on heroes that complement each other (tank + healer + damage). The RE2 lesson scaled up to a roster.
- **Cost warning still applies:** every extra companion costs animation, VFX, AI and balancing for the *whole LiveOps lifetime*. Scope it.

**🪝 Make it stick:** **"Claire shoots, Sherry squeezes."** 🔫🧸 Great pairs need each other, like peanut butter and a jelly that crawls through air vents.

---

## 20. We Are Not Alone (B): Big Casts and the Abilities Matrix
**🧠 Big idea:** With many playable characters, **start from a recognizable stereotype** (players judge by the cover), then make sure **no two characters play the same** by comparing them in an **abilities matrix**, the way TF2 does.

**📋 The details:**
- **Sometimes two isn't enough.** ***Mortal Kombat: Armageddon*** (2006) has **63 unique playable characters**. Large rosters appear across **fighting, vehicular combat, RPG, RTS, FPS and survival horror** genres.
- **Start with a stereotype**, like the classic **fighter / magic-user / thief / cleric** class model. *But what about unique, compelling characters?* Sure, but at the start of many games the player has **no story to go on**. They'll **pick whoever looks coolest** or whoever they **identify with** most. Sometimes players *have* to judge a book by its cover.
- **But characters shouldn't play like stereotypes.** Each should offer **something significantly different** in gameplay.
- **Build an abilities matrix** that lines characters up against each other so **no two have identical abilities**.
- **TF2's matrix:** three **classes** (offensive, defensive, support) × three gameplay **categories** (health, speed, attack):

| Class | Character | Health | Speed | Attack |
|---|---|---|---|---|
| 🗡️ Offensive | **Soldier** | High | Medium | Mid to strong |
| 🗡️ Offensive | **Heavy** | High | **Slow** | **Strong** |
| 🗡️ Offensive | **Scout** | Weak | **Very fast** | Weak to mid |
| 🛡️ Defensive | **DemoMan** | Medium | Slow to mid | Strong |
| 🛡️ Defensive | **Pyro** | Medium | Medium | Strong short-range / weak long-range |
| 🛡️ Defensive | **Engineer** | Weak | Medium | Medium (his **turret** can be upgraded from weak to very strong) |
| ➕ Support | **Medic** | Medium | Medium | Medium (but **heals** and grants **temporary invulnerability**) |
| ➕ Support | **Sniper** | Weak | Medium | Medium (**headshot = instant kill**) |
| ➕ Support | **Spy** | Weak | Fast | Weak (**backstab = instant kill**) |

- **What the matrix shows:**
  - **No two characters have the same specs.**
  - **Weaknesses are balanced by strengths:** the Heavy is slow but hits hardest. The Scout hits weakly but is very fast.
  - Even the most **statistically average** class, the **Medic**, has something **nobody else has**: he heals and grants temporary invulnerability.
  - It plays like **rock-paper-scissors**: each character has both a counter and a soft spot.
  - They also suit **different play styles**: the **Sniper, Heavy and Engineer** each do best when **planted in one spot**, and every class contains exactly one such "rooted" type.
- **More classification axes = better balance.** Gauge characters against:
  - **Movement:** how fast, and what type
  - **Attacks:** how quickly and how often, how hard, and over what range and for how long
  - **Durability:** armor strength and health
  - **Encumbrance** (how loaded down the character is)
  - **Special advantages** (such as healing or puzzle solving)
- **Keep these values and traits easy to edit.** When a **sweeping change** is needed, you shouldn't burn your time adjusting numbers one by one.

**🎮 Book examples:** *Mortal Kombat: Armageddon* → a 63-character cast · fighter/mage/thief/cleric → stereotype starting point · *Team Fortress 2* → the model abilities matrix.

**📱 F2P mobile translation:**
- **The abilities matrix is the backbone of every hero collector and hero-based PvP game.** *Brawl Stars* tags brawlers with **class labels** (tank, assassin, support and so on), *Mobile Legends* has **roles** (tank, fighter, assassin, mage, marksman, support), and *Clash Royale* cards form counter loops. All of them are TF2's grid at scale (dozens to 100+ characters).
- **Rarity is a second axis in F2P**, and a dangerous one. Rarity (Common → Legendary) should mostly change **complexity, uniqueness or flash**, not raw power, or you drift into pay-to-win. A healthy roster lets a cheap common hero counter an expensive legendary in the right matchup (rock-paper-scissors survives spending).
- **"Judge by the cover" is the gacha banner.** Players pull for the hero who *looks* coolest or most relatable, so the stereotype-plus-twist approach (a recognizable archetype with a fresh hook) sells banners.
- **Easily editable values = live balancing.** F2P teams patch hero stats constantly (often via server-side config). Rogers' warning about editability is now a LiveOps requirement.
- **Spreadsheet first:** before drawing a single hero, fill a matrix row. If its row duplicates another hero's, it's a reskin, not a new hero (reskins are fine, but sell them as skins).

**🪝 Make it stick:** **"Heavy is slow but strong, Scout is weak but quick, Medic is average but magic."** ✊✋✌️ If two rows in your matrix match, one hero is a clone wearing a hat.

---

## 21. Who Are the People in Your Neighborhood? (NPCs)
**🧠 Big idea:** NPCs exist **to help or hinder the player**, the center of their universe. Each one must answer **"What does the player need to succeed?"**, be easy to find, look distinct, and ideally do a **gameplay job**.

**📋 The details:**
- 📐 The section opens with a lineup: **the general, the hooker, the innkeeper, the service robot**. NPCs span every profession: **kings** who assign quests and award trophies, **blacksmiths** who craft weapons and armor.
- **The perk of NPCs:** **the player sits at the middle of their world.** They exist **only to assist (or obstruct) you**. Talk about an ego boost.
- **So every NPC must answer: WHAT DOES THE PLAYER NEED TO SUCCEED?** Each NPC needs **a purpose: a role, a job, a reason to be there**. An NPC should supply **at least one** of:
  1. **Objectives** for the player
  2. **Access to new places** where objectives wait (keys, maps, or simply a gesture in the right direction)
  3. **Ways to travel** to those locations
  4. **Rewards** for completed objectives (**economic** or **pride** rewards)
  5. **Tools to defeat enemies**
  6. **Gear to protect** against those enemies
  7. **Answers** to puzzles and problems
  8. **Backstory** about the world and its characters (just keep it **brief**)
  9. **Gameplay instruction** (but **never tell players what they already know**)
  10. **Praise** for the hero's awesomeness (or **cowering in fear** when the hero is a badass)
  11. **Humor**
- 📝 *Gag drawing:* a Lucy-style booth reading "Swords, Potions, Psychiatric Help 5 gp — The NPC is IN."
- **Give waiting NPCs "business."** NPCs are the game world's **extras**, and like film extras they need **business**: background activity that makes life look like it's going on regardless of the stars (eating, chatting, chopping wood, washing floors).
  - **Basic animation loops** are a decent start; **richer activities** are better still.
  - Some games give NPCs **different activities by time of day**.
  - But never **force the player to run after an NPC** just to start a conversation.
  - 📝 *Footnote:* in life sims like ***Harvest Moon*** and ***Animal Crossing***, NPCs **go to bed** when it's late, so many players **never meet** some characters. Don't waste production time on assets players will never see.
- **Placement rules:**
  - Position NPCs **where the player can see them** along the route. Make them **easy to spot**.
  - Mark them on the **mini-map** if there is one. **Players shouldn't have to search.**
  - Unless the story demands it, **no strange locations**: the **innkeeper is in the inn**, the **police captain is at the station**.
  - If need be, put a **big arrow over their head**.
- **Make NPCs physically distinct in dress and body language.** A **soldier** should look and behave nothing like a **gang member**. Lean on every **visual cue** you can so players recall **who has which information** and **who sells that phase plasma pistol** at a good price.
- **No budget for unique NPCs?** Separate them with different **"voices"**, in text or voice acting. ***Bioshock***'s lead designer said players couldn't tell NPCs apart until they spoke with **strong international accents**.
- **Make NPCs stand in for gameplay functions** (not every NPC needs to be a bartender handing out advice in a wild accent):
  - NPCs can **be the store** or the **save system**.
  - **Swapping a mechanic** such as a **switch or crate** for an NPC makes the game seem **less mechanical and less predictable**.
  - ⚠️ Trade-off: dialogue **slows the pace**, since opening a door now means **chatting** rather than turning a handle.
- **More NPC gameplay hooks:**
  - A chat with an NPC can **kick off a puzzle**, **trigger a mechanic** or **begin a countdown timer**.
  - **Protecting an NPC**: escort missions, or defending them in battle arenas.
  - **Not so helpless:** NPCs can **goad and spur the player on**. In ***Darksiders***, the smith **Ulthane** challenges War to a **kill contest**, and a **counter pops up**. It marks the start of the contest *and* switches the player into a **competitive mindset**.
- **Study other games' NPCs**, borrow good ideas, invent your own. **Less predictable NPCs keep players curious** about who's around the next corner. (And around the next corner of the book: **Camera**, → L06.)

**🎮 Book examples:** *Harvest Moon* / *Animal Crossing* → sleeping NPCs and wasted assets · *Bioshock* → accents to tell NPCs apart · *Darksiders* Ulthane → NPC challenge with an on-screen counter.

**📱 F2P mobile translation:**
- **NPCs as store fronts:** mobile shops often have a **shopkeeper character** fronting the daily deals. That's Rogers' "NPC as store surrogate", and the personality makes the shop feel less like a vending machine.
- **NPCs as order boards:** *Hay Day*'s roadside **visitors** who want to buy your goods are NPCs that are pure economy (objectives + rewards). Renovation games (*Homescapes*' Austin, *Royal Match*'s King Robert) use the mascot NPC as the **objective giver** for the meta.
- **Never tell them what they already know:** over-long, unskippable mobile tutorials kill D1. Mascot instructions should be one line, then get out of the way.
- **Mini-map arrows → mobile UI:** quest markers, "!" bubbles and pulsing pointers are the big arrow over the head. Mobile players won't hunt.
- **Ulthane's counter → event challenges:** a character challenging you to "beat my score" with a visible counter is a classic LiveOps event framing (rival NPC leaderboards, "beat the boss's time").
- **Sleeping NPCs warning → time-gated content:** if content is time-locked (night-only characters, limited-time events), make sure enough players actually see it, or the art budget is wasted.

**🪝 Make it stick:** **Every NPC wears a name tag that reads: "HI, I EXIST SO YOU CAN WIN."** 🏷️ No job, no spawn.

---

## 22. 📱 F2P Bonus: Characters as Collectibles, IP and Ad Stars
*(Not a book section. This applies the chapter's principles to modern F2P mobile.)*

**🧠 Big idea:** In F2P mobile, characters do *more* work than in 2010 console games. They are the **collectible**, the **monetizable item**, the **brand IP** and the **face of user acquisition**. Every rule in this chapter gets more important.

**📋 The details:**
- **1. Characters as collectibles (hero rosters):**
  - Rosters turn characters into a **collection meta** (gacha in *Genshin Impact*/*Honkai: Star Rail*, unlock trails in *Brawl Stars*, cards in *Clash Royale*/*Marvel Snap*).
  - Each hero needs a **distinct silhouette + signature item + one-sentence role** (§2, §5, §20). Otherwise the collection blurs into "more of the same" and the desire to collect dies.
  - **Rarity** signals value through **VFX, animation polish, frame/border color and reveal ceremony** (the gacha reveal is an animation moment). Keep **power differences** in check (see §20).
- **2. Readability at thumbnail size:**
  - Test every hero at **store-icon size** (~64 px), **in-battle size** (often under 2 cm on screen) and as a **black silhouette**.
  - Mobile-friendly proportions: **big head, big hands/weapon, small body**, bold outlines, limited palettes with one **accent color** per hero.
  - **Team-color overlays** (ally/enemy rings, outlines) beat relying on the character's own palette, especially once skins enter the game.
- **3. Characters as monetizable IP:**
  - **Skins/cosmetics** (customization from §4) are the fairest revenue: self-expression, no power.
  - The **signature item rule** (§5) protects identity across dozens of skins.
  - **Cross-game IP:** Supercell's *Squad Busters* brings together characters from several of its games (Clash, Brawl Stars, Hay Day and more), and Clash characters have appeared across multiple titles. A strong character can outlive any single game.
  - **Collabs** (licensed characters visiting your game) depend on your art style being flexible enough to absorb them.
- **4. Characters as the face of ads and store creatives:**
  - The hero is the **thumb-stopping element** in the first 1–3 seconds of a video ad, and the star of the **app icon** and store screenshots.
  - **Mascot personality** (§3) decides ad tone: a goofy king in peril (*Royal Match*), a pushy owl (*Duolingo*), a dramatic butler (*Homescapes*).
  - ⚖️ **Ethics:** ads that show gameplay your game doesn't have damage trust and retention, and regulators in some countries have acted against misleading game ads. Make ads that tell the truth about your core loop.
- **5. Character metrics for mobile runners and brawlers (§6–§12 condensed):**
  - **Runners:** lane width, jump/roll clearance, reaction time per obstacle at each speed tier, coin pickup radius (torso-centered, generous), a power-up that visibly bends a metric (higher jump, magnet).
  - **Brawlers/MOBAs:** movement speed, attack range in tiles, hitbox radius, dash distance + cooldown, HP. All in a **live-editable matrix**.
  - **Touch rule:** everything a bit more forgiving than console (bigger landing zones, contextual moves, instant response).

**📱 Quick reference: book principle → F2P application**

| Book principle | F2P mobile application |
|---|---|
| 3 traits + shape language | Mascot and hero personality that carries ads, push copy and the FTUE |
| Silhouette test | 64-px icon test, black-silhouette roster review |
| Customization = ownership | Skins, emotes, base decor: fair monetization and retention |
| Signature item | Identity anchor across skins |
| Metrics / Maximo unit | Tile and lane metrics, metrics in remote config |
| Walking is not gameplay | Auto-run, tap-to-move, Archero's stop-to-shoot, no dead travel |
| Idles | Lobby idles, tap reactions, skin showcases, nudges |
| Character as HUD | Visible upgrades, evolutions, ascension art |
| Abilities matrix | Hero roles, counters, rarity as a separate axis |
| NPC with a job | Shopkeeper fronts, mascot objective-givers, rival event NPCs |

**🪝 Make it stick:** **In F2P, your hero has four jobs: collectible, cash register, brand and billboard.** 🦸💰🏷️📺 If it can't do all four at thumbnail size, back to the sketchbook.

---

## 🏆 Universal Truths & Clever Ideas
1. **Form follows function:** a character's **actions and personality decide their appearance.**
   📱 *So for F2P:* a hero's kit (what they do) should be readable from their look in under a second.
2. **Differentiate characters through shape, silhouette, color and texture.**
   📱 *So for F2P:* pass the 64-px and black-silhouette tests. Skins must not break readability.
3. **Name your hero appropriately** (the name has to match the look).
   📱 *So for F2P:* hero names are store and ad assets. Make them short, evocative and searchable.
4. **Customization increases player attachment.**
   📱 *So for F2P:* cosmetics, naming and decor give you retention *and* ethical revenue.
5. **Use the player character to set the game's metrics** (hero = the world's yardstick).
   📱 *So for F2P:* lanes, tiles and ranges are all in "hero units", tunable via config.
6. **Walking is NOT gameplay.**
   📱 *So for F2P:* zero dead travel in 3-minute sessions. Movement must be a decision.
7. **Use the player character to show their in-game status.**
   📱 *So for F2P:* visible upgrades and evolutions motivate the upgrade loop.
8. **Companions and SPCs demand real effort to do well. Make them complement the hero.**
   📱 *So for F2P:* every companion or pet is a lifetime LiveOps cost. Give each a clear, complementary function.
9. **Balance your cast of playable characters so each one pulls its weight** (abilities matrix).
   📱 *So for F2P:* roles, counters and rarity, and never let money replace rock-paper-scissors.
10. **Give your NPCs gameplay functions.**
    📱 *So for F2P:* the shopkeeper, the order-giver and the rival challenger all do real work.

---

## 🧩 Connect the dots
- **→ L03 Writing the Story:** character *writing* (motivation, names, humor through personality). This level is character *presentation and play*. "Name your hero appropriately" picks up L03's naming advice.
- **→ L04 Paperwork / GDD:** your metrics and abilities matrix belong in the design docs, and should be easy to edit.
- **→ L06 Camera (Three Cs, Part 2):** the camera has to frame your metrics. Underwater camera flipping is flagged here.
- **→ L07 Control (Three Cs, Part 3):** the jump's instant response, variable jump height and SPC switching are control questions.
- **→ L08 HUD:** "using all of the parts" is the character-as-HUD alternative to on-screen meters.
- **→ L09 Level Design:** walkthroughs ("and then he walks through here" 🚨), pacing fast vs slow, jump-zone-aware gap design, hiding secrets at screen edges.
- **→ L10 Combat:** melee and projectile distances, dash for combat, stealth combat.
- **→ L11 Enemies & Bosses:** silhouette and color for enemy vs friend, and enemies scaled in hero units.
- **→ L12 Mechanics & Hazards:** water, pits and platforms all depend on the hero's metrics.
- **→ L13 Power-ups & Rewards:** glide/float power-ups that bend jump rules, visible weapon upgrades, rescue rewards (Maximo's villagers).
- **→ L14 Multiplayer:** silhouettes designed together, TF2 class balance.
- **→ F2P:** **FTUE** (mascot guides, never tell them what they know), **monetization** (skins, emotes, pets, gacha heroes), **retention** (attachment through customization, visible progress), **LiveOps** (live-balanced stat matrices, event NPC challengers, collabs), **UA/ASO** (hero as ad star and icon).

---

## 🔁 Retrieval check (do it closed-book!)
1. What are the Three Cs, and why must they be locked early?
2. What does "form follows function" mean for a character?
3. What do circles, squares and point-down triangles communicate (body vs head)?
4. Name the four jobs of a strong silhouette.
5. List the three character personality types and two rules for each.
6. How did Rogers make Maximo feel heroic without forcing the player to be good?
7. Name the six personalization categories, and which item should NOT be customizable (and why).
8. What are the three tips each for realistic and for stylized characters?
9. List the eight metrics the book says to set, with the jump-height rules.
10. Which collision point does Rogers prefer, and why are head and feet worse?
11. Why is "and then the character walks through here" a red flag, and when *is* a walk useful?
12. Walk through the five phases of a jump. When must a double jump trigger?
13. What is the "jump zone", what do players aim for when landing, and what should you add to your distances?
14. Give the eight steps or questions of a fall.
15. Name five benefits of a character's shadow and three shadow bugs to avoid.
16. What's the rule for water in a single environment, and name five swimming questions to settle.
17. What should every NPC answer, and list at least six things NPCs can provide.

<details><summary>Answers</summary>

1. **Character, Camera, Control.** So much of the game depends on them that a mid-production change ripples everywhere: rework, gameplay problems, even cancellation.
2. The character's **actions and personality determine their appearance**. Design what they do first, then how they look.
3. **Circles = friendly. Squares = strong or dumb** (depending on size). **Point-down triangle body = heroic, powerful frame. Point-down triangle head = sinister.**
4. Shows **personality at a glance**, **distinguishes characters**, marks **friend vs enemy**, makes the character **stand out from the background**.
5. **Humorous:** says funny things (hire a writer), does funny things (no fart jokes), funny ≠ jokes (deadpan contrast, 1960s Batman). **Heroic:** does heroic things that matter, has a specialty, has relatable flaws (ideally turned into gameplay). **Badass (anti-hero):** does everything with style, isn't nice (enjoys it), says cool things but rarely shouts (stoic ≠ personality-free).
6. *Maximo vs. Army of Zin* added **optional villagers being menaced by enemies**. Rescuing them gave a **small reward** (coins, armor), skipping them had **no penalty**, and playtesters loved being a "hero".
7. **Name, appearance, clothing/armor/gear, vehicles, home base, weapons.** The **signature weapon/gear** stays fixed because it's part of the character's identity (proton pack, Dante's coat, Cloud's sword).
8. **Realistic:** avoid exaggerated facial features; invest in movement/rigging (stiff shoulders, ham hands, uncanny valley); human-looking characters will be expected to act human (R2-D2 plays against it). **Stylized:** enlarge features for expression; exaggerate movement (Tex Avery), cheaper than IK/mocap; can be non-human (Ratchet, Sly, Aero).
9. **Height; width of passage (wider than the hero); walk speed; run speed; jump distance** (more than a walk, less than a run, or e.g. 5 widths); **jump height** (jump = ½ height, double jump = 2× height); **melee distance** (arm + weapon); **projectile distance** (reach up to sight range). A hoist adds up to one body length.
10. **Torso:** spans upper and lower body and feels natural when sprinting or leaping through pickups. **Head** → ground collision makes the character look like it floats. **Feet** → mid-air pickups force a jump.
11. Because **walking is not gameplay**: long travel is boring however pretty the art. A walk is useful **near edges and ledges**, where it makes players feel safe and in control (and the teeter stops all movement and attacks).
12. ① at rest → ② **instant takeoff** (minimal anticipation) → ③ **quick rise** (double jump **before the apex**) → ④ **short fall**, not floaty (unless gliding) → ⑤ landing that **sticks**, with no skid.
13. The **jump zone** is where players take off: **up to half a jump's distance back from the edge**. They aim for a spot **about half a jump in from the far edge**. **Add one extra jump length** to distances. Small platforms: aim for dead center, no slide.
14. ① cautious approach (jump from the jump zone) ② teeter? (warning vs lost control) ③ allow jumping out of a teeter; show the death zone, no blind leaps ④ hoist as abort/last-ditch save ⑤ fall control, communicated by animation ⑥ air jump? communicate it, use it a lot ⑦ impact outcome (cat, hard landing, ragdoll), shown early ⑧ quick recovery, no long get-up.
15. **Benefits:** 3D reference for jumps, grounding/weight, edge detection, lighting and mood, gameplay (AI shadow detection/stealth), and (Egyptian myth) a soul. **Bugs:** a shadow in two places, shadows casting through surfaces, weird behavior under different lights or on different surfaces (e.g. a shadow underwater).
16. **One water rule per environment: all safe or all deadly. "No deep end to the pool."** Questions: entry/exit marking, underwater vs surface, time underwater/air timer, does air matter, attacking/weapons while swimming, behavior at the bottom, land actions underwater, swim speed, camera flipping.
17. **"What does the player need to succeed?"** NPCs provide objectives, access to new locations, travel methods, rewards (economic or pride), tools vs enemies, protective gear, answers, backstory (brief), instruction (never what players already know), compliments (or fear), and humor.
</details>

---

## 🎯 Side quests (5–15 min each)
1. **🔺 Shape Doctor (10 min):** Pick 3 mobile heroes or mascots (e.g. one from *Brawl Stars*, one from *Angry Birds*, King Robert from *Royal Match*). Sketch each as 2–3 basic shapes. Which shape language is each one using, and does it match their personality?
2. **⬛ Blackout Test (10 min):** Screenshot a hero-select screen from any mobile hero game. Use a photo editor to fill every character black. How many can you still identify? Which one fails, and what would you change?
3. **🧠 Three-Word Hero (5 min):** Write the three personality traits for 5 mobile mascots (Duo, Tiffi, Austin, King Robert, a Clash Barbarian). Then write how each trait shows in one animation (walk, idle or celebration).
4. **😴 Idle Writer (10 min):** Design 5 idle animations for a hypothetical mobile runner hero ("Sprint Squirrel": impatient, cocky, snack-obsessed). Each must be under 2 seconds and interruptible. Bonus: one that nudges the player to tap Play.
5. **📏 Maximo Units (15 min):** Choose a hypothetical lane runner. Define in "hero units": hero height, lane width, low-barrier height (jumpable), high-barrier height (roll under), jump arc length at base speed, coin pickup radius. Apply Rogers' rules (jump ≈ ½ height, etc.) and note where mobile needs more forgiveness.
6. **🧍 NPC Job Interview (10 min):** Invent 4 NPCs for a cozy farming game. For each, write which of the book's 11 NPC "jobs" they do, where they stand, and how they look distinct. Any NPC with no job gets fired. 🔥
7. **📊 Matrix Mini (15 min):** Make a 6-hero abilities matrix (HP, speed, attack, range, special) for a hypothetical mobile brawler. Check: no duplicate rows, every weakness has a strength, one rooted-in-place hero per class.

---

## ⚔️ Main quest (homework)
**🗡️ Quest A: "The Hero Bible" (90–120 min, 200 XP)**
Design an original F2P mobile hero (for a brawler, runner or hero collector) as a one-page **Character Sheet**:
- 3 personality traits + personality type (humorous / heroic / badass) + one flaw that affects gameplay
- Shape-language sketch + black silhouette at full size **and** at 64 px
- Name (and why it fits the look) + signature item (never customizable) + 3 skin ideas that keep the signature
- **Metrics table** in hero units (height, width, walk/run speed if relevant, jump height/distance or dash + cooldown, melee/projectile range, pickup radius)
- 3 idles, plus how status shows *on the body* (low health, upgraded weapon, max level)
- One companion/pet or NPC with a clear complementary job
- ✅ **Done when:** every section above is filled; the 64-px silhouette is recognizable to a friend who has seen the full art once; no metric is missing a number; you can explain in one sentence what the hero is *best at*. 📣 Post it publicly (#gamedev, #characterdesign) and ask "what's this hero's personality?" If commenters guess your three traits, you nailed it.

**🗡️ Quest B: "Roster Teardown" (60 min, 150 XP)**
Pick a real mobile hero game (*Brawl Stars*, *Mobile Legends*, *AFK Journey* or *Clash Royale*). Build an abilities matrix for 9–12 of its characters (use only stats you can verify in-game). Mark classes/roles, strengths and weaknesses, the rock-paper-scissors relations, and any rows that look too similar.
- ✅ **Done when:** the spreadsheet has at least 6 comparison axes (from Rogers' list: movement speed/type, attack speed/strength/range, armor, health, encumbrance, advantages), every character has a noted counter, and you've written 3 bullet conclusions on how the roster stays balanced (or where it doesn't).

---

## 🔬 Play Lab
1. **🏃 Subway Surfers (10 min):** Look for the character metrics: lane width, which obstacles you jump vs roll under, how the jump arc feels (fast rise? floaty fall?), coin pickup generosity. **Question:** Which Rogers jump rule does the game follow best, and how does Super Sneakers bend the metrics?
2. **⭐ Brawl Stars (10 min):** Look at silhouettes and readability: can you identify every brawler on screen mid-fight? What tells allies from enemies? Check the lobby idle of your brawler. **Question:** Which brawler has the strongest silhouette, and which signature item would you never let a skin remove?
3. **🏹 Archero (10 min):** Notice the stop-to-shoot rule. **Question:** How does this design make movement *gameplay* instead of "walking", and what does that say about Rogers' "walking is NOT gameplay"?
4. **👑 Royal Match or Homescapes (10 min):** Watch how the mascot (King Robert / Austin) is used: idles, reactions, ads, objective-giving. **Question:** Which of the book's NPC jobs does the mascot perform, and what are its three personality traits?

---

## 🗣️ Feynman check
**Explain to a 12-year-old in 60 seconds** why a game hero's size and jump height are the "ruler" for the whole game world, and why a good hero should be recognizable even as a tiny black shadow on a phone screen. (Bonus: work in the phrase "walking is not gameplay".)

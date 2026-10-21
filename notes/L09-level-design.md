# 🏰 Level 9 — Everything I Learned about Level Design, I Learned from Level 9
> 📖 Book pp. 197–241 · ⏱️ ~75 min study · 📱 F2P relevance ★★★★☆ — the 3D-mapping parts translate loosely, but pacing, beat charts, re-use, "weenies", the saga map and the FTUE are daily work for every F2P level designer.

## ⚡ TL;DR — the 30-second version
- **Design top-down, like Disneyland:** world → level → experience → moment-to-moment gameplay. Map the whole world before you sketch a single room.
- **Plan the whole game on one sheet (a beat chart)** before you build anything. It shows clumps, gaps, repetition and production waste in a few hours.
- **Build a few systems and re-use them a lot.** If a system shows up fewer than three times, cut it. Never put the same system in two levels back to back.
- **Steer the player with the space itself:** landmarks ("weenies"), light, color, the squint test, bread crumbs, and a clear visual language. Never strand them, never bore them. Walking is not gameplay, and if something feels long or boring, it is.
- **Graybox first, playground before that, test everything:** pace the level out, alternate big and small moments, and remember the golden rule: if it looks reachable, it must be reachable.
- **The training level matters most and usually gets built last.** Build it early, or better, make the whole game a training level.

## 🗺️ Chapter map
- [ ] 1. What even IS a "level"? — four meanings, seven synonyms
- [ ] 2. The Top 10 Cliché Themes — overused worlds, still useful
- [ ] 3. The Name Game — file names vs player names
- [ ] 4. Learned from Disneyland — top-down worlds, maps, foreshadowing, four goals
- [ ] 5. The Beat Chart — whole game on one sheet
- [ ] 6. Re-using Re-use — few systems, many uses
- [ ] 7. Gary Gygax Mapping Section — alleys vs islands, weenies
- [ ] 8. Dave Arneson Mapping Section — scale, paths, walking, fingers
- [ ] 9. Wrapping Up Mapping — elevations, views, map extras
- [ ] 10. Illusional Narrative — let the player's brain animate
- [ ] 11. Gray Matters — graybox, pacing, verticality, playgrounds
- [ ] 12. Leave the Training Level for Last — (or don't!)
- [ ] 🏆 Universal Truths & Clever Ideas

---

## 1. What even IS a "level"?
**🧠 Big idea:** "Level" is one of game dev's most overloaded words. Know which meaning you're using, because your team, your players and your spreadsheets all use it differently.

**📋 The details:**
- **Four meanings of "level":**
  1. **A place where play happens.** An environment or location ("you're near the end once you reach the Death Star level").
  2. **A slice of space defined by one gameplay experience.** This is the developer's working meaning ("I died a dozen times on the mine-cart level").
  3. **A counter of progress.** Used especially when the gameplay repeats ("I'm on level 20 in Tetris").
  4. **A player or character rank.** Earned through score, XP or skills, as in RPGs ("my WoW character finally hit 70").
- Rogers jokes that "score" is just as overloaded (gaining loot, tallying points, cutting partway through metal...).
- **Why so messy?** Developers have used the word in every context for so long that it's too late to rename it (he suggests "floobit" or "placenheimer"). The likely origin is **Dungeons & Dragons**: players kept going down through stacked dungeon *levels* (think storeys of a tower) until they met the dragon. He wonders why nobody just said "floors."
- **Seven words that often stand in for "level"**, each with its own nuance:

| Term | What it really means | Book examples |
|---|---|---|
| **Round** | The same (or very similar) activity repeated. Can be pure repetition, as in sports, or have variation. | A round of golf or boxing; *Peggle*, *Diner Dash* |
| **Wave** | Combat: enemy after enemy, and you keep doing the same thing (beating up bad guys). A whole game can be waves, or a wave can be one sequence within a game. | *Plants vs. Zombies*, *Defend My Castle*; sequences in *Gears of War 2*, *Uncharted 2* |
| **Stage** | Close to "wave," but stresses clear separations between activities, like rocket stages. Common for **boss phases**. (The book points ahead to "Level 13" here, but bosses are covered in Level 11 of this edition → L11.) | — |
| **Act / Chapter** | Used when the developer wants you focused on story. They sound classier, but they're still levels. | — |
| **Map / location name** | Common in FPSs, where a place name implies a play style. | "Power Plant," "Insane Asylum" |
| **World** | A location defined mainly by its **visual or genre theme**, which can contain several locations sharing that theme. | *Super Mario Bros.* "World 1-1" |

- **Why "World 1-1" should really be "Level 1-1":** early games called their themed levels worlds ("Fire World," "Ice World"). Then the home market demanded longer games, and developers learned to stretch one texture set and one set of mechanics across several levels. So worlds gained sub-sections, and those needed a name: *levels*.
  - Fun fact from the footnote: Mario's World 1 (the Mushroom Kingdom) has four levels. 1-1 is grassland, 1-2 an underground cavern, 1-3 mountain-like platforms, and 1-4 a castle interior.

**🎮 Book examples:** Death Star (level as location) · mine cart level (level as experience) · *Tetris* level 20 (level as counter) · *WoW* level 70 (level as rank) · *Peggle* / *Diner Dash* (rounds with variation) · *Plants vs. Zombies*, *Defend My Castle* (games built from waves) · *Super Mario Bros.* (where "world" got confused).

**📱 F2P mobile translation:**
- In F2P you'll juggle **all four meanings at once**. A *Candy Crush Saga* player is "on level 4,000" (counter). Each of those levels is a hand-built board (experience). Levels are grouped into themed **episodes/areas** (world). Many games add an account or player level too (rank).
- **Write a glossary on day 1 of any project.** In a puzzle game, "level" means a board config. In a 4X like *Whiteout Survival* it means building/player level. In a gacha it means character level. Mixing them up in a design doc wastes hours of meetings.
- "World" in the Mario sense maps straight onto **episodes / chapters / areas** on a saga map: one theme, several levels.
- "Wave" is the native word for **survivor-likes and tower defense** (*Survivor.io*, *Plants vs. Zombies*-style). "Round" fits casual and party games (*Stumble Guys* rounds).

**🪝 Make it stick:** "Level" is the Swiss Army knife of game words. It's a place, a slice, a counter and a rank, and someday someone will stab you with the wrong blade in a meeting.

---

## 2. The Top 10 Cliché Video Game Themes
**🧠 Big idea:** Some level themes have been used so often they're clichés. They became clichés for *good reasons* (cheap hazards, clear color, easy art, built-in mechanics), and you can still use them if you add a twist.

**📋 The details (each theme and WHY it caught on):**
1. **Outer space.** A black TV screen already looked like space, and vector stars glowed on CRTs. Spaceships need no animation and can be simple geometric shapes. Gameplay can be mostly physics, which helped early programmers in the days before dedicated designers and artists. The shooter, the first genre, grew up here, and space delivers all the sci-fi tropes: aliens, ships, computers, future weapons.
2. **Fire / ice.** Three reasons:
   - (a) The hazards were easy to program (flames, slippery low-friction floors). They create timing puzzles that make players **break their rhythm**, which raises the challenge.
   - (b) Both come with a big cast of nasties: lava men, fire-breathing dragons, abominable and frosty snowmen.
   - (c) They add **color**: red and blue made 8-bit screenshots on the back of the box easy to tell apart.
   - Today they're disguised as snowy train wrecks or lava temples. If the colors, feel and mechanics are there, it's still a fire/ice level.
3. **Dungeon / cavern / tomb.** D&D and Tolkien run deep in developer DNA. You get traps, puzzles, mechanics to get around, waves of enemies (nobody explains why they live there) and lots of treasure. Players love raiding dusty tombs even outside fantasy settings. For artists: dramatic lighting, carvings and statues, and cave walls built from cheap repeatable **tiled** textures.
4. **Factory.** A platformer staple. Its mechanics are easy to create, combine, repurpose and tune for difficulty. They spread everywhere: moving platforms, conveyor belts and gears turn up in tombs, circuses and space stations. (Footnote: Rogers counts it as a win for games that *Attack of the Clones* (2002) has a platformer-style factory sequence with conveyors and smashing presses.)
5. **Jungle.** All the flexibility of a dungeon without the drab colors and right angles. Exotic traps (quicksand, spike pits), exotic creatures (crocodiles, snakes, scorpions), and a colorful outdoor setting. It boomed once game art became a focus. Its mechanics are great: swinging vines, branch platforms, and *Frogger*-style rivers of moving logs.
6. **Spooky / haunted house / graveyard.** Ideal when you need mood and story: slow exploration, punctuated by scares that pop out as mechanics or enemies. **Scaring is an art and needs pacing:** quiet, then a distraction, then the scare. Music and sound design are critical and go hand in hand with encounter and puzzle design. Don't tip your hand; choreograph it. Rogers (a home haunted-house builder) says the best scare is one the player *expects* but can't place. It's also **the most adaptable theme**, used in adventures, platformers, RPGs, FPSs and even puzzle games.
7. **Pirate (ship / town / island).** Spooky's spiritual sibling. Great for high action, melee and treasure. Pirate ships give you built-in transport, and pirate skeletons are a bonus. It's a "catch-all" theme that gets bolted onto any genre to boost sales. (Footnote: spooky and pirate often appear together because designers love Disneyland's New Orleans Square, home of both Pirates of the Caribbean and the Haunted Mansion. That's why *Pac-Man World* had both.)
8. **Gritty urban.** Criminals, punks, mutants or supervillains in a **realistic, relatable** setting, and the relatability is the appeal. It's easier for artists to build the world outside their window, and dense detail looks better with every hardware generation. The irony is that players want to play in a mirror of their own street, but the game gives them a choice real life doesn't: **improve it or wreck it**.
9. **Space station.** The sci-fi stand-in for the dungeon, especially in FPS and survival horror, and heavily shaped by the film *Aliens* (1986). Halls full of aliens and broken robots, tech mechanics (laser force fields, factory-style moving platforms), and a showcase for VFX: holographic displays, starscapes.
10. **Sewer.** The modern dungeon. Mario's sewers were spotless, but sewers got grosser as graphics improved. Hazards range from giant rats and albino alligators to filthy water that kills on contact. Factory mechanics move in too (spinning vent fans, sinking platforms). Be glad smell-o-vision never happened. (Footnote: early D&D players ran live sessions in drainage tunnels, the ancestor of LARPing.)

- **The Mexican Pizza Technique** 🍕🌮: Taco Bell once sold a pizza made with Mexican fixings. It sounded gross, but it was surprisingly good. The lesson: **mash together two things that "don't belong together" to get something fresh and original.**
  - In *Maximo: Ghosts to Glory*, a graveyard was split open by volcanic eruptions shooting fire (a "fire graveyard"), and a pirate level was frozen over in ice. Two old clichés combined made something new.

**🎮 Book examples:** *Frogger* (log-river mechanic) · *Mario Bros.* (clean sewers) · *Aliens* (space-station look) · *Pac-Man World* (pirate + spooky) · *Maximo* (fire graveyard, ice pirates).

**📱 F2P mobile translation:**
- **F2P has its own cliché list:** the medieval kingdom/castle (*Royal Match*, *Clash of Clans*), the candy world (*Candy Crush Saga*), the renovated mansion or garden (*Homescapes*, *Gardenscapes*), the farm (*Hay Day*, *Township*), the zombie or post-apocalypse (*Last War: Survival*) and the frozen wasteland (*Whiteout Survival* is literally the "ice level" turned into a whole 4X game). They're clichés because they **test well in ads**: readable at thumbnail size, instantly understood.
- **Rogers' "why" still applies.** Ice and lava still sell on color. On a 6-inch screen and a 2-second ad, strong, distinct palettes per area matter even more than on 8-bit box art.
- **The Mexican pizza is basically how F2P hits get pitched:** match-3 + home makeover story (*Gardenscapes*, *Homescapes*), merge + mystery mansion (*Merge Mansion*), Pokémon + walking around your real city (*Pokémon GO*), board game + casual casino loop (*Monopoly GO!*), a crossover of a studio's own characters (*Squad Busters*). Market researchers sometimes call this **genre/theme blending**.
- **LiveOps uses the cliché list constantly.** Seasonal reskins (winter snow, Halloween spooky, summer pirate/beach) are fast, cheap and readable. *Subway Surfers'* long-running World Tour swaps the city theme on the *same* runner mechanics.

**🪝 Make it stick:** Clichés are the frozen pizza of level design: cheap, reliable, a bit sad. Put **tacos** on it and suddenly it's a new menu item. 🍕+🌮 = 💡

> ⚠️ **2010 → 2026:** "Easy to program" was a big reason these themes spread on 8-bit hardware, and that matters less now. What still holds: **readability, color identity and built-in mechanics**. On mobile you add **"does it work in a 15-second ad and a 64px store icon?"**

---

## 3. The Name Game
**🧠 Big idea:** Every level has **two names**: a dull, precise **file name** for the team and a evocative **player-facing name**. Each has its own rules.

**📋 The details:**
- **File names (for programmers and the pipeline):**
  - **Keep it short, around 8 characters max.** Easy for the team to remember and lighter in code.
  - **Skip the wit.** Players never see it. "factory 01" tells the team the two things they need: **where** and **in what order**.
  - **Abbreviate complex names systematically:** e.g. `fac01s01` = factory 1, section 01.
  - **Never reuse an abbreviation for two meanings.** If "sec" means *section* in one place, it can't mean *secret* elsewhere.
  - **Organize:** keep files in folders teammates can find, and use shared file / version-control tools so nobody changes things without others knowing.
- **Player-facing names** need to fit the level's feel, just like naming characters. Four schools of thought:

| School | Example | 👍 Pros | 👎 Cons |
|---|---|---|---|
| **Functional** (numbers) | "Level 3" | Retro, no-nonsense, signals progress | Players don't know the top number, so they can't judge overall progress; no personality |
| **Location** | "Police Station," "Sewer," "Science Lab" | Instantly sets expectations of what you'll see and meet | Those expectations come from the *player's* knowledge, which may not match your plan, so choose your words carefully |
| **Descriptive** | "A Nasty Surprise," "Death from Above" | Reads like book chapters; great for **foreshadowing** and tone | Don't give away the surprise. (Sneaky trick: *Dead Space* hid a secret message in the first word of each level name) |
| **Punny** | (late-'90s fad, started by *Crash Bandicoot*) | Fun, memorable | Only for games with a sense of humor |

- **A level's name is its first impression**, so make it count.

**🎮 Book examples:** *Dead Space* (level names form a hidden message) · *Crash Bandicoot* (kicked off the punny-title trend).

**📱 F2P mobile translation:**
- **Functional naming dominates puzzle F2P, and here the "con" becomes a "pro."** With no visible final number, "Level 2,500" works as a **bragging badge**, and players chase numbers with no ceiling. The saga map itself does the "location" job (themed episodes) on top.
- **Episodes, events and seasons** get descriptive or punny names, because they're marketing beats ("Spooky Season," "Treasure Hunt").
- ⚠️ **Puns die in localization.** F2P games often launch in many languages on day one. A pun that kills in English may be gibberish in Japanese. Keep puns in art and characters, and keep important names translatable.
- **Modern file names = level IDs in config/remote data.** Rogers' rules still apply: short, consistent, no clashing abbreviations. Add **versioning** for A/B-tested level variants (e.g. a hypothetical `L0143_v2_hard`). When analytics shows a churn spike on "level 143," you need to know *which* version of 143.

**🪝 Make it stick:** A level is like a baby with two names: the **hospital barcode** (`fac01s01`) and the **name on the birthday cake** ("Death from Above"). Don't print the barcode on the cake.

---

## 4. Everything I Learned about Level Design, I Learned from Disneyland
**🧠 Big idea:** The *level* is where the story should be told, and theme parks are masters of using space to tell stories and move people from one thrill to the next. Copy Disneyland: build top-down, show a map, foreshadow everything, and give every level a clear goal.

> "The world is the best narrator." — Ken Levine (creative director of *BioShock*, whose undersea city of Rapture Rogers calls the gold standard of level design)

**📋 The details:**

**4a. Space tells stories**
- Using space to tell a story is ancient; architecture has done it for centuries.
- Early in his career, Rogers found theme parks answered his questions about telling a story *and* informing the player at the same time. He studied park maps (he'd collected park brochures on family road trips as a kid) and saw that parks are laid out to **move guests from adventure to adventure as efficiently as possible**, just like a good level.

**4b. How Disneyland was built (and why it's a game world)**
- Walt Disney loved miniature trains, so **Disneyland was built around a railroad track**. The imagineers filled the middle with **five "lands,"** each from one of Walt's passions:

| Walt's passion | Became |
|---|---|
| History | **Frontierland** |
| Progress | **Tomorrowland** |
| Nature | **Adventureland** |
| His animated films | **Fantasyland** |
| Nostalgia for his childhood hometown | **Main Street** |

- The lands are filled with **attractions** that let guests ride through the Disney films themselves: stories told in physical space, with careful attention to every **scene** the guest passes.
- **The four-tier hierarchy** (memorize this one):

```
DISNEYLAND:   World ──► Land  ──► Attraction  ──► Scene
VIDEO GAME:   World ──► Level ──► Experience  ──► Moment-to-moment gameplay
```
  - The park contains lands; each themed land contains attractions with their own story; each attraction's story is made of scenes.
  - The game world contains levels, each holding its piece of the story; each themed level contains **experiences** that move the player through; **moment-to-moment gameplay** connects those experiences and keeps the player engaged.
- Working **top-down** this way tells you the world's boundaries and what lives inside them. To do that you need a **game world map**.

**4c. The game world map**
- Old PC games shipped lavish maps printed on parchment, cloth or fake leather. Yours can be a **simple flowchart** (Rogers mentions Visio). It just needs to show **where the player goes and what they'll find there**.
- A map can also define the **spatial relationships** between places, which helps you decide **how the player travels and in what order**.
- The map helps **the team** (everyone sees how levels connect) **and the player**:
  - **Donkey Kong**: before play, a screen of stacked Kongs with heights (25m, 50m...) asks "how high can you get?" Knowing up front how many stages you must climb **whets the appetite and sets a goal**.
  - **Ghosts 'n Goblins**: a map with a little "you are here" player icon, then the camera **pans across the whole world**, teasing what's coming. (Rogers remembers wondering what was in the ice level at the far end.)
  - **Mortal Kombat**: you don't travel anywhere, but the character-select grid shows most fighters **locked**. The locked windows foreshadow that many opponents await, and unlocking them triggers **gotta-unlock-every-one** collector motivation. *A map can show progression even without travel.*

**4d. Foreshadowing & anticipation**
- **Foreshadowing** gets players excited about a level's activities and dangers. **Building anticipation matters as much as delivering.** In Rogers' haunted houses, a scare lands *harder* when the victim knows it's coming; the waiting drives them nuts.
- Tools: **lighting, sound effects and geometry** make a place look foreboding. Nothing says "beware" like scattered **skulls and skeletons**, and in Rogers' words you can never have too many skeletons.
  - Footnote nuance: you *can* overdo filth and gore. Blood-splattered rooms don't scare him. A truly gross bathroom would, but only because of **smell and touch**, two senses games can't use. Corpses hung like ornaments look... festive.
- **Posters:** guests pass posters for attractions on the way into the park. They don't understand them yet, but the posters plant future adventures. In *BioShock*, ads for superpower-granting **plasmids** greet you when you enter Rapture, and they only click once you've learned what plasmids do.

**4e. The level as a storyteller**
- Like a map, **the level itself should carry the player from story point to story point.** The imagineers compared park design to filmmaking: a logical flow of scenes, and skipping a scene is like sending the audience out for popcorn mid-movie. (Paraphrased from *Disneyland: The First Quarter Century*, 1979.)

**4f. The four goals (Disneyland's four kinds of story = the player's goal in a level)**

| Goal | What it feels like | Storytelling tools | Gameplay focus | Examples |
|---|---|---|---|---|
| **Escape / Survive** | You're somewhere you have no business being (ghost-infested manor, crazy factory where one misstep turns you into cat food) | **Action** and **location**; moves fast | **Movement and combat** | Haunted-house-style attractions |
| **Explore** | Discover the story at your own pace, in your own order | **Freedom of mobility** and **conversation** | Wandering, talking | *Zelda: The Wind Waker* island village; *Fallout 3*'s Megaton |
| **Educate** | Learn something real. Hasn't fully crossed into entertainment games because "educational" carries a kids/non-gamer stigma | **Observation** and **imitation** | Watching, copying | *Assassin's Creed 2* (Italian Renaissance history); Guitar Hero's makers promising to teach real guitar |
| **Moral** | Learn a lesson via consequences | **Choice and consequence**, and the choices must **change gameplay** | Decisions | Mr. Toad's Wild Ride (drive recklessly → crash → literally go to hell); *Force Unleashed*, *Fable 2* (good/bad endings, but rarely within levels); *BioShock* (an early level is a horror show warning about plasmids, the very thing you're injecting for powers) |

- **Ask a second question too: "What is the player trying to achieve on this level?"** Some levels are there purely to **teach one move** (jumping, combat, driving, or the game itself). The answer shapes and focuses the moment-to-moment gameplay.

**🎮 Book examples:** *BioShock* (world as narrator, plasmid posters, moral level) · *Donkey Kong* (how-high map) · *Ghosts 'n Goblins* (you-are-here + pan) · *Mortal Kombat* (locked portraits) · *Wind Waker*, *Fallout 3* (explore) · *Assassin's Creed 2*, *Guitar Hero* (educate) · *Force Unleashed*, *Fable 2*, Mr. Toad (moral).

**📱 F2P mobile translation:**
- **The saga map IS the Disneyland map.** In *Candy Crush Saga* a winding path snakes through themed episodes, and you see your avatar ("you are here") and the next themed area peeking in. That's *Ghosts 'n Goblins'* pan and *Donkey Kong's* "how high?" rolled into the main menu. The F2P hierarchy:
  ```
  Game ─► Area/Episode (themed "land") ─► Level (board) ─► Moves/turns (moment-to-moment)
  ```
- **The weenie = the next unlock** (more in §7). Show the locked next episode, the next *Clash Royale* arena on the trophy road, the gold reward at the end of a battle pass track, the half-renovated next room in *Homescapes*. Visible-but-locked = **the Disneyland poster** = anticipation that drives "one more level."
- **Mortal Kombat's locked grid** lives on in every **collection screen**: silhouetted heroes in a gacha roster, card collections in *Marvel Snap* or *Pokémon TCG Pocket*, album sets in *Monopoly GO!* and *Coin Master*. Showing the empty slots is the hook.
- **Foreshadowing difficulty in puzzle games:** several big match-3s (e.g. *Royal Match*, *Candy Crush Saga*) put a special **"Hard Level" / "Super Hard Level" banner** on spike levels. That's Rogers' haunted-house lesson exactly: telling players the scare is coming makes the win feel bigger and the fail feel fair.
- **Teasers and "coming soon" banners** for LiveOps events are the park-entrance posters.
- **The four goals in F2P:**
  - *Escape/survive* → survivor-likes (*Survivor.io*), runners (*Subway Surfers*, *Temple Run*), "save the king from the trap" mini-levels in match-3 ads.
  - *Explore* → *Pokémon GO* (your real neighborhood), open-world gacha (*Genshin Impact*).
  - *Educate* → *Duolingo* (the gamification benchmark; observation + imitation is literally how lessons work).
  - *Moral* → interactive-story apps (choices with consequences); rare in core F2P loops, so it's an open design space.
- **"What's this level's objective?"** In match-3, every level has an explicit goal type (collect X, clear all jelly, bring items down). Make sure each one also has a *design* objective: "teach the new blocker," "relief level after a spike," "monetization pressure point."

**🪝 Make it stick:** **"World, Land, Ride, Scene"**, or picture Mickey **holding a map, a poster and a skeleton**. Map = where you're going, poster = what's coming, skeleton = beware. 🗺️📜💀

---

## 5. The Beat Chart
**🧠 Big idea:** A **beat chart** (borrowed from Hollywood writers and directors) puts your *whole game* on one grid: one column per level, one row per element. In a few hours it exposes clumping, gaps, repetition and production waste before a single asset exists.

**📋 The details:**
- By now you have the tools to build a universe: character, character actions, story, level themes and a world map. The beat chart organizes them.
- **Minimum rows (11):**
  1. **Level name** (player-facing)
  2. **File name**
  3. **Player's objective**
  4. **Story beat**
  5. **Play style** (gameplay type)
  6. **Enemies**
  7. **Mechanics**
  8. **NPCs**
  9. **Bonus materials** (unlockables, rewards)
  10. **Time of day**
  11. **Color mapping** (dominant palette)
- It reveals **gaps and clumping**, so you can reshuffle elements to spread them out and make the game feel **organic**.

**The worked example: *Relic Raider*** (hero Jake Hunter, a globe-trotting treasure hunter). The book's chart (rebuilt here):

| Element | Shanghai / `Roof01` | Jungle 01 / `Jung01` | Jungle 02 / `Jung02` | Temple of the Hidden Skulls / `Jung03` | Mountain Escape! / `Road01` |
|---|---|---|---|---|---|
| Location | Shanghai rooftops | Jungle | Jungle | Ancient temple (interior) | Mountain pass |
| Gameplay | Stealth, shooting, jumping | Shooting | Fighting | Platforming, jumping | Driving |
| Objective | Find crime boss Wu-Fan | Jungle part 1 | Jungle part 2 | Reach chamber of skulls | Car chase |
| Story beat | Jake steals medallion, gets caught by Wu-Fan | Jake explores jungle | Jake finds temple of skulls | Jake places medallion in statue; Nazi general Hauser shows up | Jake steals truck, flees Nazis |
| New weapon | .45, machine gun | Machete | No | No | No |
| Enemies | Tong thug, axe man, machine gunner | Jaguar, native (spear) | Jaguar | Jaguar, Nazi soldier | Nazi truck, jeep w/ machine gun |
| Mechanics | Swinging rope, zip line | Swinging rope, zip line | Zip line | Spiked pits, blow darts, crushing walls, fall-away floor | Falling rocks |
| NPC | Wu-Fan | Guide | None | Hauser | None |
| Bonus | Art gallery 1 | Art gallery 2 | Art gallery 3 | Alt. costume | Art gallery 4 |
| Time of day | Night | Night | Night | Day | Day |
| Color | Blue/red | Green/brown | Green/brown | Green/gray | Tan/sky blue |

**🔍 The problems the chart exposed (try spotting them before reading!):**
1. **Inconsistent naming.** Generic titles ("Jungle 01") next to evocative ones. Give them all descriptive names like "Temple of the Hidden Skulls."
2. **`Roof01` and `Road01` are easy to confuse.** Rename the Shanghai one `Shang01`. The more distinct, the better.
3. **`Jung03` barely shares assets with the jungle levels**, so call it `temp01` to show it's a different place.
4. **Two jungle levels back to back.** Merge Jung01 and Jung02 into one better jungle level?
5. **Driving arrives late**, after four on-foot levels. Bring it in earlier or cut a walking level.
6. **The jungle objectives are vague** ("part 1," "part 2") while the others are specific. Give the player a real purpose.
7. **Weapons ramp up fast, then dry up.** That's a warning sign you need more interesting things to do and more toys.
8. **Enemies clump at the start**, so spread and repurpose the enemy AI. And Jungle 02 is a "fighting" level with only a jaguar, which isn't a good fighting enemy.
9. **Repurpose mechanics like enemies.** The temple's unique traps cost time and money. Can they be re-used elsewhere?
10. **Art galleries are a weak, repeated reward.** Find more varied bonuses.
11. **Three night levels in a row.** Vary it: morning, evening, rain, snow... And a temple *interior* is dark anyway, so "day" is meaningless there.
12. **Too much green in the color map.** Diversify the palette or every level will feel the same.
- **Payoff:** a few hours of looking at patterns improved **production, gameplay and art** before anyone built a single asset.

**🎮 Book examples:** the fictional *Relic Raider* (an Indiana-Jones-style pastiche) is the whole case study.

**📱 F2P mobile translation:**
- **Match-3 teams live in beat charts; they're usually spreadsheets.** A typical puzzle level sheet has columns like: level #, level ID, goal type, move count, board shape, **new element introduced**, blockers present, **target difficulty** (e.g. intended win rate or attempts-to-win band), reward, area/theme, palette, and monetization notes (is a booster offered? is this a spike?).
- **The beat chart reveals F2P's classic sins:**
  - *Clumping* → three hard levels in a row. Players churn at the wall.
  - *Gaps* → 40 levels with no new blocker. Boredom.
  - *Late introduction* → your coolest mechanic first appears at level 200, after most of your installs have already churned.
- **Saw-tooth difficulty** (a common puzzle-game pattern, not from the book): difficulty climbs over a short run of levels, peaks on a "hard" level, then drops to an easy **relief level** before climbing again. On a beat-chart row it literally looks like teeth: `▁▂▃▅█▁▂▄▆█▂▃▅▇█`. It's Rogers' big/small moments (§11) turned into a spreadsheet.
- **Blockers introduced one at a time:** the "New weapon" row becomes "New blocker." Good practice: an **intro level** where the new piece is the star (easy, obvious), a few levels mixing it with known pieces, then combinations, then a hard level that tests mastery. Never introduce two new things on the same level.
- **Hard levels and money:** hard levels are where players most often run out of moves *just short* of winning, and that's when "continue for extra moves?" or pre-level booster offers convert. That's why the "hard" row deserves real care. **Too many spikes = churn; spikes that feel unfair = rage-quit and 1-star reviews.** Ethical tuning means hard levels are winnable without paying, and the beat chart is where you guarantee relief follows pressure.
- **LiveOps calendar = beat chart over time.** Columns are weeks; rows are event type, featured reward, theme/palette, monetization offer, required content. Rogers' "three night levels in a row" becomes "three leaderboard events in a row" or "three blue-themed events in a row." Vary it.

**🪝 Make it stick:** A beat chart is an **X-ray of your game**. You can't see the broken bones from outside, but on the X-ray, three night levels in a row glow like a fracture. 🦴

---

## 6. Re-using Re-use
**🧠 Big idea:** Each gameplay system (platforming, shooting, driving, stealth) adds variety, but each is a separate build with nothing in common with the others. Build **fewer systems** and squeeze them hard.

**📋 The details:**
- One of the most important design decisions you'll make: **how and when to re-use gameplay systems** across the game.
- **🔺 The Rule of (at least) Three:** if a game system is used **fewer than three times** over the game, it isn't worth having.
- Re-use doesn't mean copy-pasting the same section. Be clever: **repurpose art assets** on top of a shared system.
- **Vehicle example:** one vehicle system can drive a jeep, a hatchback *and* a sedan. The *system* costs far more than the three cars built on it. But recycling has limits: the car system **can't** handle a hovercraft or a motorcycle. They're also ground vehicles, but they behave very differently.
- **Design vs. programming is always a trade-off.** Learn your systems' limits and craft the game to fit them. A **small set of reusable systems** maximizes the game *and* the schedule *and* the budget. **Use the limits to your advantage.**
- **Role model:** Japanese developer **Treasure** (*Gunstar Heroes*, *Dynamite Headdy*, *Ikaruga*) is great at milking a small palette of mechanics.
- **On the beat chart: never put the same gameplay system in two levels back to back.** The only exception is a game that is *about* driving; otherwise a driving level should never be chased by another driving level.
- **Art re-use too:** work with artists; simply **re-coloring and re-texturing** items makes them look different from level to level.

**🎮 Book examples:** vehicle system (jeep/hatchback/sedan vs hovercraft/motorcycle) · Treasure's games (small mechanic palettes, used deeply).

**📱 F2P mobile translation:**
- **Re-use is F2P's whole economic engine.** A match-3 might ship thousands of levels built from a set of blockers and boosters that's tiny by comparison. Every new level is a *combination*, not a new system. Each blocker easily passes the rule of three; it may appear in hundreds of levels.
- **LiveOps event frameworks:** build an event *system* once (a points race, a collection album, a team chest, a step-based "path" event), then **reskin and retune it** many times a year. That's the vehicle system with a new car body each month. Spend engineering on frameworks, not on one-off events.
- **Know the hovercraft line:** a "collect X items" event framework can't magically run a real-time co-op boss raid. Pitching features that "just reuse the event system" when they behave totally differently is the classic F2P scoping trap.
- **No back-to-back systems** → in LiveOps, alternate event types (competitive → collection → cooperative) so the calendar doesn't feel like the same ride twice.
- **Art re-use:** recolored blockers per theme, seasonal palette swaps of the same board pieces, *Subway Surfers*-style city reskins on one runner core.
- **Rule of three as a cut test:** if a feature in your F2P design doc touches the player fewer than three times in their first month, ask whether it pays for its build cost.

**🪝 Make it stick:** **"Three or flee."** If a system can't show up at least three times, it's a one-hit wonder eating your budget. Treasure Co. = the chef who makes 12 dishes from 5 ingredients. 👨‍🍳

---

## 7. The Gary Gygax Memorial Mapping Section — Alleys, Islands & Weenies
*(Named for D&D co-creator Gary Gygax, 1938–2008. Designing D&D dungeons launched many designers' careers, Rogers' included.)*

**🧠 Big idea:** 3D levels come in two basic shapes: **alleys** (directed paths to a goal) and **islands** (open spaces explored in any order). Each has strengths. Either way, guide players with distinct zones and **weenies**, because players *will* get lost or break things.

**📋 The details:**

**7a. How people start maps**
- *Metal Gear*'s original designers built levels from **Lego**. Many teams prototype fast in 3D tools (Maya, 3D Studio Max). One designer Rogers knows sculpted levels in **clay**. Rogers uses a **ream of blank paper, a sharp #2 pencil and an eraser**, like making D&D dungeons. *Any medium works; just start.*

**7b. Alleys**
- **Alley = a directed experience.** The player has a goal, and the level is built to get them there. It can be **narrow** (*Portal*) or **wide enough to feel free and spacious** (*Call of Duty: Modern Warfare 2*).
- **Seven advantages of alleys:**
  1. **Camera trigger zones** are easy to place, because you know where and how the player enters and moves.
  2. You can use **dramatic camera moves** to inform the player or heighten the action.
  3. You can **remove camera controls** entirely so the player focuses on play.
  4. You can **script triggered events**, because you know where the player is looking.
  5. **Combat and traps are easier to choreograph.**
  6. **Bottlenecks** can stop backtracking.
  7. You can use **illusional narrative** (§10) to tell the story.
- 🖼️ **Book figure: "An example of alley level design"** (a hand-drawn *Maximo* graveyard map on graph paper). A long vertical corridor with "cursed" ground along both edges and "slopes down" at each end. Along it: water (H2O) pools, a **treasure chest that rises from the water**, **steps that rise out of the water** to lead to the cemetery gate, crypts that are **monster generators** with slanted roofs Maximo can't climb, a **switch column** that opens a gated crypt holding an **armor-up** (and also activates all the monster generators!), a **flat-topped crypt** Maximo can jump on to grab a weapon power-up, sarcophagi with smashable lids, fences, and holy ground. **Legend:** Z = zombie, SZ = swamp zombie, SG = swamp gas, C = coins, A = armor up, P = weapon, heart = health, T = treasure chest, HG = holy ground, SW = switch, plus symbols for crypt generators and sarcophagi. *Lesson: a good alley map is dense with cause-and-effect notes (switch → gate opens → enemies spawn) and side sketches that explain tricky spots.*

**7c. Islands**
- Rogers finds **islands harder** to design and build:
  - The **camera** must cope with many widths and heights.
  - **Scripted events** are unreliable, since the player may be looking the wrong way.
  - Players can **walk around combat** entirely.
  - Stagecraft tricks like **façades** fail, because geometry is seen and touched from every angle.
- **But islands give freedom of order.** *Super Mario 64* was an early example: climb the mountain, explore the hills or swim into underwater grottos in any order. Islands grew into a whole genre, the **sandbox** (*GTA IV*, *Burnout Paradise*, *Halo*'s multiplayer maps are giant island playgrounds).
- 🖼️ **Book figure: "An example of island level design."** A roughly square courtyard with a **fountain** and a **statue** in the middle, enemies scattered around, and a "break"-able centerpiece. Doors lead in from area 1 and out to areas 1 (upper), 3 and 4, with a "drop down to 3." Notes say enemies **re-spawn in waves after events** ("3 reload after PG fight," "reload after statue break") and something **spawns upon the last sword key**. A side room holds a red crystal and a "spirit of war" item. *Lesson: an island map is a hub. Many entries and exits, encounters triggered by events rather than by a fixed path.*
- **Divide sandboxes into distinct areas**, like Disneyland's lands, to help **navigation and orientation**. Disneyland works hard to make each land visually unique. **Frontierland** has water troughs, wooden cigar-store figures, wagons, cactus, and the classic game standbys: crates and barrels. (Its main street was originally dirt until guests complained about dusty clothes.) **Even the trash cans are themed**: wood-look in Frontierland, futuristic silver in Tomorrowland. You always know where you are, even while throwing out trash.
- *Crackdown* does this in its sandbox Pacific City. Each zone is themed for navigation **and** matches the gang you must topple: the Shai-Gen corporation runs Chinatown, while the tech-savvy Volk occupy gleaming skyscrapers.

**7d. Weenies 🌭**
- The imagineers pioneered big **landmarks** (Sleeping Beauty's Castle, the Matterhorn, Space Mountain) they called **weenies**. Walt coined the term from the hot dog that off-screen animal trainers waved to lure dog actors across a set.
- **A weenie grabs attention and pulls people toward it.** It doesn't have to be huge: a statue, a bridge, a building, or a natural element like a distinctive tree or rock.
- **String weenies along the path** so the player moves from one to the next. In 3D maps, **mark the path clearly with weenies.**
- 🖼️ **The house-loop story (three small top-view diagrams):**
  ```
  TOP VIEW: a road running left→right, with a U-shaped detour dipping
  down behind a house (⌂) and coming back up to the same road.

  What players did:   road ──► down the U, around ⌂ ──► back up onto road
                      ──► turned LEFT and walked back where they came from ◄──
  The fix:            put a landmark (W) at the U's exit, pointing onward ──► (W)
  ```
  Players walked down the road, spotted a path behind a house, looped around it looking for treasure, then **came back out onto the road and walked back the way they came.** Fix: a **landmark** placed (and marked on the map) at the exit so players could re-orient and keep going forward.
- **⚠️ Universal truth:** the player will **always** find a way to break your game, on purpose or by accident. Tackle it head-on: **make them play the game the way YOU intend, and give them plenty of help finding the way.**

**7e. Islands for multiplayer, hybrids & sandbox prompting**
- **Islands are great for multiplayer** because they support many play styles: sneak around the back, charge the front, or camp on a hill and snipe. (Footnote: Rogers reserves a special place in hell for **spawn campers**.)
- **Alleys and islands can coexist:**
  - Islands can contain corridor-style stretches. *Red Faction: Guerrilla* and *Team Fortress 2* have alley-ish interiors, but their **freedom of approach and wide perimeter** make them islands.
  - *Uncharted 2* alternates between alleys and islands often.
  - *Darksiders* and the *Maximo* games use **alleys for dungeons** and **islands for hubs and battle arenas**.
  - Which to use depends on the gameplay.
- **Four advantages of islands:**
  1. An extraordinary sense of **space and scale**. It's a thrill to realize the level just keeps going.
  2. They promote **exploration** and invite designers to fill the **"in-between spaces"** with secrets, extra missions and objectives.
  3. Gameplay options are laid out like a **smorgasbord**.
  4. **Vehicle gameplay** (racing, car combat) feels better in wide-open space than in tight alleys.
- **Sandbox caution:** whatever players *say*, a world where you can do anything at any time can be **intimidating and confusing**. Even in a sandbox, **prompt the player toward the next thing**, even if they ignore it. That's why your annoying cousin keeps phoning you in *GTA IV*.

**🎮 Book examples:** *Metal Gear* (Lego prototypes) · *Portal* (narrow alley) · *MW2* (wide alley) · *Mario 64* (early island) · *GTA IV*, *Burnout Paradise*, *Halo* MP (sandbox islands) · *Crackdown* (themed zones = gangs) · Sleeping Beauty Castle, Matterhorn, Space Mountain (weenies) · *Red Faction: Guerrilla*, *TF2*, *Uncharted 2*, *Darksiders*, *Maximo* (hybrids) · *GTA IV* cousin (sandbox prompting).

**📱 F2P mobile translation:**
- **Alley vs island in F2P structure:**
  - **Saga maps are alleys.** One path, level N then N+1. Super directed, easy to tutorialize, easy to pace and monetize.
  - **Open worlds are islands.** *Pokémon GO* (your real city is the island), *Genshin Impact*, the 4X world maps of *Whiteout Survival* / *Rise of Kingdoms*.
  - **The main menu / home screen is an island** (shop, events, clan, pass, collection...). It's a smorgasbord that easily becomes intimidating. The fix is Rogers' "annoying cousin": **next-best-action prompts**, pulsing buttons, quest arrows, red-dot badges. Use them, but don't spam 9 red dots at once.
  - **Common hybrid:** an alley FTUE (linear, forced steps) that opens into an island hub once basics are learned, like *Maximo*'s alley dungeons + island hubs.
- **Base-builder maps:** a *Clash of Clans* village is an **island** for the attacker, who can approach from any side. Defenders use walls and building placement to **build alleys** (funnels) inside the island, steering troops into traps. The big central building works as a **weenie** that pulls attackers' focus.
- **Runner / survivor arena layout:**
  - **Runners** (*Subway Surfers*, *Temple Run*) are pure alleys: lanes, scripted obstacle patterns, a camera locked behind you (all seven alley advantages apply).
  - **Survivor-likes** usually use an **open arena island** (move anywhere, enemies swarm from all sides), sometimes a bounded arena or corridor. Obstacles shape chokepoints, and **XP gems are literally bread crumbs** (§9).
  - **Room-by-room chapters** (*Archero*-style) are alleys made of small hand-built arenas.
- **Weenie = the next unlock you can see.** The locked next arena, the shiny top reward of a pass, the half-built next room, the giant chest at the end of an event path. *Always* show the weenie; F2P retention runs on "I want to get THERE."
- **Distinct "lands":** themed episodes on a saga map (new palette, music, decorations every episode), themed arenas in *Clash Royale*'s trophy road, themed villages in *Coin Master*. Players should know their location at a glance, down to the smallest prop.
- **"The player will always break your game"** → in F2P, players find economy exploits within hours (clock manipulation for timers, ad-farming loops, unintended free-currency combos). Design assuming they will, and keep server-side config ready to patch.
- **Multiplayer islands:** PvP maps in *Brawl Stars* or *Mobile Legends* need multiple routes (bushes to sneak through, lanes to push, high-value zones to hold) so different play styles all work.

**🪝 Make it stick:** **Alley = a bowling lane with bumpers. Island = a playground with no fences.** And everywhere, a **giant hot dog on a stick** 🌭 saying "come hither."

> ⚠️ **2010 → 2026:** Camera triggers, façades and scripted events are 3D-console concerns. On mobile the same logic applies to **UI and level flow**: linear flows (alleys) are easy to tutorialize and measure; open hubs (islands) need constant gentle prompting or players stall.

---

## 8. The Dave Arneson Memorial Mapping Section — Scale, Paths, Walking & Fingers
*(Named for D&D co-creator Dave Arneson, 1947–2009. The book spells it "Arnenson.")*

**🧠 Big idea:** Get the design on paper at the right **scale**, steer players with **light, shape and landmarks**, cut anything that's just walking, handle multiple paths and backtracking deliberately, and add **fingers** (rewarded dead ends) so a linear level feels explorable.

**📋 The details:**

**8a. Scale, icons & legend**
- **Pick a scale first.** On a **top-down map** on graph paper, **the player usually = one square**. Everything else (treasure, mechanics, enemies, objects) is drawn relative to the player, just like **player metrics** (→ L05).
- Represent elements as **icons** and include a **legend** so readers know what they're seeing. The legend should cover:
  1. Player's **starting point**
  2. **Enemy** starting locations
  3. **Doors, teleporters, gates**
  4. **Puzzle mechanics** (levers, switches)
  5. **Treasure chests and power-ups**
  6. **Traps and their areas of effect**
  7. **Significant landmarks** (statues, pools, pits...)

**8b. Rogers' map-making process**
1. **Rough out the big-event locations first:** treasure chamber, battle arena, puzzle room, a mechanic to teach, a spectacular view...
2. **Connect them:** hallways, mazes, chasms, passages.
3. **Move to graph paper** to communicate **scale** to the level artist.
4. **Draw in details:** tombstones, crypts, mechanics, enemies.
- 🖼️ **Book figure: "a (very rough) level outline"**, a side-view sketch of a "Mighty Jungle" level. Monkeys, a lion, crocodiles under swinging-vine jumps, spiders, an Indiana-Jones-style trap ("step on plinth to activate," then "race down hill"), a boat that leaves, piranha, natives, "hop on hippo," rhinos, a captive girl, and a King Kong-style giant at the end, with circled notes marking **elevation** changes. *Lesson: your first pass can be messy doodles; it's about the sequence of big moments, not neatness.*
- 🖼️ **Book figure: "Level Map from Pac-Man World"** (Mansion 2, sections 1–2, on graph paper). It **combines a top view and a side view** on one sheet, with notes like ghosts weaving in and out of tombs, "roll and grab fruit for extra," ghosts cruising in the air, ramps, a power pellet, health, "possible jumps by bat," and "scary monster forces you out" to section 3. *Lesson: mix views when one can't show everything, and write intent ("forces you out") right on the map.*

**8c. Passage width**
- For a top-down map of a 3D level, make passages **five squares wide**: the player plus two player-widths on each side. That leaves room to **navigate, fight, and let the camera move**.
- Your first levels will almost certainly be **too small and cramped**, so be **generous** with proportions.

**8d. Leading the player with geometry & light**
- **Players are drawn toward light** and tend to avoid or overlook dark areas.
- **Shapes like diagonal lines** pull the eye in a direction.
- **🔦 The squint test** (learned from **Naughty Dog**, makers of *Crash Bandicoot* and *Uncharted*): squint at the screen until your eyes are almost shut. The brightest thing should be **the main path**. Do the same with color and lighting in your game; players will read the way forward even if they never consciously notice.
  - 🖼️ **Book figure:** a cartoon hero seen from behind on a winding road. The road is the lightest shape on the screen, leading to a castle with banners on the horizon (a weenie!). A dark diagonal arrow-shape on the ground also points along the road, and the darker grass, rocks and a tent frame the path.
- **Don't waste the player's time with needless wandering. Never get the player lost on purpose.** Help them reach the main objective quickly.

**8e. Walking is never gameplay 🚶‍♂️❌**
- **The talk-through test:** describe your level aloud to someone. If you hear yourself say "...and then the player walks over to here," **cut that section.**
- **Rogers' rule: walking is never, ever gameplay.** Only **lazy designers** count it. You're an **active designer** who gives your active character active things to do. Actively.
- **Don't let the player walk too long.** Ten things they could do instead:

| | | | | |
|---|---|---|---|---|
| Jumping | Fighting | Collecting | Climbing | Swimming |
| Swinging | Flying | Escaping | Sneaking | Exploring |

**8f. Multiple paths**
- Choosing between paths is exciting (Rogers' joke: the harem of 1000 delights vs the lava pits of Overfiend). But multiple paths are **tricky** in alleys and islands alike, and suit some genres better than others. **Wide-open FPS, RPG and driving worlds need them** just to keep travel from getting dull.
- **Questions to answer:**
  - Which path will the player choose?
  - How do you **entice** them down one path over another?
  - How do you get them to **use the alternate path**: hidden power-ups, cash prizes, an **achievement for finding all secrets**?
- Some **producers resist** building content the player might never see. Whatever you decide, **the alternate path must add something significant** to the level.

**8g. Backtracking**
- **Backtracking** = making the player return to an area they've already visited. Some designers hate it; Rogers likes it because it **gets more value from your level**, and he uses it for **puzzles**.
- **His motto: show the player the door first, then let them find the key.** (Figure: a locked EXIT door, a stick figure running away from it, and a key further along the floor.)
- **Don't make them go back and forth too often.** If they must visit a location **more than twice**, **change it**: add new combat or collectibles, or reshape the terrain (an **earthquake** turns a flat area into jumpable hills). A natural (or unnatural) disaster works wonders.
- **Alternate ways to travel** should unlock as the player opens up the world. Anything beats trudging the same terrain again: a **car or horse** for slow stretches, a **train**, a **zeppelin** ride, or, if the fiction allows, the trusty **teleporter**.
- **Vehicles eat real estate**, so you must build that space into levels. It cuts both ways: **don't let vehicle trips drag**, especially if they happen often.
- **Rogers' rule on traveling through levels: if it ever feels long or boring, it IS.**

**8h. Fingers 🖐️**
- Avoid boring levels with **variety**, and with **fingers**: they make a world feel deeper and fuller **without building lots of complex geometry or full alternate paths** the player may never take.
- 🖼️ **Book figures (two top-view sketches):**
  ```
  BEFORE (linear path)        AFTER (same path + fingers)
     ██ 💀 ██                    ██ 💀 ██
     ██    ██                 💎═══╡    ██
     ██ 💀 ██                    ██ 💀 ╞═══💎
     ██    ██                    ██    ██
     ██ 😀 ██                    ██ 😀 ██
  (one winding corridor, enemies   (same corridor plus short dead-end side
   💀 along it, start 😀 at bottom)  branches, each ending in a sparkly reward 💎)
  ```
- A **linear path** stays a straight line in the player's mind no matter how many hazards and enemies you add or how much you bend and crinkle it. **Add fingers** (short dead ends off the main path) and the player feels like they're **exploring, not just strolling**. It extends the life of the level and encourages exploration.
- **Don't put anything critical-path down a finger.** Anything else goes: combat, treasure, bonus materials, or just something visual or fun.
- **Rogers' rule: every finger gets a reward at the end, even if it's only a trash can.** (Footnote: trash or treasure inside is your call.)

**🎮 Book examples:** *Metal Gear* · *Pac-Man World* (Mansion 2 map) · Naughty Dog / *Crash* / *Uncharted* (squint test) · *Pac-Man* dots (bread crumbs, next section).

**📱 F2P mobile translation:**
- **Squint test your UI and boards.** On the home screen, the brightest, biggest element should be **the main action** (Play / next level). In a match-3 board, the goal pieces should pop more than the background. Squint at your screenshot: if the shop banner wins, you've told players to shop, not play. (Which may *feel* good for revenue but hurts retention.)
- **Walking ≠ gameplay → dead time ≠ gameplay.** In mobile the "walking" is: long load screens, unskippable celebration animations, five pop-ups between levels, 8 taps to collect rewards. Talk-through test: "then the player taps through four offers to get back to the map" → **cut it**. Sessions are short; every dead second costs retention.
- **Fingers in F2P:** optional side content off the main path. Bonus chests on the saga map, side quests, hidden tap-able decor in a renovation game that pays a coin or a fun animation. **Every optional tap must reward something**: a tappable thing that does nothing teaches players to stop exploring.
- **Backtracking with a reason:** 3-star ratings (*Angry Birds*, *Cut the Rope*) give players a reason to replay beaten levels. "Show the door, then the key" = show a **locked chest or gate early** that needs keys or stars earned later.
- **Alternate travel = skip/auto features.** Many gacha RPGs let you **sweep/auto-clear** stages you've already mastered, so grinding isn't trudging the same terrain. Same principle as Rogers' horse and zeppelin.
- **Multiple paths in F2P:** branching upgrade trees, choosing which event to play, choosing which stage to farm. Same question: is each path significant, or is one strictly better (making the other wasted content)?
- **If it feels long or boring, it is** → watch your **funnel analytics**. A level or step where players spend far longer than intended, or quit, is your "feels long" alarm, now with data.

**🪝 Make it stick:** Picture a **hand** 🖐️ laid on your level map: the arm is the critical path, each finger is a little side trip, and every fingertip holds a **trash can full of gold**.

---

## 9. Wrapping Up Mapping — Elevations, Views & Map Extras
**🧠 Big idea:** Use whatever drawing method actually communicates your design (layers, side views, isometric, cutaways, flaps), and put all the gameplay-critical info on the map.

**📋 The details:**
- **Elevations on a top-down map are tricky.** Colors per level get visually crowded. Instead, **layer elevations on tracing paper** (or paper on a light board), split by **player height**. **Label each elevation clearly** so readers read them in order.
- **Number the map sheets in sequence**, or **tape them edge to edge** into one large map so they're easy to read.
- **Square paper doesn't mean square levels.** Cut, fold, extend: whatever makes the map match the design.
- **Side-view maps:** set the **character's height first**, then draw to scale. **Vertical gameplay is far easier to show from the side.** Often you need a **combination of side and top views**.
  - 🖼️ **Book figure: "Side view level design"** (a "Factory 3" sheet, sections 1–2, dated 1998). Top and side views on one page, with notes like a "crazy wobbly crate lifter," fruit doors, a switch that opens an elevator door, and the designer's own question marks ("unnecessary fruit?", "extend this out?"). *Lesson: maps are working documents; annotate your doubts.*
- **Isometric maps** work for any game, not just isometric-camera ones. They're harder to draw and need some art skill, but they're **great for showing elevation**, and they work best for games with a **2.5D camera**.
  - 🖼️ **Book figure: "Isometric level design"** ("Forest 2," *Pac-Man World*-style). The player starts inside a tree. A path winds past **rolling logs**, a lumberjack ghost, a power pellet, "too steep" slopes marked as off-limits, a **falling-logs zone** (with notes that the player can use a tree to jump up to it, and can roll through the logs if timed right), a spot labeled "player can practice jumping here," a tree whose pineapples can be knocked loose, thorn bushes, a "nibble" pickup, and a **LOAD** marker for the next section. *Lesson: isometric shows slopes, heights and "can't climb here" at a glance, and the notes include practice spots before the danger.*
- **Hidden depth:** show obscured areas with a **cutaway / X-ray view**, or tape on a **flap** the viewer lifts to see underneath. Add as many layers as you need. Rogers' maps sometimes had so many flaps they looked like an **advent calendar**.
- **More things to put on level maps:**
  - **Enemy spawn points** and their **detection / aggro radius**
  - **"Bread crumb" collectibles** (coins, *Pac-Man* dots) that lead the player through
  - **Secret entrances**, breakable walls, other hidden spots
  - **Obstacles and barriers** (walls, trees, tombstones...)
  - **Special terrain**, clearly marked: cursed ground, swamp water, slippery ice, hot lava

**🎮 Book examples:** *Pac-Man* (dots as bread crumbs) · Rogers' own Factory/Forest/Mansion maps.

**📱 F2P mobile translation:**
- **Puzzle level docs = the board itself.** Match-3 level designers work in a **level editor**: grid size, spawn rules (the "enemy spawns"), blocker layers (the "elevations": e.g. a box *on top of* a jelly *on top of* a tile), goal pieces, special terrain. Rogers' layering advice maps directly onto **multi-layer tiles**. Label layers clearly or your teammates misread the board.
- **Bread crumbs are everywhere in F2P:** XP gems in survivor-likes, coin lines in runners (*Subway Surfers* coin trails literally show you the safe lane), pointer hands and highlighted tiles in tutorials.
- **Aggro radius → tower range circles** in tower defense and base builders. Showing them to the player (as many base builders do when placing a defense) is the map legend made into UI.
- **Terrain marking → readable hazards.** On a small screen, special terrain must be readable at a glance: ice must *look* slippery and lava must *look* deadly.
- **Base-builder and 4X maps:** mark resource tiles, obstacles, and zones of control clearly. Those are the "special terrain" of strategy games.

**🪝 Make it stick:** A great level map is an **advent calendar**: lift a flap, find a surprise. But every window should be **labeled**, or nobody knows which day it is. 🗓️

---

## 10. Illusional Narrative
**🧠 Big idea:** Show the player **before** and **after** and let their brain fill in the **during**. It's cheap, flexible storytelling, as long as they see the pieces in the right order.

**📋 The details:**
- **Origin:** Disneyland's **Peter Pan's Flight**. Your flying ship passes Peter and Captain Hook dueling on the pirate ship's deck while the captured Darling children watch. Your ship swings around a corner (cleverly disguised as the pirate ship's **sail**), and suddenly Peter has won, the Darlings are free, and Hook is fending off the crocodile. You never saw the fight end, but your mind "saw" it.
  - 🖼️ **Book figure:** three round vignettes along a curving path (duel → freed children → Hook vs. croc). The track bends behind a sail-shaped wall between scenes, so each one hides the next until you're past the corner.
- **Illusional narrative** is the game version of the **gutter between comic panels** or the **cut between movie shots**: give the player two or more images or environments and they **fill in the story**.
- With the right transition and presentation, you can convince players that **a train crashed, aliens overran the world, or a character crossed a room** without animating a single thing.
- **Production savings are big:** real-time animated events take a long time to make and must be torn up and redone whenever the designer changes the level.
- **The rules:**
  - Make sure elements are **seen in story order**.
  - Use **gating** so the player can't flip back to an earlier page of the story: **bottlenecks, camera views, checkpoints, switching elements on/off, or plain old doors**.
- Alleys (§7) make this easy, because you control the viewing order.

**🎮 Book examples:** Peter Pan's Flight (Disneyland) · comic book gutters · film edits.

**📱 F2P mobile translation:**
- **Renovation games run on illusional narrative.** In *Homescapes* / *Gardenscapes*-style meta, you see a wrecked room, complete a task, a quick swap happens, and now it's beautiful. The "work" is never animated; your brain fills it in. Cheap to produce, endlessly reusable, deeply satisfying.
- **Before/after story beats** in any meta: the village *before* you build it vs *after* (*Coin Master*), the destroyed base after a raid, the event map that changes state between days.
- **Gating = no flipping back pages:** in F2P, story beats are tied to progress (finish level 60 → see the cutscene still image). Keep story beats in order and don't let players skip past setup into payoff.
- **Ad creatives** use the same trick: a 3-frame "before → fail → after" story sells a game in 5 seconds.

**🪝 Make it stick:** The magic happens **behind the sail**. ⛵ Show the duel, hide the corner, reveal the victory, and the player animates the rest for free.

---

## 11. Gray Matters — Graybox, Pacing, Space & Playgrounds
**🧠 Big idea:** Before any art, enemies or detail, build the level as **gray boxes** and play it to nail scale, camera and pacing. Then tune variety (big/small moments, weather, interior/exterior, verticality), keep a clear visual language, and test mechanics in **playgrounds** and **combat arenas** first.

**📋 The details:**

**11a. The gray box**
- Once maps are done, **don't** jump to enemies, mechanics or detailed geometry. First build the level in **gray box** form.
- A **gray box level** is built in an art tool (Maya and 3D Studio Max were the industry standards, though others exist). It shows the **scale, size and relationships** of the basic elements against **camera and character metrics**. It's **pivotal for scale, camera and pacing**.
- **Process:**
  - **Run your character around** the gray box a lot.
  - **Have other people play it** to find confusing areas and trouble spots.
  - **Iterate while big changes are still cheap.** You may find the level is better if you **rip out a whole section and stitch the rest together**.
  - A **straight hallway** may become far more thrilling with **twists and turns**, which turn "boring old" enemies, mechanics and treasure into **surprises**.

**11b. How long should a level be? Pace it out ⏱️**
- **Pacing out** = early in production, start the character at the beginning of the gray box and **just walk to the end**. Ignore hazards, combat and collectibles.
- **That walk takes roughly HALF the time the finished level will take.** For a **30-minute** level, the pace-out should take about **15 minutes**.
- It sounds odd, but **publishers and reviewers care about total game length**. Rogers' benchmark: a **single-player action game should run 8–10 hours at minimum**. Longer is great, as long as your schedule and team plan for it.

**11c. Emotion pacing**
- **Change the player's emotion every 15–20 minutes.** Most games offer a narrow emotional range, but **geometry alone** can take the player from **mystery → fear → panic → wonder**.
  - Footnote: Rogers argues most games deliver only a tiny emotional palette of **five feelings: aggression, fear, surprise, joy and disappointment** (and he quips that a few titles manage only the last one). In the training-level section he jokes he's found a sixth: **enthusiasm**.

**11d. Big moments vs small moments**
- Split gameplay into **big moments** and **small moments**.
- **Don't stack too many big moments** back to back; you'll exhaust the player.
- **Small, calm moments only get boring if there are too many in a row.**
- *Shadow of the Colossus* balances big moments (fighting giant colossi) with quiet ones (riding across the vast world).
  - 🖼️ **Cartoon:** an exhausted hero stumbles out of the "Chamber of Doom," wheezing for a second, while a mob waits at the "Cave of Death" next door. Give them a breather!

**11e. Time of day & weather**
- Use **time of day and weather** to **emphasize** events and elements. How would players cross this level in **snow** or a **blizzard**? How would a **fairy village** look at **night**?
- **Weather must affect everything:** the player character, the mechanics, the enemies and every other element. **If one element ignores the weather, the whole effect breaks.** (Cartoon: a soaked, miserable guy standing in the rain.)
- **Give levels a variety** of atmospheric effects and times of day.

**11f. Space: interior/exterior, big/tight**
- Apply **variety to geometry**, not just gameplay. **Alternate interior and exterior spaces** so the level doesn't feel like one long room. You don't have to switch every room; break it up where it feels natural.
- **Large spaces feel safer. Tight spaces feel mysterious and dangerous.**
- **Watch the camera.** Leave tight spaces enough room for both player and camera, or switch to a **fixed or rail camera** there.
- **Combat staging:** **large spaces** suit **big groups** of enemies; **narrow spaces** suit **one-on-one** fights.

**11g. Verticality ⛰️**
- **Verticality matters.** Changing elevation makes environments feel **natural**, adds variety, and sets up **"Kodak moments"**: impressive views of statues, vistas, horizons.
- **Going UP feels like progress** toward a goal. (Cartoon: a figure at the bottom of steps looking up at a proud figure standing on top.)
- **Going DOWN:** players will try to **skip elevations by jumping down**. If long falls can kill, **let players look down** to judge the drop; dying on a drop that *looked* safe is infuriating. If you don't want them dropping, **corral them** with **switchbacks, ladders or climbable surfaces**.

**11h. The golden rule & visual language**
- **Rogers' golden rule: if it looks like the player can go there, they should be able to.**
- **Build a visual language** for where players can and can't go: **low walls, shrubbery, rock walls** mark impassable areas, and players learn that these cues mean "not this way."
- **Don't be lazy and use invisible walls.** Nothing breaks immersion faster, or makes a place feel less real, than slamming into a big wall of nothing. (Cartoon: a guy smacking into a dashed-outline invisible box.)

**11i. Messing with the player's head (on purpose) 😈**
- **Right-to-left travel feels wrong.** Western audiences read and scan **left to right**, so moving a character **right to left** (especially in 2D) makes players uneasy even if they can't say why. Rogers uses it best for **entering the final boss's lair**. (Cartoon: a figure walking leftward muttering that it just feels wrong. Footnote: no idea whether it works on readers of right-to-left or other scripts; he jokes about Azeri.)
- **Sphincter twitchers:** make players cross **very thin platforms** over huge drops, boiling lava or whirlpools, and heighten it with a **bird's-eye camera**. Rogers puts them in every level he designs. Even if the player is never actually at risk, they'll *feel* like they are. (Cartoon: a terrified figure tiptoeing along a thin beam toward a gem.)

**11j. Practical geometry & realism**
- **Keep walkable surfaces flat** unless they're explicitly ramps, stairs or natural slopes. Most characters aren't programmed to adapt to uneven ground, and even when they are, they can **stutter or misstep** while walking. **Smooth out transitions**, even small ones. (Cartoon: a figure tripping on a tiny step.)
- **Don't be bound by realism.** Making a level feel like a real place helps, but it's a game; it only needs to be as real as you choose.
- **Cautionary tale:** a friend joined an action shooter whose artists had proudly built **architecturally accurate** buildings: realistic nooks, stairwells, true-scale hallways, even bathrooms on every floor. They were **almost unusable**: no room for gameplay, and the camera hated them. In *Star Wars* we never saw the Death Star's toilets; they're presumably there, but we never needed to see them. **Leave out any part of a building, temple or city that doesn't serve the story you want to tell.**

**11k. Playgrounds & combat arenas 🛝**
- **Build a playground BEFORE your gray box levels.** A **playground** is a gray box level **not meant to ship**: a separate test space for **mechanics and hazards**. Tweak everything there until it **feels right**, *then* use it in real levels. Test:
  1. **Ground angles**, to check walking, running, **inverse kinematics (IK)** and related tech, so the character looks good on uneven ground.
  2. **Simple boxes at many heights**, to test **player metrics**: jumping, hoisting, teetering, etc. Build specific lengths and heights to test **double jumps and wall jumps**.
  3. **Mechanics and hazards**, to find the right **distance, timing and lethality**.
- **Its sibling, the combat arena:** a test space for **combat systems, cover systems and enemies**. Build in a fast way to **spawn and mix enemy combinations** so you can discover the best fights. (Details come in L10 combat and L11 enemies.)

**🎮 Book examples:** *Shadow of the Colossus* (big/small balance) · *Star Wars* (unseen Death Star toilets) · the realistic-buildings cautionary tale.

**📱 F2P mobile translation:**
- **Graybox = greybox prototype with placeholder art.** For a puzzle game that's a level editor plus ugly tiles; for a survivor-like, squares chasing a circle. **Kill the fun problems before art exists.** Many large puzzle studios also run **automated play-bots** over new levels to estimate difficulty before players see them: graybox playtesting at scale.
- **Pacing out → session design.** Mobile has its own length targets. A typical match-3 level is meant to take a few minutes, and the **session** (a few levels plus meta) has to fit a bus ride. Measure intended vs actual time per level in playtests and analytics.
- **⚠️ The 8–10 hour rule doesn't apply.** F2P games aren't judged on "hours to finish"; they're judged on **retention curves** (D1/D7/D30) and want to last *years*. The principle that survives is **"measure length early and plan production for it"**: content runway (how many weeks of levels do you have?) is the F2P version of game length.
- **Emotion every 15–20 min → emotion every level or two.** Mobile sessions are short, so compress the cycle: tension (hard level) → relief (easy win + big reward) → curiosity (new blocker, new area tease). That's the **saw-tooth difficulty** curve again.
- **Big/small moments:** a boss level, super-hard level or event finale is a big moment; follow it with a **victory-lap** level. Never put a super-hard level right after another one.
- **Weather/time of day → LiveOps seasons**, with Rogers' warning: a winter reskin that only changes the background while pieces, UI and characters stay summery feels cheap. Reskin *everything* the player touches, or at least everything prominent.
- **Golden rule → UI affordance:** if it **looks tappable, it must be tappable** (and do something). A button that looks active but isn't is the mobile invisible wall. If something is locked, **say why** ("Unlocks at level 15") instead of silently ignoring the tap.
- **Visual language → consistent iconography:** same color always means the same rarity, the same red dot always means "something new." Players learn your language fast; never break it.
- **Big vs tight spaces → survivor arenas:** open fields for horde fights, tight corridors or bounded arenas for focused boss duels.
- **Sphincter twitchers → "so close!" moments.** One move left with one piece to go, the near-miss jackpot on a slot-style spin. Use them for drama; be careful when they're engineered to push purchases (ethical line: never fake near-misses that the RNG didn't produce).
- **Playground = debug/sandbox scene with a cheat panel.** Every F2P team needs one: spawn any blocker, any enemy wave, any currency amount. **Combat arena = wave tuning sandbox** for survivor-likes and tower defense.
- **Realism cautionary tale → "realistic" UI flows.** Don't model every real-world step (e.g., a realistic farm sim where you manually water every plant forever). Keep only the parts that serve the fun.

**🪝 Make it stick:** **Gray box = a cardboard movie set.** You rehearse the whole play with cardboard props; only once the actors stop tripping do you call the painters. And **no invisible walls**: if the cardboard looks like a door, it opens. 🚪

---

## 12. Leave the Training Level for Last (or don't!)
**🧠 Big idea:** The training level is the player's **first impression** and arguably the most important level, yet it's usually built last and rushed. Build it early, or better, make the *whole game* a gradual training level.

**📋 The details:**
- **The training level** teaches the game's basics, is the player's **first impression** of gameplay, and **stokes enthusiasm** for everything after. Logically it should be the most important level in the game... logically.
- **Why it usually gets left to the end (the developers' arguments):**
  1. You won't know the most important lessons until **everything is in the game**.
  2. By the end, the art team can make its **best-looking art and effects**, giving the first level maximum bang for the buck.
  3. Sometimes they claim players will **learn the basics over the course of the game** anyway.
- **The reality:** schedules tighten, priorities shift, and the training level **doesn't get the love it needs**.
- **Rogers' suggestion: build it FIRST.** It may look rough, but art can be polished later. The big advantage is that **you learn the basics alongside the player** and can judge what they need to learn **before your own familiarity ("designer blinders") sets in**. A fresh pair of **outside eyes** always helps a training level.
- **Even better: no separate training level at all.** Rogers has noticed that in the best games the player **never stops** picking up new abilities, new equipment and new situations. **Make your entire game the training level.**

**📱 F2P mobile translation:**
- **In F2P the FTUE (first-time user experience) is life or death.** A large share of installs can churn in the first session, and D1 retention is one of the first numbers anyone looks at in soft launch. A weak FTUE wastes your entire marketing spend (you paid CPI for players who left in five minutes).
- **So in F2P: build it early AND keep rebuilding it.** Unlike a boxed game, the FTUE is **never finished**. Teams A/B test tutorial steps, cut text, shorten time-to-first-fun, and iterate for the game's whole life.
- **"The whole game is the training level" is how good F2P onboarding works:** **progressive feature unlocks** (clans, events, shop tabs and PvP open up over the first days instead of all at once), a **new blocker introduced periodically** with its own intro level, and **contextual tutorials** that appear only when a feature first matters.
- **Fresh eyes:** run **first-time-user playtests** constantly (people who've never seen the game). Your team is permanently blinded after week one.
- **Teach by doing, not by text:** forced first moves with a pointer hand, then gradually released control. The tutorial *is* the first few levels, designed so you can't fail them.

**🪝 Make it stick:** The training level is the **first date** of your game. Most studios plan it the night before, in yesterday's clothes. 👔 Plan it first, and keep the romance going all game long.

---

## 🏆 Universal Truths & Clever Ideas
1. **A cliché can still be compelling** if you do it well. 📱 *so for F2P:* "castle," "candy," "farm" still top the charts; execution and twist matter more than novelty.
2. **Use the Mexican pizza technique** (combine unlikely themes) to make level themes unique. 📱 *Genre/theme blending is how many F2P hits are pitched.*
3. **Level names can carry mood and information.** 📱 *Numbers for levels, evocative (and translatable!) names for episodes and events.*
4. **Design top-down:** world → level → experience → moment-to-moment gameplay. 📱 *Meta map → area → level → each move.*
5. **You can never have too many skeletons** (foreshadow danger visibly). 📱 *Flag hard levels in advance; the warning makes them more thrilling.*
6. **Use level maps and posters to inform and build anticipation.** 📱 *Saga maps, locked-next-area teasers, "coming soon" event banners.*
7. **Pick each level's goal: escape/survive, explore, educate or moral.** 📱 *Also set each level's design job: teach, test, relieve, or monetize.*
8. **Use the beat chart to expose weaknesses** in the overall design. 📱 *Your level spreadsheet and LiveOps calendar are beat charts.*
9. **Use a tight set of gameplay systems and mechanics, and maximize play through re-use.** 📱 *Few blockers × many combinations; reskinnable event frameworks.*
10. **Players will always find a way to break your game.** 📱 *Expect economy exploits; keep server-side tuning ready.*
11. **Make the player play the game the way you want it played** (while giving plenty of help). 📱 *Guide with prompts, highlights and gating rather than hoping.*
12. **Is it an alley or an island? Design to that style's strengths.** 📱 *Saga path = alley; home hub/open world = island that needs prompting.*
13. **Map and gray-box levels** to plan camera placement and head off architectural and gameplay problems. 📱 *Prototype with placeholder art; let bots and playtesters find problems first.*
14. **Walking is never, ever gameplay.** 📱 *Dead time (loading, popups, unskippable animations) isn't either.*
15. **If it feels too long or boring, it is.** 📱 *Your funnel data agrees.*
16. **Every finger needs a reward at its end, even if it's just a trash can.** 📱 *Every optional tap should pay off.*
17. **If it looks like the player can go there, they should be able to.** 📱 *If it looks tappable, it must be tappable.*
18. **Use playgrounds and combat arenas** to test metrics and systems. 📱 *Debug sandbox scenes + cheat panels.*
19. **Leave the training level for last... or not.** 📱 *Build the FTUE early and never stop iterating.*
20. **The whole game should train the player.** 📱 *Progressive unlocks and periodic new mechanics.*

## 🧩 Connect the dots
- → **L02 ideas**: the Mexican pizza technique is an idea-generation tool.
- → **L03 story**: the level as storyteller (four goals, foreshadowing, illusional narrative); story beats row on the beat chart.
- → **L04 paperwork**: the beat chart and world map are design documents; level names and file names live in the docs.
- → **L05 character**: player metrics set your map scale (1 player = 1 square) and drive playground tests (jump, hoist, teeter).
- → **L06 camera / L07 controls**: alleys allow scripted and dramatic cameras; islands need flexible ones; leave camera room in tight spaces or use fixed/rail cameras.
- → **L08 HUD & screens**: world-map and level-select screens; the squint test applies to UI too.
- → **L10 combat** and **L11 enemies & bosses**: combat arenas; big spaces for groups, narrow ones for duels; enemy spacing on the beat chart; boss "stages"; right-to-left entry into the boss lair.
- → **L12 mechanics & hazards**: playground testing of distance, timing and lethality; cliché themes come bundled with their classic hazards.
- → **L13 power-ups & rewards**: fingers need rewards; the bonus-materials row; avoid repetitive rewards.
- → **L14 multiplayer**: islands suit multiplayer play styles; spawn campers.
- → **L15 music**: sound and music make spooky levels and foreshadowing work.
- → **L16 cutscenes**: illusional narrative as a cheap alternative to animated cutscenes.
- → **F2P core**: **FTUE** (training level), **meta loop** (world map = saga map / renovation), **core loop** (moment-to-moment), **retention** (weenies = next unlock, foreshadowing), **LiveOps** (beat chart = event calendar, re-use = event frameworks, seasonal reskins = weather/time of day), **monetization** (hard levels + continue offers, ethical tuning), **A/B tests** (versioned level IDs).

## 🔁 Retrieval check (do it closed-book!)
1. Name the four meanings of "level," with an example of each.
2. What's the difference between a "world" and a "level" by Rogers' definition?
3. Give three reasons fire/ice levels became so popular.
4. What's the Mexican pizza technique, and what did *Maximo* do with it?
5. List the five file-naming tips and the four schools of player-facing level names.
6. Write Disneyland's four-tier hierarchy and the matching video game hierarchy.
7. What did *Donkey Kong*, *Ghosts 'n Goblins* and *Mortal Kombat* each teach about maps?
8. Name the four player goals from Disneyland's stories and the main storytelling tool for each.
9. List at least 8 of the 11 beat chart rows. Name five problems the *Relic Raider* chart revealed.
10. State the rule of three for gameplay systems, and explain the vehicle example's limit.
11. Give five advantages of alleys and four advantages of islands.
12. What is a weenie, where does the name come from, and what went wrong in the house-loop playtest?
13. What goes in a level-map legend? How wide should a passage be, and why?
14. What's the squint test? What's the talk-through test?
15. What's a finger, what can go at its end, and what must never go there?
16. How do you estimate final level length from a gray-box pace-out?
17. What are a playground and a combat arena, and what do you test in a playground?
18. Why does the training level get left for last, and what does Rogers recommend instead?

<details><summary>Answers</summary>

1. (1) A place where play happens (the Death Star level). (2) A slice of space built around one gameplay experience (the mine-cart level). (3) A progress counter in repetitive games (Tetris level 20). (4) A player/character rank from score/XP/skills (WoW level 70).
2. A **world** is a location defined mainly by its visual/genre **theme**, which can contain several locations sharing that theme. **Levels** are the separate sections of play inside it (World 1 has levels 1-1 to 1-4).
3. Easy hazards to program (flames, slippery floors) that break the player's rhythm; a big cast of themed enemies (lava men, dragons, snowmen); and strong red/blue color that made screenshots stand out.
4. Combine two things that don't seem to belong together to get something original. *Maximo* had a graveyard split by volcanic fire and a pirate level encased in ice.
5. File names: ~8 characters max; no wit, just location + order; systematic abbreviations (fac01s01); never reuse an abbreviation for two meanings; organize in folders with shared/version-controlled files. Player names: **functional, location, descriptive, punny**.
6. World → land → attraction → scene. World → level → experience → moment-to-moment gameplay.
7. *Donkey Kong*: showing how many stages remain sets a goal and whets appetite. *Ghosts 'n Goblins*: "you are here" plus a pan over the world teases what's coming. *Mortal Kombat*: locked portraits show progression without travel, foreshadow, and trigger collect-them-all.
8. Escape/survive (action and location, movement + combat); explore (freedom of mobility and conversation); educate (observation and imitation); moral (choice and consequence that affect gameplay).
9. Level name, file name, player's objective, story beat, play style, enemies, mechanics, NPCs, bonus materials, time of day, color mapping. Problems: inconsistent names; Roof01/Road01 confusable; Jung03 should be temp01; two jungle levels back to back; driving introduced late; unfocused jungle objectives; weapons ramp up then dry up; enemies clumped early and wrong enemies for a fighting level; costly temple mechanics not reused; repetitive art-gallery rewards; three night levels in a row (and "day" in a dark temple); too much green.
10. If a system is used fewer than three times in the game, it isn't worth building. One vehicle system can run a jeep, hatchback and sedan, but not a hovercraft or motorcycle, which behave too differently.
11. Alleys: easy camera triggers; dramatic camera; can remove camera control; scripted events; choreographed combat/traps; bottlenecks against backtracking; illusional narrative. Islands: sense of space/scale; exploration with secrets in in-between spaces; smorgasbord of options; better for vehicles (plus great for multiplayer).
12. A landmark that attracts players and pulls them toward it (castle, mountain, statue, tree). Named after the hot dog trainers waved to lure dog actors. Players looped behind a house and came back onto the road facing the wrong way, then walked back the way they came. A landmark at the exit fixed it.
13. Player start, enemy starts, doors/teleporters/gates, puzzle mechanics, chests/power-ups, traps + area of effect, landmarks. Five squares (player + two widths each side), to leave room to navigate, fight, and move the camera.
14. Squint until your eyes are nearly closed; the brightest thing should be the main path (Naughty Dog's trick). Talk-through: describe the level aloud; if you say "then the player walks over to here," cut that part.
15. A short dead-end branch off the main path that makes a linear level feel explorable. Its end can hold combat, treasure, bonus material, or something visual/fun, and it must hold *some* reward (even a trash can). Never put critical-path items there.
16. The pace-out walk (no combat, no collecting) takes about half the final time, so a 30-minute level should pace out in ~15 minutes.
17. A playground is a non-shipping gray box for testing mechanics/hazards: ground angles (walk/run/IK), boxes at various heights (jump, hoist, teeter, double/wall jump metrics), and hazard distance/timing/lethality. A combat arena tests combat, cover and enemies, with quick spawning of enemy combinations.
18. Teams argue they don't know the key lessons until everything's in, that late art is best, or that players learn along the way. In practice schedules crunch and it gets neglected. Build it first (before designer blinders), or better, make the whole game a training level.
</details>

## 🎯 Side quests (5–15 min each)
1. **🍕 Mexican Pizza Generator** (10 min): write the 10 cliché themes on slips of paper, draw two at random three times, and pitch each combo in one sentence *as a mobile game area or LiveOps event* (e.g. "Sewer + Pirate = a smuggler's flooded tunnel event in a match-3").
2. **🔦 Squint Test Your Phone** (5 min): screenshot the home screen of 3 F2P games you have installed. Blur or squint. What's the brightest thing? Is it the main action? Score each /10.
3. **🌭 Weenie Hunt** (10 min): in any F2P game, list every "weenie," meaning something visible but not yet reachable that makes you want to keep playing (locked area, top pass reward, next arena). How many can you see from the home screen?
4. **🚶 Walking Audit** (10 min): play one level/session and count every second of "walking" (non-interactive dead time: loads, popups, animations you can't skip). Total it. What would you cut first?
5. **✏️ Name Game Drill** (10 min): take one level concept (a lava factory) and write a file name plus a functional, location, descriptive and punny player-facing name. Then check: would the pun survive translation?
6. **🖐️ Finger Doodle** (15 min): on graph paper, draw a simple linear corridor (player = 1 square, passages 5 squares wide), then add 3 fingers, each with a different reward. Add a legend.

## ⚔️ Main quest (homework)
**Quest A: The 30-Level Saw-Tooth Beat Chart** (~90 min)
Design the first 30 levels of an original match-3 (or block-puzzle) game as a **beat chart spreadsheet**.
- Columns = levels 1–30. Rows = level name/ID, goal type, moves, **new element introduced**, blockers present, target difficulty (easy/medium/hard/super hard), reward, area/theme, color palette, monetization touchpoint (none / booster offer / continue offer), story beat (renovation task or map unlock).
- Rules: introduce a new blocker **one at a time** with an intro level; use a **saw-tooth** difficulty pattern with a relief level after each spike; every element used **≥ 3 times**; no two "hard" levels back to back; at least 2 different area themes (with a weenie teasing area 2).
- Then audit it like Rogers audited *Relic Raider*: write down **at least 5 problems** your chart reveals and fix them.
- ✅ **Done when:** the sheet has 30 columns and ≥ 10 rows filled; a sparkline or bar row visibly shows the saw-tooth; you've listed ≥ 5 self-found issues with fixes; you post a screenshot of it publicly (#buildinpublic) with one sentence on your biggest fix.

**Quest B: Paper Map → Graybox Arena** (~2 hours, optional for the ambitious)
Design one **survivor-like arena** or **runner segment** on graph paper: scale (player = 1 square), legend (start, enemy spawn zones with aggro circles, pickups as bread crumbs, obstacles, special terrain), a weenie, at least 2 fingers with rewards, one sphincter-twitcher moment, and a clear decision on **alley vs island**. Then graybox it in any free engine/tool (or even a spreadsheet grid) and **pace it out**: time a no-combat walk and estimate the real play length.
- ✅ **Done when:** the map has a complete legend; you've written 3 sentences on alley vs island and why; you have a timed pace-out number and a predicted final length (×2).

## 🔬 Play Lab
1. **Royal Match / Candy Crush Saga** (10 min): play until you hit (or look for on the map) a level flagged as **hard**. *Question:* What happened in the 2–3 levels before and after it? Can you see a saw-tooth (build-up → spike → relief)? What did the game offer when you ran out of moves?
2. **Homescapes or Gardenscapes** (10 min): complete a couple of renovation tasks. *Question:* Where is the **illusional narrative** (before/after with no "work" shown)? What's the **weenie** pulling you to the next task or area?
3. **Clash of Clans** (or any base builder) (10 min): watch a replay or scout an enemy base. *Question:* Is the base an alley or an island for the attacker? How do walls create alleys (funnels) inside the island? What's the weenie that pulls attackers' attention?
4. **Survivor.io or Archero** (10 min): play one stage. *Question:* Is the layout an island (open arena) or an alley (rooms/corridors)? What are the bread crumbs? When do big moments (boss/elite waves) and small moments alternate?

## 🗣️ Feynman check
Explain to a 12-year-old in 60 seconds: **"Why is a Disneyland castle like the next locked area on a Candy Crush map, and why should a game designer care about hot dogs?"** (Hint: weenies, anticipation, guiding players without telling them.)

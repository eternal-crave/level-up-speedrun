# 🎵 Level 15 — Some Notes on Music (and Sound)
> 📖 Book pp. 393–405 · ⏱️ ~40 min study · 📱 F2P relevance ★★★☆☆ — sound is half of "juice" and drives feel, rewards and ads, but many mobile players play muted, so you must design for sound-off first and treat audio as the bonus layer.

## ⚡ TL;DR — the 30-second version
- Plan music and sound **early**. Teams usually leave it to the end; that wastes huge design opportunities.
- Music comes **licensed** (pay a fee, buyouts, covers, libraries) or **original** (hire a music director). Never ship anything you don't have the rights to.
- Learn to **"speak musician"** (tempo, pitch, mood, theme…) and give composers **examples** (a temp soundtrack / "mix tape").
- Use **dynamic scoring** and **leitmotifs**: music that reacts to the situation (mystery, warning, combat, chase, victory) and themes tied to characters. Make the music **more exciting than the action**.
- Sound effects are **feedback**: movement, attacks, impacts, hits, vocal cues, death, success. Pitch **up = good**, **down = bad**. Prioritize sounds (**local / distant / priority**) so it never turns into noise.
- **Silence** is a tool, and **sound can be gameplay** — but always echo sound with **visuals** (accessibility, and for mobile: the mute switch!).

## 🗺️ Chapter map
- [ ] 1. Intro — Star Tours, "don't leave it late," a mini history of game audio
- [ ] 2. Licensed vs original music — fees, covers, libraries, music directors
- [ ] 3. Speak musician — 13 terms to talk to composers
- [ ] 4. Pick a style + build a temp soundtrack
- [ ] 5. Your music needs list — level tracks, loops, reuse, menus, opening theme
- [ ] 6. Dynamic scoring & leitmotifs — the 6 situational themes
- [ ] 7. Environmental effects & the power of silence
- [ ] 8. Sounds Like a Game to Me — the SFX list and how to make SFX great
- [ ] 9. Sound priority (local/distant/priority) + file naming
- [ ] 10. Sound & music AS gameplay — music-game families + accessibility
- [ ] 11. 📱 F2P Deep Dive — muted players, haptics, juice, ad audio, size budgets
- [ ] 🏆 Universal Truths & Clever Ideas (9)

---

## 1. Intro — Why music can't wait until the end

**🧠 Big idea:** Music and sound transform an experience, but because they need lots of coordination, teams push them to the end of production. That's a mistake: you lose great design opportunities.

**📋 The details:**
- **The Star Tours story:** Disney's Imagineers originally made the Star Wars **Star Tours** ride "realistic" — riders would hear only the ship (the Starspeeder 3000) and the pilot's dialogue. In testing it didn't feel like Star Wars. Adding **John Williams' theme** fixed it.
  - Lesson: **music carries identity and emotion** that visuals alone can't.
- Music adds a lot to any entertainment — rides, movies, games — but it needs **coordination across many team members**, which is why it's usually left late. **Don't.** (The chapter title is a pun: "notes.")

**A mini history of game audio:**
- **1970s–80s:** arcade and console programmers had only electronic **beeps and boops**, yet still made memorable themes or jingles: **Pac-Man**, **Donkey Kong**, **The Legend of Zelda**.
- **Every new system** improved audio: **voice synthesis** and **MIDI** made music lusher. But sound ate precious **cartridge memory**.
- **CD era:** **Red Book audio** (the standard for CD audio) let game music sound like any recorded music, and CDs stored much more of it.
- **DVD era:** storage space, the biggest audio problem, stopped being insurmountable.
- **2010 "now":** **streaming** compressed audio (MP3, **Ogg Vorbis**, console formats) decompressed on the fly by the sound chip. The focus shifted from technical limits to **creative use**.

**🎮 Book examples:** Star Tours (music = identity), Pac-Man / Donkey Kong / Zelda (great themes from tiny tech).

**📱 F2P mobile translation:**
- Mobile came full circle: **memory and download size** are back as constraints (see Section 11). Smaller installs convert better on store pages and cellular data.
- An instantly recognizable **jingle** is still gold: think of how a game's level-complete sting or a famous voice line becomes its audio logo in ads and memes (Candy Crush's deep-voiced "Sweet!", "Tasty!", "Delicious!", "Divine!").
- Plan audio in **preproduction**: the FTUE, reward moments and ad creatives all need sound decisions early.

**🪝 Make it stick:** Imagine Star Wars with only engine hum. Exactly — **"No theme, no dream."**

---

## 2. Licensed vs original music

**🧠 Big idea:** The first music question is "what kind?" — and the two answers are **licensed** (existing recordings you pay to use) or **original** (composed for your game).

**📋 The details:**

**Licensed music**
- Previously recorded music you pay a **fee** to use in your game.
- **Music publishers** own the rights; **agencies** negotiate on their behalf (the book names **ASCAP** — the American Society of Composers, Authors and Publishers; the book's text prints "Artists" — and **Third Element**). These companies negotiate **on behalf of the publishers**.
- Getting licenses and negotiating is usually handled by the **game's publisher**.
- Because games (in 2010) **didn't pay ongoing royalties**, publishers negotiated **one-time buyout fees**, covering anything from **7 years to "life of product."**
- **2010 prices:** roughly **$2,500 to over $30,000 per song**. The more **popular and prestigious** the song, the higher the fee. (Rogers shudders to imagine the bill for **The Beatles: Rock Band**.)
- **Too expensive? Options:**
  - License a cheaper **cover version** (the first **Guitar Hero**, 2005, did this).
  - Find a **similar-sounding, cheaper** track in a **music library**. Libraries are great when you need **lots of styles** or **incidental music** (a radio playing, background music in a bar).

**Original music**
- A composition made **specifically for your game**.
- Unless you can **compose, perform and record** yourself, hire a **music director** (if you don't already have one). They create the music **and** handle performing, recording and preparing it for the game.
- The designer still has **plenty of prep work** before that stage (Sections 3–5).

**Talking to your composer:**
- You don't need to write music, play an instrument or sing — you need to **know what you like** and **have an opinion**.
- **Provide examples** and remove guesswork. For **Maximo: Ghosts to Glory**, Rogers gave the composer a **"mix tape"** of film-score and song examples he felt fit each level.
- Build a **musical vocabulary** so you speak the composer's language and can ask for changes precisely (the old saying warns that a little knowledge is dangerous, but here it helps).

**🎮 Book examples:** The Beatles: Rock Band (prestige = cost), Guitar Hero (covers to save money), Maximo (mix tape for the composer).

**📱 F2P mobile translation:**
- **Licensed hits** are rare in F2P because live games run for years — buyouts expiring mid-life can force removing songs. Licensed-music rhythm games on mobile (e.g., **Beatstar**) build their whole business around managing licenses.
- **Most F2P music is original or library/royalty-free**, often from a small team or freelance composer. Check every license covers **ads and trailers** too (ad creatives are where your music gets the most plays!).
- **Ad-creative trend audio** (trending sounds on short-video platforms) has its own licensing rules — don't assume a viral sound is free for commercial use.
- **AI-generated music:** fast for temp tracks, but check the tool's commercial license and your platform's rules before shipping.

**🪝 Make it stick:** *"Rent the hit or own the score."* Renting is fast but the landlord sets the price and the lease ends.

> ⚠️ **2010 → 2026:** The dollar figures are 2010-era and console-centric. The principle holds: **know your rights scope** (territories, duration, platforms, **ads**), and budget for it before falling in love with a song.

---

## 3. Speak musician — 13 terms

**🧠 Big idea:** You don't have to be a musician to direct music; you need the **vocabulary** to say what you want and what to change.

**📋 The details:**

| Term | What it means | How you'd use it |
|---|---|---|
| **Accent** | Emphasis on a beat, making it louder or longer | "That beat needs more accent." |
| **Beat** | The pulse of music; music is measured in beats, fast or slow | "Faster beat for the boss." |
| **Chord** | Three or more tones creating a harmony | "That chord sounds too happy." |
| **Instrument** | Whatever produces the sound; synths imitate instruments; the instrument choice can transform theme and mood | "Swap strings for a harpsichord in the castle." |
| **Mood** | The feel of a piece, based on **emotion** (fear, excitement), **action** (sneaky, combat) or **location** (tropical, Russian); built from instruments, tempo and beat | "The mood should be sneaky, not scary." |
| **Octave** | Interval to a pitch with **double** (up) or **half** (down) the frequency | "Take it up an octave" = higher; "down an octave" = lower. |
| **Pitch** | How high or low a tone is (chipmunk-high or demon-low). Shifting a sound's frequency adds **variety without new recordings** — e.g., a sword clang at slightly different pitches so it doesn't repeat identically | Random pitch variation on repeated SFX |
| **Rhythm** | The controlled movement of music in time; Ravel's **Bolero** builds its rhythm to a frantic end | "Let the rhythm build as the timer runs out." |
| **Tempo** | The speed, from very, very slow to very, very, very fast; walking pace even has a name, **andante** | "Raise the tempo in the final 10 seconds." |
| **Theme** | The heart of a composition; composers usually write it first, then flesh it out to length. John Williams' **Raiders of the Lost Ark** march came from combining two themes when Spielberg couldn't choose | "What's our main theme?" |
| **Tone** | The characteristic sound of a voice or instrument | "Warmer tone on the narrator." |
| **Upbeat** | Technically the last beat of a measure; colloquially, happier, friendlier or faster | "Make the shop music more upbeat." |
| **Volume** | Softness or loudness | "Duck the music volume under dialogue." |

**📱 F2P mobile translation:**
- **Pitch variation** is the cheapest juice trick in mobile: randomize pitch ±a few percent on taps, coin pickups and pops so 10,000 repetitions don't become torture.
- **Tempo** sells urgency: last-seconds or last-moves music speeds up in many puzzle and party games.
- **Mood by location** maps to **themed events** — a winter event gets sleigh bells, a pirate event gets accordion.

**🪝 Make it stick:** Group them: **Time** (beat, tempo, rhythm, accent, upbeat), **Height** (pitch, octave, chord), **Color** (instrument, tone, mood, theme), **Loudness** (volume). *"Time, Height, Color, Loud."*

---

## 4. Pick a style, then build a temp soundtrack

**🧠 Big idea:** Decide the musical style for your genre (traditional or surprising), then show the composer with a **temporary soundtrack** of reference tracks.

**📋 The details:**
- **Traditional route:** use the style normally linked to your genre.
  - Sci-fi options: **orchestral** (John Williams' Star Wars), **synthesized** (Vangelis' Blade Runner), or old-school **1950s theremin** (The Day the Earth Stood Still).
- **Creative route:** break the convention — a sci-fi game with **hip-hop**, **trance**… or **polka**?
- **Temp soundtrack:** gather tracks that capture what you want. It cuts the composer's guesswork with clear examples.
  - In 2010 that was easy thanks to iTunes, YouTube, Pandora and similar — keywords give thousands of results, versus the old days of digging through CDs or field-recording real-world sounds.
  - Programmers can even put the temp music **into the build**.
  - **Danger 1:** the team gets attached to (or sick of) the temp tracks and complains when they change.
  - **Danger 2:** **never leave unlicensed music in the shipped game** — you might pay enormous fees or have to scrap the work.

**🎮 Book examples:** Star Wars (orchestral sci-fi), Blade Runner (synth sci-fi), The Day the Earth Stood Still (theremin sci-fi).

**📱 F2P mobile translation:**
- Style choice is also **audience targeting**: cozy lo-fi for a relaxing merge game, punchy electronic for a PvP brawler, orchestral bombast for a 4X war game. Your ads will reuse this identity.
- **Temp-track danger is bigger in F2P** because builds go to **soft launch** in real countries. A temp track left in a soft-launch build is a real copyright problem. Tag all temp audio clearly (e.g., `TEMP_` prefix) and block it in release builds.

**🪝 Make it stick:** Sci-fi + polka = "Lederhosen in Space." Weird can be memorable — just make sure it's licensed.

---

## 5. Your music needs list

**🧠 Big idea:** Inventory every place music is needed, then decide what you can afford — reuse, looping and alternation stretch a budget.

**📋 The details:**
- **Count** your levels / environments / chapters / race tracks / unique encounters. Each typically needs **background music** — an audio backdrop for play.
- **Traditionally themed to the level:** spooky music in the haunted house, medieval music in the castle, jungle drums in the jungle.
- **Loops:** background tracks usually run **a few minutes** and **loop** to save memory and composition time. Work with the music director so the **loop point** is seamless — no gap of silence or awkward tempo change.
- **Can you afford a track per level?** Maybe not — plan **re-use**. In **Maximo vs. Army of Zin**, each world had **two songs that alternated**, so players never heard the same song twice in a row.
- **Don't forget the extras:** music for the **title screen**, **pause/options/save** screens, **game over** screen, and any **bonus or minigames**.
- **The opening theme matters most:** it's the first music players hear and sets the stage. Put your **best piece** on the **start screen** to get players excited.

**📱 F2P mobile translation:**
- F2P "extras" list is longer: **home/meta screen**, **shop**, **event hub**, **gacha/summon screen**, **battle pass**, **clan screen**, **loading screen**, **level-complete/fail stings**, **LiveOps event themes**.
- The **home/meta screen** is your F2P "title screen": players see it every session. Make it great but **non-fatiguing** (players hear it thousands of times).
- **Seasonal remixes** of the main theme are cheap LiveOps freshness (holiday instrumentation on the same melody).
- The **first 30 seconds of the FTUE** are your opening theme moment — the first impression for every new install.

**🪝 Make it stick:** *"Best song first."* Your title track is the movie trailer for your ears.

---

## 6. Dynamic scoring & leitmotifs

**🧠 Big idea:** Instead of one song per level, a **dynamic score** reacts to what's happening — combat, chase, victory — and **leitmotifs** tie a theme to a character or situation. Music becomes a storyteller and a pace-setter.

**📋 The details:**
- **Dynamic score:** work with the sound programmer and music director to break music into **themes that play when a situation arises**. E.g., combat music kicks in to make a fight feel faster and more exciting; the **main theme returns** once the fight is won.
- **Leitmotif:** a musical convention where a **specific character or scenario** has its own theme. Famous example: Star Wars — **Darth Vader**, **Luke Skywalker**, **Yoda**, and the **Leia/Han romance** each have a theme that plays when they're on screen.
- **The most common dynamic themes:**
  1. **Mystery** — the player enters a new, mysterious place; a little mysterious music sets the mood.
  2. **Warning** — sinister, menacing music as the player nears a hazard or enemies (very common in horror games).
  3. **Combat** — exciting music while fighting.
  4. **Chase / fast movement** — chased by dinosaurs, chasing villains, a giant boulder at your heels: a fast theme makes it even more thrilling.
  5. **Victory** — always **reward players sonically**, even with just a **"sting"** (a very short piece of music) when a fight is won or an event is accomplished. **The Legend of Zelda** games are great at musical rewards.
  6. **Walking** — most games play "walking" music, but Rogers believes **slow music makes players move slowly**, while a beat **faster than the walk** pushes them to move faster.
- **The chapter's very important thing** (Rogers): **"Always make the music more exciting than the action on screen."**

**🎮 Book examples:** Star Wars leitmotifs (character themes), horror games (warning music), Zelda (victory jingles), walking-tempo theory.

**📱 F2P mobile translation:**

| Dynamic theme | F2P mobile use |
|---|---|
| Mystery | Opening a new map area/chapter in a meta (new room in a home-renovation game, new world in a saga map) |
| Warning | Boss level or "hard level" announcement in puzzle games; incoming-attack alarm in 4X |
| Combat | PvP battle music; intensifies at overtime / final 60 seconds |
| Chase | Endless runners (Subway Surfers, Temple Run): driving music keeps thumbs fast |
| Victory | **Level-complete sting**, chest-open fanfare, rank-up jingle — mobile's most important music |
| Walking | Meta/home screen music: calm, but with enough pulse to make you tap "Play" |

- **Leitmotifs sell characters.** Gacha games often give a hero a signature musical motif in their reveal trailer — music becomes part of what you're "pulling" for.
- **Peggle** (also on mobile) is the gold standard of "music more exciting than the action": hitting the last peg triggers Beethoven's **Ode to Joy** and fireworks. A tiny ball becomes a stadium moment.
- **Intensity layers** (adding instrument layers as a combo grows or time runs out) are the cheap mobile version of a dynamic score.

**🪝 Make it stick:** Music is the **hype man**. A good hype man is always a little louder than the rapper.

---

## 7. Environmental effects & the power of silence

**🧠 Big idea:** Sometimes the "music" should be the world itself — ambient sound — and sometimes the most powerful sound is **none at all**.

**📋 The details:**
- **Environmental effects** are the music of the world around us: every place has its own soundscape (a graveyard at night vs. a city at lunch hour).
- Music can be **too overbearing** or simply wrong for some places or games. Mixing **environmental effects** with a **dynamic score** that punctuates the action is very effective.
- **Maximo: Ghosts to Glory:** **hub levels** used environmental effects to set the mood, while **gameplay levels** used traditional background music.
- **Silence:**
  - It has a powerful effect on the listener and signals that **something special** is happening.
  - **Speed:** the music drops out when you hit boost in **Burnout**.
  - **Intense action:** the slow-motion "reflex time" in **F.E.A.R.**
  - **Suspense.**
  - **Comedy:** a character's joke that falls flat (cue the crickets — which, Rogers notes, isn't technically silence).

**🎮 Book examples:** Maximo hubs vs levels, Burnout boost (silence = speed), F.E.A.R. reflex time (silence = intensity).

**📱 F2P mobile translation:**
- **Meta screens** (farm, village, mansion) work well with ambient beds — birds, wind, crowd chatter — making them feel alive without music fatigue (think of the cozy ambience in farming sims like Hay Day).
- **Silence before the reveal:** a hush or drumroll right before a chest/summon reveal makes the payoff explode. Rarity-specific reveal sounds then tell players what they got before they read it.
- **Silence on failure** (or a deflating sound) is gentler than a loud "you lose" — good for keeping frustrated players from rage-quitting.

**🪝 Make it stick:** *"The drop is only epic because of the pause before it."*

---

## 8. Sounds Like a Game to Me — sound effects

**🧠 Big idea:** Sound effects are **feedback**. Build your SFX list alongside your characters' move sets, make every action audible, and use pitch, sweetening and timing to make sounds feel right.

**📋 The details:**

**Build the list with the move set — start with the main character:**
1. **Movement** — walking/running on different surfaces (stone, gravel, metal, splashing water) grounds the character in the world. **Jumping, landing, rolling, sliding** need sounds too, to confirm the move worked.
2. **Attacks** — a **"swoosh"** makes swings and kicks feel dynamic. Unique attacks need **distinct** sounds (Pac-Man eating a ghost; Mario's jump/stomp).
3. **Impacts** — a meaty **"whack"** makes hits feel powerful. Weapons, spells and explosions need loud, dynamic sounds so the player knows they hit something. Include **object reactions**: breaking wood, shattering glass, clanging metal.
4. **Weapons** — guns bang, swords clang, blasters go "pew pew." **Bigger weapon = bigger sound.** Weapons can sound as unique as they look (the lightsaber hum).
5. **Hit reactions** — grunts and yelps ("oomph," "ow," "aargh") feel silly to record but are **among the most important sounds in the game**: players must **always know when they've been hit**.
6. **Vocal cues** — let the character **talk to the player**: "What's this?" on spotting treasure, "That's better!" after healing. It tells the player what's possible/accomplished **and** adds personality. Include **effort cues** — grunts when pushing blocks or pulling stubborn levers.
7. **Death** — cover every way to die: a groan when slain, a gurgle when drowning, a long scream falling off a cliff.
8. **Success** — combine **musical** and **vocal** success sounds: a **sting** plus the character cheering ("woo-hoo!", "yeah!").

**Finding and making temp SFX:**
- Buy **sound-effect libraries** (in 2010, CD collections from **Sound Ideas** or **Hollywood Edge**) — they have absurdly specific sounds (a cougar sneezing, a nuclear reactor's hum) and even famous film/TV effects. Useful even without a dedicated sound designer. Expect to spend **hours** finding "the right" one.
- **Free online SFX** exist — but **always check copyright**: better to be sure now than face a zillion-dollar lawsuit later.
- When you can't find it, **mix two or more sounds** in an editor (Rogers used **Sound Forge** and **Vegas**) to show your sound designer the idea.

**Style: realistic vs cartoony**
- Usually set by the game's theme, with exceptions.
- **Realistic** sounds ground the world but can be **too subdued**.
- **Cartoony** sounds are exaggerated and great for "video-gamey" things (**extra lives**, **treasure pickup**), but can be **too on-the-nose** and pull players out of the world.
- **Pitch/tempo direction:** make sounds go **UP** in pitch *and tempo* for positive moments (extra life, task complete) and **DOWN** for negative or failure moments. Check that your **sound designer** is using sound to its **greatest potential** — direction like this is part of the job.

**Sweetening**
- Real-world recordings often **don't sound right**. Rogers found breaking bones sound like **dry twigs**, so his team **"sweetened"** the effect with a **bowling ball smashing into pins**.

**Timing with animation**
- Work with **animators** on attack and reaction sounds: the sound shouldn't **outlast** or **end before** the animation.
- Lock the animation timing **first**, then build the sound to fit, and tell the sound programmer **which animation frame** triggers it.

**Sound as warning or clue**
- A falling bomb's **whistle** gives time to dive for cover.
- An electric **crackle** or ominous magical **thrum** makes players pause before a protected door.
- Players can find a lost item (a pocket watch, a phone) by following its **ticking or ringing**.

**🎮 Book examples:** Pac-Man ghost-eating and Mario stomp (signature SFX), lightsaber hum (weapon identity), bone-break sweetened with bowling pins.

**📱 F2P mobile translation:**
- **The mobile SFX list is UI-heavy:** button taps, swipes, tile matches, merges, coin pickups, currency count-ups, chest opens, rarity reveals, level-up, error/"can't do that," timer ticking, notification pings. Each is feedback that something worked.
- **Juice formula:** sound + animation + particles + **haptic** + screen shake fire **on the same frame**. A match that lacks one layer feels "dead."
- **Pitch up = good** is the classic **combo ladder**: each cascade in a row plays a slightly higher note, so chains feel like climbing.
- **Vocal cues in casual:** Candy Crush's announcer ("Sweet!", "Divine!") rewards combos; Clash Royale's emotes have voice sounds that carry personality in a no-text battle.
- **Hit reactions** in PvP must be readable **without** sound too (flash, knockback, damage numbers).
- **Cartoony wins on mobile** for rewards: big exaggerated coin and chest sounds are the core of a reward's dopamine. Use restraint so the shop doesn't sound like a slot machine (ethical design, and regulators notice casino-like presentation).

**🪝 Make it stick:** *"Every tap deserves a thump."* And remember the **bowling-ball bone** — real isn't always right; **right** is right.

---

## 9. Sound priority + naming your files

**🧠 Big idea:** Too many sounds at once becomes **cacophony**. Sort every sound into **local, distant or priority** so the important ones always cut through, and name files so anyone can find them.

**📋 The details:**
- Don't play too many sounds at once. Your **sound programmer** helps you assign every sound to one of three categories: **local, distant or priority**.

| Category | Behavior | Examples from the book |
|---|---|---|
| **Local** | Plays when the player is **close** to the source; fades as they move away | Babbling brook, ticking clock, ringing phone, humming machinery, enemy growls |
| **Distant** | Heard even when **far** from the source | Explosions, a wolf's howl, approaching engines, the thrum of an evil tower |
| **Priority** | **Always plays**, wherever the player is — it's **gameplay feedback** | Health loss, treasure/goodie pickups, rising score or combo, power-ups, countdown timers, landing a hit on an enemy, death, world interaction (landing, collision, weapon impact), footsteps / swim strokes / wing flaps |

- **Naming:** like level files, give music and SFX **short, descriptive** names so nobody has to guess. Book examples: level 2 music = `Lv2Song.wav`; a variant of a robot's blaster shot = `roblast2.wav`.

**📱 F2P mobile translation:**
- Phones have limited simultaneous audio voices and tiny speakers. Set **voice limits** per sound (e.g., max 3 coin sounds at once) and **duck** music under priority feedback.
- **Priority on mobile** = reward and error feedback, timer warnings, PvP hit confirmations, and UI taps.
- **Naming convention at scale:** live games ship hundreds of new sounds per year. Use a pattern like `sfx_ui_button_tap_01`, `mus_event_winter_loop`, `vo_hero_ember_attack_02` so audio, code, localization and LiveOps teams all find things instantly.

**🪝 Make it stick:** **Local = whisper, Distant = shout, Priority = the referee's whistle** (always heard).

---

## 10. Sound and music AS gameplay

**🧠 Big idea:** Audio isn't only feedback — whole genres are built on it. But never rely on sound alone: **echo every audio cue with visuals**, for clarity and accessibility.

**📋 The details:**
- Entire genres are built around music: **Dance Dance Revolution** (Konami, 1998) through **Band Hero** (Activision, 2009).
- **Rule:** in sound- or music-based gameplay, **don't rely completely on sound**. Add **visuals that echo** it. You can never give players too many clues, and it makes the game playable by **hearing-impaired** players.
- **Music-game families:**
  1. **Short-term memory games** — memorize and repeat a short musical phrase: **Simon** (Milton Bradley, 1978), **PaRappa the Rapper** (SCE, 1996). A **visual** component helps memory and includes **deaf (and tone-deaf)** players.
  2. **Rhythm games** — keep the beat: **Taiko: Drum Master** (Namco, 2004), **Rhythm Heaven** (Nintendo, 2008), **Guitar Hero**. Often use **instrument-like peripherals** (guitars to maracas). Watch **player fatigue** — constant hand/wrist motion — and build in **mandatory breaks** between songs/levels to prevent injury.
  3. **Pitch games** — sing to match a song's pitch with a **microphone**: **SingStar**, **Karaoke Revolution**.
  4. **Music creation games** — part tool, part game: **Electroplankton** (Nintendo, 2005), **Fluid** (SCEI, 1998). Charming characters and lively visuals, but the goal is to **create and enjoy**, not win.
  5. **Unclassifiable** — **Vib-Ribbon** (SCE, 1999) builds platform-style levels from **whatever music CD you insert**; **Rez** (Sega, 2001) is a rail shooter where **destroying enemies composes** electronic music; **Battle of the Bands** (THQ, 2008) is a rhythm duel where players launch attacks in a musical **tug-of-war between genres** (disco vs country).
- Don't neglect music and sound — they're one more tool in the designer's kit.

**📱 F2P mobile translation:**
- **Mobile rhythm games** (Piano Tiles-style tap games, Beatstar, Project Sekai-style idol rhythm games) are a real F2P genre — and **they're the one genre where sound-on is required**, so they say so on the first screen.
- **Visual echo is mandatory on mobile:** because so many players are muted, every sound-based cue (timer ending, enemy wind-up, rare drop) needs a **visual and/or haptic twin**. That's the book's accessibility rule turned into a mobile survival rule.
- **Fatigue → session design:** short levels and natural session breaks protect thumbs and wrists (and attention). Don't reward marathon tapping.
- **Creation as play:** music-maker toys and remix features appear in social apps and some casual games; low pressure, high sharing.

**🪝 Make it stick:** *"If it only beeps, it's a secret."* Show it, buzz it, then (bonus) play it.

---

## 11. 📱 F2P Deep Dive — designing audio for phones
*(Not in the book — the 2026 mobile layer.)*

**🧠 Big idea:** On mobile, design **sound-off first**, then make sound-on **delightful**. Audio is the multiplier on feel, rewards and ads, but it can never carry essential information alone.

### 11a. Most players can't hear you — design for the mute switch
- Many players play **muted**: on a bus, in bed, in class, with a podcast running. Treat it as the default case and **verify with your own data** (settings toggles, playtests on mute).
- **Visual feedback first:** every important event (hit, reward, timer, error) needs a clear visual signal. Sound is the cherry on top.
- **Respect the player's own audio:** let their music/podcast keep playing (iOS "ambient" audio session behavior), offer separate **music** and **SFX** toggles, and remember the choice.
- **Subtitles/captions** for any voice line that carries information.

### 11b. Haptics — the third sense
- Phone vibration is "sound you feel" and works even when muted. Use **light taps** for UI, **medium** for matches/merges, **heavy** for big rewards or damage. iOS offers fine-grained haptic APIs (Core Haptics); Android support varies by device, so test widely.
- **Don't overdo it:** constant buzzing drains battery and annoys. Always give a haptics toggle.

### 11c. Reward juice — sound's highest-ROI job
- Level complete, chest open, rarity reveal, rank-up: these are the moments players replay in their heads. Give each a **sting** (book's victory theme) with **rising pitch**, layered with particles and haptics.
- **Escalation:** bigger rewards = bigger, longer, higher sounds; rarity tiers each get their own signature.
- **Ethics check:** casino-like ringing on purchase/gacha screens can feel manipulative — and some regulators treat casino-style presentation as a red flag. Celebrate **achievement**, not spending.

### 11d. Audio in ad creatives and trailers
- **Feed ads** often autoplay muted → the first seconds must work **visually** (captions, clear action).
- **Sound-on platforms** (short-video apps) reward a strong **audio hook**: a voice line, a meme-able sting, a recognizable theme. Test both muted and sound-on versions.
- Your game's **audio logo** (a jingle, a voice line) builds brand recall across hundreds of ad variants. Check licenses cover **advertising** use.

### 11e. File-size budgets
- **Install size affects conversion** on store pages (especially on cellular data and low-storage phones).
- Tactics: compress music (Ogg Vorbis/AAC), **mono** for most SFX, lower sample rates for short UI sounds, **stream** long music, and ship extra music/VO as **post-install downloads** (Android Play Asset Delivery, iOS On-Demand Resources, or your own asset bundles).
- Book link: Rogers' **loop** and **two-songs-per-world** tricks were memory budget tricks — they're back in fashion.

### 11f. LiveOps audio
- Each event can get a **themed remix** of the main theme (seasonal instruments), a unique event sting, and a new ambient bed. Cheap freshness.
- **Name and catalog** everything (Section 9) — a live game's audio library grows forever.

**🪝 Make it stick:** *"Mute-proof, then make it sing."*

---

## 🏆 Universal Truths & Clever Ideas
1. **Figure out your sound needs early in production — not at the last minute.** → 📱 so for F2P: plan reward stings, FTUE audio and ad audio in preproduction.
2. **Learn to "speak musician"** so you can tell composers what you want. → 📱 so for F2P: send references + vocabulary in your audio brief.
3. **Use sound effects and vocal cues to communicate important game actions.** → 📱 so for F2P: and pair each with a visual + haptic twin for muted players.
4. **Never use music or sound effects you don't have the rights to.** → 📱 so for F2P: check rights cover ads, all territories and the game's whole live lifetime.
5. **Use music to drive the game's action.** → 📱 so for F2P: speed up music as time/moves run out; make PvP overtime sound urgent.
6. **Use leitmotifs to help tell your story.** → 📱 so for F2P: give heroes, villains and events signature motifs.
7. **Set sound and music proximity and timing so the game feels realistic and interactive.** → 📱 so for F2P: sync every reward sound to the animation frame; prioritize feedback sounds.
8. **Silence can be as powerful as music.** → 📱 so for F2P: a hush before the reveal makes the reward pop.
9. **Use music and sound as gameplay — with visuals that support sound-impaired players.** → 📱 so for F2P: since many players are muted, this is mandatory, not optional.

## 🧩 Connect the dots
- → **L05** (character): build the SFX list with the move set; vocal cues give a character personality.
- → **L08** (HUD / feedback): sound is the audio half of feedback; visuals must echo it.
- → **L09** (level design): background music themed per environment; ambient effects in hubs; warning music before hazards.
- → **L10** (combat): attacks, impacts, hit reactions and timing with animation are combat feel.
- → **L13** (rewards): victory stings and "up" sounds make rewards feel rewarding.
- → **L14** (multiplayer): emote sounds and PvP audio clarity.
- → **L16** (cutscenes): voice-over scripts, file naming per line, temp tracks — same pipeline as music/SFX.
- → **F2P1** (F2P core): juice in the core loop, LiveOps event themes, ad creatives (UA), install size and conversion.

## 🔁 Retrieval check (do it closed-book!)
1. What did the Star Tours story teach about music?
2. Why is music usually left late, and why is that a mistake?
3. What are the two kinds of music you can use, and three ways to save money on licensed music?
4. Define tempo, pitch, octave and theme.
5. Why build a temp soundtrack, and what are its two dangers?
6. How did Maximo vs. Army of Zin stretch its music budget?
7. Which screen should get your best music, and why?
8. Name the six common dynamic score themes.
9. What is a leitmotif? Give the book's example.
10. What's the chapter's "very important thing" about music?
11. Name three uses of silence from the book.
12. List the eight sound-effect categories for a main character.
13. What does "sweetening" mean? Give the book's example.
14. What are local, distant and priority sounds?
15. What's the rule for sound-based gameplay, and why?

<details><summary>Answers</summary>

1. Without John Williams' theme, the "realistic" ride didn't feel like Star Wars — music provides identity and emotion.
2. It needs coordination across many team members; leaving it late wastes design opportunities.
3. Licensed or original. Save money with a cover version (Guitar Hero), a similar-sounding library track, or (generally) a less famous song. Library music also suits incidental needs.
4. Tempo = speed; pitch = how high/low a tone is; octave = interval to double/half the frequency; theme = the heart of a composition, written first then fleshed out.
5. It removes guesswork and gives the composer clear examples. Dangers: the team gets attached to (or hates) temp tracks; unlicensed temp music left in the game can cost huge fees or force scrapping work.
6. Two songs per world, alternated so the same song never played twice in a row.
7. The title/start screen — it's the first music players hear and sets the stage.
8. Mystery, warning, combat, chase/fast movement, victory, walking.
9. A theme tied to a specific character or scenario — Star Wars: Vader, Luke, Yoda, Leia/Han.
10. Always make the music more exciting than the action on screen (fast music pushes players to move faster).
11. Speed (Burnout boost), intense action (F.E.A.R. reflex time), suspense, failed humor (crickets).
12. Movement, attacks, impacts, weapons, hit reactions, vocal cues, death, success.
13. Enhancing a real sound that doesn't sound right; breaking bones sounded like twigs, so they added a bowling ball hitting pins.
14. Local: heard near the source, fades with distance. Distant: heard from far away. Priority: always plays — gameplay feedback.
15. Don't rely on sound alone — echo it with visuals. More clues for everyone and playable by hearing-impaired players.
</details>

## 🎯 Side quests (5–15 min each)
1. **Mute test (10 min):** Play 3 levels of any F2P game muted, then 3 with sound. List 3 moments where sound added information and check if a visual covered it too.
2. **Speak musician (10 min):** Pick a game's home-screen track and describe it using at least 6 of the 13 terms (tempo, mood, instrument…).
3. **Sting collector (10 min):** Record (or note) the level-complete, fail and chest-open sounds of 2 games. Which go up in pitch? Which go down?
4. **Leitmotif draft (15 min):** Invent a hero and a villain for a mobile RPG. Describe each one's motif in words (instrument, tempo, mood) and when it plays.
5. **Priority sort (10 min):** List 15 sounds in a match-3 or merge game and label each local / distant / priority (mobile edition: UI vs world vs feedback).
6. **Sweeten it (10 min):** Pick 3 actions (a gem merge, a shield breaking, a coin shower) and propose a surprising real-world sound to sweeten each.
7. **Naming pass (5 min):** Write a naming convention and name 10 imaginary sounds for an event.

## ⚔️ Main quest (homework)
**Write an Audio Brief for a F2P mobile game (real or your own concept).**
- Sections: style & references (temp soundtrack: 5–8 linked tracks with a "why"), music needs list (every screen + events), dynamic themes used (mystery/warning/combat/chase/victory/walking equivalents), leitmotifs, SFX list by category (book's 8 + mobile UI list), priority table, sound-off plan (visual + haptic twin for each priority sound), file-size budget and delivery plan, licensing checklist (incl. ads), naming convention.
- ✅ **Done when:** a composer and a sound designer could start work from it with no meeting; every priority sound has a visual twin; the brief uses at least 8 musical terms correctly; you've shared it publicly (#gamedev #buildinpublic) or with a musician friend for feedback.

## 🔬 Play Lab
1. **Candy Crush Saga (10 min):** Make big combos. *Question:* how do the announcer voice, pitch and music change as combos grow, and what stays readable with sound off?
2. **Clash Royale (10 min):** Play 2 matches with sound, 1 muted. *Question:* what information did you lose when muted (if any), and how does overtime music change your play?
3. **Subway Surfers or another endless runner (10 min):** *Question:* does the music feel faster than the action? Does it make you play faster (Rogers' walking-music theory)?
4. **Any gacha or chest-opening game (10 min):** Watch the reveal sequence. *Question:* where is silence or a build-up used, and how do sounds signal rarity before you read it?

## 🗣️ Feynman check
Explain to your grandma in 60 seconds: *"Why does a game need sound even though most people play it muted — and what do you do about the muted people?"*

# 👥 Level 14 — Multiplayer: The More the Merrier
> 📖 Book pp. 381–391 · ⏱️ ~45 min study · 📱 F2P relevance ★★★★★ — clans, PvP ladders, co-op events and social features are THE retention and LiveOps engine of modern F2P mobile.

## ⚡ TL;DR — the 30-second version
- Multiplayer design is two decisions: **how players connect** (same device, network, server) and **what they play** (competitive, cooperative, or **conjugate** = same world, different goals).
- There's a whole menu of **game modes** (deathmatch, territory control, capture the flag, race, Man vs God, creation, virtual life…). Mix them; offer variety.
- The right player count is **whatever your gameplay needs**: 2 for a duel, thousands for a living world.
- MMORPGs invented a toolkit of **social tropes** (guilds, raids, crafting, economy, housing, trading, PvP rules) that F2P mobile basically inherited wholesale.
- Other people are both the best content and the biggest problem: design against **griefing** and **spawn camping**, and decide up front how much players may hurt each other.
- Players WILL do what you never planned. Sometimes that's the fun, so let it happen, unless it wrecks the game for everyone else.

## 🗺️ Chapter map
- [ ] 1. Intro: from Gauntlet jostling to networks — connection types + 3 play styles
- [ ] 2. The game-mode menu — 15 ways to play together
- [ ] 3. How Many Is the Right Number? — player counts, it depends
- [ ] 4. MMORPGs, or Hell Is Other People — 16 tropes to know
- [ ] 5. The "last thing you expect" rule — emergent play vs exploits
- [ ] 6. 📱 F2P Deep Dive — async vs sync, clans, ladders, social retention, toxicity, multiplayer-as-LiveOps
- [ ] 🏆 Universal Truths & Clever Ideas (6)

---

## 1. Intro — From arcade elbows to the Internet

**🧠 Big idea:** Even "co-op" games turn competitive when humans are involved. Before you design a multiplayer mode, decide how players connect and which of three relationships (compete / cooperate / coexist) they're in.

**📋 The details:**
- **The origin story.** Rogers' first real multiplayer memory is **Gauntlet** (Atari, 1985): up to four players around one arcade cabinet. It was designed as a cooperative game, yet he and his friends shoved each other and raced to grab the health food or trigger the screen-clearing potion first.
  - Lesson baked in: **a cooperative game can collapse into a competitive one** the moment there's a scarce resource to fight over.
- The shoving continued with other 4-player beat-'em-up cabinets (**Teenage Mutant Ninja Turtles**, Konami, 1989; **Captain America and the Avengers**, Data East, 1991).
- **Doom** (id Software, 1993) moved the shoving into the virtual world: friends connected on a **local area network (LAN)** and blasted each other in **death matches**.

**Three ways players connect (2010 taxonomy):**

| Connection type | What it is | Typical use |
|---|---|---|
| **Head-to-head** | 2+ players compete in real time on the **same machine** (one console, one screen) | Sports, action, some FPS split-screen |
| **Network / peer-to-peer** | 2+ players play with/against each other in real time on **connected machines**, via **LAN** (room, office, campus) or **WAN** (wide area network = the Internet). The only difference between LAN and WAN is **distance**. Can also be **wireless** (e.g., Nintendo DS local play). | LAN parties (everyone hauls their PC to one house to play an FPS — still a beloved social event in 2010) |
| **Client server** | One big, fast computer (the **server**) handles many users at once; MMOs and MMORPGs use servers (and many of them) to handle massive traffic and demand — the book frames it as a setup running **many LANs** side by side to soak up the user load | MMOs, MMORPGs |

**Once connection is settled, choose the play style. There are broadly three:**
1. **Competitive** — same objective, players work **against** each other: be first, score highest, often fight to the (virtual) death.
2. **Cooperative** — same objective, players (in theory!) work **together** to reach it. Gauntlet proves the "in theory" part.
3. **Conjugate** — players share the **same play space** but **not the same goals**. Exploded with **MMOs** (massively multiplayer online games) and **MMORPGs** (massively multiplayer online role-playing games), where dozens or hundreds of players run around the world at once, each with their own agenda and motivation.

**🎮 Book examples:**
- Gauntlet → co-op on paper, competitive in practice (scarce health = conflict).
- TMNT / Captain America arcade → 4-player cabinets kept the social chaos going.
- Doom → LAN death matches made the rivalry virtual.
- Nintendo DS → wireless local multiplayer.

**📱 F2P mobile translation:**
- On mobile, virtually everything is **client-server** with an **authoritative server** (the server decides what's true, so a hacked phone can't award itself gems). Peer-to-peer is rare because of cheating, flaky mobile networks and NAT headaches.
- Head-to-head on one device ("pass and play") exists but is niche; the modern "same couch" is the **party invite / friend code / clan mate**.
- The three styles map neatly onto F2P:
  - Competitive → **PvP ladders** (Clash Royale, Brawl Stars, Marvel Snap).
  - Cooperative → **co-op raids, team events, clan goals** (Pokémon GO raids, team-chest-style events in casual puzzle games, Clash of Clans Clan Wars).
  - Conjugate → **4X servers/kingdoms** (Rise of Kingdoms, Whiteout Survival, Last War) where thousands share a map but pursue personal goals, plus social hubs like Roblox.
- The Gauntlet lesson is alive: put a **shared chest with a "first to claim" rule** in a co-op event and watch your cozy team turn into piranhas. Decide deliberately which you want.

**🪝 Make it stick:** *"Co-op is just competition that hasn't found the health potion yet."* Picture four grown adults elbowing each other at an arcade cabinet over a pixel turkey leg.

> ⚠️ **2010 → 2026:** LAN parties and split-screen are mostly memories on mobile. What still holds: **connection model shapes design** (latency, cheating, session length) and you must consciously choose compete vs cooperate vs coexist. Mobile adds a 4th axis the book didn't need: **sync vs async** (see Section 6).

---

## 2. The game-mode menu — every way to play together

**🧠 Big idea:** Multiplayer modes are a menu of motivations. Each mode answers "what do players want from each other?" Combine modes to build conjugate experiences where different players chase different goals in the same space.

**📋 The details (all 15 modes):**

1. **Death match / free-for-all** — every player for themselves, fighting for high score or the best weapon. Usually everyone **starts on equal footing** and gains (or loses) gear that gives an edge as the match goes on.
2. **Team death match** — teams kill each other for dominance. You can layer **competition inside the team** too (teammates racing for top score).
3. **Fighting** — a two-fighters-in, one-winner-out duel. Born with **Karate Champ** (Data East, 1984) and grew into its own genre. Usually **head-to-head on one machine** because network **lag** wrecks the split-second timing fighting needs — though classic **Street Fighter** and **Mortal Kombat** releases on **Xbox Live Arcade** showed online play was becoming workable.
4. **Survival** — defeat all enemies, or get from point A to point B alive. **Left 4 Dead** players guard each other's backs and heal each other. This is the mode closest to a **single-player game with co-op** bolted on.
5. **Area / territory control** — go to a location and **protect/defend** it against AI or humans. The thrill is the **tug-of-war**: attack, retreat, retake, slowly **"moving the line"** toward the final area. With two well-matched teams a map can last **hours**.
6. **Defend / king of the hill** — like area control, but **one team is given** a location and must hold it for a **set time**.
7. **Capture the flag** — one player becomes **the target**, either by **holding an object** (a flag, or Halo's "oddball" skull) or by being tagged **"it"** by the game. The carrier is sometimes **handicapped** while holding it. Works competitively, or cooperatively with teammates **escorting/protecting** the carrier.
8. **Race / driving** — compete for **position or time**. Gets nasty when players can sabotage each other (**Mario Kart** power-ups). For combat racing, use a **regressive system**: the **leader is the most vulnerable** to attacks from the pack behind. **Burnout Paradise** (EA, 2008) added an "Easy Drive" mode where drivers join events and **socialize while driving** (Rogers jokes this might need virtual phone-while-driving laws).
9. **Team objective** — an objective that can **only** be achieved by working together; "all hands on deck." Examples: **Army of Two** series, **Fat Princess**.
10. **Man vs God** — one player is **God**, controlling almost everything; the other is **Man**, with limited resources. God makes life miserable; Man tries to survive against overwhelming odds. (Rogers' footnote: this only sounds fun if you're God — a hint that **asymmetric modes need careful balance** of the fun on both sides.)
11. **Gambling** — games of **chance**, played competitively or conjugately for the highest score (or just to beat the odds). **Steer clear of progressive systems: setups where early winners snowball and everyone trailing sinks deeper.**
12. **Reflex** — who's faster? Quiz and puzzle games often decide victory by speed (or at least let players flex their trigger finger).
13. **Knowledge** — prove you're smarter than the person next to you on the sofa. A consistently present genre: **You Don't Know Jack**, **Buzz!**, **Scene It?**
14. **Creation** — players **visit or interact with each other's creations** (**LittleBigPlanet**, **The Sims**, **Spore**). Huge benefit: **extends the game's life because players make the content for you.**
    - LittleBigPlanet: Game of the Year Edition shipped **18 new levels made by the community's top-rated creators**.
    - The Sims players got tools to make "stories" (movies) with their characters, and a whole new subgenre of play appeared — those movies became as popular as the game.
15. **Virtual life** — online worlds where players **customize their space and hang out** with others: **PlayStation Home**, **Second Life** (Linden, 2003), **Animal Crossing** (Nintendo, 2001). Text-only chat rooms grew into the kind of shared virtual reality Neal Stephenson imagined in the novel **Snow Crash**.

**Key design rules hiding in that list:**
- Modes are **combinable** → mix them to create conjugate scenarios.
- **Regressive systems** (hurt the leader) keep races tense; **progressive systems** (reward the leader) snowball and should be avoided in chance-based modes.
- **Lag-sensitive** genres (fighting) need special connection care.
- **User-generated content** = free content + longer life + new play patterns.

**🎮 Book examples:** Karate Champ (fighting origin), Street Fighter/Mortal Kombat on XBLA (online fighting viable), Left 4 Dead (co-op survival), Halo oddball (object-based "it"), Mario Kart (sabotage racing), Burnout Paradise Easy Drive (social driving), Army of Two & Fat Princess (team objective), You Don't Know Jack/Buzz!/Scene It? (knowledge), LittleBigPlanet/The Sims/Spore (creation), PlayStation Home/Second Life/Animal Crossing (virtual life).

**📱 F2P mobile translation — the mode menu in your pocket:**

| Book mode | Mobile F2P descendant |
|---|---|
| Death match / FFA | **Battle royale** (PUBG Mobile, ~100 players, start equal and loot up = the book's "gain equipment over the match"); Brawl Stars **Showdown** |
| Team death match | Call of Duty: Mobile TDM; Brawl Stars bounty/knockout-style modes |
| Fighting (lag problem!) | Lag-tolerant 1v1 duels like **Clash Royale** and **Marvel Snap**; fighting games like **Marvel Contest of Champions** sidestep lag by having you fight **AI-controlled copies** of other players' teams |
| Survival | Co-op PvE modes in hero shooters; Brawl Stars' rotating co-op PvE events |
| Area control | **MOBAs** (Mobile Legends: Bang Bang): pushing lanes and towers is literally "moving the line"; Brawl Stars Hot Zone |
| King of the hill | Zone-holding modes in hero shooters (Brawl Stars Hot Zone again) |
| Capture the flag | Brawl Stars **Gem Grab** — the gem carrier becomes the target and drops gems when defeated |
| Race (regressive) | Mario Kart Tour (the blue shell hunts first place), Stumble Guys elimination races |
| Team objective | **Pokémon GO raids**, team-chest events in casual puzzle games, clan boss fights |
| Man vs God (asymmetric) | **Among Us** (impostor vs crew is a hidden-role asymmetric cousin) |
| Gambling | **Monopoly GO!** dice, **Coin Master** spins, Marvel Snap's cube "Snap" doubling (bluffing on stakes) |
| Reflex / Knowledge | **Trivia Crack** (async trivia), the HQ Trivia live-quiz craze |
| Creation | **Roblox** (an entire UGC platform), Brawl Stars **Map Maker** |
| Virtual life | Roblox hangout experiences, Animal Crossing: Pocket Camp (ran as a live service 2017–2024) |

- **Mode rotation is LiveOps.** Brawl Stars keeps the same brawlers fresh by rotating which modes and maps are live — the "variety of modes" truth turned into an event calendar.
- **⚠️ "Rich get richer" = pay-to-win alarm.** In F2P, money can be the "progressive system." If spenders snowball and crush non-spenders, the non-spenders (who are the spenders' opponents and content!) leave. Use **matchmaking brackets, level caps in events, and normalized-stat modes** to protect fairness.
- **Chance-based modes need ethics.** Dice/slot/gacha mechanics face loot-box rules in some countries and age-rating scrutiny. Disclose odds, add pity systems, never target minors.

**🪝 Make it stick:** Memory palace — walk through a **multiplayer theme park**: the **Deathmatch** bumper cars (everyone for themselves), the **Team** paintball arena, the **Fighting** ring, the **Survival** zombie maze, the **Territory** tug-of-war rope, **King of the Hill** on a bouncy castle, the **Flag**-carrier escort, the **Race** go-karts with the leader wearing a target, the **Team** tower-build, **God** at the control booth tormenting a tiny man, the **Casino**, the **Reflex** buzzer booth, the **Quiz** stage, the **Creation** Lego tent, and the **Virtual Life** café. 15 stations, 15 modes.

> ⚠️ **2010 → 2026:** The genre names changed (battle royale, MOBA, hero shooter, social deduction) but they're remixes of this list. The **Creation** entry was prophetic: Roblox turned "players make the content" into one of the biggest games on Earth.

---

## 3. How Many Is the Right Number?

**🧠 Big idea:** There's no magic player count. The right number is whatever makes **your** core gameplay work — too many breaks a duel, too few kills a world.

**📋 The details:**
- **Too many breaks things:** a melee fighter like **Street Fighter** with more than two players gets messy — characters **bunch up**, it's **hard to see** individuals, **collision detection** gets problematic, and the skill contest becomes **mob warfare**.
- **Too few breaks things:** an MMORPG like **World of Warcraft** would feel **empty** if only a few hundred players could roam at once.
- **Rogers' reference numbers (2010):**

| Game / genre | Players |
|---|---|
| Fighting — Street Fighter | 2 |
| Fighting — Power Stone | 4 |
| Social — Uno | 4 |
| Action platformer — LittleBigPlanet | 4 |
| Driving — Burnout Paradise | 8 |
| FPS — Call of Duty: Modern Warfare 2 | 16 |
| FPS — MAG | 64, 128 or 256 (by mode) |
| MMORPG — World of Warcraft | roughly 4,000–5,000 **per server** |

- Takeaway: the range is **enormous**, so the answer is "whatever is right for your game."

**🎮 Book examples:** Street Fighter (2 is perfect), Power Stone (4-player brawler proves a fighter *can* scale if designed for it), WoW (thousands per server needed for a living world).

**📱 F2P mobile translation — mobile numbers (and why):**

| Format | Example | Why that number works on a phone |
|---|---|---|
| 1v1 | Clash Royale, Marvel Snap | Fast matchmaking, ~3-min matches, crystal-clear accountability ("I lost, I learn") |
| 2v2 | Clash Royale 2v2 | Play with a friend, low coordination cost |
| 3v3 | Brawl Stars | Small screen still readable; roles without needing voice chat |
| 5v5 | Mobile Legends: Bang Bang | Deep team strategy, longer sessions, esports |
| Co-op up to 4 | Genshin Impact co-op | Small party feels personal |
| Raids of up to 20 | Pokémon GO raids | Local, in-person crowds at a gym |
| ~100 | PUBG Mobile battle royale | Big-event drama, shrinking circle keeps it readable |
| Clan of up to 50 | Clash of Clans | Big enough to always have someone online, small enough to know names |
| Servers/states of thousands | 4X games (Rise of Kingdoms, Whiteout Survival) | Politics, alliances, server-vs-server wars |

- **Hidden F2P constraint: matchmaking liquidity.** Every extra player per match means more people needed in the queue at the same skill and time. A 100-player mode in a small game = long waits = churn. Many PvP games fill gaps (especially for new players) with **bots** — a modern cousin of dynamic difficulty.
- **Screen real estate** caps counts too: on a 6-inch screen, 10 characters in a melee is soup.
- **Ask:** how many people does the fun need, how many can my audience supply at 3 a.m. in a small country, and how many can a thumb track?

**🪝 Make it stick:** *Goldilocks Lobby* — 2 players in WoW is a ghost town, 200 in Street Fighter is a mosh pit. Find the porridge that's "just right" for YOUR bowl.

---

## 4. MMORPGs, or Hell Is Other People

**🧠 Big idea:** MMORPGs evolved a set of **tropes** — social systems, economies, and rules for coexisting — that players now expect. Know them, use them, and design against the dark side of human nature.

**📋 The details:** Rogers says some of these barely count as "playing" at all, but knowing and including them **fills out your game** and **keeps you competitive**. All 16:

1. **Buffing** — spells that affect the **whole party**, not just the caster. Lets players adopt **roles**. E.g., a cleric with a healing buff on a hotkey keeps teammates topped up so they can keep fighting.
2. **Character customization** — a huge MMO appeal is **becoming someone else** and getting lost in that fantasy. Range: **preset templates** → fully custom (sex, eye color, nose length). Inside the game, keep encouraging it: let players **buy or win** clothing, weapons, armor, gear and **mounts** that fit their character's **personality and class**.
3. **Chatting** — text or voice chat is **expected**. Players use MMOs as a **social hangout** as much as a game.
4. **Crafting** — combine **harvested, found, or bought** items into new gear/weapons, using **recipes** and **components**.
   - Let players craft so items become recognizably **"their creations."** The same logic as character creation: whatever the player makes themselves, they bond with.
   - Powerful items → crafting is usually **time-consuming**; **workshop** locations can reduce crafting time.
   - **Skill-based minigames** can be used to kick off a successful craft.
   - Some games use **trial-and-error** crafting where failure can **destroy components**.
   - **But never let a failed craft destroy a hard-to-get, expensive item** — that punishes the player twice (lost effort + lost item).
5. **Economy** — players earn treasure to customize characters, buy weapons/gear, craft, and buy **housing, mounts, even castles** (or space stations, secret HQs…).
   - **Balance effort earned vs. what money buys.**
   - Let players **carry** treasure and **store** it (personal safes, public banks).
   - Some MMO economies spill into the **real world** (players buying in-game money for cash). Many creators **dislike** this and prefer to **control the economy themselves**.
6. **Grinding** — progression **slows** as characters level up; quests need items that take ages to get.
   - Book example — **Mafia Wars** (Zynga, 2009): to finish one job you need a certain photo item; to get that you must complete another job; that job needs a camera, which you either get **gifted by friends** or as a **random, non-guaranteed drop** from yet another job. A chain of gates.
   - The actual ladder, top to bottom: the job **"Extort a Corrupt Judge"** needs the **blackmail-photo** items → you earn those by doing the job **"Take Compromising Photo"** → which needs a **disposable camera** → the camera is **gifted by other players** or **dropped** during the job **"Rob an Electronics Store"** (and the drop is **not guaranteed** even when you run it).
   - Stacking steps like this is time-consuming and **frustrating** — players feel their progress is **artificially slowed**.
   - The grind is **the #1 thing that makes players quit an MMO**. You can't fully remove it from long-term play, but **reduce it or make it entertaining**.
7. **Instanced dungeons** — each group gets **its own copy** of a dungeon that exists "outside" the shared world. Enemies, loot, even the map can be **randomly generated** for a fresh experience. Multiple groups can run alternate versions **at the same time**, so nobody waits for the dungeon to **"restock."**
8. **Item collection** — a **huge motivator**.
   - Make items that boost not just combat but **other abilities**, especially **tedious** ones (crafting, mining, harvesting).
   - Use a **rarity scheme**: **common → uncommon → rare → unique**.
   - Special items from **specific creatures** ("**drops**"), **seasonal** items available only at certain times of year, and items from **world events**.
9. **Open world structure** — the sandbox "go anywhere, do anything" promise is an **illusion you must maintain**. Really, you build the world the way **you** want it played.
   - **Gating**: level or gear requirements keep players out of areas they're not ready for.
   - Alternative: let them wander into high-level zones and get **thrashed** until they retreat and level up.
10. **Griefing** — harassing another player by **killing them over and over**. Fight it with **systems** and a **rule structure**; keep **policies clear**; a **warning / zero-tolerance** system keeps the peace.
11. **Guilds** — players are social animals and form **groups (guilds)** to explore, socialize and **raid**. Designers should build **in-game meeting places** and, if possible, **guild tools**: **communication**, **stat tracking**, **raid calendars**, and **guild asset customization** (banners, halls…).
12. **Player housing** — everyone likes playing house. A **personal space** to show off **achievements** and **souvenirs**, or to "park" a character safely between sessions. A home base makes players feel **"at home"** and gives them a place they want to **return to again and again**.
13. **Player vs player (PvP)** — players love testing their strength against others, but **not everyone** wants to risk random death. Options: **dedicated PvP servers**, or PvP **only in certain locations**.
14. **Raids** — teams tackle very hard scenarios (storm a castle, kill a fearsome beast).
    - Raid leaders must be **strategist + manager + social director**.
    - Design raids beatable by **various party configurations**, and leave room for **creative thinking** or plain **dumb luck**.
    - **Cultivate legends** about raid targets so players know they need to rally their forces.
    - Make **loot sharing** easy and based on **each player's performance**.
15. **Spawn camping** — waiting at a **spawn point** to kill enemies/players the instant they appear. Most MMO makers frown on it; build **safeguards** that discourage or disable it.
16. **Trading / auctions** — players pile up duplicate loot or class-restricted items; trading and auctions clear inventory.
    - Make trading **simple** and **scam-proof**.
    - Create **places** in the world that promote trading.
    - **Auction houses** let players bid with in-game treasure; some games run **regularly scheduled auctions** there.
- **Why bother:** these tropes **fill out** a game and keep it **competitive** with others in the genre — skip them and your MMO feels thin.

**🎮 Book examples:** cleric healing buff (roles), Mafia Wars item chain (grind and friend-gifting gates), WoW (MMORPG scale).

**📱 F2P mobile translation — the MMORPG toolkit lives inside your phone:**

| MMO trope | Where it lives in F2P mobile |
|---|---|
| Buffing / roles | Gacha RPG team comps (healer/tank/DPS in Raid: Shadow Legends, AFK Journey); support brawlers in Brawl Stars |
| Character customization | **Skins** — arguably the most ethical, most profitable F2P product (Brawl Stars skins, battle-pass cosmetics) |
| Chatting | Clan chat in Clash of Clans/Clash Royale; emote-only communication during battles (Clash Royale) |
| Crafting | **Merge games** (Merge Mansion, Travel Town) — merging IS crafting; gear-forging in RPGs |
| Economy | Soft/hard currency, sources and sinks; Hay Day's roadside shop lets players sell goods to each other for in-game coins |
| Grinding | Upgrade costs and timers that rise with level — the place where "pay to skip" lives |
| Instanced dungeons | Every PvE level/stage is an instance; event bosses with personal copies |
| Item collection | Rarity tiers (Clash Royale: Common/Rare/Epic/Legendary/Champion), limited seasonal skins, **sticker/card albums** (Monopoly GO!, Coin Master) |
| Open world gating | **Town Hall / HQ level** gates buildings and troops (Clash of Clans); feature unlocks by player level |
| Griefing | Shields after being raided (Clash of Clans, Coin Master, Monopoly GO!), report buttons, mute |
| Guilds | Clans, clubs, alliances, teams — with donations, wars, chests, chat |
| Player housing | Your Clash of Clans village (with buyable sceneries), your Hay Day farm, your Homescapes mansion |
| PvP opt-in | Peaceful games with zero PvP (Hay Day); 4X peace shields; separate ranked vs casual queues |
| Raids | Raid: Shadow Legends' Clan Boss (damage pooled, rewards scale with personal damage = "loot by performance"); Pokémon GO raids |
| Spawn camping | Spawn protection in shooters; attack cooldowns so the same player can't be farmed repeatedly |
| Trading / auctions | Usually **restricted** in F2P (fraud and real-money trading risk): Pokémon GO trades cost stardust and need friendship; Golden-sticker trading windows in album events |

- **The Mafia Wars example is F2P's family tree.** Zynga's Facebook games pioneered **friend-gifting gates** and **random drops**. Candy Crush's "ask friends for lives / tickets to unlock the next episode" is a direct descendant. Lesson both ways: gates drive social virality **and** frustration. Add **pity timers** and **alternative paths** so a gate never becomes a wall.
- **"Real money for virtual gold" became the business model.** The book says many devs hated players selling gold for cash and wanted to control the economy themselves. F2P did exactly that: the **publisher sells the currency**. Black-market trading is banned in the terms of service.
- **"Never punish twice"** → gear upgrade systems that can fail and destroy items feel predatory. If you must have failure, protect the expensive inputs or add a guaranteed-success pity counter.

**🪝 Make it stick:** The chapter title riffs on Sartre's line that hell is other people. Your job: make other people **heaven** most of the time (guilds, raids, trading) and build **fences** for the rest (griefing, spawn camping). Think *"Heaven Kit + Hell Fence."*

> ⚠️ **2010 → 2026:** The full PC-style MMORPG exists on mobile (huge in parts of Asia), but most Western F2P games cherry-pick its tropes: guilds, raids, collection, housing, economy. Voice chat inside casual mobile games is rare; **emotes and quick-chat** dominate because of toxicity risk and players being in public.

---

## 5. The "last thing you expect" rule — emergent play vs exploits

**🧠 Big idea:** Multiplayer hands players tools and other humans — so they **will** invent behavior you never designed. Embrace the creative stuff; shut down anything that ruins other people's fun.

**📋 The details:**
- Rogers' capital-letters rule for this chapter: **"Players will always do the last thing you expect"** — and, he adds, there are times you ought to **let them go ahead**.
- Multiplayer is a great chance for players to **"find the fun"** in your design. Let them **personalize how they play**.
- **But** don't let them **exploit** systems in ways that **ruin the fun for others**.
- **Design your systems thoroughly** so you can **anticipate problems before production** starts.

**📱 F2P mobile translation:**
- **Good emergent play to embrace:** players inventing self-imposed challenges, clan "friendly war" tournaments, base-layout meta (CoC players share base designs), meme decks, creative Roblox experiences. Some studios turn fan inventions into official modes.
- **Exploits to kill fast:** win-trading in ladders, multi-accounting to feed a main account, bot farming, reward loops abusable via clock changes, event leaderboard collusion.
- **Practical tools:** server-side validation, rate limits on gifting, anomaly detection on economy telemetry, kill switches on new events (Remote Config), and a playtest with "evil hat" testers whose job is to break the event.
- **Pre-mortem habit:** before any multiplayer event launches, ask "How would a bored 14-year-old with 3 accounts abuse this?"

**🪝 Make it stick:** Players are raccoons — they will open every trash can you thought was sealed. Leave a few open on purpose (fun); lock the ones with the expensive stuff (economy).

---

## 6. 📱 F2P Deep Dive — multiplayer as the retention and LiveOps engine
*(Not in the book — this is the 2026 mobile layer on top of Rogers' principles. Real-game details are kept general where specifics vary by season.)*

**🧠 Big idea:** In F2P mobile, other players are your cheapest, most renewable content. Social bonds (clans, teams, friends) are the strongest predictor of long-term retention, and recurring multiplayer events are the heartbeat of LiveOps.

### 6a. Async vs sync — the mobile-native axis

| | **Asynchronous** (play against someone who isn't there right now) | **Synchronous / real-time** (everyone is live together) |
|---|---|---|
| Examples | Clash of Clans base attacks (defenses run by AI), Marvel Contest of Champions arena, Trivia Crack and Words With Friends turns, Coin Master/Monopoly GO! raids on friends | Clash Royale, Brawl Stars, Marvel Snap, PUBG Mobile, Mobile Legends: Bang Bang, Stumble Guys |
| Pros | Play any time, in any length; no queue; survives bad connections; works with a small player base; you can pause for the bus stop | Adrenaline, social presence, "anything can happen," esports and streaming stories |
| Cons | Less live tension; opponent is a "ghost"; replays needed to feel the rivalry | Needs **matchmaking liquidity** (enough players at similar skill at the same time); latency; leavers and AFKs; can't pause; more toxicity risk |
| Design tricks | Defense logs, **replays**, **revenge** buttons (Clash of Clans), shields | Short matches (~2–3 min), reconnect logic, bots for low ranks/off-peak, leaver penalties |

- **Rule of thumb:** async is the default for casual and midcore audiences; sync is for games whose fun *is* real-time skill. Many games mix them (async clan wars around sync ladder battles).
- **Rogers link:** his fighting-game lag problem is exactly why mobile duels moved to lag-tolerant designs (card/elixir-paced battles, AI-controlled opponent teams).

### 6b. Clans / guilds — the retention superglue
- **Why they work:** obligation to teammates, social identity, shared goals, and someone to talk to. A player who quits a solo game quits a game; a player who quits a clan quits *friends*.
- **The book's guild-tool list, mobile edition:**
  - Communication → clan chat, pins/emotes, announcements by leaders.
  - Stat tracking → donation counts per member (Clash of Clans shows donated/received), war stars, contribution leaderboards.
  - Calendars → war schedules, event timers inside the clan screen.
  - Asset customization → clan badges, names, clan levels/perks.
  - Meeting place → the clan screen and chat itself; some games add a shared clan space (Clash of Clans' Clan Capital).
- **Help requests (cooperative micro-actions):** troop donations (Clash of Clans), card requests and donations (Clash Royale), "help" taps that shorten clanmates' build timers (common in 4X games), asking teammates for lives (Royal Match teams, Candy Crush friends). Tiny effort, big feeling of belonging, and a reason to open the app.
- **Leader tools = moderation tools:** kick, promote, minimum-trophy requirements, clan descriptions with rules.

### 6c. Guild wars & co-op events
- **Guild vs guild:** Clash of Clans Clan Wars and monthly Clan War Leagues; Clash Royale's weekly clan war race; 4X server-vs-server events (Rise of Kingdoms' KvK).
- **Co-op PvE:** Raid: Shadow Legends Clan Boss, guild hunts in AFK-style RPGs, Pokémon GO raids.
- **Team progress events:** the whole team's wins fill a shared bar or **team chest**; partner events in Monopoly GO! where you pair with friends to build toward a shared goal; Clash of Clans Clan Games (members complete tasks to unlock tiered clan rewards).
- **Design rules from Rogers that apply directly:**
  - Beatable by **varied team configurations** (not just whales).
  - **Loot by performance** — but give everyone a participation floor so casuals don't feel useless.
  - **Cultivate legends** — hype the event boss before it arrives.

### 6d. PvP ladders & matchmaking
- **Trophies/ranks** as the visible ladder; hidden **MMR/Elo** for fair matching; **seasons** with soft resets to give everyone a fresh climb (and a seasonal reward).
- **Trophy Road / arenas** double as progression gates — climbing unlocks content (Clash Royale arenas).
- **Fairness levers:** match by skill *and* power level; separate ranked from casual; normalized-stat tournaments; bots for brand-new players so the first matches feel winnable (FTUE).
- **Rich-get-richer warning (book's gambling rule):** if spending converts directly into ladder wins, non-spenders churn, and then spenders have no one to beat. Healthy F2P PvP sells **speed and cosmetics**, not guaranteed victory.

### 6e. Social features that drive retention (cheap, powerful)
- **Gifting:** Pokémon GO friends send gifts; daily free sends of lives/energy in casual games.
- **Help requests:** see 6b.
- **Friend leaderboards:** Candy Crush's saga map shows friends' avatars on their current levels — instant social comparison.
- **Team chests / shared goals:** collective progress bars.
- **Trading:** sticker albums with friend trading windows; tightly limited to avoid fraud.
- **Referral & reunion:** invite rewards, "welcome back" rewards when a friend returns.
- **Revenge/rivalry:** async attacks with a revenge button create grudges → sessions.

### 6f. Toxicity & moderation — designing the Hell Fence
- **Limit the channels:** emote-only in battle (Clash Royale), quick-chat phrases, mute buttons for opponent emotes.
- **Filter & report:** profanity filters, name filters, report flows with clear outcomes, warning → suspension → ban ladder (the book's warning/zero-tolerance system).
- **Anti-griefing systems:** shields after being attacked (Clash of Clans, Coin Master, Monopoly GO!), attack cooldowns per target, spawn protection, leaver/AFK penalties.
- **Child safety:** many mobile players are minors → age gates, restricted chat, compliance with child-privacy laws (e.g., COPPA in the US).
- **Clear policies** shown in-game, not buried in a website.

### 6g. Multiplayer as the LiveOps engine
- Social events recur on a **calendar**: weekly clan war, monthly league, weekend raids, rotating PvP modes, seasonal ladder resets.
- Why it's efficient: **the content is the other players**. One new mode or event rule set generates thousands of unique matches without new levels.
- Stacking: a typical week in a midcore game might run a clan event + a ladder season + a limited-time PvP mode + a co-op boss — each pulling a different motivation (Rogers' "variety of modes and objectives").
- Measure it: clan membership rate, % of DAU in a clan, retention of clan vs non-clan players, event participation, matchmaking wait times, report rates.

**🪝 Make it stick:** *"Friends are the best retention feature you never have to build levels for."*

---

## 🏆 Universal Truths & Clever Ideas
1. **Give players a variety of game modes and objectives.** → 📱 so for F2P: rotate modes on a LiveOps calendar so the same core feels new every week.
2. **The right number of players is whatever your gameplay needs.** → 📱 so for F2P: also whatever your matchmaking pool can fill quickly at off-peak hours.
3. **Let players customize their characters, their objects and their world.** → 📱 so for F2P: cosmetics/skins and base decoration are the fairest, most loved monetization.
4. **Give players creation tools and brand-new play patterns will emerge.** → 📱 so for F2P: UGC (Roblox, map makers) turns players into your content team.
5. **Decide how much players may negatively interact with each other (e.g., PvP).** → 📱 so for F2P: pick your griefing fences (shields, opt-in PvP, emote-only chat) before launch.
6. **Players will always do the last thing you expect — and sometimes that's fine.** → 📱 so for F2P: embrace emergent fun, kill exploits fast with server-side checks and remote config.

## 🧩 Connect the dots
- → **L13** (rewards, economy, rubberbanding/DDB): crafting, economy, loot-by-performance and "regressive" race systems are all reward/economy design.
- → **L05** (character): character customization and roles (buffing) extend character design into social identity.
- → **L09** (level design): open-world gating and "framing" where players go; instanced dungeons = levels designed for groups.
- → **L10** (combat): deathmatch, team objectives and raids are combat design with humans as enemies.
- → **L15** (music & sound): emote sounds, clan war jingles, victory stings in PvP.
- → **L17** (pitch): multiplayer features are a big part of a pitch's "hook" and its production cost.
- → **F2P1** (F2P core): clans and PvP feed retention (D7/D30), LiveOps calendars, sinks/sources and spender-tier fairness.
- F2P concepts: core loop, meta loop, LiveOps, retention, monetization (cosmetics vs pay-to-win), FTUE (bot matches), ethical design.

## 🔁 Retrieval check (do it closed-book!)
1. Name the three connection types from the book and the difference between LAN and WAN.
2. What are the three multiplayer play styles, and what makes "conjugate" different?
3. What did Gauntlet teach Rogers about cooperative games?
4. List at least 10 of the 15 game modes.
5. In a combat race, who should be most vulnerable, and what's that system called?
6. What does the book warn against in gambling modes?
7. Why does Rogers say creation modes are great for a game's lifespan? Give one of his examples.
8. Why would Street Fighter break with more than two players? Why would WoW break with a few hundred?
9. Name 10 of the MMORPG tropes.
10. What's the crafting rule about failure?
11. What's the #1 reason players quit an MMO, and what does Rogers suggest?
12. What four guild tools does the book suggest?
13. Two ways to give players PvP without forcing it on everyone?
14. What does a good raid design allow, and how should loot be shared?
15. State the chapter's "very important thing" and its caveat.

<details><summary>Answers</summary>

1. Head-to-head (same machine), network/peer-to-peer (connected machines via LAN or WAN; wireless like the DS also counts), client server (a big server handling many users, used by MMOs). LAN vs WAN = proximity: WAN reaches beyond a room/office/campus (the Internet).
2. Competitive (same goal, against each other), cooperative (same goal, together), conjugate (same space, **different** goals — common in MMOs).
3. Even a co-op game dissolves into competition when there are scarce resources (health, the bomb potion) to grab.
4. Deathmatch/FFA, team deathmatch, fighting, survival, area/territory control, defend/king of the hill, capture the flag, race/driving, team objective, Man vs God, gambling, reflex, knowledge, creation, virtual life.
5. The player in front (the leader) — a **regressive** system.
6. Progressive systems, where early winners snowball and the players behind sink further.
7. Players create the content for you, extending the game's life. LittleBigPlanet GOTY edition included 18 community-made levels; Sims players made story movies that became as popular as the game.
8. SF: characters bunch up, hard to see, collision detection problems, devolves into mob warfare instead of a skill contest. WoW: the world would feel empty — it runs roughly 4,000–5,000 per server.
9. Buffing, character customization, chatting, crafting, economy, grinding, instanced dungeons, item collection, open world structure, griefing, guilds, player housing, PvP, raids, spawn camping, trading/auctions.
10. Trial-and-error crafting may destroy components, but never destroy a hard-to-get, expensive item — don't punish the player twice.
11. The grind. You can't remove it entirely from long-term play, but reduce it or make it entertaining.
12. Communication tools, stat tracking, raid calendars, guild asset customization (plus in-game meeting places).
13. Dedicated PvP servers, or PvP restricted to certain locations.
14. Multiple party configurations, creative thinking, even dumb luck; build legends around raid targets; easy loot sharing based on each player's performance.
15. Players always do the unexpected, and now and then you should allow it. But exploits that spoil other people's fun must be stopped; design systems thoroughly so problems surface before production starts.
</details>

## 🎯 Side quests (5–15 min each)
1. **Mode Bingo (10 min):** Open Brawl Stars (or any multi-mode PvP game). Map every live mode to one of Rogers' 15 modes. Which book mode is missing on mobile, and why?
2. **Goldilocks Lobby (10 min):** Pick 3 F2P games and write their players-per-match. For each, write one sentence on what would break with double the players and with half.
3. **Hell Fence audit (15 min):** For one F2P game, list every anti-griefing/anti-toxicity feature you can find (shields, mute, report, emote-only, cooldowns). Which of the book's problems (griefing, spawn camping) does each solve?
4. **Never punish twice (10 min):** Design a crafting/upgrade system for a mobile RPG where failure exists but never destroys rare inputs. Write the 3 rules.
5. **Regressive race (10 min):** Sketch a 4-player mobile racing event where the leader is most vulnerable. Name the catch-up item and its counterplay.
6. **Trope transplant (15 min):** Pick one MMORPG trope (player housing, raids, auction house…) and pitch in 5 bullets how you'd put it into a match-3 game without breaking its casual vibe.
7. **Exploit pre-mortem (10 min):** Take a simple "team chest" event. List 5 ways a bored teen with 3 accounts could abuse it, and one fix for each.

## ⚔️ Main quest (homework)
**Design a Clan System One-Pager for a casual F2P puzzle game.**
- Include: team size (and why — Goldilocks), help requests (what can be asked/given, limits), one weekly co-op event (shared goal + loot-by-performance + participation floor), one light competitive layer (team vs team or leaderboard), guild tools (communication, stats, calendar, customization), toxicity plan (chat limits, reporting, leader powers), and an anti-exploit list.
- Add a mini LiveOps calendar: 4 weeks showing which social event runs when.
- ✅ **Done when:** one page (or slide) covers all 7 items above; every feature cites the book principle it applies (e.g., "loot by performance — Rogers' raids"); you've listed 3 metrics you'd watch after launch; and you've posted it (Twitter/X, LinkedIn, Discord design channel) with #buildinpublic for feedback.

## 🔬 Play Lab
1. **Clash of Clans (10 min):** Join or browse a clan. Look for: donation requests, member stats, war/event calendar, clan badge. *Question:* which of Rogers' four guild tools does it implement, and which is missing?
2. **Clash Royale or Marvel Snap (10 min):** Play 3 matches. Look for: how communication is limited, how matchmaking feels, match length. *Question:* how does the game prevent toxicity while still letting you taunt?
3. **Royal Match / Candy Crush / Monopoly GO! (10 min):** Find every social feature (team, lives requests, partner events, friend map, trading). *Question:* which feature gives you a reason to open the app tomorrow even if you don't feel like playing?
4. **Brawl Stars (10 min):** Check the event/mode rotation. *Question:* map each live mode to the book's list and note how rotation creates "variety of modes" without new brawlers.

## 🗣️ Feynman check
Explain to a 12-year-old in 60 seconds: *"Why does a game with a clan keep you playing longer than the same game without one — and what has to be built so the other players don't ruin it?"*

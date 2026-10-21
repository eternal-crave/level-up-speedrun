# 📡 DLC 2 — F2P Live: Monetization, LiveOps, Social & Getting Hired
> 🧩 DLC — not from the book · ⏱️ ~150 min study · 📱 F2P relevance ★★★★★ — this is the stuff that happens *after* "the game is fun": how it earns, how it stays alive for years, and how you get paid to design it.

> 🎒 **What this DLC is:** Level Up! (2010) is a console-era book. It teaches you to make a fun game; it can't teach you how a mobile game survives for five years on a store full of free competitors. **F2P1** (DLC 1) gave you the foundations: KPIs, loops, FTUE, progression, economy, retention, motivation and the teardown method. **This DLC (F2P2)** is the "live" half: selling things without being evil, gacha and passes, ads, LiveOps, social systems, data, launch and getting hired.
>
> 📏 **About numbers:** every benchmark here is a **rough rule of thumb**. It varies a lot by genre, platform, region and year. Treat numbers as "ballpark to sanity-check a design", never as facts to quote in an interview without saying "it depends".

## ⚡ TL;DR — the 30-second version
- **Monetization is a design discipline, not a price tag.** You design *what* is for sale, *who* sees it, *when* it appears and *why it feels worth it*. The best offers solve a problem the player already feels.
- **Gacha, passes and ads are three different deals.** Gacha sells *chance*, a pass sells *the right to earn*, and an ad trades *attention* for a reward. Each has its own math, psychology and ethical traps. Gacha also carries legal risk that changes country by country (check current law!).
- **LiveOps = the game's heartbeat.** A layered calendar (daily → weekly → monthly → seasonal → yearly), built from reusable event *templates*, keeps players coming back. You configure events; you don't hand-code them.
- **Social systems are the strongest retention glue.** Friends, clans, co-op and leagues make leaving the game mean leaving people.
- **Data tells you *what* happened; playtests and intuition tell you *why*.** A/B tests need a hypothesis, the right metrics, enough players and patience.
- **Trust is the real currency.** Dark patterns spike revenue this week and kill LTV, ratings and your legal safety later. To get hired, show *thinking*: deconstructions, specs and economy models, shared in public.

## 🗺️ Chapter map
- [ ] 1. Monetization design — what to sell, how
- [ ] 2. Gacha & loot boxes — chance, pity, the law
- [ ] 3. Battle / season pass — earn-it subscription done right
- [ ] 4. Ads in F2P — attention as currency
- [ ] 5. LiveOps — the game's heartbeat
- [ ] 6. Social & competition — people are the glue
- [ ] 7. Data-driven design — measure, test, still think
- [ ] 8. Production pipeline, launch, UA & ASO — prototype to live
- [ ] 9. Ethics & player trust — don't burn the village
- [ ] 10. Getting hired — roles, portfolio, design tests

---

## 1. Monetization design: what you sell, who sees it, when, and why it feels worth it
**🧠 Big idea:** Players don't buy "gems". They buy **a feeling or an outcome**: progress, power, time saved, self-expression, status, or belonging. Your job is to build a store and offers that sell those outcomes **at the moment the player wants them**, at a price that feels fair.

> 🔗 F2P1 already covered the money basics: spender tiers, the KPI zoo (conversion, ARPPU, ARPDAU, LTV), soft vs hard currency, and sources and sinks. Here we design the actual *products* and the *store*.

### 1.1 The IAP menu: types of things you can sell
**📋 The details:**

| IAP type | What it is | Why players buy | Designer watch-outs | Typical examples |
|---|---|---|---|---|
| **Consumables** | Used up when spent: hard currency, boosters, extra moves, energy refills, revives, speed-ups | Solve a problem *right now* ("I'm 2 moves from winning") | They can be bought again and again, which makes them the revenue engine. Overuse feels like "pay or lose" | Extra moves in match-3, timer skips in builders |
| **Durables** (permanent) | Bought once, kept forever: characters, skins, ad removal, permanent boosts ("2× coins forever"), extra build slots | Long-term value, "investment" feeling | One-time revenue. Can break balance if they give power | Extra builder in base-builders (Clash of Clans sells builder huts for gems), "Remove Ads" |
| **Cosmetics** | Looks only: skins, emotes, frames, effects | Expression, identity, status, showing off (→ L05 character) | They need a *visible stage*: other players have to see them. They don't change power, which makes them the ethical gold standard | Skins in Brawl Stars, Mobile Legends, PUBG Mobile |
| **Convenience** | Saves time or taps: auto-battle, skip tickets, extra queue, idle collection | Respect for players' time | If the "inconvenience" was *designed in* just to sell the fix, players smell it | Sweep/skip tickets in RPGs |
| **Subscriptions** | Recurring: monthly card, VIP club, ad-free plus perks | Steady value, daily rewards | Must deliver value *every* period. Must be easy to cancel (store rules plus law) | 30-day "monthly card" that drips premium currency daily (Genshin Impact's Welkin Moon is the famous one) |
| **VIP systems** | Cumulative-spend levels unlocking perks | Status, permanent perks | Ethically debated: they openly reward spending with power and status. Common in Asian 4X/RPG | Spend tiers in many 4X games |
| **Bundles** | Several items for one price | "More value", variety | Need a clear **hero item** (the thing they actually want) plus filler | Holiday bundle: skin + currency + boosters |
| **Starter packs** | One-time, high-value, low-price first offer | Breaks the "I never pay" barrier | Timing is everything (see 1.4) | $0.99–$4.99 pack with a strong character or booster set |
| **Limited-time offers (LTOs)** | Available for hours or days | Urgency, novelty | The urgency must be *real* (fake countdowns = dark pattern, → §9) | Weekend sale, event bundle |
| **Personalized / triggered offers** | Shown to a segment or after a trigger | Relevance ("exactly what I need") | Fairness and exploitation risk (see 1.5) | "Out of lives on a hard level → booster pack" |
| **Passes** | Season or battle pass (→ §3) | Value per dollar, goals | Pass fatigue when there are too many | Brawl Pass, Pass Royale |

- **The magic combo:** consumables pay the bills, durables and cosmetics build attachment, subscriptions and passes build **predictable** revenue and daily habits.
- **The value-stack rule of thumb:** a healthy store has something at every "depth": free (daily gift, ads), tiny ($0.99–$2.99), medium ($4.99–$19.99), big ($49.99–$99.99). If you have nothing for small spenders, they never start. If you have nothing deep, your biggest fans can't support you.

### 1.2 Store design: the store is a level too
**📋 The details:** treat the store like a **level** (→ L09): it has a layout, a flow, a "first thing you see" and a reason to come back.
- **Typical store sections, top to bottom** (the top = most attention):
  1. **Hero / featured offer**: the one offer you most want seen (event bundle, new skin).
  2. **Daily deals**: rotating items, often including a **free daily gift**. The free gift trains a *daily store visit*, so the player sees offers without being nagged.
  3. **Passes and subscriptions**: entry points to recurring value.
  4. **Bundles / special offers.**
  5. **Gacha / chests** (if any), with an odds link (→ §2).
  6. **Hard-currency ladder**: usually ~5–7 packs, bigger packs give a bigger bonus %.
  7. **Cosmetics** catalog.
  8. **Free / ad-reward** corner ("watch an ad for 20 coins").
- **The currency ladder** (classic design):
  - Packs priced like $0.99 / $4.99 / $9.99 / $19.99 / $49.99 / $99.99.
  - **Bonus % grows** with size (volume discount), e.g. +0% / +10% / +20% / +30% / +40% / +50% (hypothetical).
  - Tags: **"Most Popular"** on a mid pack (social proof) and **"Best Value"** on the biggest (anchor).
  - **First-purchase bonus**: "double gems on your first buy of each pack". It makes trying a new tier feel safe.
- **UI rules (→ L08 HUD/UI):**
  - Show **what the item does**, not just its name. Preview skins *in action*.
  - Show **real-money prices** clearly. Virtual-currency-only prices confuse people (and are increasingly a legal issue, → §9).
  - Use **one tap to see contents**, a **clear confirm step** and **no accidental purchases**.
  - Keep a **red-dot notification** for genuinely new or free things only. A red dot that cries wolf trains players to ignore it.
- **Entry points:** the store is not one screen. Offers appear **contextually** (out of moves, before a boss, after a big win) and through **pop-ups** at session start. Cap the pop-ups: one or two per session is a common rule of thumb. Ten pop-ups before the player can play is how you lose them.
- **Web shops (D2C):** since 2024–2025, legal and policy changes in the US and the EU have made it easier for mobile games to link to their **own web stores**, where they avoid some of the store fee (standard store fees are 30%, with 15% tiers for small developers and some subscriptions). Many games now offer web-shop bonuses. The rules differ by country and change often: *check current platform policies*.

### 1.3 Price points, anchoring and value perception
**📋 The details:**
- **Price points:** stores let you choose from many fixed price points. Mobile habits cluster around **.99 endings** (charm pricing) and a few "standard" tiers ($0.99, $1.99, $4.99, $9.99, $19.99, $49.99, $99.99). Players learn these tiers across games, so unusual prices can look odd.
- **Regional pricing:** a price that's an impulse buy in the US can be a day's wage elsewhere. Stores auto-convert, but you can and should **set prices per region** with **purchasing power** in mind. It's fairer and it converts better.
- **Anchoring:** the first number people see becomes their reference. A $99.99 pack sitting next to a $19.99 one makes the $19.99 feel reasonable.
- **Decoy effect:** add a third option designed to make another look better. Example: $9.99 = 1,000 gems, $19.99 = 2,200 gems, $24.99 = 2,300 gems. The $24.99 option exists so the $19.99 looks smart.
- **Reference prices ("was $20, now $5!"):** these are powerful, but they must be honest. A fake "original price" that never existed is deceptive. Consumer law in several regions restricts fake discounts.
- **Value perception tricks that are fine:**
  - Show **concrete outcomes** ("enough for 10 pulls", "finish this event") instead of abstract numbers.
  - Show **"% more"** and **"×N value"** *honestly*, against a real baseline such as the standard gem price.
  - **Bundle a hero item**: one thing they clearly want, plus useful extras.
  - **Price-to-moment fit**: $1.99 for "5 more moves" on a level you've failed 8 times feels cheap. The same thing in your menu feels pointless.
- **Value perception traps:**
  - **Currency fog:** multiple currencies, odd exchange rates and packs that never quite match prices (always 20 gems short) are designed confusion. Players eventually notice and feel cheated.
  - **Inflation of "value" claims:** if every pack claims "1000% value", the claims mean nothing.

> 📏 **Rule of thumb (varies by genre and year):** only a **small minority** of players ever pay. Low single-digit percentages are common, and hardcore strategy and RPG games often run higher than casual. A small share of payers usually generates a large share of revenue. That's why the store needs depth *and* why your duty of care toward heavy spenders matters (→ §9).

### 1.4 First-purchase psychology: the $0 → $0.01 wall
**🧠 Big idea:** the **hardest** purchase is the first one. After it, card details are saved, the mental barrier is broken ("I'm someone who pays for this game"), and repeat purchases get much more likely.
**📋 The details:**
- **Why the first purchase is hard:** "free" is a powerful identity ("I don't pay for mobile games"), there's payment friction (card not on file), the value is uncertain and people are scared of being "that person".
- **Starter pack design checklist:**
  - **High value, low price:** a clearly great deal ($0.99–$4.99 range is common). It's a "hello", not a profit centre.
  - **One-time only** and clearly labelled as such.
  - **Timed to the moment of understanding:** after the player knows what the items *do*, typically after the FTUE (→ F2P1) and often right after the first real challenge or "wall". Not in the first 30 seconds: they don't know what a "Mythic Hero Shard" is yet.
  - **Contains something immediately usable:** instant gratification, so the purchase *visibly* changes the next session.
  - **Optionally time-limited** (e.g. 48–72 h), but honest, and it comes back later for those who missed it, or the next offer is similar.
- **The spending ladder:** after the first buy, offers step up gently ($0.99 → $4.99 → $9.99...). This is called **laddered** or **chained offers**. A modern variant is the **chain offer / endless offer**: a track of rewards where free and paid tiles alternate, so you claim a free tile, then a paid one unlocks the next free one.
- **First-purchase bonuses everywhere:** "first buy of each pack = double". This encourages trying the next tier up.
- **Don't punish non-payers.** Most of your players will never pay, and they're still valuable: they fill matchmaking queues, populate guilds, watch ads, spread word of mouth, and some will convert later.

### 1.5 Personalized offers and segmentation
**📋 The details:**
- **Segmentation:** group players by behaviour: payer status (never / once / repeat), spend level, progression stage, play frequency, recency (lapsed?), preferred mode, region, device.
- **Triggered (contextual) offers:** shown when a specific event happens:
  - Out of moves on a level → moves + booster bundle.
  - Unlocked a new hero → upgrade bundle for *that* hero.
  - Lapsed for 14 days and returning → **win-back / comeback** gift + offer.
  - Finished the battle pass early → next-season preview or bonus tiers.
- **Offer rules:** **cooldowns** (no offer spam), **caps** per day, **priority** (if two offers trigger, one wins) and **A/B testing** (→ §7).
- **Dynamic pricing** (different prices for the same item for different people) is **controversial**. Players compare offers on Reddit and Discord. If someone discovers they pay more for the same thing, trust breaks. A safer approach: **personalize the *content* and the *moment***, keep price ladders consistent.
- **Ethical line:** personalization should match **value to need**. It shouldn't hunt for people showing compulsive patterns (e.g. escalating offers to someone spending at 3 a.m. every night). → §9.

**🎮 Real-game examples:**
- **Clash of Clans:** selling extra builders (a durable) is a classic example of a permanent purchase that changes how fast you progress.
- **Genshin Impact:** the monthly card is a famous small subscription: a small price for a daily currency drip that rewards logging in.
- **Typical match-3** (Candy Crush Saga, Royal Match and similar): "out of moves → buy +5 moves" is the textbook contextual consumable offer.
- **Brawl Stars / Mobile Legends:** cosmetics-heavy stores where skins carry status in front of other players.

**📱 On the job:** a monetization or economy designer's weekly reality: write offer specs (who, what, when, price, cooldown, expected metric), review the store layout for an upcoming event, check last week's offer test results and argue with marketing about pop-up counts.

**🔗 Book link:** L08 (store UI is HUD/menus design), L13 (rewards and power-ups: boosters *are* power-ups for sale), L05 (cosmetics depend on character attachment), L17 (2010 business = sell a $60 box; 2026 = sell a free game forever).

> ⚠️ **2010 → 2026:** the book's world is "player pays once, up front". In F2P the *design* is the business model: every system you build (energy, upgrades, cosmetics) is either part of the monetization or affected by it. The principle that still holds from the book: **respect the player's time and intelligence**.

**🪝 Make it stick:** *A store is a vending machine in a dungeon.* Put it where people get hungry (contextual), stock snacks at every price (depth), label them honestly (transparency) and never glue the coins to the slot (no traps). Healthy offer checklist: **SPEND** = **S**egment (who), **P**rice point (ladder/anchor), **E**xchange value (clear contents), **N**eed moment (contextual trigger), **D**eadline (honest timer only).

---

## 2. Gacha & loot boxes: selling chance, responsibly
**🧠 Big idea:** **gacha** (from Japanese *gachapon* capsule-toy machines) and **loot boxes** sell a **random** reward. They're powerful because unpredictable rewards are deeply motivating (variable-ratio reinforcement, → L13). That same power makes them **gambling-like**, so they're regulated in some countries and scrutinized everywhere. Design them with **math, transparency and guardrails**.

> ⚖️ **Check current law.** Gacha regulation changes fast and differs by country. The summary below is a general orientation as of the mid-2020s, **not legal advice**. Before shipping, your studio's legal and publishing team checks the current rules for every target country.

### 2.1 Vocabulary you must know
- **Pull / summon / roll / wish:** one random draw. A **10-pull** (multi) often guarantees at least one item of some minimum rarity.
- **Rarity tiers:** e.g. common / rare / epic / legendary (or 3★/4★/5★).
- **Rates / odds:** the probability of each rarity or item.
- **Banner:** a time-limited pool with **featured (rate-up)** items.
- **Standard / permanent banner:** always available, no featured item.
- **Pity:** a guarantee that limits bad luck:
  - **Hard pity:** a guaranteed top-rarity item by pull N.
  - **Soft pity:** rates **increase** step by step after some threshold, so most people hit before hard pity.
  - **Pity carryover:** whether your counter carries to the next banner (designs differ, so disclose it clearly).
- **50/50 + guarantee:** when you hit top rarity, there's a chance it's the featured item. If you "lose" the 50/50, the *next* top-rarity pull is guaranteed featured. Genshin Impact popularized this structure.
- **Spark / exchange:** each pull gives points. After enough points, you **choose** an item directly. The term "spark" comes from Granblue Fantasy. It turns "maybe never" into "definitely, eventually".
- **Duplicates (dupes):** what happens when you pull something you already own. This is a huge design decision (2.3).
- **Step-up banner:** each step has different costs or guarantees.
- **Box gacha:** a finite pool **without replacement**. Every pull removes an item, so the prize is guaranteed once you've emptied enough of the box.
- **Selector / choice ticket:** pick one from a set. A non-random reward used for goodwill.

### 2.2 The math: averages lie, tails cause rage
**📋 The details (worked example, hypothetical numbers):**
- Say the featured item has a **1% chance per pull**, with no pity.
  - **Expected pulls** = 1 / p = **100 pulls** on average.
  - But the chance you **still don't have it after 100 pulls** = 0.99¹⁰⁰ ≈ **37%**. More than a third of players are "below average" lucky.
  - **1 in 10 players** need **~230+ pulls** (0.99²²⁹ ≈ 0.10). Those players are the angry Reddit threads.
- **Pity fixes the tail.** With hard pity at, say, 80 pulls, *nobody* goes past 80. The worst case is known and plannable, so players can **save** toward a guarantee instead of gambling blindly.
- **Consolidated rate:** some games disclose both the **base rate** and the **consolidated rate** (the effective average including pity). Be clear about which one you show.
- **Free-player budget:** economy designers calculate **how many pulls a non-payer earns per banner cycle** (from events, dailies, the pass). Rule of thumb: a patient, engaged free player should be able to get *some* featured items by saving. Otherwise they feel locked out and churn, and they're also your matchmaking population and your community.
- **Banner cadence:** banners rotating every few weeks create a steady rhythm of "save or spend?" decisions. Reruns of popular items reduce FOMO anxiety.

```
Probability of NOT getting a 1% item after N pulls (no pity)
N=50   ████████████████████████████████  ~61%
N=100  ███████████████████               ~37%
N=200  ███████                           ~13%
N=230  █████                             ~10%
With hard pity at 80: worst case = 80. Period.
```

### 2.3 Duplicates: the hidden design lever
| Dupe handling | How it works | Pros | Cons |
|---|---|---|---|
| **Dupes = power** | Copies unlock upgrades (constellations, limit breaks, stars) | Every pull matters, deep chase | Can become pay-to-win and an endless "max copies" chase |
| **Dupes = currency/shards** | Convert to dust/shards to craft or buy what you want | Bad luck turns into progress toward a choice (Hearthstone's crafting dust is the classic example) | Conversion rate is often stingy |
| **Duplicate protection** | No dupes until you own everything in a tier/set | Feels very fair, collection completes | Less long-term revenue from that pool |
| **Dupes = cosmetic variants** | Copies unlock alt looks or effects | No power pressure | Less compelling for some players |

### 2.4 Disclosure and regulation (orientation map; check current law!)
- **Platform rules:**
  - **Apple App Store:** since 2017 its guidelines require apps offering loot boxes or random paid items to **disclose the odds before purchase**.
  - **Google Play:** has a similar odds-disclosure requirement (since 2019).
- **Age-rating labels:** **PEGI** (Europe) and the **ESRB** (North America) added an "In-game purchases (includes random items)" label around 2020.
- **Country snapshots:**
  - **China:** has required publishing the odds of random items since 2017, and strictly limits minors' play time and spending.
  - **Japan:** in 2012 the consumer authority declared **"kompu gacha"** (complete gacha: collect a full set of random items to unlock a prize) illegal. Industry guidelines also cover odds display and related practices.
  - **South Korea:** a law making **probability disclosure mandatory** took effect in **2024**. Before that it was self-regulation.
  - **Belgium:** the gaming regulator concluded in **2018** that paid loot boxes can count as **illegal gambling**. Some publishers removed or disabled paid loot boxes there. Enforcement has been described as patchy.
  - **Netherlands:** an early regulator action was later overturned by the country's highest administrative court (2022). The legal status remains debated.
  - **UK:** in 2022 the government chose **not** to classify loot boxes as gambling. Instead it backed **industry-led principles**, e.g. no loot box purchases by under-18s without parental consent, and better odds transparency.
  - **Australia:** from **2024**, classification rules give games with paid loot boxes a higher minimum age rating, and simulated gambling gets an adults-only rating.
  - **Brazil:** a **2025** child-protection law restricts loot boxes in games aimed at or likely to be used by minors. Check implementation details.
  - **USA:** there's no federal loot box law. But the **FTC** enforces consumer and children's privacy law. Epic Games (Fortnite) settled in 2022 for hundreds of millions of dollars over children's privacy and "dark pattern" purchase flows. In 2025 Genshin Impact's publisher settled over loot box sales to minors and how odds and currency were presented.
  - **EU:** consumer authorities have pushed principles for **clear in-game currency pricing** (2025), and loot box rules are under ongoing debate.
- **What "compliant and decent" usually looks like:** odds shown **before** purchase and one tap away, pity rules explained in plain language, a **pull history**, real-money prices visible, **age-gating or parental controls**, **no cash-out** (items can't be converted back to real money, which is a gambling red line), and no loot boxes in games aimed at kids.

### 2.5 Designing gacha well (if you must)
- **Ask first: does this game need gacha?** Alternatives: **direct purchase** (see it, buy it), a **rotating shop**, **passes**, **crafting** and **choice tickets**. Plenty of successful games sell cosmetics directly.
- **If yes, use the PODS guardrails:** **P**ity, **O**dds disclosed, **D**upes made useful, **S**park/selector so luck always converts into progress.
- **Reveal animation:** a little build-up ("the glow turns gold!") is part of the fun. Fake **near-misses** designed to feel like "almost won" are manipulative.
- **Celebrate free pulls:** generous free pulls and events build goodwill, and goodwill converts better than pressure.
- **Watch power creep:** if every new banner unit outclasses the last, the gacha becomes a treadmill and veterans feel their investment evaporating.
- **Never let real money in and real money out:** trading markets with real-money value turn a game into a casino.

**🎮 Real-game examples:**
- **Genshin Impact / Honkai: Star Rail:** a visible pity system, a featured-banner guarantee and a wish/warp history page.
- **Hearthstone:** card packs with **dust** crafting, so duplicates turn into choice.
- **Granblue Fantasy:** origin of the "spark" term (trade a fixed number of pulls for a chosen unit).
- **Marvel Snap and Pokémon TCG Pocket:** collection games that lean on frequent free reward flows, which shows how much free generosity shapes the perception of a randomized collection.

**📱 On the job:** gacha work is **economy and systems design**: spreadsheets of rates, expected cost per featured unit, free-player pull budgets, dupe value curves, Monte Carlo simulations of 100,000 players (→ F2P1 economy), and very close collaboration with legal.

**🔗 Book link:** L13 (reward schedules: why random rewards are so compelling), L05 (character collection: people pull for characters they *love*), L16 (the pull animation is a tiny cutscene).

**🪝 Make it stick:** *A gacha without pity is a slot machine wearing a cute hat.* Fair gacha comes in **PODS** 🫛: Pity, Odds disclosed, Dupes useful, Spark/selector. And remember: **averages lie, tails rage**.

---

## 3. Battle / season pass: sell the right to earn
**🧠 Big idea:** a **battle pass** (or **season pass**) is a time-limited track of rewards you climb by playing. Everyone gets a **free track**. Buying the pass unlocks a **premium track** of better rewards. Players aren't buying items, they're buying **the opportunity to earn them**. That feels fair, builds a daily habit and is often the best "first purchase" in a game.

### 3.1 Anatomy of a pass
**📋 The details:**
- **Season length:** commonly **~4 weeks** on mobile (often aligned to a calendar month). Some games run longer seasons (6–10 weeks). Rule of thumb: shorter = more frequent purchase moments, but more pressure and more content needed.
- **Tiers:** a fixed number of levels (often 30–100). Each tier needs **pass XP** (also called points, stars or tokens).
- **Tracks:**
  - **Free track:** for everyone. It must feel genuinely rewarding, or the pass feels like an ad.
  - **Premium track:** unlocked by purchase (commonly priced in the ~$5–$10 range, rough rule of thumb). Better rewards and the signature cosmetic.
  - **Premium+ / deluxe:** pricier, includes **instant tier skips** and/or extra rewards. It's for players who want to buy speed.
- **XP sources:**
  - **Playing** (matches, levels, time spent).
  - **Daily missions** ("win 3 matches", "use 50 boosters").
  - **Weekly missions** (bigger, can be completed any day that week, which is a built-in catch-up).
  - **Season / event missions.**
  - Sometimes **purchases or tier skips** (monetized speed).
- **Retroactive unlock:** if you buy the premium pass at tier 23, you instantly receive **all premium rewards from tiers 1–23**. This is a huge conversion moment: the player sees a pile of locked loot they *already earned*.
- **Overflow / bonus tiers:** after the final tier, extra repeatable rewards (e.g. a chest every N XP) so engaged players keep earning.
- **Variants:**
  - **Event pass:** short, attached to a single LiveOps event (→ §5).
  - **Progression pass / milestone pass:** tied to player level or trophies instead of time. It's permanent and has no FOMO.
  - **Mini pass:** cheap, short, narrow (e.g. a "booster pass" for a week).

### 3.2 Why it works
- **Clear goal + visible progress bar**: the **goal-gradient effect** (people speed up as the finish line nears).
- **"Locked loot" visualization:** premium rewards visible behind a lock on *your* track. It's mild loss aversion, so keep it honest.
- **Daily missions = a daily habit** (→ F2P1 retention). The pass gives the player a reason to log in today.
- **High perceived value per dollar:** a strong **first purchase** for people who never pay.
- **Predictable revenue** for the studio, which helps plan content.
- **Fairness feeling:** "I earned it" beats "I bought it" for status.

### 3.3 XP pacing: the core math (worked example, hypothetical)
**📋 The details:**
- **Design target:** decide **who should finish, and when**. A common goal: a regularly engaged player (say ~5 days a week) finishes **with a little buffer before the season ends**. Hardcore players finish earlier and get bonus tiers. Casuals reach a good chunk and feel they got value.
- **Example season:** 30 days, **50 tiers × 1,000 XP = 50,000 XP**.
  - Target player plays ~21 of 30 days and should finish around day 26.
  - XP budget per active day ≈ 50,000 / 21 ≈ **2,400 XP**.
  - Split it across sources:

| XP source | Per unit | Count over season | Total |
|---|---|---|---|
| Daily missions | 1,000/day | 21 active days | 21,000 |
| Gameplay XP | ~800/day | 21 active days | 16,800 |
| Weekly missions | 3,000/week | 4 weeks | 12,000 |
| **Total** | | | **~49,800 ≈ 50,000** ✅ |

- **XP per tier: flat or rising?**
  - **Flat** (same XP each tier) is easy to understand and keeps a steady reward rhythm. It's common.
  - **Rising** makes early tiers quick (hook) and later tiers slower. Careful: rising curves can make the end feel impossible.
- **Simulate personas** in a spreadsheet: casual (2 days/week), regular (5 days/week), hardcore (daily + extra). Check when each hits key tiers. → F2P1 economy spreadsheets.

### 3.4 Catch-up mechanics: don't punish late joiners
- **Weekly missions that stay open** all week (and sometimes stack until the season ends).
- **XP boosts** for players who are behind the "expected" curve, or for the last week of the season.
- **Double-XP weekends / events.**
- **Rested XP:** a bonus multiplier that builds up while you're away.
- **Tier purchase:** buy levels with premium currency. It's monetized catch-up, so price it so it never feels mandatory.
- **Late-season discount** on the pass itself (careful: it can annoy early buyers. Some games instead add bonus rewards for late buyers).

### 3.5 The reward curve: rhythm, peaks and the chase item
**📋 The details:**
- **Instant value on purchase:** the first premium tier gives something *great right away* (a skin, a hero), so the purchase visibly pays off.
- **Rhythm of peaks:** small–small–medium–small–small–**BIG**, repeating. Put a milestone reward every ~5–10 tiers.
- **No dead tiers:** every tier gives *something*, even if small. An empty tier is a "why bother" moment.
- **The chase reward** (signature cosmetic/character) sits at or near the **final tier**. It's the reason to finish.
- **Mix of reward types:** currency (soft + some hard), progression items (upgrade materials), cosmetics (status), boosters (consumables), gacha tickets (if any).
- **Premium currency return:** some passes give back enough premium currency over the track to buy (most of) the next pass. Fortnite made this famous. It rewards loyalty and drives repeat purchase.
- **Value framing:** "worth ×10 its price" claims should be computed against your real store prices.

```
Tier:    1    5    10   15   20   25   30   35   40   45   50
Free:    ·    ▪    ■    ▪    ■    ▪    ■    ▪    ■    ▪    ★(nice)
Premium: ★    ▪    ■    ▪    ★    ▪    ■    ▪    ★    ■    ★★★(CHASE)
         ↑ instant value          ↑ midpoint peak             ↑ the reason to finish
(· small  ▪ minor  ■ medium  ★ big)
```

### 3.6 Pass pitfalls
- **Too grindy:** the pass becomes a second job, players burn out, and resentment builds ("I have to play 2 hours a day or I lose what I paid for").
- **Too easy:** no engagement lift, and you've given away value.
- **Pay-to-win in the pass:** power rewards in a PvP game make the pass feel mandatory.
- **Pass soup:** a season pass + an event pass + a VIP pass + a "mega pass" at once means fatigue and confusion. Rule of thumb: one main pass plus at most one small event pass at a time.
- **Forced-mode missions:** "win 5 games in the mode you hate" generates resentment. Offer **mission rerolls** or choices.
- **Reward inflation:** each season must feel as good as the last, so plan a sustainable value level from season 1.
- **FOMO cruelty:** exclusive rewards that never return are powerful but stressful. Many games now bring old pass items back later (in the store or reruns).

**🎮 Real-game examples:**
- **Dota 2 and then Fortnite** popularized battle passes on PC and console in the late 2010s.
- **Mobile adopted them fast:** **Clash of Clans** (Gold Pass), **Clash Royale** (Pass Royale), **Brawl Stars** (Brawl Pass).
- **Fortnite's pass** is famous for returning enough premium currency to buy the next one if you finish it.

**📱 On the job:** pass design = a **reward track spreadsheet** (tier, free reward, premium reward, value in $, XP needed, cumulative XP, persona completion day), plus mission pool design and the season theme brief for art.

**🔗 Book link:** L13 (rewards: pacing, variety, the "big reward at the end"), L05 (the chase skin feeds character identity), L08 (the pass screen is a HUD/menu challenge: progress, locked rewards, timers on one screen).

**🪝 Make it stick:** *A battle pass is a gym membership that actually makes you go.* You pay for the chance, the dailies drag you in, the final tier is the beach body. Rhythm: **"small, small, medium, small, small, BOOM."**

---

## 4. Ads in F2P: attention as currency
**🧠 Big idea:** ads let **non-payers** generate revenue. The best ad design treats the player's attention as something they **choose to trade** (rewarded video), not something you steal (badly placed interstitials). **Hybrid monetization** (ads + IAP) is now normal across casual and even midcore games.

### 4.1 Ad formats
| Format | What it is | Player feeling | Revenue & notes |
|---|---|---|---|
| **Rewarded video** | Opt-in: "Watch an ad → get a reward" | 😀 "My choice, I got something" | Usually the best engagement and strongest eCPM. Retention-friendly when the reward is good |
| **Interstitial** | Full-screen ad at a transition (between levels) | 😐→😡 depending on frequency | Big revenue in ad-driven casual games. The main cause of ad-related churn if overused |
| **Rewarded interstitial** | Shown at a natural break, with a reward and a chance to skip | 😐 | Hybrid: gentler than a forced interstitial |
| **Banner** | Small persistent strip | 😶 ignored | Low revenue. Clutters the UI (→ L08). Often dropped in better-looking games |
| **App-open ad** | Shown when the app launches or resumes | 😒 | Can hurt first impressions. Use with care |
| **Offerwall** | "Install / complete tasks in other apps → get currency" | Mixed | Can pay well. Quality and fraud issues. Common in some casual and casino-style games |
| **Playable ads** | Interactive mini-demos | (Seen in *other* games) | Mostly a **user acquisition** format (→ §8), not a monetization one |

### 4.2 Rewarded video placement design
**📋 The details:** a good rewarded placement offers **real value** at a **natural moment** with a **clear, honest reward**.
- **Classic placements:**
  - **Double rewards** after a level or match ("×2 coins").
  - **Continue / revive** after failing (high intent!).
  - **Free chest / spin / daily item** in the store.
  - **Speed up a timer** (skip 30 min of building).
  - **Extra lives / energy.**
  - **Try a booster or skin** for one level (a taste that can convert to IAP).
  - **Reroll** a set of choices or a shop rotation.
- **Placement rules:**
  - **Visible in context.** The offer appears right where the player feels the need.
  - **Daily caps.** Limited views keep the reward feeling special and protect IAP value.
  - **Don't cannibalize IAP.** If an ad gives the same thing a $4.99 pack gives, why buy? Ads should give **small, frequent** value; IAP gives **big, permanent** value.
  - **Never lie about the reward**, and always deliver it (failed ad loads should still give the reward or clearly retry).
  - **Opt-in rate** (how many players choose to watch) and **engagement rate** (how often each player watches) are your health signals.

### 4.3 Interstitial rules of thumb (varies by game)
- **Grace period:** no interstitials during the FTUE (→ F2P1). First impressions matter more than a few cents.
- **Frequency caps:** a minimum time between interstitials (e.g. every couple of minutes at most) and a minimum number of levels between them.
- **Natural breaks only:** after a level completes, never mid-action.
- **Not after every loss.** Losing *and* being forced to watch an ad stacks frustration.
- **Turn off forced ads for payers.** Anyone who paid anything usually shouldn't see interstitials. It's a common goodwill rule.
- **"Remove Ads" IAP:** a durable purchase that removes forced ads (rewarded ads often stay, since the player chooses them, or they're replaced by free rewards).

### 4.4 Hybrid monetization
- **The idea:** ads monetize the **majority who never pay**, while IAP monetizes the **minority who do**. One game, two revenue streams.
- **Hyper-casual → hybrid-casual:** pure ad-driven hyper-casual games got squeezed by rising UA costs and privacy changes (Apple's **ATT** in 2021 limited ad tracking). Many studios moved to **hybrid-casual**: simple core + meta progression + IAP + ads. Archero and Survivor.io-style games are well-known references for "simple controls, deep meta, mixed monetization".
- **Segmentation:** show more rewarded opportunities to non-payers, fewer forced ads to engaged players, none to payers.
- **Ad revenue varies by region:** ad prices (eCPM) are typically much higher in wealthy markets, so the same design earns very different amounts in different countries.
- **Mediation:** studios use **ad mediation** platforms (e.g. AppLovin MAX, Unity LevelPlay, Google AdMob) that auction each ad slot among many networks. As a designer you won't run this, but you should know it exists.

### 4.5 Ad fatigue and the hidden cost
- **Ad fatigue:** watching the same ads over and over lowers engagement with rewarded offers, and annoying ads push players to quit.
- **The hidden cost:** forced ads earn a little today but can lower retention, and lost retention means lost future revenue (both ad *and* IAP). Always A/B test frequency changes against **D7/D30 retention and LTV**, not just ad revenue (→ §7).
- **Ad quality:** inappropriate, loud or broken ads hurt *your* game's reputation and reviews.
- **Privacy and consent:** EU rules require consent for personalized ads, Apple ATT requires a permission prompt to track, and **kids' games** have strict rules (only certified ad networks, no behavioural targeting, → §9).

**🎮 Real-game examples:**
- **Ad-heavy puzzle and casual games** (Block Blast!, Helix Jump-style hyper-casual hits): interstitials between rounds plus rewarded continues.
- **Archero / Survivor.io-style hybrid-casual games:** rewarded ads for extra chests or revives *alongside* IAP and passes.
- **Typical match-3:** rewarded videos for small daily boosts, while premium boosters stay in IAP.

**📱 On the job:** you'll design the **ad placement map** (every rewarded and interstitial spot, its reward, its cap, its trigger rules) and defend it in reviews with retention data.

**🔗 Book link:** L13 (rewarded ads are just reward design with a price of 30 seconds), L08 (banners and pop-ups eat screen space: HUD rules apply), L17 (2010 business models didn't include ad-funded games at this scale).

> ⚠️ **2010 → 2026:** in 2010 ads in games meant billboards in racing games. Today ads are a core monetization pillar for casual mobile games, and ads in *other* games are how players find *yours* (→ §8).

**🪝 Make it stick:** *Rewarded ads are a tip jar the player chooses to drop a coin in. Interstitials are a toll booth on every road.* Toll booths are fine on the highway (natural breaks), terrible in your living room (mid-action).

---

## 5. LiveOps: the game's heartbeat
**🧠 Big idea:** in **games as a service (GaaS)**, launch is the **beginning**, not the end. **LiveOps** (live operations) is the ongoing work of running events, offers, seasons, balance and community for years. Players return because **something new is happening**, and the studio earns because events create fresh reasons to engage and spend.

### 5.1 Why events exist (the goals)
- **Retention:** a reason to come back today, this weekend, this month.
- **Re-engagement:** lapsed players see "a new event!" in a push notification and return.
- **Monetization:** event-specific offers, event passes and extra tries.
- **Novelty without new systems:** a twist on the existing core loop feels fresh at low cost.
- **Community moments:** everyone experiencing the same thing together (holidays, collabs).
- **Economy health:** events can act as **sinks** for excess currency, or as **sources** when the economy needs a boost (→ F2P1).
- **Testing ground:** try a new mode as a limited event before building it permanently.

### 5.2 Event types (the LiveOps toolbox)
| Event type | How it works | Main goal | Watch-outs |
|---|---|---|---|
| **Collection / token event** | Earn special tokens from normal play → spend on a reward track or event shop | Engagement, play more | Token pacing; don't make it a grind |
| **Points race / leaderboard** | Earn points, rank against others; rewards by rank | Competition, intensity | Global boards demotivate most players → use small **buckets** |
| **Race event** | You vs a small group (e.g. 5–10 players): first to reach a goal wins | Short bursts of intensity | Matchmaking fairness (bots vs real?) and transparency |
| **Tournament** | Bracketed or entry-based competition, often with an entry cost | Competitive players, spending | Pay-to-win risk; cheating |
| **Team / clan event** | Guild works together toward goals or competes against other guilds | Social retention (→ §6) | Free-rider resentment; "carry" pressure |
| **Community / global goal** | The entire player base contributes to one target | Togetherness, buzz | Make individual contribution visible |
| **Limited-time mode (LTM)** | New rules, map or mode for a short time | Novelty, testing modes | Splitting matchmaking queues |
| **Boss raid** | Special high-HP boss, often co-op | Co-op, power checks | Power gates exclude newer players |
| **Story / narrative event** | New chapter, characters or dialogue (→ L16) | Emotional engagement | Content cost is high |
| **Holiday / seasonal** | Themed (Halloween, Lunar New Year, summer...) | Moments, offers | Regional and cultural sensitivity |
| **Collab / crossover** | Partner IP (film, anime, brand) | Buzz, new players | Licensing costs, approval timelines |
| **Login / streak event** | Rewards for consecutive days | Habit | Streak anxiety → allow catch-ups |
| **Album / sticker collection** | Collect sets of cards/stickers; often with trading | Long arc + social | Rare-card frustration (→ dupe rules §2) |
| **Mini-game event** | A separate mini-game (puzzle, runner, wheel) | Variety | Must still tie into the core economy |
| **Milestone event** | Reach X (level, trophies) within the window | Push progression | Feels impossible if gated too high |
| **Sale / offer event** | Discounts, bonus currency | Revenue spikes | Training players to wait for sales |

### 5.3 Event anatomy: what goes in an event spec
1. **Theme and fantasy:** the story hook and art direction.
2. **Duration and schedule:** start and end times (time zones!), and whether it repeats.
3. **Entry requirement:** a level gate, so new players aren't confused.
4. **Core action:** what the player actually does. Ideally the **existing core loop + a twist**.
5. **Progress mechanic:** points, tokens, a bar, a map.
6. **Reward track:** milestones, final reward, values.
7. **Competition layer:** leaderboard bucket size, rank rewards (if any).
8. **Social layer:** team contribution, gifting.
9. **Monetization hooks:** event pass, event bundles, extra tries, and their prices.
10. **Economy impact:** sources and sinks it adds and how much currency it injects.
11. **UI and flow:** entry button, event screen, progress HUD, end screen (→ L08).
12. **Communication:** push notifications, inbox mail, loading-screen art, social media.
13. **Success metrics:** participation %, completion %, retention lift, revenue, sentiment.
14. **Risks and fallback:** exploits, server load, what to do if it breaks (pause, compensate).

### 5.4 The event calendar and cadence
**📋 The details:** LiveOps is **layered rhythm**. Different beats run on different clocks:

| Beat | Typical content | Feels like |
|---|---|---|
| **Daily** | Daily missions, login reward, daily deals, daily reset | Tick |
| **Weekly** | Weekend events, weekly leaderboards, guild war cycle | Tock |
| **Bi-weekly / main event rotation** | Main featured events rotating every ~1–2 weeks | Drum |
| **Monthly** | New season + battle pass, new banner, new cosmetics | Gong |
| **Quarterly** | Major updates: new features, new areas, big balance passes | Boom |
| **Yearly** | Anniversary (often one of the biggest moments of the year), major holidays | Cake 🎂 |

- **Stacking:** at any moment there's usually **one primary event**, **one or two secondary events** and **always-on systems** (pass, dailies). Rule of thumb: the player should understand "what's happening right now" in **one glance**.
- **Avoid event soup:** ten simultaneous timers overwhelm and stress players. Clarity beats quantity.
- **Alternate the flavour:** competitive → cooperative → relaxing collection → competitive. Back-to-back intense events burn people out.
- **Leave breathing room:** a quieter week makes the next big event feel bigger.
- **Plan ahead:** calendars are usually planned weeks to months ahead (rough rule: 1–3 months for regular events, longer for collabs and anniversaries), with flexibility to swap in reactions.
- **Cultural calendar:** different regions have different holidays, school schedules and sensitivities. A global game localizes its calendar.

```
WEEK  Mon Tue Wed Thu Fri Sat Sun
 1    [—— Collection event: "Spring Bloom" ——]  [Weekend race]
 2    [—— Team event: Guild vs Guild ———————]  [Weekend race]
 3    [—— Leaderboard: "Bloom Cup" —————————]  [2x XP weekend]
 4    [—— Limited mode + finale ————————————]  [Season ends → new pass]
Always on: battle pass · dailies · daily deals · login calendar
```

### 5.5 The content pipeline: configure, don't rebuild
**📋 The details:**
- **Event templates / frameworks:** engineers build a **flexible event system once** (e.g. "collection event", "race event"). Designers then create new events by **configuring** them: rewards, durations, art, rules, all in data.
- **Remote config / server-driven content:** change numbers (drop rates, prices, difficulty, event schedules) **without a client update**. App store reviews and player update rates make client updates slow.
- **Reskins:** the same event template with new art and theme is efficient, and players accept it if the twist is fresh.
- **Asset delivery:** download event art **on demand** (asset bundles) so the base app stays small.
- **Release train:** client updates on a fixed cadence (e.g. every few weeks); events and offers via config in between.
- **LiveOps tools:** a dashboard to schedule events, target segments, send inbox messages and rewards, and roll back mistakes.
- **QA for live content:** test configs on staging servers, check time zones, run "dry runs", and have a kill switch.
- **The content treadmill:** players consume content faster than teams can make it. Antidotes: **systemic content** (PvP, procedural levels, UGC), **remixing** existing content, and **sustainable cadence** planning.

### 5.6 Live balancing and running the economy
- **Balance changes** (buffs and nerfs) keep the meta fresh and fix problems. Communicate them with **clear patch notes explaining why**.
- **Paid-item nerfs are dangerous:** if you weaken something people paid for, expect anger. Common practice: **compensate** (refund resources or currency, offer a free swap) and explain.
- **Economy monitoring:** track currency balances over time. If sources outpace sinks, prices lose meaning (inflation). Add sinks or adjust sources (→ F2P1).
- **Level/difficulty tuning:** match-3 and puzzle teams watch per-level stats (attempts per win, churn per level, booster use) and **retune hard levels via config**. This is daily work for **level designers** (→ L09).
- **Exploits and bugs:** hotfix fast, compensate affected players fairly (the classic **"compensation mail"**: an apology plus gems), and don't over-punish players who didn't know.
- **Community loop:** community managers gather feedback from Discord, Reddit and socials. Designers read it as *data about feelings* (→ §7).
- **Sunsetting:** games end. An honest end-of-service plan (advance notice, no last-minute cash grabs, refunds where required) protects the studio's reputation for its *next* game.

**🎮 Real-game examples:**
- **Pokémon GO:** recurring **Community Days** (a featured Pokémon with boosted spawns for a few hours) are a textbook monthly beat; big festivals act as yearly peaks.
- **Monopoly GO!:** famous for **dense, overlapping events**: tournaments, partner (co-op) events and sticker albums with trading.
- **Brawl Stars:** rotating **limited-time modes** alongside the permanent ones.
- **Hay Day:** the weekly neighborhood **Derby** (a team competition cycle).
- **Township:** **Regattas**, a team event cycle in a farming/city game.

**📱 On the job:** LiveOps designers own the **calendar**, write **event specs**, configure events in tools, review **post-event reports** ("participation was 61%, completion 18%: the final milestone was too far, so cut it 20% next time") and plan the next quarter's beats.

**🔗 Book link:** L09 (events are temporary levels: pacing, difficulty, reward placement still apply), L16 (story events borrow cutscene craft), L13 (event rewards follow reward-design rules), L04 (event specs are mini design documents).

> ⚠️ **2010 → 2026:** the book assumes a game is *finished* when it ships (plus maybe DLC). F2P games are **never finished**: the live team is often bigger than the launch team, and most revenue arrives *after* launch.

**🪝 Make it stick:** the LiveOps heartbeat goes **Tick-Tock-Drum-Gong-Boom-Cake**: daily, weekly, event rotation, monthly season, quarterly update, yearly anniversary. And: *build the oven once, bake a hundred cakes* (templates, not one-offs).

---

## 6. Social & competition systems: people are the glue
**🧠 Big idea:** the strongest reason to keep playing isn't a reward, it's **other people**. When your friends, your clan and your rivals are in the game, quitting means leaving them. Social systems create **switching costs, reciprocity, status and belonging**, and they're some of the most powerful long-term retention engines in F2P.

> 🔗 **L14 (multiplayer)** covers the book's take on co-op vs competitive play, modes and player counts. This section is the F2P layer on top: social *systems* designed for retention.

### 6.1 Why social retains (the psychology)
- **Switching cost:** your clan, friends list and rank don't transfer to another game.
- **Reciprocity:** someone gifted you a life, so you gift one back (and log in to do it).
- **Obligation / commitment:** "my team needs my attacks in the war." Powerful, so use it gently.
- **Status:** ranks, leagues, rare cosmetics seen by others.
- **Belonging and identity:** "I'm a member of *Night Owls*." The clan becomes a little community.
- **Social learning:** clanmates teach strategy, so new players progress instead of quitting confused.
- **Competition:** rivals give goals that designers don't have to build content for. Players *are* the content.

### 6.2 The social systems toolbox
**📋 The details:**
- **Friends:**
  - Friend lists, friend codes, platform friends (Game Center / Google Play Games), contact or social logins.
  - **Friend leaderboards:** "beat your friend's score" is more motivating than a global top 100.
  - **Gifting:** send lives, energy or small items daily (a classic from the Facebook-era Candy Crush). Low effort, high reciprocity.
  - **Helping:** speed up a friend's timer or send a requested item.
  - **Referral rewards:** invite a friend, both get something.
- **Clans / guilds / alliances / teams:**
  - **Chat** (with filters and moderation) and **quick emotes**. Limited communication reduces toxicity (Clash Royale's emotes are a famous example).
  - **Donations and requests:** ask for cards or resources, clanmates donate (Clash Royale card requests). Help is visible and builds bonds.
  - **Alliance help:** clanmates tap to shorten each other's build timers, a common 4X mechanic (Rise of Kingdoms-style).
  - **Clan goals and quests:** a shared progress bar with shared rewards.
  - **Clan wars / clan vs clan:** scheduled competitions (Clash of Clans Clan Wars and Clan War Leagues).
  - **Clan boss / raid:** co-op damage on a shared boss.
  - **Clan shop and currency:** rewards from clan activity.
  - **Roles:** leader, co-leader, elder. Players who manage a clan are among your most invested players.
  - **Clan discovery:** recommending active clans that match your level and language.
- **Co-op:**
  - **Raids:** a shared boss with friends or strangers (Pokémon GO raids, including remote ones).
  - **Co-op modes:** play together against the game.
  - **Partner events:** build something together with a few chosen partners (Monopoly GO! partner events).
- **PvP:**
  - **Asynchronous PvP:** attack another player's *saved* base or team, with no need for them to be online (Clash of Clans attacks). Mobile-friendly: no waiting, no lag.
  - **Synchronous / real-time PvP:** live matches (Clash Royale, Brawl Stars, Mobile Legends: Bang Bang, PUBG Mobile). Needs good **matchmaking**, netcode and short matches.
  - **Ladders:** trophies or rating (Elo-like **MMR**). Seasons with a **soft reset** keep hope alive.
  - **Ranked modes:** stricter rules, higher stakes, ranked rewards.
- **Leagues (bucketed competition):**
  - Players are grouped into **small leagues** (e.g. 30–50 people). Top finishers **promote**, bottom finishers **demote**, and it all resets weekly. **Duolingo's leagues** are the famous non-game example. Many casual games use the same structure.
  - Why it works: in a small bucket you have a *real* chance to win. In a global board of millions you don't.
- **Leaderboards: design rules**
  - **Global boards** motivate the top 0.1% and demotivate everyone else.
  - **Bucketed / local / friend** boards give everyone a reachable goal.
  - Show **"you're 3 spots from promotion"**, i.e. the nearest goal, not your global rank #2,483,991.
- **Trading:** card or sticker trading (Pokémon TCG Pocket trading, Monopoly GO! sticker swaps) creates social interaction. Watch out for economy exploits, bots and **real-money trading**.
- **Spectating, replays, sharing:** watching top players, sharing your best moments. Free marketing and social proof.

### 6.3 Social design rules
- **Unlock social after the FTUE.** Learn the game first, then join a clan. Clash of Clans unlocks clans once you rebuild the Clan Castle, which is a nice in-world gate.
- **Match social intensity to the audience:**
  - **Casual players:** low-pressure social (gifting, helping, team events with no punishment for being absent).
  - **Midcore/hardcore players:** competition, wars, rankings, coordination.
- **Prevent "guild death":** when a clan goes inactive, its members churn. Antidotes: auto-recommend active clans, kick or merge inactive ones, encourage leadership hand-over.
- **Fair competition:** pay-to-win in PvP poisons the social layer. Players will tolerate paying for speed or cosmetics far more than paying for wins against them.
- **Obligation with mercy:** let players opt out of a war, mark themselves "on vacation", or contribute asynchronously.
- **Safety:** chat filters, report and block tools, special protections for minors (→ §9).
- **Free riders:** in team events, make contribution visible and reward participation fairly, without shaming.

**🎮 Real-game examples:**
- **Clash Royale:** clan card requests and donations, plus emotes as low-toxicity communication.
- **Clash of Clans:** clan wars and war leagues, with the clan as an identity.
- **Pokémon GO:** raids and Community Days that bring people together *physically*.
- **Monopoly GO!:** partner events and sticker trading as social glue in a casual game.
- **Hay Day:** neighborhoods and the weekly Derby.
- **Duolingo:** leagues as the clearest example of bucketed weekly competition.

**📱 On the job:** social features are usually owned by **systems designers** with the LiveOps team (clan events). You'll spec clan features, design league bucket sizes and rewards, and think through edge cases (what if the leader quits? What if someone joins mid-war?).

**🔗 Book link:** L14 (multiplayer modes, co-op vs competitive design, griefing), L13 (social rewards and status), L05 (cosmetics need an audience).

> ⚠️ **2010 → 2026:** the 2010 model of multiplayer is "matches" (split-screen, online modes). In F2P mobile, multiplayer is a **persistent social layer** (clans, leagues, gifts) wrapped around even single-player cores like match-3.

**🪝 Make it stick:** *Nobody quits the gym where their best friend is waiting.* The 3 Gs of social glue: **Gift** (reciprocity), **Guild** (belonging), **Grind together** (shared goals and rivalry).

---

## 7. Data-driven design: measure, test, still think
**🧠 Big idea:** F2P games are run with data. Every tap can be logged, every change tested. But **data shows *what* happened, not *why***. Great designers combine **analytics** (what), **qualitative research** (why) and **intuition** (what to try next).

> 🔗 KPI definitions (DAU, D1/D7/D30 retention, conversion, ARPDAU, LTV...) live in **F2P1**. Here we cover how designers *use* data: events, funnels, cohorts and A/B tests.

### 7.1 Analytics events: what to log
**📋 The details:**
- **An analytics event** is a record of something that happened, plus **parameters** (details) and **user properties** (who).
- **Naming convention:** consistent, e.g. `object_action` or `action_object`: `level_start`, `level_complete`, `level_fail`, `tutorial_step`, `store_open`, `offer_shown`, `purchase_complete`, `ad_offer_shown`, `ad_watched`, `currency_earned`, `currency_spent`, `clan_join`.
- **Parameters:** `level_id`, `attempt_number`, `moves_left`, `boosters_used`, `currency_type`, `amount`, `source` (where it came from), `sink` (where it went), `price`, `offer_id`.
- **User properties:** install date (for cohorts), country, platform, device, spender tier, current level, A/B test group, acquisition source.
- **Economy telemetry:** log **every currency source and sink** with amounts. Without it, you can't diagnose inflation or balance.
- **Design for questions:** before logging, write the questions you'll want answered ("where do players quit in the FTUE?", "which offer converts best at level 20?").
- **Tools you'll hear about:** Firebase/Google Analytics, Unity Analytics, GameAnalytics, Amplitude, plus data warehouses queried with **SQL**. **Basic SQL** is a real hiring plus for designers.
- **Privacy:** log only what you need, respect consent rules, and never log personal data casually.

### 7.2 Funnels, cohorts and segments
- **Funnel:** a sequence of steps and the % who complete each one. Example: FTUE step 1 → 2 → 3... or store open → offer tapped → purchase complete. **Find the biggest drop** and investigate it.
- **Level funnel (puzzle games):** players reaching each level. A sudden cliff at level 37 = a problem level.
- **Cohort:** a group of players who share a start point (e.g. installed the week of June 3). Compare cohorts to see if a new version, event or ad channel changed behaviour. **Retention curves** are plotted by cohort.
- **Segment:** a group by behaviour or attribute (payers, clan members, Android in Brazil...). Segments explain *averages that hide differences*.
- **Correlation ≠ causation:** clan members retain better, but maybe engaged players simply join clans. To know if *pushing* clan joining helps, **run an experiment**.

### 7.3 A/B testing basics
**📋 The details:** an **A/B test** randomly splits players into groups. **A (control)** gets the current version, **B (variant)** gets the change. Then you compare metrics.
- **Step 1 — Hypothesis:** "If we **[change]**, then **[metric]** will **[direction]** because **[reason]**."
  - E.g. "If we move the starter pack from session 1 to after the first boss, first-purchase conversion will rise because players will understand the items' value."
- **Step 2 — Metrics:**
  - **Primary metric:** the one that decides the test (e.g. D7 retention, conversion).
  - **Guardrail metrics:** things that must *not* get worse (retention, ratings, crash rate, ad revenue).
  - Decide them **before** the test.
- **Step 3 — Sample size:** enough players to detect the change you care about.
  - **Intuition:** small effects need huge samples. Noisy metrics (revenue!) need even more.
  - **Rule-of-thumb formula** (≈80% power, 5% significance): **n per group ≈ 16 × p(1−p) / δ²**, where p is the baseline rate and δ is the change you want to detect.
  - Example A: D1 retention **40% → 42%** (δ = 0.02): 16 × 0.24 / 0.0004 ≈ **9,600 players per group**.
  - Example B: purchase conversion **2.0% → 2.2%** (δ = 0.002): 16 × 0.0196 / 0.000004 ≈ **78,000 players per group**.
  - Revenue per user is heavily skewed by a few big spenders, so revenue tests need far more players or longer runs.
- **Step 4 — Duration:** run **full weeks** (weekday and weekend players differ), long enough to see the metric (D7 retention needs 7+ days after the last player enters), and avoid holidays unless you're testing holidays.
- **Step 5 — Decision rule:** decide in advance what result ships, kills or iterates the change.

**Pitfalls (the classic mistakes):**
- **Peeking:** checking daily and stopping when it "looks significant" inflates false positives.
- **Too small a sample:** "B won by 0.3%!" on 500 players is noise.
- **Novelty effect:** a new thing gets attention at first, then fades. Watch the trend over time.
- **Many metrics or many variants:** test 20 things and one will "win" by chance. Pick the primary metric first.
- **Short-term vs long-term:** a harsher offer may lift revenue this week and hurt D30 and LTV. Use **holdout groups** (a slice that never gets the change) for long-term effects.
- **Contamination:** in social games, test groups interact (clanmates in different groups compare offers). Consider randomizing by **clan** instead of by player.
- **Seasonality:** a test that runs over Christmas measures Christmas.
- **Segment surprises (Simpson's paradox):** B can win overall but lose in every segment, if the mix of players differs. Check key segments.
- **Local maximum:** A/B testing climbs the hill you're standing on. It won't find a better mountain. Big leaps come from design vision.

### 7.4 Designer intuition vs data
| Data is great at | Intuition and qualitative research are great at |
|---|---|
| Finding *where* players drop or struggle | Explaining *why* (playtests, interviews, surveys) |
| Measuring the size of an effect | Generating bold new ideas worth testing |
| Choosing between concrete options | Judging feel, fun, delight and brand fit |
| Catching problems early (dashboards, alerts) | Spotting ethical and long-term trust risks |

- **Be data-*informed*, not data-*driven*:** data advises, designers decide.
- **Qualitative toolkit:** playtests (watch, don't help, → L09/L17), session recordings, surveys, community sentiment, reviews, support tickets.
- **"Data says X, gut says Y":** dig deeper. Often the metric is incomplete (wrong timeframe, missing guardrail) or the gut is biased (you aren't your player).

**🎮 Real-game examples:** generic but universal. Match-3 teams tune levels using per-level win rates and churn. Midcore teams A/B test offer timing and FTUE steps. Live games run **staged rollouts** of features (to a few % of players first). Specific test results at named studios are rarely public, so be wary of "I heard game X tested..." claims.

**📱 On the job:** you'll write **analytics specs** (what events your feature must log), propose **test plans**, read dashboards with analysts and present **post-mortems** with charts. In interviews, being able to say "here's how I'd measure this feature" is a huge differentiator.

**🔗 Book link:** L09 and L17 (playtesting is the qualitative half of data), L04 (feature specs should include an analytics section), F2P1 (KPI definitions).

**🪝 Make it stick:** A/B test checklist: **"Have Many Smart Dogs Decided?"** = **H**ypothesis, **M**etrics (primary + guardrails), **S**ample size, **D**uration, **D**ecision rule. And: *data is the speedometer, not the steering wheel.*

---

## 8. Production pipeline, launch, UA & ASO: from prototype to live
**🧠 Big idea:** mobile F2P games are **tested in the market** before they're truly launched. The pipeline is a series of gates, each asking: **is this worth more investment?** Most prototypes and many soft-launched games are **killed**, and that's healthy.

### 8.1 The pipeline
```
Concept → Prototype → Pre-production / vertical slice → Production
   → (Beta / tech test) → SOFT LAUNCH → Global launch → LIVE (years) → Sunset
```
- **Concept** (→ L02 ideas, L04 one-sheet / ten-pager): the fantasy, core loop and target audience. Many studios also run a **marketability test** at this stage: fake ads or concept art videos to measure click-through rate and **CPI** *before building anything*.
- **Prototype:** a small team finds the fun in the core loop, typically over weeks. Kill quickly if it's not fun.
- **Pre-production / vertical slice:** prove the core, meta and art style together. Plan the economy and monetization early (it's part of the design, not a bolt-on).
- **Production:** build content, systems, FTUE, LiveOps tools and analytics.
- **Beta / tech test:** stability, devices, servers.
- **Soft launch:** release in a few countries to measure real metrics (8.2).
- **Global launch:** worldwide release with a marketing push.
- **Live:** LiveOps for years (→ §5).
- **Sunset:** an honest shutdown when the game no longer sustains itself.

### 8.2 Soft launch: why certain countries
**📋 The details:** a **soft launch** releases the game in a limited set of markets to test **without burning the big markets** (especially the US) and without attracting much press.
- **Typical phases** (mnemonic: *The Rocket Must Scale*):
  1. **Tech test:** crashes, load times, low-end devices, servers.
  2. **Retention test:** D1/D7/D30 (→ F2P1). Is the game sticky? If the core doesn't retain, nothing else matters.
  3. **Monetization test:** conversion, ARPDAU, early LTV signals. Offers, store, pass.
  4. **Scale test:** can you buy players profitably? CPI vs LTV, at increasing spend.
- **Why these countries:**

| Market group | Examples | Why use it |
|---|---|---|
| English-speaking Western proxies | Canada, Australia, New Zealand | Behaviour similar to the US, smaller and cheaper, English (no localization needed) |
| High-income European proxies | Nordics (Finland, Sweden, Denmark, Norway), Netherlands | Strong spending proxies, high English proficiency |
| Low-CPI, high-volume markets | Philippines, Indonesia, Vietnam, India | Cheap installs to test tech and retention at scale, on low-end Android devices |
| Mid-cost large markets | Brazil, Mexico, Turkey | Big audiences, regional behaviour, moderate costs |
| Special markets | Japan, South Korea, China | Unique tastes, platforms and rules: often a separate launch plan and partners |

- **Duration:** from a few months to more than a year. Teams iterate between builds.
- **Iterate, don't just measure:** soft launch is when big changes still happen. Brawl Stars spent well over a year in soft launch and changed fundamentally, including switching from portrait to landscape before its global launch.

### 8.3 Kill / scale decisions
- **The core equation:** a game can scale with paid acquisition when **LTV > CPI** with a healthy margin, and the money comes back (**payback**) within an acceptable time (→ F2P1 for LTV, CPI and ROAS).
- **Retention is the ceiling:** you can tune monetization a lot, but weak core retention is very hard to fix later. Many teams set retention bars per genre before continuing.
- **Decision options:**
  - **Scale:** go global, increase UA.
  - **Iterate:** more soft-launch rounds with targeted changes.
  - **Pivot:** change genre, setting or monetization fundamentally.
  - **Kill:** stop, keep the learnings, move the team on.
- **Avoid the sunk-cost fallacy:** "we've spent two years on it" is not a reason to continue.
- **Kill culture:** **Supercell** is famous for killing many games in soft launch (e.g. Clash Quest, Clash Mini, Everdale) and treating each kill as a learning to celebrate, not a shame.

### 8.4 User acquisition (UA) and ad creatives
**📋 The details:**
- **UA = buying installs:** paid ads on networks (Meta, Google, TikTok, AppLovin, Unity and others). You pay per impression, click or install. **CPI** = cost per install.
- **Key UA metrics:** **CTR** (click-through rate), **IPM** (installs per thousand impressions), **CVR** (store page → install), **CPI**, **ROAS** (return on ad spend, e.g. at day 7 or day 30).
- **Creative is king:** in a world of automated ad targeting, the **ad creative** (the video or playable) is often the biggest lever on CPI. UA teams test many creatives a week.
- **Creative types:** gameplay capture, "fail" ads (a player failing so viewers think "I could do better"), puzzle-style mini-game ads, **playable ads**, UGC/influencer-style, live-action, cinematic trailers.
- **Organic growth:** **store featuring** (pitch to Apple/Google editorial teams ahead of launch), word of mouth, virality (referrals, sharing), creators and influencers, cross-promotion from your other games, ASO (8.5).
- **Privacy changes:** Apple's **ATT** (2021) made per-user ad tracking opt-in, so measurement got harder and creative quality became even more important.
- **How UA influences design:**
  - **Marketable hooks:** features that look amazing in 15 seconds (satisfying destruction, numbers going up, a clear fantasy). Some studios design around *what will make a great ad*.
  - **The audience you buy is the audience you get:** an ad shows a promise, and your FTUE must deliver it.
- **The fake-ad controversy:** many mobile ads show gameplay that's **not in the game** (or only a tiny side mode): pull-the-pin puzzles, runner gates, "choose the right weapon" puzzles.
  - The UK's advertising regulator (**ASA**) ruled in **2020** that some ads for Playrix's **Homescapes** and **Gardenscapes** were misleading because they showed puzzle gameplay not representative of the game.
  - Platforms and regulators have since paid more attention to misleading ads.
  - Studios have responded in different ways: some made ads more honest, others **added the advertised mini-games** into their games (Playrix's games added pin-pull style levels), effectively letting marketing reshape the design.
  - **Designer lesson:** misleading ads bring players who expected something else, and they churn fast and leave angry reviews. **Honest ads + an FTUE that pays off the promise = better retention.**

### 8.5 ASO basics: App Store Optimization
**📋 The details:** ASO = making your store page **found** (search, browse) and **converting** (visitor → install).
- **Discoverability:**
  - **Title and subtitle** (or short description on Google Play) with relevant keywords.
  - **Keyword field** (App Store) and **description** keywords (Google Play).
  - **Category** choice, **ratings and reviews**, download velocity, localization.
- **Conversion:**
  - **Icon:** must read at tiny sizes and stand out. Test it.
  - **Screenshots:** the **first two or three** do most of the work (rule of thumb). Show the core fantasy and gameplay, with short captions.
  - **Preview video:** the first seconds matter most, since many viewers autoplay without sound.
  - **Ratings:** ask for a rating at **happy moments** using the native prompt (Apple limits how often it can be shown per year), never after a loss.
  - **Reply to reviews**, especially negative ones about bugs.
- **Store tools:**
  - **A/B testing:** product page optimization (App Store) and store listing experiments (Google Play).
  - **Custom product pages / custom store listings** for different ad campaigns, so the page matches the ad's promise.
  - **In-app events** (App Store) and **promotional content** (Google Play) to surface your LiveOps events on the store.
- **Pre-launch:** **pre-registration** (Google Play) and **pre-orders** (App Store) build a day-one audience.

**🎮 Real-game examples:** Brawl Stars' long soft launch and redesign. Supercell's kill culture. Playrix's ASA ruling and later in-game mini-levels. 4X and survival games are well known for heavy use of mini-game-style ad creatives.

**📱 On the job:** designers work with **UA and marketing** (which hooks test well?), **product managers** (soft-launch KPIs) and **analysts** (kill/scale decisions). Junior designers often join during soft launch, when the game changes fastest.

**🔗 Book link:** L02 (ideas → marketability tests), L04 (one-sheets and ten-pagers become greenlight docs), L17 (the book's publisher pitch → today's pitch is a soft-launch metrics deck), L08 (store screenshots are UI-showcase design), BX templates (adapt the one-sheet into a concept test brief).

> ⚠️ **2010 → 2026:** the book's "pitch to a publisher, ship a gold master, hope for good reviews" path is mostly gone in mobile. Now **the market is the publisher's focus group**: soft-launch data decides whether a game lives. The principle that holds: **a clear, exciting one-sentence pitch** (→ L17) still sells the game to players in a 15-second ad.

**🪝 Make it stick:** soft launch phases = **"The Rocket Must Scale"** (Tech, Retention, Monetization, Scale). And: *an ad is a promise; your FTUE is the delivery truck.*

---

## 9. Ethics & player trust: don't burn the village
**🧠 Big idea:** F2P gives designers real power over people's time, money and emotions. **Dark patterns** (designs that trick or pressure players against their own interest) can lift revenue in the short term. They also destroy **trust**, and trust is what makes players spend again, stay for years and recommend your game. Ethical design isn't just nice: it's **good long-term business** and increasingly **the law**.

> 🔗 F2P1 introduced dark patterns in the retention context. This section is the full ethics toolkit for monetization, LiveOps and social design.

### 9.1 Dark patterns to avoid (and the healthy alternative)
| Dark pattern | What it looks like | Healthy alternative |
|---|---|---|
| **Fake scarcity / fake timers** | "Only 2 hours left!" on an offer that reappears tomorrow | Honest timers. Say when offers return ("back next month") |
| **Currency fog** | Many currencies, odd exchange rates, packs that never match prices | Show real-money prices, simple currencies, packs that match common costs |
| **Leftover-currency traps** | Prices designed so you always have a useless remainder | Packs and prices that divide evenly; let leftovers be useful |
| **Friction for sale** | Deliberately annoying waits or difficulty spikes designed *only* to sell the fix | Challenge that serves fun; skips as a convenience, not a ransom |
| **Accidental purchases** | One-tap buys, no confirm, buy buttons where "continue" usually is | Clear confirm steps, easy refunds for mistakes, separate buy buttons from navigation |
| **Confirmshaming** | "No thanks, I like losing" on the decline button | Neutral "No thanks" |
| **Hidden odds / unclear pity** | Odds buried five menus deep | Odds and pity one tap from the banner (→ §2) |
| **FOMO overload** | Constant "last chance!" pressure, exclusive items that never return | A moderate number of events; reruns; let players skip without loss |
| **Streak guilt** | Losing a long streak for missing one day | Streak freezes, catch-up days, "welcome back" rewards |
| **Social pressure** | "Your team lost because of you!" nagging, public shaming | Opt-out of wars, vacation mode, positive contribution feedback |
| **Pay-to-win in PvP** | Buying power to beat other players directly | Sell cosmetics, convenience, and *speed* toward power everyone can earn |
| **Predatory personalization** | Escalating offers targeted at players showing compulsive patterns | Personalize to value and need, add spend cooldowns and wellbeing checks |
| **Pop-up storms** | Five offers before you can play | Cap pop-ups per session |
| **Misleading ads** | Ads showing gameplay that isn't in the game | Honest creatives that match the game (→ §8) |
| **Near-miss manipulation** | Reveal animations faking "almost got the legendary!" | Exciting but honest reveals |

### 9.2 Why dark patterns backfire
- **Regulation and fines:** the FTC's 2022 settlement with **Epic Games** (Fortnite) included hundreds of millions of dollars in refunds tied to purchase flows regulators considered "dark patterns", on top of a children's privacy penalty. Loot box and virtual-currency rules keep tightening worldwide (→ §2).
- **Store risk:** Apple and Google can reject updates or remove apps that break their rules (odds disclosure, misleading purchases, kids' policies).
- **Refunds and chargebacks:** angry players get their money back, and too many chargebacks cause payment problems.
- **Reputation:** review bombs, influencer backlash, Reddit threads. Your *next* game pays for it too.
- **LTV collapse:** players who feel tricked stop trusting **every** offer ("it's probably a scam too"), so conversion drops across the whole store.
- **Burnout churn:** pressure systems drive intense play, then sudden quitting.
- **Team morale:** designers don't enjoy building traps. Good people leave.

### 9.3 Spending limits, wellbeing and "big spenders"
- **Use "spender tiers", not "whales":** the vocabulary shapes how teams treat people. Some of your highest spenders are wealthy fans. Some may be struggling. Design for both.
- **Duty of care tools:**
  - **Spending history** visible in-game.
  - **Optional spending limits** that players set themselves (daily or monthly caps).
  - **Cooling-off:** no escalating offers right after big purchases.
  - **Spend alerts** for unusual patterns.
  - **Play-time reminders** and break suggestions.
- **Platform tools:** Apple's Screen Time and **Ask to Buy** (family sharing), Google Play's purchase authentication and parental controls. Mention them in your support pages.

### 9.4 Kids
- **Assume kids are playing** anything colourful and casual, even if it isn't "for kids".
- **Laws and codes to know (check current details):**
  - **COPPA** (US): restricts collecting personal data from children under 13 without verifiable parental consent.
  - **GDPR** (EU): a "digital age of consent" between 13 and 16 depending on the country.
  - **UK Age Appropriate Design Code** ("Children's Code", 2021): privacy-by-default for services likely to be used by children.
  - **China:** strict limits on minors' play time and spending.
  - **Store "families" programmes:** strict rules on ads (certified networks, no behavioural targeting) and data.
- **Design rules:** no loot boxes for kids, no pressure offers, parental gates on purchases and external links, safe chat (or none), ads that are child-appropriate and non-deceptive, and clear real-money prices.

### 9.5 Transparency and the trust checklist
- **Be clear about:** real-money prices, odds and pity, what a pass contains, when offers return, what a subscription renews at and how to cancel.
- **Communicate changes:** patch notes, balance explanations, compensation for mistakes (→ §5).
- **The newspaper test:** would you be comfortable if this mechanic were explained, accurately, in a news article?
- **The parent test:** could you explain this offer to a 12-year-old's parent with a straight face?
- **The state test:** does this design only work when the player is tired, confused, angry or impulsive? If yes, redesign.
- **The friend test:** would you recommend this purchase to a friend?

**🎮 Real-game examples:** the FTC v. Epic Games settlement (2022) and the 2025 FTC settlement with Genshin Impact's publisher show regulators actively policing purchase flows and loot box presentation. The ASA's misleading-ads rulings (§8) show advertising is policed too.

**📱 On the job:** ethics shows up in design reviews as questions like "is this timer honest?" Studios increasingly have **player-protection** or **trust & safety** reviews, and being the designer who raises these issues *constructively* (with an alternative that still meets the business goal) is a strength in interviews.

**🔗 Book link:** L13 (reward design can motivate or manipulate: same tools, different intent), L14 (griefing and social safety), L17 (business pressures and doing the job well).

**🪝 Make it stick:** the **5 Fs of bad monetization**: **F**ake scarcity, **F**ogged prices, **F**riction-for-sale, **F**OMO overload, **F**ooling kids. If your design has an F, it fails. *Trust is a currency you can't buy back with gems.*

---

## 10. Getting hired as a F2P / mobile game designer
**🧠 Big idea:** studios hire designers who can **show their thinking**: deconstruct games, write clear specs, model economies and reason with data. You don't need a shipped title to start. You need **proof of skill** (a portfolio and design-test excellence) and **visibility** (building in public).

### 10.1 Role types (what the job ads mean)
| Role | What you do | Core skills | Proof to show |
|---|---|---|---|
| **Game designer (generalist)** | Features, loops, UX flows, content, everything a little | Broad design sense, specs, communication | Deconstructions, feature specs, small prototype |
| **Systems designer** | Progression, combat rules, social systems, how everything interlocks | Systems thinking, spreadsheets, balancing | System spec + balance sheet |
| **Economy designer** | Currencies, sources/sinks, pricing, gacha rates, reward values | Spreadsheets/modelling, probability, data | Economy model (e.g. Google Sheets) with simulations |
| **Level designer (puzzle / casual)** | Building and tuning levels (huge demand in match-3 and puzzle studios) | Difficulty curves, player psychology, iteration with data | A set of levels with a difficulty curve rationale (→ L09) |
| **LiveOps / event designer** | Event calendar, event specs, configuring and analyzing events | Planning, templates, data, theming | 30-day LiveOps calendar + event spec + post-mortem |
| **Monetization designer / offer manager** | Store, offers, passes, segmentation, pricing tests | Psychology, data, ethics, A/B testing | Store redesign + offer plan + test plan |
| **Technical designer** | Scripting, tools, implementing designs in-engine | Unity/Unreal, scripting, data configs | Playable prototype, tools |
| **UX designer (adjacent)** | Flows, wireframes, usability | Figma, user research | UX case study (→ L08) |
| **Game product manager (adjacent)** | Owns KPIs and roadmap; bridges design, data and business | KPIs, prioritization | Teardown with KPI hypotheses |

- **Seniority ladder (typical):** junior → designer → senior → lead → principal / director. Titles vary a lot between studios.
- **Studio types:** big F2P publishers, mid-size studios, small indies, hyper-casual/hybrid-casual publishers (fast prototype cycles, a good entry point for prototype skills) and outsourcing or co-dev studios.
- **Where:** strong mobile hubs include Helsinki, Istanbul, Stockholm, Barcelona, London, Berlin, Tel Aviv and Limassol, plus big hubs in Asia and North America. **Remote** roles exist, especially for experienced designers.

### 10.2 Your portfolio
- **Quality > quantity:** **3–5 strong pieces** beat 20 weak ones. A hiring manager may spend only a few minutes on your portfolio, so the **first piece must be your best**.
- **Recommended pieces for a F2P portfolio:**
  1. **A deep deconstruction** of a successful F2P game: core loop, meta, economy, monetization, LiveOps, FTUE, *what you'd change and why*, with screenshots and diagrams (→ F2P1 teardown method).
  2. **A feature spec** for an existing game: a new feature designed to move a specific KPI, with flows, wireframes, rules, edge cases, analytics and an A/B test plan (→ L04 docs).
  3. **An economy or progression model:** a spreadsheet with sources/sinks, curves and persona simulations.
  4. **Role-specific piece:** levels (level designer), a LiveOps calendar plus event specs (LiveOps), a store and offer plan (monetization).
  5. **A small playable prototype** (Unity, Godot, GameMaker, even a paper/Figma prototype), showing you can make something feel good.
- **Case-study format** for every piece: **Problem → Goal/KPI → Constraints → Solution → Expected impact → How I'd test it → What I learned.**
- **Presentation:** a simple website or PDF, visuals first, short text, your role made clear (team projects!).

### 10.3 Design tests: the take-home exam
**📋 The details:** most F2P studios give a **design test** (take-home assignment), often with a few days to complete it (rough rule of thumb; it varies a lot). Common types:
- **Feature design / spec:** "Design a new feature for [our game] to improve D7 retention" (or monetization, or social engagement).
- **Deconstruction:** "Deconstruct [game X]: loops, economy, monetization, strengths, weaknesses, improvements."
- **Economy task:** "Here's a spreadsheet of a progression system. Balance it / find the problem / design the reward values for an event."
- **Level design task:** "Build 5–10 levels in this editor with a difficulty curve" (puzzle studios).
- **LiveOps task:** "Design a month of events for [our game] / design a new event type."
- **Monetization task:** "Redesign our store / design an offer for lapsed players."

**How to ace it: the GAMES checklist** 🎮
- **G — Goal:** restate the problem and the **KPI** you're targeting in one sentence at the very top. Ask clarifying questions if allowed.
- **A — Assumptions:** list them ("I assume most players reach the feature at day 3; target audience = existing midcore players"). Missing info is normal; *unstated* assumptions look like blind spots.
- **M — Mockups and flows:** wireframes, user flows, a quick UI sketch (→ L08). Visuals communicate faster than paragraphs.
- **E — Edge cases and ethics:** what if the player is new, a payer, in a clan, offline, on a tiny screen? Is the monetization fair?
- **S — Success metrics and scope:** how you'd measure it (analytics events, A/B test plan, guardrails), plus a realistic scope (MVP vs later) and dev cost awareness.

**More pro tips:**
- **Start with a one-page executive summary**, then details. Reviewers are busy.
- **Play their game deeply** before designing. Reference specific screens and systems, and show you understand their players.
- **Fit their game, don't replace it.** Redesigning their whole game reads as arrogance.
- **Numbers with rationale:** "reward = 50 gems ≈ 2 days of free income, so it feels meaningful without breaking the economy."
- **Respect the time box.** Polished and focused beats enormous and scattered.
- **Prioritize.** Show you can cut: "v1 / v2 / maybe later."
- **Proofread.** Clear writing signals clear thinking.
- **Red flag:** a giant unpaid test that looks like real production work for their live game. It's okay to ask about scope or decline.

### 10.4 Interview questions (and what they're really asking)
| Question | What they're testing | How to answer well |
|---|---|---|
| "What F2P game are you playing now, and why does it monetize the way it does?" | Do you play and *analyze*? | Name a game, explain its loops and monetization with specifics, plus one thing you'd improve |
| "Deconstruct our game's core loop." | Did you prepare? | Draw it. Mention the meta and LiveOps layer. Offer an observation |
| "How would you improve D1 / D7 retention in our game?" | KPI thinking | Diagnose first (where is the drop? which data would you check?), then hypotheses and tests |
| "Design an event for [game] in 10 minutes." | Live thinking, structure | Goal → core action → progress → rewards → monetization → metrics |
| "A feature you shipped dropped D7 by 2%. What do you do?" | Data maturity | Check data validity, segment, look for causes, consider a rollback or iteration, communicate |
| "How would you design a fair gacha?" | Systems + ethics | Odds, pity, dupes, spark, free budget, regulation awareness |
| "Tell me about a time you killed your own idea." | Ego vs evidence | Real story, what the evidence was, what you learned |
| "How do you work with artists, engineers, data and PMs?" | Collaboration | Concrete examples of communication, specs and compromise |
| "What would you change in our game?" | Insight + tact | Respectful, specific, KPI-linked, aware of constraints |
| "Walk us through a portfolio piece." | Communication | Problem → solution → impact, in about 3 minutes |

### 10.5 Building in public
- **Post your work:** deconstructions, spec breakdowns and economy models on LinkedIn, X/Bluesky, Medium/Substack or a personal blog. One solid post a week beats a perfect portfolio no one sees.
- **Join the community:** F2P analysis communities (e.g. Deconstructor of Fun's articles and podcast are well known), game design Discords, local game dev meetups.
- **Game jams:** Global Game Jam, Ludum Dare and itch.io jams. They prove you can finish and collaborate.
- **Learn in public:** watch GDC talks (many free on GDC Vault/YouTube) and write summaries with your own F2P takes.
- **Network with generosity:** comment thoughtfully on designers' posts, ask specific questions, share others' work. Referrals beat cold applications.
- **Skills to stack:** spreadsheets (essential), basic SQL, basic probability, Figma for wireframes, one engine (Unity is common in mobile), clear writing in English.

**🎮 Real-game examples:** puzzle studios (the makers of Royal Match, Candy Crush, Toon Blast and similar) hire **level designers** in large numbers. 4X studios hire **economy and LiveOps designers**. Hybrid-casual publishers hire people who can **prototype fast**. Read job ads from studios you admire and map each requirement to a portfolio piece.

**📱 On the job (your first 90 days):** learn the game deeply, learn the KPIs and dashboards, ship small things (event configs, level tweaks, offer specs), ask "what does success look like?" for every task and build trust by delivering clean specs on time.

**🔗 Book link:** L04 (design docs → feature specs and design tests), L17 (the book's chapter on the business and getting your game made), BX templates (adapt the one-sheet / ten-pager into portfolio case studies), L09 (level design portfolio), L02 (idea generation for design tests).

> ⚠️ **2010 → 2026:** the book's career advice is console-studio flavoured (QA as an entry path, big-team roles). Those paths still exist, but in mobile F2P, **specialist roles** (economy, LiveOps, monetization, puzzle level design) and **analytical skills** are the fast lanes, and a public portfolio of deconstructions can stand in for shipped titles at the junior level.

**🪝 Make it stick:** *Your portfolio is your store page: icon (first piece), screenshots (visuals), description (case study), ratings (references).* Ace design tests with **GAMES**: Goal, Assumptions, Mockups, Edge cases & ethics, Success metrics & scope.

---

## 🏆 Universal Truths & Clever Ideas (DLC edition)
1. **Players buy outcomes and feelings, not currency.** 📱 So for F2P: write every offer as "this helps you ___".
2. **The first purchase is the hardest; make it a gift.** 📱 Starter packs are handshakes, not profit centres.
3. **Contextual beats constant.** An offer at the moment of need converts better and annoys less than a pop-up storm.
4. **Averages lie, tails rage.** 📱 In gacha, design for the unluckiest 10%, which is what pity is for.
5. **Sell the right to earn.** 📱 Passes feel fair because players work for the rewards.
6. **Rewarded ads are a choice; interstitials are a toll.** Price your tolls carefully.
7. **Launch is the beginning.** 📱 In GaaS, most of the work and revenue comes after day one.
8. **Build the oven once, bake a hundred cakes.** Event templates and remote config beat one-off code.
9. **Clarity beats event soup.** Players should grasp "what's on now" in one glance.
10. **People are the strongest retention mechanic.** Friends, clans and rivals make quitting costly.
11. **Small ponds make big fish.** 📱 Bucketed leagues give everyone a winnable race.
12. **Data says what; people say why.** Combine analytics with playtests and community.
13. **Decide the metric before the test.** Peeking and metric-shopping manufacture fake wins.
14. **A/B tests climb hills; vision finds mountains.**
15. **Kill early, kill proudly.** Most prototypes should die; sunk cost is not a strategy.
16. **An ad is a promise.** 📱 Misleading ads buy players who churn and complain.
17. **Trust compounds; tricks decay.** Dark patterns borrow revenue from your future.
18. **Show your thinking to get hired.** Deconstructions, specs and models, posted in public.

## 🧩 Connect the dots
- **→ F2P1 (DLC 1):** KPIs (conversion, ARPDAU, LTV, CPI, ROAS), loops, FTUE, progression, economy sources/sinks and the teardown method are the foundation this DLC stands on.
- **→ L02 ideas:** concept → marketability test, and generating ideas for design tests.
- **→ L04 docs:** event specs, feature specs and analytics specs are modern design documents.
- **→ L05 character:** cosmetics and gacha characters run on character attachment.
- **→ L08 HUD/UI:** store layout, offer pop-ups, pass screens, event HUD and ad placements.
- **→ L09 level design:** events as temporary levels; puzzle level tuning with live data; level designer careers.
- **→ L13 rewards/power-ups:** boosters for sale, reward schedules, variable rewards (gacha), pass reward curves.
- **→ L14 multiplayer:** clans, co-op, PvP ladders, leagues and social safety.
- **→ L16 cutscenes:** story events and pull animations as micro-cutscenes.
- **→ L17 business/pitching:** from publisher pitches to soft-launch metrics decks; careers.
- **→ BX templates:** adapt one-sheets and ten-pagers into concept tests, feature specs and portfolio case studies.
- **F2P concepts:** monetization ↔ economy (every offer is a source), LiveOps ↔ retention, social ↔ long-term retention, data ↔ every decision, ethics ↔ LTV and legal safety.

## 🔁 Retrieval check (do it closed-book!)
1. Name six IAP types and one design risk of each.
2. Why is the first purchase so important, and when should a starter pack appear?
3. What is the decoy effect? Give a store example.
4. Explain hard pity, soft pity and spark. Why does pity matter more than the average rate?
5. With a 1% rate and no pity, roughly what share of players still lack the item after 100 pulls?
6. Name four places where loot box rules or disclosure requirements apply, and what they require (roughly).
7. What is retroactive unlock in a battle pass, and why does it convert?
8. Walk through how you'd pace XP for a 30-day, 50-tier pass.
9. When should you *not* show interstitials? Give three rules.
10. List six LiveOps event types and the main goal of each.
11. What are the layers of a LiveOps calendar?
12. Why are bucketed leagues more motivating than global leaderboards?
13. What are the five steps of an A/B test, and three classic pitfalls?
14. Why do soft launches often use Canada/Australia/NZ and the Philippines?
15. Name four dark patterns, their healthy alternatives, and two reasons dark patterns backfire.

<details><summary>Answers</summary>

1. Consumables (pay-or-lose feeling), durables (balance-breaking power, one-time revenue), cosmetics (need an audience), convenience (artificial friction suspicion), subscriptions (must deliver every period, easy cancel), bundles (need a hero item), starter packs (bad timing), LTOs (fake urgency), personalized offers (fairness/exploitation), passes (pass fatigue).
2. It breaks the "I don't pay" identity and payment friction, and repeat purchases become far more likely afterwards. Show it after the player understands item value (post-FTUE, often after the first wall), at high value and low price, one time only.
3. A third option exists to make another look better. E.g. $9.99 = 1,000 gems, $19.99 = 2,200, $24.99 = 2,300, which makes the $19.99 look smart.
4. Hard pity = guaranteed top item by pull N. Soft pity = rates rise after a threshold. Spark = pull points exchanged for a chosen item. Pity caps the worst case (the tail), and the unlucky tail is where frustration, churn and outrage live.
5. About 37% (0.99^100). About 10% need ~230 or more pulls.
6. Apple and Google: disclose odds before purchase. China: odds disclosure plus minors' limits. Japan: kompu gacha banned (2012). South Korea: mandatory probability disclosure (2024). Belgium: paid loot boxes can count as gambling. UK: industry principles. Australia: higher age ratings (2024). Brazil: restrictions for minors (2025). PEGI/ESRB: "random items" labels. Always check current law.
7. Buying the premium pass mid-season instantly grants all premium rewards for tiers already reached. The player sees a pile of loot they've already earned.
8. Total XP = 50 × XP per tier. Pick a target persona (e.g. 5 days/week finishing ~day 26). Divide by expected active days to get the daily budget. Split it across dailies, gameplay and weeklies. Simulate casual/regular/hardcore personas. Add catch-up mechanics.
9. Not in the FTUE, not mid-action, not after every loss, not too frequently (caps), not for payers.
10. Collection (engagement), leaderboard/race (competition), tournament (competitive spending), team/clan (social retention), community goal (togetherness), LTM (novelty/testing), boss raid (co-op), holiday (moments/offers), collab (buzz/new players), album (long arc + trading), login/streak (habit).
11. Daily, weekly, main event rotation (~1–2 weeks), monthly (season/pass), quarterly (big updates), yearly (anniversary/holidays).
12. In a small bucket every player has a realistic chance to place or promote. Global boards only motivate the very top.
13. Hypothesis, Metrics (primary + guardrails), Sample size, Duration, Decision rule. Pitfalls: peeking, small samples, novelty effect, metric-shopping, seasonality, contamination, short- vs long-term effects, Simpson's paradox, local maximum.
14. Canada/Aus/NZ are English-speaking proxies for US behaviour at lower cost, without burning the US market. The Philippines (and similar) give cheap installs at volume to test tech and retention on low-end devices.
15. E.g. fake timers → honest timers; currency fog → real-money prices; friction for sale → challenge for fun; accidental purchases → confirm steps; streak guilt → freezes. They backfire through fines and regulation, store removal, refunds, reputation damage, trust collapse (lower LTV) and burnout churn.
</details>

## 🎯 Side quests (5–15 min each)
1. **🏪 Price a store page (15 min):** sketch a hard-currency ladder of 6 packs (prices + gem amounts + bonus %), mark "Most Popular" and "Best Value", and add one honest decoy. Check: does every pack beat the one below it on gems per dollar?
2. **🎲 Pity math (10 min):** for a 0.8% rate, compute expected pulls, the % unlucky after 100 pulls (0.992^100), and pick a hard pity number. Write one sentence on why.
3. **📺 Ad placement map (10 min):** pick a casual game idea and list 5 rewarded placements (moment, reward, daily cap) and 2 interstitial rules.
4. **🧪 Hypothesis drill (10 min):** write 3 A/B hypotheses in "If we X, then metric Y will Z because W" form, each with one guardrail metric.
5. **🕵️ Dark-pattern hunt (15 min):** open any F2P game's store and pop-ups. Find 2 good practices and 1 questionable pattern. Rewrite the questionable one ethically.
6. **⚡ Event speed-round (10 min):** invent 5 events for a farming game using 5 different event types from §5.2, one line each.
7. **🔍 ASO teardown (10 min):** look at a top game's store page. Judge the icon, the first 3 screenshots and the video's first 3 seconds. What promise is it making?
8. **💼 Job-ad mapping (15 min):** find 2 real F2P designer job ads. List each requirement and which portfolio piece would prove it.

## ⚔️ Main quest (homework)
**Main quest 1 — "Season Architect": a 30-day LiveOps calendar + battle pass reward track (~3 h)**
- Pick a real F2P game you know (or your own concept).
- Build a **30-day calendar** (spreadsheet or table): primary events, secondary events, weekend beats, one holiday or themed moment, a season finale, plus always-on systems. Note each event's type and goal.
- Design a **battle pass**: tiers, XP per tier, XP sources and budget per active day, free vs premium rewards per tier (with $ value estimates), instant value, milestone peaks and the chase reward. Simulate 3 personas (casual/regular/hardcore) and the day each finishes.
- Add **2 event specs** using the 14-point anatomy (§5.3), short versions.
- ✅ **Done when:** the calendar has no "event soup" days (≤ 1 primary + 2 secondary), the pass has no dead tiers, the regular persona finishes with 3–5 days to spare, every event lists a success metric, and you've written one paragraph on the economy impact.
- 📣 Post a screenshot of the calendar and pass track publicly with a short thread: "How I'd run a month of [game]".

**Main quest 2 — "Mock Design Test": a timed take-home (~4 h, strictly time-boxed)**
- Brief (simulate a real studio test): *"Design a new feature for [a match-3 or midcore game of your choice] that increases D7 retention without hurting monetization."*
- Deliver a **1-page feature spec** (executive summary on top) + 2–4 pages of detail using **GAMES**: goal/KPI, assumptions, wireframes and flow, rules and edge cases, ethics check, analytics events list, A/B test plan (hypothesis, primary and guardrail metrics, rough sample size with the 16·p(1−p)/δ² rule), MVP scope vs later.
- ✅ **Done when:** a reader understands the feature from page 1 alone, there's at least one wireframe or flow diagram, every number has a rationale, the test plan names a guardrail metric, and you stayed within 4 hours.
- 📣 Ask a designer friend or community to review it as if they were hiring, then add it to your portfolio.

## 🔬 Play Lab
1. **Monopoly GO! (10 min):** count every simultaneous event, timer and offer on the main screen. Which are solo, which are social (partner events, sticker trading)? **Question:** how do the events feed each other, and is it clear what to do first, or is it event soup?
2. **Brawl Stars or Clash Royale (10 min):** open the pass screen. What's on the free track vs premium track? Where's the "instant value" and the chase reward? Then open the club/clan screen. **Question:** what social actions can you do in under 30 seconds, and which ones create obligation?
3. **Genshin Impact or Honkai: Star Rail (10 min):** go to the banner screen. Count the taps to reach the odds/details page and the pull history. **Question:** is pity explained in plain language, and would a new player understand the real cost of a guaranteed featured character?
4. **An ad-monetized casual game (e.g. Block Blast!, a hyper-casual top-chart game, or an Archero/Survivor.io-style hybrid) (10 min):** log every ad moment: type (rewarded/interstitial/banner), trigger, reward. **Question:** which ads did you *choose*, which were forced, and did any appear at a frustrating moment?

## 🗣️ Feynman check
Explain to a producer in 60 seconds: **how a F2P game keeps making money for five years without being evil.** Cover: a store with depth and contextual offers, a pass that sells the right to earn, rewarded ads for non-payers, a layered LiveOps calendar, social systems that keep friends together, A/B tests with guardrails, and why trust is worth more than any single offer.

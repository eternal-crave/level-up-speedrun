# Level Up Speedrun

A game-like study app for F2P mobile game design: Scott Rogers' *Level Up!* remixed for free-to-play mobile, plus two DLC modules on F2P economy, monetization and LiveOps. Bite-sized lessons, flashcards with spaced repetition, quests, boss fights and streaks.

**Play:** https://eternal-crave.github.io/level-up-speedrun/

Notes are original study material based on *Level Up! The Guide to Great Video Game Design* by Scott Rogers (Wiley, 2010). Get the book.

## Progress sync

Progress is cached in the browser and, once you sign in with Google, saved per account in Firebase (`users/<uid>/state/progress` and `.../srs`). Security rules in [firestore.rules](firestore.rules) let each user read and write only their own documents. A device that switches accounts drops the previous account's cached progress, and signing out clears the device.

### One-time Firebase setup

1. Create a project at https://console.firebase.google.com (Spark, free plan; Analytics not needed).
2. **Build > Authentication > Get started > Sign-in method:** enable **Google**.
3. **Authentication > Settings > Authorized domains:** add `eternal-crave.github.io`.
4. **Build > Firestore Database > Create database** (production mode), then paste [firestore.rules](firestore.rules) into the **Rules** tab and publish.
5. **Project settings > Your apps > Web (</>)**: register an app and copy its config into `site.config.json` (see `site.config.example.json`). The web config is not a secret; the rules protect the data.
6. `node tools/build.mjs`, commit, push. GitHub Pages serves `docs/`.

## Layout

- `notes/*.md`, `data/*.json` – course content (source of truth)
- `tools/app/` – app source (`shell.html`, `core.js`, `views.js`, `app.css`)
- `tools/build.mjs` – builds `docs/index.html` (site), `app/level-up-speedrun.html` (offline copy), Anki deck, roadmap and quest log
- `tools/check.mjs` – content coverage checks
- `node tools/serve.mjs 5178 docs` – local preview of the site

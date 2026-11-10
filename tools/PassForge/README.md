# PassForge — Password Strength & Generator

**Analyze password strength and generate strong secrets, entirely in the browser.**

PassForge estimates entropy and real-world crack time across attacker models, runs policy and common-password checks with a live strength meter, and generates cryptographically-secure passwords and passphrases using the browser's secure random source.

## Highlights
- **Pure front-end** — HTML, CSS and vanilla JavaScript. No backend, no build step, no Python.
- **Private by design** — everything runs locally in your browser; nothing is uploaded or sent to a server.
- **Zero install** — just open `index.html`.

## Run locally

Open `index.html` in a modern browser. If a browser API requires a secure origin, run `python3 -m http.server 8000` in this directory and open `http://localhost:8000`.

## Demo status

No hosted demo is configured; `index.html` is the complete source for this utility.

## Tech
Vanilla JavaScript · responsive single-page UI · no dependencies.

## Limitations
Strength and crack-time values are rough estimates based on a simple character-set model. Use a password manager for unique passwords; the score is not a security guarantee.

## License
MIT © 2025 Harsha Malepati

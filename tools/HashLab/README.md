# HashLab — Hashing & Integrity Checker

**Compute cryptographic hashes and verify file integrity in the browser.**

HashLab hashes text or files with SHA-1/256/384/512 via the Web Crypto API and lets you verify a file against a published hash to confirm it hasn't been tampered with.

## Highlights
- **Pure front-end** — HTML, CSS and vanilla JavaScript. No backend, no build step, no Python.
- **Private by design** — everything runs locally in your browser; nothing is uploaded or sent to a server.
- **Zero install** — just open `index.html`.

## Run locally

Open `index.html` in a modern browser. If a browser API requires a secure origin, run `python3 -m http.server 8000` in this directory and open `http://localhost:8000`.

## Demo status

No hosted demo is configured; `index.html` is the complete source for this utility.

## Tech
Vanilla JavaScript + the Web Crypto API · responsive single-page UI · no dependencies.

## Notes
SHA-1 is included for legacy compatibility; do not use it for new security-sensitive integrity checks. Files are read into browser memory before hashing, so very large files may not be practical.

## License
MIT © 2025 Harsha Malepati

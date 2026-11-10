# CipherVault — Browser AES-256-GCM Encryption

**Encrypt and decrypt files and text with a passphrase — the key never leaves your device.**

CipherVault performs authenticated AES-256-GCM encryption with a key derived from your passphrase using PBKDF2-HMAC-SHA256 (600,000 iterations). New encrypted blobs include a format version and work factor; blobs created by the earlier 200,000-iteration version remain decryptable. Because it's GCM, tampering is detected on decrypt. All processing is in-memory and client-side.

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

## Use limits
This is a learning project, not an audited storage product. Keep a separate backup of important files, use a strong passphrase, and verify that a decrypted result is usable before deleting the original.

## License
MIT © 2025 Harsha Malepati

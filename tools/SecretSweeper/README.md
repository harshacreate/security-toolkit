# SecretSweeper — PII & Secret Finder / Redactor

**Scan text and logs for secrets and PII, then redact them.**

SecretSweeper scans pasted content for emails, IPv4 addresses, Luhn-valid credit-card numbers, AWS keys, API tokens, JWTs, phone numbers and private-key blocks, highlights matches, and produces a redacted copy for review.

Detection is pattern-based and can miss secrets or personal information. Review the redacted output carefully before sharing; it is not a guarantee that the text is safe to disclose.

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

## License
MIT © 2025 Harsha Malepati

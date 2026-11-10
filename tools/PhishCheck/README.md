# PhishCheck — URL Phishing Analyzer

**Inspect a link for phishing red flags with an explained risk score.**

PhishCheck parses a URL and scores common phishing signals — IP-address hosts, @-redirect tricks, punycode look-alikes, suspicious TLDs, brand-on-wrong-domain, shorteners and credential keywords — and explains each flag it finds.

The result is a local heuristic, not a definitive verdict or a live reputation check. It does not open or fetch the URL; verify a site through a known address when in doubt.

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

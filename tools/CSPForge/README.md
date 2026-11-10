# CSPForge — Content-Security-Policy Analyzer & Builder

**Analyze a CSP for weaknesses, or start from a strict baseline.**

Paste a Content-Security-Policy and CSPForge grades it, flags weaknesses (unsafe-inline, unsafe-eval, wildcards, missing object-src/base-uri/frame-ancestors) and explains each directive. It also provides a strict starter policy to adapt.

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

## Notes
The score is a heuristic checklist, not proof that a policy is safe. Review the findings against the application's actual resource and embedding needs before deploying a policy.

## License
MIT © 2025 Harsha Malepati

# HeaderGuard — HTTP Security-Header Grader

**Grade a site's HTTP security headers and get actionable recommendations.**

Paste HTTP response headers (from DevTools or `curl -I`) and HeaderGuard grades the important security headers — CSP, HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy — flags weak CSPs and info disclosure, and gives an overall letter grade.

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
The grade is a checklist-based coverage estimate, not a guarantee that an application is secure. A restrictive CSP `frame-ancestors` directive also provides clickjacking protection.

## License
MIT © 2025 Harsha Malepati

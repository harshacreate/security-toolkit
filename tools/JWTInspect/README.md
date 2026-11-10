# JWTInspect — JWT Decoder & Inspector

**Decode and inspect JSON Web Tokens, with local HS256 signature verification.**

JWTInspect decodes the header and payload, renders the claims (including human-readable expiry/issued-at), flags risky settings such as `alg: none` or a missing `exp`, and can verify an HS256 signature locally if you supply the secret.

Local signature verification does not establish that a server trusts the token or validate issuer, audience, or authorization rules. Do not paste production secrets into a website you do not trust.

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

## License
MIT © 2025 Harsha Malepati

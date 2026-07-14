# paul ferrante — media kit

Static, fast, config-driven media kit. Dark theme, Bright Sky accent. Deployable to Vercel with no build step. No runtime API calls, no credentials in client code.

## The one rule

**Every editable number lives in [`src/config/stats.js`](src/config/stats.js).** Nothing is hardcoded in the markup. All other editable content (portfolio, partner list, press, image paths, nav, copy, form endpoint) lives in [`src/config/content.js`](src/config/content.js). Change a value, redeploy, done.

## Update the stats

1. Open `src/config/stats.js`.
2. Follower counts and demographics are already filled and verified.
3. The six `performance` fields are `NEEDS_VALUE` placeholders (they render as a dashed "stat pending" card). Replace each with a real value from your platform insights, e.g. `engagementRate: "6.6%"`. The last-30-day figures (`views30d`, `reached30d`) should be refreshed on each redeploy so they never read as stale.
4. Set `topVideoUrl` to the real post link so card 4 becomes clickable.
5. Redeploy.

Data provenance: there are no analytics JSON files on the machine; the verified numbers were read at build time from the Command Center dashboard source (`RGG Media/phase1-analytics-fix/paul_ferrante_dashboard.jsx`). Line references are noted inline in `stats.js`.

## Swap images

Drop replacements at the same paths (all referenced from config):

- Hero portrait: `assets/config/hero.jpg`
- About photo: `assets/config/about.jpg`
- Portfolio covers: `assets/config/covers/*.jpg` (4:5, cropped clean of app chrome)

## Contact form

The form posts to Formspree. In `src/config/content.js` set `contact.formEndpoint` to your real form id (`https://formspree.io/f/xxxxxx`). Until then, the form shows a short "not configured" note and the `send me an email` fallback still works.

## Add press coverage

Media coverage is hidden until `content.press.items` has entries. Add real ones only:

```js
press: { eyebrow: "featured on", items: [
  { outlet: "VoyageLA", title: "Meet Paul Ferrante", url: "https://voyagela.com/..." },
]},
```

## Run locally

```bash
cd paulferrante-media-kit
python3 -m http.server 4321
# open http://localhost:4321
```

(Any static server works. No Node or build tooling required.)

## Deploy to Vercel

```bash
npm i -g vercel      # once
cd paulferrante-media-kit
vercel               # preview deploy
vercel --prod        # production
```

Or connect the repo at vercel.com → New Project → framework preset **Other** (no build command, output = repo root). Then add the custom domain `paulferrante.com` in Project → Settings → Domains.

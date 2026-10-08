# Rotor Services NT website

React + TypeScript + Vite. Existing branding, photos and videos are retained.

## Local development

```sh
npm ci
npm run dev
```

## Validation

```sh
npm run typecheck
npm run build
```

## Deploy to Vercel

Upload the contents of this project directory to a GitHub repository. Import that repository as a new Vercel project named `rotor-services-nt` in the intended account. Keep Surfbee as its separate existing project.

- Framework preset: Vite
- Root directory: repository root (or `project` if this folder is uploaded inside the repository)
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm ci`
- No environment variables are required by the current website.

The included `vercel.json` handles direct page URLs and refreshes. TypeScript and production build passed; live browser validation remains to be performed. Check `/`, `/capabilities`, `/fleet`, `/safety`, `/adam`, `/contact`, and `/legal` after deployment, plus browser Back/Forward, mobile navigation, phone/email links and the capability PDF download.

## Changes in this version

- URL navigation, browser history, page titles and scroll/focus handling.
- Aircraft availability and safety documentation buttons now open Contact.
- Capability download now serves a branded PDF of the supplied Whitsunday Coast Helicopter Services statement.
- Modernised helicopter/sunset logo, branding in the navigation header, video posters and reduced-motion support.
- Twelve selected, optimised photos distributed across the pages.
- Updated Adam Tessmann's name, experience, role and email to match the supplied statement.
- Accessible mobile menu, keyboard focus and skip link.
- Website description, favicon, current copyright year and clickable footer contacts.
- Removed placeholder AOC/ABN text and conflicting capability-page range/speed figures; retained fleet performance figures are labelled indicative.

## Operator confirmation before public launch

Confirm the company legal name and ABN, AOC and the approvals applicable to each service, insurance, current aircraft fleet/performance, 24/7 availability, credentials, client references and the wording about Jayrow. These claims were supplied in the original project and have not been independently verified. Confirm phone/email details and rights to the photos and videos. Supply a safety overview PDF if a downloadable document is wanted; the current button requests it through Contact.

Deployment has not yet been completed: Vercel returned an account-scope permission error for Jack's Projects.

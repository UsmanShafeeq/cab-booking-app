# cab-booking-app

This repository is a React + Vite starter for a cab booking UI. It uses Tailwind CSS (v4) wired through the Vite plugin and PostCSS adapter. The project also includes examples of Material UI and icon libraries.

If you just cloned this repository, the sections below will get you running locally.

## Contents

- `src/` — React source files
- `src/index.css` — Tailwind entry (v4-compatible imports)
- `tailwind.config.cjs` — Tailwind configuration
- `postcss.config.cjs` — PostCSS config using `@tailwindcss/postcss`
- `vite.config.ts` — Vite config (React plugin + Tailwind plugin)

## Prerequisites

- Node.js (LTS recommended, >= 18)
- npm (comes with Node.js) or yarn/pnpm if you prefer — the instructions below use npm and PowerShell syntax

## Install

From the project root run:

```powershell
npm install
```

This installs runtime and dev dependencies listed in `package.json` (Tailwind v4, Vite, Material UI, react-icons, etc.).

## Available scripts

- Start dev server (with HMR):

```powershell
npm run dev
```

- Build for production:

```powershell
npm run build
```

- Preview the production build locally:

```powershell
npm run preview
```

- Run ESLint:

```powershell
npm run lint
```

## Tailwind CSS (v4) notes

This project uses Tailwind CSS v4 which relies on the `@tailwindcss/postcss` adapter for PostCSS integration. The repo contains:

- `postcss.config.cjs` — configured with `@tailwindcss/postcss` and `autoprefixer`.
- `tailwind.config.cjs` — content paths include `index.html` and `src/**/*.{js,jsx,ts,tsx}`.

Tailwind is imported in `src/index.css` using v4-friendly imports (for example `@import "tailwindcss/preflight"` and `@import "tailwindcss/utilities"`). If you prefer the single import form, you can replace with `@import "tailwindcss"` when using the adapter.

When adding new source file types or folders, update `tailwind.config.cjs` `content` array so Tailwind purges unused CSS correctly.

## Icons and Material UI

This project already includes (in `package.json`):

- `@mui/material` and `@mui/icons-material` (Material UI v5)
- `react-icons` (a broad collection of icon packs)

If you need `lucide-react` (some components import it), install it with:

```powershell
npm install lucide-react
```

Usage examples:

- Material UI button (in React):

```jsx
import { Button } from '@mui/material'

<Button variant="contained">Primary</Button>
# cab-booking-app

Lightweight React + Vite starter for a Cab Booking UI. This project uses Tailwind CSS (v4) wired through Vite and PostCSS. It also includes examples that use Material UI and react-icons.

This README explains how to get the project running locally, build it for production, and deploy (Vercel). It also covers common fixes and troubleshooting.

Table of contents
- Prerequisites
- Install
- Available scripts
- Tailwind notes
- Icons & Material UI
- Troubleshooting
- Deploying (Vercel)
- CI
- Contributing

Prerequisites
- Node.js (LTS recommended, >=18)
- npm (bundled with Node) — instructions below use npm and PowerShell syntax

Install
From the project root run:

```powershell
npm install
```

Available scripts
- npm run dev — start the dev server with HMR
- npm run build — build production assets to `dist/`
- npm run preview — preview the production build locally
- npm run lint — run ESLint

Tailwind CSS (v4) notes
- This project uses Tailwind v4 with the `@tailwindcss/postcss` adapter.
- Key files:
	- `src/index.css` — Tailwind imports (v4-friendly)
	- `tailwind.config.cjs` — content paths + theme extensions
	- `postcss.config.cjs` — uses `@tailwindcss/postcss` and `autoprefixer`
- When you add new file types or folders, update `tailwind.config.cjs` `content` so Tailwind purges unused CSS correctly.

Icons & Material UI
- Installed packages include `@mui/material`, `@mui/icons-material`, and `react-icons`.
- If you see an error for `lucide-react`, install it:

```powershell
npm install lucide-react
```

Troubleshooting
- Blank page after deploy: ensure `vite.config.js` `base` is not set to an absolute URL (we use the default `/` so assets are loaded from the deployed domain).
- Failed import errors: run `npm install` and restart the dev server.
- ESLint complaints: run `npm run lint` and fix reported issues (I ran automated fixes during setup for some files).

Deploying to Vercel (quick)
1. Sign in to Vercel and click New Project → Import GitHub repo: `UsmanShafeeq/cab-booking-app`.
2. Use these settings if prompted:
	 - Build Command: `npm run build`
	 - Output Directory: `dist`
3. Deploy.

The repo includes `vercel.json` and `.vercelignore` to help Vercel detect the static build.

CI (GitHub Actions)
- A CI workflow was added at `.github/workflows/ci.yml` that runs `npm ci` and `npm run build` on pushes/PRs to `main`. You can view build logs in the Actions tab.

Contributing
- Open issues or PRs. If you change build tooling (Tailwind major upgrade, different PostCSS setup, etc.) please update this README.

License
- No license is provided. Add a `LICENSE` file if you want to publish under a specific license.

If you want, I can also:
- Install `lucide-react` and start the dev server so you can preview locally.
- Add automatic Vercel deployment to CI (requires a `VERCEL_TOKEN` repo secret).

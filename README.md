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
```

- react-icons example:

```jsx
import { FaTaxi } from 'react-icons/fa'

<FaTaxi />
```

## Common fixes

- "Failed to resolve import 'lucide-react'": run `npm install lucide-react` and restart the dev server.
- CSS not updating: ensure `src/index.css` contains the Tailwind imports and that `tailwind.config.cjs` `content` includes your component paths.

## Deploying

You can deploy the contents of the `dist/` folder (produced by `npm run build`) to any static hosting provider (Netlify, Vercel, Surge, S3, etc.).

## Contributing

Feel free to open issues or PRs. If you change the project setup (switch Tailwind major version, swap CSS approach, or add a new icon library), document the change in this README.

## License

This project does not include a license file. Add a `LICENSE` if you want to make the repo public under a specific license.

---

If you want, I can:

- Add a small `Getting started` section that walks through adding a new page or component.
- Install `lucide-react` and start the dev server for you.

Pick one and I'll proceed.

## Deploying to Vercel

This project builds as a static site using Vite. To deploy on Vercel:

1. Go to https://vercel.com and log in (or sign up).
2. Click "New Project" and import this GitHub repository: `UsmanShafeeq/cab-booking-app`.
3. Vercel should detect a static site. Use the following settings if prompted:

	- Build Command: npm run build
	- Output Directory: dist

4. Click "Deploy".

The repo includes a `vercel.json` that instructs Vercel to use the static-build adapter and serve files from `dist`.

If you'd like, I can create a Vercel project for you if you provide a Vercel token with the necessary permissions (or you can import the repo from the Vercel dashboard yourself).
# cab-booking-app
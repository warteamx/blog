# WarTeamX Engineering Blog

A production-ready technical blog and portfolio built with Astro and TypeScript for GitHub Pages deployment.

## Project overview

This site is designed to be a long-term home for engineering writing about TypeScript, React, Node.js, system design, cloud reliability, observability, Grafana, OpenTelemetry, and open source.

Core goals:

- extremely fast static delivery
- minimal client-side JavaScript
- first-class accessibility and SEO
- maintainable content workflows with Markdown and MDX
- GitHub-native CI/CD for validation and deployment

## Architecture

- **Framework:** Astro
- **Language:** TypeScript
- **Content:** Astro Content Collections with Markdown and MDX
- **Styling:** plain CSS with lightweight component styling
- **Syntax highlighting:** Shiki
- **Deployment:** GitHub Pages
- **Automation:** GitHub Actions

Highlights:

- content collections for blog posts and projects
- RSS feed, sitemap, robots.txt, canonical URLs, Open Graph, and Twitter cards
- light/dark theme with system preference support and localStorage persistence
- table of contents, related posts, previous/next links, tag pages, and draft filtering
- Vitest coverage for core utilities and Astro component rendering

## Local development

```bash
npm install
npm run dev
```

Useful commands:

```bash
npm run lint
npm run lint:fix
npm run typecheck
npm test
npm run build
npm run preview
npm run format
```

## Deployment

GitHub Actions handles both validation and deployment.

- `.github/workflows/ci.yml` runs install, lint, typecheck, test, and build.
- `.github/workflows/deploy.yml` builds the static site and deploys `dist/` to GitHub Pages.

The site is configured for the `warteamx/blog` repository path.

## Folder structure

```text
.
├── .github/workflows/
├── public/
├── src/
│   ├── components/
│   ├── config/
│   ├── content/
│   │   ├── blog/
│   │   └── projects/
│   ├── layouts/
│   ├── pages/
│   ├── plugins/
│   ├── styles/
│   └── utils/
├── tests/
├── astro.config.ts
├── eslint.config.mjs
├── tsconfig.json
└── vitest.config.ts
```

## Tech stack

- Astro
- TypeScript
- Markdown / MDX
- Shiki
- ESLint
- Prettier
- Vitest
- Husky
- lint-staged
- GitHub Actions

## License

This repository is released under **CC0-1.0**. See [`LICENSE`](./LICENSE).

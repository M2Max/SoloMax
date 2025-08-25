<h1 align="center">Maximiliano Mamone — Personal Website</h1>

This repository contains the source for my personal website, built with Hugo and Tailwind CSS using the Hugoplate theme as a foundation. Content, configuration, and styles are customized for my needs; the theme is vendored via Hugo Modules.

## Overview

- Static site powered by Hugo (Extended)
- Styling with Tailwind CSS v4
- Multilingual-ready; currently Italian is the default language
- SEO, search, dark mode, and PWA bits provided by Hugo Modules

## Tech stack

- Hugo (Extended) with Hugo Modules
- Tailwind CSS v4 and Prettier (with Go Template and Tailwind plugins)
- Node.js scripts for development and build

## Prerequisites

Install the following locally:

- Hugo Extended v0.144+ (required for Tailwind + Pipes)
- Node.js v22+
- Go v1.24+



## Project structure (high level)

- `content/` — Website content (Markdown). Do your writing here.
- `themes/hugoplate/` — Theme layouts/partials from Hugoplate (customizable).
- `assets/` — Your CSS (`assets/css/custom.css`) and images (`assets/images/**`). Processed via Hugo Pipes.
- `config/_default/` — Site configuration, menus, and parameters.
- `data/` — Design tokens (`theme.json`) and social links (`social.json`).
- `i18n/` — Translations (currently Italian strings in `i18n/it.yaml`).
- `public/` — Build output (created by `npm run build`).

Helpful theme notes

- Tailwind v4 scans Hugo templates; keep class names literal so the scanner picks them up. `hugo_stats.json` is mounted for scanning.
- Internal links should use `relLangURL`; comparisons commonly use `absLangURL`.

## Customization points

- Site metadata: `hugo.toml` (title, `baseURL`, outputs, etc.)
- Navigation: `config/_default/menus.it.toml`
- Header/button/search toggles: `config/_default/params.toml` (e.g., `[navigation_button]`, `theme_switcher`, `[search]`)
- Colors and fonts: `data/theme.json`
- Social links: `data/social.json`
- Language and i18n: `config/_default/languages.toml`, `i18n/*.yaml`
- Styles: `assets/css/custom.css`

## Scripts

- `npm run dev` — Start local server
- `npm run preview` — Production-like local preview
- `npm run build` — Build to `public/`
- `npm run format` — Prettier (includes Go Template + Tailwind plugins)
- Maintenance: `npm run update-modules`, `npm run update-theme`, `npm run project-setup`, `npm run theme-setup`

Note: Some legacy workspace tasks reference `yarn dev:example` and `yarn build:example` from the upstream theme. For this site, prefer `npm run dev` and `npm run build` at the repository root.

## Deployment

Build locally or through GitHub Actions and deploy the contents of `public/` to any static host.

## Localization

- Default language is Italian (`it`), configured in `hugo.toml` and `config/_default/languages.toml`.
- To add a new language, create a new language block in `languages.toml`, add content under `content/<language>/`, and provide translations in `i18n/<lang>.yaml`.

## License and credits

- Code in this repository inherits the MIT license from the Hugoplate theme (see `LICENSE`).
- Site content (Markdown, images, copy) © 2025 Maximiliano Mamone unless otherwise noted.
- Built on top of the excellent [Hugoplate](https://github.com/zeon-studio/hugoplate) theme by Zeon Studio.

## Contact

Feel free to reach out via LinkedIn: https://www.linkedin.com/in/maximiliano-mamone/

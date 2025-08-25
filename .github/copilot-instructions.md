# Copilot instructions for this repo

This repository is a Hugo + Tailwind CSS static site based on the Hugoplate theme. The site is driven by Hugo Modules and configuration under `config/_default`, with layouts coming from `themes/hugoplate/`.

## Architecture and where to edit
- Content lives under `content/english/**` (markdown). Don’t edit files in `public/` (build output).
- Layouts/partials are in `themes/hugoplate/layouts/**`. Example: the header nav is `themes/hugoplate/layouts/partials/essentials/header.html` and uses:
  - Menus from `config/_default/menus.it.toml` (uses `site.Menus.main`, `.HasChildren`).
  - UI toggles from `config/_default/params.toml` (e.g., `site.Params.navigation_button`, `theme_switcher`, `search`).
  - Internal links use `relLangURL`; comparisons commonly use `absLangURL`; in-page anchors (`^#`) are prefixed with `site.Home.RelPermalink` when not on the home page.
- CSS lives in `assets/css/custom.css`; Tailwind v4 scans Hugo templates. Keep class names literal (avoid runtime-computed classes) so they’re preserved by the Tailwind scanner; `hugo_stats.json` is mounted for scanning.
- Site-wide config: `hugo.toml` (theme name, outputs, plugins, imaging, etc.). Theme metadata: `theme.toml`.
- Design tokens and social links: `data/theme.json`, `data/social.json`.
- i18n strings: `i18n/it.yaml`. Languages: `config/_default/languages.toml`.
- Hugo Modules: `config/_default/module.toml` imports search, PWA, images, icons, SEO, components, etc.

## Dev, build, and formatting
- Install deps: `npm install` (Node 22+). Required: Hugo Extended (>= 0.144) and Go (>= 1.24) for modules.
- Dev server: `npm run dev` (preferred once the project is set up).
- Build: `npm run build` outputs to `public/`.
- Prettier is configured with `prettier-plugin-go-template` and Tailwind plugin; format with `npm run format`.
- Workspace Tasks: some IDE tasks call `yarn dev:example` / `yarn build:example` (used only when `exampleSite/` exists). If you’ve run the setup script (see below), prefer `npm run dev` / `npm run build` at repo root.

## Project setup scripts and conventions
- First-time setup: `npm run project-setup` converts an `exampleSite` layout into this repo structure and moves theme assets into `themes/hugoplate/`. CI (Netlify/Vercel/GitHub Pages/Amplify) runs this before builds.
- Switch back to editable theme root: `npm run theme-setup` (moves root files into `exampleSite/` and pulls theme files out of `themes/`).
- Update upstream theme folders: `npm run update-theme` (fetches `assets` and `layouts` from `zeon-studio/hugoplate`).
- Update Hugo modules: `npm run update-modules`.
- Optional: `npm run remove-darkmode` will strip dark mode classes and delete the theme switcher partial.

## Deployment notes
- Netlify: see `netlify.toml` (`yarn project-setup; yarn build`; publishes `public/`).
- Vercel: `vercel-build.sh` installs Go/Hugo, runs setup, then `npm run build`.
- GitHub Pages: `.github/workflows/main.yml` installs specific Hugo/Go versions, runs setup and build, uploads `public/`.
- Amplify: `amplify.yml` installs Hugo/Go, runs setup and build.
- IMPORTANT: set a correct `baseURL` in `hugo.toml` before deploying; otherwise relative links and assets may break.

## Common extension points
- Navigation: edit `config/_default/menus.it.toml`. The header partial renders nested menus and highlights active links.
- Call-to-action button: `params.toml` → `[navigation_button]` (`enable`, `label`, `link`).
- Search: `params.toml` → `[search]` (`enable`, `include_sections`, etc.); output `searchindex.json` is emitted by modules.
- Theme mode: `params.toml` → `theme_switcher`, `theme_default`. Header includes the `components/theme-switcher` partial by default.
- Assets: place images in `assets/images/`; reference with Hugo’s pipelines or `static/` if you add it.

## Coding patterns in templates
- Prefer partials and `dict` to pass args, e.g., `{{ partial "components/language-switcher" (dict "Context" . "Class" "...") }}`.
- Use `relLangURL` for internal hrefs, `absLangURL`/`Permalink` for comparisons.
- Access toggles via `site.Params.*`; keep feature flags centralized in `params.toml`.

If anything above is unclear (e.g., when to use the exampleSite scripts, or where to place a new layout/partial), tell me what you’re changing and I’ll refine these notes.
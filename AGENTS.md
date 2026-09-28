<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture decisions

- Hash-based routing (`createHashHistory` in `src/router.tsx`) — the site is hosted on GitHub Pages, where path-based routes 404 on refresh.
- GitHub Pages build is `npm run build:pages` (sets `GITHUB_PAGES=true`): `vite.config.ts` then uses base `/scouterna/`, disables nitro and prerenders a static SPA shell to `dist/client`; `src/router.tsx` maps that base on the server so shell links match hash URLs. Without the flag, `npm run build` stays Lovable's default Cloudflare SSR build — don't make the Pages settings unconditional or Lovable's preview/publish breaks. Deployed by `.github/workflows/deploy.yml` (Bun, since `bun.lock` is the lockfile).
- All visible text lives in typed files under `src/data/` (`site.ts`, `events.ts`, `sections.ts`, `contacts.ts`, page copy and UI labels in `pages.ts`, menu in `nav.ts`) — components read from data, never hardcode content, so real content can be added in one place. Placeholders are prefixed `TODO:`.
- Shared page shell: `src/components/Layout.tsx` (Header + Footer) is rendered once in `src/routes/__root.tsx` around `<Outlet />`; page bodies use the shared `Page` heading wrapper from `src/components/Page.tsx`.
- Design follows scouterna.se for recognition (navy, orange CTA, stone bands, Libre Franklin headings + EB Garamond body via Google Fonts) but with simpler, local content. Colors are oklch tokens in `src/styles.css` (`primary`, `cta`, `highlight`, `secondary`, …) — no ad-hoc hex in components. `public/logo.svg` is a placeholder; don't copy Scouterna's logo or the scout lily.
- Frontend-only: no Lovable Cloud, database, auth, env vars, or external image URLs — assets go in `/public`.


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
- All visible text lives in typed files under `src/data/` (`site.ts`, `events.ts`, `sections.ts`, `contacts.ts`) — components read from data, never hardcode content, so real content can be added in one place.
- Shared page shell: `src/components/Layout.tsx` (Header + Footer) is rendered once in `src/routes/__root.tsx` around `<Outlet />`; page bodies use the shared `Page` heading wrapper from `src/components/Page.tsx`.
- Frontend-only: no Lovable Cloud, database, auth, env vars, or external image URLs — assets go in `/public`.


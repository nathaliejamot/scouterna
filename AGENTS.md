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

# Rules for agents (read before every change)

This is the public website of Säve Scoutkår. Content and style are edited by non-developers
through Lovable. **No developer reviews changes.** Every commit to `main` is built and published
automatically to GitHub Pages: https://nathaliejamot.github.io/scouterna/

The live site is a static page served from the `/scouterna/` subfolder with hash URLs
(`/scouterna/#/kalender`). There is no server. Code that works in the Lovable preview can still
break on GitHub Pages, so follow these rules strictly. If a request would need to break a rule,
don't do it. Explain why to the user in plain Swedish and suggest an alternative.

## 1. Never modify these files

- `vite.config.ts`, `src/router.tsx`, `src/server.ts`, `src/start.ts`
- `src/routeTree.gen.ts` (generated automatically)
- `.github/` (deploy workflow)
- `package.json` scripts, `bunfig.toml`
- `public/fonts/` (except to add new self-hosted fonts, see §4)

Never switch to browser history or `BrowserRouter`, and never change the `/scouterna/` base.

## 2. Code rules

- **Internal links:** use `<Link to="/kalender">` from `@tanstack/react-router`. Never write
  `<a href="/...">` or use `window.location` for internal pages.
- **Files in `public/`** (images, logo, PDFs): reference them as
  `` `${import.meta.env.BASE_URL}images/foo.jpg` `` (no leading slash). Never write
  `src="/..."` or `href="/..."`. In data files, store the path without a leading slash
  (`"images/foo.jpg"`). `url("/fonts/...")` inside `src/styles.css` is fine.
- **Nothing external:** no external image URLs, CDNs, Google Fonts, scripts, iframes/embeds,
  analytics or tracking. Put images in `public/images/`, compressed (under 300 KB each).
  Outbound text links (Scouterna, social media, Google Maps search) are fine.
- **Frontend only:** no Lovable Cloud, Supabase, database, auth, env vars or secrets, server
  functions (`createServerFn`), API/server routes, and no forms that submit data. For contact,
  use `mailto:`/`tel:` links.
- **Dependencies:** don't add npm packages. If one is truly unavoidable, `bun.lock` must be
  updated in the same commit; the deploy runs `bun install --frozen-lockfile` and fails otherwise.
- Keep TypeScript valid and strict. Don't use `any`, and don't disable lint rules.

## 3. Editing content (most requests)

All visible text lives in `src/data/`. Change content there, never inside components.

| Request                                    | File                   |
| ------------------------------------------ | ---------------------- |
| Kår name, tagline, e-mail, address, social | `src/data/site.ts`     |
| Age sections (avdelningar), leaders, times | `src/data/sections.ts` |
| Calendar events                            | `src/data/events.ts`   |
| Contact people                             | `src/data/contacts.ts` |
| Page texts, headings, buttons, labels      | `src/data/pages.ts`    |
| Menu                                       | `src/data/nav.ts`      |

- All site text is in **Swedish**.
- **Never invent facts:** names, phone numbers, e-mails, prices, times, dates, addresses. If the
  user didn't provide it, keep or add a `TODO:` placeholder and tell them what's missing.
- Event dates use `"yyyy-mm-dd"`. `endDate` is only for events that span several days.
  `section` is a `slug` from `sections.ts` or `"alla"`. Past events hide automatically.
- An empty string for a social link or `joinPage.registration.url` hides that link or button.
- New text that a component needs goes into `src/data/pages.ts`, not into the component.

## 4. Changing style

- **Colors:** edit only the tokens in `:root` in `src/styles.css`, in `oklch(...)` format. In
  components, use token classes (`bg-primary`, `text-cta`, `bg-secondary`, …), never hex, rgb or
  arbitrary color values. Text must keep WCAG AA contrast (4.5:1).
- **Fonts:** self-hosted only. Add the `.woff2` file and its license to `public/fonts/` and an
  `@font-face` rule in `src/styles.css`.
- **Logo:** replace `public/logo.svg` and `public/favicon.svg`, or put a new file in `public/`
  and set `site.logo`. Never use Scouterna's logo or the scout lily (trademarks).
- Keep the Scouterna-inspired look (navy, orange buttons, stone bands) unless the user asks
  otherwise.
- Every page must work at 375 px width with no horizontal scrolling.

## 5. Adding or removing a page

1. Create `src/routes/<slug>.tsx`, where the slug is lowercase a–z with hyphens (no å/ä/ö).
   Copy an existing page such as `om-oss.tsx`: `createFileRoute`, `head` with
   `documentTitle(...)`, and the body wrapped in `<Page>`.
2. Put the page text in a new object in `src/data/pages.ts`.
3. Add the page to `navLinks` in `src/data/nav.ts`, and add its path to the `to` type union
   there.
4. To remove a page, reverse all three steps. Also remove every `<Link>` that points to it.

## 6. Checklist before finishing any change

The change must not contain any of these:

- `href="/` or `src="/` in `.tsx` files
- `http` URLs in `src=`, or `<script>`, `<iframe>`, `fonts.googleapis`
- `createServerFn`, `createBrowserHistory`, `BrowserRouter`, `process.env`,
  `import.meta.env.VITE_`
- hex or rgb colors in components
- edits to the files listed in §1
- invented facts, or text outside `src/data/`

Also check that the page works in the preview at mobile width. If the user says the live site
didn't update, the automatic deploy failed and the previous version is still live: undo the last
change and try a smaller one.

## Architecture (reference)

- `npm run build:pages` (`GITHUB_PAGES=true`) builds the static site into `dist/client`: base
  `/scouterna/`, no nitro, a prerendered SPA shell. `src/router.tsx` maps that base on the server
  so shell links match hash URLs. Plain `npm run build` is Lovable's own Cloudflare build and must
  keep working, which is why the Pages settings are conditional.
- `.github/workflows/deploy.yml` deploys on every push to `main`, using Bun because `bun.lock` is
  the lockfile.
- Page shell: `Layout` (Header + Footer) is rendered once in `src/routes/__root.tsx`. Page bodies
  use `Page`/`PageSection` from `src/components/Page.tsx`, and `Card` and `EventList` for lists.
- Helpers live in `src/lib/`: dates (`formatDateSv`), upcoming events, address, page titles and
  social links.

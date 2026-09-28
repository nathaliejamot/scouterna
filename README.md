# Scouterna

Build a minimal static-site skeleton. I will add all real content later in a code editor, so keep it lean and easy to extend.




**Technical constraints (important):**

- Frontend-only. Do not enable Lovable Cloud, Supabase, auth, database, edge functions, or environment variables.

- Use `HashRouter` from react-router, not `BrowserRouter` (site will be hosted on GitHub Pages).

- No external image URLs or CDNs; only local assets in `/public`.

- Tailwind + shadcn/ui, mobile-first, semantic HTML, `lang="sv"` on the html element.




**Structure:**

- A shared layout with a header (site name placeholder, responsive nav) and a simple footer.

- Six route pages, each just a heading and one placeholder paragraph: `/` Hem, `/avdelningar`, `/bli-scout`, `/kalender`, `/om-oss`, `/kontakt`.

- A `src/data/` folder with typed placeholder files: `site.ts` (name, email, address, social links), `events.ts` (array of upcoming events), `sections.ts` (array of age groups), `contacts.ts` (array of leaders). Components should read from these files, not hardcode text.

- A `src/components/` folder with `Layout`, `Header`, `Footer`, and a reusable `Card` component.




**Design:** Neutral, clean starting theme with CSS variables in `index.css` for primary/secondary colors so I can restyle later. No custom illustrations, no hero images, no decorative filler.




**Do not** add a contact form, analytics, SEO meta beyond a basic title, or any content beyond the placeholders described.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/cc70dd07-37d2-4e79-a3ed-9954946f021a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

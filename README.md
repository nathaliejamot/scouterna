# Säve Scoutkår – webbplats

Public website for the scout group (scoutkår) in Säve, north of Gothenburg: who we are, our age
sections, the calendar, how to join, and how to get in touch. The content is in Swedish.

Live at **https://nathaliejamot.github.io/scouterna/**

The design borrows the look of [scouterna.se](https://www.scouterna.se) (navy, orange buttons,
warm stone bands) so visitors recognise it as part of Scouterna, while the content is kept simple
and local.

## Editing content

All text on the site lives in typed files in [`src/data/`](src/data/). Components only read from
these files, so you never need to touch a component to change what the site says.

| File          | What it holds                                                              |
| ------------- | -------------------------------------------------------------------------- |
| `site.ts`     | Kår name, tagline, e-mail, address, social links, logo file                |
| `sections.ts` | Age sections (avdelningar): ages, description, meeting time, leaders       |
| `events.ts`   | Calendar events (`date`/`endDate` as `yyyy-mm-dd`, optional section slug)  |
| `contacts.ts` | Contact people on the Kontakt page                                         |
| `pages.ts`    | Page copy and labels (hero, "Bli scout" steps, cost, registration link, …) |
| `nav.ts`      | Menu items                                                                 |

Placeholders start with `TODO:` — search for it to find what still needs real content. Past
events disappear from the site automatically. Empty social links and an empty registration URL
are hidden. Replace `public/logo.svg` (and `public/favicon.svg`) with the kår's own logo.

## Development

```sh
npm install
npm run dev          # http://localhost:8080
npm run lint
```

## Deployment

Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which
installs with Bun (from `bun.lock`), runs `npm run build:pages` and publishes `dist/client` to
GitHub Pages. Routing is hash-based (`/scouterna/#/kalender`) so every page works on refresh.

`npm run build:pages` is the static GitHub Pages build (base `/scouterna/`). Plain `npm run build`
is Lovable's own build and is left untouched on purpose.

## Lovable

This project is connected to [Lovable](https://lovable.dev), which syncs the `main` branch both
ways: edits made in Lovable are committed here, and pushes to `main` show up in Lovable. Avoid
force-pushing or rewriting pushed history, and keep `main` in a working state.

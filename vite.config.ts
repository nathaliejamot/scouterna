// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// `npm run build:pages` sets this for the GitHub Pages deploy: a static SPA shell
// under /scouterna/ in dist/client. Lovable's own dev preview and builds don't set
// it, so they keep the default root base and Cloudflare SSR build.
const githubPages = process.env["GITHUB_PAGES"] === "true";

export default defineConfig({
  ...(githubPages && { vite: { base: "/scouterna/" }, nitro: false }),
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    ...(githubPages && {
      // Routes live in the URL hash, so the router basepath stays "/" even though
      // assets are served from /scouterna/.
      router: { basepath: "/" },
      spa: {
        enabled: true,
        maskPath: "/scouterna/",
        prerender: { outputPath: "/index.html", crawlLinks: false },
      },
    }),
  },
});

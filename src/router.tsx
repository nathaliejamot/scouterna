import { QueryClient } from "@tanstack/react-query";
import {
  createHashHistory,
  createMemoryHistory,
  createRouter,
  type LocationRewrite,
} from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// The GitHub Pages build serves from BASE_URL (/scouterna/) but keeps the router
// basepath at "/" since routes live in the hash. On the server (the prerendered
// SPA shell), strip BASE_URL from incoming paths and render links the way hash
// history does in the browser (/scouterna/#/kalender), so hydrated hrefs match.
// No-op when BASE_URL is "/" (dev and Lovable builds).
const base = import.meta.env.BASE_URL;
const serverBaseRewrite: LocationRewrite | undefined =
  base === "/"
    ? undefined
    : {
        input: ({ url }) => {
          if (`${url.pathname}/`.startsWith(base)) {
            url.pathname = `/${url.pathname.slice(base.length)}`;
          }
          return url;
        },
        output: ({ url }) => {
          // Leave the bare root as BASE_URL: it's the page being prerendered, and
          // a hash there would trip the server's canonical-URL redirect.
          if (url.pathname !== "/" || url.search || url.hash) {
            url.hash = `${url.pathname}${url.search}${url.hash}`;
            url.search = "";
          }
          url.pathname = base;
          return url;
        },
      };

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    // Hash history in the browser so the site works on GitHub Pages
    // (path-based URLs would 404 there). The server cannot create a
    // history bound to `window`, so SSR uses memory history.
    history:
      typeof document === "undefined"
        ? createMemoryHistory({ initialEntries: ["/"] })
        : createHashHistory(),
    ...(typeof document === "undefined" && serverBaseRewrite && { rewrite: serverBaseRewrite }),
    defaultPreloadStaleTime: 0,
  });

  return router;
};

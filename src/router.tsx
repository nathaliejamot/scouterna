import { QueryClient } from "@tanstack/react-query";
import {
  createHashHistory,
  createMemoryHistory,
  createRouter,
} from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

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
    defaultPreloadStaleTime: 0,
  });

  return router;
};

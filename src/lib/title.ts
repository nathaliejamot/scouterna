import { site } from "@/data/site";

/** Browser tab title for a page: "Kalender – Säve Scoutkår". */
export function documentTitle(pageTitle: string): string {
  return `${pageTitle} – ${site.name}`;
}

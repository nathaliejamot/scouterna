import { layout } from "@/data/pages";
import { site } from "@/data/site";

/** Social links that have a URL filled in site.ts. */
export function socialLinks(): { label: string; url: string }[] {
  return (["facebook", "instagram"] as const)
    .map((key) => ({ label: layout.socialLabels[key], url: site.social[key] }))
    .filter((link) => link.url);
}

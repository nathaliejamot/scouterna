import type { Address } from "@/data/site";

/** "Gatan 1, 123 45 Säve" */
export function formatAddress({ street, postalCode, city }: Address): string {
  return `${street}, ${postalCode} ${city}`;
}

import type { Address } from "@/data/site";

/** "Gatan 1, 123 45 Säve" */
export function formatAddress({ street, postalCode, city }: Address): string {
  return `${street}, ${postalCode} ${city}`;
}

/** Google Maps search for the address. */
export function mapsSearchUrl(address: Address): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(formatAddress(address))}`;
}

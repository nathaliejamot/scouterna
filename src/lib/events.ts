import type { Event } from "@/data/events";
import { eventLabels } from "@/data/pages";
import { sections } from "@/data/sections";

/** Events that haven't ended before `today` (ISO yyyy-mm-dd), soonest first. */
export function upcomingEvents(events: Event[], today: string): Event[] {
  return events
    .filter((event) => (event.endDate ?? event.date) >= today)
    .sort((a, b) => a.date.localeCompare(b.date));
}

/** Display name for an event's section slug, or undefined when it has none. */
export function eventSectionName(event: Event): string | undefined {
  if (!event.section) return undefined;
  if (event.section === "alla") return eventLabels.wholeKar;
  return sections.find((section) => section.slug === event.section)?.name ?? event.section;
}

import type { Event } from "@/data/events";
import { formatDateRangeSv } from "@/lib/dates";
import { eventSectionName } from "@/lib/events";

export function EventList({ events }: { events: Event[] }) {
  return (
    <ul className="divide-y divide-border rounded-xl border border-border bg-card">
      {events.map((event) => {
        const sectionName = eventSectionName(event);
        return (
          <li
            key={`${event.date}-${event.title}`}
            className="flex flex-col gap-1 p-5 sm:flex-row sm:gap-6"
          >
            <p className="font-heading text-sm font-semibold text-primary sm:w-44 sm:shrink-0">
              <time dateTime={event.date}>{formatDateRangeSv(event.date, event.endDate)}</time>
            </p>
            <div>
              <h3 className="font-heading text-lg font-semibold text-card-foreground">
                {event.title}
              </h3>
              {(sectionName || event.location) && (
                <p className="font-heading text-sm text-muted-foreground">
                  {[sectionName, event.location].filter(Boolean).join(" · ")}
                </p>
              )}
              {event.description && <p className="mt-1">{event.description}</p>}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

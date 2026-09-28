import { Link, createFileRoute } from "@tanstack/react-router";
import { EventList } from "@/components/EventList";
import { Page } from "@/components/Page";
import type { Event } from "@/data/events";
import { events } from "@/data/events";
import { calendarPage } from "@/data/pages";
import { sections } from "@/data/sections";
import { formatDateSv, todayIso } from "@/lib/dates";
import { upcomingEvents } from "@/lib/events";
import { cn } from "@/lib/utils";
import { documentTitle } from "@/lib/title";

type CalendarSearch = { avdelning?: string };

export const Route = createFileRoute("/kalender")({
  validateSearch: (search: Record<string, unknown>): CalendarSearch => {
    const avdelning = search["avdelning"];
    return typeof avdelning === "string" ? { avdelning } : {};
  },
  head: () => ({ meta: [{ title: documentTitle(calendarPage.title) }] }),
  component: KalenderPage,
});

/** Groups events (already sorted) by month, e.g. "November 2026". */
function groupByMonth(list: Event[]): { month: string; events: Event[] }[] {
  const groups = new Map<string, Event[]>();
  for (const event of list) {
    const key = event.date.slice(0, 7);
    groups.set(key, [...(groups.get(key) ?? []), event]);
  }
  return [...groups].map(([key, monthEvents]) => {
    const month = formatDateSv(`${key}-01`, { month: "long", year: "numeric" });
    return { month: month.charAt(0).toUpperCase() + month.slice(1), events: monthEvents };
  });
}

function KalenderPage() {
  const { avdelning } = Route.useSearch();
  // Whole-kår events and events without a section show under every filter.
  const visible = upcomingEvents(events, todayIso()).filter(
    (event) =>
      !avdelning || !event.section || event.section === "alla" || event.section === avdelning,
  );
  const filters = [
    { label: calendarPage.allLabel, slug: undefined },
    ...sections.map((section) => ({ label: section.name, slug: section.slug })),
  ];

  return (
    <Page heading={calendarPage.title} intro={calendarPage.intro}>
      <nav aria-label={calendarPage.filterLabel}>
        <p className="font-heading text-sm font-semibold">{calendarPage.filterLabel}</p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {filters.map(({ label, slug }) => {
            const active = slug === avdelning;
            return (
              <li key={label}>
                <Link
                  to="/kalender"
                  search={slug ? { avdelning: slug } : {}}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "inline-block rounded-full border px-4 py-1.5 font-heading text-sm font-medium transition-colors",
                    active
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-foreground hover:border-primary",
                  )}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {visible.length === 0 ? (
        <p className="text-muted-foreground">{calendarPage.empty}</p>
      ) : (
        groupByMonth(visible).map((group) => (
          <section key={group.month}>
            <h2 className="font-heading text-2xl font-semibold text-primary">{group.month}</h2>
            <div className="mt-3">
              <EventList events={group.events} />
            </div>
          </section>
        ))
      )}
    </Page>
  );
}

import { Link, createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/Card";
import { EventList } from "@/components/EventList";
import { buttonVariants } from "@/components/ui/button";
import { events } from "@/data/events";
import { homePage } from "@/data/pages";
import { site } from "@/data/site";
import { todayIso } from "@/lib/dates";
import { upcomingEvents } from "@/lib/events";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: site.name }] }),
  component: HomePage,
});

function HomePage() {
  const { hero, activities, upcoming } = homePage;
  const nextEvents = upcomingEvents(events, todayIso()).slice(0, 3);

  return (
    <>
      <section className="relative bg-primary text-primary-foreground">
        <div className="mx-auto max-w-5xl px-4 pt-16 pb-24 sm:pt-24 sm:pb-32">
          <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-6xl">
            {site.name}
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-primary-foreground/85">{site.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/bli-scout" className={buttonVariants({ variant: "cta", size: "lg" })}>
              {hero.joinLabel}
            </Link>
            <Link
              to="/kontakt"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className:
                  "border-primary-foreground/60 bg-transparent font-heading font-semibold text-primary-foreground hover:bg-primary-foreground hover:text-primary",
              })}
            >
              {hero.contactLabel}
            </Link>
          </div>
        </div>
        <svg
          aria-hidden
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="absolute inset-x-0 bottom-0 h-8 w-full fill-background sm:h-12"
        >
          <path d="M0 60V35C240 5 480 0 720 22s480 38 720 8v30z" />
        </svg>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        <h2 className="font-heading text-3xl font-semibold text-primary">{activities.heading}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {activities.items.map((item) => (
            <Card key={item.title} title={item.title} titleAs="h3">
              <p>{item.text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="font-heading text-3xl font-semibold text-primary">{upcoming.heading}</h2>
            <Link
              to="/kalender"
              className="font-heading font-semibold text-primary underline-offset-4 hover:underline"
            >
              {upcoming.calendarLink} →
            </Link>
          </div>
          <div className="mt-6">
            {nextEvents.length > 0 ? (
              <EventList events={nextEvents} />
            ) : (
              <p className="text-muted-foreground">{upcoming.empty}</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

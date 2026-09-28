import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/Card";
import { Page } from "@/components/Page";
import { sectionsPage } from "@/data/pages";
import { sections } from "@/data/sections";
import { documentTitle } from "@/lib/title";

export const Route = createFileRoute("/avdelningar")({
  head: () => ({ meta: [{ title: documentTitle(sectionsPage.title) }] }),
  component: AvdelningarPage,
});

function AvdelningarPage() {
  return (
    <Page heading={sectionsPage.title} intro={sectionsPage.intro}>
      <div className="grid gap-4 md:grid-cols-2">
        {sections.map((section) => (
          <Card key={section.slug} title={section.name}>
            <p className="font-heading text-sm font-semibold text-cta">{section.ages}</p>
            <p className="mt-3">{section.description}</p>
            <dl className="mt-4 space-y-1 font-heading text-sm">
              <div className="flex gap-2">
                <dt className="font-semibold">{sectionsPage.meetingTimeLabel}:</dt>
                <dd>{section.meetingTime}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold">{sectionsPage.leadersLabel}:</dt>
                <dd>{section.leaders.join(", ")}</dd>
              </div>
            </dl>
          </Card>
        ))}
      </div>
    </Page>
  );
}

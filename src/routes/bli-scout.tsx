import { createFileRoute } from "@tanstack/react-router";
import { Page, PageSection } from "@/components/Page";
import { buttonVariants } from "@/components/ui/button";
import { joinPage } from "@/data/pages";
import { documentTitle } from "@/lib/title";

export const Route = createFileRoute("/bli-scout")({
  head: () => ({ meta: [{ title: documentTitle(joinPage.title) }] }),
  component: BliScoutPage,
});

function BliScoutPage() {
  const { steps, bring, cost, registration } = joinPage;

  return (
    <Page heading={joinPage.title} intro={joinPage.intro}>
      <PageSection heading={steps.heading}>
        <ol className="space-y-3">
          {steps.items.map((step, index) => (
            <li key={step} className="flex gap-4">
              <span
                aria-hidden
                className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-sm font-bold text-primary-foreground"
              >
                {index + 1}
              </span>
              <span className="pt-1">{step}</span>
            </li>
          ))}
        </ol>
      </PageSection>

      <PageSection heading={bring.heading}>
        <ul className="list-disc space-y-1 pl-5">
          {bring.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </PageSection>

      <PageSection heading={cost.heading}>
        <p>{cost.text}</p>
      </PageSection>

      <PageSection heading={registration.heading}>
        <p>{registration.text}</p>
        {registration.url && (
          <a
            href={registration.url}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: "cta", size: "lg", className: "mt-2" })}
          >
            {registration.linkLabel}
          </a>
        )}
      </PageSection>
    </Page>
  );
}

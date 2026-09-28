import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/Page";

export const Route = createFileRoute("/avdelningar")({
  head: () => ({ meta: [{ title: "Avdelningar" }] }),
  component: AvdelningarPage,
});

function AvdelningarPage() {
  return (
    <Page heading="Avdelningar">
      <p>Här kommer information om våra avdelningar och åldersgrupper.</p>
    </Page>
  );
}

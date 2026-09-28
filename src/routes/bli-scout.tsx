import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/Page";

export const Route = createFileRoute("/bli-scout")({
  head: () => ({ meta: [{ title: "Bli scout" }] }),
  component: BliScoutPage,
});

function BliScoutPage() {
  return (
    <Page heading="Bli scout">
      <p>Här kommer information om hur man blir scout och anmäler sig.</p>
    </Page>
  );
}

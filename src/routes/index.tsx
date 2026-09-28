import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/Page";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Hem" }] }),
  component: HomePage,
});

function HomePage() {
  return (
    <Page heading="Hem">
      <p>Kort presentation av scoutkåren. Ersätt med verkligt innehåll.</p>
    </Page>
  );
}

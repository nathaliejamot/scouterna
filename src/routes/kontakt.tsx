import { createFileRoute } from "@tanstack/react-router";
import { Page } from "./index";

export const Route = createFileRoute("/kontakt")({
  head: () => ({ meta: [{ title: "Kontakt" }] }),
  component: KontaktPage,
});

function KontaktPage() {
  return (
    <Page heading="Kontakt">
      <p>Här kommer kontaktuppgifter och sätt att nå oss.</p>
    </Page>
  );
}

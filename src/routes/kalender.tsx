import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/Page";

export const Route = createFileRoute("/kalender")({
  head: () => ({ meta: [{ title: "Kalender" }] }),
  component: KalenderPage,
});

function KalenderPage() {
  return (
    <Page heading="Kalender">
      <p>Här kommer kommande aktiviteter och evenemang att visas.</p>
    </Page>
  );
}

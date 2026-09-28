import { createFileRoute } from "@tanstack/react-router";
import { Page } from "./index";

export const Route = createFileRoute("/om-oss")({
  head: () => ({ meta: [{ title: "Om oss" }] }),
  component: OmOssPage,
});

function OmOssPage() {
  return (
    <Page heading="Om oss">
      <p>Här kommer mer information om scoutkåren och dess historia.</p>
    </Page>
  );
}

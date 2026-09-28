import { createFileRoute } from "@tanstack/react-router";

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

export function Page({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        {heading}
      </h1>
      <div className="mt-4 text-muted-foreground">{children}</div>
    </article>
  );
}

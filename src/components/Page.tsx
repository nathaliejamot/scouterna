import type { ReactNode } from "react";

export function Page({
  heading,
  intro,
  children,
}: {
  heading: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <article className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
      <header className="max-w-3xl">
        <h1 className="font-heading text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          {heading}
        </h1>
        {intro && <p className="mt-4 text-lg text-muted-foreground">{intro}</p>}
      </header>
      <div className="mt-10 space-y-12">{children}</div>
    </article>
  );
}

/** A titled block inside a Page. */
export function PageSection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section className="max-w-3xl">
      <h2 className="font-heading text-2xl font-semibold text-primary">{heading}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}

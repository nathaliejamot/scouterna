import type { ReactNode } from "react";

export function Page({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
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

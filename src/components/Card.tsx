import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  title?: string;
  /** Heading level for the title; use "h3" when the cards sit under an h2. */
  titleAs?: "h2" | "h3";
  children: ReactNode;
  className?: string;
}

export function Card({ title, titleAs: Title = "h2", children, className }: CardProps) {
  return (
    <div className={cn("rounded-xl border border-border bg-card p-6", className)}>
      {title && <Title className="font-heading text-xl font-semibold text-primary">{title}</Title>}
      <div className={title ? "mt-2" : undefined}>{children}</div>
    </div>
  );
}

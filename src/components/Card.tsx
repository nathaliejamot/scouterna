import type { ReactNode } from "react";

interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export function Card({ title, children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-border bg-card p-6 ${className}`}
    >
      {title && (
        <h2 className="text-lg font-semibold text-card-foreground">{title}</h2>
      )}
      <div className={title ? "mt-2" : ""}>{children}</div>
    </div>
  );
}

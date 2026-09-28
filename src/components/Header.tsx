import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { site } from "@/data/site";
import { navLinks } from "@/lib/nav";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link
          to="/"
          className="text-lg font-semibold tracking-tight text-foreground"
        >
          {site.name}
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Huvudmeny" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  activeProps={{ className: "text-foreground font-medium" }}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden rounded-md border border-border px-3 py-1.5 text-sm text-foreground"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          Meny
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav id="mobile-nav" aria-label="Huvudmeny" className="md:hidden">
          <ul className="mx-auto flex max-w-5xl flex-col gap-1 border-t border-border px-4 py-3">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  activeProps={{ className: "text-foreground font-medium" }}
                  className="block rounded-md px-2 py-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

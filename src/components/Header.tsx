import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks } from "@/data/nav";
import { layout } from "@/data/pages";
import { site } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="bg-background">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <Link
            to="/"
            className="flex items-center gap-3 font-heading text-xl font-bold tracking-tight text-primary sm:text-2xl"
          >
            <img
              src={`${import.meta.env.BASE_URL}${site.logo}`}
              alt=""
              className="size-10 sm:size-12"
            />
            {site.name}
          </Link>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-md px-3 py-2 font-heading text-sm font-semibold text-primary md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
            {layout.menuButton}
          </button>
        </div>
      </div>

      {/* Desktop nav */}
      <nav aria-label={layout.mainNavLabel} className="hidden bg-primary md:block">
        <ul className="mx-auto flex max-w-5xl px-4">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "border-highlight" }}
                inactiveProps={{ className: "border-transparent" }}
                className="block border-b-4 px-4 pt-4 pb-3 font-heading text-[0.95rem] font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile nav */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label={layout.mainNavLabel}
          className="border-b border-primary-foreground/20 bg-primary md:hidden"
        >
          <ul className="flex flex-col px-4 py-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: link.to === "/" }}
                  activeProps={{ className: "border-highlight font-semibold" }}
                  inactiveProps={{ className: "border-transparent" }}
                  className="block border-l-4 px-3 py-3 font-heading text-primary-foreground"
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

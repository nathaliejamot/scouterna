import { site } from "@/data/site";
import { formatAddress } from "@/lib/address";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          {site.name} · {formatAddress(site.address)}
        </p>
        <p>
          <a href={`mailto:${site.email}`} className="hover:text-foreground">
            {site.email}
          </a>
        </p>
      </div>
    </footer>
  );
}

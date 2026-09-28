import { layout } from "@/data/pages";
import { site } from "@/data/site";
import { formatAddress } from "@/lib/address";
import { socialLinks } from "@/lib/social";

const linkClass = "underline-offset-4 hover:underline";

export function Footer() {
  const social = socialLinks();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-5xl gap-6 px-4 py-10 text-sm sm:grid-cols-3">
        <div>
          <p className="font-heading text-lg font-bold">{site.name}</p>
          <p className="mt-2 text-primary-foreground/80">{formatAddress(site.address)}</p>
          <p className="mt-1">
            <a href={`mailto:${site.email}`} className={linkClass}>
              {site.email}
            </a>
          </p>
        </div>

        <p className="sm:text-center">
          {layout.partOf}{" "}
          <a
            href={site.parentOrg.url}
            target="_blank"
            rel="noreferrer"
            className="font-heading font-semibold underline underline-offset-4"
          >
            {site.parentOrg.name}
          </a>
        </p>

        {social.length > 0 && (
          <ul className="flex gap-4 sm:justify-end">
            {social.map((link) => (
              <li key={link.label}>
                <a href={link.url} target="_blank" rel="noreferrer" className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </footer>
  );
}

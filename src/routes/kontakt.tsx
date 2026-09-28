import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/Card";
import { Page, PageSection } from "@/components/Page";
import { contacts } from "@/data/contacts";
import { contactPage } from "@/data/pages";
import { site } from "@/data/site";
import { formatAddress } from "@/lib/address";
import { socialLinks } from "@/lib/social";
import { documentTitle } from "@/lib/title";

export const Route = createFileRoute("/kontakt")({
  head: () => ({ meta: [{ title: documentTitle(contactPage.title) }] }),
  component: KontaktPage,
});

const linkClass = "text-primary underline underline-offset-4";

function KontaktPage() {
  const social = socialLinks();

  return (
    <Page heading={contactPage.title} intro={contactPage.intro}>
      <section>
        <h2 className="font-heading text-2xl font-semibold text-primary">
          {contactPage.contactsHeading}
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contacts.map((contact) => (
            <Card key={`${contact.role}-${contact.name}`} title={contact.name} titleAs="h3">
              <p className="font-heading text-sm font-semibold text-muted-foreground">
                {contact.role}
              </p>
              <div className="mt-3 space-y-1">
                {contact.email && (
                  <p>
                    <a href={`mailto:${contact.email}`} className={linkClass}>
                      {contact.email}
                    </a>
                  </p>
                )}
                {contact.phone && (
                  <p>
                    <a href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`} className={linkClass}>
                      {contact.phone}
                    </a>
                  </p>
                )}
              </div>
            </Card>
          ))}
        </div>
      </section>

      <PageSection heading={contactPage.emailHeading}>
        <p>
          <a href={`mailto:${site.email}`} className={linkClass}>
            {site.email}
          </a>
        </p>
      </PageSection>

      <PageSection heading={contactPage.addressHeading}>
        <address className="not-italic">
          {site.name}
          <br />
          {formatAddress(site.address)}
        </address>
      </PageSection>

      {social.length > 0 && (
        <PageSection heading={contactPage.socialHeading}>
          <ul className="flex flex-wrap gap-4">
            {social.map((link) => (
              <li key={link.label}>
                <a href={link.url} target="_blank" rel="noreferrer" className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </PageSection>
      )}
    </Page>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Page, PageSection } from "@/components/Page";
import { aboutPage } from "@/data/pages";
import { site } from "@/data/site";
import { formatAddress, mapsSearchUrl } from "@/lib/address";
import { documentTitle } from "@/lib/title";

export const Route = createFileRoute("/om-oss")({
  head: () => ({ meta: [{ title: documentTitle(aboutPage.title) }] }),
  component: OmOssPage,
});

const linkClass = "font-heading font-semibold text-primary underline underline-offset-4";

function OmOssPage() {
  const { history, location, parentOrg } = aboutPage;

  return (
    <Page heading={aboutPage.title}>
      <PageSection heading={history.heading}>
        {history.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </PageSection>

      <PageSection heading={location.heading}>
        <p>{location.text}</p>
        <address className="not-italic">{formatAddress(site.address)}</address>
        <p>
          <a
            href={mapsSearchUrl(site.address)}
            target="_blank"
            rel="noreferrer"
            className={linkClass}
          >
            {location.mapLinkLabel}
          </a>
        </p>
      </PageSection>

      <PageSection heading={parentOrg.heading}>
        <p>{parentOrg.text}</p>
        <p>
          <a href={site.parentOrg.url} target="_blank" rel="noreferrer" className={linkClass}>
            {parentOrg.linkLabel}
          </a>
        </p>
      </PageSection>
    </Page>
  );
}

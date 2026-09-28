export type Address = {
  street: string;
  postalCode: string;
  city: string;
};

export type SiteInfo = {
  name: string;
  tagline: string;
  email: string;
  address: Address;
  /** Full profile URLs. Leave empty to hide the link. */
  social: { facebook: string; instagram: string };
  parentOrg: { name: string; url: string };
};

export const site: SiteInfo = {
  name: "Säve Scoutkår", // TODO: bekräfta kårens riktiga namn
  tagline: "TODO: Kort mening om vad kåren står för",
  email: "todo@example.com",
  address: {
    street: "TODO: Gatuadress",
    postalCode: "TODO: Postnummer",
    city: "Säve",
  },
  social: {
    facebook: "", // TODO: länk till Facebook-sidan
    instagram: "", // TODO: länk till Instagram-kontot
  },
  parentOrg: { name: "Scouterna", url: "https://www.scouterna.se" },
};

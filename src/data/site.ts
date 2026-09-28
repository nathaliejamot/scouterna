export interface SocialLink {
  label: string;
  url: string;
}

export interface SiteInfo {
  name: string;
  email: string;
  address: string;
  social: SocialLink[];
}

export const site: SiteInfo = {
  name: "Scoutkåren",
  email: "info@example.se",
  address: "Gatuadress 123, 123 45 Ort",
  social: [
    { label: "Facebook", url: "https://facebook.com/" },
    { label: "Instagram", url: "https://instagram.com/" },
  ],
};

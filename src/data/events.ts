export type Event = {
  /** ISO date, yyyy-mm-dd */
  date: string;
  /** ISO date for multi-day events, yyyy-mm-dd */
  endDate?: string;
  title: string;
  /** A section slug from sections.ts, or "alla" for the whole kår */
  section?: string;
  location?: string;
  description?: string;
};

// TODO: Replace with the kår's real calendar. Past events are hidden on the site.
export const events: Event[] = [
  {
    date: "2026-10-17",
    title: "TODO: Exempel – hajk",
    section: "upptackare",
    location: "TODO: Plats",
    description: "TODO: Kort beskrivning av aktiviteten.",
  },
  {
    date: "2026-11-07",
    endDate: "2026-11-08",
    title: "TODO: Exempel – läger för hela kåren",
    section: "alla",
    location: "TODO: Plats",
    description: "TODO: Kort beskrivning av aktiviteten.",
  },
  {
    date: "2026-12-12",
    title: "TODO: Exempel – terminsavslutning",
    section: "alla",
    location: "TODO: Plats",
  },
  {
    date: "2027-01-23",
    title: "TODO: Exempel – vinteraktivitet",
    section: "aventyrare",
    location: "TODO: Plats",
    description: "TODO: Kort beskrivning av aktiviteten.",
  },
];

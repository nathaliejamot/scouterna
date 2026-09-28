export type Section = {
  slug: string;
  name: string;
  ages: string;
  description: string;
  meetingTime: string;
  leaders: string[];
};

// Scouterna's standard age groups. TODO: keep only the sections the kår runs.
export const sections: Section[] = [
  {
    slug: "sparare",
    name: "Spårare",
    ages: "åk 2–3",
    description: "TODO: Kort beskrivning av vad Spårarna gör.",
    meetingTime: "TODO: Veckodag och tid",
    leaders: ["TODO: Ledarens namn"],
  },
  {
    slug: "upptackare",
    name: "Upptäckare",
    ages: "åk 4–5",
    description: "TODO: Kort beskrivning av vad Upptäckarna gör.",
    meetingTime: "TODO: Veckodag och tid",
    leaders: ["TODO: Ledarens namn"],
  },
  {
    slug: "aventyrare",
    name: "Äventyrare",
    ages: "åk 6–8",
    description: "TODO: Kort beskrivning av vad Äventyrarna gör.",
    meetingTime: "TODO: Veckodag och tid",
    leaders: ["TODO: Ledarens namn"],
  },
  {
    slug: "utmanare",
    name: "Utmanare",
    ages: "åk 9 – gymnasiet år 2",
    description: "TODO: Kort beskrivning av vad Utmanarna gör.",
    meetingTime: "TODO: Veckodag och tid",
    leaders: ["TODO: Ledarens namn"],
  },
  {
    slug: "rover",
    name: "Rover",
    ages: "gymnasiet år 3 – 25 år",
    description: "TODO: Kort beskrivning av vad Rovrarna gör.",
    meetingTime: "TODO: Veckodag och tid",
    leaders: ["TODO: Ledarens namn"],
  },
];

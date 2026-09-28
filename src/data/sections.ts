export interface Section {
  id: string;
  name: string;
  ageRange: string;
  description: string;
}

export const sections: Section[] = [
  {
    id: "spara",
    name: "Spararna",
    ageRange: "8–10 år",
    description: "Kort beskrivning av avdelningen.",
  },
  {
    id: "upptacka",
    name: "Upptäckarna",
    ageRange: "10–12 år",
    description: "Kort beskrivning av avdelningen.",
  },
  {
    id: "aventyra",
    name: "Äventyrarna",
    ageRange: "12–15 år",
    description: "Kort beskrivning av avdelningen.",
  },
  {
    id: "utmana",
    name: "Utmanarna",
    ageRange: "15–18 år",
    description: "Kort beskrivning av avdelningen.",
  },
];

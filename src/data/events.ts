export interface Event {
  id: string;
  title: string;
  date: string; // ISO date, e.g. "2026-10-03"
  location: string;
  description: string;
}

export const events: Event[] = [
  {
    id: "event-1",
    title: "Höstläger",
    date: "2026-10-03",
    location: "Lägerplatsen",
    description: "Kort beskrivning av evenemanget.",
  },
  {
    id: "event-2",
    title: "Höstmöte",
    date: "2026-09-15",
    location: "Scoutlokalen",
    description: "Kort beskrivning av evenemanget.",
  },
  {
    id: "event-3",
    title: "Vintertur",
    date: "2027-02-07",
    location: "Skogen",
    description: "Kort beskrivning av evenemanget.",
  },
];

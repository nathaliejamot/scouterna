export interface Contact {
  id: string;
  name: string;
  role: string;
  email: string;
}

export const contacts: Contact[] = [
  {
    id: "leader-1",
    name: "Förnamn Efternamn",
    role: "Kårchef",
    email: "karchef@example.se",
  },
  {
    id: "leader-2",
    name: "Förnamn Efternamn",
    role: "Avdelningsledare",
    email: "ledare@example.se",
  },
];

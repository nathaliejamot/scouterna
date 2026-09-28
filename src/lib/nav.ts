export interface NavLink {
  to: "/" | "/avdelningar" | "/bli-scout" | "/kalender" | "/om-oss" | "/kontakt";
  label: string;
}

export const navLinks: NavLink[] = [
  { to: "/", label: "Hem" },
  { to: "/avdelningar", label: "Avdelningar" },
  { to: "/bli-scout", label: "Bli scout" },
  { to: "/kalender", label: "Kalender" },
  { to: "/om-oss", label: "Om oss" },
  { to: "/kontakt", label: "Kontakt" },
];

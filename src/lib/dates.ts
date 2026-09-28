const defaultFormat: Intl.DateTimeFormatOptions = {
  day: "numeric",
  month: "long",
  year: "numeric",
};

/** Parses an ISO yyyy-mm-dd date as local midnight (new Date("yyyy-mm-dd") would be UTC). */
export function parseIsoDate(iso: string): Date {
  return new Date(`${iso}T00:00`);
}

/** Formats an ISO yyyy-mm-dd date in Swedish, e.g. "7 november 2026". */
export function formatDateSv(
  iso: string,
  options: Intl.DateTimeFormatOptions = defaultFormat,
): string {
  return new Intl.DateTimeFormat("sv-SE", options).format(parseIsoDate(iso));
}

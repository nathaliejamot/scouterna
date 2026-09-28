const defaultFormat: Intl.DateTimeFormatOptions = {
  day: "numeric",
  month: "long",
  year: "numeric",
};

/** Parses an ISO yyyy-mm-dd date as local midnight (new Date("yyyy-mm-dd") would be UTC). */
export function parseIsoDate(iso: string): Date {
  return new Date(`${iso}T00:00`);
}

/** Today's local date as ISO yyyy-mm-dd. */
export function todayIso(): string {
  return new Intl.DateTimeFormat("sv-SE").format(new Date());
}

/** Formats an ISO yyyy-mm-dd date in Swedish, e.g. "7 november 2026". */
export function formatDateSv(
  iso: string,
  options: Intl.DateTimeFormatOptions = defaultFormat,
): string {
  return new Intl.DateTimeFormat("sv-SE", options).format(parseIsoDate(iso));
}

/** Formats a date or date range in Swedish, e.g. "7–8 november 2026". */
export function formatDateRangeSv(start: string, end?: string): string {
  if (!end || end === start) return formatDateSv(start);
  return new Intl.DateTimeFormat("sv-SE", defaultFormat).formatRange(
    parseIsoDate(start),
    parseIsoDate(end),
  );
}

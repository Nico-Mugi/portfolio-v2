type Locale = "en" | "fr";

export function isLocale(value?: string): value is Locale {
  return ["en", "fr"].includes(value as Locale);
}

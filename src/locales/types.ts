export type LocaleType = "es" | "en";
export const localeSafety = (loc: string | undefined): LocaleType =>
  loc === "es" || loc === "en" ? loc : "es";

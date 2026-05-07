import { Locale } from "~/paraglide/runtime";
import { FileRoutesByTo } from "../routeTree.gen";

type RoutePath = keyof FileRoutesByTo;

const excludedPaths = ["admin"] as const;

type PublicRoutePath = Exclude<
  RoutePath,
  `${string}${(typeof excludedPaths)[number]}${string}`
>;

type TranslatedPathname = {
  pattern: string;
  localized: Array<[Locale, string]>;
};

function toUrlPattern(path: string) {
  const url = path
    // catch-all
    .replace(/\/\$$/, "/:path(.*)?")
    // optional parameters: {-$param}
    .replace(/\{-\$([a-zA-Z0-9_]+)\}/g, ":$1?")
    // named parameters: $param
    .replace(/\$([a-zA-Z0-9_]+)/g, ":$1")
    // remove trailing slash
    .replace(/\/+$/, "");
  console.log("toUrlPattern result", url);
  return url;
}

function createTranslatedPathnames(
  input: Record<PublicRoutePath, Record<Locale, string>>,
): TranslatedPathname[] {
  const result = Object.entries(input).map(([pattern, locales]) => ({
    pattern: toUrlPattern(pattern),
    localized: Object.entries(locales).map(
      ([locale, path]) =>
        [locale as Locale, `/${locale}${toUrlPattern(path)}`] satisfies [
          Locale,
          string,
        ],
    ),
  }));
  console.log("createTranslatedPathnames result", result);
  console.log(
    "createTranslatedPathnames results",
    result.map(({ pattern, localized }) => ({
      pattern,
      localized: localized.map(([locale, path]) => {
        console.log("Localized path", { locale, path });
        return { locale, path };
      }),
    })),
  );
  return result;
}

export const translatedPathnames = createTranslatedPathnames({
  "/": {
    fr: "/",
    en: "/",
  },
  "/cv": {
    fr: "/cv",
    en: "/resume",
  },
});

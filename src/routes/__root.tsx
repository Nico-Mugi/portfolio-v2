import type { ReactNode } from "react";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { getLocale } from "../paraglide/runtime.js";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Nicolas Thouvenin - Portfolio",
      },
      {
        name: "description",
        content:
          "Portfolio de Nicolas Thouvenin, développeur web spécialisé en React et Node.js. Découvrez mon expérience, mes compétences et comment me contacter.",
      },
      {
        name: "og:title",
        content: "Nicolas Thouvenin - Portfolio",
      },
      {
        name: "og:description",
        content:
          "Portfolio de Nicolas Thouvenin, développeur web spécialisé en React et Node.js. Découvrez mon expérience, mes compétences et comment me contacter.",
      },
      {
        name: "og:type",
        content: "website",
      },
      {
        name: "og:url",
        content: "https://nicolas-thouvenin.dev",
      },
      {
        name: "og:site_name",
        content: "Nicolas Thouvenin - Portfolio",
      },
      {
        name: "og:image",
        content: "https://nicolas-thouvenin.dev/logos/vertical.png",
      },
    ],
    links: [
      {
        rel: "icon",
        href: "/logos/vertical.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang={getLocale()}>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <TanStackDevtools
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}

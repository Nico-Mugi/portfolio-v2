/// <reference types="vite/client" />
import type { ReactNode } from "react";
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

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
        content: "https://nicolas-thouvenin.dev/logos/vertical.svg",
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
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

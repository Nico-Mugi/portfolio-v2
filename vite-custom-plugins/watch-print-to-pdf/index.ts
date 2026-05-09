import type { Plugin } from "vite";
import type { UserConfig } from "./types.ts";
import { exportPDF } from "./pdf.ts";
import { isInDependencyTree } from "./utils.ts";

export default function watchPrintToPdf(option: UserConfig): Plugin {
  return {
    name: "vite-plugin-watch-print-to-pdf",
    apply: "serve",

    configureServer(server) {
      server.watcher.on("change", async (changedFile: string) => {
        // For each page, check whether the changed file falls inside that page's watchFile dependency tree.
        const matchResults = await Promise.all(
          option.pages.map((page) =>
            isInDependencyTree(changedFile, page.watchFile, server).then(
              (hit) => (hit ? page : null),
            ),
          ),
        );

        const pages = matchResults.filter(Boolean) as UserConfig["pages"];

        if (pages.length === 0) return;

        console.log(
          "[watch-print-to-pdf] %s triggered export for: %s",
          changedFile,
          pages.map((p) => p.outPath).join(", "),
        );

        await exportPDF({ pages });

        server.ws.send({ type: "full-reload" });
      });
    },
  };
}

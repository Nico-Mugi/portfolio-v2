import type { Page } from "playwright";

export interface UserConfig {
  pages: {
    /**
     * Exported PDF path
     *
     */
    outPath: string;

    /**
     * The URL of the page you want to export
     */
    url: string;

    /**
     * The input file path of the page you want to watch.
     */
    watchFile: string;

    /**
     * Options passed to page.pdf()
     */
    pdf?: Omit<Parameters<Page["pdf"]>[0], "path">;
  }[];
}

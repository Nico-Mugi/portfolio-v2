import { ResumeLocale } from "~/config/data";
import { Logo, LogoVertical } from "./logo";
import { Link } from "@tanstack/react-router";

export function Footer({ locale }: { locale: ResumeLocale }) {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800/50 py-8">
      <div className="max-w-5xl mx-auto px-6 md:pb-0 pb-14 flex flex-col sm:flex-row items-center justify-between gap-3">
        <a href="#" className="h-full sm:hidden flex w-24 items-center">
          <Logo />
        </a>
        <a href="#" className="h-full sm:flex hidden w-16 items-center">
          <LogoVertical />
        </a>

        <p className="text-neutral-600 text-sm">
          © {new Date().getFullYear()} {locale.personal.firstName}{" "}
          {locale.personal.lastName} — {locale.contact.address.city}
        </p>
        <Link
          to="/cv"
          search={({ lang }) => ({ lang: lang === "en" ? "en" : "fr" })}
          className="text-sm text-neutral-500 hover:text-[#8FAF83] transition-colors duration-200"
        >
          {locale.ui.footer.viewCv}
        </Link>
      </div>
    </footer>
  );
}

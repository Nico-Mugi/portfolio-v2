import {
  BriefcaseIcon,
  ChartNoAxesCombined,
  GraduationCap,
  MailCheckIcon,
} from "lucide-react";
import { Logo, LogoVertical } from "./logo";
import { Link } from "@tanstack/react-router";
import { ResumeLocale } from "~/config/data";
import { siGithub } from "simple-icons";
import { SimpleIcon } from "./simple-icon";

export function Nav({
  locale,
  lang,
}: {
  locale: ResumeLocale;
  lang: "fr" | "en";
}) {
  const navLinks: {
    label: string;
    href: string;
    icon: React.ReactNode;
  }[] = [
    {
      label: locale.ui.nav.experience,
      href: "#experience",
      icon: <BriefcaseIcon size={20} />,
    },
    {
      label: locale.ui.nav.education,
      href: "#education",
      icon: <GraduationCap size={20} />,
    },
    {
      label: locale.ui.nav.skills,
      href: "#skills",
      icon: <ChartNoAxesCombined size={20} />,
    },
    {
      label: locale.ui.nav.contact,
      href: "#contact",
      icon: <MailCheckIcon size={20} />,
    },
  ];

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="h-full sm:flex hidden w-24 items-center">
            <Logo />
          </a>
          <a href="#" className="h-full sm:hidden flex w-16 items-center">
            <LogoVertical />
          </a>
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Primary navigation"
          >
            {navLinks.map(({ label, href, icon }) => (
              <a
                key={href}
                href={href}
                className="text-sm text-neutral-400 hover:text-white transition-colors duration-200 flex flex-row align-middle items-center gap-2 py-2"
              >
                <div>{icon}</div>
                <div>{label}</div>
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="https://github.com/Nico-Mugi" target="_blank">
              <button
                className="text-sm font-medium px-3 py-1.5 rounded-lg border border-neutral-700 text-neutral-400 hover:border-[#8FAF83] hover:text-white transition-all duration-200"
                aria-label="Switch language"
              >
                <SimpleIcon
                  path={siGithub.path}
                  title={siGithub.title}
                  size={16}
                />
              </button>
            </a>
            <Link
              to="/"
              search={({ lang }) => ({ lang: lang === "en" ? "fr" : "en" })}
            >
              <button
                className="text-sm font-medium px-3 py-1.5 rounded-lg border border-neutral-700 text-neutral-400 hover:border-[#8FAF83] hover:text-white transition-all duration-200"
                aria-label="Switch language"
              >
                {lang === "en" ? "FR" : "EN"}
              </button>
            </Link>

            <Link
              to="/cv"
              search={({ lang }) => ({ lang: lang === "en" ? "en" : "fr" })}
            >
              <button
                type="button"
                className="text-sm font-medium px-4 py-1.5 rounded-lg border border-neutral-700 text-neutral-300 hover:border-[#8FAF83] hover:text-white transition-all duration-200"
              >
                {locale.ui.nav.viewCv}
              </button>
            </Link>
          </div>
        </div>
      </header>
      <nav
        className="flex md:hidden fixed bottom-0 justify-around w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-white/5 text-center py-2"
        aria-label="Mobile navigation"
      >
        {navLinks.map(({ label, href, icon }) => (
          <a
            key={href}
            href={href}
            className="w-full px-2 grow text-sm text-neutral-400 hover:text-white transition-colors duration-200 flex flex-col items-center py-2"
          >
            <div>{icon}</div>
            <div className="text-xs">{label}</div>
          </a>
        ))}
      </nav>
    </>
  );
}

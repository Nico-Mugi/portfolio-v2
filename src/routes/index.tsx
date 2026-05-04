import { createFileRoute } from "@tanstack/react-router";
import { BriefcaseIcon } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { fr, en, type ResumeLocale } from "~/config/data";

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>) => ({
    lang: (search.lang === "en" ? "en" : "fr") as "fr" | "en",
  }),
  head: () => ({
    meta: [{ title: "Nicolas Thouvenin - Portfolio" }],
  }),
  component: Portfolio,
});

type ContactItem = {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string | undefined;
};

function buildContactItems(locale: ResumeLocale): ContactItem[] {
  return [
    {
      icon: locale.contact.email.icon,
      label: locale.ui.contactLabels.email,
      value: locale.contact.email.display,
      href: locale.contact.email.href,
    },
    {
      icon: locale.contact.phone.icon,
      label: locale.ui.contactLabels.phone,
      value: locale.contact.phone.display,
      href: locale.contact.phone.href,
    },
    {
      icon: locale.contact.address.icon,
      label: locale.ui.contactLabels.location,
      value: locale.contact.address.city,
      href: undefined,
    },
  ];
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="text-2xl font-bold text-white whitespace-nowrap">
        {children}
      </h2>
      <div className="h-px flex-1 bg-neutral-800" />
    </div>
  );
}

function Nav({ locale, lang }: { locale: ResumeLocale; lang: "fr" | "en" }) {
  const navigate = Route.useNavigate();

  const navLinks: [string, string][] = [
    [locale.ui.nav.experience, "#experience"],
    [locale.ui.nav.education, "#education"],
    [locale.ui.nav.skills, "#skills"],
    [locale.ui.nav.contact, "#contact"],
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-bold text-xl text-white tracking-tight">
          NT<span className="text-[#8FAF83]">.DEV</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={() =>
              navigate({
                search: () => ({ lang: lang === "en" ? "fr" : "en" }),
              })
            }
            className="text-sm font-medium px-3 py-1.5 rounded-lg border border-neutral-700 text-neutral-400 hover:border-[#8FAF83] hover:text-white transition-all duration-200"
            aria-label="Switch language"
          >
            {lang === "en" ? "FR" : "EN"}
          </button>
          <a
            href={`/cv?lang=${lang}`}
            className="text-sm font-medium px-4 py-1.5 rounded-lg border border-neutral-700 text-neutral-300 hover:border-[#8FAF83] hover:text-white transition-all duration-200"
          >
            {locale.ui.nav.viewCv}
          </a>
        </div>
      </div>
    </header>
  );
}

function HeroSection({ locale }: { locale: ResumeLocale }) {
  const contactItems = buildContactItems(locale);

  return (
    <section className="relative min-h-screen flex items-center bg-neutral-950 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-[#8FAF83]/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-[#8FAF83]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8FAF83]/10 border border-[#8FAF83]/25 text-[#8FAF83] text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8FAF83] animate-pulse" />
              {locale.ui.hero.availableBadge}
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-none mb-4">
              {locale.personal.firstName}
              <br />
              <span className="text-neutral-400">
                {locale.personal.lastName}
              </span>
            </h1>

            <p className="text-base md:text-lg text-[#8FAF83] font-medium mb-6 tracking-wide">
              {locale.personal.title}
            </p>

            <p className="text-neutral-400 leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
              {locale.personal.bio}
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="#contact"
                className="px-6 py-2.5 rounded-lg bg-[#8FAF83] text-neutral-950 text-sm font-semibold hover:bg-[#a0c096] transition-colors duration-200"
              >
                {locale.ui.hero.contactCta}
              </a>
              <a
                href="/cv"
                className="px-6 py-2.5 rounded-lg border border-neutral-700 text-neutral-300 text-sm font-medium hover:border-neutral-500 hover:text-white transition-all duration-200"
              >
                {locale.ui.hero.viewCvCta}
              </a>
            </div>
          </div>

          <div className="relative shrink-0">
            <div className="absolute inset-0 rounded-full bg-[#8FAF83]/15 blur-2xl scale-125 pointer-events-none" />
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full p-0.5 bg-linear-to-br from-[#8FAF83]/70 via-[#8FAF83]/20 to-transparent">
              <div className="w-full h-full rounded-full bg-neutral-900 overflow-hidden">
                <img
                  src={locale.personal.photo}
                  alt={`${locale.personal.firstName} ${locale.personal.lastName}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-10 border-t border-neutral-800 flex flex-wrap gap-6 justify-center md:justify-start">
          {contactItems.map(({ icon: Icon, value, href }) =>
            href ? (
              <a
                key={value}
                href={href}
                className="flex items-center gap-2 text-neutral-500 text-sm hover:text-[#8FAF83] transition-colors duration-200"
              >
                <Icon size={13} />
                {value}
              </a>
            ) : (
              <span
                key={value}
                className="flex items-center gap-2 text-neutral-500 text-sm"
              >
                <Icon size={13} />
                {value}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection({ locale }: { locale: ResumeLocale }) {
  return (
    <section id="experience" className="bg-neutral-900 py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-3">
          <BriefcaseIcon size={14} className="text-[#8FAF83]" />
          <span className="text-[#8FAF83] text-xs font-semibold uppercase tracking-widest">
            {locale.ui.sections.experienceSubtitle}
          </span>
        </div>
        <SectionHeading>{locale.ui.sections.experienceTitle}</SectionHeading>

        <div className="relative mt-12">
          <div className="absolute left-6 top-2 bottom-2 w-px bg-linear-to-b from-[#8FAF83]/50 via-neutral-700 to-transparent hidden md:block" />

          <div className="flex flex-col gap-8">
            {locale.experience.map((exp) => (
              <div key={exp.company} className="md:pl-20 relative group">
                <div className="hidden md:block absolute left-4.75 top-5 w-3.5 h-3.5 rounded-full bg-neutral-900 border-2 border-[#8FAF83] group-hover:bg-[#8FAF83] transition-colors duration-300" />

                <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 group-hover:border-[#8FAF83]/30 transition-colors duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-semibold text-white text-base leading-snug">
                        {exp.title}
                      </h3>
                      <p className="text-[#8FAF83] text-sm mt-1">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {exp.current && (
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-[#8FAF83]/15 text-[#8FAF83] border border-[#8FAF83]/25">
                          {locale.ui.experience.currentBadge}
                        </span>
                      )}
                      <span className="text-xs text-neutral-500 italic">
                        {exp.periodShort}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-2.5">
                    {exp.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-sm text-neutral-400 leading-relaxed"
                      >
                        <span className="mt-2 shrink-0 w-1 h-1 rounded-full bg-[#8FAF83]/60" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EducationSection({ locale }: { locale: ResumeLocale }) {
  return (
    <section id="education" className="bg-neutral-950 py-24">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading>{locale.ui.sections.educationTitle}</SectionHeading>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {locale.education.map((edu, i) => (
            <div
              key={edu.school}
              className="relative bg-neutral-900 border border-neutral-800 rounded-2xl p-6 overflow-hidden hover:border-[#8FAF83]/30 transition-colors duration-300 group"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#8FAF83] via-[#8FAF83]/60 to-transparent" />
              <span className="absolute top-3 right-4 text-6xl font-black text-neutral-800 select-none leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-xs text-neutral-500 mb-4 font-mono">
                {edu.periodShort}
              </p>
              <h3 className="font-semibold text-white text-sm leading-snug mb-3 relative">
                {edu.degreeShort}
              </h3>
              <p className="text-[#8FAF83] text-sm relative">{edu.school}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection({ locale }: { locale: ResumeLocale }) {
  return (
    <section id="skills" className="bg-neutral-900 py-24">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading>{locale.ui.sections.skillsTitle}</SectionHeading>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {locale.portfolioSkillGroups.map(
            ({ category, icon: Icon, items }, i) => {
              return (
                <div
                  key={category}
                  className="bg-neutral-950 border border-neutral-800 rounded-2xl p-5 hover:border-[#8FAF83]/30 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[#8FAF83]/10 border border-[#8FAF83]/20 flex items-center justify-center shrink-0">
                      {Icon && <Icon size={16} className="text-[#8FAF83]" />}
                    </div>
                    <h3 className="font-semibold text-white text-sm">
                      {category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-2.5 py-1 rounded-lg bg-neutral-800 text-neutral-300 border border-neutral-700 hover:border-[#8FAF83]/40 hover:text-white transition-colors duration-150 cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
}

function ContactSection({ locale }: { locale: ResumeLocale }) {
  const contactItems = buildContactItems(locale);

  return (
    <section id="contact" className="bg-neutral-950 py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {locale.ui.contactSection.title}{" "}
            <span className="text-[#8FAF83]">
              {locale.ui.contactSection.titleAccent}
            </span>
          </h2>
          <p className="text-neutral-400 leading-relaxed">
            {locale.ui.contactSection.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {contactItems.map(({ icon: Icon, label, value, href }) => (
            <div
              key={label}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 text-center hover:border-[#8FAF83]/30 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-[#8FAF83]/10 border border-[#8FAF83]/20 flex items-center justify-center mx-auto mb-3">
                <Icon size={16} className="text-[#8FAF83]" />
              </div>
              <p className="text-xs text-neutral-500 mb-1.5 uppercase tracking-wide">
                {label}
              </p>
              {href ? (
                <a
                  href={href}
                  className="text-sm text-neutral-300 hover:text-[#8FAF83] transition-colors break-all"
                >
                  {value}
                </a>
              ) : (
                <p className="text-sm text-neutral-300">{value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer({ locale }: { locale: ResumeLocale }) {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800/50 py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="font-bold text-white">
          NT<span className="text-[#8FAF83]">.DEV</span>
        </span>
        <p className="text-neutral-600 text-sm">
          © {new Date().getFullYear()} {locale.personal.firstName}{" "}
          {locale.personal.lastName} — {locale.contact.address.city}
        </p>
        <a
          href="/cv"
          className="text-sm text-neutral-500 hover:text-[#8FAF83] transition-colors duration-200"
        >
          {locale.ui.footer.viewCv}
        </a>
      </div>
    </footer>
  );
}

function Portfolio() {
  const { lang } = Route.useSearch();
  const locale = lang === "en" ? en : fr;

  return (
    <>
      <style>{`
        html, body { background-color: #0a0a0a; scroll-behavior: smooth; }
      `}</style>
      <div className="bg-neutral-950 text-white min-h-screen">
        <Nav locale={locale} lang={lang} />
        <HeroSection locale={locale} />
        <ExperienceSection locale={locale} />
        <EducationSection locale={locale} />
        <SkillsSection locale={locale} />
        <ContactSection locale={locale} />
        <Footer locale={locale} />
      </div>
    </>
  );
}

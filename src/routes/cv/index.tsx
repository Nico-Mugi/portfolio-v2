import {
  DownloadIcon,
  MailIcon,
  MapPinIcon,
  PhoneIncomingIcon,
  PrinterIcon,
} from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { fr, en, type ResumeLocale } from "~/config/data";
import { Logo } from "~/components/logo";

export const Route = createFileRoute("/cv/")({
  validateSearch: (search: Record<string, unknown>) => ({
    lang: (search.lang === "en" ? "en" : "fr") as "fr" | "en",
  }),
  head: () => ({
    meta: [{ title: "Nicolas Thouvenin - CV" }],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700;800&family=Lato:wght@300;400;700&display=swap",
      },
    ],
  }),
  component: NicolasThouveninCV,
});

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle = ({ children }: SectionTitleProps) => (
  <div className="flex flex-row gap-2 items-center">
    <h2 className="font-[Raleway,sans-serif] text-[13px] font-bold tracking-[0.18em] text-gray-700 uppercase whitespace-nowrap">
      {children}
    </h2>
    <div className="w-full h-0.5 bg-[#8FAF83]" />
  </div>
);

interface SideLabelProps {
  children: React.ReactNode;
}

const SideLabel = ({ children }: SideLabelProps) => (
  <h3 className="font-[Raleway,sans-serif] text-[11px] font-bold tracking-[0.16em] uppercase text-white/75 mb-2">
    {children}
  </h3>
);

interface ContactItemProps {
  icon: React.ReactNode;
  text: string;
  link?: string;
}

const ContactItem = ({ icon, text, link }: ContactItemProps) => {
  const content = (
    <div className="flex items-center gap-2.5 mb-2">
      <div className="w-6.5 h-6.5 rounded-full bg-white/18 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <span className="font-[Lato,sans-serif] text-[12px] text-white/90 leading-snug">
        {text}
      </span>
    </div>
  );
  if (link) {
    return (
      <a href={link} className="hover:underline">
        {content}
      </a>
    );
  }
  return content;
};

interface SkillItemProps {
  label: string;
}

const SkillItem = ({ label }: SkillItemProps) => (
  <div className="font-[Lato,sans-serif] text-[12px] text-white/90 pb-1 border-b border-white/20 mb-1.5">
    {label}
  </div>
);

interface LangItemProps {
  lang: string;
  level: string;
}

const LangItem = ({ lang, level }: LangItemProps) => (
  <div className="flex items-center justify-between mb-2">
    <span className="font-[Lato,sans-serif] text-[12.5px] font-bold text-white">
      {lang}
    </span>
    <span className="font-[Lato,sans-serif] text-[11px] bg-white/25 text-white rounded-full px-2.5 py-0.5 tracking-wide">
      {level}
    </span>
  </div>
);

interface ExperienceEntryProps {
  title?: string;
  company: string;
  period: string;
  bullets?: string[];
  children?: React.ReactNode;
}

const ExperienceEntry = ({
  title,
  company,
  period,
  bullets,
  children,
}: ExperienceEntryProps) => (
  <div>
    <div className="flex justify-between items-start gap-3">
      <div>
        <p className="font-[Raleway,sans-serif] font-bold text-[13.5px] text-gray-900 m-0">
          {title ? title : company}
        </p>
        {!!title && (
          <p className="font-[Lato,sans-serif] text-[12px] text-[#5F7A56] italic mt-0.5 mb-0">
            {company}
          </p>
        )}
      </div>
      <span className="font-[Lato,sans-serif] text-[11px] text-gray-400 whitespace-nowrap italic text-right shrink-0 mt-0.5">
        {period}
      </span>
    </div>
    {bullets && bullets.length > 0 && (
      <ul className="pl-4 space-y-1 list-disc">
        {bullets.map((b, i) => (
          <li
            key={i}
            className="font-[Lato,sans-serif] text-[12.5px] text-gray-600 leading-[1.55]"
          >
            {b}
          </li>
        ))}
      </ul>
    )}
    {children}
  </div>
);

interface EduEntryProps {
  degree: string;
  school: string;
  period: string;
}

const EduEntry = ({ degree, school, period }: EduEntryProps) => (
  <div className="flex justify-between items-start mb-3.5 gap-3">
    <div>
      <p className="font-[Raleway,sans-serif] font-bold text-[13px] text-gray-900 m-0">
        {degree}
      </p>
      <p className="font-[Lato,sans-serif] text-[12px] text-gray-500 mt-0.5 mb-0">
        {school}
      </p>
    </div>
    <span className="font-[Lato,sans-serif] text-[11px] text-gray-400 italic whitespace-nowrap shrink-0">
      {period}
    </span>
  </div>
);

interface SideSectionProps {
  title: string;
  items: React.ReactNode[];
}

const SideSection = ({ title, items }: SideSectionProps) => (
  <div>
    <SideLabel>{title}</SideLabel>
    {items}
  </div>
);

function Nav({ locale, lang }: { locale: ResumeLocale; lang: "fr" | "en" }) {
  return (
    <div className="relative h-full max-h-screen max-w-screen w-full print:hidden z-50">
      <header className="fixed top-0 inset-x-0 bg-neutral-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            search={({ lang }) => ({ lang: lang === "en" ? "fr" : "en" })}
            className="h-full w-24 flex items-center"
          >
            <Logo />
          </Link>
          <div className="flex items-center gap-2">
            <Link
              to="/cv"
              search={({ lang }) => ({ lang: lang === "en" ? "fr" : "en" })}
              aria-label="Switch language"
            >
              <button
                className="text-sm font-medium px-3 py-1.5 rounded-lg border border-neutral-700 text-neutral-400 hover:border-[#8FAF83] hover:text-white transition-all duration-200"
                aria-label="Switch language"
              >
                {lang === "en" ? "FR" : "EN"}
              </button>
            </Link>
            <Link
              to="/"
              search={({ lang }) => ({ lang: lang === "en" ? "fr" : "en" })}
              className="text-sm font-medium px-4 py-1.5 rounded-lg border border-neutral-700 text-neutral-300 hover:border-[#8FAF83] hover:text-white transition-all duration-200"
            >
              {locale.ui.nav.viewPortfolio}
            </Link>
          </div>
        </div>
      </header>
      <aside className="max-w-screen fixed bottom-4 right-4">
        <nav className="flex flex-col items-center gap-2">
          <a
            onClick={() => window.print()}
            className="text-neutral-300 cursor-pointer rounded-full bg-foreground p-6 hover:text-neutral-400 transition-colors duration-200"
          >
            <PrinterIcon size={20} />
          </a>
          <a
            download={`Nicolas_Thouvenin_${lang === "en" ? "Resume" : "CV"}.pdf`}
            href={`/files/Nicolas_Thouvenin_${lang === "en" ? "Resume" : "CV"}.pdf`}
            className="text-neutral-300 rounded-full bg-foreground p-6 hover:text-neutral-400 transition-colors duration-200"
          >
            <DownloadIcon size={20} />
          </a>
        </nav>
      </aside>
    </div>
  );
}

function NicolasThouveninCV() {
  const { lang } = Route.useSearch();
  const locale: ResumeLocale = lang === "en" ? en : fr;

  return (
    <div
      className="w-fit min-w-screen py-24 bg-neutral-900 print:py-0 print:h-fit relative"
      style={{ printColorAdjust: "exact" }}
    >
      <Nav locale={locale} lang={lang} />
      <div className="aspect-210/297 w-[210mm] mx-auto overflow-hidden bg-[#8FAF83] flex flex-row">
        <div className="flex flex-col gap-2">
          <div className="w-35 h-35 rounded-full border-3 border-white overflow-hidden shadow-xs mx-auto mt-2">
            <img
              src={locale.personal.photo}
              width={140}
              height={140}
              alt={`${locale.personal.firstName} ${locale.personal.lastName}`}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-55 pt-5 bg-[#8FAF83] px-2 flex flex-col grow justify-between">
            <SideSection
              title={locale.ui.cv.sidebarContact}
              items={[
                <ContactItem
                  key="phone"
                  icon={<PhoneIncomingIcon size={13} color="white" />}
                  text={locale.contact.phone.display}
                  link={locale.contact.phone.href}
                />,
                <ContactItem
                  key="email"
                  icon={<MailIcon size={13} color="white" />}
                  text={locale.contact.email.display}
                  link={locale.contact.email.href}
                />,
                <ContactItem
                  key="location"
                  icon={<MapPinIcon size={13} color="white" />}
                  text={locale.contact.address.full}
                />,
              ]}
            />

            <SideSection
              title={locale.ui.cv.sidebarLanguages}
              items={locale.languages.map((l) => (
                <LangItem key={l.lang} lang={l.lang} level={l.level} />
              ))}
            />

            <SideSection
              title={locale.ui.cv.sidebarSkills}
              items={locale.cvSkillLines.map((item) => (
                <SkillItem key={item} label={item} />
              ))}
            />

            <SideSection
              title={locale.ui.cv.sidebarPm}
              items={locale.projectManagementSkills.map((item) => (
                <SkillItem key={item} label={item} />
              ))}
            />

            <SideSection
              title={locale.ui.cv.sidebarInterests}
              items={locale.interests.map((item) => (
                <SkillItem key={item} label={item} />
              ))}
            />
          </div>
        </div>

        <div className="flex flex-col gap-0">
          <div className="h-full flex flex-col justify-center py-2 px-4">
            <h1 className="font-[Raleway,sans-serif] font-extrabold text-[32px] text-white uppercase tracking-[0.04em] m-0 leading-none">
              {locale.personal.firstName} {locale.personal.lastName}
            </h1>
            <p className="font-[Raleway,sans-serif] text-[14px] text-white/90 uppercase tracking-[0.14em] mt-1 mb-0">
              {locale.personal.title}
            </p>
          </div>
          <div className="px-5 pt-5 bg-white flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <SectionTitle>{locale.ui.cv.sectionExperience}</SectionTitle>
              {locale.experience.map((exp) => (
                <ExperienceEntry
                  key={exp.company}
                  title={exp.title}
                  company={exp.company}
                  period={exp.period}
                  bullets={exp.bullets}
                >
                  {exp.subEntries && (
                    <div className="*:pl-2 *:border-l-[#8FAF83] *:border-l-2 mt-1 gap-2 flex flex-col">
                      {exp.subEntries.map((sub) => (
                        <ExperienceEntry
                          key={sub.company}
                          company={sub.company}
                          period={sub.period}
                          bullets={sub.bullets}
                        />
                      ))}
                    </div>
                  )}
                </ExperienceEntry>
              ))}
            </div>
            <div>
              <SectionTitle>{locale.ui.cv.sectionEducation}</SectionTitle>
              {locale.education.map((edu) => (
                <EduEntry
                  key={edu.school}
                  degree={edu.degree}
                  school={edu.school}
                  period={edu.period}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

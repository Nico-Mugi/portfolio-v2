import { DownloadIcon, PrinterIcon } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { fr, en } from "~/config/data";
import { Logo } from "~/components/logo";
import { getLocale, setLocale } from "~/paraglide/runtime";
import { m } from "~/paraglide/messages";
import { contactItems } from "~/config/contactItems";
import { EduEntry } from "~/components/cv/edu-entry";
import { SectionTitle } from "~/components/cv/section-title";
import { SideSection } from "~/components/cv/side-section";
import { ExperienceEntry } from "~/components/cv/experience-entry";
import { ContactItem } from "~/components/cv/contact-item";
import { LangItem } from "~/components/cv/lang-item";
import { SkillItem } from "~/components/cv/skill-item";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "Nicolas Thouvenin - CV" },
      {
        name: "description",
        content:
          "CV de Nicolas Thouvenin, développeur web spécialisé en React et Node.js. Découvrez mon expérience, mes compétences et comment me contacter.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700;800&family=Lato:wght@300;400;700&display=swap",
      },
    ],
  }),
  component: NicolasThouveninCV,
});

function Nav() {
  return (
    <div className="fixed top-0 inset-x-0 h-screen max-h-screen max-w-full w-full print:hidden z-50">
      <header className="bg-neutral-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="h-full w-24 flex items-center">
            <Logo />
          </Link>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLocale(getLocale() === "en" ? "fr" : "en")}
              aria-label="Switch language"
              className="text-sm font-medium px-3 py-1.5 rounded-lg border border-neutral-700 text-neutral-400 hover:border-[#8FAF83] hover:text-white transition-all duration-200"
            >
              {getLocale() === "en" ? "FR" : "EN"}
            </button>
            <Link
              to="/"
              className="text-sm font-medium px-4 py-1.5 rounded-lg border border-neutral-700 text-neutral-300 hover:border-[#8FAF83] hover:text-white transition-all duration-200"
            >
              {m.nav_view_portfolio()}
            </Link>
          </div>
        </div>
      </header>
      <aside className="h-full w-full relative">
        <nav className="fixed bottom-4 left-4 flex flex-col items-center gap-2">
          <a
            onClick={() => window.print()}
            className="text-neutral-300 cursor-pointer rounded-full bg-foreground p-6 hover:text-neutral-400 transition-colors duration-200"
          >
            <PrinterIcon size={20} />
          </a>
          <a
            download={`Nicolas_Thouvenin_${getLocale() === "en" ? "Resume" : "CV"}.pdf`}
            href={`/files/Nicolas_Thouvenin_${getLocale() === "en" ? "Resume" : "CV"}.pdf`}
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
  const locale = getLocale() === "en" ? en : fr;

  const languages = [
    { lang: m.language_1_name(), level: m.language_1_level() },
    { lang: m.language_2_name(), level: m.language_2_level() },
  ];

  const cvSkillLines = [
    m.cv_skill_web(),
    m.cv_skill_styling(),
    m.cv_skill_software(),
    m.cv_skill_dbms(),
    m.cv_skill_deployment(),
    m.cv_skill_scraping(),
    m.cv_skill_automation(),
    m.cv_skill_tools(),
  ];

  const projectManagementSkills = [
    m.pm_skill_agile(),
    m.pm_skill_project_tools(),
    m.pm_skill_architecture(),
    m.pm_skill_security(),
    m.pm_skill_budget(),
    m.pm_skill_risk(),
    m.pm_skill_planning(),
    m.pm_skill_deadlines(),
  ];

  const interests = [
    m.interest_tech(),
    m.interest_travel(),
    m.interest_sports(),
  ];

  return (
    <div
      className="min-w-fit py-24 bg-neutral-900 print:py-0 print:h-fit relative"
      style={{ printColorAdjust: "exact" }}
    >
      <Nav />
      <div className="aspect-210/297 w-[210mm] mx-auto bg-[#8FAF83] flex flex-row">
        <div className="flex flex-col gap-2">
          <div className="w-35 h-35 rounded-full border-3 border-white overflow-hidden shadow-xs mx-auto mt-2">
            <img
              src="/Thouvenin Nicolas.png"
              width={140}
              height={140}
              alt="Nicolas Thouvenin"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-55 pt-5 bg-[#8FAF83] px-2 flex flex-col grow justify-between">
            <SideSection
              title={m.cv_sidebar_contact()}
              items={contactItems.map((item) => (
                <ContactItem
                  key={item.label}
                  icon={<item.icon size={13} color="white" />}
                  text={item.value}
                  href={item.href}
                />
              ))}
            />

            <SideSection
              title={m.cv_sidebar_languages()}
              items={languages.map((l) => (
                <LangItem key={l.lang} lang={l.lang} level={l.level} />
              ))}
            />

            <SideSection
              title={m.cv_sidebar_skills()}
              items={cvSkillLines.map((item) => (
                <SkillItem key={item} label={item} />
              ))}
            />

            <SideSection
              title={m.cv_sidebar_pm()}
              items={projectManagementSkills.map((item) => (
                <SkillItem key={item} label={item} />
              ))}
            />

            <SideSection
              title={m.cv_sidebar_interests()}
              items={interests.map((item) => (
                <SkillItem key={item} label={item} />
              ))}
            />
          </div>
        </div>

        <div className="flex flex-col gap-0">
          <div className="h-full flex flex-col justify-center py-2 px-4">
            <h1 className="font-[Raleway,sans-serif] font-extrabold text-[32px] text-white uppercase tracking-[0.04em] m-0 leading-none">
              Nicolas Thouvenin
            </h1>
            <p className="font-[Raleway,sans-serif] text-[14px] text-white/90 uppercase tracking-[0.14em] mt-1 mb-0">
              {m.personal_title()}
            </p>
          </div>
          <div className="px-5 pt-5 bg-white flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <SectionTitle>{m.cv_section_experience()}</SectionTitle>
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
              <SectionTitle>{m.cv_section_education()}</SectionTitle>
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

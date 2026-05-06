import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "~/components/footer";
import { Nav } from "~/components/nav";
import { ContactSection } from "~/components/portfolio/contact";
import { EducationSection } from "~/components/portfolio/education";
import { ExperienceSection } from "~/components/portfolio/experience";
import { HeroSection } from "~/components/portfolio/hero";
import { SkillsSection } from "~/components/portfolio/skills";
import { fr, en } from "~/config/data";
import { isLocale } from "~/helpers/isLocale";

export const Route = createFileRoute("/{-$locale}/")({
  beforeLoad: ({ params }) => {
    const locale = params.locale || "fr";
    const _isLocale = isLocale(locale);

    if (params.locale && !_isLocale) {
      throw new Error("Invalid locale");
    }

    return { locale };
  },
  head: () => ({
    meta: [
      { title: "Nicolas Thouvenin - Portfolio" },
      {
        name: "description",
        content:
          "Portfolio de Nicolas Thouvenin, développeur web spécialisé en React et Node.js. Découvrez mon expérience, mes compétences et comment me contacter.",
      },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  const { locale: paramLocale } = Route.useParams();
  const locale = paramLocale === "en" ? en : fr;
  const lang: "fr" | "en" = paramLocale === "en" ? "en" : "fr";

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

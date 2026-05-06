import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "~/components/footer";
import { Nav } from "~/components/nav";
import { ContactSection } from "~/components/portfolio/contact";
import { EducationSection } from "~/components/portfolio/education";
import { ExperienceSection } from "~/components/portfolio/experience";
import { HeroSection } from "~/components/portfolio/hero";
import { SkillsSection } from "~/components/portfolio/skills";
import { fr, en } from "~/config/data";
import { getLocale } from "~/paraglide/runtime";

export const Route = createFileRoute("/")({
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
  const locale = getLocale() === "en" ? en : fr;

  return (
    <>
      <style>{`
        html, body { background-color: #0a0a0a; scroll-behavior: smooth; }
      `}</style>
      <div className="bg-neutral-950 text-white min-h-screen">
        <Nav />
        <HeroSection />
        <ExperienceSection locale={locale} />
        <EducationSection locale={locale} />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}

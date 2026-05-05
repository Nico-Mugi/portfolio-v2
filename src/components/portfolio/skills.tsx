import { ResumeLocale } from "~/config/data";
import { SectionHeading } from "./section-heading";

export function SkillsSection({ locale }: { locale: ResumeLocale }) {
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

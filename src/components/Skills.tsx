import { motion, useReducedMotion } from "framer-motion";
import { skillGroups } from "../data/portfolio";
import { SectionTitle } from "./SectionTitle";
import { SkillChip } from "./SkillChip";

export function Skills(): JSX.Element {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-shell section-spacing flex flex-col gap-8" id="skills">
      <SectionTitle eyebrow="Skill" title="Professional Skills" />

      <motion.article
        className="content-shell card gradient-border-card p-6 sm:p-8"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.24, ease: "easeOut" }}
      >
        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <section className="inner-white-panel p-5" key={group.title}>
                <div className="mb-4 flex items-center gap-3">
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-white/70 bg-white/45 text-green backdrop-blur-sm">
                    <Icon aria-hidden="true" size={18} />
                  </span>
                  <h3 className="text-base font-bold text-navy">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <SkillChip label={skill} key={`${group.title}-${skill}`} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </motion.article>
    </section>
  );
}

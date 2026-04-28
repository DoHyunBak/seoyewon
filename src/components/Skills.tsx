import { motion, useReducedMotion } from "framer-motion";
import { skillGroups } from "../data/portfolio";
import { SectionTitle } from "./SectionTitle";
import { SkillChip } from "./SkillChip";

export function Skills(): JSX.Element {
  const shouldReduceMotion = useReducedMotion();

  const allSkills = skillGroups.flatMap((group) => group.skills);

  return (
    <section className="section-shell section-spacing" id="skills">
      <SectionTitle
        eyebrow="Skills & Certifications"
        title="Professional Skills"
      />

      <motion.article
        className="card gradient-border-card p-6 sm:p-8"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.24, ease: "easeOut" }}
      >
        <div className="flex flex-wrap gap-2">
          {allSkills.map((skill) => (
            <SkillChip label={skill} key={skill} />
          ))}
        </div>
      </motion.article>
    </section>
  );
}

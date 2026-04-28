import { motion, useReducedMotion } from "framer-motion";
import { skillGroups } from "../data/portfolio";
import { updateSpotlightPosition } from "../utils/interaction";
import { SectionTitle } from "./SectionTitle";
import { SkillChip } from "./SkillChip";

export function Skills(): JSX.Element {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-shell section-spacing" id="skills">
      <SectionTitle
        eyebrow="Skills"
        title="Skill Set at a Glance"
        description="Design Industry, Financial, Data & Report, Tools 카테고리로 나누어 채용 담당자가 빠르게 스캔할 수 있게 구성했습니다."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;

          return (
            <motion.article
              className="card spotlight-card p-6"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.24, delay: shouldReduceMotion ? 0 : index * 0.05, ease: "easeOut" }}
              onPointerMove={updateSpotlightPosition}
              key={group.title}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="inline-flex size-11 items-center justify-center rounded-full bg-[#F8F4EE] text-green">
                  <Icon aria-hidden="true" size={20} />
                </span>
                <h3 className="text-xl font-bold text-navy">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <SkillChip label={skill} key={skill} />
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

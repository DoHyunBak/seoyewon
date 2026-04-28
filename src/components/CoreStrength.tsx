import { motion, useReducedMotion } from "framer-motion";
import { coreStrengths } from "../data/portfolio";
import { updateSpotlightPosition } from "../utils/interaction";
import { SectionTitle } from "./SectionTitle";

export function CoreStrength(): JSX.Element {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-shell section-spacing" id="core-strength">
      <SectionTitle
        eyebrow="Core Strength"
        title="Three Strengths in Progress"
        description="전공 기반의 디자인 이해를 바탕으로, 비용·증빙·자료 정리까지 차분하게 확장해가고 있는 역량입니다."
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {coreStrengths.map((strength, index) => {
          const Icon = strength.icon;

          return (
            <motion.article
              className="card spotlight-card p-6"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.24, delay: shouldReduceMotion ? 0 : index * 0.06, ease: "easeOut" }}
              onPointerMove={updateSpotlightPosition}
              key={strength.title}
            >
              <span className="mb-5 inline-flex size-12 items-center justify-center rounded-full bg-[#F8F4EE] text-green">
                <Icon aria-hidden="true" size={22} />
              </span>
              <h3 className="text-xl font-bold text-navy">{strength.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{strength.description}</p>
              <ul className="mt-5 space-y-3">
                {strength.points.map((point) => (
                  <li className="flex gap-3 text-sm leading-6 text-text" key={point}>
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-green" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

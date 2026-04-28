import { motion, useReducedMotion } from "framer-motion";
import { profileFacts, profileHighlights } from "../data/portfolio";
import { SectionTitle } from "./SectionTitle";

export function Profile(): JSX.Element {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-shell section-spacing" id="profile">
      <SectionTitle
        eyebrow="Profile"
        title="Design + Financial 직무 방향성"
        description="디자인 프로젝트의 비용 구조와 정산 흐름을 이해하고, 숫자와 증빙을 보기 좋게 정리하는 지원자 이미지를 전달합니다."
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <motion.article
          className="card p-6 sm:p-8"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.26, ease: "easeOut" }}
        >
          <h3 className="text-2xl font-bold text-navy">지원자 소개</h3>
          <div className="mt-5 space-y-4 text-base leading-8 text-muted">
            {profileHighlights.map((highlight) => (
              <p key={highlight}>{highlight}</p>
            ))}
          </div>
        </motion.article>

        <motion.aside
          className="card p-6 sm:p-8"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.26, delay: 0.06, ease: "easeOut" }}
        >
          <h3 className="text-2xl font-bold text-navy">Contact Summary</h3>
          <dl className="mt-5 divide-y divide-border">
            {profileFacts.map((fact) => (
              <div className="grid gap-2 py-4 sm:grid-cols-[120px_1fr]" key={fact.label}>
                <dt className="text-sm font-bold text-muted">{fact.label}</dt>
                <dd className="break-words text-sm font-semibold leading-6 text-navy">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </motion.aside>
      </div>
    </section>
  );
}

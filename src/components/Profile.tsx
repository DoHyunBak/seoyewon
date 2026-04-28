import { motion, useReducedMotion } from "framer-motion";
import { profileFacts } from "../data/portfolio";
import { SectionTitle } from "./SectionTitle";

export function Profile(): JSX.Element {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-shell section-spacing flex flex-col gap-8" id="profile">
      <SectionTitle eyebrow="Profile" title="Introduction" />

      <motion.article
        className="content-shell card gradient-border-card p-6 sm:p-8"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.26, ease: "easeOut" }}
      >
        <dl className="grid gap-3 sm:grid-cols-2">
          {profileFacts.map((fact) => (
            <div
              className="inner-white-panel px-4 py-4 sm:px-5"
              key={fact.label}
            >
              <dt className="text-xs font-bold uppercase tracking-[0.12em] text-green">{fact.label}</dt>
              <dd className="mt-2 break-words text-base font-bold leading-7 text-navy">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </motion.article>
    </section>
  );
}

import { motion, useReducedMotion } from "framer-motion";
import { profileFacts } from "../data/portfolio";
import { SectionTitle } from "./SectionTitle";

export function Profile(): JSX.Element {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-shell section-spacing" id="profile">
      <SectionTitle
        eyebrow="Profile"
        title="Introduction"
      />

      <motion.article
        className="card gradient-border-card max-w-4xl p-6 sm:p-8"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.26, ease: "easeOut" }}
      >
        <dl className="grid gap-3 sm:grid-cols-2">
          {profileFacts.map((fact) => (
            <div className="grid gap-1" key={fact.label}>
              <dt className="text-xs font-bold uppercase tracking-[0.12em] text-muted">{fact.label}</dt>
              <dd className="break-words text-sm font-semibold leading-6 text-navy">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </motion.article>
    </section>
  );
}

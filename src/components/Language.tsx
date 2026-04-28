import { motion, useReducedMotion } from "framer-motion";
import { languageItems } from "../data/languages";
import { SectionTitle } from "./SectionTitle";

export function Language(): JSX.Element {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-shell section-spacing flex flex-col gap-8" id="language">
      <SectionTitle eyebrow="Language" title="Language" titleClassName="text-[2rem] font-bold leading-tight text-navy md:text-[2.5rem]" />

      <div className="content-shell grid gap-4 md:grid-cols-3">
        {languageItems.map((item, index) => (
          <motion.article
            aria-label={`${item.name} ${item.level}`}
            className="card gradient-border-card flex min-h-[150px] flex-col items-center justify-center p-5 text-center sm:p-6"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            key={item.id}
            transition={{ duration: 0.24, delay: shouldReduceMotion ? 0 : index * 0.06, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.35 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          >
            <div className="inner-white-panel w-full px-4 py-5">
              <h3 className="text-2xl font-bold text-navy">{item.name}</h3>
              <p className="mt-2 text-3xl font-bold text-green">{item.level}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

import { motion, useReducedMotion } from "framer-motion";
import { Languages } from "lucide-react";
import { languageItems } from "../data/languages";
import { SectionTitle } from "./SectionTitle";

export function Language(): JSX.Element {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-shell section-spacing" id="language">
      <SectionTitle
        eyebrow="Language"
        title="Language"
      />

      <div className="grid gap-4 md:grid-cols-3">
        {languageItems.map((item, index) => (
          <motion.article
            aria-label={`${item.name} ${item.level}`}
            className="card gradient-border-card flex min-h-[150px] flex-col justify-between p-6"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            key={item.id}
            transition={{ duration: 0.24, delay: shouldReduceMotion ? 0 : index * 0.06, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.35 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          >
            <div className="flex items-center justify-between gap-4">
              <span className="inline-flex size-12 items-center justify-center rounded-full bg-[#F8F4EE] text-green">
                <Languages aria-hidden="true" size={22} />
              </span>
              <span className="rounded-full border border-border bg-white px-3 py-1 text-xs font-bold text-muted">
                Language
              </span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-navy">{item.name}</h3>
              <p className="mt-2 text-3xl font-bold text-green">{item.level}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

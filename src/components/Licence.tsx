import { motion, useReducedMotion } from "framer-motion";
import { Palette, ReceiptText } from "lucide-react";
import { licenceGroups } from "../data/portfolio";
import { updateSpotlightPosition } from "../utils/interaction";
import { SectionTitle } from "./SectionTitle";

const icons = [Palette, ReceiptText];

export function Licence(): JSX.Element {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-shell section-spacing" id="licence">
      <SectionTitle
        eyebrow="Licence"
        title="Licence and Certificate Preparation"
        description="Design과 Accounting 관련 자격증을 명단 중심으로 정리했습니다."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {licenceGroups.map((group, index) => {
          const Icon = icons[index] ?? Palette;

          return (
            <motion.article
              className={`card spotlight-card p-6 ${index === 0 ? "gradient-border-card" : ""}`}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              key={group.title}
              transition={{ duration: 0.24, delay: shouldReduceMotion ? 0 : index * 0.06, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.35 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              onPointerMove={updateSpotlightPosition}
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="inline-flex size-12 items-center justify-center rounded-full bg-[#F8F4EE] text-green">
                  <Icon aria-hidden="true" size={22} />
                </span>
                <h3 className="text-2xl font-bold text-navy">{group.title}</h3>
              </div>
              <ul className="grid gap-3">
                {group.items.map((item) => (
                  <li className="rounded-md border border-border bg-[#FBFAF8] px-4 py-3 text-sm font-semibold text-navy" key={item}>
                    {item}
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

import { motion, useReducedMotion } from "framer-motion";
import { BadgeCheck, FileCheck2, ReceiptText } from "lucide-react";
import { licenceItems } from "../data/portfolio";
import { updateSpotlightPosition } from "../utils/interaction";
import { SectionTitle } from "./SectionTitle";

const icons = [BadgeCheck, ReceiptText, FileCheck2];

export function Licence(): JSX.Element {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-shell section-spacing" id="licence">
      <SectionTitle
        eyebrow="Licence"
        title="Licence and Certificate Preparation"
        description="실제 경력처럼 보이기보다, 디자인 전공자가 비용·증빙·라이선스 항목을 어떻게 이해하고 있는지 차분하게 정리합니다."
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {licenceItems.map((item, index) => {
          const Icon = icons[index] ?? BadgeCheck;

          return (
            <motion.article
              className={`card spotlight-card p-6 ${index === 0 ? "gradient-border-card" : ""}`}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              key={item.title}
              transition={{ duration: 0.24, delay: shouldReduceMotion ? 0 : index * 0.06, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.35 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              onPointerMove={updateSpotlightPosition}
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="inline-flex size-12 items-center justify-center rounded-full bg-[#F8F4EE] text-green">
                  <Icon aria-hidden="true" size={22} />
                </span>
                <span className="status-badge">{item.status}</span>
              </div>
              <h3 className="text-xl font-bold text-navy">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
              <ul className="mt-5 space-y-3">
                {item.points.map((point) => (
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

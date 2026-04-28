import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { certificateItems } from "../data/certificates";
import { SectionTitle } from "./SectionTitle";

export function Certificates(): JSX.Element {
  const [openId, setOpenId] = useState<string | null>(certificateItems[0]?.id ?? null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-shell section-spacing" id="certificates">
      <SectionTitle
        eyebrow="Certificates"
        title="Certificate and Learning Status"
        description="취득 예정, 학습 중, 활용 가능 상태를 구분해 허위 이력처럼 보이지 않도록 구성했습니다."
      />

      <div className="grid gap-4">
        {certificateItems.map((item) => {
          const isOpen = openId === item.id;

          return (
            <article className="card overflow-hidden" key={item.id}>
              <button
                aria-controls={`${item.id}-panel`}
                aria-expanded={isOpen}
                className="flex min-h-[72px] w-full items-center justify-between gap-4 px-5 py-4 text-left outline-none focus-visible:ring-4 focus-visible:ring-pink/40 sm:px-6"
                type="button"
                onClick={() => setOpenId(isOpen ? null : item.id)}
              >
                <span>
                  <span className="block text-lg font-bold text-navy">{item.title}</span>
                  <span className="mt-1 block text-sm text-muted">{item.description}</span>
                </span>
                <span className="flex shrink-0 items-center gap-3">
                  <span className="status-badge">{item.status}</span>
                  <ChevronDown
                    aria-hidden="true"
                    className={`text-green transition-transform ${isOpen ? "rotate-180" : ""}`}
                    size={20}
                  />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    animate={shouldReduceMotion ? undefined : { height: "auto", opacity: 1 }}
                    className="border-t border-border px-5 sm:px-6"
                    exit={shouldReduceMotion ? undefined : { height: 0, opacity: 0 }}
                    id={`${item.id}-panel`}
                    initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                  >
                    <ul className="space-y-3 py-5">
                      {item.details.map((detail) => (
                        <li className="flex gap-3 text-sm leading-6 text-muted" key={detail}>
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-green" aria-hidden="true" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </article>
          );
        })}
      </div>
    </section>
  );
}

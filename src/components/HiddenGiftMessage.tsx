import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Heart, X } from "lucide-react";

export function HiddenGiftMessage(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  return (
    <section className="section-shell pb-10 text-center" id="gift-message">
      <button className="btn btn-soft mx-auto" type="button" onClick={() => setIsOpen(true)}>
        <Heart aria-hidden="true" size={17} />
        <span>작은 메시지</span>
      </button>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            aria-labelledby="gift-message-title"
            aria-modal="true"
            className="fixed inset-0 z-50 grid place-items-center bg-navy/35 px-5"
            role="dialog"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            <motion.div
              className="relative w-full max-w-lg rounded-lg border border-border bg-white p-6 text-left shadow-card sm:p-8"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <button
                aria-label="메시지 닫기"
                className="absolute right-4 top-4 inline-flex size-10 items-center justify-center rounded-full border border-border text-muted outline-none transition hover:text-navy focus-visible:ring-4 focus-visible:ring-pink/40"
                type="button"
                onClick={() => setIsOpen(false)}
              >
                <X aria-hidden="true" size={18} />
              </button>
              <p className="mb-3 inline-flex rounded-full bg-[#FFF4F7] px-3 py-1 text-xs font-bold text-[#B76F86]">
                Hidden Gift Message
              </p>
              <h2 className="pr-10 text-2xl font-bold text-navy" id="gift-message-title">
                다음 시작을 위한 작은 응원
              </h2>
              <p className="mt-5 text-base leading-8 text-muted">
                이 포트폴리오가 너의 다음 시작에 작은 힘이 되었으면 좋겠어. 너의 꼼꼼함과 꾸준함이 분명 좋은 결과로
                이어질 거라고 믿어.
              </p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}

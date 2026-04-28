import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type ToastProps = {
  message: string;
};

export function Toast({ message }: ToastProps): JSX.Element {
  const shouldReduceMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {message ? (
        <motion.div
          aria-live="polite"
          className="fixed bottom-5 left-1/2 z-50 w-[calc(100%-40px)] max-w-sm -translate-x-1/2 rounded-md border border-border bg-navy px-5 py-3 text-center text-sm font-semibold text-white shadow-card"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
        >
          {message}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

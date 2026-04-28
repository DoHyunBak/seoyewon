import { motion, useReducedMotion } from "framer-motion";
import type { ProcessStep } from "../data/projects";

type ProcessTimelineProps = {
  steps: ProcessStep[];
};

export function ProcessTimeline({ steps }: ProcessTimelineProps): JSX.Element {
  const shouldReduceMotion = useReducedMotion();

  return (
    <ol className="mt-6 grid gap-4" aria-label="외주 디자이너 정산 프로세스">
      {steps.map((step, index) => (
        <motion.li
          className="card gradient-border-card relative p-4 pl-14"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.22, delay: shouldReduceMotion ? 0 : index * 0.1, ease: "easeOut" }}
          key={step.title}
        >
          <span className="absolute left-4 top-4 inline-flex size-8 items-center justify-center rounded-full bg-green text-sm font-bold text-white">
            {index + 1}
          </span>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h4 className="text-base font-bold text-navy">{step.title}</h4>
            </div>
            <span className="status-badge self-start">{step.status}</span>
          </div>
        </motion.li>
      ))}
    </ol>
  );
}

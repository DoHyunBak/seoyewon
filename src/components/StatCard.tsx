import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { formatCurrency, formatNumber, formatPercent } from "../utils/format";

type StatCardProps = {
  label: string;
  value: number;
  variant?: "currency" | "number" | "percent";
  helper: string;
  icon?: LucideIcon;
  tone?: "navy" | "green" | "pink";
};

function formatStat(value: number, variant: NonNullable<StatCardProps["variant"]>): string {
  if (variant === "currency") {
    return formatCurrency(value);
  }

  if (variant === "percent") {
    return formatPercent(value);
  }

  return formatNumber(value);
}

export function StatCard({
  label,
  value,
  variant = "number",
  helper,
  icon: Icon,
  tone = "navy"
}: StatCardProps): JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(shouldReduceMotion ? value : 0);
  const toneClass = tone === "green" ? "text-green" : "text-navy";

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayValue(value);
      return;
    }

    let frame = 0;
    const start = performance.now();
    const duration = 850;

    const tick = (now: number): void => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(value * eased);

      if (progress < 1) {
        frame = window.requestAnimationFrame(tick);
      }
    };

    frame = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(frame);
  }, [shouldReduceMotion, value]);

  return (
    <motion.article
      className="card p-5"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.24, ease: "easeOut" }}
    >
      <div className="mb-4 flex items-center justify-between gap-4">
        <p className="text-sm font-semibold text-muted">{label}</p>
        {Icon ? (
          <span className="inline-flex size-10 items-center justify-center rounded-full bg-[#F7F3ED] text-green">
            <Icon aria-hidden="true" size={18} />
          </span>
        ) : null}
      </div>
      <p className={`number break-words text-[1.85rem] font-bold leading-none md:text-[2.35rem] ${toneClass}`}>
        {formatStat(displayValue, variant)}
      </p>
      <p className="mt-3 text-sm leading-6 text-muted">{helper}</p>
    </motion.article>
  );
}

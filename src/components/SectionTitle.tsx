import { motion, useReducedMotion } from "framer-motion";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  titleClassName?: string;
};

export function SectionTitle({ eyebrow, title, description, align = "center", titleClassName }: SectionTitleProps): JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const titleClasses =
    titleClassName ?? "text-h2 font-bold leading-tight text-navy md:text-h2-md";

  return (
    <motion.div
      className={align === "center" ? "content-shell text-center" : "content-shell"}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.26, ease: "easeOut" }}
    >
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-green">{eyebrow}</p>
      <h2 className={titleClasses}>{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-muted md:text-lg">{description}</p> : null}
    </motion.div>
  );
}

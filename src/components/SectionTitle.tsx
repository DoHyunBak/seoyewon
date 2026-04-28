import { motion, useReducedMotion } from "framer-motion";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionTitle({ eyebrow, title, description, align = "left" }: SectionTitleProps): JSX.Element {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.26, ease: "easeOut" }}
    >
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-green">{eyebrow}</p>
      <h2 className="text-[2rem] font-bold leading-tight text-navy md:text-[2.5rem]">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-muted md:text-lg">{description}</p> : null}
    </motion.div>
  );
}

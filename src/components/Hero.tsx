import { motion, useReducedMotion } from "framer-motion";
import { heroKeywords, portfolioOwner } from "../data/portfolio";
import { PdfDownloadButton } from "./PdfDownloadButton";

export function Hero(): JSX.Element {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-shell section-spacing hero-surface" id="hero">
      <motion.div
        className="content-shell card gradient-border-card p-8"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <h1 className="masked-text-reveal max-w-4xl text-[2.25rem] font-bold leading-[1.18] text-navy [overflow-wrap:anywhere] sm:text-[3rem] lg:text-[3.5rem]">
          <span className="block">Design Financial Operations Assistant</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted [overflow-wrap:anywhere]">
          <span className="block">{portfolioOwner.role}</span>
          {portfolioOwner.headline ? <span className="block">{portfolioOwner.headline}</span> : null}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {heroKeywords.map((keyword) => (
            <span className="tag" key={keyword}>
              {keyword}
            </span>
          ))}
        </div>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <PdfDownloadButton href={portfolioOwner.pdfUrl} label="PDF Portfolio" />
        </div>
      </motion.div>
    </section>
  );
}

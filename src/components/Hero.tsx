import { ExternalLink, ReceiptText } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { heroKeywords, portfolioOwner } from "../data/portfolio";
import { monthlySummary } from "../data/dashboard";
import { formatCurrency, formatPercent } from "../utils/format";
import { updateSpotlightPosition } from "../utils/interaction";
import { CopyEmailButton } from "./CopyEmailButton";
import { PdfDownloadButton } from "./PdfDownloadButton";

type HeroProps = {
  onEmailCopied: () => void;
};

export function Hero({ onEmailCopied }: HeroProps): JSX.Element {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="section-shell section-spacing hero-surface grid min-h-[calc(100vh-64px)] items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]"
      id="hero"
    >
      <motion.div
        className="min-w-0 max-w-[calc(100vw-40px)] sm:max-w-none"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <p className="mb-4 inline-flex rounded-full border border-border bg-white px-4 py-2 text-sm font-bold text-green">
          Design + Financial Portfolio
        </p>
        <h1 className="masked-text-reveal max-w-4xl text-[2.25rem] font-bold leading-[1.1] text-navy [overflow-wrap:anywhere] sm:text-[3rem] lg:text-[3.5rem]">
          <span className="block">Finance Assistant</span>
          <span className="block">with Design</span>
          <span className="block">Perspective.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted [overflow-wrap:anywhere]">
          <span className="block">{portfolioOwner.name} · {portfolioOwner.role}</span>
          <span className="block">{portfolioOwner.headline}</span>
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
          <a className="btn btn-secondary" href={portfolioOwner.notionUrl} rel="noopener noreferrer" target="_blank">
            <ExternalLink aria-hidden="true" size={18} />
            <span>Open Notion</span>
          </a>
          <CopyEmailButton email={portfolioOwner.email} onCopied={onEmailCopied} variant="soft" />
        </div>
      </motion.div>

      <motion.aside
        aria-label="Financial operations snapshot"
        className="card spotlight-card gradient-border-card relative min-w-0 max-w-[calc(100vw-40px)] overflow-hidden p-5 sm:max-w-none sm:p-7"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.34, delay: 0.08, ease: "easeOut" }}
        onPointerMove={updateSpotlightPosition}
      >
        <div className="absolute right-6 top-6 size-3 rounded-full bg-pink" aria-hidden="true" />
        <div className="mb-7 flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-green">Operations Snapshot</p>
            <h2 className="mt-3 text-2xl font-bold text-navy">Design Finance Summary</h2>
          </div>
          <span className="inline-flex size-12 items-center justify-center rounded-full bg-[#F8F4EE] text-green">
            <ReceiptText aria-hidden="true" size={22} />
          </span>
        </div>

        <dl className="grid gap-4">
          <div className="glass-kpi rounded-md p-4">
            <dt className="text-sm font-semibold text-muted">Total Revenue</dt>
            <dd className="number mt-2 text-3xl font-bold text-navy">{formatCurrency(monthlySummary.revenue)}</dd>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="glass-kpi rounded-md p-4">
              <dt className="text-sm font-semibold text-muted">Net Profit</dt>
              <dd className="number mt-2 text-2xl font-bold text-green">{formatCurrency(monthlySummary.netProfit)}</dd>
            </div>
            <div className="glass-kpi rounded-md p-4">
              <dt className="text-sm font-semibold text-muted">Profit Rate</dt>
              <dd className="number mt-2 text-2xl font-bold text-green">{formatPercent(monthlySummary.profitRate)}</dd>
            </div>
          </div>
        </dl>

        <div className="mt-6 rounded-md border border-border bg-navy p-4 text-white">
          <div className="mb-4 flex items-center justify-between text-sm">
            <span>Evidence Readiness</span>
            <span className="number font-bold">84%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/20">
            <div className="chart-grow h-full w-[84%] rounded-full bg-pink" />
          </div>
          <p className="mt-4 text-sm leading-6 text-white/78">
            매출·비용·증빙·정산 상태를 함께 보여주는 실무형 포트폴리오 구성입니다.
          </p>
        </div>
      </motion.aside>
    </section>
  );
}

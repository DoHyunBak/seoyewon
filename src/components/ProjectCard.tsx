import type { CSSProperties, ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import type { PortfolioProject } from "../data/projects";
import { updateSpotlightPosition } from "../utils/interaction";
import { EvidenceTable } from "./EvidenceTable";
import { ProcessTimeline } from "./ProcessTimeline";

type ProjectCardProps = {
  project: PortfolioProject;
  children?: ReactNode;
  featured?: boolean;
  index?: number;
  onOpen?: () => void;
};

export function ProjectCard({ project, children, featured = false, index = 0, onOpen }: ProjectCardProps): JSX.Element {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      className={`card sticky-stack-card p-5 outline-none transition sm:p-7 ${featured ? "gradient-border-card" : ""} ${onOpen ? "cursor-pointer focus-visible:ring-4 focus-visible:ring-pink/40" : ""}`}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.34, delay: shouldReduceMotion ? 0 : index * 0.06, ease: "easeOut" }}
      onClick={onOpen}
      style={{ "--stack-offset": `${index * 14}px` } as CSSProperties}
    >
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-3xl">
          <h3 className="text-2xl font-bold leading-tight text-navy md:text-[1.7rem]">{project.title}</h3>
        </div>
        <div className="flex flex-wrap gap-2 lg:max-w-xs lg:justify-end">
          {onOpen ? (
            <button
              className="inline-flex min-h-8 items-center rounded-full border border-pink/70 bg-white px-3 py-1 text-xs font-bold text-navy outline-none transition hover:border-green hover:text-green focus-visible:ring-4 focus-visible:ring-pink/40"
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                onOpen();
              }}
            >
              Detail
            </button>
          ) : null}
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-7 grid gap-3 sm:grid-cols-3">
        {project.kpis.map((kpi) => (
          <div className="rounded-md border border-border bg-[#FBFAF8] p-4" key={kpi.label}>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-muted">{kpi.label}</p>
            <p className="number mt-3 break-words text-2xl font-bold text-navy">{kpi.value}</p>
          </div>
        ))}
      </div>

      {project.evidenceRows ? <EvidenceTable rows={project.evidenceRows} /> : null}

      {project.flowSteps ? (
        <div className="mt-6 rounded-md border border-border bg-[#FBFAF8] p-4">
          <p className="mb-4 text-sm font-bold text-navy">Financial Flow Diagram</p>
          <ol className="flex flex-col gap-3 md:flex-row md:flex-wrap md:items-center">
            {project.flowSteps.map((step, index) => (
              <li className="flex items-center gap-3" key={step}>
                <span className="inline-flex min-h-10 items-center rounded-full border border-border bg-white px-4 text-sm font-semibold text-navy">
                  {step}
                </span>
                {index < project.flowSteps!.length - 1 ? (
                  <ChevronRight className="hidden text-green md:block" aria-hidden="true" size={18} />
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      ) : null}

      {project.processSteps ? <ProcessTimeline steps={project.processSteps} /> : null}

      {children}
    </motion.article>
  );
}

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { designFinancialProjects, projectCostSummary, projectDashboardSeries } from "../data/projects";
import type { PortfolioProject } from "../data/projects";
import { formatCurrency } from "../utils/format";
import { runViewTransition } from "../utils/interaction";
import { EvidenceTable } from "./EvidenceTable";
import { ProcessTimeline } from "./ProcessTimeline";
import { ProjectCard } from "./ProjectCard";
import { SectionTitle } from "./SectionTitle";

function formatTooltipCurrency(value: unknown): string {
  return typeof value === "number" ? formatCurrency(value) : String(value);
}

function currencyTick(value: number): string {
  return `${Math.round(value / 10000)}만`;
}

function ProjectDashboardMini(): JSX.Element {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="mt-6 grid gap-5 xl:grid-cols-[1.25fr_0.75fr]">
      <div className="inner-white-panel p-4">
        <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold text-navy">Monthly Revenue / Expense</p>
          </div>
        </div>
        <div className="chart-grow h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={projectDashboardSeries} margin={{ top: 12, right: 8, left: 0, bottom: 0 }}>
              <CartesianGrid stroke="#E8E2DA" strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" stroke="#6B6B6B" tickLine={false} axisLine={false} />
              <YAxis stroke="#6B6B6B" tickFormatter={currencyTick} tickLine={false} axisLine={false} width={44} />
              <Tooltip formatter={(value, name) => [formatTooltipCurrency(value), name === "revenue" ? "매출" : "비용"]} />
              <Bar dataKey="revenue" fill="#1F2A44" isAnimationActive={!shouldReduceMotion} radius={[8, 8, 0, 0]} />
              <Bar dataKey="expense" fill="#3A7D5A" isAnimationActive={!shouldReduceMotion} radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="inner-white-panel p-4">
        <p className="text-sm font-bold text-navy">Project Cost Summary</p>
        <ul className="mt-5 space-y-3">
          {projectCostSummary.map((item) => (
            <li className="flex items-center justify-between gap-4 text-sm" key={item.category}>
              <span className="font-semibold text-muted">{item.category}</span>
              <span className="number font-bold text-navy">{formatCurrency(item.amount)}</span>
            </li>
          ))}
        </ul>
        <div className="chart-grow mt-6 h-[160px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={projectDashboardSeries} margin={{ top: 10, right: 8, left: -24, bottom: 0 }}>
              <XAxis dataKey="month" stroke="#6B6B6B" tickLine={false} axisLine={false} />
              <YAxis stroke="#6B6B6B" tickLine={false} axisLine={false} />
              <Tooltip formatter={(value) => [`${value}%`, "수익률"]} />
              <Line
                type="monotone"
                dataKey="profitRate"
                stroke="#3A7D5A"
                strokeWidth={3}
                dot={{ r: 4, fill: "#3A7D5A" }}
                isAnimationActive={!shouldReduceMotion}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

type ProjectDetailModalProps = {
  project: PortfolioProject;
  onClose: () => void;
};

function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps): JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [onClose]);

  return (
    <motion.div
      aria-labelledby="project-detail-title"
      aria-modal="true"
      className="fixed inset-0 z-50 grid place-items-center bg-navy/35 px-4 py-8 backdrop-blur-sm"
      role="dialog"
      initial={shouldReduceMotion ? false : { opacity: 0 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1 }}
      exit={shouldReduceMotion ? undefined : { opacity: 0 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      onClick={onClose}
    >
      <motion.article
        className="project-detail-panel glass-kpi relative max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-lg p-5 outline-none sm:p-7"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 18, scale: 0.98 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
        exit={shouldReduceMotion ? undefined : { opacity: 0, y: 18, scale: 0.98 }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          aria-label="Close project detail"
          className="absolute right-4 top-4 inline-flex size-10 items-center justify-center rounded-full border border-white/70 bg-white/45 text-muted outline-none backdrop-blur-sm transition hover:text-navy focus-visible:ring-4 focus-visible:ring-pink/40"
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
        >
          <X aria-hidden="true" size={18} />
        </button>

        <div className="pr-12">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-green">Project Detail</p>
          <h3 className="masked-text-reveal text-2xl font-bold leading-tight text-navy sm:text-3xl" id="project-detail-title">
            {project.title}
          </h3>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-3">
          {project.kpis.map((kpi) => (
            <div className="inner-white-panel p-4" key={kpi.label}>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-muted">{kpi.label}</p>
              <p className="number mt-3 break-words text-2xl font-bold text-navy">{kpi.value}</p>
            </div>
          ))}
        </div>

        {project.evidenceRows ? <EvidenceTable rows={project.evidenceRows} /> : null}

        {project.flowSteps ? (
          <div className="inner-white-panel mt-6 p-4">
            <p className="mb-4 text-sm font-bold text-navy">Financial Flow Diagram</p>
            <ol className="flex flex-col gap-3 md:flex-row md:flex-wrap md:items-center">
              {project.flowSteps.map((step) => (
                <li className="inline-flex min-h-10 items-center rounded-full border border-white/70 bg-white/45 px-4 text-sm font-semibold text-navy backdrop-blur-sm" key={step}>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        ) : null}

        {project.processSteps ? <ProcessTimeline steps={project.processSteps} /> : null}
      </motion.article>
    </motion.div>
  );
}

export function DesignFinancialProjects(): JSX.Element {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const openProject = (project: PortfolioProject): void => {
    runViewTransition(() => setSelectedProject(project));
  };

  const closeProject = (): void => {
    runViewTransition(() => setSelectedProject(null));
  };

  return (
    <section className="section-shell section-spacing flex flex-col gap-8" id="projects">
      <SectionTitle eyebrow="Design Financial Projects" title="Three Practical Portfolio Projects" />

      <div className="grid gap-6">
        {designFinancialProjects.map((project, index) => (
          <ProjectCard featured={index === 0} index={index} onOpen={() => openProject(project)} project={project} key={project.id}>
            {project.id === "monthly-dashboard" ? <ProjectDashboardMini /> : null}
          </ProjectCard>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject ? <ProjectDetailModal project={selectedProject} onClose={closeProject} /> : null}
      </AnimatePresence>
    </section>
  );
}

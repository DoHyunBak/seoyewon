import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import type { PortfolioProject } from "../data/projects";
import { updateSpotlightPosition } from "../utils/interaction";
import { EvidenceTable } from "./EvidenceTable";
import { ProcessTimeline } from "./ProcessTimeline";

type ProjectCardProps = {
  project: PortfolioProject;
  children?: ReactNode;
};

export function ProjectCard({ project, children }: ProjectCardProps): JSX.Element {
  return (
    <article className="card spotlight-card gradient-border-card sticky-stack-card p-5 sm:p-7" onPointerMove={updateSpotlightPosition}>
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-3xl">
          <p className="mb-2 text-sm font-bold text-green">{project.purpose}</p>
          <h3 className="text-2xl font-bold leading-tight text-navy md:text-[1.7rem]">{project.title}</h3>
          <p className="mt-4 text-base leading-7 text-muted">{project.summary}</p>
        </div>
        <div className="flex flex-wrap gap-2 lg:max-w-xs lg:justify-end">
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
            <p className="mt-2 text-sm text-muted">{kpi.helper}</p>
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
    </article>
  );
}

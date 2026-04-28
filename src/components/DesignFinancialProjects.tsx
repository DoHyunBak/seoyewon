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
import { formatCurrency } from "../utils/format";
import { ProjectCard } from "./ProjectCard";
import { SectionTitle } from "./SectionTitle";

function formatTooltipCurrency(value: unknown): string {
  return typeof value === "number" ? formatCurrency(value) : String(value);
}

function currencyTick(value: number): string {
  return `${Math.round(value / 10000)}만`;
}

function ProjectDashboardMini(): JSX.Element {
  return (
    <div className="mt-6 grid gap-5 xl:grid-cols-[1.25fr_0.75fr]">
      <div className="rounded-md border border-border bg-[#FBFAF8] p-4">
        <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold text-navy">Monthly Revenue / Expense</p>
            <p className="text-sm text-muted">월별 매출과 비용 흐름을 함께 비교합니다.</p>
          </div>
        </div>
        <div className="h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={projectDashboardSeries} margin={{ top: 12, right: 8, left: 0, bottom: 0 }}>
              <CartesianGrid stroke="#E8E2DA" strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" stroke="#6B6B6B" tickLine={false} axisLine={false} />
              <YAxis stroke="#6B6B6B" tickFormatter={currencyTick} tickLine={false} axisLine={false} width={44} />
              <Tooltip formatter={(value, name) => [formatTooltipCurrency(value), name === "revenue" ? "매출" : "비용"]} />
              <Bar dataKey="revenue" fill="#1F2A44" radius={[8, 8, 0, 0]} />
              <Bar dataKey="expense" fill="#3A7D5A" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="rounded-md border border-border bg-white p-4">
        <p className="text-sm font-bold text-navy">Project Cost Summary</p>
        <p className="mt-1 text-sm text-muted">항목별 비용을 예시 금액으로 정리합니다.</p>
        <ul className="mt-5 space-y-3">
          {projectCostSummary.map((item) => (
            <li className="flex items-center justify-between gap-4 text-sm" key={item.category}>
              <span className="font-semibold text-muted">{item.category}</span>
              <span className="number font-bold text-navy">{formatCurrency(item.amount)}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 h-[160px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={projectDashboardSeries} margin={{ top: 10, right: 8, left: -24, bottom: 0 }}>
              <XAxis dataKey="month" stroke="#6B6B6B" tickLine={false} axisLine={false} />
              <YAxis stroke="#6B6B6B" tickLine={false} axisLine={false} />
              <Tooltip formatter={(value) => [`${value}%`, "수익률"]} />
              <Line type="monotone" dataKey="profitRate" stroke="#3A7D5A" strokeWidth={3} dot={{ r: 4, fill: "#3A7D5A" }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export function DesignFinancialProjects(): JSX.Element {
  return (
    <section className="section-shell section-spacing" id="projects">
      <SectionTitle
        eyebrow="Design Financial Projects"
        title="실무 가능성을 보여주는 3개의 프로젝트"
        description="프로젝트 수는 3개로 제한하고, 매출·비용·증빙·정산·리포트 역량이 자연스럽게 드러나도록 구성했습니다."
      />

      <div className="grid gap-6">
        {designFinancialProjects.map((project) => (
          <ProjectCard project={project} key={project.id}>
            {project.id === "monthly-dashboard" ? <ProjectDashboardMini /> : null}
          </ProjectCard>
        ))}
      </div>
    </section>
  );
}

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { BadgeDollarSign, CircleDollarSign, FileCheck2, Receipt, TrendingUp, WalletCards } from "lucide-react";
import { costBreakdownData, monthlySummary, profitRateData, recentSettlements, revenueExpenseData } from "../data/dashboard";
import { formatCurrency } from "../utils/format";
import { SectionTitle } from "./SectionTitle";
import { StatCard } from "./StatCard";

function formatTooltipCurrency(value: unknown): string {
  return typeof value === "number" ? formatCurrency(value) : String(value);
}

function currencyTick(value: number): string {
  return `${Math.round(value / 10000)}만`;
}

const summaryStats = [
  {
    label: "Total Revenue",
    value: monthlySummary.revenue,
    variant: "currency" as const,
    helper: "이번 달 디자인 프로젝트 매출",
    icon: CircleDollarSign,
    tone: "navy" as const
  },
  {
    label: "Total Expense",
    value: monthlySummary.expense,
    variant: "currency" as const,
    helper: "외주비·제작비·운영비 포함",
    icon: Receipt,
    tone: "green" as const
  },
  {
    label: "Outsourcing Cost",
    value: monthlySummary.outsourcingCost,
    variant: "currency" as const,
    helper: "외주 디자이너 정산 예시",
    icon: WalletCards,
    tone: "green" as const
  },
  {
    label: "Receivables",
    value: monthlySummary.receivables,
    variant: "currency" as const,
    helper: "미수금 관리 대상",
    icon: FileCheck2,
    tone: "pink" as const
  },
  {
    label: "Net Profit",
    value: monthlySummary.netProfit,
    variant: "currency" as const,
    helper: "매출에서 비용을 차감한 금액",
    icon: BadgeDollarSign,
    tone: "navy" as const
  },
  {
    label: "Profit Rate",
    value: monthlySummary.profitRate,
    variant: "percent" as const,
    helper: "프로젝트 수익률 예시",
    icon: TrendingUp,
    tone: "green" as const
  }
];

export function FinancialDashboard(): JSX.Element {
  return (
    <section className="section-shell section-spacing" id="dashboard">
      <SectionTitle
        eyebrow="Financial Dashboard"
        title="Mini Dashboard for Numbers and Evidence"
        description="Total Revenue, Total Expense, Outsourcing Cost, Receivables, Net Profit, Profit Rate를 KPI와 차트로 정리했습니다."
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {summaryStats.map((stat) => (
          <StatCard
            helper={stat.helper}
            icon={stat.icon}
            key={stat.label}
            label={stat.label}
            tone={stat.tone}
            value={stat.value}
            variant={stat.variant}
          />
        ))}
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <article className="card p-5 sm:p-6">
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-xl font-bold text-navy">Monthly Revenue / Expense Chart</h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                차트 요약: 4월 매출은 {formatCurrency(monthlySummary.revenue)}, 비용은 {formatCurrency(monthlySummary.expense)}로
                수익률은 42.6%입니다.
              </p>
            </div>
          </div>
          <div className="chart-grow h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueExpenseData} margin={{ top: 12, right: 12, left: 0, bottom: 0 }}>
                <CartesianGrid stroke="#E8E2DA" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" stroke="#6B6B6B" tickLine={false} axisLine={false} />
                <YAxis stroke="#6B6B6B" tickFormatter={currencyTick} tickLine={false} axisLine={false} width={44} />
                <Tooltip formatter={(value, name) => [formatTooltipCurrency(value), name === "revenue" ? "매출" : "비용"]} />
                <Bar dataKey="revenue" fill="#1F2A44" radius={[8, 8, 0, 0]} />
                <Bar dataKey="expense" fill="#3A7D5A" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </article>

        <article className="card p-5 sm:p-6">
          <h3 className="text-xl font-bold text-navy">Cost Breakdown Chart</h3>
          <p className="mt-2 text-sm leading-6 text-muted">
            차트 요약: 외주비가 가장 큰 비용 항목이며, 제작비와 운영비가 뒤를 잇습니다.
          </p>
          <div className="chart-grow mt-4 h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={costBreakdownData} dataKey="value" innerRadius={62} outerRadius={92} paddingAngle={3}>
                  {costBreakdownData.map((entry) => (
                    <Cell fill={entry.color} key={entry.name} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [formatTooltipCurrency(value), "비용"]} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <ul className="grid gap-3">
            {costBreakdownData.map((item) => (
              <li className="flex items-center justify-between gap-4 text-sm" key={item.name}>
                <span className="flex items-center gap-2 font-semibold text-muted">
                  <span className="size-3 rounded-full" style={{ backgroundColor: item.color }} aria-hidden="true" />
                  {item.name}
                </span>
                <span className="number font-bold text-navy">{formatCurrency(item.value)}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[0.86fr_1.14fr]">
        <article className="card p-5 sm:p-6">
          <h3 className="text-xl font-bold text-navy">Profit Rate Trend</h3>
          <p className="mt-2 text-sm leading-6 text-muted">수익률은 최근 4월 기준 42.6%로 완만하게 개선되는 예시 흐름입니다.</p>
          <div className="chart-grow mt-4 h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={profitRateData} margin={{ top: 12, right: 12, left: -18, bottom: 0 }}>
                <CartesianGrid stroke="#E8E2DA" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" stroke="#6B6B6B" tickLine={false} axisLine={false} />
                <YAxis stroke="#6B6B6B" tickLine={false} axisLine={false} />
                <Tooltip formatter={(value) => [`${value}%`, "수익률"]} />
                <Line type="monotone" dataKey="rate" stroke="#3A7D5A" strokeWidth={3} dot={{ r: 4, fill: "#3A7D5A" }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </article>

        <article className="card p-5 sm:p-6">
          <h3 className="text-xl font-bold text-navy">Recent Settlement Table</h3>
          <p className="mt-2 text-sm leading-6 text-muted">프로젝트별 비용 항목, 금액, 지급 상태를 채용 담당자가 바로 확인할 수 있게 정리합니다.</p>
          <div className="mt-5 overflow-x-auto rounded-md border border-border">
            <table className="w-full min-w-[560px] text-left text-sm">
              <caption className="sr-only">최근 정산 항목과 상태</caption>
              <thead className="bg-[#F8F4EE] text-xs uppercase text-muted">
                <tr>
                  <th className="px-4 py-3 font-bold" scope="col">
                    프로젝트
                  </th>
                  <th className="px-4 py-3 font-bold" scope="col">
                    항목
                  </th>
                  <th className="px-4 py-3 text-right font-bold" scope="col">
                    금액
                  </th>
                  <th className="px-4 py-3 font-bold" scope="col">
                    상태
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white">
                {recentSettlements.map((settlement) => (
                  <tr key={`${settlement.project}-${settlement.item}`}>
                    <th className="px-4 py-4 font-semibold text-navy" scope="row">
                      {settlement.project}
                    </th>
                    <td className="px-4 py-4 text-muted">{settlement.item}</td>
                    <td className="number px-4 py-4 text-right font-bold text-text">{formatCurrency(settlement.amount)}</td>
                    <td className="px-4 py-4">
                      <span className="status-badge">{settlement.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
      </div>
    </section>
  );
}

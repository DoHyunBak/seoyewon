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
import { useReducedMotion } from "framer-motion";
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
    icon: CircleDollarSign,
    tone: "navy" as const
  },
  {
    label: "Total Expense",
    value: monthlySummary.expense,
    variant: "currency" as const,
    icon: Receipt,
    tone: "green" as const
  },
  {
    label: "Outsourcing Cost",
    value: monthlySummary.outsourcingCost,
    variant: "currency" as const,
    icon: WalletCards,
    tone: "green" as const
  },
  {
    label: "Receivables",
    value: monthlySummary.receivables,
    variant: "currency" as const,
    icon: FileCheck2,
    tone: "pink" as const
  },
  {
    label: "Net Profit",
    value: monthlySummary.netProfit,
    variant: "currency" as const,
    icon: BadgeDollarSign,
    tone: "navy" as const
  },
  {
    label: "Profit Rate",
    value: monthlySummary.profitRate,
    variant: "percent" as const,
    icon: TrendingUp,
    tone: "green" as const
  }
];

export function FinancialDashboard(): JSX.Element {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-shell section-spacing flex flex-col gap-8" id="dashboard">
      <SectionTitle eyebrow="Financial Dashboard" title="Mini Dashboard for Numbers and Evidence" />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {summaryStats.map((stat) => (
          <StatCard
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
        <article className="card reveal gradient-border-card p-5 sm:p-6">
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-xl font-bold text-navy">Monthly Revenue / Expense Chart</h3>
            </div>
          </div>
          <div className="chart-grow h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueExpenseData} margin={{ top: 12, right: 12, left: 0, bottom: 0 }}>
                <CartesianGrid stroke="#E8E2DA" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" stroke="#6B6B6B" tickLine={false} axisLine={false} />
                <YAxis stroke="#6B6B6B" tickFormatter={currencyTick} tickLine={false} axisLine={false} width={44} />
                <Tooltip formatter={(value, name) => [formatTooltipCurrency(value), name === "revenue" ? "매출" : "비용"]} />
                <Bar dataKey="revenue" fill="#1F2A44" isAnimationActive={!shouldReduceMotion} radius={[8, 8, 0, 0]} />
                <Bar dataKey="expense" fill="#3A7D5A" isAnimationActive={!shouldReduceMotion} radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </article>

        <article className="card reveal gradient-border-card p-5 sm:p-6">
          <h3 className="text-xl font-bold text-navy">Cost Breakdown Chart</h3>
          <div className="chart-grow mt-4 h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={costBreakdownData} dataKey="value" innerRadius={62} isAnimationActive={!shouldReduceMotion} outerRadius={92} paddingAngle={3}>
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
        <article className="card reveal gradient-border-card p-5 sm:p-6">
          <h3 className="text-xl font-bold text-navy">Profit Rate Trend</h3>
          <div className="chart-grow mt-4 h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={profitRateData} margin={{ top: 12, right: 12, left: -18, bottom: 0 }}>
                <CartesianGrid stroke="#E8E2DA" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" stroke="#6B6B6B" tickLine={false} axisLine={false} />
                <YAxis stroke="#6B6B6B" tickLine={false} axisLine={false} />
                <Tooltip formatter={(value) => [`${value}%`, "수익률"]} />
                <Line
                  type="monotone"
                  dataKey="rate"
                  stroke="#3A7D5A"
                  strokeWidth={3}
                  dot={{ r: 4, fill: "#3A7D5A" }}
                  isAnimationActive={!shouldReduceMotion}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </article>

        <article className="card reveal gradient-border-card p-5 sm:p-6">
          <h3 className="text-xl font-bold text-navy">Recent Settlement Table</h3>
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

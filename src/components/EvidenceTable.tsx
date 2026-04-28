import type { EvidenceRow } from "../data/projects";
import { formatCurrency } from "../utils/format";

type EvidenceTableProps = {
  rows: EvidenceRow[];
};

export function EvidenceTable({ rows }: EvidenceTableProps): JSX.Element {
  return (
    <div className="card gradient-border-card mt-6 overflow-x-auto" aria-label="프로젝트 증빙 정리표">
      <table className="w-full min-w-[620px] border-collapse text-left text-sm">
        <caption className="sr-only">프로젝트별 비용 항목, 금액, 증빙 유형, 처리 상태</caption>
        <thead className="bg-[#F8F4EE] text-xs uppercase text-muted">
          <tr>
            <th className="px-4 py-3 font-bold" scope="col">
              항목
            </th>
            <th className="px-4 py-3 font-bold" scope="col">
              분류
            </th>
            <th className="px-4 py-3 text-right font-bold" scope="col">
              금액
            </th>
            <th className="px-4 py-3 font-bold" scope="col">
              증빙
            </th>
            <th className="px-4 py-3 font-bold" scope="col">
              상태
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rows.map((row) => (
            <tr key={`${row.item}-${row.amount}`}>
              <th className="px-4 py-3 font-semibold text-navy" scope="row">
                {row.item}
              </th>
              <td className="px-4 py-3 text-muted">{row.category}</td>
              <td className="number px-4 py-3 text-right font-semibold text-text">{formatCurrency(row.amount)}</td>
              <td className="px-4 py-3 text-muted">{row.evidence}</td>
              <td className="px-4 py-3">
                <span className="status-badge">{row.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

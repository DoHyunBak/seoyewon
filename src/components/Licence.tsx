import { motion, useReducedMotion } from "framer-motion";
import {
  ownedCertifications,
  plannedCertifications
} from "../data/portfolio";
import type { CertificationRow } from "../data/portfolio";
import { SectionTitle } from "./SectionTitle";

type CertificationTableProps = {
  rows: CertificationRow[];
};

function CertificationTable({ rows }: CertificationTableProps): JSX.Element {
  return (
    <div className="card mt-5 overflow-x-auto">
      <table className="w-full min-w-[720px] text-left text-sm">
        <thead className="bg-[#F8F4EE] text-xs uppercase text-muted">
          <tr>
            <th className="px-4 py-3 font-bold" scope="col">구분</th>
            <th className="px-4 py-3 font-bold" scope="col">자격/역량</th>
            <th className="px-4 py-3 font-bold" scope="col">상태</th>
            <th className="px-4 py-3 font-bold" scope="col">직무 연결</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border bg-white">
          {rows.map((row) => (
            <tr key={`${row.category}-${row.name}`}>
              <td className="px-4 py-4 text-muted">{row.category}</td>
              <th className="px-4 py-4 font-semibold text-navy" scope="row">{row.name}</th>
              <td className="px-4 py-4 text-muted">{row.status}</td>
              <td className="px-4 py-4 text-text">{row.connection}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CertificationCardGrid({ rows }: CertificationTableProps): JSX.Element {
  const categoryColor = {
    Accounting: "from-[#1F2A44] to-[#596476]",
    Tax: "from-[#3A7D5A] to-[#6BA08A]"
  } as const;

  return (
    <div className="mt-5 grid gap-4 md:grid-cols-2">
      {rows.map((row) => (
        <div
          key={`${row.category}-${row.name}`}
          className="card p-5 sm:p-6"
        >
          <div className="mb-4 flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-green">{row.category}</p>
              <h4 className="mt-1 text-lg font-bold text-navy">{row.name}</h4>
            </div>
            <span className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-xs font-bold text-white ${categoryColor[row.category as keyof typeof categoryColor]}`}>
              {row.category === "Accounting" ? "A" : "T"}
            </span>
          </div>
          <div className="space-y-3">
            <div className="rounded-md bg-white/30 px-3 py-2 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">상태</p>
              <p className="mt-1 text-sm font-bold text-navy">{row.status}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">직무 연결</p>
              <p className="mt-1 text-sm leading-5 text-text">{row.connection}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Licence(): JSX.Element {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-shell section-spacing flex flex-col gap-8" id="licence">
      <SectionTitle eyebrow="Certifications" title="Certifications" />

      <motion.article
        className="card gradient-border-card p-6 sm:p-8"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.24, ease: "easeOut" }}
      >
        <div className="space-y-8">
          <div>
            <h3 className="mb-4 text-xl font-bold text-navy">Current Certifications</h3>
            <CertificationCardGrid rows={ownedCertifications} />
          </div>

          <div className="border-t border-border/30 pt-8">
            <h3 className="mb-4 text-xl font-bold text-navy">Learning Plan</h3>
            <CertificationCardGrid rows={plannedCertifications} />
          </div>
        </div>
      </motion.article>
    </section>
  );
}

export type EvidenceRow = {
  item: string;
  category: string;
  amount: number;
  evidence: string;
  status: string;
};

export type ProjectKpi = {
  label: string;
  value: string;
};

export type ProcessStep = {
  title: string;
  status: string;
};

export type PortfolioProject = {
  id: string;
  title: string;
  tags: string[];
  kpis: ProjectKpi[];
  evidenceRows?: EvidenceRow[];
  flowSteps?: string[];
  processSteps?: ProcessStep[];
};

export const designFinancialProjects: PortfolioProject[] = [
  {
    id: "studio-flow",
    title: "Design Studio Financial Flow",
    tags: ["Project Revenue", "Evidence", "VAT", "Cost Classification"],
    kpis: [
      { label: "예상 매출", value: "₩6,400,000" },
      { label: "총 비용", value: "₩3,180,000" },
      { label: "마진율", value: "50.3%" }
    ],
    evidenceRows: [
      { item: "외주 디자인", category: "Outsourcing", amount: 1200000, evidence: "세금계산서", status: "확인 완료" },
      { item: "폰트 라이선스", category: "License", amount: 260000, evidence: "카드전표", status: "분류 완료" },
      { item: "제품 촬영", category: "Production", amount: 780000, evidence: "세금계산서", status: "증빙 확인" },
      { item: "인쇄 샘플", category: "Print", amount: 420000, evidence: "카드전표", status: "정리 완료" }
    ],
    flowSteps: ["매출 계약", "비용 발생", "증빙 수집", "부가세 구분", "프로젝트 리포트"]
  },
  {
    id: "outsourcing-settlement",
    title: "Outsourcing Settlement Process",
    tags: ["Settlement", "Freelancer", "Schedule", "Status Tracking"],
    kpis: [
      { label: "정산 단계", value: "6 Steps" },
      { label: "증빙 유형", value: "2 Types" },
      { label: "관리 기준", value: "D+7" }
    ],
    processSteps: [
      { title: "Outsourcing Contract", status: "계약 완료" },
      { title: "Work Completed", status: "작업 완료" },
      { title: "Review Completed", status: "검수 완료" },
      { title: "Evidence Checked", status: "증빙 확인" },
      { title: "Payment Scheduled", status: "지급 예정" },
      { title: "Payment Completed", status: "지급 완료" }
    ]
  },
  {
    id: "monthly-dashboard",
    title: "Monthly Design Finance Dashboard",
    tags: ["Dashboard", "KPI", "Revenue", "Expense"],
    kpis: [
      { label: "월 매출", value: "₩12,800,000" },
      { label: "순이익", value: "₩5,450,000" },
      { label: "수익률", value: "42.6%" }
    ]
  }
];

export const projectDashboardSeries = [
  { month: "1월", revenue: 8200000, expense: 5100000, profitRate: 37.8 },
  { month: "2월", revenue: 9400000, expense: 5800000, profitRate: 38.3 },
  { month: "3월", revenue: 10800000, expense: 6400000, profitRate: 40.7 },
  { month: "4월", revenue: 12800000, expense: 7350000, profitRate: 42.6 }
];

export const projectCostSummary = [
  { category: "외주비", amount: 2860000 },
  { category: "제작비", amount: 1760000 },
  { category: "라이선스", amount: 620000 },
  { category: "촬영비", amount: 920000 },
  { category: "기타", amount: 1190000 }
];

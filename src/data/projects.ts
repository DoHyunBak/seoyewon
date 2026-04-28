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
  helper: string;
};

export type ProcessStep = {
  title: string;
  description: string;
  status: string;
};

export type PortfolioProject = {
  id: string;
  title: string;
  purpose: string;
  summary: string;
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
    purpose: "가상 디자인 스튜디오의 매출, 비용, 증빙 흐름을 정리하는 프로젝트",
    summary:
      "브랜딩 프로젝트의 매출 발생부터 외주비, 라이선스, 촬영비, 인쇄비, 제작비 증빙을 분류하고 부가세 흐름까지 확인하는 예시입니다.",
    tags: ["Project Revenue", "Evidence", "VAT", "Cost Classification"],
    kpis: [
      { label: "예상 매출", value: "₩6,400,000", helper: "프로젝트 단위" },
      { label: "총 비용", value: "₩3,180,000", helper: "외주·제작 포함" },
      { label: "마진율", value: "50.3%", helper: "예시 계산" }
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
    purpose: "외주 디자이너 정산 프로세스를 명확하게 보여주는 프로젝트",
    summary:
      "외주 계약부터 작업 완료, 검수, 증빙 확인, 지급 예정일 관리, 지급 완료 확인까지의 정산 체크리스트를 구성했습니다.",
    tags: ["Settlement", "Freelancer", "Schedule", "Status Tracking"],
    kpis: [
      { label: "정산 단계", value: "6 Steps", helper: "계약부터 지급 완료" },
      { label: "증빙 유형", value: "2 Types", helper: "세금계산서 / 원천세" },
      { label: "관리 기준", value: "D+7", helper: "지급 예정일 예시" }
    ],
    processSteps: [
      { title: "외주 계약", description: "업무 범위와 지급 조건을 정리합니다.", status: "계약 완료" },
      { title: "작업 완료", description: "결과물 제출일과 산출물을 확인합니다.", status: "작업 완료" },
      { title: "검수 완료", description: "수정 요청과 최종 승인 여부를 기록합니다.", status: "검수 완료" },
      { title: "증빙 확인", description: "세금계산서 또는 원천세 처리 기준을 확인합니다.", status: "증빙 확인" },
      { title: "지급 예정", description: "지급 예정일과 계좌 확인 여부를 관리합니다.", status: "지급 예정" },
      { title: "지급 완료", description: "지급 완료일과 회계 처리 메모를 남깁니다.", status: "지급 완료" }
    ]
  },
  {
    id: "monthly-dashboard",
    title: "Monthly Design Finance Dashboard",
    purpose: "디자인 회사의 월간 매출·비용·수익률을 한눈에 보여주는 대시보드",
    summary:
      "월 매출, 월 비용, 프로젝트별 비용, 외주비 비중, 미수금, 순이익, 수익률, 전월 대비 변화율을 KPI와 차트로 정리합니다.",
    tags: ["Dashboard", "KPI", "Revenue", "Expense"],
    kpis: [
      { label: "월 매출", value: "₩12,800,000", helper: "전월 대비 +8.4%" },
      { label: "순이익", value: "₩5,450,000", helper: "비용 차감 후" },
      { label: "수익률", value: "42.6%", helper: "예시 데이터" }
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

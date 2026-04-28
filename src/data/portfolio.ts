import { BarChart3, BriefcaseBusiness, ClipboardCheck, FileSpreadsheet, ReceiptText, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const portfolioOwner = {
  name: "서예원",
  role: "Design Financial Operations Assistant",
  headline: "디자인 업계를 이해하고, 숫자와 정산 흐름을 정리하는 지원자",
  email: "email@example.com",
  notionUrl: "https://notion.so/placeholder",
  pdfUrl: "/portfolio.pdf"
};

export const navigationItems = [
  { label: "Profile", href: "#profile" },
  { label: "Strength", href: "#core-strength" },
  { label: "Projects", href: "#projects" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Contact", href: "#contact" }
];

export const heroKeywords = [
  "Design",
  "Financial",
  "Operations",
  "Project Cost",
  "Settlement",
  "Report",
  "Evidence",
  "Revenue",
  "Expense"
];

export const profileHighlights = [
  "디자인 프로젝트의 매출, 외주비, 라이선스 비용, 증빙 자료, 정산 일정을 체계적으로 정리하는 방향을 지향합니다.",
  "회계와 세무 기본기를 디자인 업계 맥락에 연결해, 프로젝트별 비용 구조와 리포트 흐름을 보기 쉽게 전달하는 포트폴리오입니다.",
  "실제 경력이나 자격 취득 여부는 placeholder로 관리하며, 지원 전 개인 정보와 실제 이력에 맞게 수정할 수 있습니다."
];

export const profileFacts = [
  { label: "희망 직무", value: "Design Finance / Creative Business Financial Support" },
  { label: "핵심 방향", value: "프로젝트 비용, 증빙, 정산, 월간 리포트 정리" },
  { label: "연락처", value: portfolioOwner.email },
  { label: "자료", value: "PDF Portfolio / Notion Portfolio" }
];

export type Strength = {
  title: string;
  description: string;
  icon: LucideIcon;
  points: string[];
};

export const coreStrengths: Strength[] = [
  {
    title: "Design Business Understanding",
    description: "Creative Workflow와 프로젝트 비용 흐름을 연결해 디자인 비즈니스 구조를 파악합니다.",
    icon: BriefcaseBusiness,
    points: [
      "디자인 프로젝트 단위 매출 구조 이해",
      "외주 디자이너 비용과 정산 흐름 이해",
      "라이선스, 촬영, 인쇄, 제작비 비용 구조 정리",
      "Creative Workflow와 비용 흐름 연결"
    ]
  },
  {
    title: "Financial Organization",
    description: "증빙과 정산 항목을 누락 없이 분류해 회계 처리 전 단계의 정리 품질을 높입니다.",
    icon: ReceiptText,
    points: [
      "세금계산서, 카드전표, 현금영수증 정리",
      "외주비 정산 및 지급 예정일 관리",
      "프로젝트별 비용 분류",
      "증빙 관리와 부가세 흐름 점검"
    ]
  },
  {
    title: "Report & Data Readability",
    description: "Financial Data를 표, 차트, KPI로 정리해 의사결정 가능한 형태로 전달합니다.",
    icon: BarChart3,
    points: [
      "월간 매출·비용 리포트",
      "프로젝트별 수익률 정리",
      "KPI 기반 요약",
      "표, 차트, 숫자 가독성 개선"
    ]
  }
];

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Design Industry",
    icon: ClipboardCheck,
    skills: [
      "Project Cost",
      "Outsourcing Fee",
      "License Cost",
      "Production Cost",
      "Creative Workflow",
      "Design Project Budget"
    ]
  },
  {
    title: "Financial",
    icon: TrendingUp,
    skills: ["매출 관리", "비용 관리", "정산 관리", "미수금 관리", "세금계산서", "증빙 관리", "부가세", "원천세"]
  },
  {
    title: "Data & Report",
    icon: FileSpreadsheet,
    skills: ["Excel", "SUMIFS", "XLOOKUP", "Pivot Table", "조건부 서식", "Monthly Report", "KPI Summary", "Dashboard"]
  },
  {
    title: "Tools",
    icon: ClipboardCheck,
    skills: ["더존", "Excel", "Notion", "Google Sheets", "PDF Report"]
  }
];

import { BarChart3, BriefcaseBusiness, ClipboardCheck, FileSpreadsheet, ReceiptText, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const portfolioOwner = {
  name: "서예원",
  role: "Design Financial Operations Assistant",
  headline: "디자인 감각과 비용 정리 감각을 함께 키워가는 지원자",
  email: "email@example.com",
  notionUrl: "https://notion.so/placeholder",
  pdfUrl: "/portfolio.pdf",
  birth: "2004년생",
  education: "한양대학교 디자인대학 주얼리패션디자인학과 미술학사"
};

export const navigationItems = [
  { label: "Profile", href: "#profile" },
  { label: "Strength", href: "#core-strength" },
  { label: "Licence", href: "#licence" },
  { label: "Design Picture", href: "#design-picture" },
  { label: "Language", href: "#language" },
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
  "주얼리·패션 디자인을 전공하며 디자인 결과물뿐 아니라 제작 과정, 재료, 비용 구조에도 관심을 두고 있습니다.",
  "회계와 세무 기본기를 디자인 업계의 라이선스 비용, 제작비, 증빙 정리 흐름과 연결해 학습하고 있습니다.",
  "경력처럼 과장하기보다 학력, 학습 중인 역량, 정리 가능한 업무 범위를 차분하게 보여주는 포트폴리오입니다."
];

export const profileFacts = [
  { label: "출생연도", value: portfolioOwner.birth },
  { label: "학력", value: portfolioOwner.education },
  { label: "희망 직무", value: "Design Finance / Creative Business Financial Support" },
  { label: "핵심 방향", value: "라이선스 비용, 제작비, 증빙, 정산 자료 정리" },
  { label: "연락처", value: portfolioOwner.email },
  { label: "자료", value: "PDF Portfolio / Notion Portfolio" }
];

export const licenceGroups = [
  {
    title: "Design",
    items: ["GTQ 그래픽기술자격", "컴퓨터그래픽스운용기능사", "컬러리스트산업기사", "Adobe Certified Professional"]
  },
  {
    title: "Accounting",
    items: ["전산회계 1급", "전산세무 2급", "FAT 1급", "TAT 2급"]
  }
];

export const designPictures = [
  {
    title: "Jewelry Design",
    category: "Portfolio Image 01",
    description: "주얼리 디자인 작업 이미지를 배치할 수 있는 영역입니다.",
    tone: "navy"
  },
  {
    title: "Fashion Detail",
    category: "Portfolio Image 02",
    description: "패션 소재, 디테일, 스타일링 이미지를 배치할 수 있는 영역입니다.",
    tone: "green"
  },
  {
    title: "Mood Board",
    category: "Portfolio Image 03",
    description: "컬러, 재료, 무드보드 이미지를 배치할 수 있는 영역입니다.",
    tone: "pink"
  }
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
    description: "Creative Workflow와 프로젝트 비용 흐름을 연결해 디자인 비즈니스 구조를 파악해가고 있습니다.",
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
    description: "증빙과 정산 항목을 항목별로 분류하며 회계 처리 전 단계의 정리 방식을 익히고 있습니다.",
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
    description: "Financial Data를 표와 요약 자료로 읽기 쉽게 정리하는 방향을 학습하고 있습니다.",
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

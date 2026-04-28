import { BriefcaseBusiness, ClipboardCheck, FileSpreadsheet, ReceiptText, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const portfolioOwner = {
  name: "서예원",
  role: "Process & Operations Focus",
  headline: "",
  email: "email@example.com",
  pdfUrl: "/portfolio.pdf",
  birth: "2004년생",
  education: "한양대학교 디자인대학 주얼리패션디자인학과 미술학사"
};

export const navigationItems = [
  { label: "Profile", href: "#profile" },
  { label: "Certifications", href: "#licence" },
  { label: "Design Picture", href: "#design-picture" },
  { label: "Language", href: "#language" }
];

export const heroKeywords = [
  "Accounting",
  "Tax",
  "Excel",
  "VLOOKUP",
  "Pivot Table",
  "Evidence",
  "VAT",
  "Withholding Tax",
  "Design Cost"
];

export const profileFacts = [
  { label: "출생연도", value: portfolioOwner.birth },
  { label: "학력", value: portfolioOwner.education },
  { label: "희망 직무", value: "전산회계·세무 / Design Financial Operations" },
  { label: "연락처", value: portfolioOwner.email },
  { label: "자료", value: "PDF Portfolio" }
];

export const designPictures = [
  {
    title: "Jewelry Design",
    category: "Portfolio Image 01",
    imageUrl: "/images/jewelry-design.png",
    tone: "navy"
  },
  {
    title: "Fashion Detail",
    category: "Portfolio Image 02",
    imageUrl: "/images/fashion-detail.png",
    tone: "green"
  },
  {
    title: "Mood Board",
    category: "Portfolio Image 03",
    imageUrl: "/images/mood-board.png",
    tone: "pink"
  }
];



export type CompetencyRow = {
  competency: string;
  status: string;
  description: string;
};

export type ToolRow = {
  tool: string;
  status: string;
  description: string;
};

export type CertificationRow = {
  category: string;
  name: string;
  status: string;
  connection: string;
};

export type IndustryInsightRow = {
  topic: string;
  description: string;
};

export const specIntro =
  "전산회계·세무 직무에 필요한 회계 기초, 세무 흐름, Excel 데이터 정리 역량을 중심으로 준비하고 있습니다. 기존 디자인 툴 경험은 디자인 업계의 프로젝트 비용과 외주 정산 흐름을 이해하는 기반으로 연결됩니다.";

export const accountingLearningIntro =
  "전산회계·세무 직무 전환을 위해 회계 기초와 세무 흐름을 학습하고 있습니다. 특히 거래 내역을 정확하게 분류하고, 증빙 자료를 체계적으로 정리하는 역량을 중심으로 준비하고 있습니다.";

export const accountingLearningRows: CompetencyRow[] = [
  { competency: "전표 처리", status: "학습 중", description: "거래 내역을 회계 항목에 맞게 정리하는 기초 역량" },
  { competency: "매출/매입 구분", status: "학습 중", description: "수입과 지출 흐름을 구분하고 정리하는 역량" },
  { competency: "계정과목 분류", status: "학습 중", description: "비용, 수익, 자산, 부채 항목을 구분하는 기초 역량" },
  { competency: "증빙 관리", status: "학습 중", description: "세금계산서, 카드전표, 현금영수증을 구분하고 정리하는 역량" },
  { competency: "부가가치세 기초", status: "학습 중", description: "매출세액과 매입세액의 흐름을 이해하는 역량" },
  { competency: "원천세 기초", status: "학습 중", description: "외주비, 인건비 지급 시 발생하는 원천세 흐름 이해" },
  { competency: "월간 회계 데이터 정리", status: "학습 중", description: "월별 매출, 비용, 미수금 데이터를 표로 정리하는 역량" }
];

export const excelDataIntro =
  "기존 데이터 분석 경험을 바탕으로 회계·세무 직무에 필요한 금액, 날짜, 거래처, 증빙 데이터를 정리할 수 있습니다.";

export const excelDataRows: CompetencyRow[] = [
  { competency: "Excel", status: "활용 가능", description: "표 기반 데이터 정리 및 리포트 작성" },
  { competency: "VLOOKUP", status: "활용 가능", description: "거래처, 항목, 금액 데이터 조회 및 연결" },
  { competency: "Pivot Table", status: "활용 가능", description: "항목별 합계, 월별 요약, 카테고리별 데이터 분석" },
  { competency: "데이터 정리", status: "활용 가능", description: "원자료를 기준에 맞게 분류하고 정돈" },
  { competency: "월간 리포트 정리", status: "활용 가능", description: "매출, 비용, 증빙 데이터를 월간 단위로 요약" },
  { competency: "금액 데이터 정리", status: "활용 가능", description: "금액, 비율, 증감률 등 숫자 데이터 정렬" },
  { competency: "거래처별 데이터 정리", status: "활용 가능", description: "거래처별 매출·비용 내역 구분" },
  { competency: "비용 항목 분류", status: "활용 가능", description: "외주비, 제작비, 소모품비 등 비용 항목 정리" }
];

export const excelDataHighlights = [
  "Excel과 피벗 테이블을 활용해 데이터를 분류하고, 항목별 합계와 요약표를 구성할 수 있습니다.",
  "전산회계·세무 직무에서 필요한 금액, 날짜, 거래처, 증빙 데이터를 정확하게 정리하는 역량을 강화하고 있습니다."
];

export const toolsIntro = "회계 데이터 정리와 디자인 업계 이해에 필요한 도구 활용 경험을 보유하고 있습니다.";

export const dataOfficeTools: ToolRow[] = [
  { tool: "Excel", status: "활용 가능", description: "데이터 정리, 함수, 피벗 테이블 활용" },
  { tool: "Google Sheets", status: "활용 가능", description: "협업 기반 표 정리 및 데이터 관리" },
  { tool: "Notion", status: "활용 가능", description: "자료 정리, 포트폴리오 관리" },
  { tool: "PDF Report", status: "활용 가능", description: "정리된 내용을 문서 형태로 구성" },
  { tool: "ERP", status: "업무 흐름 이해", description: "ERP 기반 데이터 입력·조회 구조 이해" }
];

export const designTools: ToolRow[] = [
  { tool: "Figma", status: "활용 가능", description: "화면 구성 및 디자인 자료 이해" },
  { tool: "Rhino", status: "활용 가능", description: "3D 디자인 작업 흐름 이해" },
  { tool: "3D CAD", status: "활용 가능", description: "제품·디자인 구조 이해" },
  { tool: "Fusion 360", status: "활용 가능", description: "3D 모델링 및 제작 프로세스 이해" },
  { tool: "Adobe Photoshop", status: "활용 가능", description: "이미지 편집 및 디자인 산출물 이해" },
  { tool: "Adobe Illustrator", status: "활용 가능", description: "벡터 그래픽 및 디자인 자료 이해" },
  { tool: "Adobe InDesign", status: "활용 가능", description: "편집 디자인 및 문서 레이아웃 이해" }
];

export const designToolNote =
  "디자인 툴 경험은 회계 역량 자체가 아니라, 디자인 회사의 업무 흐름과 프로젝트 구조를 이해하는 보조 역량으로 활용됩니다.";

export const certificationIntro = "보유 자격증과 전산회계·세무 관련 준비 항목을 구분하여 정리했습니다.";

export const ownedCertifications: CertificationRow[] = [
  { category: "Office", name: "컴퓨터활용능력 2급", status: "보유", connection: "Excel 기반 데이터 정리 및 문서 처리" },
  { category: "Design", name: "GTQ 일러스트", status: "보유", connection: "디자인 자료 및 시각 자료 이해" },
  { category: "Design", name: "포토샵", status: "보유", connection: "이미지 편집 및 디자인 산출물 이해" },
  { category: "Design", name: "인디자인 1급", status: "보유", connection: "편집 디자인 및 문서 레이아웃 이해" }
];

export const plannedCertifications: CertificationRow[] = [
  { category: "Accounting", name: "전산회계 1급", status: "상태 입력", connection: "회계 기초, 전표 처리, 장부 흐름 이해" },
  { category: "Tax", name: "전산세무 2급", status: "상태 입력", connection: "부가세, 원천세, 세무 기초 이해" },
  { category: "Accounting", name: "FAT 1급", status: "상태 입력", connection: "회계 정보 처리 및 실무 기초" },
  { category: "Tax", name: "TAT 2급", status: "상태 입력", connection: "세무 정보 처리 및 신고 흐름 이해" }
];

export const certificationStatusRules = [
  "이미 취득한 자격증: 보유",
  "공부 중인 자격증: 학습 중",
  "시험 준비 중인 자격증: 준비 중",
  "취득 계획이 있는 자격증: 취득 예정",
  "아직 확정되지 않은 항목: 상태 입력"
];

export const designIndustryIntro =
  "디자인 전공과 디자인 툴 경험을 바탕으로 디자인 회사의 프로젝트 비용 구조를 이해할 수 있습니다. 이는 전산회계·세무 직무에서 외주비, 제작비, 소재비, 라이선스 비용 등을 정리하는 데 연결될 수 있습니다.";

export const designIndustryRows: IndustryInsightRow[] = [
  { topic: "디자인 프로젝트 흐름 이해", description: "기획, 제작, 산출물 관리까지 이어지는 프로젝트 구조 이해" },
  { topic: "외주 디자이너 정산 이해", description: "외주 작업, 검수, 지급, 증빙 흐름 이해" },
  { topic: "제작비 구조 이해", description: "제품 제작, 샘플 제작, 촬영, 출력 등 비용 구조 이해" },
  { topic: "소재비 흐름 이해", description: "원단, 부자재, 샘플 제작 관련 비용 흐름 이해" },
  { topic: "라이선스 비용 이해", description: "폰트, 이미지, 디자인 소스 등 라이선스 비용 이해" },
  { topic: "인쇄비/촬영비 이해", description: "포트폴리오, 룩북, 홍보물 제작 비용 구조 이해" },
  { topic: "디자인 산출물 관리 이해", description: "이미지, 편집물, 3D 작업물 등 산출물 관리 흐름 이해" }
];

export const designIndustryNote =
  "디자인 기반 경험을 바탕으로 디자인 회사의 프로젝트 단위 비용, 외주비, 제작비, 라이선스 비용 등 실무에서 발생하는 비용 구조를 이해할 수 있습니다.";

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Accounting Learning",
    icon: ClipboardCheck,
    skills: ["전표 처리", "매출·매입 구분", "계정과목 분류", "증빙 관리", "부가가치세", "원천세"]
  },
  {
    title: "Excel Data Handling",
    icon: TrendingUp,
    skills: ["Excel", "VLOOKUP", "Pivot Table", "데이터 정리", "월간 리포트", "금액 데이터", "거래처별 데이터"]
  },
  {
    title: "Data / Office Tools",
    icon: FileSpreadsheet,
    skills: ["Excel", "Google Sheets", "Notion", "PDF Report", "ERP"]
  },
  {
    title: "Design Tools",
    icon: ClipboardCheck,
    skills: ["Figma", "Rhino", "3D CAD", "Fusion 360", "Photoshop", "Illustrator", "InDesign"]
  }
];

export type CertificateStatus = "취득 예정" | "학습 중" | "활용 가능" | "정리 예정";

export type CertificateItem = {
  id: string;
  title: string;
  status: CertificateStatus;
  description: string;
  details: string[];
};

export const certificateItems: CertificateItem[] = [
  {
    id: "accounting-1",
    title: "전산회계 1급",
    status: "취득 예정",
    description: "회계 기본기와 전표 처리 흐름을 포트폴리오에 반영하기 위한 학습 항목입니다.",
    details: ["취득 여부는 실제 상태에 맞게 수정 필요", "전표 입력, 결산 기초, 부가세 흐름 중심으로 정리"]
  },
  {
    id: "tax-2",
    title: "전산세무 2급",
    status: "학습 중",
    description: "원천세, 부가세, 정산 관련 세무 기본 용어를 디자인 프로젝트 비용 흐름과 연결합니다.",
    details: ["원천세 처리 여부 확인", "세금계산서와 비용 증빙의 차이 정리", "실제 취득 전에는 학습 중으로 표기"]
  },
  {
    id: "excel",
    title: "Excel 실무",
    status: "활용 가능",
    description: "프로젝트별 비용과 월간 리포트를 정리하기 위한 기본 데이터 처리 역량입니다.",
    details: ["SUMIFS, XLOOKUP, Pivot Table", "조건부 서식으로 지급 상태 관리", "월별 매출·비용 요약표 구성"]
  },
  {
    id: "design-business-finance",
    title: "Design Business Finance",
    status: "학습 중",
    description: "디자인 산업의 프로젝트 비용 구조와 외주 정산 흐름을 학습하는 항목입니다.",
    details: ["외주비, 라이선스, 촬영비, 인쇄비 분류", "Creative Workflow와 비용 발생 시점 연결", "프로젝트 리포트 구조 설계"]
  },
  {
    id: "experience",
    title: "기타 직무 관련 경험",
    status: "정리 예정",
    description: "실제 경험이 있다면 지원 전 사실 기반으로 추가합니다.",
    details: ["허위 경력 작성 금지", "경험명, 기간, 역할, 산출물을 실제 내용으로 교체", "개인정보 노출 여부 확인"]
  }
];

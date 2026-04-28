export type LanguageLevel = "능통" | "중간" | "초급";

export type LanguageItem = {
  id: string;
  name: string;
  level: LanguageLevel;
};

export const languageItems: LanguageItem[] = [
  {
    id: "korean",
    name: "한국어",
    level: "능통"
  },
  {
    id: "english",
    name: "영어",
    level: "중간"
  },
  {
    id: "japanese",
    name: "일본어",
    level: "초급"
  }
];

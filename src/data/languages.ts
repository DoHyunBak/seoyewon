export type LanguageLevel = "Native" | "Intermediate" | "Basic";

export type LanguageItem = {
  id: string;
  name: string;
  level: LanguageLevel;
};

export const languageItems: LanguageItem[] = [
  {
    id: "korean",
    name: "Korean",
    level: "Native"
  },
  {
    id: "english",
    name: "English",
    level: "Intermediate"
  },
  {
    id: "japanese",
    name: "Japanese",
    level: "Basic"
  }
];

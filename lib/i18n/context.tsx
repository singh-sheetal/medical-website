"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { en } from "./en";
import { de } from "./de";
import type { Translations } from "./en";

type Lang = "en" | "de";

interface I18nContextType {
  lang: Lang;
  t: Translations;
  toggle: () => void;
}

const I18nContext = createContext<I18nContextType>({
  lang: "en",
  t: en,
  toggle: () => {},
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const toggle = () => setLang((l) => (l === "en" ? "de" : "en"));
  const t = lang === "en" ? en : de;

  return (
    <I18nContext.Provider value={{ lang, t, toggle }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}

"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type View = "home" | "privacy" | "imprint" | "gdpr";

interface ViewContextType {
  view: View;
  setView: (v: View) => void;
}

const ViewContext = createContext<ViewContextType>({
  view: "home",
  setView: () => {},
});

export function ViewProvider({ children }: { children: ReactNode }) {
  const [view, setView] = useState<View>("home");

  function handleSetView(v: View) {
    setView(v);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <ViewContext.Provider value={{ view, setView: handleSetView }}>
      {children}
    </ViewContext.Provider>
  );
}

export function useView() {
  return useContext(ViewContext);
}

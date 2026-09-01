"use client";

import { useState, useEffect } from "react";
import { DemoForm } from "@/components/ui/DemoForm";

// Global event name
export const OPEN_DEMO_FORM_EVENT = "open-demo-form";

// Helper to trigger the form from anywhere
export function openDemoForm() {
  window.dispatchEvent(new CustomEvent(OPEN_DEMO_FORM_EVENT));
}

// Single global instance of the form — mounted in layout
export function GlobalDemoForm() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handler() { setOpen(true); }
    window.addEventListener(OPEN_DEMO_FORM_EVENT, handler);
    return () => window.removeEventListener(OPEN_DEMO_FORM_EVENT, handler);
  }, []);

  return <DemoForm isOpen={open} onClose={() => setOpen(false)} />;
}

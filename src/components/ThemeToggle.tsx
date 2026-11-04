"use client";

import { useEffect, useSyncExternalStore } from "react";

const subscribe = (onChange: () => void) => {
  window.addEventListener("course-theme-change", onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener("course-theme-change", onChange);
    window.removeEventListener("storage", onChange);
  };
};
const getSnapshot = () => window.localStorage.getItem("opencode-theme") === "dark" ? "dark" : "light";
const getServerSnapshot = () => "light";

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    window.localStorage.setItem("opencode-theme", next);
    window.dispatchEvent(new Event("course-theme-change"));
    document.documentElement.dataset.theme = next;
  }

  return (
    <button className="theme-button" type="button" onClick={toggleTheme} aria-label={theme === "dark" ? "تفعيل المظهر الفاتح" : "تفعيل المظهر الداكن"} title="تبديل المظهر">
      {theme === "dark" ? "☀" : "☾"}
    </button>
  );
}

import React, { useState, useEffect } from "react";
import useDarkSide from "../hooks/useDarkSide";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function Navbar() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="flex flex-row-reverse p-5 bg-slate-500 dark:bg-slate-900">
      <DarkModeSwitch onChange={handleThemeSwitch} color="white"/>
    </div>
  );
}

// src/components/ThemeSwitcher.jsx
import React, { useEffect } from "react";
import { Sun, SunMoon } from "lucide-react";
import useThemeStore from "./Theme";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useThemeStore();
  const isDarkMode = theme === "dark";

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div
      className="rounded-full bg-transparent"
      onClick={toggleTheme}>
      {isDarkMode ? (
        <Sun className="cursor-pointer" size={30} />
      ) : (
        <SunMoon className="cursor-pointer" size={30} />
      )}
    </div>
  );
};

export default ThemeSwitcher;

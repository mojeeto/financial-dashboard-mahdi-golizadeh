import React, { useEffect, useState } from "react";
import MoonIcon from "./Icons/MoonIcon";
import SunIcon from "./Icons/SunIcon";

const themes = ["light", "dark"];

const ToggleTheme: React.FC = () => {
  const [theme, setTheme] = useState(() => {
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    return "light";
  });
  const [isMount, setMountState] = useState<boolean>(false);

  const toggleTheme = () => {
    const t = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", t);
    setTheme(t);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
  }, [theme]);

  useEffect(() => {
    setMountState(true);
  }, []);

  return isMount ? (
    <div
      className="flex items-center bg-[#F0F5F3] p-1 rounded-xl gap-2 border-gray-200 border-[1.5px] cursor-pointer dark:bg-[#232323] dark:border-[#4c4c4c]"
      onClick={toggleTheme}
    >
      {themes.map((mode, index) => {
        return (
          <div
            key={index}
            className={`border-[1px] rounded-lg p-0.5 dark:bg-[#232323] ${mode === theme
              ? "border-gray-200 dark:border-[#4c4c4c] bg-white text-emerald-500"
              : "border-transparent text-gray-400"
              }`}
          >
            {mode === "light" ? (
              <SunIcon
                className="p-0.5"
                type={theme === "light" ? "solid" : "outline"}
              />
            ) : (
              <MoonIcon
                className="p-0.5"
                type={theme === "dark" ? "solid" : "outline"}
              />
            )}
          </div>
        );
      })}
    </div>
  ) : (
    <div />
  );
};

export default ToggleTheme;

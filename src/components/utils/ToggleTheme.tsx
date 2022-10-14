import React, { useState } from "react";
import MoonIcon from "./Icons/MoonIcon";
import SunIcon from "./Icons/SunIcon";

const themes = ["light", "dark"];

const ToggleTheme: React.FC = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const t = theme === "light" ? "dark" : "light";
    setTheme(t);
  };

  return (
    <div
      className="flex items-center bg-[#F0F5F3] p-1 rounded-xl gap-2 border-gray-200 border-[1.5px] cursor-pointer"
      onClick={toggleTheme}
    >
      {themes.map((mode, index) => {
        return (
          <div
            key={index}
            className={`border-[1px] rounded-lg p-0.5 ${mode === theme
              ? "border-gray-200 bg-white text-emerald-500"
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
  );
};

export default ToggleTheme;

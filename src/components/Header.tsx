import React from "react";
import SearchInput from "./utils/SearchInput";
import ToggleTheme from "./utils/ToggleTheme";

const Header: React.FC = () => {
  return (
    <div className="flex justify-between p-5 border-b-2 border-b-gray-200 dark:bg-[#020B08] dark:border-[#4c4c4c]">
      <h1 className="text-3xl font-bold text-gray-700 dark:text-gray-100">
        Dashboard
      </h1>
      <div className="flex gap-2">
        <SearchInput />
        <ToggleTheme />
      </div>
    </div>
  );
};

export default Header;

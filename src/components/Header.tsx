import React from "react";
import SearchInput from "./utils/SearchInput";
import ToggleTheme from "./utils/ToggleTheme";

const Header: React.FC = () => {
  return (
    <div className="flex justify-between p-5">
      <h1 className="text-3xl font-bold text-gray-700">Dashboard</h1>
      <div className="flex gap-2">
        <SearchInput />
        <ToggleTheme />
      </div>
    </div>
  );
};

export default Header;

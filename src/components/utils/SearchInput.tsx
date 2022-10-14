import React from "react";
import AdjustmentsIcon from "./Icons/AdjustmentsIcon";
import SearchIcon from "./Icons/SearchIcon";

const SearchInput: React.FC = () => {
  return (
    <div className="flex items-center px-2 md:px-3 md:py-1 border-[1.5px] border-gray-200 rounded-lg md:w-[300px] bg-[#F0F5F3] dark:bg-[#232323] dark:border-[#4c4c4c]">
      <div className="flex gap-2 items-center flex-1">
        <SearchIcon className="text-gray-400 dark:text-gray-200" />
        <input
          type="text"
          placeholder="Search..."
          className="placeholder:text-sm text-gray-800 outline-none bg-transparent hidden md:inline-block dark:text-gray-200"
        />
      </div>
      <div className="md:flex gap-2 items-center hidden">
        <div className="h-3 w-[1.5px] bg-gray-300"></div>
        <div className="cursor-pointer hover:bg-gray-200 dark:hover:bg-[#4c4c4c] rounded-full transition-colors p-1">
          <AdjustmentsIcon className="text-gray-400 dark:text-gray-200" />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;

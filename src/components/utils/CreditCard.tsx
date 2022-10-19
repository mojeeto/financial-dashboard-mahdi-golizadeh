import React from "react";
import MasterCardLogo from "./MasterCardLogo";

const CreditCard: React.FC = () => {
  return (
    <div className="w-full bg-gray-100 rounded-t-xl flex flex-col pt-4 pb-3 dark:bg-[#232323]">
      <div className="h-7 bg-zinc-300 dark:bg-[#4c4c4c]"></div>
      <div className="flex items-center justify-between px-5 ">
        <span className="text-zinc-600 dark:text-zinc-300">6756</span>
        <MasterCardLogo />
      </div>
    </div>
  );
};

export default CreditCard;

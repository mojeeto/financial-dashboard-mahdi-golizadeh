import React from "react";
import DotsIcon from "./Icons/DotsIcon";

interface BoxOverviewProps {
  title: string;
  price: number;
  image: React.ReactNode;
}

const BoxOverview: React.FC<BoxOverviewProps> = ({ title, price, image }) => {
  return (
    <div className="bg-emerald-50 dark:bg-emerald-200 border-[1px] border-gray-200 dark:border-[#4c4c4c] rounded-2xl flex lg:flex-col p-5 w-full items-center lg:items-start justify-between dark:text-black lg:gap-12">
      <div className="flex items-center justify-between lg:w-full lg:gap-20">
        <div className="p-2 border-[1px] border-gray-200 rounded-lg bg-white text-emerald-400">
          {image}
        </div>
        <div className="text-zinc-400 cursor-pointer hidden lg:block dark:text-black">
          <DotsIcon className="w-5 h-5" />
        </div>
      </div>
      <div className="flex lg:flex-col items-center lg:items-start justify-evenly w-full lg:w-auto lg:justify-start font-bold">
        <span className="text-sm sm:text-xl lg:text-sm">{title}</span>
        <span className="text-base sm:text-2xl">
          <span className="text-emerald-400">$</span>
          {Intl.NumberFormat("en-US", { maximumSignificantDigits: 3 }).format(
            price
          )}
        </span>
      </div>
      <div className="text-zinc-400 cursor-pointer block lg:hidden dark:text-black">
        <DotsIcon className="w-5 h-5" />
      </div>
    </div>
  );
};

export default BoxOverview;

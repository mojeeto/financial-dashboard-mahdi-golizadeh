import React from "react";
import ChartBar from "./ChartBar";

const OverviewChart: React.FC = () => {
  return (
    <div className="flex flex-col bg-white border-2 border-gray-200 rounded-lg p-5 w-full gap-5 dark:bg-[#232323] dark:border-[#4c4c4c]">
      <div className="flex justify-between items-center">
        <h3 className="text-3xl font-bold">Overview</h3>
        <select className="outline-none cursor-pointer border-[1px] border-zinc-300 rounded-lg p-2 text-sm text-zinc-400 dark:bg-[#232323] dark:text-zinc-200">
          <option>Monthly (2022)</option>
        </select>
      </div>
      <ChartBar />
    </div>
  );
};

export default OverviewChart;

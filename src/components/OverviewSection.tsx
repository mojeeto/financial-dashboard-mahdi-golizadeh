import React from "react";
import OverviewCards from "./utils/OverviewCards";
import OverviewChart from "./utils/OverviewChart";

const OverviewSection: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-5">
      <OverviewChart />
      <OverviewCards />
    </div>
  );
};

export default OverviewSection;

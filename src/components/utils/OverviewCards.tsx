import React from "react";
import BoxOverview from "./BoxOverview";
import { AnalysIcon } from "./Icons/ChartIcons";
import DownloadIcon from "./Icons/DownloadIcon";
import SaveIcon from "./Icons/SaveIcon";
import UploadIcon from "./Icons/UploadIcon";

const OverviewCards: React.FC = () => {
  return (
    <div className="flex flex-wrap bg-white border-2 border-gray-200 rounded-lg p-5 dark:bg-[#232323] dark:border-[#4c4c4c] justify-evenly">
      <BoxOverview title="Balance" price={42432} image={<AnalysIcon />} />
      <BoxOverview title="Saving" price={123624} image={<SaveIcon />} />
      <BoxOverview title="Income" price={16322} image={<DownloadIcon />} />
      <BoxOverview title="Outcome" price={1423} image={<UploadIcon />} />
    </div>
  );
};

export default OverviewCards;

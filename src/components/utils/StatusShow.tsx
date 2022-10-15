import React from "react";

interface StatusShowProps {
  status: "Active" | "Disable";
}

const StatusShow: React.FC<StatusShowProps> = ({ status }) => {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`w-1 h-1 rounded-full ${status === "Active"
          ? "bg-emerald-500 shadow-sm shadow-emerald-500"
          : "bg-zinc-500"
          }`}
      ></div>
      <span className="text-sm">{status}</span>
    </div>
  );
};

export default StatusShow;

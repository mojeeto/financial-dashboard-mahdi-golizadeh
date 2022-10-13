import { BaseProps } from "components/consts/interface";
import Sidebar from "components/Sidebar";
import React from "react";

const MainLayout: React.FC<BaseProps> = ({ className = "", children }) => {
  return (
    <main className={`flex ${className}`}>
      <Sidebar />
      <div className="ml-20">{children}</div>
    </main>
  );
};

export default MainLayout;

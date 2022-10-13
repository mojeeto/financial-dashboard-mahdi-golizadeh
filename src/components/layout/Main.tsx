import { BaseProps } from "components/consts/interface";
import Sidebar from "components/Sidebar";
import React from "react";

const MainLayout: React.FC<BaseProps> = ({ className = "", children }) => {
  return (
    <main className={`flex flex-col lg:flex-row ${className}`}>
      <Sidebar />
      <div className="lg:ml-20">{children}</div>
    </main>
  );
};

export default MainLayout;

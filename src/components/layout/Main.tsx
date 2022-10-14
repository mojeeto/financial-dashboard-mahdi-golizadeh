import { BaseProps } from "components/consts/interface";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import React from "react";

const MainLayout: React.FC<BaseProps> = ({ className = "", children }) => {
  return (
    <main className={`flex flex-col lg:flex-row ${className}`}>
      <Sidebar />
      <div className="lg:ml-20 flex flex-col w-full">
        <Header />
        {children}
      </div>
    </main>
  );
};

export default MainLayout;

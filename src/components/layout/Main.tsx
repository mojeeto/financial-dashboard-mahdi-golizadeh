import { BaseProps } from "components/consts/interface";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import React from "react";

const MainLayout: React.FC<BaseProps> = ({ className = "", children }) => {
  return (
    <main className={`flex flex-col lg:flex-row`}>
      <Sidebar />
      <div className="lg:ml-20 flex flex-col w-full">
        <Header />
        <div
          className={`bg-[#F2F4F3] dark:bg-[#232323] dark:text-gray-100 p-5 ${className}`}
        >
          {children}
        </div>
      </div>
    </main>
  );
};

export default MainLayout;

import { BaseProps } from "components/consts/interface";
import SliderMenu from "components/SliderMenu";
import React from "react";

const MainLayout: React.FC<BaseProps> = ({ className, children }) => {
  return (
    <main className={`flex ${className}`}>
      <SliderMenu />
      <div>{children}</div>
    </main>
  );
};

export default MainLayout;

import React from "react";
import Card from "./utils/Card";

const Cards: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 relative">
      <div className="flex items-center justify-between">
        <div className="flex gap-3">
          <h2 className="text-xl">Your Cards</h2>
          <span className="text-xs text-gray-400 align-text-bottom self-end">
            3 Active Cards
          </span>
        </div>
        <a href="#see-all" className="text-gray-500 text-sm">
          See All
        </a>
      </div>
      <div className="flex gap-8">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Cards;

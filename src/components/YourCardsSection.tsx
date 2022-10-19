import React, { useEffect, useRef } from "react";
import Card from "./utils/Card";

const YourCardsSection: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardsRef.current && parentRef.current) {
      const cardsRefHeight = cardsRef.current.clientHeight;
      const parentRefHeight = parentRef.current.clientHeight;
      parentRef.current.style.height = `${cardsRefHeight + parentRefHeight + 16
        }px`;
      const parentRefWidth = parentRef.current.clientWidth;
      cardsRef.current.style.maxWidth = `${parentRefWidth}px`;
    }
  }, []);

  return (
    <div className="relative overflow-hidden" ref={parentRef}>
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
      <div
        className="flex gap-8 absolute bottom-0 overflow-scroll scrollbar-hide mt-4"
        ref={cardsRef}
      >
        <Card status="Active" />
        <Card status="Active" />
        <Card status="Active" />
        <Card status="Disable" />
      </div>
    </div>
  );
};

export default YourCardsSection;

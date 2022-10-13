import React from "react";

export interface BaseProps {
  children?: React.ReactNode;
  className?: string;
}

export interface BasePropsIcon extends BaseProps {
  type?: "solid" | "outline";
}

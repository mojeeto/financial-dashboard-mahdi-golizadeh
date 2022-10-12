import React from "react";
import { BaseProps } from "./interface";

export type ReactFunctionComponent<T extends BaseProps = BaseProps> =
  React.FC<T>;

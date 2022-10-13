import React from "react";
import { MenuItems } from "./constants";
import { BaseProps, BasePropsIcon } from "./interface";

export type ReactFunctionComponent<T extends BaseProps = BaseProps> =
  React.FC<T>;

export type IconFunctionComponent<T extends BasePropsIcon = BasePropsIcon> =
  React.FC<T>;

export type MenuItemsIds = typeof MenuItems.ids[number];

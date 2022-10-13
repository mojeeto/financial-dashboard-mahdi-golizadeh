import { createAction } from "@reduxjs/toolkit";
import { MenuItemsIds } from "components/consts/types";

export const setActiveItemMenu = createAction<MenuItemsIds>("ACTIVE_ITEM_MENU");

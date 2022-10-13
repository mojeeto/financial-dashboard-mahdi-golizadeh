import { createReducer } from "@reduxjs/toolkit";
import { MenuItemsIds } from "components/consts/types";
import { setActiveItemMenu } from "../actions/MenuHandler";

export default createReducer<MenuItemsIds>("home", {
  [setActiveItemMenu.type]: (_, action) => {
    return action.payload;
  },
});

import { combineReducers } from "@reduxjs/toolkit";
import ActiveMenuItemReducer from "./ActiveMenuItemReducer";

export default combineReducers({
  activeMenuItem: ActiveMenuItemReducer,
});

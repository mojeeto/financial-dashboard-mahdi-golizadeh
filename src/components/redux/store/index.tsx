import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import RootReducer from "../reducers/RootReducer";

const ReduxStore = configureStore({ reducer: RootReducer });

export type RootState = ReturnType<typeof ReduxStore.getState>;

export type AppDispatch = typeof ReduxStore.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default ReduxStore;

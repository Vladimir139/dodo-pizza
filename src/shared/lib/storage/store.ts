import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "@features/ChangeTheme/model/slice";
import { cartSlice } from "@features/CardOfCart/model/slice";

const rootReducer = combineReducers({
  themeChange: themeSlice.reducer,
  cart: cartSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type TypeRootState = ReturnType<typeof rootReducer>;

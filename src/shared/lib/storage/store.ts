import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "@features/ChangeTheme/model/slice";

const rootReducer = combineReducers({
  themeChange: themeSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type TypeRootState = ReturnType<typeof rootReducer>;

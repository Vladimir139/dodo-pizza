import { createSlice } from "@reduxjs/toolkit";
import { IThemeSlice } from "./types";

const initialState: IThemeSlice = {
  theme: "light",
};

export const themeSlice = createSlice({
  name: "themeChange",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

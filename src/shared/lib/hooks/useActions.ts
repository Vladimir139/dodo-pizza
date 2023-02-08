import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { themeSlice } from "@features/ChangeTheme/model/slice";
import { cartSlice } from "@features/CardOfCart/model/slice";

const rootAction = {
  ...themeSlice.actions,
  ...cartSlice.actions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootAction, dispatch), [dispatch]);
};

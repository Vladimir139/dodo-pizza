import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { themeSlice } from "@features/ChangeTheme/model/slice";

const rootAction = {
  ...themeSlice.actions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootAction, dispatch), [dispatch]);
};

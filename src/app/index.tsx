import React, { FC } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "@shared/lib/theme";
import { Global } from "@shared/lib/styles/global";
import { useTypedSelector } from "@shared/lib/hooks/useTypedSelector";

export const App: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useTypedSelector((state) => state.themeChange);
  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <Global />
      {children}
    </ThemeProvider>
  );
};

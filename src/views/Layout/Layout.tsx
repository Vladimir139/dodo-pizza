import React, { FC } from "react";
import { ILayout } from "@views/Layout/types";
import { Header } from "@widgets/header/media/HeaderDesktop";

export const Layout: FC<ILayout> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

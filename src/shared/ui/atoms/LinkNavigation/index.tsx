import React, { FC } from "react";
import * as S from "./style";
import { LinkNavigationProps } from "./types";

export const LinkNavigation: FC<LinkNavigationProps> = ({ Title, href }) => {
  return <S.LinkNavigation href={href || ""}>{Title}</S.LinkNavigation>;
};

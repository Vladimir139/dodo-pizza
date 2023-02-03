import React, { FC } from "react";
import { LogoProps } from "./types";
import * as S from "./style";

export const Logo: FC<LogoProps> = ({ size, href, white }) => {
  return <S.Logo size={size} href={href} white={white}></S.Logo>;
};

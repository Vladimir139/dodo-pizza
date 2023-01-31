import React, { FC } from "react";
import { LogoProps } from "./types";
import * as S from "./style";

export const Logo: FC<LogoProps> = ({ large, small, href, white }) => {
  return (
    <S.Logo large={large} small={small} href={href} white={white}></S.Logo>
  );
};

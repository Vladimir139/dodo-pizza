import React, { FC } from "react";
import { ButtonProps } from "./types";
import * as S from "./style";

export const Button: FC<ButtonProps> = ({ size, onClick, color, children }) => {
  return (
    <S.Button size={size} onClick={onClick} color={color}>
      {children}
    </S.Button>
  );
};

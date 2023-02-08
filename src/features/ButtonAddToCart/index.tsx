import React, { FC } from "react";
import * as S from "./style";
import { ButtonAddToCartProps } from "./types";

export const ButtonAddToCart: FC<ButtonAddToCartProps> = ({
  children,
  onCLick,
}) => {
  return <S.ButtonAddToCart onClick={onCLick}>{children}</S.ButtonAddToCart>;
};

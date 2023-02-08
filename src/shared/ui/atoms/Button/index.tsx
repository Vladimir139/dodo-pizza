import React, { FC } from "react";
import { ButtonProps } from "./types";
import * as S from "./style";

export const Button: FC<ButtonProps> = ({
  size,
  onClick,
  disabled,
  color,
  children,
  type,
}) => {
  return (
    <S.Button
      size={size}
      onClick={onClick}
      color={color}
      disabled={disabled}
      type={type}
    >
      {children}
    </S.Button>
  );
};

import React, { FC } from "react";
import * as S from "./style";
import { ButtonAuthProps } from "./types";

export const ButtonAuth: FC<ButtonAuthProps> = ({
  isDisabled,
  onClick,
  children,
  type,
}) => {
  return (
    <S.ButtonAuth isDisabled={isDisabled} onClick={onClick} type={type}>
      {children}
    </S.ButtonAuth>
  );
};

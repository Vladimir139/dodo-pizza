import React, { FC } from "react";
import * as S from "./style";
import { UpButtonProps } from "@shared/ui/atoms/UpButton/types";

export const UpButton: FC<UpButtonProps> = ({ onCLick, children }) => {
  return <S.UpButton onClick={onCLick}>{children}</S.UpButton>;
};

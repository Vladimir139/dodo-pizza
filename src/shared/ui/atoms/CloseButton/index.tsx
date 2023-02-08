import React, { FC } from "react";
import * as S from "./style";
import { CloseButtonProps } from "./types";

export const CloseButton: FC<CloseButtonProps> = ({
  onClick,
  sidebarButton,
}) => {
  return (
    <S.CloseButton
      onClick={onClick}
      sidebarButton={sidebarButton}
    ></S.CloseButton>
  );
};

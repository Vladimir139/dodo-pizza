import React, { FC, useState } from "react";
import * as S from "./style";

export const DropdownWindowHeader: FC<{ isOpened?: boolean }> = ({
  isOpened,
}) => {
  return (
    <S.DropdownWindowHeader isOpened={isOpened}>
      <p>Dropdown window</p>
    </S.DropdownWindowHeader>
  );
};

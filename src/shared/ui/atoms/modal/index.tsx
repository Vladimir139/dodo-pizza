import React, { FC, useEffect } from "react";

import * as S from "./style";
import { ModalProps } from "@shared/ui/atoms/modal/types";

export const Modal: FC<ModalProps> = ({ children, isOpened, handleClose }) => {
  useEffect(() => {
    if (isOpened) {
      document.body.style.overflow = "hidden";
      return;
    }

    document.body.style.overflow = "";
  }, [isOpened]);

  return (
    <S.ModalWrapper isOpened={isOpened} onClick={handleClose}>
      {children}
    </S.ModalWrapper>
  );
};

import React, { FC, useEffect, useRef } from "react";
import * as S from "./style";
import { ModalProps } from "./type";

export const Modal: FC<ModalProps> = ({ isOpened, handleClose, children }) => {
  useEffect(() => {
    if (isOpened) {
      document.body.style.overflow = "hidden";

      return;
    }

    document.body.style.overflow = "";
  }, [isOpened]);

  return (
    <S.Modal isOpened={isOpened} onClick={handleClose}>
      {children}
    </S.Modal>
  );
};

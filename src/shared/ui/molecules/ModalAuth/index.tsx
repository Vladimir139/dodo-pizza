import { CloseButton, Modal } from "@shared/ui/atoms";
import React, { FC, useState } from "react";
import { ButtonCloseWrapper } from "@shared/ui/molecules/ModalAuth/style";
import * as S from "./style";
import { ModalProps } from "@shared/ui/atoms/modal/types";
import { AuthNumberForm } from "@shared/ui/molecules";

export const ModalAuth: FC<ModalProps> = ({ isOpened, handleClose }) => {
  return (
    <Modal isOpened={isOpened}>
      <S.ModalWrapper onClick={handleClose}>
        <S.ModalContent
          isOpened={isOpened}
          onClick={(event) => event.stopPropagation()}
        >
          <ButtonCloseWrapper>
            <CloseButton onClick={handleClose} />
          </ButtonCloseWrapper>
          <S.WrapperModalInfo>
            <S.ModalTitle>Вход на сайт</S.ModalTitle>
            <S.ModalDescription>
              Подарим подарок на день рождения, сохраним адрес доставки и
              расскажем об акциях
            </S.ModalDescription>
          </S.WrapperModalInfo>
          <AuthNumberForm />
          <S.UserAgreement>
            Продолжая, вы соглашаетесь
            <S.UserAgreementLink href={"/"}>
              &nbsp;со сбором и обработкой персональных данных и
              пользовательским соглашением
            </S.UserAgreementLink>
          </S.UserAgreement>
        </S.ModalContent>
      </S.ModalWrapper>
    </Modal>
  );
};

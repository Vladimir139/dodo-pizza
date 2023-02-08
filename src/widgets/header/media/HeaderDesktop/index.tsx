import React, { FC, useState } from "react";
import * as S from "./style";
import { Container } from "@shared/lib/styles/global";
import { DeliveryInfo, DodoCoin, Navigation } from "@widgets/header/ui";
import { Sidebar } from "@shared/ui/template/sidebar";
import { ModalAuth } from "@shared/ui/molecules";
import { useTypedSelector } from "@shared/lib/hooks/useTypedSelector";

export const Header: FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const onCloseModal = () => {
    setOpenModal((prev) => !prev);
  };

  const onCloseCart = () => {
    setOpenCart((prev) => !prev);
  };

  const cart = useTypedSelector((state) => state.cart);

  return (
    <Container>
      <S.HeaderWrapper>
        <S.TopPart>
          <S.LeftWrapper>
            <S.HeaderLogo href="/" size={"large"} />
            <DeliveryInfo />
          </S.LeftWrapper>
          <S.RightWrapper>
            <DodoCoin />
            <S.ButtonAuth
              color={"gray"}
              size={"small"}
              onClick={() => setOpenModal(true)}
            >
              Войти
            </S.ButtonAuth>
          </S.RightWrapper>
        </S.TopPart>
        <S.BottomPart>
          <Navigation />
          <S.CartButton
            size={"medium"}
            color={"orange"}
            onClick={() => setOpenCart(true)}
          >
            Корзина | {cart.items.length}
          </S.CartButton>
        </S.BottomPart>
      </S.HeaderWrapper>
      <Sidebar isOpened={openCart} handleClose={onCloseCart} />
      <ModalAuth isOpened={openModal} handleClose={onCloseModal}></ModalAuth>
    </Container>
  );
};

import React, { FC } from "react";
import * as S from "./style";
import { Container } from "@shared/lib/styles/global";
import { DeliveryInfo, DodoCoin, Navigation } from "@widgets/header/ui";

export const Header: FC = () => {
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
            <S.ButtonAuth color={"gray"} size={"small"}>
              Войти
            </S.ButtonAuth>
          </S.RightWrapper>
        </S.TopPart>
        <S.BottomPart>
          <Navigation />
          <S.CartButton size={"medium"} color={"orange"}>
            Корзина
          </S.CartButton>
        </S.BottomPart>
      </S.HeaderWrapper>
    </Container>
  );
};

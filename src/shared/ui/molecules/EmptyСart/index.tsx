import React from "react";
import * as S from "./style";

export const EmptyCart = () => {
  return (
    <S.EmptyCart>
      <S.InnerWrapperInfo>
        <S.ImageEmptyCart
          src={
            "https://dodopizza-a.akamaihd.net/site-static/dist/121df529925b0f43cc73.svg"
          }
        />
        <S.TextEmptyCart>
          <S.SloganText>Ой, пусто!</S.SloganText>
          Ваша корзина пуста, откройте «Меню» и выберите понравившийся товар. Мы
          доставим ваш заказ от 549 ₽
        </S.TextEmptyCart>
      </S.InnerWrapperInfo>
    </S.EmptyCart>
  );
};

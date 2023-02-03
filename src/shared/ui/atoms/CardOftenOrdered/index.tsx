import React, { FC } from "react";
import { CardOftenOrderedProps } from "./types";
import * as S from "./style";

export const CardOftenOrdered: FC<CardOftenOrderedProps> = ({
  id,
  title,
  img,
  price,
}) => {
  return (
    <S.CardOftenOrdered>
      <S.ImageCard src={img ? img[0] : ""} />
      <S.WrapperInfoCard>
        <S.Title>{title}</S.Title>
        <S.Price>{price} ₽</S.Price>
      </S.WrapperInfoCard>
    </S.CardOftenOrdered>
  );
};

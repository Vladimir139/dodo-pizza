import React, { FC, useState } from "react";
import { CardOftenOrderedProps } from "./types";
import * as S from "./style";
import { ModalProductItem } from "@shared/ui/molecules";

export const CardOftenOrdered: FC<CardOftenOrderedProps> = ({ product }) => {
  return (
    <>
      <S.CardOftenOrdered>
        <S.ImageCard src={product ? product.img[0] : ""} />
        <S.WrapperInfoCard>
          <S.Title>{product ? product.title : ""}</S.Title>
          <S.Price>{product ? product.price : ""} ₽</S.Price>
        </S.WrapperInfoCard>
      </S.CardOftenOrdered>
    </>
  );
};

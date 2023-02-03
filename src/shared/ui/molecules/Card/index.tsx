import React, { FC } from "react";
import { ProductsProps } from "@shared/lib/types/Products";
import * as S from "./style";
import { Button } from "@shared/ui/atoms";

export const Card: FC<ProductsProps> = ({
  id,
  img,
  title,
  price,
  size,
  category,
  dough,
  isBest,
  isNew,
  requiredIngredients,
  variableIngredients,
  description,
  buttonCart,
}) => {
  return (
    <S.Card key={id}>
      <S.WrapperInfo>
        <S.ImageCard src={img ? img[0] : ""} />
        <S.Title>{title}</S.Title>
        {description ? <S.Description>{description}</S.Description> : ""}
        {requiredIngredients?.length
          ? requiredIngredients.map((item) => {
              return <S.Description>{item}</S.Description>;
            })
          : null}
        {variableIngredients?.length
          ? variableIngredients.map((item) => {
              return <S.Description>{item}</S.Description>;
            })
          : null}
      </S.WrapperInfo>
      <S.InnerWrapperInfo>
        <S.Price>От {price} ₽</S.Price>
        {buttonCart ? (
          <Button size={"medium"} color={"light-orange"}>
            В корзину
          </Button>
        ) : (
          <Button size={"medium"} color={"light-orange"}>
            Выбрать
          </Button>
        )}
      </S.InnerWrapperInfo>
    </S.Card>
  );
};

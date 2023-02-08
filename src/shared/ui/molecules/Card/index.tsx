import React, { FC, useState } from "react";
import { ProductsProps } from "@shared/lib/types/Products";
import * as S from "./style";
import { Button } from "@shared/ui/atoms";
import { ModalProductItem } from "@shared/ui/molecules/ModalProductItem";
import { useActions } from "@shared/lib/hooks/useActions";

export const Card: FC<ProductsProps> = (item) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const compound = item.requiredIngredients?.concat(
    item.variableIngredients || [],
  );

  const { addToCart } = useActions();

  return (
    <>
      <S.Card onClick={() => setOpen(true)}>
        <S.WrapperInfo>
          <S.ImageCard src={item.img ? item.img[0] : ""} />
          <S.Title>{item && item.title}</S.Title>
          {item.description ? (
            <S.Description>{item.description}</S.Description>
          ) : null}
          {compound?.length ? (
            <S.Description>{compound.join(", ")}</S.Description>
          ) : null}
        </S.WrapperInfo>
        <S.InnerWrapperInfo>
          <S.Price>От {item.price} ₽</S.Price>
          {item.buttonCart ? (
            <Button
              size={"medium"}
              color={"light-orange"}
              onClick={(e) => {
                e.stopPropagation();
                addToCart({ product: item, id: item.id, quantity: 1 });
              }}
            >
              В корзину
            </Button>
          ) : (
            <Button
              size={"medium"}
              color={"light-orange"}
              onClick={() => {
                setOpen(true);
              }}
            >
              Выбрать
            </Button>
          )}
        </S.InnerWrapperInfo>
      </S.Card>
      <ModalProductItem isOpened={open} handleClose={handleClose} item={item} />
    </>
  );
};

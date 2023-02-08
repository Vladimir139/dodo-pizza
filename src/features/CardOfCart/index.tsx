import React, { FC } from "react";
import { ProductItemProps } from "@features/CardOfCart/model/types";
import * as S from "./style";
import { VscClose } from "react-icons/Vsc";
import { HiMinus, HiPlusSm } from "react-icons/Hi";
import { useActions } from "@shared/lib/hooks/useActions";
import { useTypedSelector } from "@shared/lib/hooks/useTypedSelector";

export const CardBasket: FC<ProductItemProps> = ({ quantity, product }) => {
  const { removeFromCart, plusQuantity, minusQuantity, getTotalAmount } =
    useActions();
  const cart = useTypedSelector((state) => state.cart);

  const getTotal = () => {
    let totalPrice = 0;
    cart.items.forEach((item) => {
      totalPrice += item.product.price * item.quantity;
    });
    return { totalPrice };
  };

  return (
    <S.CardBasket>
      <S.TopWrapper>
        <S.Image src={product.img ? product.img[0] : ""} />
        <S.ProductInfo>
          <S.NameProduct>{product.title}</S.NameProduct>
          {product.description ? (
            <S.DescriptionProduct>{product.description}</S.DescriptionProduct>
          ) : null}
        </S.ProductInfo>
        <S.RemoveProductButton
          onClick={() => {
            getTotalAmount({ totalAmount: getTotal().totalPrice });
            removeFromCart({ id: product.id });
          }}
        >
          <VscClose size={"16px"} />
        </S.RemoveProductButton>
      </S.TopWrapper>
      <S.LowWrapper>
        <S.PriceProduct>{product.price * quantity} ₽</S.PriceProduct>
        <S.ChangeQuantityWrapper>
          <S.PlusQuantityProduct
            onClick={() => {
              getTotalAmount({ totalAmount: getTotal().totalPrice });
              plusQuantity({ id: product.id });
            }}
          >
            <HiPlusSm size={"10px"} />
          </S.PlusQuantityProduct>
          <S.Quantity>{quantity}</S.Quantity>
          <S.MinusQuantityProduct
            onClick={() => {
              getTotalAmount({ totalAmount: getTotal().totalPrice });
              minusQuantity({ id: product.id });
            }}
          >
            <HiMinus size={"10px"} />
          </S.MinusQuantityProduct>
        </S.ChangeQuantityWrapper>
      </S.LowWrapper>
    </S.CardBasket>
  );
};

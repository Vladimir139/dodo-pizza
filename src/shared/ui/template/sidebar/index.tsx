import React, { FC } from "react";
import { CloseButton, Modal } from "@shared/ui/atoms";
import * as S from "./style";
import { SideBarProps } from "./types";
import { useTypedSelector } from "@shared/lib/hooks/useTypedSelector";
import { CardBasket } from "@features/CardOfCart";
import { EmptyCart } from "@shared/ui/molecules";

export const Sidebar: FC<SideBarProps> = ({ handleClose, isOpened }) => {
  const cart = useTypedSelector((state) => state.cart);

  const getTotal = () => {
    let totalPrice = 0;
    cart.items.forEach((item) => {
      if (item) {
        totalPrice += item.product.price * item.quantity;
      }
    });
    return { totalPrice };
  };

  return (
    <Modal isOpened={isOpened}>
      <S.SidebarWrapper onClick={handleClose}>
        <S.InnerWrapperSidebar isOpened={isOpened}>
          <S.ButtonCloseWrapper onClick={handleClose}>
            <CloseButton onClick={handleClose} sidebarButton />
          </S.ButtonCloseWrapper>
          <S.SidebarContent
            isOpened={isOpened}
            onClick={(event) => event.stopPropagation()}
          >
            {cart.items.length === 0 ? null : (
              <S.SummaryItemsTitle>
                {cart.items.length} товаров на {getTotal().totalPrice}
              </S.SummaryItemsTitle>
            )}
            {cart.items.length === 0 ? (
              <EmptyCart />
            ) : (
              <S.ListItems>
                {cart.items.map((item) => {
                  return (
                    <CardBasket
                      product={item.product}
                      quantity={item.quantity}
                      id={item.id}
                      key={item.product.id}
                    />
                  );
                })}
              </S.ListItems>
            )}
          </S.SidebarContent>
        </S.InnerWrapperSidebar>
      </S.SidebarWrapper>
    </Modal>
  );
};

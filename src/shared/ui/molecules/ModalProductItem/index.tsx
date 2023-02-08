import React, { FC } from "react";
import { CloseButton, Modal } from "@shared/ui/atoms";
import * as S from "./style";
import { ModalProductItemProps } from "@shared/ui/molecules/ModalProductItem/types";
import { VariableIngredients } from "@features/VariableIngredients";
import { ButtonAddToCart } from "@features/ButtonAddToCart";
import { useActions } from "@shared/lib/hooks/useActions";

export const ModalProductItem: FC<ModalProductItemProps> = ({
  isOpened,
  handleClose,
  item,
}) => {
  const { addToCart } = useActions();

  return (
    <Modal isOpened={isOpened}>
      <S.ModalWrapper onClick={handleClose}>
        <S.ModalContent
          key={item && item.id}
          isOpened={isOpened}
          onClick={(event) => event.stopPropagation()}
        >
          <S.ButtonCloseWrapper onClick={handleClose}>
            <CloseButton />
          </S.ButtonCloseWrapper>
          <S.WrapperImage>
            <S.ImageProduct src={item && item.img ? item.img[0] : ""} />
          </S.WrapperImage>

          <S.InfoProductContainer>
            <S.InnerWrapperInfo>
              <S.NameProduct>{(item && item.title) || ""}</S.NameProduct>

              {item && item.variableIngredients?.length
                ? item.variableIngredients.map((item, index) => {
                    return (
                      <VariableIngredients key={index}>
                        {item},&nbsp;
                      </VariableIngredients>
                    );
                  })
                : null}
              {item && item.requiredIngredients?.length
                ? item.requiredIngredients.map((item, index) => {
                    return (
                      <S.RequiredIngredients key={index}>
                        {item},&nbsp;
                      </S.RequiredIngredients>
                    );
                  })
                : null}

              {item && item.description ? (
                <S.Description>{item.description}</S.Description>
              ) : null}

              <S.FormOptionsProduct></S.FormOptionsProduct>
            </S.InnerWrapperInfo>
            <ButtonAddToCart
              onCLick={() =>
                addToCart({ product: item, id: item.id, quantity: 1 })
              }
            >
              Добваить в корзину за {item && item.price}₽
            </ButtonAddToCart>
          </S.InfoProductContainer>
        </S.ModalContent>
      </S.ModalWrapper>
    </Modal>
  );
};

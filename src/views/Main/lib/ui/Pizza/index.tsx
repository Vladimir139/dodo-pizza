import React, { FC } from "react";
import * as S from "./style";
import { Container } from "@shared/lib/styles/global";
import { Products } from "@shared/lib/data/data.products";
import { Card } from "@shared/ui/molecules";

export const ListProduct: FC<{ titleList: string; nameCategory: string }> = ({
  titleList,
  nameCategory,
}) => {
  return (
    <Container>
      <S.TitlePizza id={`${nameCategory}`}>{titleList}</S.TitlePizza>
      <S.ListProduct>
        {Products.filter((item) => item.category === `${nameCategory}`).map(
          (item, index) => {
            return (
              <Card
                category={item.category}
                id={item.id}
                img={item.img}
                price={item.price}
                title={item.title}
                buttonCart={item.buttonCart}
                description={item.description}
                key={item.id}
                variableIngredients={item.variableIngredients}
                requiredIngredients={item.requiredIngredients}
              />
            );
          },
        )}
      </S.ListProduct>
    </Container>
  );
};

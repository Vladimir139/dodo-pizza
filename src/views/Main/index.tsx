import React, { FC } from "react";
import { Container } from "@shared/lib/styles/global";
import * as S from "./style";
import { ListProduct, OftenOrdered } from "./lib/ui";

export const HomePage: FC = () => {
  return (
    <>
      <Container>
        <OftenOrdered />
        <ListProduct titleList={"Пицца"} nameCategory={"pizza"} />
        <ListProduct titleList={"Комбо"} nameCategory={"combo"} />
        <ListProduct titleList={"Закуски"} nameCategory={"snacks"} />
        <ListProduct titleList={"Дeсерты"} nameCategory={"desserts"} />
        <ListProduct titleList={"Напитки"} nameCategory={"drinks"} />
        <ListProduct titleList={"Другие товары"} nameCategory={"otherGoods"} />
      </Container>
    </>
  );
};

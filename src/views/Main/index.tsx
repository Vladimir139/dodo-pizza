import React, { FC } from "react";
import { Container } from "@shared/lib/styles/global";
import * as S from "./style";
import { ListProduct, OftenOrdered } from "./lib/ui";
import { AiOutlineArrowUp } from "react-icons/ai";
import { UpButton } from "@shared/ui/atoms";

export const HomePage: FC = () => {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <UpButton onCLick={scrollUp}>
        <AiOutlineArrowUp size={"30px"} />
      </UpButton>
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

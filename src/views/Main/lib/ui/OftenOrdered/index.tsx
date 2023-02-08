import { Swiper, SwiperSlide } from "swiper/react";
import * as S from "./style";
import React, { FC, useState } from "react";
import { Products } from "@shared/lib/data/data.products";
import { CardOftenOrdered } from "@shared/ui/atoms/CardOftenOrdered";
import "swiper/css";

export const OftenOrdered: FC = () => {
  return (
    <>
      <S.TitleOftenOrdered>Часто заказывают</S.TitleOftenOrdered>
      <S.SwiperContainer>
        <Swiper slidesPerView={"auto"} className={"mySwiper"} effect={"slide"}>
          {Products.filter((item) => item.category === "snacks").map(
            (item, index) => {
              return (
                <SwiperSlide key={index}>
                  <CardOftenOrdered product={item} />
                </SwiperSlide>
              );
            },
          )}
        </Swiper>
      </S.SwiperContainer>
    </>
  );
};

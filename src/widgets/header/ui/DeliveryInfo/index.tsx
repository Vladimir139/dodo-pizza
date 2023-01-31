import React, { FC } from "react";
import * as S from "./style";
import { Dot } from "@shared/ui/atoms";

export const DeliveryInfo: FC = () => {
  return (
    <S.DeliveryInfo>
      <S.DeliveryCity>
        Доставка пиццы <S.StyleNameCity>Москва</S.StyleNameCity>
      </S.DeliveryCity>
      <S.DeliveryTime>
        31 мин <Dot /> 4.8 <S.HeaderStar color={"rgb(255, 210, 0)"} size={18} />
      </S.DeliveryTime>
    </S.DeliveryInfo>
  );
};

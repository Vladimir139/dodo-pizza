import React, { FC, useState } from "react";
import * as S from "./style";
import { Dot } from "@shared/ui/atoms";
import { DropdownWindowHeader } from "@shared/ui/molecules/DropdownWindowHeader";

export const DeliveryInfo: FC = ({}) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const onCloseDropdown = () => {
    setOpenDropdown(false);
  };

  return (
    <>
      <S.DeliveryInfo>
        <S.DeliveryCity>
          Доставка пиццы <S.StyleNameCity>Москва</S.StyleNameCity>
        </S.DeliveryCity>
        <S.DeliveryTime
          onMouseEnter={() => setOpenDropdown(true)}
          onMouseLeave={onCloseDropdown}
        >
          31 мин <Dot /> 4.8{" "}
          <S.HeaderStar color={"rgb(255, 210, 0)"} size={18} />
        </S.DeliveryTime>
        <DropdownWindowHeader isOpened={openDropdown} />
      </S.DeliveryInfo>
    </>
  );
};

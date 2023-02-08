import React, { FC, useState } from "react";
import * as S from "./style";
import { VariableIngredientsProps } from "./types";

export const VariableIngredients: FC<VariableIngredientsProps> = ({
  children,
}) => {
  const [changeIngredients, setChangeIngredients] = useState(false);

  const onChange = () => {
    setChangeIngredients((prev) => !prev);
  };

  return (
    <S.VariableIngredients isChecked={changeIngredients} onClick={onChange}>
      {children}
    </S.VariableIngredients>
  );
};

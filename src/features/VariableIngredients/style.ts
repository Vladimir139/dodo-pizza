import styled, { css } from "styled-components";
import { VariableIngredientsProps } from "./types";

export const VariableIngredients = styled.p<VariableIngredientsProps>`
  border-bottom: 1px dashed rgb(92, 99, 112);
  cursor: pointer;
  outline: none;
  background: transparent;
  font-size: 14px;
  line-height: 20px;
  display: inline;

  ${(props) =>
    props.isChecked &&
    css`
      border-bottom: none;
      text-decoration: line-through;
    `}
`;

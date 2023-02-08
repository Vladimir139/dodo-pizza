import styled, { css } from "styled-components";
import { ButtonAuthProps } from "@shared/ui/atoms/ButtonAuth/types";

export const ButtonAuth = styled.button<ButtonAuthProps>`
  width: 100%;
  display: block;
  height: 48px;
  padding: 12px 24px;
  font-size: 16px;
  line-height: 24px;
  background-color: rgb(255, 105, 0);
  color: rgb(255, 255, 255);
  border-radius: 9999px;
  cursor: pointer;

  ${(props) =>
    props.isDisabled &&
    css`
      background-color: rgb(226, 226, 233);
      color: rgb(171, 173, 186);
      cursor: not-allowed;
    `}
`;

import styled, { css } from "styled-components";
import { DropdownWindowHeaderProps } from "./types";

export const DropdownWindowHeader = styled.div<DropdownWindowHeaderProps>`
  position: absolute;
  top: 50px;
  left: -77%;
  width: 450px;
  height: 300px;
  background-color: #312e2e;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: all 0.1s ease-out;
  z-index: -10;
  border-radius: 10px;
  color: white;

  ${(props) =>
    props.isOpened &&
    css`
      z-index: 110;
      opacity: 1;
    `}
`;

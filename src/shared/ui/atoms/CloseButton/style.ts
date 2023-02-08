import styled, { css } from "styled-components";
import { CloseButtonProps } from "./types";

export const CloseButton = styled.button<CloseButtonProps>`
  transition: all 0.1s ease-in-out 0s;
  border: none;
  background-color: inherit;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  width: 25px;
  height: 25px;

  &:hover {
    transform: scale(1.1);
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 10px;
    width: 100%;
    height: 4px;
    border-radius: 10px;
    background-color: #fff;
    transform: rotate(-45deg);
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 10px;
    width: 100%;
    height: 4px;
    border-radius: 10px;
    background-color: white;
    transform: rotate(45deg);
  }

  ${(props) =>
    props.sidebarButton &&
    css`
      width: 35px;
      height: 35px;

      &::after {
        top: 15px;
      }

      &::before {
        top: 15px;
      }

      &:hover {
        transform: scale(1.1);
      }
    `}
`;

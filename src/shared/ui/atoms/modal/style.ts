import styled, { css } from "styled-components";
import { ModalProps } from "./types";

export const ModalWrapper = styled.div<ModalProps>`
  position: fixed;
  z-index: 1050;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  visibility: hidden;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.64);
  transition: all 0.3s ease-out;
  opacity: 0;

  ${(props) =>
    props.isOpened &&
    css`
      visibility: visible;
      opacity: 1;
    `}
`;

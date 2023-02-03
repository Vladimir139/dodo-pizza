import styled, { css } from "styled-components";
import { ModalProps } from "@shared/ui/atoms/Modal/type";

export const Modal = styled.div<ModalProps>`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  visibility: hidden;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.7);
  cursor: pointer;

  transition: 0.3s;

  ${(props) =>
    props.isOpened &&
    css`
      visibility: visible;
    `}
`;

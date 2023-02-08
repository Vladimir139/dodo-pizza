import styled, { css } from "styled-components";
import { ButtonProps } from "@shared/ui/atoms/Button/types";

export const Button = styled.button<ButtonProps>`
  transition: all 0.4s ease-out;
  border-radius: 9999px;
  cursor: pointer;

  ${(props) =>
    props.size === "small" &&
    css`
      height: 32px;
      padding: 8px 16px;
      font-size: 14px;
      line-height: 16px;
    `}

  ${(props) =>
    props.size === "medium" &&
    css`
      height: 40px;
      padding: 8px 20px;
      font-size: 16px;
      line-height: 24px;
    `}

  ${(props) =>
    props.size === "large" &&
    css`
      height: 48px;
      padding: 12px 24px;
      font-size: 16px;
      line-height: 24px;
    `}

  ${(props) =>
    props.color === "gray" &&
    css`
      background-color: rgb(243, 243, 247);
      color: rgb(92, 99, 112);

      &:hover {
        color: rgb(0, 0, 0);
      }
    `}

  ${(props) =>
    props.color === "orange" &&
    css`
      background-color: ${({ theme }) => theme.color.main};
      color: ${({ theme }) => theme.color.text.primary};

      &:hover {
        background-color: ${({ theme }) => theme.color.hoverMain};
      }
    `}

  ${(props) =>
    props.color === "light-orange" &&
    css`
      background-color: rgb(255, 240, 230);
      color: ${({ theme }) => theme.color.common.primary};

      &:hover {
        background-color: ${({ theme }) => theme.color.common.secondary};
        color: ${({ theme }) => theme.color.common.primary};
      }
    `}

  ${(props) =>
    props.disabled &&
    css`
      width: 100%;
      background-color: rgb(226, 226, 233);
      color: rgb(171, 173, 186);
      cursor: not-allowed;
    `}
`;

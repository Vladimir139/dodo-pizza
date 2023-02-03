import { LogoProps } from "./types";
import Link from "next/link";
import styled, { css } from "styled-components";

export const Logo = styled(Link)<LogoProps>`
  ${(props) =>
    (props.size === "large" &&
      css`
        display: block;
        width: 250px;
        height: 46px;
        background-image: url("/img/Logo/BlackLargeLogo.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
      `) ||
    false}

  ${(props) =>
    props.white &&
    css`
      width: 250px;
      height: 46px;
      background-image: url("/img/Logo/WhiteLargeLogo.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: 113%;
    `}

  ${(props) =>
    props.size === "small" &&
    css`
      width: 36px;
      background-image: url("/img/Logo/small-logo.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    `}
`;

import styled from "styled-components";
import Link from "next/link";
import { LinkProps } from "@shared/lib/types/LinkNavigation";

export const Navigation = styled.nav``;

export const LinksNavigation = styled.ul`
  display: flex;
`;

export const NavLink = styled(Link)`
  display: inline-block;
  font-weight: 500;
  padding: 22px 0px;
  font-size: 14px;
  line-height: 1;
  transition: color 0.25s ease 0s, padding 0.25s ease 0s;
  color: #000;
  margin-left: 20px;

  &.activeClass {
    color: rgb(255, 105, 0);
  }

  &:hover {
    color: rgb(255, 105, 0);
  }

  &:first-child {
    margin-left: 0;
  }
`;

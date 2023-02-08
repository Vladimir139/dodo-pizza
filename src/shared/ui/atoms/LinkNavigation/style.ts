import styled from "styled-components";
import Link from "next/link";
import { LinkNavigationProps } from "@shared/ui/atoms/LinkNavigation/types";

export const LinkNavigation = styled(Link)<LinkNavigationProps>`
  display: block;
  padding: 22px 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 1;
  color: ${({ theme }) => theme.color.text.secondary};
  transition: all 0.25s ease;

  &:hover {
    color: ${({ theme }) => theme.color.main};
  }
`;

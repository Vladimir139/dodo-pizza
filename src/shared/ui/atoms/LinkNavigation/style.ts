import styled from "styled-components";
import Link from "next/link";

export const LinkNavigation = styled(Link)`
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

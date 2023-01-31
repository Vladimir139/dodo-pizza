import styled from "styled-components";
import Link from "next/link";

export const DodoCoin = styled(Link)`
  display: block;
  transition: all 0.4s ease 0s;
  margin-right: 35px;

  &:hover {
    transform: scale(1.1);
  }
`;

export const DodoImage = styled.svg`
  display: block;
  margin: 0 auto;
`;

export const CoinTitle = styled.h3`
  display: block;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.color.main};
  text-align: center;
  transition: color 150ms ease 0s;
`;

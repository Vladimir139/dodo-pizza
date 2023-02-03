import styled from "styled-components";

export const TitlePizza = styled.h2`
  width: 100%;
  color: ${({ theme }) => theme.color.text.secondary};
  font-weight: 600;
  font-size: 36px;
  margin: 32px 0px;
`;

export const ListProduct = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

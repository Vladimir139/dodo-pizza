import styled from "styled-components";

export const Dot = styled.span`
  display: inline-block;
  width: 3px;
  height: 3px;
  margin: 3px 2px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.color.text.secondary};
`;

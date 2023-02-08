import styled from "styled-components";

export const UpButton = styled.button`
  position: fixed;
  bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 50px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.main};
`;

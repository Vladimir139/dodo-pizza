import styled from "styled-components";

export const ButtonAddToCart = styled.button`
  outline: none;
  border-radius: 9999px;
  text-align: center;
  font-weight: 500;
  cursor: pointer;
  width: 100%;
  background-color: rgb(255, 105, 0);
  color: rgb(255, 255, 255);
  height: 48px;
  padding: 12px 24px;
  font-size: 16px;
  line-height: 24px;
  display: block;
  transition: all 0.2s ease-out;

  &:hover {
    background-color: rgb(232, 97, 0);
    color: rgb(255, 255, 255);
  }
`;

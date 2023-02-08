import styled from "styled-components";

export const NumberInput = styled.input`
  width: 100%;
  height: 56px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid rgb(171, 173, 186);
  color: #000000;
  outline: none;

  text-align: left;
  display: block;
  resize: none;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  transition-property: all;
  transition-duration: 100ms;
  transition-timing-function: ease-out;

  &:focus {
    border-color: rgb(255, 105, 0);
  }
`;

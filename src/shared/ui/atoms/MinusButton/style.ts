import styled from "styled-components";

export const MinusButton = styled.div`
  width: 10px;
  height: 10px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    top: 50%;
    left: 0;
    background-color: #000;
  }
`;

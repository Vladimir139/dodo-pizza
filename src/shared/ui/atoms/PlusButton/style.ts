import styled from "styled-components";

export const PlusButton = styled.div`
  width: 10px;
  height: 10px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
    top: 50%;
    background-color: #000;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    top: 50%;
    left: 0;
    background-color: #000;
    transform: rotate(90deg);
  }
`;

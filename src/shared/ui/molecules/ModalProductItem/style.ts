import styled from "styled-components";

export const ModalWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  margin: auto;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

export const ButtonCloseWrapper = styled.div`
  position: absolute;
  top: 13px;
  right: -38px;
  cursor: pointer;
  transition: transform 0.1s ease-in-out 0s;
`;

export const ImageProduct = styled.img`
  width: 450px;
  height: 450px;
  display: block;
  margin: 92px 52px 0px;
  transition: margin 0.25s ease-in-out 0s;
`;

export const ModalContent = styled.div<{ isOpened?: boolean }>`
  background: rgb(255, 255, 255);
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 30px 60px;
  width: 924px;
  min-height: 610px;
  flex: 0 0 auto;
  position: relative;
  display: flex;
`;

export const WrapperImage = styled.div`
  height: 100%;
`;

export const InfoProductContainer = styled.div`
  width: 394px;
  padding: 30px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: rgb(252, 252, 252);
  border-radius: 20px;
`;

export const NameProduct = styled.h3`
  font-size: 24px;
  line-height: 28px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const RequiredIngredients = styled.p`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  display: inline-block;

  outline: none;
  background: transparent;
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;

  outline: none;
  background: transparent;
`;

export const FormOptionsProduct = styled.p``;

export const InnerWrapperInfo = styled.div``;

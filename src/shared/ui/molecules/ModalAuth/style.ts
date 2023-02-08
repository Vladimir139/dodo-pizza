import styled, { css } from "styled-components";
import Link from "next/link";
import { Button } from "@shared/ui/atoms";

export const ButtonAuth = styled(Button)``;

export const ButtonCloseWrapper = styled.div`
  position: absolute;
  top: 13px;
  right: -38px;
  cursor: pointer;
  transition: transform 0.1s ease-in-out 0s;
`;

export const ModalWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  margin: auto;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div<{ isOpened?: boolean }>`
  background: rgb(255, 255, 255);
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 30px 60px;
  display: flex;
  flex-direction: column;
  width: 409px;
  min-height: 399px;
  padding: 32px;
  flex: 0 0 auto;
  position: relative;
  justify-content: space-between;

  ${(props) =>
    props.isOpened &&
    css`
      opacity: 1;
      transform: scale(1);
    `}
`;

export const ModalTitle = styled.p`
  margin: 0px 0px 8px;
  color: rgb(0, 0, 0);
  font-size: 36px;
  font-weight: 500;
  line-height: 36px;
`;

export const ModalDescription = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: rgb(92, 99, 112);
  margin: 0px 0px 24px;
`;

export const UserAgreement = styled.p`
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: rgb(92, 99, 112);
  text-align: center;
`;

export const UserAgreementLink = styled(Link)`
  color: rgb(255, 105, 0);
`;

export const WrapperModalInfo = styled.div``;

import styled, { css } from "styled-components";

export const SidebarWrapper = styled.div<{ isOpened?: boolean }>`
  width: 100%;
  min-height: 100vh;
  position: relative;
  transition: transform 300ms ease-out 0s;
  overflow-y: scroll;

  ${(props) =>
    props.isOpened &&
    css`
      transform: translateX(0px);
    `}
`;

export const SidebarContent = styled.div<{ isOpened?: boolean }>`
  display: block;
  height: 100vh;
  width: 430px;
  position: fixed;
  right: 0;
  transform: translateX(430px);
  top: 0;
  background: rgb(243, 243, 247);
  transition: transform 300ms ease-out 0s;

  overflow-y: scroll;

  ${(props) =>
    props.isOpened &&
    css`
      transform: translateX(0px);
    `}
`;

export const ButtonCloseWrapper = styled.div`
  position: absolute;
  top: calc(50% - 12px);
  left: -48px;
`;

export const SummaryItemsTitle = styled.p`
  margin-top: 24px;
  margin-bottom: 4px;
  font-size: 24px;
  line-height: 28px;
  font-weight: 500;
  color: black;
  margin-left: 10px;
`;

export const ListItems = styled.ul``;

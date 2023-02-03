import { Button, Logo } from "@shared/ui/atoms";
import styled from "styled-components";

export const HeaderWrapper = styled.header``;

export const HeaderLogo = styled(Logo)``;

export const TopPart = styled.div`
  margin-top: 24px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
`;

export const LeftWrapper = styled.div`
  display: flex;
`;

export const RightWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonAuth = styled(Button)``;

export const BottomPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CartButton = styled(Button)``;

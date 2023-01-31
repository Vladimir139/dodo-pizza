import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

export const DeliveryInfo = styled.div`
  margin-left: 40px;
`;

export const DeliveryCity = styled.p`
  color: rgb(0, 0, 0);
  font-size: 18px;
  line-height: 1.2;
`;

export const StyleNameCity = styled.button`
  color: ${({ theme }) => theme.color.main};
  font-size: 18px;
  line-height: 1.2;
  border-radius: 0;
  background-color: inherit;
  cursor: pointer;
`;

export const DeliveryTime = styled.p`
  margin-top: 3px;
  color: rgb(0, 0, 0);
  font-size: 15px;
  font-weight: 500;
  position: relative;
  cursor: pointer;
`;

export const HeaderStar = styled(AiFillStar)`
  position: absolute;
  right: 50%;
`;

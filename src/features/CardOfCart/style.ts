import styled from "styled-components";

export const CardBasket = styled.li`
  background-color: white;
  width: 100%;
  padding: 12px 16px;
  margin-bottom: 8px;
`;
export const TopWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid rgb(226, 226, 233);
  padding-bottom: 12px;
  position: relative;
`;

export const Image = styled.img`
  width: 64px;
  height: 64px;
  display: block;
  flex: 0 0 auto;
  margin-right: 16px;
`;

export const ProductInfo = styled.div``;

export const NameProduct = styled.h3`
  display: block;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: rgb(0, 0, 0);
  margin-bottom: 4px;
  margin-top: 7px;
`;

export const DescriptionProduct = styled.p`
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: rgb(92, 99, 112);
`;

export const RemoveProductButton = styled.button`
  outline: none;
  background: none;
  width: 16px;
  height: 16px;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    width: 12px;
    height: 1px;
    background-color: #000;
    transform: rotate(45deg);
  }

  &::before {
    content: "";
    position: absolute;
    width: 12px;
    height: 1px;
    background-color: #000;
    transform: rotate(-45deg);
  }
`;

export const LowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
`;

export const PriceProduct = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  color: rgb(0, 0, 0);
  margin: 8px 8px 8px 0px;
`;

export const ChangeQuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #f3f3f7;

  border-radius: 30px;
  width: 96px;
  justify-content: space-between;
`;

export const PlusQuantityProduct = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f3f7;

  border-radius: 50%;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const Quantity = styled.div`
  background-color: #f3f3f7;
  text-align: center;
`;

export const MinusQuantityProduct = styled(PlusQuantityProduct)``;

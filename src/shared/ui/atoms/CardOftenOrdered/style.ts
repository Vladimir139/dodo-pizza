import styled from "styled-components";

export const CardOftenOrdered = styled.div`
  background-color: ${({ theme }) => theme.color.background.mainBg};
  transition: box-shadow 150ms ease-out 0s;
  box-shadow: rgba(6, 5, 50, 0.15) 0px 4px 22px -6px;
  border-radius: 12px;
  display: flex;
  flex: 0 0 auto;
  cursor: pointer;
  width: 260px;
  padding: 16px;
  align-items: center;

  &:hover {
    box-shadow: rgba(6, 5, 50, 0.15) 0px 0px 12px -4px;
  }
`;

export const ImageCard = styled.img`
  width: 80px;
  height: 80px;
  flex: 0 0 auto;
  pointer-events: none;
  margin-right: 10px;
`;

export const WrapperInfoCard = styled.div``;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  color: ${({ theme }) => theme.color.text.secondary};
  margin-bottom: 8px;
`;

export const Price = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.color.text.secondary};
`;

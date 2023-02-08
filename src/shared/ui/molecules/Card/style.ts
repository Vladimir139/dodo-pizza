import styled from "styled-components";

export const Card = styled.li`
  margin-bottom: 60px;
  cursor: pointer;
  width: 292px;
  margin-right: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ImageCard = styled.img`
  display: block;
  width: 100%;
  height: 292px;

  &:hover {
    transition: all 0.2s ease-out;
    transform: translateY(3px);
  }
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  margin: 8px 0;
`;

export const Description = styled.p`
  color: rgb(92, 99, 112);
  font-size: 14px;
  line-height: 20px;
  display: flex;
`;

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const InnerWrapperInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
`;

export const Price = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.color.text.secondary};
  font-weight: 600;
  line-height: 22px;
  display: flex;
  justify-content: center;
`;

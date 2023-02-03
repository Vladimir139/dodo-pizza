import styled from "styled-components";

export const TitleOftenOrdered = styled.p`
  font-weight: 500;
  font-size: 24px;
  margin: 16px 0px;
  color: ${({ theme }) => theme.color.text.secondary};
`;

export const SwiperContainer = styled.div`
  .swiper-slide {
    display: flex;
    align-items: center;
    width: auto;
    height: auto;
    padding: 16px 24px 24px 0px;
  }
`;

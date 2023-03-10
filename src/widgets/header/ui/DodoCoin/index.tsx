import * as S from "./style";

export const DodoCoin = () => {
  return (
    <S.DodoCoin href={"/"}>
      <S.DodoImage
        fill="none"
        viewBox="0 0 24 24"
        width={"28px"}
        height={"28px"}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11 1a1 1 0 011 1v2a8 8 0 110 16v2a1 1 0 11-2 0v-2H6.6c-.56 0-.84 0-1.05-.1a1 1 0 01-.44-.45C5 19.24 5 18.96 5 18.4V5.6c0-.56 0-.84.1-1.05a1 1 0 01.45-.44C5.76 4 6.04 4 6.6 4H10V2a1 1 0 011-1zm1 17a6 6 0 000-12H7v12h5z"
          fill="rgb(255, 105, 0)"
        ></path>
      </S.DodoImage>

      <S.CoinTitle>Додокоины</S.CoinTitle>
    </S.DodoCoin>
  );
};

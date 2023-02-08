import React, { FC } from "react";
import { Links } from "@shared/lib/data/links.data";
import * as S from "./style";
import { LinkNavigation } from "@shared/ui/atoms";
import { useRouter } from "next/router";

export const Navigation: FC = () => {
  return (
    <S.Navigation>
      <S.LinksNavigation>
        {Links.map((item, index) => (
          <S.LinkWrapper key={index}>
            <LinkNavigation Title={item.Title} href={item.path} />
          </S.LinkWrapper>
        ))}
      </S.LinksNavigation>
    </S.Navigation>
  );
};

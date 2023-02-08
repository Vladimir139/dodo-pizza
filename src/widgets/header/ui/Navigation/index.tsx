import React, { FC } from "react";
import { Links } from "@shared/lib/data/links.data";
import * as S from "./style";
import { useRouter } from "next/router";
import { NavLink } from "./style";

export const Navigation: FC = () => {
  const router = useRouter();

  return (
    <S.Navigation>
      <S.LinksNavigation>
        {Links.map((item, index) => (
          <NavLink
            key={index}
            href={item.href || ""}
            className={router.asPath === item.href ? "activeClass" : ""}
          >
            {item.Title}
          </NavLink>
        ))}
      </S.LinksNavigation>
    </S.Navigation>
  );
};

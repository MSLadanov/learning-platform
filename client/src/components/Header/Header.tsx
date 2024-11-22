import { ReactElement } from "react";
import { HeaderWrapper } from "@/styled/Header/Header";
import { HeaderLogo } from "@/styled/Header/Header";

export const Header = (): ReactElement => {
  return (
    <HeaderWrapper>
      <HeaderLogo>
        <p>Платформа</p>
      </HeaderLogo>
    </HeaderWrapper>
  );
};

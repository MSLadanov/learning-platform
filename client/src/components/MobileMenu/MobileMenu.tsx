import { MobileMenuWrapper } from "@/styled/Menu/MobileMenuWrapper";
import { ReactElement } from "react";
import { NavLink } from "react-router-dom";

interface IMobileMenuProps {
  isMobileMenuOpened: boolean;
}

export const MobileMenu: React.FC<IMobileMenuProps> = ({
  isMobileMenuOpened,
}): ReactElement => {
  return (
    <MobileMenuWrapper isMobileMenuOpened={isMobileMenuOpened}>
      <NavLink to="#">ПРОГРАММЫ</NavLink>
      <NavLink to="#">ПРОФИЛЬ</NavLink>
      <NavLink to="#">СЕРТИФИКАТЫ</NavLink>
    </MobileMenuWrapper>
  );
};

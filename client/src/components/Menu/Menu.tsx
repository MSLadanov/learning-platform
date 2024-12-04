import MenuWrapper from "@/styled/Menu/MenuWrapper";
import { ReactElement } from "react";
import { NavLink } from "react-router-dom";

const Menu = (): ReactElement => {
  return (
    <MenuWrapper>
      <NavLink to='#'>ПРОГРАММЫ</NavLink>
      <NavLink to='#'>ПРОФИЛЬ</NavLink>
      <NavLink to='#'>СЕРТИФИКАТЫ</NavLink>
    </MenuWrapper>
  );
};

export default Menu;

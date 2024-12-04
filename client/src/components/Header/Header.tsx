import { ReactElement, useState, useEffect } from "react";
import { HeaderNavMenu, HeaderWrapper } from "@/styled/Header/Header";
import { HeaderLogo } from "@/styled/Header/Header";
import { observer } from "mobx-react-lite";
import { userStore } from "@/store/store";
import notify from "@/assets/icons/notify.svg";
import user from "@/assets/icons/user.svg";
import { NavLink } from "react-router-dom";

export const Header = observer((): ReactElement => {
  const [isLogged, setIsLogged] = useState(Boolean(userStore.id));
  useEffect(() => {
    setIsLogged(Boolean(userStore.id));
  }, [userStore.id]);
  return (
    <HeaderWrapper>
      <HeaderLogo>{isLogged ? <p>Логотип</p> : <p>Платформа</p>}</HeaderLogo>
      {isLogged && (
        <HeaderNavMenu>
          <NavLink to="#">
            <img src={notify} />
          </NavLink>
          <NavLink to="#">
            <img src={user} />
          </NavLink>
        </HeaderNavMenu>
      )}
    </HeaderWrapper>
  );
});

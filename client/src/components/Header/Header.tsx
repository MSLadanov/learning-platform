import { ReactElement, useState, useEffect } from "react";
import { HeaderNavMenu, HeaderWrapper, HeaderLogo } from "@/styled/Header/Header";
import { observer } from "mobx-react-lite";
import { userStore } from "@/store/store";
import notify from "@/assets/icons/notify.svg";
import user from "@/assets/icons/user.svg";
import { NavLink } from "react-router-dom";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import Burger from "../Burger/Burger";

export const Header = observer((): ReactElement => {
  const [isLogged, setIsLogged] = useState(Boolean(userStore.id));
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpened(prevState => !prevState);
  };

  useEffect(() => {
    setIsLogged(Boolean(userStore.id));
  }, [userStore.id]);

  return (
    <>
      <HeaderWrapper>
        <HeaderLogo>
          <p onClick={toggleMobileMenu}>{isLogged ? "ЛОГОТИП" : "ПЛАТФОРМА"}</p>
        </HeaderLogo>
        <Burger openMenu={isMobileMenuOpened} setOpenMenu={setIsMobileMenuOpened}/>
        {isLogged && (
          <HeaderNavMenu>
            <NavLink to="#">
              <img src={notify} alt="Notifications" />
            </NavLink>
            <NavLink to="#">
              <img src={user} alt="User  Profile" />
            </NavLink>
          </HeaderNavMenu>
        )}
      </HeaderWrapper>
      <MobileMenu isMobileMenuOpened={isMobileMenuOpened} />
    </>
  );
});

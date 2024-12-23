import { userStore } from "@/store/store";
import {
  FooterLogo,
  FooterWrapper,
  LoggedFooterBlock,
  LoggedFooterWrapper,
} from "@/styled/Footer/Footer";
import { observer } from "mobx-react-lite";
import { ReactElement, useEffect, useState } from "react";

export const Footer = observer((): ReactElement => {
  const [isLogged, setIsLogged] = useState(Boolean(userStore.id));
  useEffect(() => {
    setIsLogged(Boolean(userStore.id));
  }, [userStore.id]);
  return (
    <FooterWrapper>
      <FooterLogo>
        {isLogged ? (
          <LoggedFooterWrapper>
            <LoggedFooterBlock>
              <p>© 2018-2023 Платформа, все права защищены</p>
            </LoggedFooterBlock>
            <LoggedFooterBlock>
              <ul>
                <li>Контактная информация</li>
                <li>Конфиденциальность</li>
                <li>Пользовательское соглашение</li>
              </ul>
            </LoggedFooterBlock>
          </LoggedFooterWrapper>
        ) : (
          <p>© Платформа, 2021</p>
        )}
      </FooterLogo>
    </FooterWrapper>
  );
});

import { FooterLogo, FooterWrapper } from "@/styled/Footer/Footer";
import { ReactElement } from "react";

export const Footer = (): ReactElement => {
  return (
    <FooterWrapper>
      <FooterLogo>
        <p>© Платформа, 2021</p>
      </FooterLogo>
    </FooterWrapper>
  );
};

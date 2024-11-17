import { ReactElement } from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background: #f5f5f5;
  color: #000000;
  padding: 24px 72px;
`;

const FooterLogo = styled.div`
  p {
    font-family: "OpenSansLight";
    margin: 0px;
    font-size: 21px;
  }
`;

export const Footer = (): ReactElement => {
  return (
    <FooterWrapper>
      <FooterLogo>
        <p>© Платформа, 2021</p>
      </FooterLogo>
    </FooterWrapper>
  );
};

import { ReactElement } from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background: #f5f5f5;
  color: #000000;
  padding: 10px;
  font-family: "OpenSansLight";
`;

export const Footer = (): ReactElement => {
  return (
    <FooterWrapper>
      <h1>© Платформа, 2021</h1>
    </FooterWrapper>
  );
};

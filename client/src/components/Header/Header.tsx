import { ReactElement } from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  background: #332f37;
  color: #ffffff;
  padding: 24px 72px;
`;

const HeaderLogo = styled.div`
  p {
    font-family: "OpenSansLight";
    margin: 0px;
    font-size: 32px;
  }
`;

export const Header = (): ReactElement => {
  return (
    <HeaderWrapper>
      <HeaderLogo>
        <p>Платформа</p>
      </HeaderLogo>
    </HeaderWrapper>
  );
};

import { ReactElement } from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  background: #332f37;
  color: #ffffff;
  padding: 10px;
  font-family: "OpenSansLight";
`;

export const Header = (): ReactElement => {
  return (
    <HeaderWrapper>
      <h1>Платформа</h1>
    </HeaderWrapper>
  );
};

import styled from "styled-components";
import { devices } from "../constants";

export const FooterWrapper = styled.footer`
  background: #f5f5f5;
  color: #000000;
  padding: 10px 42px;
    ul {
      font-family: "OpenSansLight", sans-serif;
      font-size: 12px;
      display: flex;
      li {
        margin: 0px 15px;
      }
  }
  @media only screen and ${devices.sm} {
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterLogo = styled.div`
  display: p {
    font-family: "OpenSansLight", sans-serif;
    font-size: 16px;
    margin: 0;
  }
`;

export const LoggedFooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "OpenSansLight", sans-serif;
`;

export const LoggedFooterBlock = styled.div``;

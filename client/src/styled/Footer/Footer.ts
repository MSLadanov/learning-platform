import styled from "styled-components";
import { devices } from "../constants";

export const FooterWrapper = styled.footer`
  background: #f5f5f5;
  color: #000000;
  padding: 24px 72px;
  @media only screen and ${devices.sm} {
    display: flex;
    flex-direction: column;
  }
`;

export const FooterLogo = styled.div`
  p {
    font-family: "OpenSansLight";
    font-size: 21px;
  }
`;

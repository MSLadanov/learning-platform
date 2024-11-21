import styled from "styled-components";
import { devices } from "../constants";

export const HeaderWrapper = styled.header`
  background: #332f37;
  color: #ffffff;
  padding: 24px 72px;
  @media only screen and ${devices.sm} {
    display: flex;
    flex-direction: column;
  }
`;

export const HeaderLogo = styled.div`
  p {
    font-family: "OpenSansLight";
    font-size: 32px;
  }
`;

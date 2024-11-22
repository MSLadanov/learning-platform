import styled from "styled-components";
import { devices } from "../constants";

export const HeaderWrapper = styled.header`
  background: #332f37;
  color: #ffffff;
  padding: 24px 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and ${devices.sm} {
    flex-direction: column;
    padding: 16px 32px; 
  }
`;

export const HeaderLogo = styled.div`
  p {
    font-family: "OpenSansLight", sans-serif;
    font-size: 32px;
    margin: 0;
  }
`;
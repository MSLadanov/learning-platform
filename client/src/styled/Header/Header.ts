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
    padding: 16px 32px; // Adjust padding for smaller screens
  }
`;

export const HeaderLogo = styled.div`
  p {
    font-family: "OpenSansLight", sans-serif; // Added fallback font
    font-size: 32px;
    margin: 0; // Remove default margin
  }
`;
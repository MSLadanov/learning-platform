import styled from "styled-components";
import { devices } from "../constants";

export const FooterWrapper = styled.footer`
  background: #f5f5f5;
  color: #000000;
  padding: 24px 72px;
  display: flex;
  justify-content: space-between; // Aligns content on larger screens

  @media only screen and ${devices.sm} {
    flex-direction: column;
    align-items: center; // Center items on small screens
  }
`;

export const FooterLogo = styled.div`
  p {
    font-family: "OpenSansLight", sans-serif; // Added fallback font
    font-size: 21px;
    margin: 0; // Remove default margin
  }
`;
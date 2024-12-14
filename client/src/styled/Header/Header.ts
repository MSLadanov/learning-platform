import styled from "styled-components";
import { devices } from "../constants";

export const HeaderWrapper = styled.header`
  background: #332f37;
  color: #ffffff;
  padding: 10px 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  @media only screen and ${devices.sm} {
    height: 60px;
    padding: 16px 32px;
  }
`;

export const HeaderLogo = styled.div`
  p {
    font-family: "OpenSansLight", sans-serif;
    font-size: 28px;
    margin: 0;
  }
  @media only screen and ${devices.ml} {
    display: none;
  }
`;

export const HeaderNavMenu = styled.div`
  display: flex;
  align-items: center;
  a:not(:last-child) {
    margin-right: 30px;
  }
  a:not(:first-child) {
    img {
      width: 70px;
      height: 70px;
      @media only screen and ${devices.sm} {
        width: 50px;
        height: 50px;
      }
    }
  }
  img {
    width: 41px;
    height: 49px;
    @media only screen and ${devices.sm} {
      width: 34px;
      height: 41px;
    }
  }
`;

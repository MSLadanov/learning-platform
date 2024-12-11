import styled from "styled-components";
import { devices } from "../constants";

const CoverWrapper = styled.div`
  background: #148c88;
  color: #ffffff;
  font-family: MontserratLight;
  height: 300px;
  width: 100vw;
  h1 {
    position: relative;
    top: 190px;
    left: 510px;
    font-size: 64px;
    font-family: 'OpenSansBold';
    @media only screen and ${devices.md} {
      position: static;
    }
    @media only screen and ${devices['2xl']} {
      left: 385px;
    }
      @media only screen and ${devices.xl} {
      left: 300px;
    }
    @media only screen and ${devices.sm} {
      font-size: 32px;
    }
  }
  @media only screen and ${devices.md} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media only screen and ${devices.sm} {
    height: 80px;
  }
`;

export default CoverWrapper;

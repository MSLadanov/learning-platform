import styled from "styled-components";
import { devices } from "../constants";

const CoverWrapper = styled.div`
  background: #148c88;
  color: #ffffff;
  font-family: MontserratLight;
  height: 130px;
  width: 100vw;
  h1 {
    position: relative;
    top: 80px;
    left: 215px;
    @media only screen and ${devices.md} {
      position: static;
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

import styled from "styled-components";
import { devices } from "../constants";

const MenuWrapper = styled.div`
  position: absolute;
  width: 395px;
  height: 400px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  top: 205px;
  left: 55px;
  border-radius: 21px;
  padding: 30px 0px;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);

  a {
    color: #000000;
    text-decoration: none;
    font-family: "OpenSansRegular", sans-serif;
    margin: 35px 50px;
    font-size: 28px;
    &:hover {
      color: red;
    }
    @media only screen and ${devices["2xl"]} {
      margin: 30px;
      font-size: 18px
    }
  }

  @media only screen and ${devices.ml} {
    display: none;
  }
  @media only screen and ${devices["2xl"]} {
    height: auto;
    width: auto;
  }
`;

export default MenuWrapper;

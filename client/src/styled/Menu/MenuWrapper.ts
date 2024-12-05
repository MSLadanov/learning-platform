import styled from "styled-components";
import { devices } from "../constants";

const MenuWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  padding: 20px;
  top: 136px;
  left: 25px;
  border-radius: 21px;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);

  a {
    color: #000000;
    text-decoration: none;
    font-family: "OpenSansRegular", sans-serif;
    margin-bottom: 30px;

    &:hover {
      color: red;
    }
  }

  @media only screen and ${devices.md} {
    display: none;
  }
`;

export default MenuWrapper;

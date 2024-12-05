import styled from "styled-components";
import { devices } from "../constants";

interface MobileMenuWrapperProps {
  isMobileMenuOpened: boolean;
}

export const MobileMenuWrapper = styled.div<MobileMenuWrapperProps>`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  max-height: ${(props) => (props.isMobileMenuOpened ? "325px" : "0px")};
  overflow: hidden;
  transition: max-height 0.3s ease; // Add transition for smooth opening/closing

  a {
    margin: 32px;
    padding: 10px;
    color: #000000;
    text-decoration: none;
    font-family: "OpenSansRegular", sans-serif;
    margin-bottom: 30px;

    &:hover {
      color: red;
    }
  }
  @media only screen and ${devices.mm} {
    display: none;
  }
`;

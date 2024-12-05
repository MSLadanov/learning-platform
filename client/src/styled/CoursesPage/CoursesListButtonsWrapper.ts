import styled from "styled-components";
import { devices } from "../constants";

const CoursesListButtonsWrapper = styled.div`
  padding: 15px 0px;
  a {
    color: #000000;
    text-decoration: none;
    font-family: "OpenSansRegular", sans-serif;
    margin-right: 10px;
    &:not(:last-child) {
      font-family: "OpenSansBold", sans-serif;
      @media only screen and ${devices.sm} {
        display: block;
      }
    }
  }
  @media only screen and ${devices.sm} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default CoursesListButtonsWrapper;

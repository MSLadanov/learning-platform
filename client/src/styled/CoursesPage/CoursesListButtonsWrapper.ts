import styled from "styled-components";
import { devices } from "../constants";

const CoursesListButtonsWrapper = styled.div`
  padding: 15px 0;
  margin: 25px 0px 15px 0px;
  a {
    color: #000000;
    text-decoration: none;
    font-size: 28px;
    font-family: "OpenSansLight", sans-serif;
    margin-right: 25px;
    &:not(:last-child) {
      @media only screen and ${devices.sm} {
        display: block;
      }
    }

    &.active {
      font-family: "OpenSansRegular", sans-serif;
    }
  }
`;

export default CoursesListButtonsWrapper;

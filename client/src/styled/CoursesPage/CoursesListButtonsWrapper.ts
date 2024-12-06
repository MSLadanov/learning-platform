import styled from "styled-components";
import { devices } from "../constants";

const CoursesListButtonsWrapper = styled.div`
  padding: 15px 0;

  a {
    color: #000000;
    text-decoration: none;
    font-family: "OpenSansRegular", sans-serif;
    margin-right: 10px;

    &:not(:last-child) {
      @media only screen and ${devices.sm} {
        display: block;
      }
    }

    &.active {
      font-family: "OpenSansBold", sans-serif;
    }
  }
`;

export default CoursesListButtonsWrapper;

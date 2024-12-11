import styled from "styled-components";
import { devices } from "../constants";

const CoursesListWrapper = styled.div`
  margin-right: 50px;
  min-height: 100vh;
  margin-left: 495px;
  @media only screen and ${devices.md} {
    margin: 0px 50px;
  }

  @media only screen and ${devices["2xl"]} {
    margin-left: 385px;
  }
  @media only screen and ${devices.xl} {
    margin-left: 300px;
  }
`;

export default CoursesListWrapper;

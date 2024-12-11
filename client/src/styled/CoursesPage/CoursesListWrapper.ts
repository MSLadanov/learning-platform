import styled from "styled-components";
import { devices } from "../constants";

const CoursesListWrapper = styled.div`
  margin-right: 50px;
  min-height: 100vh;
  margin-left: 510px;
  @media only screen and ${devices.md} {
    margin: 0px 50px;
  }

  @media only screen and ${devices["2xl"]} {
    margin-left: 385px;
  }
  @media only screen and ${devices.xl} {
    margin-left: 300px;
  }
  @media only screen and ${devices.ml} {
    margin: 0px 50px;
  }
  @media only screen and ${devices.sm} {
    margin: 0px 10px;
  }
`;

export default CoursesListWrapper;

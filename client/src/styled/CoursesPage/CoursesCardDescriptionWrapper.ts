import styled from "styled-components";
import { devices } from "../constants";

const CoursesCardDescriptionWrapper = styled.div`
  margin-left: 20px;
  padding-top: 5px;
  width: 100%;
  font-family: OpenSansLight;
  h3 {
    font-size: 28px;
  }
  p {
    font-size: 21px;
    color: #6c6969;
    @media only screen and ${devices.md} {
      margin: 10px 0px;
    }
  }
    @media only screen and ${devices.md} {
      margin: 0px;
    }
`;

export default CoursesCardDescriptionWrapper;

import styled from "styled-components";
import { devices } from "../constants";

const CoursesCardDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
  padding-top: 5px;
  width: 100%;
  font-family: OpenSansLight;
  height: 100%;
  h3 {
    font-size: 28px;
    @media only screen and ${devices.xl} {
      font-size: 20px;
    }
  }
  p {
    font-size: 21px;
    color: #6c6969;
    margin-top: 20px;
    @media only screen and ${devices.md} {
      margin: 10px 0px;
    }
     @media only screen and ${devices.xl} {
      font-size: 16px;
    }
      
  }
    @media only screen and ${devices.lg} {
      margin: 0px;
    }
`;

export default CoursesCardDescriptionWrapper;

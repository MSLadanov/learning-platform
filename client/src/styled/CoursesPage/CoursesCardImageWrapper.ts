import styled from "styled-components";
import { devices } from "../constants";

const CoursesCardImageWrapper = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 335px;
    height: 100%;
    border-radius: 12px;
    @media only screen and ${devices.xl} {
      width: 100%;
      height: 100%;
    }
    @media only screen and ${devices.md} {
      width: 100%;
      height: auto;
    }
    
  }
`;

export default CoursesCardImageWrapper;

import styled from "styled-components";
import { devices } from "../constants";

const CoursesCardImageWrapper = styled.div`
  display: flex;
  align-items: center;
  img {
    border-radius: 12px;
    @media only screen and ${devices.md} {
      width: 100%;
      height: auto;
    }
  }
`;

export default CoursesCardImageWrapper;

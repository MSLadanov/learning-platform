import styled from "styled-components";
import { devices } from "../constants";

const CoursesCardButtonsWrapper = styled.div`
  display: flex;
  justify-content: end;
  button {
    background: #148c88;
    margin-left: 10px;
    border: 1px solid #ffffff;
    border-radius: 4px;
    width: 120px;
    height: 30px;
    color: #ffffff;
    &:not(:last-child) {
      color: #148c88;
      background: #ffffff;
      border: 1px solid #148c88;
    }
      @media only screen and ${devices.md} {
      margin: 0px;
    }
  }
    @media only screen and ${devices.md} {
      justify-content: space-between;
    }
`;

export default CoursesCardButtonsWrapper;

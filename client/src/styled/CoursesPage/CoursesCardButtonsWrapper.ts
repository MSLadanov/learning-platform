import styled from "styled-components";
import { devices } from "../constants";

const CoursesCardButtonsWrapper = styled.div`
  display: flex;
  justify-content: end;

  button {
    background: #148c88;
    margin-left: 10px;
    border: 1px solid #ffffff;
    border-radius: 8px;
    width: 246px;
    height: 65px;
    color: #ffffff;
    font-size: 21px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
    outline: none;

    &:hover {
      background: #0f7a77;
      transform: translateY(-2px);
    }

    &:active {
      background: #0f7a77;
      transform: translateY(0);
    }

    &:not(:last-child) {
      color: #148c88;
      background: #ffffff;
      border: 1px solid #148c88;

      &:hover {
        background: #f5f5f5;
        transform: translateY(-2px);
      }

      &:active {
        background: #e0e0e0;
        transform: translateY(0);
      }
    }

    @media only screen and ${devices.md} {
      margin: 0px;
    }

    @media only screen and ${devices.sm} {
      width: 150px;
      height: 40px;
      font-size: 16px;
    }
  }

  @media only screen and ${devices.lg} {
    justify-content: space-between;
  }
`;

export default CoursesCardButtonsWrapper;

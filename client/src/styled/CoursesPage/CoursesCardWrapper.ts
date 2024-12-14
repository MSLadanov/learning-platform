import styled from "styled-components";
import { devices } from "../constants";

const CoursesCardWrapper = styled.div`
    display: flex;
    background: #FFFFFF;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 21px;
    height: 280px;
    font-family: OpenSansRegular;
    -webkit-box-shadow: 40 0 12px 0 rgba(0, 0, 0, 0.12);
    -moz-box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.12);
    @media only screen and ${devices.xl} {
      height: auto;
      flex-direction: column;
  }
`

export default CoursesCardWrapper
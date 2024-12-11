import styled from "styled-components";
import { devices } from "../constants";

const CoursesCardWrapper = styled.div`
    display: flex;
    background: #FFFFFF;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 21px;
    font-family: OpenSansRegular;
    -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    @media only screen and ${devices.lg} {
        flex-direction: column;
  }
`

export default CoursesCardWrapper
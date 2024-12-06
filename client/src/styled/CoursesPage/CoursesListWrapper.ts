import styled from "styled-components";
import { devices } from "../constants";

const CoursesListWrapper = styled.div`
    margin-left: 215px;
    margin-right: 50px;
    min-height: 100vh;
    @media only screen and ${devices.md} {
        margin: 0px 50px;
  }
`

export default CoursesListWrapper
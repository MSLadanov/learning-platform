import styled from "styled-components";
import { devices } from "../constants";

const CoverWrapper = styled.div`
    background: #148C88;
    color: #FFFFFF;
    font-family: MontserratLight;
    height: 130px;
    h1 {
        position: relative;
        top: 80px;
        left: 215px;
        @media only screen and ${devices.md} {
            position: static;
    }
    }
    @media only screen and ${devices.md} {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export default CoverWrapper
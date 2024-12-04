import styled from "styled-components";

const MenuWrapper = styled.div`
    position: absolute;
    display:flex;
    flex-direction: column;
    background: #FFFFFF;
    padding: 20px;
    top: 165px;
    left: 25px;
    border-radius: 21px;
    -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    a{
        color: #000000;
        text-decoration: none;
        font-family: "OpenSansRegular", sans-serif;
        margin-bottom: 30px;
        &:hover {
        color: red;
    }
`;

export default MenuWrapper;

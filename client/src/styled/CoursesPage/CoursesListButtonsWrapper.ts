import styled from "styled-components";

const CoursesListButtonsWrapper = styled.div`
  padding: 15px 0px;
  a {
    color: #000000;
    text-decoration: none;
    font-family: "OpenSansRegular", sans-serif;
    margin-right: 10px;
    &:not(:last-child) {
        font-family: "OpenSansBold", sans-serif;
  }
  }
`;

export default CoursesListButtonsWrapper;

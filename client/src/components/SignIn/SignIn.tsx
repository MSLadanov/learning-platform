import { ReactElement } from "react";
import TextInput from "../TextInput/TextInput";
import styled from "styled-components";

const SignInWrapper = styled.div`
  max-height: 501px;
  max-width: 700px;
`;

export const SignIn = (): ReactElement => {
  return (
    <SignInWrapper>
      <h1>Войти в профиль</h1>
      <TextInput id="aaa" label="Логин" required />
    </SignInWrapper>
  );
};

import { ReactElement } from "react";
import TextInput from "../TextInput/TextInput";
import styled from "styled-components";
import { Formik, Field, Form } from "formik";

const SignInWrapper = styled.div`
  max-height: 501px;
  max-width: 700px;
`;

export const SignIn = (): ReactElement => {
  return (
    <SignInWrapper>
      <h1>Войти в профиль</h1>
      <Formik
        initialValues={{ login: "", password: "" }}
        onSubmit={() => {
          console.log("Form is validated! Submitting the form...");
        }}
      >
        {() => (
          <Form>
            <TextInput id="login" label="Логин" name="login" required />
            <TextInput id="password" label="Пароль" name="password" required />
            <button type="submit">Войти</button>
          </Form>
        )}
      </Formik>
    </SignInWrapper>
  );
};

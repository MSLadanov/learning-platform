import { ReactElement } from "react";
import TextInput from "../TextInput/TextInput";
import styled from "styled-components";
import { Formik, Form } from "formik";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";

const SignInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 700px;
  background-color: #ffffff;
  padding: 28px 100px;
  color: #aaaaaa;
  font-family: "OpenSansRegular";
  border-radius: 16px;
  scale: 0.8;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  a {
    align-self: start;
    text-decoration: none;
    color: #aaaaaa;
  }
  form {
    width: 100%;
    a {
      font-size: 11px;
    }
  }
  button {
    background-color: #148c88;
    color: #ffffff;
    width: 100%;
    height: 42px;
    border-style: none;
    border-radius: 28px;
    margin: 16px 0px;
  }
`;

const SignInHeader = styled.div`
  p {
    color: #2c2c2c;
    font-family: "OpenSansRegular";
    font-size: 36px;
    font-weight: bold;
  }
`;

const SignInFooter = styled.div`
  font-size: 11px;
  a {
    color: #000000;
  }
`;

const SignInSchema = Yup.object().shape({
  login: Yup.string().required("Обязательное поле"),
  password: Yup.string()
    .min(6, "Минимум 6 букв")
    .max(20, "Максимум 20 букв")
    .required("Обязательное поле"),
});

export const SignIn = (): ReactElement => {
  return (
    <SignInWrapper>
      <SignInHeader>
        <p>Войти в профиль</p>
      </SignInHeader>
      <Formik
        initialValues={{ login: "", password: "" }}
        validationSchema={SignInSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <TextInput
              id="login"
              label="Логин"
              name="login"
              required
              errors={errors}
              touched={touched}
            />
            <TextInput
              id="password"
              label="Пароль"
              name="password"
              required
              type="password"
              errors={errors}
              touched={touched}
            />
            <NavLink to={"/forgotpassword"}>Восстановить пароль</NavLink>
            <button type="submit">Войти</button>
          </Form>
        )}
      </Formik>
      <SignInFooter>
        У вас нет профиля? <NavLink to={"/signup"}>Зарегистрироваться</NavLink>
      </SignInFooter>
    </SignInWrapper>
  );
};

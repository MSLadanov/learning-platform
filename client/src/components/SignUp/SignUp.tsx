import { ReactElement } from "react";
import TextInput from "../TextInput/TextInput";
import styled from "styled-components";
import { Formik, Form } from "formik";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";

const SignUpWrapper = styled.div`
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
    a,
    p {
      font-size: 11px;
    }
    a {
      display: block;
      font-weight: bold;
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

const SignUpHeader = styled.div`
  align-self: start;
  width: 326px;
  p {
    color: #2c2c2c;
    font-family: "OpenSansRegular";
    font-size: 24px;
    font-weight: bold;
  }
`;

const SignUpFooter = styled.div`
  font-size: 11px;
  a {
    color: #000000;
  }
`;

const SignUpSchema = Yup.object().shape({
  fullname: Yup.string().required("Обязательное поле"),
  login: Yup.string().required("Обязательное поле"),
  email: Yup.string()
    .email("Некорректный e-mail")
    .required("Обязательное поле"),
  password: Yup.string()
    .min(6, "Минимум 6 буквы")
    .max(20, "Максимум 20 букв")
    .required("Обязательное поле"),
  repeatPassword: Yup.string()
    .min(6, "Минимум 6 буквы")
    .max(20, "Максимум 20 букв")
    .required("Обязательное поле")
    .oneOf([Yup.ref("password")], "Пароли должны совпадать"),
});

export const SignUp = (): ReactElement => {
  return (
    <SignUpWrapper>
      <SignUpHeader>
        <p>Регистрация профиля</p>
      </SignUpHeader>
      <Formik
        initialValues={{
          fullname: "",
          login: "",
          email: "",
          password: "",
          repeatPassword: "",
        }}
        validationSchema={SignUpSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <TextInput
              id="fullname"
              label="Полное имя"
              name="fullname"
              required
              errors={errors}
              touched={touched}
            />
            <TextInput
              id="login"
              label="Логин"
              name="login"
              required
              errors={errors}
              touched={touched}
            />
            <TextInput
              id="email"
              label="E-mail"
              name="email"
              required
              type="email"
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
            <TextInput
              id="repeatPassword"
              label="Повторите пароль"
              name="repeatPassword"
              required
              type="password"
              errors={errors}
              touched={touched}
            />
            <p>
              Нажимая кнопку, я соглашаюсь на обработку
              <a> персональных данных</a>
            </p>
            <button type="submit">Зарегистрироваться</button>
          </Form>
        )}
      </Formik>
      <SignUpFooter>
        У вас уже есть профиль? <NavLink to={"/signin"}>Войти</NavLink>
      </SignUpFooter>
    </SignUpWrapper>
  );
};

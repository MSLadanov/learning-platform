import { ReactElement, useState } from "react";
import TextInput from "../TextInput/TextInput";
import styled from "styled-components";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const ForgotPasswordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 700px;
  background-color: #ffffff;
  padding: 28px 100px;
  color: #aaaaaa;
  font-family: "OpenSansRegular";
  border-radius: 16px;
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

const ForgotPasswordHeader = styled.div`
  p {
    color: #2c2c2c;
    font-family: "OpenSansRegular";
    font-size: 36px;
  }
`;

const ForgotPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Минимум 6 буквы")
    .max(20, "Максимум 20 букв")
    .required("Обязательное поле"),
});

export const NewPassword = (): ReactElement => {
  return (
    <ForgotPasswordWrapper>
      <ForgotPasswordHeader>
        <p>Восстановление пароля</p>
      </ForgotPasswordHeader>
      <Formik
        initialValues={{ password: "" }}
        validationSchema={ForgotPasswordSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <TextInput
              id="password"
              label="Введите новый пароль"
              name="password"
              required
              type="password"
              errors={errors}
              touched={touched}
            />
            <button type="submit">Отправить</button>
          </Form>
        )}
      </Formik>
    </ForgotPasswordWrapper>
  );
};

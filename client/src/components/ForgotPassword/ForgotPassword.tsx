import { ReactElement, useState } from "react";
import TextInput from "../TextInput/TextInput";
import styled from "styled-components";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

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
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  scale: 0.8;
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
  align-self: start;
  width: 326px;
  p {
    color: #2c2c2c;
    font-family: "OpenSansRegular";
    font-size: 24px;
  }
`;

const ForgotPasswordEmailSchema = Yup.object().shape({
  email: Yup.string()
    .email("Некорректный e-mail")
    .required("Обязательное поле"),
});

const AccessCodeSchema = Yup.object().shape({
  accessCode: Yup.number()
    .typeError("Должно быть число")
    .required("Обязательное поле"),
});

export const ForgotPassword = (): ReactElement => {
  const [isAccessCodeSended, setIsAccessCodeSended] = useState(false);
  const navigate = useNavigate();

  return (
    <ForgotPasswordWrapper>
      <ForgotPasswordHeader>
        <p>Восстановление пароля</p>
      </ForgotPasswordHeader>
      {isAccessCodeSended ? (
        <Formik
          initialValues={{ accessCode: "" }}
          validationSchema={AccessCodeSchema}
          onSubmit={(values) => {
            console.log(values);
            navigate("/newpassword");
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <TextInput
                id="accessCode"
                label="Код доступа"
                name="accessCode"
                required
                errors={errors}
                touched={touched}
              />
              <button type="submit">Отправить</button>
            </Form>
          )}
        </Formik>
      ) : (
        <Formik
          initialValues={{ email: "" }}
          validationSchema={ForgotPasswordEmailSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            resetForm();
            setTimeout(() => {
              setIsAccessCodeSended(true);
            }, 0);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <TextInput
                id="email"
                label="Почта"
                name="email"
                required
                type="email"
                errors={errors}
                touched={touched}
              />
              <button type="submit">Отправить</button>
            </Form>
          )}
        </Formik>
      )}
    </ForgotPasswordWrapper>
  );
};

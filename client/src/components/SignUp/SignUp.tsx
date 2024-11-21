import { ReactElement } from "react";
import TextInput from "../TextInput/TextInput";
import { Formik, Form } from "formik";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
import { FormWrapper } from "@/styled/FormWrapper";
import { FormHeader } from "@/styled/FormHeader";
import { FormFooter } from "@/styled/FormFooter";

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
    <FormWrapper>
      <FormHeader>
        <p>Регистрация профиля</p>
      </FormHeader>
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
      <FormFooter>
        У вас уже есть профиль? <NavLink to={"/signin"}>Войти</NavLink>
      </FormFooter>
    </FormWrapper>
  );
};

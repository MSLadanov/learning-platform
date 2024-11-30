import { ReactElement } from "react";
import TextInput from "../TextInput/TextInput";
import { FormWrapper } from "@/styled/Form/FormWrapper";
import { FormHeader } from "@/styled/Form/FormHeader";
import { Formik, Form } from "formik";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
import { FormFooter } from "@/styled/Form/FormFooter";
import { userAPIInstance } from "@/api/user";

const SignInSchema = Yup.object().shape({
  login: Yup.string().required("Обязательное поле"),
  password: Yup.string()
    .min(6, "Минимум 6 букв")
    .max(20, "Максимум 20 букв")
    .required("Обязательное поле"),
});

export const SignIn = (): ReactElement => {
  return (
    <FormWrapper>
      <FormHeader>
        <p>Войти в профиль</p>
      </FormHeader>
      <Formik
        initialValues={{ login: "", password: "" }}
        validationSchema={SignInSchema}
        onSubmit={(values) => {
          console.log(values);
          const { login, password } = values;
          userAPIInstance.logIn({ login, password });
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
      <FormFooter>
        У вас нет профиля? <NavLink to={"/signup"}>Зарегистрироваться</NavLink>
      </FormFooter>
    </FormWrapper>
  );
};

import { ReactElement, useEffect } from "react";
import TextInput from "../TextInput/TextInput";
import { Formik, Form } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { FormWrapper } from "@/styled/Form/FormWrapper";
import { FormHeader } from "@/styled/Form/FormHeader";
import { FormFooter } from "@/styled/Form/FormFooter";
import { userAPIInstance } from "@/api/user";
import Cookies from "js-cookie";
import { useSnackbar } from "@/context/SnackbarContext";

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
  const navigate = useNavigate();
  const token = Cookies.get("authToken");
  const { openSnackbar } = useSnackbar();
  useEffect(() => {
    if (token) {
      navigate("/courses");
    }
  }, [token]);
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
          const { fullname, login, email, password } = values;
          userAPIInstance
            .register({ fullname, login, email, password })
            .then(() => userAPIInstance.logIn({ login, password }))
            .then(() => navigate("/courses"))
            .then(() =>
              openSnackbar("Пользователь успешно зарегистрирован!", "success")
            )
            .catch((error) => openSnackbar(error.message, "error"));
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

import { ReactElement, useState } from "react";
import TextInput from "../TextInput/TextInput";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { FormWrapper } from "@/styled/FormWrapper";
import { FormHeader } from "@/styled/FormHeader";

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
    <FormWrapper>
      <FormHeader>
        <p>Восстановление пароля</p>
      </FormHeader>
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
    </FormWrapper>
  );
};

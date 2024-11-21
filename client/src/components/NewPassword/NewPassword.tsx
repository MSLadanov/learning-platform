import { ReactElement } from "react";
import TextInput from "../TextInput/TextInput";
import { FormWrapper } from "@/styled/FormWrapper";
import { FormHeader } from "@/styled/FormHeader";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const newPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Минимум 6 буквы")
    .max(20, "Максимум 20 букв")
    .required("Обязательное поле"),
});

export const NewPassword = (): ReactElement => {
  return (
    <FormWrapper>
      <FormHeader>
        <p>Восстановление пароля</p>
      </FormHeader>
      <Formik
        initialValues={{ password: "" }}
        validationSchema={newPasswordSchema}
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
    </FormWrapper>
  );
};

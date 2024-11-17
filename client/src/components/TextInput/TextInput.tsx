import { Field, FieldProps } from "formik";
import styled from "styled-components";

const InputField = styled.div`
  margin: 20px 0;
  position: relative;

  input {
    border: none;
    border-bottom: 1px solid #9e9e9e;
    outline: none;
    padding: 8px 0 4px;
    width: 100%;
    font-size: 16px;
    transition: border-color 0.2s ease;

    &:focus {
      border-bottom: 1px solid #148c88;
      box-shadow: 0 1px 0 0 #4caf50;
    }

    &:focus + label,
    &:valid + label {
      top: -20px;
      left: 0;
      font-size: 12px;
      color: #148c88;
    }
  }
`;

const Label = styled.label`
  color: #9e9e9e;
  position: absolute;
  left: 3px;
  top: 3px;
  transition: all 0.2s ease;
`;

const ErrorText = styled.div`
  font-size: 11px;
  color: #e53935;
`

interface ITextInputProps {
  id: string;
  label: string;
  name: string;
  required: boolean;
  errors: any;
  touched: any;
  type?: string;
}

const TextInput = ({
  id,
  label,
  name,
  required,
  errors,
  touched,
  type = "text",
}: ITextInputProps) => {
  return (
    <>
      <Field name={name}>
        {({ field }: FieldProps) => (
          <InputField>
            <input id={id} type={type} required={required} {...field} />
            <Label htmlFor={id}>{label}</Label>
          </InputField>
        )}
      </Field>
      {errors[name] && touched[name] ? <ErrorText>{errors[name]}</ErrorText> : null}
    </>
  );
};

export default TextInput;

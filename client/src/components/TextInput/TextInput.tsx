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
      border-bottom: 1px solid #4caf50;
      box-shadow: 0 1px 0 0 #4caf50;
    }

    &:focus + label,
    &:valid + label {
      top: -20px;
      left: 0;
      font-size: 12px;
      color: #4caf50;
    }
  }
`;

const Label = styled.label`
  color: #9e9e9e;
  position: absolute;
  left: 0;
  top: 10px;
  transition: all 0.2s ease;
`;

interface ITextInputProps {
  id: string;
  label: string;
  required: boolean;
}

const TextInput = ({ id, label, required }: ITextInputProps) => {
  return (
    <InputField>
      <input id={id} type="text" required={required} />
      <Label htmlFor={id}>{label}</Label>
    </InputField>
  );
};

export default TextInput;

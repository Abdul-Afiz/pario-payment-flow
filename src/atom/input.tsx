import styled from "styled-components";
import { InputProps } from "../utils/types";
import { Text } from "./Typography";

export const InputContainer = styled.div<InputProps>`
  width: ${({ width }) => width ?? "100%"};
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;

  label {
    font-size: 1.25rem;
    color: #000;
    font-weight: 700;
    display: flex;
    justify-content: flex-start;

    sup {
      color: ${({ theme }) => theme.colors.red};
      font-weight: 400;
      font-size: 1.25rem;
      margin-left: 0.5rem;
    }
  }

  .input-wrapper {
    border: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
    border-radius: 0.625rem;
    margin-top: 1rem;
    width: 100%;
    background: ${({ theme }) => theme.colors.white};
    padding: 1.06rem 1.68rem;

    input {
      width: 100%;
      border: none;
      outline: none;
      font-size: 1.25rem;
      color: ${({ theme }) => theme.colors.grey};
      background: transparent;

      &::placeholder {
        color: ${({ theme }) => theme.colors["grey2"]};
      }
    }
  }
`;

const Input = ({
  name,
  title,
  value,
  width,
  description,
  required,
  placeholder,
}: InputProps) => {
  return (
    <InputContainer width={width}>
      <label htmlFor={title}>
        {title} {required && <sup>*</sup>}
      </label>
      {description && (
        <Text color="lightBlue" mg="1rem 0 0 0">
          {description}
        </Text>
      )}
      <div className="input-wrapper">
        <input
          type="text"
          required={required}
          value={value}
          id={title}
          name={name}
          placeholder={placeholder}
        />
      </div>
    </InputContainer>
  );
};

export default Input;

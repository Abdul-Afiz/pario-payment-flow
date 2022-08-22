import { MutableRefObject } from "react";
import styled from "styled-components";
import { InputProps, TextProps } from "../utils/types";
import { Text } from "./Typography";

export const InputContainer = styled.div<InputProps & { bold?: boolean }>`
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
      color: ${({ theme }) => theme.colors.grey2};
      background: transparent;

      &::placeholder {
        color: ${({ theme }) => theme.colors["grey"]};
      }
    }
  }
`;

const Input = ({
  name,
  type,
  bold,
  error,
  title,
  value,
  width,
  required,
  description,
  maxLength,
  placeholder,
  handleChange,
  ...props
}: InputProps & { bold?: boolean }) => {
  return (
    <InputContainer width={width} bold={bold}>
      <label htmlFor={title}>
        {title} {required && <sup>*</sup>}
      </label>
      {description ? (
        <Text color="lightBlue" mg="1rem 0 0 0">
          {description}
        </Text>
      ) : error ? (
        <Text color="red" mg="1rem 0 0 0">
          {error}
        </Text>
      ) : null}

      <div className="input-wrapper">
        <input
          onChange={handleChange as React.ChangeEventHandler<HTMLInputElement>}
          name={name}
          type={type ?? "text"}
          required={required}
          value={value}
          id={title}
          placeholder={placeholder}
          maxLength={maxLength ?? 25}
          {...props}
        />
      </div>
    </InputContainer>
  );
};

export default Input;

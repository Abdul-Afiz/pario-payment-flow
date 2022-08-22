import styled from "styled-components";
import { InputContainer } from "./input";
import { InputProps } from "../utils/types";

const SelectContainer = styled(InputContainer)<InputProps>`
  .input-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;

    select {
      width: 100%;
      font-size: 1.25rem;
      border: none;
      outline: none;
      option {
        font-size: 2rem;
      }
    }

    .select {
      position: absolute;
      width: 95%;
      top: 1px;
      left: 2px;
      padding-left: 1rem;
      padding-top: 0.5rem;
      border-radius: 0.5rem;
      background: ${({ theme }) => theme.colors.white};
      display: ${({ show }) => (show ? "block" : "none")};
    }
  }
`;

interface SelectProps extends InputProps {
  options: Array<string>;
}

const Select = ({
  title,
  name,
  required,
  width,
  options,
  handleChange,
}: SelectProps) => {
  return (
    <SelectContainer width={width}>
      <label htmlFor={title}>
        {title} {required && <sup>*</sup>}
      </label>
      <div className="input-wrapper">
        <select
          name={name}
          onChange={handleChange as React.ChangeEventHandler<HTMLSelectElement>}
        >
          {options.map((val) => {
            return <option key={val}>{val}</option>;
          })}
        </select>
      </div>
    </SelectContainer>
  );
};

export default Select;

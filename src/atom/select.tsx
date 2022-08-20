import styled from "styled-components";
import { InputContainer } from "./input";
import { InputProps } from "../utils/types";
import { Text } from "./Typography";
import { useState } from "react";
import CaretDown from "../vectors/caret-down";

const SelectContainer = styled(InputContainer)<InputProps>`
  .input-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;

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

const Select = ({ title, value, required, width, options }: SelectProps) => {
  const [toggle, setToggle] = useState(false);
  const [state, setState] = useState(options[0]);

  return (
    <SelectContainer show={toggle} width={width}>
      <label htmlFor={title}>
        {title} {required && <sup>*</sup>}
      </label>
      <div className="input-wrapper" onClick={() => setToggle(!toggle)}>
        <Text>{state}</Text> <CaretDown onClick={() => setToggle(!toggle)} />
        <div className="select" onClick={() => setToggle(!toggle)}>
          {options.map((val, i) => (
            <Text
              key={val}
              hoverColor="primary"
              pd="0.5rem"
              onClick={() => {
                setState(val);
                setToggle(!toggle);
              }}
            >
              {val}
            </Text>
          ))}
        </div>
      </div>
    </SelectContainer>
  );
};

export default Select;

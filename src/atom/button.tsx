import styled from "styled-components";
import { ButtonProps } from "../utils/types";

const StyledButton = styled.button<ButtonProps>`
  background: ${({ isSecondary, theme }) =>
    isSecondary ? theme.colors.white : theme.colors.btnGradient};
  border-radius: 0.625rem;
  border: none;
  /* padding: 0.5rem 2.5rem;
   */
  width: 14.875rem;
  height: 3.625rem;
  outline: none;
  color: ${({ color, theme }) =>
    theme.colors[color as string] ?? theme.colors.secondary};
  font-size: 1.25rem;
  font-weight: 700;
  margin: ${({ mg }) => mg};

  &:hover {
    border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
  }
`;

const Button = ({
  title,
  isSecondary,
  onClick,
  type,
  mg,
  color,
}: ButtonProps) => {
  return (
    <StyledButton
      isSecondary={isSecondary}
      onClick={onClick}
      type={type ? type : "button"}
      mg={mg}
      color={color}
    >
      {title}
    </StyledButton>
  );
};

export default Button;

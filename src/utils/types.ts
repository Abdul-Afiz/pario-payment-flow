export interface ButtonProps {
  title?: string;
  onClick?: () => void;
  type?: "button" | "reset" | "submit";
  isSecondary?: boolean;
  mg?: string;
  color?: string;
}

export interface InputProps {
  width?: string;
  title?: string;
  value?: string;
  description?: string;
  required?: boolean;
  name?: string;
  placeholder?: string;
  show?: boolean;
}

export interface TextProps {
  h1?: boolean;
  h4?: boolean;
  bold?: boolean;
  color?: string;
  pd?: string;
  mg?: string;
  hoverColor?: string;
}

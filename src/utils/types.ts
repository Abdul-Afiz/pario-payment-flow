import { ChangeEvent, ChangeEventHandler, DetailedHTMLProps } from "react";

export interface ButtonProps {
  title?: string;
  onClick?: () => void;
  type?: "button" | "reset" | "submit";
  isSecondary?: boolean;
  mg?: string;
  color?: string;
}

export type InputProps = {
  width?: string;
  title?: string;
  value?: string;
  description?: string;
  required?: boolean;
  name?: string;
  type?: string;
  maxLength?: number;
  error?: string | null;
  handleChange?:
    | ChangeEventHandler<HTMLInputElement>
    | ChangeEventHandler<HTMLSelectElement>;
  placeholder?: string;
  show?: boolean;
} & DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export interface TextProps {
  h1?: boolean;
  width?: string;
  h4?: boolean;
  bold?: boolean;
  color?: string;
  pd?: string;
  mg?: string;
  decoration?: string;
  hoverColor?: string;
}

export type eventProp =
  | ChangeEvent<HTMLInputElement>
  | ChangeEvent<HTMLSelectElement>;

export type dataType = Record<string, string>;

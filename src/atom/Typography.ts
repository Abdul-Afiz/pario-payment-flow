import styled from "styled-components";
import { TextProps } from "../utils/types";

export const Heading = styled.h1<TextProps>`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 700;
  font-size: ${({ h1 }) => (h1 ? "3rem" : "2.25rem")};
  margin: ${({ mg }) => mg};
`;

export const Text = styled.span<TextProps>`
  display: block;
  color: ${({ theme, color }) => theme.colors[(color as string) ?? "grey2"]};
  font-weight: ${({ bold }) => (bold ? "700" : "400")};
  font-size: ${({ h4 }) => (h4 ? "1.5rem" : "1.25rem")};
  padding: ${({ pd }) => pd};
  margin: ${({ mg }) => mg};
  cursor: pointer;
  width: ${({ width }) => width};
  text-decoration: ${({ decoration }) => decoration};
  :hover {
    color: ${({ theme, hoverColor }) => theme.colors[hoverColor as string]};
  }
`;

import { ReactNode } from "react";
import styled from "styled-components";
import Button from "../atom/button";

const Form = styled.form`
  margin: 3rem 0 2rem 0;
  .form-btn {
    width: 50%;
    display: flex;
    justify-content: space-between;
  }
`;

const FormLayout = ({
  children,
  onSubmit,
  onCancel,
  primaryBtn,
}: {
  children: ReactNode;
  onSubmit?: () => void;
  onCancel?: () => void;
  primaryBtn?: string;
}) => {
  return (
    <Form onSubmit={onSubmit}>
      {children}
      <div className="form-btn">
        <Button
          title={primaryBtn ?? "Next"}
          type="submit"
          color="white"
          mg="0 1rem 0 0"
        />
        <Button title="Cancel Payment" isSecondary onClick={onCancel} />
      </div>
    </Form>
  );
};

export default FormLayout;

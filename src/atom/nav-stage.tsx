import styled from "styled-components";
import { Text } from "./Typography";

const Wrapper = styled.div`
  width: auto;
  position: relative;

  .indicator {
    position: absolute;
    height: 0.8125rem;
    width: 100%;
    background: ${({ theme }) => theme.colors["primary"]};
    border-radius: 0.625rem;
    bottom: -6px;
  }
`;

const NavStage = ({
  text,
  onClick,
  isActive,
}: {
  text: string;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <Wrapper onClick={onClick}>
      <Text
        color={isActive ? "primary" : "light"}
        h4
        bold
        pd="0 1rem 1.25rem 1rem"
      >
        {text}
      </Text>
      {isActive && <span className="indicator"></span>}
    </Wrapper>
  );
};

export default NavStage;

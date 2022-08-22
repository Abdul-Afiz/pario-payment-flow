import { useState } from "react";
import styled from "styled-components";
import NavStage from "../atom/nav-stage";

const TabContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors["black"]};
`;

const NavTab = ({
  stages = [],
  stage,
  handleChange,
}: {
  stages?: Array<string>;
  stage?: number;
  handleChange: (i: number) => void;
}) => {
  return (
    <TabContainer>
      {stages.map((val, i) => (
        <NavStage
          key={val}
          isActive={i === stage}
          text={val}
          onClick={() => handleChange(i)}
        />
      ))}
    </TabContainer>
  );
};

export default NavTab;

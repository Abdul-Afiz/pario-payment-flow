import { useState } from "react";
import styled from "styled-components";
import NavStage from "../atom/nav-stage";

const TabContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors["black"]};
`;

const NavTab = () => {
  const [stage, setStage] = useState(0);
  const stages = ["Personal Info", "Billing Info", "Confirm Payment"];

  return (
    <TabContainer>
      {stages.map((val, i) => (
        <NavStage
          key={val}
          isActive={i === stage}
          text={val}
          onClick={() => setStage(i)}
        />
      ))}
    </TabContainer>
  );
};

export default NavTab;

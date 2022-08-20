import React from "react";
import styled from "styled-components";
import PageBackgroundSvg from "../vectors/page-background";

const PageContainer = styled.div`
  position: relative;

  .child {
    position: absolute;
    top: 20%;
    left: 25%;
    right: 25%;
  }
`;

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <PageContainer>
      <PageBackgroundSvg />
      <div className="child">{children}</div>
    </PageContainer>
  );
};

export default PageLayout;

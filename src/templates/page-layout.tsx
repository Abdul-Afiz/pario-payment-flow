import React from "react";
import styled from "styled-components";
import PageBackgroundSvg from "../vectors/page-background";

const PageContainer = styled.div<{ center?: boolean }>`
  position: relative;

  .child {
    position: absolute;
    top: ${({ center }) => (center ? "25%" : "18%")};
    left: 25%;
    right: 25%;
  }
`;

const PageLayout = ({
  children,
  center,
}: {
  children: React.ReactNode;
  center?: boolean;
}) => {
  return (
    <PageContainer center={center}>
      <PageBackgroundSvg />
      <div className="child">{children}</div>
    </PageContainer>
  );
};

export default PageLayout;

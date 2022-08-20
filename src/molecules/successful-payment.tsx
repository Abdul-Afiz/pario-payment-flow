import React from "react";
import styled from "styled-components";
import SuccessMark from "../vectors/success-mark";

const StyledContainer = styled.div`
  height: 30rem;
  /* width: 100%; */
  background-color: white;
  .success-circle {
    box-shadow: 0px 6px 10px rgba(33, 30, 67, 0.08);
  }
`;

const SuccessfulPaymentCard = () => {
  return (
    <StyledContainer>
      <div className="success-circle">
        <SuccessMark />
      </div>
    </StyledContainer>
  );
};

export default SuccessfulPaymentCard;

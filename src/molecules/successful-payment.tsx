import styled from "styled-components";
import { Heading, Text } from "../atom/Typography";
import SuccessMark from "../vectors/successful-mark";

const StyledContainer = styled.div`
  width: 100%;
  height: 30rem;
  background-color: white;
  box-shadow: 0px 6px 10px rgba(33, 30, 67, 0.08);
  border-radius: 10px;
  padding: 4.1875rem 0 0 0;

  .center {
    display: grid;
    row-gap: 1.875rem;
    max-width: 55.5%;
    margin: 0 auto;

    .success,
    .success-indicator {
      display: grid;
      place-items: center;
      .success-indicator {
        margin-bottom: 0.5rem;
        height: 5.25rem;
        width: 5.25rem;
        border-radius: 50%;
        padding: 0.75rem 0.8125rem;
        box-shadow: 0px 6px 10px rgba(33, 30, 67, 0.08);
      }
    }
  }
`;

const SuccessfulPaymentCard = ({
  navigateDefault,
}: {
  navigateDefault: () => void;
}) => {
  return (
    <StyledContainer>
      <div className="center">
        <div className="success">
          <div className="success-indicator">
            <SuccessMark />
          </div>
          <Heading h1 mg="0 0 0 0">
            Purchase Completed
          </Heading>
        </div>
        <Text color="grey2" width="80%">
          Please check your email for details concerning this transaction
        </Text>

        <Text
          color="primary"
          decoration="underline"
          pd="0 0 0.5rem 0"
          onClick={navigateDefault}
        >
          Return Home
        </Text>
      </div>
    </StyledContainer>
  );
};

export default SuccessfulPaymentCard;

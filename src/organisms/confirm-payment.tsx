import React from "react";
import FormLayout from "../templates/form-layout";
import PaymentConfirmationCard from "../molecules/payment-confirmation-card";

const ConfirmPayment = ({ nextStage }: { nextStage: () => void }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    nextStage();
  };
  return (
    <FormLayout primaryBtn="Pay" onSubmit={handleSubmit}>
      <PaymentConfirmationCard />
    </FormLayout>
  );
};

export default ConfirmPayment;

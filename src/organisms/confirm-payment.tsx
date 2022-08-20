import React from "react";
import FormLayout from "../templates/form-layout";
import PaymentConfirmationCard from "../molecules/payment-confirmation-card";

const ConfirmPayment = () => {
  return (
    <FormLayout primaryBtn="Pay">
      <PaymentConfirmationCard />
    </FormLayout>
  );
};

export default ConfirmPayment;

import { useState } from "react";
import { Heading } from "./atom/Typography";
import NavTab from "./molecules/nav-tab";
import SuccessfulPaymentCard from "./molecules/successful-payment";
import BillingInfoStage from "./organisms/billing-info";
import ConfirmPayment from "./organisms/confirm-payment";
import PersonalInfoStage from "./organisms/personal-info";
import PageLayout from "./templates/page-layout";

const App = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const [formData, setData] = useState<Record<string, string>>({});
  const handlePaymentStageChange = (data?: Record<string, string>) => {
    setCurrentStage(currentStage + 1);
    setData({ ...formData, ...data });
  };

  const stages = ["Personal Info", "Billing Info", "Confirm Payment"];

  return (
    <PageLayout center>
      {currentStage < 3 && (
        <div>
          <Heading mg="0 0 3.50rem 0">Complete your Purchase</Heading>
          <NavTab
            stages={stages}
            stage={currentStage}
            handleChange={setCurrentStage as () => void}
          />
        </div>
      )}

      {currentStage === 0 ? (
        <PersonalInfoStage nextStage={handlePaymentStageChange} />
      ) : currentStage === 1 ? (
        <BillingInfoStage nextStage={handlePaymentStageChange} />
      ) : currentStage === 2 ? (
        <ConfirmPayment nextStage={handlePaymentStageChange} />
      ) : currentStage === 3 ? (
        <SuccessfulPaymentCard navigateDefault={() => setCurrentStage(0)} />
      ) : (
        <PersonalInfoStage nextStage={handlePaymentStageChange} />
      )}
    </PageLayout>
  );
};

export default App;

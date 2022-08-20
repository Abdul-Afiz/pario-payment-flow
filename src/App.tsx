import { Heading } from "./atom/Typography";
import NavTab from "./molecules/nav-tab";
import SuccessfulPaymentCard from "./molecules/successful-payment";
import BillingInfoStage from "./organisms/billing-info";
import ConfirmPayment from "./organisms/confirm-payment";
import PersonalInfoStage from "./organisms/personal-info";
import PageLayout from "./templates/page-layout";

const App = () => {
  return (
    <PageLayout>
      <Heading mg="0 0 3.50rem 0">Complete your Purchase</Heading>
      {/* <NavTab /> */}
      {/* <PersonalInfoStage /> */}
      {/* <BillingInfoStage /> */}
      {/* <ConfirmPayment /> */}
      <SuccessfulPaymentCard />
    </PageLayout>
  );
};

export default App;

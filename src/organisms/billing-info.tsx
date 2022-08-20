import Input from "../atom/input";
import Select from "../atom/select";
import FormLayout from "../templates/form-layout";
import { StyledDiv } from "./personal-info";

const BillingInfo = () => {
  return (
    <FormLayout>
      <Input title="Name on Card" required placeholder="Opara Linus Ahmed" />

      <Select
        options={["Visa", "Master Card", "Verve"]}
        title="Card Type"
        required
      />

      <StyledDiv>
        <Input
          title="Card details"
          required
          placeholder="44960 44960 44960 44960"
          width="60%"
        />
        <Input title="Expiry date" required placeholder="04 / 23" width="20%" />
        <Input title="CVV" required placeholder="923" width="20%" />
      </StyledDiv>
    </FormLayout>
  );
};

export default BillingInfo;

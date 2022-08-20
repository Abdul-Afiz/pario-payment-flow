import styled from "styled-components";
import Input from "../atom/input";
import Select from "../atom/select";
import FormLayout from "../templates/form-layout";

export const StyledDiv = styled.div`
  display: flex;
  align-items: flex-end;
  column-gap: 2rem;
`;

const PersonalInfoStage = () => {
  return (
    <FormLayout>
      <Input title="Name" placeholder="Opara Linus Ahmed" />
      <Input
        title="Email"
        required
        description="The purchase reciept would be sent to this address"
        placeholder="OparaLinusAhmed@devmail.com"
      />
      <Input
        title="Address 1"
        placeholder="The address of the user goes here"
      />
      <Input title="Address 2" placeholder="and here" />
      <StyledDiv>
        <Input title="Local Government" placeholder="Surulere" width="70%" />
        <Select
          width="30%"
          title="State"
          options={["Lagos", "Ojuelegba", "Duni"]}
        />
      </StyledDiv>
    </FormLayout>
  );
};

export default PersonalInfoStage;

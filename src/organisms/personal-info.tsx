import { useState } from "react";
import styled from "styled-components";
import Input from "../atom/input";
import Select from "../atom/select";
import FormLayout from "../templates/form-layout";
import { dataType, eventProp } from "../utils/types";

export const StyledDiv = styled.div`
  display: flex;
  align-items: flex-end;
  column-gap: 2rem;
`;

const PersonalInfoStage = ({
  nextStage,
}: {
  nextStage: (data: dataType) => void;
}) => {
  const [formField, setFormField] = useState({
    name: "",
    email: "",
    address1: "",
    address2: "",
    localGovernment: "",
    state: "",
  });
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const states = ["Lagos", "Kano", "Abuja", "Ibadan", "Akure"];
  const handleChange = (e: eventProp) => {
    const name = e.target.name;
    const value = e.target.value;
    const type = e.target.type;
    type === "select-one"
      ? setFormField({ ...formField, [name]: value })
      : setFormField({ ...formField, [name]: value, state: states[0] });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    nextStage({ ...formField });
    setFormField({
      name: "",
      email: "",
      address1: "",
      address2: "",
      localGovernment: "",
      state: "",
    });
  };

  return (
    <FormLayout onSubmit={handleSubmit}>
      <Input
        value={formField["name"]}
        error={errorMsg}
        name="name"
        handleChange={handleChange}
        title="Name"
        placeholder="Opara Linus Ahmed"
      />
      <Input
        name="email"
        error={errorMsg}
        handleChange={handleChange}
        value={formField["email"]}
        title="Email"
        type="email"
        required={true}
        description="The purchase reciept would be sent to this address"
        placeholder="OparaLinusAhmed@devmail.com"
      />
      <Input
        name="address1"
        error={errorMsg}
        handleChange={handleChange}
        value={formField["address1"]}
        title="Address 1"
        placeholder="The address of the user goes here"
      />
      <Input
        name="address2"
        error={errorMsg}
        handleChange={handleChange}
        value={formField["address2"]}
        title="Address 2"
        placeholder="and here"
      />

      <StyledDiv>
        <Input
          name="localGovernment"
          error={errorMsg}
          handleChange={handleChange}
          value={formField["localGovernment"]}
          title="Local Government"
          placeholder="Surulere"
          width="70%"
        />
        <Select
          name="state"
          required
          handleChange={handleChange}
          width="30%"
          title="State"
          options={states}
        />
      </StyledDiv>
    </FormLayout>
  );
};

export default PersonalInfoStage;

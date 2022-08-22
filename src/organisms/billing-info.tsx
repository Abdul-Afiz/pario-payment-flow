import { useState } from "react";
import Input from "../atom/input";
import Select from "../atom/select";
import FormLayout from "../templates/form-layout";
import { cardNumberSeperator } from "../utils/hooks";
import { dataType, eventProp } from "../utils/types";
import { StyledDiv } from "./personal-info";

const BillingInfo = ({
  nextStage,
}: {
  nextStage: (data: dataType) => void;
}) => {
  const [formField, setFormField] = useState({
    cardName: "",
    cardType: "",
    cardDetails: "",
    expiryDate: "",
    cvv: "",
  });
  const [error, setError] = useState<string | null>(null);

  const cardTypes = ["Visa", "Master Card", "Verve"];

  const handleChange = (e: eventProp) => {
    const name = e.target.name;
    const value = e.target.value;
    const type = e.target.type;

    type === "select-one"
      ? setFormField({ ...formField, [name]: value })
      : setFormField({ ...formField, [name]: value, cardType: cardTypes[0] });

    name === "cardDetails"
      ? setFormField({
          ...formField,
          [name]: cardNumberSeperator(value, name) as string,
        })
      : name === "expiryDate"
      ? setFormField({
          ...formField,
          [name]: cardNumberSeperator(value, name) as string,
        })
      : setFormField({ ...formField, [name]: value });
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    nextStage({ ...formField });
    setFormField({
      cardName: "",
      cardType: "",
      cardDetails: "",
      expiryDate: "",
      cvv: "",
    });
  }

  return (
    <FormLayout onSubmit={handleSubmit}>
      <Input
        title="Name on Card"
        error={error}
        required
        name="cardName"
        placeholder="Opara Linus Ahmed"
        value={formField["cardName"]}
        handleChange={handleChange}
      />

      <Select
        options={cardTypes}
        title="Card Type"
        required
        name="cardType"
        handleChange={handleChange}
      />

      <StyledDiv>
        <Input
          title="Card details"
          error={error}
          required
          placeholder="44960 44960 44960 44960"
          width="60%"
          name="cardDetails"
          maxLength={19}
          value={formField["cardDetails"]}
          handleChange={handleChange}
        />
        <Input
          title="Expiry date"
          error={error}
          required
          placeholder="04/23"
          maxLength={5}
          width="20%"
          name="expiryDate"
          value={formField["expiryDate"]}
          handleChange={handleChange}
        />
        <Input
          title="CVV"
          bold
          error={error}
          required
          placeholder="923"
          width="20%"
          name="cvv"
          maxLength={3}
          value={formField["cvv"]}
          handleChange={handleChange}
        />
      </StyledDiv>
    </FormLayout>
  );
};

export default BillingInfo;

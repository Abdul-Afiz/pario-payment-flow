export const generateId = () => Math.random().toString().substring(2, 7);

export const cardNumberSeperator = (
  value: string,
  type: "cardDetails" | "expiryDate"
) => {
  let seperatedValue = "";
  if (type === "cardDetails") {
    value = value.replace(/\s/g, "");
    for (let i = 0; i < value.length; i++) {
      if (i % 4 == 0 && i > 0) seperatedValue = seperatedValue += " ";
      const element = value[i];
      seperatedValue = seperatedValue += element;
    }
  } else if (type === "expiryDate") {
    seperatedValue = value;
    if (value.length > 2) {
      seperatedValue = value.slice(0, 2) + "/" + value.slice(3);
    }
  }
  return seperatedValue;
};

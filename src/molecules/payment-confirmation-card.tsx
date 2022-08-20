import styled from "styled-components";
import { Text } from "../atom/Typography";
import Currency from "../vectors/currency";

const CardContainer = styled.div`
  height: 100%;
  width: 100%;
  background: white;
  box-shadow: 0px 10px 15px rgba(33, 30, 67, 0.08);
  border-radius: 0.625rem;
  padding-bottom: 2.56rem;
  margin-bottom: 4.3125rem;
  .head {
    background: ${({ theme }) => theme.colors.blue};
    padding: 1.25rem 0;
    border-radius: 0.625rem 0.625rem 0 0;

    .title {
      display: flex;
      justify-content: space-between;
    }
    .currency {
      display: flex;
      align-items: center;
      column-gap: 0.6575rem;
    }
  }

  .payment-info {
    display: flex;
    flex-direction: column;
    row-gap: 2.5rem;
    padding-top: 3.5rem;

    .items {
      display: flex;
      justify-content: space-between;
    }
  }

  .divider {
    border: 0.5px solid #817e9e;
    width: 100%;
    margin: 2.3125rem auto;
    max-width: 90%;
  }

  .center {
    max-width: 80%;
    margin: 0 auto;
  }

  .total {
    display: flex;
    justify-content: space-between;
    padding: 0.875rem 1.2325rem;
    border-radius: 0.3125rem;
    border: 1px solid ${({ theme }) => theme.colors.lightBlue};
    max-width: 85%;
  }
`;

const Index = () => {
  const items = [
    { name: "Data science and usability", price: "50,000.00" },
    { name: "Shipping", price: "0.00" },
  ];

  return (
    <CardContainer>
      <div className="head">
        <div className="title center">
          <Text color="white" bold>
            Item Name
          </Text>

          <div className="currency">
            <Currency />
            <Text color="white" bold>
              {" "}
              Price
            </Text>
          </div>
        </div>
      </div>
      <div className="payment-info center">
        {items.map(({ name, price }, i) => (
          <div key={i} className="items">
            {" "}
            <Text color="secondary">{name}</Text>{" "}
            <Text color="secondary" bold>
              {price}
            </Text>
          </div>
        ))}
      </div>

      <div className="divider"></div>

      <div className="total center">
        <Text color="lightBlue">Total</Text>{" "}
        <Text color="secondary" bold>
          50,000.00
        </Text>
      </div>
    </CardContainer>
  );
};

export default Index;

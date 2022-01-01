import "./Bank.css";
import { useContext } from "react";
import TotalContext from "../../totalContext";
import { currencyFormatter } from "../../businessLogic";

const Bank = (props) => {
  const totalObject = useContext(TotalContext);

  return (
    <section className="bank-container">
      <h3>Bank:</h3>
      <div className="amount">
        {currencyFormatter.format(totalObject.total)}
      </div>
    </section>
  );
};

export default Bank;

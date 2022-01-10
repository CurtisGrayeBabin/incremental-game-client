import "./Bank.css";
import { useContext } from "react";
import TotalContext from "../../totalContext";

const Bank = (props) => {
  const totalObject = useContext(TotalContext);

  return (
    <section className="bank-container">
      <h3>Bank:</h3>
      <div className="amount">{totalObject.formattedTotal}</div>
    </section>
  );
};

export default Bank;

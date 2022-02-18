import "./Bank.css";
import { useContext } from "react";
import TotalContext from "../../totalContext";

const Bank = (props) => {
  const totalObject = useContext(TotalContext);

  return (
    <section className="bank-container">
      <div className="amount">{totalObject.formattedTotal}</div>
    </section>
  );
};

export default Bank;

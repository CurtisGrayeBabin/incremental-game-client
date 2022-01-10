import "./ClickButton.css";
import { useContext } from "react";
import TotalContext from "../../totalContext";
import { currencyFormatter } from "../../businessLogic";

const ClickButton = (props) => {
  // get the global total and total setter
  const totalObject = useContext(TotalContext);

  // increment the total
  const clickEvent = (e) => {
    totalObject.setBank(totalObject.bank + totalObject.earnClickRate);
  };

  return (
    <div className="button">
      <button onClick={clickEvent}>
        +{currencyFormatter.format(totalObject.earnClickRate)}
      </button>
    </div>
  );
};

export default ClickButton;

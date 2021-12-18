import { useContext } from "react";
import TotalContext from "../../totalContext";
import "./ClickButton.css";
import { currencyFormatter } from "../../businessLogic";

const ClickButton = (props) => {
  // get the global total and total setter
  const totalObject = useContext(TotalContext);

  // increment the total
  const clickEvent = (e) => {
    totalObject.setTotal(totalObject.total + totalObject.earnRate);
  };

  return (
    <div className="button">
      <button onClick={clickEvent}>
        +{currencyFormatter.format(totalObject.earnRate)}
      </button>
    </div>
  );
};

export default ClickButton;

import { useContext } from "react";
import TotalContext from "../../totalContext";
import "./ClickButton.css";

function ClickButton(props) {
  // get the global total and total setter
  const totalObject = useContext(TotalContext);

  // increment the total
  const clickEvent = (e) => {
    totalObject.setTotal(totalObject.total + 1);
  };

  return (
    <div className="button">
      <button onClick={clickEvent}>Earn $1</button>
    </div>
  );
}

export default ClickButton;

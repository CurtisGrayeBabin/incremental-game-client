import "./Store.css";
import { useContext, useState, useEffect } from "react";
import TotalContext from "../../totalContext";
import { VscChromeClose } from "react-icons/vsc";
import { handleScratcherBuy } from "../../businessLogic";

// simple component that displays at the bottom of the store window when a player buys something
const Result = (props) => {
  return (
    <div className={props.showResult ? "showing" : "hidden"}>
      <p
        className={props.resultStatus === "bad" ? "result-bad" : "result-good"}
      >
        {props.resultMessage}
      </p>
    </div>
  );
};

const Store = (props) => {
  // get the global total and total setter
  const totalObject = useContext(TotalContext);
  const [showResult, setResult] = useState(false);
  const [resultStatus, setResultStatus] = useState("neutral");
  const [resultMessage, setResultMessage] = useState("");

  const closeStore = (e) => {
    props.setStoreShowing(!props.storeShowing);
  };

  // close the result window
  useEffect(() => {
    const timerID = setTimeout(function () {
      setResult(false);
      setResultStatus("neutral");
      setResultMessage("");
    }, 3000);
    return () => clearTimeout(timerID);
  }, [showResult]);

  // red or green text that displays at the bottom of the store when the player wins or loses money
  const displayBuyResult = (status, message) => {
    setResult(true);
    setResultMessage(message);
    setResultStatus(status);
  };

  const handleBuy = (e) => {
    e.preventDefault();

    // when the player buys a scratcher
    handleScratcherBuy(totalObject, displayBuyResult);
  };

  return (
    <div className="store">
      <div className="closeButton">
        <button onClick={closeStore}>
          <VscChromeClose />
        </button>
      </div>
      <h1 className="storeTitle">Store</h1>
      <h2 className="youHave">
        You have <span className="money">{totalObject.formattedTotal}</span> to
        spend
      </h2>
      <form onSubmit={handleBuy}>
        <label htmlFor="inventory">Select an item to buy from inventory:</label>
        <br />
        <select name="inventory" id="inventory" className="selectList">
          <option value="scratcher">($1) Scratcher</option>
        </select>
        <br />
        <input type="submit" value="Buy" className="buyButton" />
      </form>

      <Result
        showResult={showResult}
        resultStatus={resultStatus}
        resultMessage={resultMessage}
      />
    </div>
  );
};

export default Store;

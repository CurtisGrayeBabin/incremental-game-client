import "./Store.css";
import { useContext, useState } from "react";
import TotalContext from "../../totalContext";
import { VscChromeClose } from "react-icons/vsc";
import { scratcherWinProbability } from "../../businessLogic";

// simple component that displays at the bottom of the store window when a player buys something
const Result = (props) => {
  const classForResult =
    props.resultStatus === "bad" ? "result-bad" : "result-good";
  return <p className={classForResult}>{props.resultMessage}</p>;
};

const Store = (props) => {
  // get the global total and total setter
  const totalObject = useContext(TotalContext);
  const [showResult, setResult] = useState(false);
  const [resultStatus, setResultStatus] = useState("neutral");
  const [resultMessage, setResultMessage] = useState("");

  //var timeoutID;

  // increment the total
  const closeStore = (e) => {
    props.setStoreShowing(!props.storeShowing);
  };

  // red or green text that displays at the bottom of the store when the player wins or loses money
  const displayBuyResult = (status, message) => {
    //setResult(false);
    //clearInterval(timeoutID);

    setResult(true);
    setResultStatus(status);
    setResultMessage(message);

    setInterval(function () {
      setResult(false);
      setResultStatus("neutral");
      setResultStatus("");
    }, 3000);
  };

  const handleBuy = (e) => {
    e.preventDefault();

    // need to have at least $1.00 to buy
    if (totalObject.bank >= 1) {
      totalObject.setBank((totalObject.bank -= 1));

      // check to see if the scracher won the player any money
      const randomValue = Math.random();
      if (randomValue < scratcherWinProbability) {
        totalObject.setBank((totalObject.bank += 2));
        displayBuyResult("good", "Your scratcher won you $2!");
      } else {
        displayBuyResult("bad", "Oof, your scratcher wasn't a winner :(");
      }
    } else {
      displayBuyResult("bad", "You don't have enough money to buy that!");
    }
  };

  return (
    <div className="store">
      <div className="closeButton">
        <button onClick={closeStore}>
          <VscChromeClose />
        </button>
      </div>
      <h1 className="storeTitle">Store</h1>
      <h2>
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
      {showResult ? (
        <Result resultStatus={resultStatus} resultMessage={resultMessage} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Store;

import "./Store.css";
import { useContext, useState, useEffect } from "react";
import TotalContext from "../../totalContext";
import { VscChromeClose } from "react-icons/vsc";
import inventoryItems from "../../purchaseLogic/storeLogic";
import { currencyFormatter } from "../../businessLogic";

// buy result component that displays at the bottom of the store window
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
  // store state of currently selected option from inventory
  const [selectKey, setSelectKey] = useState(0);

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
  const displayBuyResult = (status, message, amount) => {
    setResult(true);
    setResultMessage(`${message}${amount ? amount : ""}`);
    setResultStatus(status);
  };

  const handleBuy = (e) => {
    e.preventDefault();

    // when the player buys anything:
    // access the selected item object's buy function and pass it the necessary values
    inventoryItems[selectKey].function(totalObject, displayBuyResult);
  };

  // handle item selection
  const handleOptionChange = (e) => {
    setSelectKey(e.target.value);
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
        {/* iterates over all inventory items and adds them as select options to the store menu */}
        <select
          name="inventory"
          id="inventory"
          className="selectList"
          onChange={handleOptionChange}
        >
          {inventoryItems
            .sort((item1, item2) => item1.price - item2.price)
            .map((item, index) => {
              return (
                <option key={index} value={index}>
                  {`${currencyFormatter.format(item.price)} ${item.name}`}
                </option>
              );
            })}
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

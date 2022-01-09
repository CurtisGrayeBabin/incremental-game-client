import "./Store.css";
import { useContext } from "react";
import TotalContext from "../../totalContext";
import { VscChromeClose } from "react-icons/vsc";

const Store = (props) => {
  // get the global total and total setter
  const totalObject = useContext(TotalContext);

  // increment the total
  const closeStore = (e) => {
    props.setStoreShowing(!props.storeShowing);
    //totalObject.setTotal(totalObject.total + totalObject.earnRate);
  };

  return (
    <div className="store">
      <div className="closeButton">
        <button onClick={closeStore}>
          <VscChromeClose />
        </button>
      </div>
      <h1 className="storeTitle">Store</h1>
    </div>
  );
};

export default Store;

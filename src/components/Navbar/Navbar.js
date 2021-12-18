import { useContext } from "react";
import TotalContext from "../../totalContext";
import "./Navbar.css";
import { currencyFormatter } from "../../businessLogic";

const Navbar = (props) => {
  const totalObject = useContext(TotalContext);

  return (
    <nav className="nav">
      <h1 className="verticalCenter">CA Clicker</h1>
      <div className="total">{currencyFormatter.format(totalObject.total)}</div>
      <h2 className="verticalCenter">Created by Curtis Babin</h2>
    </nav>
  );
};

export default Navbar;

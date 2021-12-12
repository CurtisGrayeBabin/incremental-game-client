import { useContext } from "react";
import TotalContext from "../../totalContext";
import "./Navbar.css";

function Navbar(props) {
  const totalObject = useContext(TotalContext);

  return (
    <nav className="nav">
      <h1>CA Clicker</h1>
      <div className="total">${totalObject.total}</div>
      <h2>Made by Curtis Babin</h2>
    </nav>
  );
}

export default Navbar;

import "./Navbar.css";

// const totalObject = useContext(TotalContext);
// import { useContext } from "react";
// import TotalContext from "../../totalContext";
// import { currencyFormatter } from "../../businessLogic";
// <div className="total">{currencyFormatter.format(totalObject.total)}</div>

const Navbar = (props) => {
  return (
    <>
      <nav className="nav">
        <div className="logo-container">
          <h1 className="logo">CA Clicker</h1>
          <h6 className="created-by">Created by Curtis Babin</h6>
        </div>

        {/* menus */}
        <div>
          <button>Upgrades</button>
          <button>Store</button>
          <button>Settings</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

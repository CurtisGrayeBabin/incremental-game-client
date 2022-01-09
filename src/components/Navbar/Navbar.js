import "./Navbar.css";
import { IconContext } from "react-icons";
import { FiSettings, FiArrowUpCircle } from "react-icons/fi";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { default as logo } from "../../Assets/BlankCaliforniaOutline.svg";

const Navbar = (props) => {
  return (
    <>
      <nav className="nav">
        <div className="logo-container">
          <h1 className="logo">CA Clicker</h1>
          <h6 className="created-by">
            Created by{" "}
            <a href="https://www.curtisbabin.com" target="_">
              Curtis Babin
            </a>
          </h6>
        </div>

        {/* menus */}
        <div className="buttons">
          <button>
            Upgrades{" "}
            <IconContext.Provider value={{ className: "react-icons" }}>
              <FiArrowUpCircle />
            </IconContext.Provider>
          </button>
          <button>
            Store{" "}
            <IconContext.Provider value={{ className: "react-icons" }}>
              <MdOutlineLocalGroceryStore />
            </IconContext.Provider>
          </button>
          <button>
            Settings{" "}
            <IconContext.Provider value={{ className: "react-icons" }}>
              <FiSettings />
            </IconContext.Provider>
          </button>
        </div>
      </nav>
      <div className="california">
        <img src={logo} alt={"Outline of California"} />
      </div>
    </>
  );
};

export default Navbar;

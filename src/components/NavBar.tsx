import { Link } from "react-router-dom";
import "../style/NavBar.css";
import { useAuth } from "../context/GlobalState";

const NavBar = () => {
  const { state } = useAuth();
  console.log(state.user, state.basket);
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header-logo"
          src="/images/header-logo.png"
          alt="logo-img"
        />
      </Link>
      <div className="header-search">
        <input
          className="header-searchInput"
          placeholder="Search Amazon"
          type="text"
        />
        <img
          className="header-searchIcon"
          src="/images/icons/searchIcon.png"
          alt="search-icon"
        />
      </div>
      <div className="header-nav">
        <Link to={"/login"}>
          <div className="header-option">
            <span className="header-optionLineOne">
              Hello {state.user ? state.user.email : "Guest"}
            </span>
            <span className="header-optionLineTwo">
              {state.user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header-option">
            <span className="header-optionLineOne">Returns</span>
            <span className="header-optionLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header-option">
          <span className="header-optionLineOne">Your</span>
          <span className="header-optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header-optionBasket">
            <img src="/images/icons/shopping-cart.png" />
            <span className="header-optionLineTwo header-basketCount">
              {/* {basket?.length} */}5
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;

import React from "react";
import "./Header.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import brand from "./assets/brand.png";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (

    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-dark header" style={{zIndex:"100",top:"0"}} >
      
      <Link to="/">
        <div>
          <img src={brand} className="brandLogo" alt="BrandLogo" />
          <span className="text-info brandText">ReactKart</span>
        </div>
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">

          <li className="nav-item">
            <div className="nav_container">
              <span className="nav-link header__optionLineTwo">
                Hello {user ? user.email : "Guest"}
              </span>
            </div>
          </li>


          <li className="nav-item active">
            <Link to={!user && "/login"}>
              <div onClick={handleAuthentication} >
                <span className="nav-link header__optionLineTwo">
                  {user ? "Sign Out" : "Sign In"}
                </span>
              </div>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/addProduct">
              <span className="nav-link header__optionLineTwo">Add Products</span>
            </Link>
          </li>

          <li className="nav-item active">
            <Link to="/checkout">
              <div className="nav-link header__optionLineTwo">
                <ShoppingCartIcon className="shoppingCart__icon" />
                <span className="header__basketCount">
                  {basket?.length}
                </span>
              </div>
            </Link>
          </li>

        </ul>
        {/* ***********Can add Add Products option for admins only unless disabled********** 
       <li className="nav-item">
        <a className="nav-link header__optionLineTwo disabled" href="#">Disabled</a>
      </li> */}

        {/* <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <SearchIcon className="search__icon" />
        </form> */}
      </div>

    </nav>
  );
}

export default Header;

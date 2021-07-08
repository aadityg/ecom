import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <h1 className="header-logo"> amazon</h1>
      </Link>

      <div className="header-search">
        <input placeholder="Search" className="header-search-input" />
        <SearchIcon className="header-searchIcon" />
      </div>

      <div className="header-nav">
        <div className="header-option">
          <span className="header-OptionLineOne">Hello Guest</span>
          <span className="header-OptionLineTwo"> Sign In</span>
        </div>
        <div className="header-option">
          <span className="header-OptionLineOne"> Returns </span>
          <span className="header-OptionLineTwo"> Orders</span>
        </div>
        <div className="header-option">
          <span className="header-OptionLineOne"> Your</span>
          <span className="header-OptionLineTwo">Prime</span>
        </div>
        <Link to='/checkout'>
          <div className="header-optionBasket">
            <ShoppingBasketIcon />
            <span className="header-basketCount">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

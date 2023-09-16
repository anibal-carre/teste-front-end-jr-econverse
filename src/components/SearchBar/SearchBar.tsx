import React from "react";
import "./SearchBar.scss";
import shoppinCart from "../../assets/icons/ShoppingCart2.png";
import userIcon from "../../assets/icons/UserCircle2.png";
import heartIcon from "../../assets/icons/Heart2.png";
import groupIcon from "../../assets/icons/Group3.png";
import glassIcon from "../../assets/icons/MagnifyingGlass.svg";
import group40Icon from "../../assets/icons/Group 405.svg";

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
  return (
    <nav className="search-container">
      <div className="search-item logo-div">
        <img src={group40Icon} alt="vtex-logo" height={"50px"} />
      </div>
      <div className="search-item bar-div">
        <input className="searchbar" type="text" />
        <img className="glass-icon" src={glassIcon} alt="glass-icon" />
      </div>
      <div className="search-item icons-div">
        <img src={groupIcon} alt="group-icon" />
        <img src={heartIcon} alt="heart-icon" />
        <img src={userIcon} alt="user-icon" />
        <img src={shoppinCart} alt="cart-icon" />
      </div>
    </nav>
  );
};

export default SearchBar;

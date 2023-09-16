import React from "react";
import "./SearchBar.scss";

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
  return (
    <nav className="search-container">
      <div className="search-item logo-div">
        <img
          src="../../assets/icons/Group 405.svg"
          alt="vtex-logo"
          height={"50px"}
        />
      </div>
      <div className="search-item bar-div">
        <input className="searchbar" type="text" />
        <img
          className="glass-icon"
          src="../../assets/icons/MagnifyingGlass.svg"
          alt="glass-icon"
        />
      </div>
      <div className="search-item icons-div">
        <img src="../../assets/icons/Group3.png" alt="group-icon" />
        <img src="../../assets/icons/Heart2.png" alt="heart-icon" />
        <img src="../../assets/icons/UserCircle2.png" alt="user-icon" />
        <img src="../../assets/icons/ShoppingCart2.png" alt="cart-icon" />
      </div>
    </nav>
  );
};

export default SearchBar;

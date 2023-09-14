import React from "react";
import "./Header.scss";
import TopBar from "../TopBar/TopBar";
import SearchBar from "../SearchBar/SearchBar";
import CategoryBar from "../CategoryBar/CategoryBar";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="header-container">
      <TopBar />
      <div className="divider" />
      <SearchBar />
      <div className="divider" />
      <CategoryBar />
    </header>
  );
};

export default Header;

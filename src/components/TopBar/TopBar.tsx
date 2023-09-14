import React from "react";
import "./TopBar.scss";

interface TopBarProps {}

const TopBar: React.FC<TopBarProps> = () => {
  return (
    <div className="topbar-container">
      <div className="top-item">
        <img className="item-icon" src="" alt="" />
        <p className="item-text">
          Compra <span className="item-pink-text">100% segura</span>
        </p>
      </div>
      <div className="top-item">
        <img className="item-icon" src="" alt="" />
        <p className="item-text">
          Compra <span className="item-pink-text">100% segura</span>
        </p>
      </div>
      <div className="top-item">
        <img className="item-icon" src="" alt="" />
        <p className="item-text">
          Compra <span className="item-pink-text">100% segura</span>
        </p>
      </div>
    </div>
  );
};

export default TopBar;

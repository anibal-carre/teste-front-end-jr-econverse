import React from "react";
import "./TopBar.scss";

interface TopBarProps {}

const TopBar: React.FC<TopBarProps> = () => {
  return (
    <div className="topbar-container">
      <div className="top-item">
        <img
          className="item-icon"
          src="../../assets/icons/ShieldCheck.svg"
          alt="ShieldCheck"
        />
        <p className="item-text">
          Compra <span className="item-pink-text">100% segura</span>
        </p>
      </div>
      <div className="top-item">
        <img className="item-icon" src="../../assets/icons/Truck.svg" alt="" />
        <p className="item-text">
          <span className="item-pink-text">Frete grátis</span> acima de R$ 200
        </p>
      </div>
      <div className="top-item">
        <img
          className="item-icon"
          src="../../assets/icons/CreditCard.svg"
          alt=""
        />
        <p className="item-text">
          <span className="item-pink-text">Parcele</span> suas compras
        </p>
      </div>
    </div>
  );
};

export default TopBar;

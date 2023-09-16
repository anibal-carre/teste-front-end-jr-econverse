import React from "react";
import "./TopBar.scss";
import truckIcon from "../../assets/icons/Truck.svg";
import creiditIcon from "../../assets/icons/CreditCard.svg";
import checkIcon from "../../assets/icons/ShieldCheck.svg";

interface TopBarProps {}

const TopBar: React.FC<TopBarProps> = () => {
  return (
    <div className="topbar-container">
      <div className="top-item">
        <img className="item-icon" src={checkIcon} alt="ShieldCheck" />
        <p className="item-text">
          Compra <span className="item-pink-text">100% segura</span>
        </p>
      </div>
      <div className="top-item">
        <img className="item-icon" src={truckIcon} alt="" />
        <p className="item-text">
          <span className="item-pink-text">Frete grátis</span> acima de R$ 200
        </p>
      </div>
      <div className="top-item">
        <img className="item-icon" src={creiditIcon} alt="credit-icon" />
        <p className="item-text">
          <span className="item-pink-text">Parcele</span> suas compras
        </p>
      </div>
    </div>
  );
};

export default TopBar;

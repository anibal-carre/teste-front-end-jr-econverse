import React from "react";
import "./Banner.scss";

interface BannerProps {}

const Banner: React.FC<BannerProps> = () => {
  return (
    <main className="banner-container">
      <div className="banner-text-div">
        <h1 className="banner-title">Venha conhecer nossas promoções</h1>
        <p className="banner-subtitle">50% Off nos produtos</p>
      </div>

      <button className="banner-button">Ver produto</button>
    </main>
  );
};

export default Banner;

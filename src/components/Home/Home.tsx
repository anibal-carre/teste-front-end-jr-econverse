import React from "react";
import "./Home.scss";
import TopBar from "../TopBar/TopBar";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="home-container">
      <TopBar />
      <h1>Home</h1>
    </div>
  );
};

export default Home;

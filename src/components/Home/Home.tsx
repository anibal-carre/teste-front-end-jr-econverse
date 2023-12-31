import React from "react";
import "./Home.scss";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import ProductType from "../ProductType/ProductType";
import Products from "../Products/Products";
import Footer from "../Footer/Footer";
import RelationSection from "../RelationSection/RelationSection";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="home-container">
      <Header />
      <Banner />
      <ProductType />
      <Products />
      <RelationSection />
      <Footer />
    </div>
  );
};

export default Home;

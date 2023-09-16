import React from "react";
import "./ProductCard.scss";

interface ProductCardProps {}

const ProductCard: React.FC<ProductCardProps> = () => {
  return (
    <article className="products-section-cards">
      <img
        className="product-card-img"
        src="https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png"
        alt=""
      />
      <p className="product-card-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <span className="product-card-discount">R$ 30,90</span>
      <span className="product-card-price">R$ 28,90</span>
      <span className="product-card-pricex">Ou 2x de R$ 40,05</span>
      <span className="product-card-free">Frete grátis</span>
      <button className="product-card-button">Comprar</button>
    </article>
  );
};

export default ProductCard;

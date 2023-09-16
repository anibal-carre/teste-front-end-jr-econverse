import React from "react";
import "./ProductCard.scss";

interface ProductCardProps {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = (props) => {
  return (
    <article className="products-section-cards" onClick={props.onClick}>
      <img className="product-card-img" src={props.photo} alt="product-img" />
      <p className="product-card-description">{props.productName}</p>
      <span className="product-card-discount">
        R$ {(props.price + props.price / 10).toFixed(2)}
      </span>
      <span className="product-card-price">R$ {props.price.toFixed(2)}</span>
      <span className="product-card-pricex">
        Ou 2x de R$ {(props.price / 2).toFixed(2)}
      </span>
      <span className="product-card-free">Frete grátis</span>
      <button className="product-card-button">Comprar</button>
    </article>
  );
};

export default ProductCard;

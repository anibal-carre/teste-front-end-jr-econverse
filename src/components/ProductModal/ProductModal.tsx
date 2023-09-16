import React from "react";
import "./ProductModal.scss";

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;
  return (
    <div className="product-modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <div className="info-container">
          <div className="info-img">
            <img src={product.photo} alt={product.productName} />
          </div>
          <div className="info-content">
            <h2 className="modal-title">{product.productName}</h2>
            <p className="modal-price">Precio: ${product.price}</p>

            <p className="modal-description">{product.descriptionShort}</p>

            <span className="more">Veja mais detalhes do produto </span>

            <div className="counter">
              <button className="button-counter">-</button>
              <span className="result">1</span>
              <button className="button-counter">+</button>
            </div>

            <button className="modal-button">COMPRAR</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;

import React from "react";
import "./CategoryBar.scss";
import crown from "../../assets/icons/CrownSimple.svg";

interface CategoryBarProps {}

const CategoryBar: React.FC<CategoryBarProps> = () => {
  return (
    <nav className="category-container">
      <ul className="category-list">
        <li className="category-item">
          <span className="category-text">Todas Categorias</span>
        </li>
        <li className="category-item">
          <span className="category-text">Supermercado</span>
        </li>
        <li className="category-item">
          <span className="category-text">Livros</span>
        </li>
        <li className="category-item">
          <span className="category-text">Moda</span>
        </li>
        <li className="category-item">
          <span className="category-text">Lançamentos</span>
        </li>
        <li className="category-item category-item-pink">
          <span className="category-text">Ofertas do dia</span>
        </li>
        <li className="category-item">
          <img src={crown} alt="crown-icon" />
          <span className="category-text">Assinatura</span>
        </li>
      </ul>
    </nav>
  );
};

export default CategoryBar;

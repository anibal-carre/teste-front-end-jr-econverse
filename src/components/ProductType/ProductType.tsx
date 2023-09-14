import React from "react";
import "./ProductType.scss";

interface ProductTypeProps {}

const ProductType: React.FC<ProductTypeProps> = () => {
  const typeData: { id: number; span: string; image: string; class: string }[] =
    [
      {
        id: 1,
        span: "Tecnologia",
        image: "src/assets/icons/monitorar.png",
        class: "card-type-white",
      },
      {
        id: 2,
        span: "Supermercado",
        image: "src/assets/icons/supermercados 1.png",
        class: "card-type",
      },
      {
        id: 3,
        span: "Bebidas",
        image: "src/assets/icons/whiskey.png",
        class: "card-type",
      },
      {
        id: 4,
        span: "Ferramentas",
        image: "src/assets/icons/ferramentas 1.png",
        class: "card-type",
      },
      {
        id: 5,
        span: "Saúde",
        image: "src/assets/icons/cuidados-de-saude 1.png",
        class: "card-type",
      },
      {
        id: 6,
        span: "Esportes e Fitness",
        image: "src/assets/icons/corrida 1.png",
        class: "card-type",
      },
      {
        id: 7,
        span: "Moda",
        image: "src/assets/icons/moda 1.png",
        class: "card-type",
      },
    ];
  return (
    <nav className="product-type-container">
      {typeData.map((e) => (
        <div key={e.id} className="type-div">
          <div className={e.class}>
            <img src={e.image} alt={`${e.span}-icon`} />
          </div>
          <span className="type-text">{e.span}</span>
        </div>
      ))}
    </nav>
  );
};

export default ProductType;

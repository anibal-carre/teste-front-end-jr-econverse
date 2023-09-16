import React from "react";
import "./ProductType.scss";

interface ProductTypeProps {}

const ProductType: React.FC<ProductTypeProps> = () => {
  const typeData: { id: number; span: string; image: string; class: string }[] =
    [
      {
        id: 1,
        span: "Tecnologia",
        image: "../../assets/icons/monitorar.png",
        class: "card-type-white",
      },
      {
        id: 2,
        span: "Supermercado",
        image: "../../assets/icons/supermercados 1.png",
        class: "card-type",
      },
      {
        id: 3,
        span: "Bebidas",
        image: "../../assets/icons/whiskey.png",
        class: "card-type",
      },
      {
        id: 4,
        span: "Ferramentas",
        image: "../../assets/icons/ferramentas 1.png",
        class: "card-type",
      },
      {
        id: 5,
        span: "Saúde",
        image: "../../assets/icons/cuidados-de-saude 1.png",
        class: "card-type",
      },
      {
        id: 6,
        span: "Esportes e Fitness",
        image: "../../assets/icons/corrida 1.png",
        class: "card-type",
      },
      {
        id: 7,
        span: "Moda",
        image: "../../assets/icons/moda 1.png",
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

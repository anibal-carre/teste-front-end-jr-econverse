import React from "react";
import "./RelationSection.scss";
import group35 from "../../assets/icons/Group 35.png";

interface RelationSectionProps {}

const RelationSection: React.FC<RelationSectionProps> = () => {
  return (
    <section className="relation-section-container">
      <div className="relation-container">
        <div className="relation-products-1">
          <div className="div-image">
            <div className="card-img-relation">
              <h3 className="title-img-1">Parceiros</h3>
              <p className="text-img-1">
                Lorem ipsum dolor sit amet, consectetur
              </p>
              <button className="relation-button">CONFIRA</button>
            </div>
          </div>
          <div className="div-image">
            <div className="card-img-relation">
              <h3 className="title-img-1">Parceiros</h3>
              <p className="text-img-1">
                Lorem ipsum dolor sit amet, consectetur
              </p>
              <button className="relation-button">CONFIRA</button>
            </div>
          </div>
        </div>

        <div className="relation-title-container">
          <div className="relation-divider" />
          <div className="relation-span-container">
            <h3 className="relation-title">Produtos relacionados</h3>
            <span className="relation-span">Ver todos</span>
          </div>
          <div className="relation-divider" />
        </div>

        <div className="relation-products-2">
          <div className="div-image-2">
            <div className="card-img-2">
              <h3 className="title-img-2">Produtos</h3>
              <p className="text-img-2">
                Lorem ipsum dolor sit amet, consectetur
              </p>
              <button className="relation-button">CONFIRA</button>
            </div>
          </div>
          <div className="div-image-2">
            <div className="card-img-2">
              <h3 className="title-img-2">Produtos</h3>
              <p className="text-img-2">
                Lorem ipsum dolor sit amet, consectetur
              </p>
              <button className="relation-button">CONFIRA</button>
            </div>
          </div>
        </div>

        <div className="brand-container">
          <h3 className="brand-title">Navegue por marcas</h3>
          <div className="brand">
            <div className="circle-brand">
              <img src={group35} alt="brand-logo" className="circle-img" />
            </div>
            <div className="circle-brand">
              <img src={group35} alt="brand-logo" className="circle-img" />
            </div>
            <div className="circle-brand">
              <img src={group35} alt="brand-logo" className="circle-img" />
            </div>
            <div className="circle-brand">
              <img src={group35} alt="brand-logo" className="circle-img" />
            </div>

            <div className="circle-brand">
              <img src={group35} alt="brand-logo" className="circle-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelationSection;

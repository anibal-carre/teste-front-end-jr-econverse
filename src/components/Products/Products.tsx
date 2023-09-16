import React from "react";
import "./Products.scss";
import ProductCard from "../ProductCard/ProductCard";
import { useState, useEffect, useRef } from "react";

interface ProductsProps {}

const Products: React.FC<ProductsProps> = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [slideCounter, setSlideCounter] = useState(0);
  const [isInTransition, setIsInTransition] = useState(false);

  const DIRECTION = {
    RIGHT: "RIGHT",
    LEFT: "LEFT",
  };

  const getTransformValue = () => {
    if (!sliderRef.current) return 0;
    const transformValue = sliderRef.current.scrollLeft;
    return transformValue;
  };

  const reorderSlide = () => {
    console.log("reorderSlide called");
    const transformValue = getTransformValue();
    setIsInTransition(false);
    if (slideCounter === 0) {
      sliderRef.current?.appendChild(sliderRef.current?.firstElementChild);
      sliderRef.current?.scrollTo({
        left: transformValue - sliderRef.current?.clientWidth,
        behavior: "auto",
      });
    }
  };

  const moveSlide = (direction: string) => {
    console.log("moveSlide called with direction:", direction);
    if (isInTransition) return;
    setIsInTransition(true);

    const transformValue = getTransformValue();
    const scrollAmount = sliderRef.current?.clientWidth || 0;

    if (direction === DIRECTION.LEFT) {
      sliderRef.current?.scrollTo({
        left: transformValue - scrollAmount,
        behavior: "smooth",
      });
      setSlideCounter(slideCounter - 1);
    } else if (direction === DIRECTION.RIGHT) {
      sliderRef.current?.scrollTo({
        left: transformValue + scrollAmount,
        behavior: "smooth",
      });
      setSlideCounter(slideCounter + 1);
    }
  };

  useEffect(() => {
    const sliderContainer = sliderRef.current;
    if (!sliderContainer) return;

    sliderContainer.addEventListener("transitionend", reorderSlide);

    return () => {
      sliderContainer.removeEventListener("transitionend", reorderSlide);
    };
  }, []);
  return (
    <section className="products-section-container">
      <header className="products-section-header">
        <div className="title-div">
          <div className="products-divider" />
          <h2 className="products-title">Produtos ralacionados</h2>
          <div className="products-divider" />
        </div>
        <nav className="products-section-nav">
          <div className="products-section-items item-pink">Celular</div>
          <div className="products-section-items">Acessórios</div>
          <div className="products-section-items">Tablets</div>
          <div className="products-section-items">Notebooks</div>
          <div className="products-section-items">Tvs</div>
          <div className="products-section-items">Ver todos</div>
        </nav>
      </header>
      <main className="products-section-main-container">
        <img
          src="../../assets/icons/Vector1.png"
          alt="vector-icon"
          width={"20px"}
          height={"34px"}
          onClick={() => moveSlide(DIRECTION.LEFT)}
        />
        <div className="products-section-main" ref={sliderRef}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <img
          src="../../assets/icons/Vector2.png"
          alt="vector2-icon"
          width={"20px"}
          height={"34px"}
          onClick={() => moveSlide(DIRECTION.RIGHT)}
        />
      </main>
    </section>
  );
};

export default Products;

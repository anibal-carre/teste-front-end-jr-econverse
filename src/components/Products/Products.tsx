import React, { useState, useEffect, useRef } from "react";
import "./Products.scss";
import ProductCard from "../ProductCard/ProductCard";
import verctor1 from "../../assets/icons/Vector1.png";
import verctor2 from "../../assets/icons/Vector2.png";

interface ProductsProps {}

const Products: React.FC<ProductsProps> = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [slideCounter, setSlideCounter] = useState(0);
  const [isInTransition, setIsInTransition] = useState(false);
  const [productData, setProductData] = useState<{
    products: Product[];
  } | null>(null);

  interface Product {
    productName: string;
    descriptionShort: string;
    photo: string;
    price: number;
  }

  useEffect(() => {
    const apiUrl =
      "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json";
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProductData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const DIRECTION = {
    RIGHT: "RIGHT",
    LEFT: "LEFT",
  };

  const getTransformValue = () => {
    if (!sliderRef.current) return 0;
    const transformValue = sliderRef.current.scrollLeft;
    return transformValue;
  };

  const moveSlide = (direction: string) => {
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

    setTimeout(() => {
      setIsInTransition(false);
    }, 300);
  };

  useEffect(() => {
    const sliderContainer = sliderRef.current;
    if (!sliderContainer) return;

    const handleTransitionEnd = () => {
      setIsInTransition(false);
    };

    sliderContainer.addEventListener("transitionend", handleTransitionEnd);

    return () => {
      sliderContainer.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, []);

  useEffect(() => {
    const productCards = sliderRef.current?.querySelectorAll(".product-card");
    if (productCards && productCards.length > 1) {
      const firstElement = sliderRef.current?.firstElementChild;
      const lastElement = sliderRef.current?.lastElementChild;
      if (firstElement && lastElement) {
        const cloneFirst = firstElement.cloneNode(true) as HTMLElement;
        const cloneLast = lastElement.cloneNode(true) as HTMLElement;
        sliderRef.current?.appendChild(cloneFirst);
        sliderRef.current?.insertBefore(
          cloneLast,
          sliderRef.current?.firstChild
        );
      }
    }
  }, []);

  return (
    <section className="products-section-container">
      <header className="products-section-header">
        <div className="title-div">
          <div className="products-divider" />
          <h2 className="products-title">Produtos relacionados</h2>
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
          className="vector"
          src={verctor1}
          alt="vector-icon"
          width={"20px"}
          height={"34px"}
          onClick={() => moveSlide(DIRECTION.LEFT)}
        />
        {productData &&
          productData.products &&
          Array.isArray(productData.products) && (
            <div className="products-section-main" ref={sliderRef}>
              {productData.products.map((e, i) => (
                <ProductCard
                  key={i}
                  price={e.price}
                  productName={e.productName}
                  photo={e.photo}
                  descriptionShort={e.descriptionShort}
                />
              ))}
            </div>
          )}
        <img
          className="vector"
          src={verctor2}
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

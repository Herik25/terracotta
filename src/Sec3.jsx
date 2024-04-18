import React, { useState } from "react";
import "./Sec3.css";

const cards = [
  {
    thumbnail:
      "https://creative-ishi.myshopify.com/cdn/shop/products/2_9188d6ff-0644-4660-a251-4d0d51433c75_576x.png?v=1679284141",
    image:
      "https://creative-ishi.myshopify.com/cdn/shop/products/3_aad9c139-a5e2-46da-b09a-f98b4af6120d_576x.png?v=1679284141",
    title: "Wowed Art",
    price: 75,
    discount: 800,
  },
  {
    thumbnail:
      "https://creative-ishi.myshopify.com/cdn/shop/products/2_9188d6ff-0644-4660-a251-4d0d51433c75_576x.png?v=1679284141",
    image:
      "https://creative-ishi.myshopify.com/cdn/shop/products/3_aad9c139-a5e2-46da-b09a-f98b4af6120d_576x.png?v=1679284141",
    title: "Wowed Art",
    price: 75,
    discount: 800,
  },
  {
    thumbnail:
      "https://creative-ishi.myshopify.com/cdn/shop/products/2_9188d6ff-0644-4660-a251-4d0d51433c75_576x.png?v=1679284141",
    image:
      "https://creative-ishi.myshopify.com/cdn/shop/products/3_aad9c139-a5e2-46da-b09a-f98b4af6120d_576x.png?v=1679284141",
    title: "Wowed Art",
    price: 75,
    discount: 800,
  },
  {
    thumbnail:
      "https://creative-ishi.myshopify.com/cdn/shop/products/2_9188d6ff-0644-4660-a251-4d0d51433c75_576x.png?v=1679284141",
    image:
      "https://creative-ishi.myshopify.com/cdn/shop/products/3_aad9c139-a5e2-46da-b09a-f98b4af6120d_576x.png?v=1679284141",
    title: "Wowed Art",
    price: 75,
    discount: 800,
  },
];
function Sec3() {
  return (
    <div className=" container2">
      <div className=" heading">
        <span>Exclusive Products</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quia
          atque sit.
        </p>
      </div>
      <div className=" product-cards">
        {cards.map((card, index) => {
          const [hoveredImage, setHoveredImage] = useState(null);
          return (
            <div
              className="product-card"
              key={index}
              onMouseEnter={() => setHoveredImage(card.image)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <img
                src={hoveredImage ? hoveredImage : card.thumbnail}
                alt="image"
              />
              <div className=" prodct-desc">
                <div className="productCard-title">{card.title}</div>
                <div className="product-price">
                  <span className="discount">${card.discount}</span>
                  <span className=" price">${card.price}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className=" product-cards">
        {cards.map((card, index) => {
          const [hoveredImage, setHoveredImage] = useState(null);
          return (
            <div
              className="product-card"
              key={index}
              onMouseEnter={() => setHoveredImage(card.image)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <img
                src={hoveredImage ? hoveredImage : card.thumbnail}
                alt="image"
              />
              <div className=" prodct-desc">
                <div className="productCard-title">{card.title}</div>
                <div className="product-price">
                  <span className="discount">${card.discount}</span>
                  <span className=" price">${card.price}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className=" view">
        <button>VIEW ALL</button>
      </div>
    </div>
  );
}

export default Sec3;

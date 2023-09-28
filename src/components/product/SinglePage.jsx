import React from "react";
import "./singlepage.css";

const SinglePage = (item) => {
  const truncateText = (text, maxWords) => {
    const words = text.split(" ");
    if (words.length > maxWords) {
      const truncatedText = words.slice(0, maxWords).join(" ");
      return truncatedText;
    }
    return text;
  };
  return (
    <div key={item.id} className="product-container">
      <img className="product-image" src={item.image} alt="product" />
      <p className="product-name">{truncateText(item.title, 2)}</p>
      <p className="product-desc">{truncateText(item.description, 13)}</p>
      <p className="product-price">${item.price}</p>
    </div>
  );
};
export default SinglePage;

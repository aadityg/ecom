import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
export default function Product({ title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return <StarIcon className="star-icon" />;
            })}
        </div>
        <div className="product-image">
          <img src={image}></img>
        </div>
        <button className="btn">Add to cart</button>
      </div>
    </div>
  );
}

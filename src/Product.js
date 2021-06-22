import React from "react";
import "./Product.css";
import product from "./assets/product.png";
import GradeIcon from "@material-ui/icons/Grade";
const Product = (title,price,rating,image)=> {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          <GradeIcon></GradeIcon>
        </div>
      </div>

      <img src={image} alt="" className="product__image" />

      <button className="product__button">Add to Basket</button>
    </div>
  );
}

export default Product;

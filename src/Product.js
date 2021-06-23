import React from "react";
import "./Product.css";
import product from "./assets/product.png";
import GradeIcon from "@material-ui/icons/Grade";
function Product({title="title",price="100",rating='4',image=`${product}`}){

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        {
          //Creating and array of 'rating' length and then  iterating to create number of stars
          Array.from(Array(parseInt(rating))).map((id,index)=>{
            return(              
              <GradeIcon key={index}/>            
            )
          })
        }
      </div>

      <img src={image} alt="" className="product__image" />

      <button className="product__button">Add to Basket</button>
    </div>
  );
}

export default Product;

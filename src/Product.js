import React, { useState } from "react";
import {useStateValue} from './StateProvider';
import "./Product.css";
import product from "./assets/product.png";
import GradeIcon from "@material-ui/icons/Grade";
function Product({title="title",price=100,rating='4',image=`${product}`}){
  const [{basket},dispatch] = useStateValue();
  const [id, setId] = useState(1);
  const addToBasket=()=>{
    dispatch({
      type: "ADD_TO_BASKET",
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating,
      },
    });
    setId(id +1);
    console.log(basket);
  }
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
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

      <button onClick={addToBasket} className="product__button">Add to Basket</button>
    </div>
  );
}

export default Product;

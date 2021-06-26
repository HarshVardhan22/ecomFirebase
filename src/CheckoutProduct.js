import React from "react";
import "./CheckoutProduct.css";
import GradeIcon from "@material-ui/icons/Grade";
import { useStateValue } from "./StateProvider";
function CheckoutProduct({ title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    // dispatch({
    //   type: "ADD_TO_BASKET",
    //   item: {
    //     title: title,
    //     image: image,
    //     price: price,
    //     rating: rating,
    //   },
    // });
  };

  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image" />
      <p>{title}</p>
      <p className="checkoutProduct__price">
        <small>₹</small>
        <strong>{price}</strong>
      </p>

      {
        //Creating and array of 'rating' length and then  iterating to create number of stars
        Array.from(Array(parseInt(rating))).map((id, index) => {
          return <GradeIcon key={index} />;
        })
      }
      <button onClick={removeFromBasket} className="product__button">
        Remove from Basket
      </button>
    </div>
  );
}
export default CheckoutProduct;

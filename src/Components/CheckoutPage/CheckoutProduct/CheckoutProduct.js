import React from "react";
import "./CheckoutProduct.css";
import GradeIcon from "@material-ui/icons/Grade";
import { useStateValue } from "../../../Redux/StateProvider";
function CheckoutProduct({ title, price, rating, image,id }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id:id,
    });

  };

  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image" />
      <div className="checkoutProductDetails">
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
    </div>
  );
}
export default CheckoutProduct;

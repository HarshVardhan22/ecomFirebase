import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import {useStateValue} from "../../../Redux/StateProvider"
import {getBasketTotal} from "../../../Redux/reducer";
function Subtotal() {
  const [{basket}, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length}) items: <strong>{value}
              </strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order constains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button className="subtotal__btn">Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;

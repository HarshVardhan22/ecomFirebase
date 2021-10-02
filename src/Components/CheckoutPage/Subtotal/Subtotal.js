import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import {useStateValue} from "../../../Redux/StateProvider"
import {getBasketTotal} from "../../../Redux/reducer";
import {Link} from "react-router-dom";
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
      <Link to="/orders">
      <button className="subtotal__btn" disabled={basket.length==0?true:false} style={{opacity:`${basket.length==0?0.5:1}`}}>Proceed to Checkout</button>

      </Link>
     
    </div>
  );
}

export default Subtotal;

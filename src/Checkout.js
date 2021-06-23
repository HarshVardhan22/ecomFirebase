import React from 'react';
import './Checkout.css';

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <h1 className="checkout__title">Shopping basket</h1>
            </div>
            <div className="checkout__right">
                <h1>subtotal</h1>
            </div>
        </div>
    )
}


export default Checkout;

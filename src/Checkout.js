import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <h1 className="checkout__title">Shopping basket</h1>
            </div>
            <div className="checkout__right">
                <Subtotal></Subtotal>
            </div>
        </div>
    )
}


export default Checkout;

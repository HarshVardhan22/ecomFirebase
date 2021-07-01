import React from 'react';
import './Checkout.css';
import Subtotal from '../Subtotal/Subtotal';
import {useStateValue} from '../../../Redux/StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
function Checkout() {
    const [{basket,user},dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <h1 className="checkout__title">Shopping basket</h1>
                {basket.map(item=>(
                    <CheckoutProduct title={item.title}
                        image = {item.image}
                        price = {item.price}
                        rating = {item.rating}
                        id= {item.id}
                    />
                ))}
            </div>
            <div className="checkout__right">
                <Subtotal></Subtotal>
            </div>
        </div>
    )
}


export default Checkout;

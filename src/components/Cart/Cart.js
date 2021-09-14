import React from 'react';
import { Button } from 'react-bootstrap';
import './Cart.css'
const Cart = (props) => {
    const cart =props.cart;
    const courseTotal =cart.reduce((sum,course)=> sum+course.price,0)
    const tax= courseTotal/10;
    return (
        <div className="cart">
            <h1>Total Item order:{cart.length}</h1>
            <p>Price:{courseTotal}</p>
            <p>Tax:{tax}</p>
            <p>Grand Total:{courseTotal+tax}</p>
            <Button variant="success"> Place Order</Button>{' '}
        </div>
    );
};

export default Cart;
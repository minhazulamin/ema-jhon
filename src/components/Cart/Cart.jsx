import React from 'react';
import'./Cart.css' 

const Cart = ({cart}) => {
    console.log('console from cart', cart)
    let totalPrice = 0;
    let totalShipping = 0;

    for (const product of cart) {
        totalPrice = totalPrice + product.price
        totalShipping = totalShipping + product.shipping
    }
    const tax = totalPrice * 7 / 12;
    const grandTotal = totalPrice + totalShipping + tax;
    return (
      <div className='cart'>
          <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total price:${totalPrice} </p>
            <p>Total Shipping:${totalShipping}</p>
            <p>Tax:${tax.toFixed(2)}</p>
            <h6>Grand total${grandTotal.toFixed(2)}</h6>
      </div>
    );
};

export default Cart;
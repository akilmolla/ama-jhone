import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // console.log(props)
    // console.log(cart)
    let totalPrice=0;
    let totalShopping =0 ;
    let quantity= 0;
    for(const product of cart){
        /* if(product.quantity ===0){
            product.quantity = 1;
        } */
        // product.quantity = product.quantity || 1;
        totalPrice =totalPrice+product.price * product.quantity
        totalShopping= totalShopping + product.shipping
        quantity=quantity+product.quantity
    }
    let tax = totalPrice*7/100;
    let grandTotal=totalPrice+totalShopping+tax
    
    return (
        <div className='cart'>
            <h4>order Summary</h4>
             <p>Selected Items :{quantity}</p>
             <p>Total Price:${totalPrice}</p>
             <p>Shippimg:{totalShopping}</p>
             <p>Tax:${tax.toFixed(2)}</p>
             <h4>Gran Total:${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;
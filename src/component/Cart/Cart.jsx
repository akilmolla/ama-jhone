import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // console.log(props)
    console.log(cart)
    let totalPrice=0;
    let totalShopping =0 ;
    for(const product of cart){
        totalPrice =totalPrice+product.price
        totalShopping= totalShopping + product.shipping
    }
    let tax = totalPrice*7/100;
    let grandTotal=totalPrice+totalShopping+tax
    
    return (
        <div className='cart'>
            <h4>order Summary</h4>
             <p>Selected Items :{cart.length}</p>
             <p>Total Price:${totalPrice}</p>
             <p>Shippimg:{totalShopping}</p>
             <p>Tax:${tax.toFixed(2)}</p>
             <h4>Gran Total:${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;
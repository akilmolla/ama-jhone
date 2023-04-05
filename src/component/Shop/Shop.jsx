import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

import './Shop.css'
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
const Shop = () => {
    const [products,setProducts]=useState([])
    const [cart,setCart]=useState([])
    useEffect(()=>{

        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))

    },[]);
    useEffect(()=>{
        
        const storedCart =getShoppingCart();
        const savedCart = []
        // step 1:get id
        for (const id in storedCart){
            // console.log(id)
            // step 2 get the by using id
            const adedProducdt =products.find(product=> product.id ===id);
            if(adedProducdt){

                const quantity =storedCart[id];
                adedProducdt.quantity = quantity;
                savedCart.push(adedProducdt)
                console.log(adedProducdt)
            }
            

        }
        setCart(savedCart)

    },[products])
    const handleAddToCart=(product)=>{
        // console.log(product)
        let newCart = [];
        // const newCart =[...cart,product]
        const exists = cart.find(pd=> pd.idc=== product.id);
        if(!exists){
            product.quantity = 1;
            newCart =[...cart,product]
        }
        else{
            exists.quantity =exists.quantity +1;
            const remainign =cart.filter(pd=>pd.id !==product.id)
            newCart =[...remainign,exists]
        }

        setCart(newCart)
        addToDb(product.id)
        
    }
    return (
        <div className='shop-container'>
            
            <div className="products-container">
                {
                    products.map(product=><Product
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    />
                        
                    )
                }
              
            </div>
            <div className="cart-container">
                    <Cart
                    cart={cart}
                    />
            </div>

        </div>
    );
};

export default Shop;
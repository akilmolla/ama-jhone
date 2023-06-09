import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css"

const Product = (props) => {
    const{img,name,seller,ratings,price}=props.product
    const handleAddToCart =props.handleAddToCart
    // console.log(props)
    
    return (
        <div className='product'>
            <img src={img?img:"no found"} alt="" />

                <div className="product-info">
                    <h6 className='product-name'>{name?name:"no found"}</h6>
                    <p>Price:${price}</p>
                    <p>Manufacturer:{seller}</p>
                    <p>Rating:{ratings} Star</p>
                 </div>
                 <button onClick={()=>handleAddToCart(props.product)}
                  className='btn-cart'> 
                  Add to Cart

                  <FontAwesomeIcon icon={faShoppingCart} />
                  </button>
           
        </div>
    );
};

export default Product;
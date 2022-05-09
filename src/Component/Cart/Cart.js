import React from 'react'
import { Divider } from '@mui/material';
import "./Cart.css"
const Cart = () => {
  return (
    <div>
               <div className="cart_section">
            
                <div className="cart_container">
                    <div className="left_cart">
                        <img src="" alt="cart" />
                        <div className="cart_btn">
                            <button className="cart_btn1" >Add to Cart</button>
                            <button className="cart_btn2">Buy Now</button>
                        </div>

                    </div>
                    <div className="right_cart">
                        <h3>savon </h3>
                        <h4> zakia</h4>
                        <Divider />
                        
                        <p>Deal of the Day : </p>
                        <p>You save : </p>
                        <div className="discount_box">
                            <h5 >Discount : </h5>
                            <h4>FREE Delivery : Details</h4>
                            
                        </div>
                        <p className="description">About the Iteam </p>
                    </div>

                        
                       
                    </div>
                    </div>
     
    </div>            
            )

}

export default Cart

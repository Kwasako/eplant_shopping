import React from "react";
import {CartItemContext} from "../index.jsx"


function CartItems(){
    const { cartItems, 
            removeItemFromCart, 
            increaseItemQuantity,
             decreaseItemQuantity, 
             clearCart } 
             = React.useContext(CartItemContext) 
             
    const totalAmount = cartItems.reduce((total, item)=> total + item.price * item.quantity, 0)


    return(
        <div className="container">
            <div>{totalAmount ? <div>Total Cart Amount: ${totalAmount}</div>: ''} </div>
            
            {cartItems.map((item, index)=>(
                <div key={index} className="row">
                    <div className="col-4">
                        <div  className="box">
                        <div className="cart-item">
                            <div className="plant"><img src={item.imageUrl}/></div>
                            <div>
                                <div className="name">{item.name}</div>
                                <div className="price_cart">${item.price}</div>
                                <div className="quantity-section">
                                    <button onClick={()=>decreaseItemQuantity(item.id)}> - </button>
                                    <span className='price_cart'> {item.quantity} </span>
                                    <button onClick={()=>increaseItemQuantity(item.id)}> + </button>
                                </div>
                                <div className="price">${item.price * item.quantity}</div>
                                <button 
                                    className="delete-btn" 
                                    onClick = {()=>removeItemFromCart(item.id)}
                                    > 
                                    Delete
                                </button>
                            </div>
                        </div>
                        </div>
                    </div>
                  </div>
            ))}
           
            <div>{totalAmount && <button className="clear-btn" onClick={clearCart}> Clear cart </button>}</div>
        </div>
    )
}

export default CartItems
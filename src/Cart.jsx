import React, { useContext } from 'react'
import "./Cart.css"
import { BsCartX } from 'react-icons/bs'
import { MdClose } from 'react-icons/md'
// import { Context } from '../../utils/context'

export default function Cart({setShowCart}) {
//   const {cartItems,cartSubTotal}=useContext(Context)
  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-button" onClick={()=>setShowCart(false)}>
            <MdClose size={40}/>
            <span className="text"></span>
          </span>
        </div>
        {!cartItems?.length &&<div className="empty-cart">
        <BsCartX />
        <span>No Products in Cart</span>
        <button className='return-cta' onClick={()=>setShowCart(false)}>Return To Shop.</button>
        </div>}
        <>
        {/* <CartItem /> */}
        <div className="cart-footer">
          <div className="subtotal">
            <span className="text">Subtotal:</span>
            <span className='text-total'>&#8377; {cartSubTotal}</span>
          </div>
          <div className="button">
          <form action="/create-checkout-session" method="post">
            <button className="checkout-cta">Checkout</button>
          </form>
          </div>
        </div>
        </>
      </div>
    </div>
  )
}


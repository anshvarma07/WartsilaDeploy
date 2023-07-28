// CartPopup.js
import React from 'react';
import './Cart.css';


const CartPopup = ( {bool}, CartDe) => {
  return (
    // eslint-disable-next-line
    <div className={`cart-popup ${bool==1 ? 'open' : ''}`}>
    {/* {console.log(cartItems)} */}
      <div className="cart-content">
        <h2 className='text-center'>Your Cart</h2>
        <ul>
        <li>Sample</li>
        {/* {CartD?.map((item) => (
            <li key={item.Column1}>{item["Port Name"]}</li>
          ))} */}
        </ul>
        <button>Dismiss</button>
      </div>
    </div>
  );
};

export default CartPopup;

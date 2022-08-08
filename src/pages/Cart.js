import React from 'react';
import axios from 'axios';

import { useCart } from '../hooks/useCart';

function Cart({ onRemove, products = [] }) {
  const { totalPrice } = useCart();
  return (
    <div className="foodCart">
      <h2 className="d-flex align-center justify-center mb-30">Food cart</h2>

      {products.length > 0 ? (
        <div className="d-flex flex-column flex">
          <div className="items flex">
            {products.map((obj) => (
              <div key={obj.id} className="cartItem d-flex align-center mb-20">
                {/* <img className="cartItemImg" src={obj.imageUrl} alt="Sneakers" /> */}
                <div style={{ backgroundImage: `url(${obj.image})` }} className="cartItemImg"></div>
                <div className="mr-20 flex">
                  <b className="mb-5">{obj.name}</b>
                  <p>${obj.price} USD</p>
                </div>
                <img
                  onClick={() => onRemove(obj.id, obj.name, obj)}
                  className="removeBtn"
                  src="img/btn-remove.svg"
                  alt="Remove button"
                />
              </div>
            ))}
          </div>
          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Total:</span>
                <div></div>
                <b>${totalPrice} USD</b>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <h1 className="d-flex align-center justify-center">Order something :)</h1>
      )}
    </div>
  );
}

export default Cart;

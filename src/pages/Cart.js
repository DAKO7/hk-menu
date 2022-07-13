import React from 'react';
import axios from 'axios';

import { useCart } from '../hooks/useCart';

function Cart({ onRemove, products = [] }) {
  const { totalPrice } = useCart();
  return (
    <div>
      <div>
        <h2 className="d-flex justify-between mb-30">Shopping cart</h2>

        {products.length > 0 ? (
          <div className="d-flex flex-column flex">
            <div className="items flex">
              {products.map((obj) => (
                <div key={obj.id} className="cartItem d-flex align-center mb-20">
                  {/* <img className="cartItemImg" src={obj.imageUrl} alt="Sneakers" /> */}
                  <div
                    style={{ backgroundImage: `url(${obj.image})` }}
                    className="cartItemImg"></div>
                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.name}</p>
                    <b>${obj.price} USD</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
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
                <li>
                  <span>Tax 5%:</span>
                  <div></div>
                  <b>{(totalPrice / 100) * 5} USD. </b>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <h1>No products</h1>
        )}
      </div>
    </div>
  );
}

export default Cart;

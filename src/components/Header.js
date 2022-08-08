import React from 'react';
import { Link } from 'react-router-dom';

import { useCart } from '../hooks/useCart';

export default function Header() {
  const { cartProducts } = useCart();
  const totalPrice = cartProducts.reduce((sum, obj) => obj.price + sum, 0);

  return (
    <header className="d-flex justify-between align-center">
      <Link to="">
        <h3 className="title cu-p">Hong-Kong</h3>
      </Link>
      <ul className="d-flex align-center">
        <li>
          <Link className="cart d-flex align-center p-5 mr-30 cu-p" to="/cart">
            <snap className="mr-40">{totalPrice.toFixed(2)} €</snap>
            <img width={24} height={24} src="/img/shopping-bag.svg" alt="shopping bag" />
          </Link>
        </li>
        <li className="user cu-p">
          <img width={24} height={24} src="/img/user.svg" alt="user" />
        </li>
      </ul>
    </header>
  );
}

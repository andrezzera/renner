import { useCart } from '@/hooks';
import React, { useState } from 'react';
import styles from "./cart.module.css";
import { CartEmpty, CartButton, CartItem } from './components';


export const Cart: React.FC = () => {
  const [cartVisible, setCartVisible] = useState(false)
  const {
    cart,
    getAmountOfProductsInCart
  } = useCart()

  const toggleCart = () => {
    setCartVisible(!cartVisible)
  }

  const renderCartItems = () => {
    const amountOfProductsInCart = getAmountOfProductsInCart()

    if(amountOfProductsInCart) {
      return cart.map(item => (
        <li key={item.product.id}>
          <CartItem product={item.product} />
        </li>
      ))
    }

    return <CartEmpty />
  }

  return (
    <>
      <CartButton toggleCart={toggleCart} />
      {cartVisible && (
        <div className={styles["cart-container"]}>
          <div
            className={styles["cart-container__backdrop"]}
            onClick={toggleCart}
          />
          <div className={styles.cart}>
            <div className={styles.cart__container}>
            <div className={styles.cart__container__arrow}/>
              <div className={styles.cart__container__content}>
                <ul>
                  {renderCartItems()}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
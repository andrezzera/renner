import React from 'react'
import styles from './cart-button.module.css'
import BagIcon from '@/assets/svgs/shopping-bag.svg'
import { useCart } from '@/hooks'

interface CartButtonProps {
  toggleCart: () => void;
}

export const CartButton: React.FC<CartButtonProps> = ({
  toggleCart
}: CartButtonProps) => {
  const { getAmountOfProductsInCart } = useCart()

  const amountOfProductsInCart = getAmountOfProductsInCart()

  return (
    <button className={styles['cart-button']} onClick={toggleCart}>
      <BagIcon />
      <div className={styles['cart-button__badge']}>
        <b>{amountOfProductsInCart > 9 ? '9' : amountOfProductsInCart}</b>
        {amountOfProductsInCart > 9 && '+'}
      </div>
    </button>
  )
}

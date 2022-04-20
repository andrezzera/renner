import { useCart } from '@/hooks';
import { Product } from '@/types/product.types';
import React from 'react';
import styles from "./buy-button.module.css"

interface BuyButtonProps {
  product: Product
}

export const BuyButton: React.FC<BuyButtonProps> = ({ product }: BuyButtonProps) => {
  const {
    isProductInCart,
    addProductToCart,
    getProductAmountInCart,
    increaseAmount,
    decreaseAmount
  } = useCart()

  const onAddToCart = () => {
    addProductToCart(product)
  }
  
  const onDecreaseAmount = () => {
    decreaseAmount(product.id)
  }

  const onIncreaseAmount = () => {
    increaseAmount(product.id, product.stock_amount)
  }

  if (product.stock_amount < 1) return (
    <button className={styles['buy-button']} disabled>
      INDISPONÍVEL
    </button>
  );

  if (isProductInCart(product.id)) return (
    <div className={styles.wrapper}>
      <button
        className={styles['buy-button']}
        onClick={onDecreaseAmount}
      >
        -
      </button>
      <span className={styles['buy-button__amount']}>
        {getProductAmountInCart(product.id)}
      </span>
      <button 
        className={styles['buy-button']}
        onClick={onIncreaseAmount}
      >
        +
      </button>
    </div>
  )

  return (
    <button 
      onClick={onAddToCart} 
      className={styles['buy-button']}
    >
      COMPRAR
    </button>
  )

  
}

import React from 'react'
import Lottie from 'react-lottie'
import emptyAnimation from '@/assets/lotties/empty-box.json'
import styles from './cart-empty.module.css'

export const CartEmpty: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: emptyAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <div className={styles['cart-empty']}>
      <Lottie options={defaultOptions} height={250} width={250} />
      <span className={styles['cart-empty__text']}>
        Seu carrinho está vazio!
      </span>
    </div>
  )
}

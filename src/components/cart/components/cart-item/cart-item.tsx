import { Product } from '@/types/product.types';
import React from 'react';
import styles from "./cart-item.module.css"
import Image from "next/image"
import { intToCurrency, limitText } from '@/utils';
import { BuyButton } from '../../../buy-button/buy-button';

interface CartItemProps {
  product: Product
}

export const CartItem: React.FC<CartItemProps> = ({ product }: CartItemProps) => {
  return (
    <div className={styles["cart-item"]}>
      <Image alt='' src={product.image} className={styles["cart-item__image"]} width={50} height={50} />
      <div className={styles["cart-item__info"]}>
        <span>{limitText(product.name, 30)}</span>
        <b>{intToCurrency(product.price)}</b>
      </div>
      <div className={styles["cart-item__actions"]}>
        <BuyButton product={product} />
      </div>
    </div>
  );
}
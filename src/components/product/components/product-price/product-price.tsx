import { intToCurrency } from '@/utils';
import React from 'react';
import styles from './product-price.module.css';

interface ProductPriceProps {
  price: number;
}

export const ProductPrice: React.FC<ProductPriceProps> = ({ price }: ProductPriceProps) => {
  return (
    <div className={styles.price}>
      <span className={styles.price__full}>{intToCurrency(price)}</span>
      <span className={styles.price__installments}>
        Ou em até 12x de <strong>{intToCurrency(parseInt((price / 12) + "", 10))}</strong>
      </span>
    </div>
  );
}

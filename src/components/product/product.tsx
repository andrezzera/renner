import React from 'react'
import Image from 'next/image'
import styles from './product.module.css'
import { Product as IProduct } from '@/types/product.types'
import { BuyButton } from '../buy-button/buy-button'
import { ProductPrice, ProductTitle } from './components'

interface ProductProps {
  product: IProduct;
  isList?: boolean;
}

export const Product: React.FC<ProductProps> = ({
  product,
  isList
}: ProductProps) => {
  return (
    <div
      className={[styles.product, !isList && styles['product--pdp']].join(' ')}
    >
      <div
        className={[
          styles['image-container'],
          !isList && styles['image-container--pdp']
        ].join(' ')}
      >
        <Image
          className={styles['image-container__image']}
          src={product.image}
          alt={`Imagem do produto ${product.name}`}
          layout="responsive"
          width={397}
          height={400}
        />
      </div>
      <div className={styles.product__info}>
        <ProductTitle
          productId={product.id}
          productName={product.name}
          isList={isList}
        />
        <div className={styles.product__info__actions}>
          <ProductPrice price={product.price} />
          <BuyButton product={product} />
        </div>
      </div>
    </div>
  )
}

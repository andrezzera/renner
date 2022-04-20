import Link from 'next/link'
import React from 'react'
import styles from './product-title.module.css'

interface ProductTitleProps {
  productName: string;
  productId: number;
  isList?: boolean;
}

export const ProductTitle = ({
  productName,
  productId,
  isList
}: ProductTitleProps) => {
  return isList
    ? (
    <Link href={`/produto/${productId}`} passHref>
      <a className={styles.title}>{productName}</a>
    </Link>
      )
    : (
    <h1 className={styles.title}>{productName}</h1>
      )
}

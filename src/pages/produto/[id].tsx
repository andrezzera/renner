import { SectionTitle, Product } from '@/components'
import { Product as IProduct } from '@/types/product.types'
import axios from 'axios'
import type { NextPage, NextPageContext } from 'next'
import Head from 'next/head'
import styles from "./produto.module.css"

interface ProdutoProps {
  product: IProduct
}

const Produto: NextPage<ProdutoProps> = ({ product }) => {
  return (
    <div>
      <Head>
        <title>{product.name} | Renner</title>
        <meta name="description" content={product.description} />
      </Head>
      <Product product={product}/>
      <hr />
      <SectionTitle>DETALHES</SectionTitle>
      <div className={styles.details} dangerouslySetInnerHTML={{ __html: product.summary }} />
    </div>
  )
}

export async function getServerSideProps(context: NextPageContext) {
  const { id } = context.query
  const response = await axios.get<IProduct>("http://localhost:3000/api/products/" + id)
  return { props: { product: response.data } }
}

export default Produto

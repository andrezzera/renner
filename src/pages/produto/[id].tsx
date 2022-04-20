import { SectionTitle, Product } from '@/components'
import { productService } from '@/services/product.service'
import { Product as IProduct } from '@/types/product.types'
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
  const product = await productService.getById(parseInt(id as string, 10))
  return { props: { product } }
}

export default Produto

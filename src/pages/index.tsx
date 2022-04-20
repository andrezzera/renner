import { Banner, SectionTitle } from '@/components'
import { Product } from '@/components/product/product'
import { Product as IProduct } from '@/types/product.types'
import axios from 'axios'
import type { NextPage } from 'next'
import styles from "./index.module.css"
import Slider from "react-slick";
import Head from 'next/head'

interface HomeProps {
  products: Array<IProduct>
}

const Home: NextPage<HomeProps> = ({ products }: HomeProps) => {
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const getBestPrice = () => {
    return products.reduce((a, b) => {
      if (b.price < a.price) a = b;
      return a;
    })
  };

  const bestPriceProduct = getBestPrice()
  
  return (
    <div>
      <Head>
        <title>Moda Feminina, Masculina, Infantil e Perfumes | Renner</title>
        <meta name="description" content="Compre Online Roupas Femininas, Masculinas, Infantis, Perfumes, Sapatos e Acessórios com pagamento parcelado. Se quiser retire seu pedido na loja de sua preferência." />
      </Head>
      <Banner product={bestPriceProduct} />
      <SectionTitle>Produtos</SectionTitle>
      <div className={styles["carousel-container"]}>
        <Slider
          {...sliderSettings}
        >
          {products.map(product => (
            <div className={styles["product-wrapper"]} key={product.id} >
              <Product product={product} isList />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Home

export async function getServerSideProps() {
  const response = await axios.get<Array<IProduct>>("http://localhost:3000/api/products")
  return { props: { products: response.data } }
}



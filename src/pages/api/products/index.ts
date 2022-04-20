import { Product } from '@/types/product.types'
import type { NextApiRequest, NextApiResponse } from 'next'
import { products } from '__mocks__/products'

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<Array<Product>>
) {
  res.status(200).json(products)
}

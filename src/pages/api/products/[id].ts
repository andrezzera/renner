import { Product } from '@/types/product.types'
import type { NextApiRequest, NextApiResponse } from 'next'
import { products } from '__mocks__/products'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query

  const product = products.find(product => product.id === parseInt(id.toString(), 10))

  if (product) {
    res.status(200).json(product)
    return
  }

  res.status(404).json({
    message: "Produto não encontrado!"
  })

}

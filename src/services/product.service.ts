import { Product } from '@/types/product.types';
import axios from 'axios';

class ProductService {
  async getById(productId: number): Promise<Product> {
    const response = await axios.get<Product>(
      `${process.env.HOST}/api/products/` + productId,
    );
    return response.data;
  }

  async getAll(): Promise<Array<Product>> {
    const response = await axios.get<Array<Product>>(
      `${process.env.HOST}/api/products`,
    );
    return response.data;
  }
}

export const productService = new ProductService();

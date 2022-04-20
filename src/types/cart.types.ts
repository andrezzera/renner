import { Product } from "./product.types";

export interface CartItem {
  product: Product;
  amount: number;
}
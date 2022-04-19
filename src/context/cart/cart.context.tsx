import { CartItem } from "@/types/cart.types"
import { Product } from "@/types/product.types"
import { createContext, useState } from "react"





interface CartContextProps { }

const CartContext = createContext<CartContextProps>({} as CartContextProps)

const CartProvider: React.FC = ({ children }) => {

  const [cart, setCart] = useState<Array<CartItem>>([])

  const isProductInCart = (product: Product) => {
    const productIndex = cart.findIndex((cartProduct) => cartProduct.productId === product.id)
    return productIndex < 0 ? false : true
  }

  const addProductToCart = (product: Product, amount: number) => {

  }

  const clearCart = () => {
    setCart([])
  }

  const providedProps: CartContextProps = {}
  return (
    <CartContext.Provider value={providedProps}>{children}</CartContext.Provider>
  )
}

export default CartProvider
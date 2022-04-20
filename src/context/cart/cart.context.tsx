import { CartItem } from '@/types/cart.types';
import { Product } from '@/types/product.types';
import { createContext, useState } from 'react';

interface CartContextProps {
  isProductInCart: (productId: number) => boolean;
  addProductToCart: (product: Product) => void;
  getProductAmountInCart: (productId: number) => number;
  getAmountOfProductsInCart: () => number;
  increaseAmount: (productId: number, productStock: number) => void;
  decreaseAmount: (productId: number) => void;
  cart: Array<CartItem>;
}

export const CartContext = createContext<CartContextProps>(
  {} as CartContextProps,
);

interface CartProviderProps {
  children: React.ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({
  children,
}: CartProviderProps) => {
  const [cart, setCart] = useState<Array<CartItem>>([]);

  const getCartItem = (productId: number) => {
    return cart.find((item) => item.product.id === productId);
  };

  const getCartItemIndex = (productId: number) => {
    return cart.findIndex((item) => item.product.id === productId);
  };

  const getAmountOfProductsInCart = () => {
    return cart.reduce((total, item) => total + item.amount, 0);
  };

  const isProductInCart = (productId: number) => {
    const productIndex = getCartItemIndex(productId);
    return productIndex < 0 ? false : true;
  };

  const getProductAmountInCart = (productId: number) => {
    const cartItem = getCartItem(productId);
    if (cartItem) {
      return cartItem.amount;
    }
    return 0;
  };

  const addProductToCart = (product: Product) => {
    console.log({ product });
    setCart([
      ...cart,
      {
        product,
        amount: 1,
      },
    ]);
  };

  const removeItemFromCart = (productId: number) => {
    setCart([...cart.filter((item) => item.product.id !== productId)]);
  };

  const increaseAmount = (productId: number, productStock: number) => {
    const cartItemIndex = getCartItemIndex(productId);
    const currentCart = [...cart];
    const cartItem = currentCart[cartItemIndex];
    if (cartItem.amount < productStock) cartItem.amount++;
    if (cartItemIndex >= 0) setCart([...currentCart]);
  };

  const decreaseAmount = (productId: number) => {
    const cartItemIndex = getCartItemIndex(productId);
    const currentCart = [...cart];
    const cartItem = currentCart[cartItemIndex];

    if (cartItem.amount === 1) {
      removeItemFromCart(productId);
      return;
    }

    cartItem.amount--;
    if (cartItemIndex >= 0) setCart([...currentCart]);
  };

  const clearCart = () => {
    setCart([]);
  };

  const providedProps: CartContextProps = {
    isProductInCart,
    addProductToCart,
    getProductAmountInCart,
    getAmountOfProductsInCart,
    increaseAmount,
    decreaseAmount,
    cart,
  };
  return (
    <CartContext.Provider value={providedProps}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

import {
  createContext,
  useCallback,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

interface ProductContextProps {
  orders: OrderItem[];
  setOrders: Dispatch<SetStateAction<OrderItem[]>>;
  fetchOrders: (noLoading?: boolean) => void;
  pendencies: PendencyStatusSeller[];
  statusOrder: IStatusOrder[];
  sellers: SellerNamesFilter[];
  setPendencies: Dispatch<SetStateAction<PendencyStatusSeller[]>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  orderFetchParams: OrderFetchParams;
  setOrderFetchParams: Dispatch<SetStateAction<OrderFetchParams>>;
}

const ProductContext = createContext<ProductContextProps>({} as ProductContextProps);

export const ProductProvider: React.FC = ({children}) => {

  const isProductAvailable = (product: Product, amount: number) => {
    const haveStock = product.stock_amount >= amount
    if (haveStock) {
      return true
    }
    return false;
  }






  const providedProps: ProductContextProps = {};
  return (
    <ProductContext.Provider value={providedProps}>{children}</ProductContext.Provider>
  );
};

export default ProductContext;

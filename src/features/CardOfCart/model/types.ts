import { ProductsProps } from "@shared/lib/types/Products";

export interface ProductItemProps {
  product: ProductsProps;
  quantity: number;
  id: number;
}

export interface ProductSliceProps {
  items: ProductItemProps[];
  totalAmount: number;
}

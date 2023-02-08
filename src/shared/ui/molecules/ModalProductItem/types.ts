import { ProductsProps } from "@shared/lib/types/Products";

export interface ModalProductItemProps {
  item: ProductsProps;
  isOpened?: boolean;
  handleClose?: () => void;
}

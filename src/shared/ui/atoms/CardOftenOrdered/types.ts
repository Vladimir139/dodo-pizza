import { ProductsProps } from "@shared/lib/types/Products";

export type CardOftenOrderedProps = Pick<
  ProductsProps,
  "id" | "img" | "title" | "price"
>;

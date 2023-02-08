import { ReactNode } from "react";

export interface ButtonAddToCartProps {
  children?: ReactNode | string;
  onCLick?: () => void;
}

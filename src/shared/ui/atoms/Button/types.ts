import { ReactNode } from "react";

export interface ButtonProps {
  size?: "small" | "medium" | undefined;
  color?: "gray" | "orange" | "light-orange" | undefined;
  onClick?: () => void;
  children?: ReactNode | string | undefined;
}

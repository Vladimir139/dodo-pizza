import { MouseEventHandler, ReactNode } from "react";

export interface ButtonProps {
  size?: "small" | "medium" | "large" | undefined;
  color?: "gray" | "orange" | "light-orange" | undefined;
  onClick?: (e: any) => void;
  children?: ReactNode | string | undefined;
  disabled?: boolean;
  type?: "submit" | "button" | undefined;
}

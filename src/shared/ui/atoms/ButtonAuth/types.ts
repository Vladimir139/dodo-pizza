import { ReactNode } from "react";

export interface ButtonAuthProps {
  children?: string | ReactNode;
  isDisabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
}

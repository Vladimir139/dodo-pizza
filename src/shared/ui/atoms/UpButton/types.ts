import { ReactNode } from "react";

export interface UpButtonProps {
  onCLick?: () => void;
  children?: ReactNode | string;
}

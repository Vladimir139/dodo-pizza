import { ChangeHandler, RefCallBack } from "react-hook-form";
import React, { RefObject } from "react";

export interface NumberInputProps {
  onChange?: ChangeHandler;
  onBlur?: ChangeHandler;
  name: string;
  min?: string | number | undefined;
  max?: string | number | undefined;
  disabled?: boolean | undefined;
  placeholder?: string;
}

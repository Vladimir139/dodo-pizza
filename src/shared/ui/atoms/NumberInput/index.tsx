import React, { FC, ForwardedRef } from "react";
import * as S from "./style";
import { NumberInputProps } from "@shared/ui/atoms/NumberInput/types";

export const NumberInput: FC<NumberInputProps> = React.forwardRef(
  (props, ref: ForwardedRef<HTMLInputElement>) => {
    return <S.NumberInput {...props} ref={ref} />;
  },
);
NumberInput.displayName = "NumberInput";

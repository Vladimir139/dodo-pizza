import {
  ProductItemProps,
  ProductSliceProps,
} from "@features/CardOfCart/model/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ProductSliceProps = {
  items: [],
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductItemProps>) => {
      const itemInCart = state.items.find(
        (item) => item.product.id === action.payload.id,
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.items.push({ ...action.payload });
      }
    },
    removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
      const removeItem = state.items.filter(
        (item) => item.product.id !== action.payload.id,
      );
      state.items = removeItem;
    },
    plusQuantity: (state, action: PayloadAction<{ id: number }>) => {
      const item = state.items.find(
        (item) => item.product.id === action.payload.id,
      );
      if (item) {
        item.quantity++;
      }
    },
    minusQuantity: (state, action: PayloadAction<{ id: number }>) => {
      const item = state.items.find(
        (item) => item.product.id === action.payload.id,
      );
      if (item) {
        item.quantity === 1 ? (item.quantity = 1) : item.quantity--;
      }
    },
    getTotalAmount: (state, action: PayloadAction<{ totalAmount: number }>) => {
      state.totalAmount = action.payload.totalAmount;
    },
  },
});

export const { addToCart, removeFromCart, plusQuantity, minusQuantity } =
  cartSlice.actions;

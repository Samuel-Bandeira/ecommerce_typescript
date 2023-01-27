import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface BasketI {
  basket: {
    id: string;
    title: string;
    image: string;
    price: number;
    rating: number;
  }[];
}

interface PayloadI {
  id: string;
  title: string;
  image: string;
  price: number;
  rating: number;
}

const initialState = {
  basket: [],
} as BasketI;

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<PayloadI>) => {
      console.log("in action");
      state.basket = [...state.basket, action.payload];
    },
  },
});

export const basketActions = basketSlice.actions;
export default basketSlice.reducer;

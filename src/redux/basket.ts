import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface BasketInitialStateI {
  basket: {
    id: string;
    title: string;
    image: string;
    price: number;
    rating: number;
  }[];
}

interface BasketI {
  id: string;
  title: string;
  image: string;
  price: number;
  rating: number;
}

const initialState = {
  basket: [],
} as BasketInitialStateI;

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<BasketI>) => {
      console.log("in action");
      state.basket = [...state.basket, action.payload];
    },
  },
});

export default basketSlice.reducer;
export const basketActions = basketSlice.actions;
export const getBasketTotal = (basket: BasketI[]): number => {
  return basket?.reduce((amount: number, item) => item.price + amount, 0);
};

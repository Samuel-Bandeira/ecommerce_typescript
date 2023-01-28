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
    remove: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      const index: number = state.basket.findIndex(
        (el) => el.id === action.payload
      );
      let basketCp = state.basket;

      if (index >= 0) basketCp.splice(index, 1);
    },
  },
});

export default basketSlice.reducer;
export const basketActions = basketSlice.actions;
export const getBasketTotal = (basket: BasketI[]): number => {
  return basket?.reduce((amount: number, item) => item.price + amount, 0);
};

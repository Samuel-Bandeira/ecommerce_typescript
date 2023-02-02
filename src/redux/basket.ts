import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface BasketInitialStateI {
  basket: {
    id: string;
    title: string;
    image: string;
    price: number;
    rating: number;
    quantity: number;
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
      const productInBasket = state.basket.filter(
        (product) => product.id == action.payload.id
      )[0];

      if (productInBasket == undefined)
        state.basket.push({ ...action.payload, quantity: 1 });
      else productInBasket.quantity += 1;
    },
    remove: (state, action: PayloadAction<string>) => {
      const productInBasket = state.basket.filter(
        (product) => product.id == action.payload
      )[0];

      if (productInBasket.quantity > 1) productInBasket.quantity -= 1;
      else {
        let basketCp = state.basket;

        const index: number = state.basket.findIndex(
          (el) => el.id === action.payload
        );
        if (index >= 0) {
          basketCp.splice(index, 1);
          state.basket = basketCp;
        }
      }
    },
  },
});

export default basketSlice.reducer;
export const basketActions = basketSlice.actions;
export const getBasketTotal = (basket: BasketI[]): number => {
  return basket?.reduce((amount: number, item) => item.price + amount, 0);
};

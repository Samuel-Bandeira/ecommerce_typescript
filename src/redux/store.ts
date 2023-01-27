import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basket";

const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;

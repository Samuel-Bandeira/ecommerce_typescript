import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basket";
import userReducer from "./user";
const store = configureStore({
  reducer: {
    basket: basketReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;

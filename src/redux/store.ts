import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basket";
import userReducer from "./user";
import authReducer from "./auth";
const store = configureStore({
  reducer: {
    basket: basketReducer,
    user: userReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;

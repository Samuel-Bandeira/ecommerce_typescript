import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type AuthI = {
  jwt: string | null;
};

const initialState = {
  jwt: null,
} as AuthI;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.jwt = action.payload;
    },
  },
});

export default authSlice.reducer;
export const authActions = authSlice.actions;

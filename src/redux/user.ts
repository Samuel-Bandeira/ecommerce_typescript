import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateI = {
  user: {
    email: string;
    name: string;
    password: string;
  };
  jwtToken: string;
};

const initialState = {
  user: {},
  jwtToken: "",
} as InitialStateI;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    set: (state, action: PayloadAction<InitialStateI>) => {
      state.user = action.payload.user;
      state.jwtToken = action.payload.jwtToken;
    },
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;

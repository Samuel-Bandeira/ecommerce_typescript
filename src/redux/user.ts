import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateI = {
  user: {
    id: number;
    email: string;
    name: string;
    lastName: string;
  };
};

const initialState = {
  user: {},
} as InitialStateI;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    set: (state, action: PayloadAction<InitialStateI>) => {
      console.log("p:", action.payload);
      state.user = action.payload.user;
    },
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;

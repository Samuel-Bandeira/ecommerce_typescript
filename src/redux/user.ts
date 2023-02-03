import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialStateI {
  user: {
    id: number;
    email: string;
    name: string;
    lastName: string;
    
    creditCards: {
      brand: string;
      cardName: string;
      cardNumber: number;
    }[];
  } | null;
}

const initialState: InitialStateI = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    set: (state, action: PayloadAction<InitialStateI>) => {
      state.user = action.payload.user;
      console.log(state.user);
    },
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;

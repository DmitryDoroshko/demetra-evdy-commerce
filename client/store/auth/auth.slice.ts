import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "@/model/types";
import { decodeToken } from "@/helpers/utils";

interface IAuthState {
  user: IUser | null;
  token: string | null;
}

const initialState: IAuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signInSuccess: (state, action: PayloadAction<{ user: IUser, token: string }>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    signOutSuccess: (state) => {
      state.user = null;
      state.token = null;
    },
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
      state.user = decodeToken(action.payload);
    },
  },
});

export const {
  signInSuccess,
  signOutSuccess,
  setToken,
} = authSlice.actions;

export default authSlice.reducer;
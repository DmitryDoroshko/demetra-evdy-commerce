import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

interface IUser {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user" | undefined;
}

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
      state.user = jwtDecode(action.payload);
    },
  },
});

export const {
  signInSuccess,
  signOutSuccess,
  setToken,
} = authSlice.actions;

export default authSlice.reducer;
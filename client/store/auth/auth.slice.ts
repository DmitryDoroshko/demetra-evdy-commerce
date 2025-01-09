import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUser {
  username: string;
  email: string;
  password: string;
  role: "admin" | "user" | undefined;
  token: string | null;
}

interface IAuthState {
  username: string;
  email: string;
  password: string;
  repeatPassword: string;
  user: IUser | null;
  isAuthenticated: boolean;
}

const initialState: IAuthState = {
  username: "",
  email: "",
  password: "",
  repeatPassword: "",
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setRepeatPassword: (state, action: PayloadAction<string>) => {
      state.repeatPassword = action.payload;
    },
    setAuthData: (state, action: PayloadAction<IAuthState>) => {
      state = action.payload;
    },
    resetAuth: () => initialState,
    loginSuccess: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logoutSuccess: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const {
  setUserName,
  setEmail,
  setPassword,
  setRepeatPassword,
  resetAuth,
  setAuthData,
  loginSuccess,
  logoutSuccess,
} = authSlice.actions;

export default authSlice.reducer;
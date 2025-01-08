import { createAsyncThunk } from "@reduxjs/toolkit";
import { ISignInBody } from "@/service/auth/auth.types";
import { authService } from "@/service/auth/auth-service";

export const signIn = createAsyncThunk("auth/signIn", async (body: ISignInBody, { rejectWithValue }) => {
  try {
    const { data } = await authService.signIn(body);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});


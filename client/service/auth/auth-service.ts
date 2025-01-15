import http from "../http-common";
import { ISignInBody, ISignUpBody } from "@/service/auth/auth.types";
import { AxiosError } from "axios";
import notification from "@/helpers/utils";

class AuthService {
  private static instance: AuthService;

  static getInstance(): AuthService {
    if (!AuthService.instance) {
      return new AuthService();
    }
    return AuthService.instance;
  }

  async signUp(body: ISignUpBody) {
    try {
      const response = await http.post("/users/sign-up", body);
      return response;
    } catch (error) {
      const message = (error as AxiosError<{ message: string }>)?.message;
      notification(`Error while signing up. ${message ?? ""}`, "error");
      throw error;
    }
  }

  async signIn(body: ISignInBody) {
    try {
      const response = await http.post("/users/sign-in", body);
      return response;
    } catch (error) {
      const message = (error as AxiosError<{ message: string }>)?.message;
      notification(`Error while signing in. ${message ?? ""}`, "error");
      throw error;
    }
  }

  // TODO: Make this get user
  async getUser() {
    const { data } = await http.get("/users/user");
    return { data };
  }

  // TODO: Make this sign user out
  async signOut() {
    const { data } = await http.post("/users/sign-out");
    return { data };
  }
}

export const authService = new AuthService();
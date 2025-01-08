import http from "../http-common";
import { ISignInBody, ISignUpBody } from "@/service/auth/auth.types";

class AuthService {
  private static instance: AuthService;

  static getInstance(): AuthService {
    if (!AuthService.instance) {
      return new AuthService();
    }
    return AuthService.instance;
  }

  async signUp(body: ISignUpBody) {
    const response = await http.post("/sign-up", body);
    return response;
  }

  async signIn(body: ISignInBody) {
    const response = await http.post("/sign-in", body);
    return response;
  }

  async getUser() {
    const { data } = await http.get("/user");
    return { data };
  }

  async signOut() {
    const { data } = await http.post("/sign-out");
    return { data };
  }
}

export const authService = new AuthService();
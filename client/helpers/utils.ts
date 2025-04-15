import { toast } from "react-toastify";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { IUser } from "@/model/types";

export function notification(
  message: string,
  type: "info" | "success" | "warning" | "error" = "info",
) {
  return toast[type](message, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
}

export const isTokenValid = (token: string | null): boolean => {
  if (!token) {
    return false;
  }
  try {
    const decoded = jwtDecode<JwtPayload>(token);
    if (decoded.exp && decoded.exp * 1000 < Date.now()) {
      return false;
    }
    return true;
  } catch (error) {
    console.error("Invalid token: ", error);
    return false;
  }
};

export const decodeToken = (token: string): IUser | null => {
  try {
    const decoded = jwtDecode<JwtPayload & IUser>(token);
    return {
      id: decoded.id || "",
      name: decoded.name || "",
      email: decoded.email || "",
      role: decoded.role || undefined,
    };
  } catch (error) {
    console.error("Invalid token", error);
    return null;
  }
};
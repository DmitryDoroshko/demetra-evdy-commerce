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

export const formatUSD = (moneyValue: string | number): string => {
  const moneyNumber = typeof moneyValue === "string" ? parseFloat(moneyValue) : moneyValue;

  if (isNaN(moneyNumber)) {
    return "$0";
  }

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: moneyNumber % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  });

  return formatter.format(moneyNumber);
};
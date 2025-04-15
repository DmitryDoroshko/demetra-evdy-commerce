import http from "../http-common";
import { ICreateOrder } from "@/service/checkout/checkout.types";

class CheckoutService {
  private static instance: CheckoutService;

  static getInstance(): CheckoutService {
    if (!CheckoutService.instance) {
      return new CheckoutService();
    }
    return CheckoutService.instance;
  }

  async createOrder(body: ICreateOrder): Promise<any> {
    try {
      const response = await http.post("/checkout", body);
      return response.data;
    } catch (error) {
      console.error("Failed to create order:", error);
      throw error;
    }
  }
}

export const checkoutService = new CheckoutService();

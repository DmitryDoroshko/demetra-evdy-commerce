import http from "./http-common";
import { IProduct } from "@/model/types";

export class ProductsService {
  private static instance: ProductsService;

  static getInstance(): ProductsService {
    if (!ProductsService.instance) {
      return new ProductsService();
    }
    return ProductsService.instance;
  }

  async getAllProducts(): Promise<IProduct[]> {
    try {
      const response = await http.get("/products");
      return response.data.data.items;
    } catch (error) {
      console.log("Error fetching all products", error);
      throw error;
    }
  }

  async getSingleProductById(productId: string): Promise<IProduct> {
    try {
      const response = await http.get(`/products/${productId}`);
      return response.data.data;
    } catch (error) {
      console.log("Error fetching single product", error);
      throw error;
    }
  }
}



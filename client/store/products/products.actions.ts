import { createAsyncThunk } from "@reduxjs/toolkit";
import { productsService } from "@/service/products/products-service";
import { IProduct } from "@/model/types";

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async () => {
    try {
      const data: IProduct[] =
        await productsService.getAllProducts();
      return data;
    } catch (error) {
      throw error;
    }
  },
);

// TODO: Create logic for fetchSingleProductById
export const fetchSingleProductById = createAsyncThunk(
  "products/fetchSingleProductById",
  async (productId: string) => {
    try {
      const data: IProduct =
        await productsService.getSingleProductById(productId);
      return data;
    } catch (error) {
      throw error;
    }
  },
);

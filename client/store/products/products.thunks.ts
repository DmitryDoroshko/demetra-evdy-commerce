import { ProductsService } from "@/service/products-service";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IProduct } from "@/model/types";

export const fetchAllProducts = createAsyncThunk("products/fetchAllProducts",
  async () => {
    try {
      const data: IProduct[] = await ProductsService.getInstance().getAllProducts();
      return data;
    } catch (error) {
      throw error;
    }
  },
);

// TODO: Create logic for fetchSingleProductById
export const fetchSingleProductById = createAsyncThunk("products/fetchSingleProductById",
  async (productId: string) => {
    try {
      const data: IProduct = await ProductsService.getInstance().getSingleProductById(productId);
      return data;
    } catch (error) {
      throw error;
    }
  },
);

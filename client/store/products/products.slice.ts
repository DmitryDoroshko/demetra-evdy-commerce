import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "@/model/types";
import { fetchAllProducts, fetchSingleProductById } from "@/store/products/products.thunks";

export interface IProductsState {
  productItems: IProduct[];
  productItemsLoading: boolean;
  productItemsLoadError: string | null;
  currentProduct: IProduct | null;
  currentProductLoading: boolean;
  currentProductLoadError: null | string;
}

const initialState: IProductsState = {
  productItems: [],
  productItemsLoading: false,
  productItemsLoadError: null,
  currentProduct: null,
  currentProductLoading: false,
  currentProductLoadError: null
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProductItem(state, { payload }: PayloadAction<IProduct>) {
      state.productItems = [...state.productItems, payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.productItemsLoading = true;
        state.productItemsLoadError = null;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.productItemsLoadError = null;
        state.productItemsLoading = false;
        state.productItems = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state) => {
        state.productItemsLoadError = "Failed to fetch all products";
        state.productItemsLoading = false;
        state.productItems = [];
      });

    builder
      .addCase(fetchSingleProductById.pending, (state) => {
        state.currentProductLoading = true;
        state.currentProductLoadError = null;
      })
      .addCase(fetchSingleProductById.fulfilled, (state, action) => {
        state.currentProduct = action.payload;
        state.currentProductLoading = false;
        state.currentProductLoadError = null;
      })
      .addCase(fetchSingleProductById.rejected, (state => {
        state.currentProductLoadError = "Failed to fetch single product";
        state.currentProduct = null;
        state.currentProductLoading = false;
      }));
  },
});

export default productsSlice.reducer;

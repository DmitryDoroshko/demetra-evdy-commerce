import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct, IWishlistItem } from "@/model/types";
import {
  fetchAllProducts,
  fetchSingleProductById,
} from "@/store/products/products.actions";
import { DEFAULT_SORTED_BY_IDENTIFIER } from "@/constants/constants";

export interface IProductsState {
  productItems: IProduct[];
  productItemsLoading: boolean;
  productItemsLoadError: string | null;
  currentProduct: IProduct | IWishlistItem | null;
  currentProductLoading: boolean;
  currentProductLoadError: null | string;
  sortedBy: "name" | "price";
}

const initialState: IProductsState = {
  productItems: [],
  productItemsLoading: false,
  productItemsLoadError: null,
  currentProduct: null,
  currentProductLoading: false,
  currentProductLoadError: null,
  sortedBy: DEFAULT_SORTED_BY_IDENTIFIER,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProductItem(state, { payload }: PayloadAction<IProduct>) {
      state.productItems = [...state.productItems, payload];

      if (state.sortedBy === "name") {
        state.productItems.sort((item1, item2) => {
          if (item1.name < item2.name) return -1;
          if (item1.name > item2.name) return 1;
          return 0;
        });
      } else if (state.sortedBy === "price") {
        state.productItems.sort((item1, item2) => {
          if (item1.price < item2.price) return -1;
          if (item1.price > item2.price) return 1;
          return 0;
        });
      }
    },
    setSortedBy: (state, { payload }: PayloadAction<"name" | "price">) => {
      state.sortedBy = payload;

      if (payload === "name") {
        state.productItems.sort((item1, item2) => {
          if (item1.name < item2.name) return -1;
          if (item1.name > item2.name) return 1;
          return 0;
        });
      } else if (payload === "price") {
        state.productItems.sort((item1, item2) => {
          if (item1.price < item2.price) return -1;
          if (item1.price > item2.price) return 1;
          return 0;
        });
      }
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

        let sortedProductItems = action.payload;

        if (state.sortedBy === "name") {
          sortedProductItems.sort((item1, item2) => {
            if (item1.name < item2.name) return -1;
            if (item1.name > item2.name) return 1;
            return 0;
          });
        } else if (state.sortedBy === "price") {
          sortedProductItems.sort((item1, item2) => {
            if (item1.price < item2.price) return -1;
            if (item1.price > item2.price) return 1;
            return 0;
          });
        }

        state.productItems = sortedProductItems;
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
      .addCase(fetchSingleProductById.rejected, (state) => {
        state.currentProductLoadError = "Failed to fetch single product";
        state.currentProduct = null;
        state.currentProductLoading = false;
      });
  },
});

export const { setSortedBy } = productsSlice.actions;

export default productsSlice.reducer;

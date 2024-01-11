import { RootState } from "@/store";

export const selectProductItems = (state: RootState) =>
  state.products.productItems;
export const selectCurrentProduct = (state: RootState) =>
  state.products.currentProduct;

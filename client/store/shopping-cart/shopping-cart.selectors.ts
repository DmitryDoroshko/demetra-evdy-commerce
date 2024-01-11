import { RootState } from "@/store";

export const selectCartItems = (state: RootState) =>
  state.shoppingCart.cartItems;
export const selectTotalPriceForAllItems = (state: RootState) =>
  state.shoppingCart.totalPriceForAllItems;
export const selectSubtotalPriceForAllItems = (state: RootState) =>
  state.shoppingCart.subtotalPriceForAllItems;
export const selectShippingFlatRate = (state: RootState) =>
  state.shoppingCart.shippingFlatRate;
export const selectTotalItemsCount = (state: RootState) =>
  state.shoppingCart.totalItemsCount;

export const selectCartItemsLoading = (state: RootState) =>
  state.shoppingCart.cartItemsLoading;

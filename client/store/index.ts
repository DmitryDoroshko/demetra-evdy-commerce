import { configureStore } from "@reduxjs/toolkit";

import shoppingCart from "@/store/shopping-cart/shopping-cart.slice";
import products from "@/store/products/products.slice";

export const store = configureStore({
  reducer: {
    shoppingCart,
    products
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

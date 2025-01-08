import { configureStore } from "@reduxjs/toolkit";

import shoppingCart from "@/store/shopping-cart/shopping-cart.slice";
import products from "@/store/products/products.slice";
import auth from "@/store/auth/auth.slice";

export const store = configureStore({
  reducer: {
    auth,
    shoppingCart,
    products,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

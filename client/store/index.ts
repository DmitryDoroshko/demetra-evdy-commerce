import { configureStore } from "@reduxjs/toolkit";

import shoppingCart from "@/store/shopping-cart/shopping-cart.slice";
import products from "@/store/products/products.slice";
import wishlist from "@/store/wishlist/wishlist.slice";

export const store = configureStore({
  reducer: {
    shoppingCart,
    products,
    wishlist,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

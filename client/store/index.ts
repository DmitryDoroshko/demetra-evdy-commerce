import { configureStore } from "@reduxjs/toolkit";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import shoppingCart from "@/store/shopping-cart/shopping-cart.slice";
import products from "@/store/products/products.slice";
import auth from "@/store/auth/auth.slice";
import wishlist from "@/store/wishlist/wishlist.slice";

const authPersistConfig = {
  key: "auth",
  storage,
  blacklist: [],
};

const shoppingCartPersistConfig = {
  key: "shopping-cart",
  storage,
  blacklist: [],
};

const productsPersistConfig = {
  key: "products",
  storage,
  blacklist: [],
};

const wishlistPersistConfig = {
  key: "wishlist",
  storage,
  blacklist: [],
};

const persistedAuthReducer = persistReducer(authPersistConfig, auth);
const persistedShoppingCartReducer = persistReducer(shoppingCartPersistConfig, shoppingCart);
const persistedProductsReducer = persistReducer(productsPersistConfig, products);
const persistedWishlistReducer = persistReducer(wishlistPersistConfig, wishlist);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    shoppingCart: persistedShoppingCartReducer,
    products: persistedProductsReducer,
    wishlist: persistedWishlistReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

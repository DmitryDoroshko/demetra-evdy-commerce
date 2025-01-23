import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWishlistOrCartItem } from "@/model/types";

interface IWishlistState {
  wishlistItems: IWishlistOrCartItem[];
}

const initialState: IWishlistState = {
  wishlistItems: [],
};

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
      addItemToWishlist: (state, action: PayloadAction<{ item: IWishlistOrCartItem }>) => {
        // check if exists
        const foundItem = state.wishlistItems.find((item: IWishlistOrCartItem) => item.id === action.payload.item.id);

        // if exists, do not add
        if (foundItem) {
          return;
        }

        state.wishlistItems.push(action.payload.item);
      },
      removeItemFromWishlist: (state, action: PayloadAction<{ id: string }>) => {
        state.wishlistItems = state.wishlistItems.filter(item => item.id !== action.payload.id);
      },
      clearWishlist: (state, action) => {
        state.wishlistItems = [];
      },
    },
  },
);

export const {
  addItemToWishlist,
  removeItemFromWishlist,
  clearWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;

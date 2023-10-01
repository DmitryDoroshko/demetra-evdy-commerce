import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWishlistItem } from "@/model/types";

export interface IWishlistState {
  wishlistItems: IWishlistItem[];
}

const initialState = {
  wishlistItems: [],
};

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
      addProductToWishlist: (state, { payload }: PayloadAction<{ item: IWishlistItem }>) => {
        const { item } = payload;
        const wishlistItemExisting = state.wishlistItems.find(wishlistItem => wishlistItem.id === item.id);

        if (wishlistItemExisting) {
          return;
        }

        state.wishlistItems.push(item);
      },
      removeProductFromWishlistById: (state, { payload }: PayloadAction<{ id: string; }>) => {
        const { id } = payload;

        state.wishlistItems = state.wishlistItems.filter(wishlistItem => wishlistItem.id !== id);
      },
    },
  },
);

export const {
  addProductToWishlist,
  removeProductFromWishlistById,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;


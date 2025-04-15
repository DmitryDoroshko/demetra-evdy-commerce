import { RootState } from "@/store";

export const selectWishlistItems = (state: RootState) => state.wishlist.wishlistItems;

export const selectWishlistItemsCount = (state: RootState) => state.wishlist.wishlistItems.length;

export const createSelectProductFromWishlist = (id: string) => (state: RootState) => state.wishlist.wishlistItems.find((wishlist) => wishlist.id === id) || null;
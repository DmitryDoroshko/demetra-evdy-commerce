import { IProduct, IWishlistItem } from "@/model/types";

export function isProductInWishlist(wishlistItems: IWishlistItem[], product: IProduct) {
  return wishlistItems.find(wishlistItem => wishlistItem.id === product.id);
}

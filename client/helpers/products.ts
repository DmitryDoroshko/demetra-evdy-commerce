import { IProduct, IWishlistOrCartItem } from "@/model/types";

export function isProductInShoppingCart(
  cartItems: IWishlistOrCartItem[],
  product: IWishlistOrCartItem | null,
): IProduct | null {
  if (product == null) return null;
  return cartItems.find((cartItem) => cartItem.id === product.id) || null;
}

export function isProductInWishlist(wishlistItems: IWishlistOrCartItem[], product: IWishlistOrCartItem) {
  if (product == null) return null;
  return wishlistItems.find((wishlistItem) => wishlistItem.id === product.id) || null;
}
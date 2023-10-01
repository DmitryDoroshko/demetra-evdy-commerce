import { ICartItem, IProduct } from "@/model/types";

export function isProductInShoppingCart(cartItems: ICartItem[], product: IProduct | null) {
  if (!product) {
    return false;
  }
  return cartItems.find(cartItem => cartItem.id === product.id);
}

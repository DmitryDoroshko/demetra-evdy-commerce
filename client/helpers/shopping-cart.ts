import { ICartItem, IProduct } from "@/model/types";

export function isProductInShoppingCart(cartItems: ICartItem[], product: IProduct) {
  return cartItems.find(cartItem => cartItem.id === product.id);
}

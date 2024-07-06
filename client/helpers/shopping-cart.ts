import { ICartItem, IProduct } from "@/model/types";

export function isProductInShoppingCart(
  cartItems: ICartItem[],
  product: IProduct | null
): IProduct | null {
  if (product == null) return null;
  return cartItems.find((cartItem) => cartItem.id === product.id) || null;
}

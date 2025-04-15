import { removeItemFromWishlist } from "@/store/wishlist/wishlist.slice";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { addItemToCart, removeItemFromCartByItsIdCompletely } from "@/store/shopping-cart/shopping-cart.slice";
import { createSelectProductFromWishlist } from "@/store/wishlist/wishlist.selectors";
import { isProductInShoppingCart } from "@/helpers/products";
import { selectCartItems } from "@/store/shopping-cart/shopping-cart.selectors";
import { notification } from "@/helpers/utils";

export function WishlistItem(
  {
    imageSrc,
    imageAlt,
    inStock,
    name,
    id,
    price,
  }:
  {
    imageSrc: string;
    imageAlt: string;
    name: string;
    price: number;
    inStock: boolean;
    id: string;
  }) {
  const dispatch = useAppDispatch();
  const productFromWishlist = useAppSelector(createSelectProductFromWishlist(id));
  const cartItems = useAppSelector(selectCartItems);
  const isProductInCart = isProductInShoppingCart(cartItems, productFromWishlist);

  const removeItemFromWishlistHandler = () => {
    dispatch(removeItemFromWishlist({ id }));
  };

  const toggleWishlistItemToOrFromCartHandler = () => {
    // TODO: Fix this warning
    if (!isProductInCart) {
      // @ts-ignore
      dispatch(addItemToCart({ item: productFromWishlist, count: 1 }));
      notification("Added item to cart", "success");
      return;
    }

    dispatch(removeItemFromCartByItsIdCompletely({id}));
    notification("Removed item from cart", "info");
  };

  return (
    <tr className="wishlist-full__item">
      <td>
        <svg
          onClick={removeItemFromWishlistHandler}
          className="shopping-cart-full__remove-icon"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_20_1896)">
            <path
              d="M11.25 11.25L6.75 6.75M11.25 6.75L6.75 11.25"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
              stroke="black"
              strokeWidth="1.5"
            />
          </g>
          <defs>
            <clipPath id="clip0_20_1896">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <div className="wishlist-full__picture">
          <img src={imageSrc} alt={imageAlt} className="wishlist-full__img" />
        </div>
        <span className="wishlist-full__shoe-name">{name}</span>
      </td>
      <td>
        <span className="wishlist-full__price">${price}</span>
      </td>
      <td>
        <span
          className={`wishlist-full__status ${inStock ? "wishlist-full__status--in-stock" : "wishlist-full__status--out-of-stock"}`}>{inStock ? "in stock" : "out of stock"}</span>
      </td>
      <td>
        <button className="btn btn--grey wishlist-full__btn"
                onClick={toggleWishlistItemToOrFromCartHandler}>{!isProductInCart ? "Add to the cart" : "Remove from cart"}
        </button>
      </td>
    </tr>
  );
}
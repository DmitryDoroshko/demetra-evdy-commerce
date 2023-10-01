import { addItemToCart, removeItemFromCartByItsIdCompletely } from "@/store/shopping-cart/shopping-cart.slice";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { isProductInShoppingCart } from "@/helpers/shopping-cart";
import { selectCartItems } from "@/store/shopping-cart/shopping-cart.selectors";
import { useEffect, useState } from "react";
import { ProductsService } from "@/service/products-service";
import { IProduct } from "@/model/types";

export function WishlistItem({
                               inStock,
                               imageSrc,
                               imageAlt,
                               name,
                               price,
                               id,
                             }: { id: string; inStock: boolean; imageSrc: string; name: string; price: number; imageAlt: string; }) {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);
  const [currentProductFromProducts, setCurrentProductFromProducts] = useState<IProduct | null>(null);
  const productInShoppingCart = isProductInShoppingCart(cartItems, currentProductFromProducts);

  useEffect(() => {
    const fetchProduct = async () => {
      const productFetched = await ProductsService.getInstance().getSingleProductById(id);
      setCurrentProductFromProducts(productFetched);
    };
    fetchProduct();
  }, [id]);

  const toggleItemInCart = () => {
    if (!productInShoppingCart) {
      dispatch(addItemToCart({ item: currentProductFromProducts, count: 1 }));
      return;
    }

    dispatch(removeItemFromCartByItsIdCompletely({ id: currentProductFromProducts?.id }));
  };

  return (
    <tr className="wishlist-full__item">
      <td>
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
          className={`wishlist-full__status ${inStock ? "wishlist-full__status--in-stock" : "wishlist-full__status--out-of-stock"}`}>
          {inStock ? "in stock" : "out of stock"}
        </span>
      </td>
      <td>
        <button className="btn btn--grey wishlist-full__btn"
                onClick={toggleItemInCart}>{!productInShoppingCart ? "Add to the cart" : "Remove from cart"}</button>
      </td>
    </tr>
  );

}

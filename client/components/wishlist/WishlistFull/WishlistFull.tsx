import { useAppSelector } from "@/hooks/redux-hooks";
import { selectWishlistItems } from "@/store/wishlist/wishlist.selectors";
import { WishlistItem } from "@/components/wishlist/WishlistItem/WishlistItem";
import Link from "next/link";

export function WishlistFull() {
  const wishlistItems = useAppSelector(selectWishlistItems);

  const renderedWishlistItems = wishlistItems.map(item => (
    <WishlistItem
      key={item.id}
      imageSrc={item.image}
      imageAlt={item.imageAltText}
      name={item.name}
      price={item.price}
      inStock={item.inStock || false}
      id={item.id} />));

  return (
    <section className="wishlist-full">
      <div className="container">
        <div className="wishlist-full__inner">
          <table className="wishlist-full__table">
            <tr className="wishlist-full__head">
              <th>product</th>
              <th>price</th>
              <th>status</th>
              <th></th>
            </tr>
            {renderedWishlistItems}
          </table>

          <div className="wishlist-full__actions">
            <Link href={"/shop"} className="btn btn--grey wishlist-full__back-to-shop-btn">Back to shop</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
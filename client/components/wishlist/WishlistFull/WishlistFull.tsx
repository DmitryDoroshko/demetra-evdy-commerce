import Link from "next/link";
import { WishlistItem } from "@/components/wishlist/WishlistItem/WishlistItem";
import { IWishlistItem } from "@/model/types";

export function WishlistFull({ wishlistItems }: { wishlistItems: IWishlistItem[] }) {
  return (
    <main className="wishlist-full">
      <div className="container">
        <div className="wishlist-full__inner">
          <table className="wishlist-full__table">
            <tr className="wishlist-full__head">
              <th>product</th>
              <th>price</th>
              <th>status</th>
              <th></th>
            </tr>
            {wishlistItems.map(wishlistItem => {
              return <WishlistItem key={wishlistItem.id}
                                   id={wishlistItem.id}
                                   inStock={wishlistItem.availabilityStatus === "in-stock"}
                                   imageSrc={wishlistItem.image}
                                   name={wishlistItem.name}
                                   price={wishlistItem.price}
                                   imageAlt={wishlistItem.image} />;
            })
            }
          </table>
          <div className="wishlist-full__actions">
            <Link href={"/shop"} className="btn btn--grey wishlist-full__back-to-shop-btn">Back to shop</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

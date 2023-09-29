import Link from "next/link";
import { WishlistItem } from "@/components/wishlist/WishlistItem/WishlistItem";

export function WishlistFull() {
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
            <WishlistItem inStock={false} price={113} name={"NIKE AIR FORCE 2 ‘99"}
                          imageSrc={"/assets/img/wishlist/1.png"} imageAlt={"Nike air"} />
            <WishlistItem inStock={true} price={114} name={"NIKE AIR FORCE 1 ‘07"}
                          imageSrc={"/assets/img/wishlist/2.png"} imageAlt={"Nike force"} />
            <WishlistItem inStock={true} price={120} name={"Adidas 69 pro"} imageAlt={"Adidas"}
                          imageSrc={"/assets/img/wishlist/3.png"} />
          </table>
          <div className="wishlist-full__actions">
            <Link href={"/shop"} className="btn btn--grey wishlist-full__back-to-shop-btn">Back to shop</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

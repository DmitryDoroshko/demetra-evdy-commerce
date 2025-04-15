import Link from "next/link";

export function WishlistEmpty() {
  return (
    <section className="wishlist-empty">
      <div className="wishlist-empty__main">
        <div className="container">
          <div className="wishlist-empty__main-inner">
            <h1 className="wishlist-empty__heading">Your Wishlist is empty</h1>
            <p className="wishlist-empty__text">Aliquam ipsum tristique gravida amet a, pellentesque tempor euismod.
              Maecenas id
              consequat, tortor enim, in consectetur amet, felis fames. Fringilla quis at sed tristique are sed.</p>
          </div>
        </div>
      </div>
      <div className="wishlist-empty__actions">
        <div className="container">
          <div className="wishlist-empty__actions-inner">
            <Link href={"/shop"} className="btn btn--grey wishlist-empty__go-to-shop-btn">Go to shop</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
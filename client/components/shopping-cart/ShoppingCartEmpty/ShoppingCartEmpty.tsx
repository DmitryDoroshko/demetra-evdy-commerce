import Link from "next/link";

export function ShoppingCartEmpty() {
  return (
    <main className="shopping-cart-empty">
      <div className="shopping-cart-empty__main">
        <div className="container">
          <div className="shopping-cart-empty__main-inner">
            <h1 className="shopping-cart-empty__heading">Your Shopping cart is empty</h1>
            <p className="shopping-cart-empty__text">To see which products are in cart, go to shop and click on “Add
              to cart”
              button. For now there is no products added into the cart.</p>
          </div>
        </div>
      </div>
      <div className="shopping-cart-empty__actions">
        <div className="container">
          <div className="shopping-cart-empty__actions-inner">
            <Link href={"/shop"} className="btn btn&#45;&#45;grey shopping-cart-empty__go-to-shop-btn">Go to shop</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

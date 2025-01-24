export function CheckoutResult() {
  return (
    <section className="checkout-empty">
      <div className="checkout-empty__main">
        <div className="container">
          <div className="checkout-empty__main-inner">
            <h1 className="checkout-empty__heading">thanks for your order!</h1>
            <p className="checkout-empty__text">Your order is accepted. The manager will contact you shortly.</p>
          </div>
        </div>
      </div>
      <div className="checkout-empty__actions">
        <div className="container">
          <div className="checkout-empty__actions-inner">
            <button className="btn btn--grey checkout-empty__go-to-shop-btn">Go to shop</button>
          </div>
        </div>
      </div>
    </section>
  );
}
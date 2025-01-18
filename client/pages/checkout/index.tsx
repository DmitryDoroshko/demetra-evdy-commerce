import { MainSecondary } from "@/components/shared/MainSecondary/MainSecondary";

export default function CheckoutPage() {
  return (
    <>
      <MainSecondary image={"/assets/img/main-secondary/checkout.png"} imageAlternativeText={"Checkout picture"}
                     subtitle={"Home / Checkout"} title={"Checkout"} />

      <main className="checkout">
        <div className="container">
          <div className="checkout__inner">
            <h2 className="checkout__heading-main">Billing Details</h2>
            <div className="checkout__content">

              <div className="checkout__left">
                <div className="checkout__action checkout__action--name">
                  <label htmlFor="name" className="checkout__label">Name*</label>
                  <input type="text" id="name" className="checkout__input" />
                </div>

                <div className="checkout__action checkout__action--surname">
                  <label htmlFor="surname" className="checkout__label">Surname*</label>
                  <input type="text" id="surname" className="checkout__input" />
                </div>

                <div className="checkout__action checkout__action--company-name">
                  <label htmlFor="company-name" className="checkout__label">Company Name</label>
                  <input type="text" id="company-name" className="checkout__input" />
                </div>

                <div className="checkout__action checkout__action--country">
                  <label htmlFor="country" className="checkout__label">Country*</label>
                  <input type="text" id="country" className="checkout__input" />
                </div>

                <div className="checkout__action checkout__action--city">
                  <label htmlFor="city" className="checkout__label">City*</label>
                  <input type="text" id="city" className="checkout__input" />
                </div>

                <div className="checkout__action checkout__action--address">
                  <label htmlFor="address" className="checkout__label">Address*</label>
                  <input type="text" id="address" className="checkout__input" />
                </div>

                <div className="checkout__action checkout__action--phone-number">
                  <label htmlFor="phone-number" className="checkout__label">Phone Number</label>
                  <input type="tel" id="phone-number" className="checkout__input" />
                </div>

                <div className="checkout__action checkout__action--email">
                  <label htmlFor="email" className="checkout__label">E-Mail*</label>
                  <input type="email" id="email" className="checkout__input" />
                </div>

                <div className="checkout__action checkout__action--zip">
                  <label htmlFor="zip" className="checkout__label">Zip code / Post code*</label>
                  <input type="number" id="zip" className="checkout__input" />
                </div>
              </div>

              <div className="checkout__right">

                <div className="checkout__totals totals">
                  <div className="totals__content-right-main">

                    <h3 className="totals__content-right-sub-heading totals__content-right--border-bottom">products</h3>

                    <div className="totals__content-right-flex">
                      <span className="totals__content-right-heading">Jordan Delta 3 SP</span>
                      <span className="totals__content-right-price">$110</span>
                    </div>

                    <div className="totals__content-right-flex">
                      <span className="totals__content-right-heading">Nike air force 1 ‘07</span>
                      <span className="totals__content-right-price">$114</span>
                    </div>

                    <div className="totals__content-right-flex totals__content-right--border-bottom">
                      <span
                        className="totals__content-right-text-heading totals__content-right-text-heading--1">Subtotals:</span>
                      <span className="totals__content-right-price">$338</span>
                    </div>

                    <h3 className="totals__content-right-heading">
                      Shipping</h3>

                    <div className="totals__content-right-flex totals__content-right--border-bottom">
                      <span className="totals__content-right-text-heading totals__content-right-text-heading--2">Flat Rate: $15</span>
                    </div>

                    <div className="totals__content-right-flex">
                      <h3 className="totals__content-right-heading">
                        Total:</h3>
                      <span className="totals__content-right-price">$353</span>
                    </div>
                  </div>
                </div>

                <div className="checkout__payment">
                  <div className="checkout__radio-wrapper">
                    <input type="radio" className="checkout__radio-input" id="direct-bank-transfer" name="payment" />
                    <label htmlFor="direct-bank-transfer" className="checkout__radio-label">
                      <span className="checkout__radio-button"></span> Direct Bank Transfer</label>
                  </div>

                  <p className="checkout__text">Make your payment directly into our bank account. Please use your Order
                    ID as the payment reference. Your order will not be shipped until the funds have cleared in our
                    account.</p>

                  <div className="checkout__radio-wrapper">
                    <input type="radio" className="checkout__radio-input" id="check-payment" name="payment" />
                    <label htmlFor="check-payment" className="checkout__radio-label">
                      <span className="checkout__radio-button"></span>
                      Check Payment</label>
                  </div>

                  <div className="checkout__radio-wrapper">
                    <input type="radio" className="checkout__radio-input" id="cash-on-delivery" name="payment" />
                    <label htmlFor="cash-on-delivery" className="checkout__radio-label">
                      <span className="checkout__radio-button"></span>Cash on Delivery</label>
                  </div>

                </div>

                <div className="checkout__payment-actions">
                  <button className="btn btn--grey checkout__place-order-btn">Place order</button>
                </div>

              </div>

            </div>
          </div>
        </div>
      </main>

      <main className="checkout-empty">
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
      </main>
    </>
  );
}
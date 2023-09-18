import { MainSecondary } from "@/components/shared/MainSecondary/MainSecondary";

export default function ShoppingCart() {
  return (
    <>
      <MainSecondary image={"/assets/img/main-secondary/shopping-cart.png"} imageAlternativeText={"Shopping cart"}
                     subtitle={"Home / Shopping cart"} title={"Shopping cart"} />
      <main className="shopping-cart-full">
        <div className="container">
          <div className="shopping-cart-full__inner">
            <h2 className="shopping-cart-full__heading">Product</h2>
            <div className="shopping-cart-full__content">

              <div className="shopping-cart-full__content-left">
                <div className="shopping-cart-full__shoe-item">
                  <div className="shopping-cart-full__shoe-item-left">
                    <svg className="shopping-cart-full__remove-icon" width="18" height="18" viewBox="0 0 18 18"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_20_1896)">
                        <path d="M11.25 11.25L6.75 6.75M11.25 6.75L6.75 11.25" stroke="black" strokeWidth="1.5"
                              strokeLinecap="round" />
                        <path
                          d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
                          stroke="black" strokeWidth="1.5" />
                      </g>
                      <defs>
                        <clipPath id="clip0_20_1896">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="shopping-cart-full__picture">
                      <img src="/assets/img/shopping-cart/1.png" alt="1" className="shopping-cart-full__img"/>
                    </div>
                    <span className="shopping-cart-full__shoe-name">Jordan Delta 3 SP</span>
                  </div>

                  <div className="shopping-cart-full__shoe-item-actions-middle">
                    <button className="shopping-cart-full__remove">
                      <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                        <path d="M6 1L1 6L6 11" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <span className="shopping-cart-full__count">1</span>
                    <button className="shopping-cart-full__add">
                      <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 11L6 6L1 1" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>

                  <div className="shopping-cart-full__shoe-item-right">
                    <span className="shopping-cart-full__shoe-item-price">$110</span>
                  </div>

                </div>

                <div className="shopping-cart-full__shoe-item">
                  <div className="shopping-cart-full__shoe-item-left">
                    <svg className="shopping-cart-full__remove-icon" width="18" height="18" viewBox="0 0 18 18"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_20_1896)">
                        <path d="M11.25 11.25L6.75 6.75M11.25 6.75L6.75 11.25" stroke="black" strokeWidth="1.5"
                              strokeLinecap="round" />
                        <path
                          d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
                          stroke="black" strokeWidth="1.5" />
                      </g>
                      <defs>
                        <clipPath id="clip0_20_1896">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="shopping-cart-full__picture">
                      <img src="/assets/img/shopping-cart/2.png" alt="2" className="shopping-cart-full__img"/>
                    </div>
                    <span className="shopping-cart-full__shoe-name">nike air force 1 ‘07</span>
                  </div>

                  <div className="shopping-cart-full__shoe-item-actions-middle">
                    <button className="shopping-cart-full__remove">
                      <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                        <path d="M6 1L1 6L6 11" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <span className="shopping-cart-full__count">2</span>
                    <button className="shopping-cart-full__add">
                      <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 11L6 6L1 1" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>

                  <div className="shopping-cart-full__shoe-item-right">
                    <span className="shopping-cart-full__shoe-item-price">$228</span>
                  </div>

                </div>
              </div>

              <div className="shopping-cart-full__content-right">
                <div className="shopping-cart-full__content-right-main">

                  <h3
                    className="shopping-cart-full__content-right-heading shopping-cart-full__content-right--border-bottom">cart
                    totals</h3>

                  <div
                    className="shopping-cart-full__content-right-flex shopping-cart-full__content-right--border-bottom">
                    <span
                      className="shopping-cart-full__content-right-text-heading shopping-cart-full__content-right-text-heading--1">Subtotals:</span>
                    <span className="shopping-cart-full__content-right-price">$338</span>
                  </div>

                  <h3
                    className="shopping-cart-full__content-right-heading shopping-cart-full__content-right--border-bottom">
                    Shipping</h3>

                  <div className="shopping-cart-full__content-right-flex">
                    <span
                      className="shopping-cart-full__content-right-text-heading shopping-cart-full__content-right-text-heading--2">Flat Rate: $15</span>
                  </div>

                  <div
                    className="shopping-cart-full__content-right-flex shopping-cart-full__content-right--border-bottom">
                    <span
                      className="shopping-cart-full__content-right-text-heading shopping-cart-full__content-right-text-heading--2">Where to: London, UK</span>
                  </div>

                  <div className="shopping-cart-full__content-right-flex">
                    <h3 className="shopping-cart-full__content-right-heading">
                      Total:</h3>
                    <span className="shopping-cart-full__content-right-price">$353</span>
                  </div>
                </div>

                <div className="shopping-cart-full__content-right-actions">
                  <button className="shopping-cart-full__proceed-to-checkout-btn btn btn--grey">Proceed to checkout
                  </button>
                  <button className="shopping-cart-full__continue-shopping-btn btn btn--transparent-red">Continue
                    shopping
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="discount">
        <div className="container">
          <div className="discount__inner">
            <h2 className="discount__heading">Discount</h2>
            <p className="discount__text">To apply your discount enter number of your coupon and press “Submit”
              button</p>

            <form className="discount__form">
              <input type="text" placeholder="Enter your coupon" className="discount__form-input" />
              <button type="submit" className="discount__submit-btn btn btn--grey">Submit</button>
            </form>
          </div>
        </div>
      </section>

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
              <button className="btn btn&#45;&#45;grey shopping-cart-empty__go-to-shop-btn">Go to shop</button>
            </div>
          </div>
        </div>
      </main>
    </>
);
}

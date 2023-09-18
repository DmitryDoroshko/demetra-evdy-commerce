import { MainSecondary } from "@/components/shared/MainSecondary/MainSecondary";

export default function ProductPage() {
  return (
    <>
      <MainSecondary image={"/assets/img/main-secondary/product.png"}
                     imageAlternativeText={"Shop picture"}
                     subtitle={"Home / Shop"}
                     title={"Shop"} />

      <main className="product">
        <div className="container">
          <div className="product__inner">
            <div className="product__left">
              <div className="product__left-item">
                <img src="/assets/img/product/1.png" alt="1" className="product__left-item-img" />
              </div>

              <div className="product__left-item">
                <img src="/assets/img/product/2.png" alt="2" className="product__left-item-img" />
              </div>

              <div className="product__left-item">
                <img src="/assets/img/product/3.png" alt="3" className="product__left-item-img" />
              </div>

              <div className="product__left-item">
                <img src="/assets/img/product/4.png" alt="4" className="product__left-item-img" />
              </div>

              <div className="product__left-item">
                <img src="/assets/img/product/5.png" alt="5" className="product__left-item-img" />
              </div>

              <div className="product__left-item">
                <img src="/assets/img/product/6.png" alt="6" className="product__left-item-img" />
              </div>
            </div>

            <div className="product__right">
              <div className="product__categories">For Men / Jordan / Delta 3 SP</div>
              <h2 className="product__title">Jordan Delta 3 SP</h2>
              <div className="product__price">$110</div>
              <ul className="product__sizes">
                <li className="product__size-item">6</li>
                <li className="product__size-item">6.5</li>
                <li className="product__size-item selected">7</li>
                <li className="product__size-item">7.5</li>
                <li className="product__size-item">8</li>
                <li className="product__size-item">8.5</li>
                <li className="product__size-item">9</li>
                <li className="product__size-item">9.5</li>
                <li className="product__size-item">10</li>
                <li className="product__size-item">10.5</li>
                <li className="product__size-item">11</li>
                <li className="product__size-item">11.5</li>
              </ul>
              <p className="product__text">Aliquam ipsum tristique gravida amet a, pellentesque tempor euismod. Maecenas
                id
                consequat, tortor enim, in consectetur amet, felis fames. Fringilla quis at sed tristique.are sed.</p>

              <div className="product__actions">
                <button className="btn btn--grey product__add-to-cart-btn">Add to cart</button>
                <button className="btn btn--transparent-red product__add-to-wishlist-btn">Add to wishlist</button>
              </div>

              <div className="product__dropdown">
                <div className="product__dropdown-head">
                  <span className="product__dropdown-head-title">Description</span>
                  <svg className="product__dropdown-head-icon" width="12" height="7" viewBox="0 0 12 7" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L6 6L11 1" stroke="#EF3636" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="product__dropdown-content">
                  <p className="product__text">This is body text. Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <p className="product__text">Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                    a
                    galley of type and scrambled it to make a type specimen book.</p>

                  <ul className="product__text-list">
                    <li className="product__text-list-item">It has survived not only five centuries.</li>
                    <li className="product__text-list-item">But also the leap into electronic typesetting, remaining
                      esse`ntially
                      unchanged. It was popularised in the 1960s With the release of Letraset sheets containing Lorem
                      Ipsum
                      passages.
                    </li>
                    <li className="product__text-list-item">And more recently with desktop publishing software like
                      Aldus
                      PageMaker including versions of Lorem Ipsum.
                    </li>
                  </ul>

                  <p className="product__text">Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s. </p>

                </div>
              </div>

              <div className="product__dropdown">
                <div className="product__dropdown-head">
                  <span className="product__dropdown-head-title">Reviews</span>
                  <svg className="product__dropdown-head-icon" width="12" height="7" viewBox="0 0 12 7" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L6 6L11 1" stroke="#EF3636" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="product__dropdown-content">
                  <div className="product__article-quote">
                    <p className="product__article-author">-Andrew Stockton</p>
                    <blockquote className="product__article-text">
                      “Malesuada penatibus pharetra ullamcorper a dictumst. Bibendum consequat blandit viverra integer
                      vel. Ac
                      dui odio ultricies posuere. Donec proin varius mus in eget et urna, ultrices faucibus. Volutpat
                      laoreet
                      pellentesque volutpat at gravida et, at. Sed et, suspendisse tortor, porttitor enim, penatibus
                      sit.”
                    </blockquote>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>

      <section className="our-products">
        <div className="container">
          <div className="our-products__inner">
            <h2 className="our-products__heading">
              other products
            </h2>

            <main className="our-products__items">
              <div className="our-products__product-item">
                <img src="/assets/img/our-products/1.png" alt="1" className="our-products__img" />
                <div className="our-products__description">
                  <h3 className="our-products__brand">Jordan</h3>
                  <h4 className="our-products__name">Air jordan 1 mid</h4>
                  <span className="our-products__price">$120</span>
                </div>
                <div className="our-products__actions">
                  <button className="our-products__btn btn btn--black">View product</button>
                </div>
              </div>

              <div className="our-products__product-item">
                <img src="/assets/img/our-products/2.png" alt="2" className="our-products__img" />
                <div className="our-products__description">
                  <h3 className="our-products__brand">Nike</h3>
                  <h4 className="our-products__name">Air force 1 ‘07</h4>
                  <span className="our-products__price">$125</span>
                </div>
                <div className="our-products__actions">
                  <button className="our-products__btn btn btn--black">View product</button>
                </div>
              </div>

              <div className="our-products__product-item">
                <img src="/assets/img/our-products/3.png" alt="3" className="our-products__img" />
                <div className="our-products__description">
                  <h3 className="our-products__brand">Nike</h3>
                  <h4 className="our-products__name">air max 270</h4>
                  <span className="our-products__price">$165</span>
                </div>
                <div className="our-products__actions">
                  <button className="our-products__btn btn btn--black">View product</button>
                </div>
              </div>

              <div className="our-products__product-item">
                <img src="/assets/img/our-products/4.png" alt="4" className="our-products__img" />
                <div className="our-products__description">
                  <h3 className="our-products__brand">Nike</h3>
                  <h4 className="our-products__name">Air force 1 ‘07</h4>
                  <span className="our-products__price">$114</span>
                </div>
                <div className="our-products__actions">
                  <button className="our-products__btn btn btn--black">View product</button>
                </div>
              </div>
            </main>

            <div className="our-products__show-more-wrapper">
              <button className="our-products__show-more btn btn--grey">Show more</button>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

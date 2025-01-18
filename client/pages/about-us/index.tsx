import { MainSecondary } from "@/components/shared/MainSecondary/MainSecondary";

export default function AboutUsPage() {
  return (
    <>
      <MainSecondary
        image={"/assets/img/main-secondary/about_us.png"}
        imageAlternativeText={"About us picture"}
        subtitle={"Home / About us"}
        title={"About Us"} />

      <section className="we-are-evdy">
        <div className="container">
          <div className="we-are-evdy__inner">
            <div className="we-are-evdy__left">
              <h2 className="we-are-evdy__heading">we are evdy</h2>
              <p className="we-are-evdy__text">
                Aliquet a scelerisque enim, arcu rutrum adipiscing fringilla risus. Eget fringilla curabitur sed
                vulputate
                pretium, habitasse amet. Elementum odio sagittis, interdum elit ipsum. Volutpat erat ac eu aliquam
                turpis.
                Ullamcorper consequat donec euismod mi pulvinar.
              </p>
            </div>

            <div className="we-are-evdy__right">
              <div className="we-are-evdy__placeholder">
                <img src="/assets/img/we-are-evdy/1.png" alt="We are evdy image" className="we-are-evdy__img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cards-white">
        <div className="container">
          <div className="cards-white__inner">

            <div className="cards-white__card">
              <img src="/assets/img/cards-white/1.png" alt="1" className="cards-white__icon" />
              <div className="cards-white__content">
                <h3 className="cards-white__heading">Shops Worldwide</h3>
                <p className="cards-white__text">Orci fusce libero duis nunc nam aliquet suspendisse enim cras.
                  Imperdiet turpis
                  ut
                  nulla sapien.</p>
              </div>
            </div>

            <div className="cards-white__card">
              <img src="/assets/img/cards-white/2.png" alt="2" className="cards-white__icon" />
              <div className="cards-white__content">
                <h3 className="cards-white__heading">24/7 support</h3>
                <p className="cards-white__text">Orci fusce libero duis nunc nam aliquet suspendisse enim cras.
                  Imperdiet turpis
                  ut
                  nulla sapien.</p>
              </div>
            </div>

            <div className="cards-white__card">
              <img src="/assets/img/cards-white/3.png" alt="3" className="cards-white__icon" />
              <div className="cards-white__content">
                <h3 className="cards-white__heading">big saving shop</h3>
                <p className="cards-white__text">Orci fusce libero duis nunc nam aliquet suspendisse enim cras.
                  Imperdiet turpis
                  ut
                  nulla sapien.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="shop-by-categories shop-by-categories--light-grey">
        <div className="container">
          <div className="shop-by-categories__inner shop-by-categories__inner--pb-5">
            <h2 className="shop-by-categories__heading">
              shop by categories
            </h2>
            <h3 className="shop-by-categories__subtitle">Pick a category you need</h3>

            <div className="shop-by-categories__cards">
              <div className="shop-by-categories__card">
                <img src="/assets/img/shop-by-categories/1.png" alt="1" className="shop-by-categories__img" />
                <p className="shop-by-categories__text">
                  <span className="shop-by-categories__type">women</span>
                  <span className="shop-by-categories__quantity">115 products</span>
                </p>
              </div>

              <div className="shop-by-categories__card">
                <img src="/assets/img/shop-by-categories/2.png" alt="2" className="shop-by-categories__img" />
                <p className="shop-by-categories__text">
                  <span className="shop-by-categories__type">men</span>
                  <span className="shop-by-categories__quantity">138 products</span>
                </p>
              </div>

              <div className="shop-by-categories__card">
                <img src="/assets/img/shop-by-categories/3.png" alt="3" className="shop-by-categories__img" />
                <p className="shop-by-categories__text">
                  <span className="shop-by-categories__type">kids</span>
                  <span className="shop-by-categories__quantity">97 products</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-team">
        <div className="container">
          <div className="our-team__inner">
            <div className="our-team__texts">
              <h2 className="our-team__heading">Our team</h2>
              <p className="our-team__text">Professionals that work with us</p>
            </div>

            <div className="our-team__cards">

              <div className="our-team__card">
                <img src="/assets/img/our-team/1.png" alt="1" className="our-team__img" />
                <div className="our-team__card-content">
                  <span className="our-team__position">Founder</span>
                  <span className="our-team__name">James Jones</span>
                  <div className="our-team__icons">
                    <a href="#" className="our-team__link">
                      <img src="/assets/img/our-team/icons/icon_1.png" alt="Icon 1" className="our-team__icon-img" />
                    </a>

                    <a href="#" className="our-team__link">
                      <img src="/assets/img/our-team/icons/icon_2.png" alt="Icon 2" className="our-team__icon-img" />
                    </a>

                    <a href="#" className="our-team__link">
                      <img src="/assets/img/our-team/icons/icon_3.png" alt="Icon 3" className="our-team__icon-img" />
                    </a>

                    <a href="#" className="our-team__link">
                      <img src="/assets/img/our-team/icons/icon_4.png" alt="Icon 4" className="our-team__icon-img" />
                    </a>
                  </div>

                  <p className="our-team__text">Ut donec suscipit nunc volutpat faucibus. </p>

                </div>
              </div>

              <div className="our-team__card">
                <img src="/assets/img/our-team/2.png" alt="2" className="our-team__img" />
                <div className="our-team__card-content">
                  <span className="our-team__position">CEO</span>
                  <span className="our-team__name">Clara Peters</span>
                  <div className="our-team__icons">
                    <a href="#" className="our-team__link">
                      <img src="/assets/img/our-team/icons/icon_1.png" alt="Icon 1" className="our-team__icon-img" />
                    </a>

                    <a href="#" className="our-team__link">
                      <img src="/assets/img/our-team/icons/icon_2.png" alt="Icon 2" className="our-team__icon-img" />
                    </a>

                    <a href="#" className="our-team__link">
                      <img src="/assets/img/our-team/icons/icon_3.png" alt="Icon 3" className="our-team__icon-img" />
                    </a>

                    <a href="#" className="our-team__link">
                      <img src="/assets/img/our-team/icons/icon_4.png" alt="Icon 4" className="our-team__icon-img" />
                    </a>
                  </div>
                  <p className="our-team__text">Ut donec suscipit nunc volutpat faucibus. </p>
                </div>
              </div>

              <div className="our-team__card">
                <img src="/assets/img/our-team/3.png" alt="3" className="our-team__img" />
                <div className="our-team__card-content">
                  <span className="our-team__position">Designer</span>
                  <span className="our-team__name">Dick Stewart</span>
                  <div className="our-team__icons">
                    <a href="#" className="our-team__link">
                      <img src="/assets/img/our-team/icons/icon_1.png" alt="Icon 1" className="our-team__icon-img" />
                    </a>

                    <a href="#" className="our-team__link">
                      <img src="/assets/img/our-team/icons/icon_2.png" alt="Icon 2" className="our-team__icon-img" />
                    </a>

                    <a href="#" className="our-team__link">
                      <img src="/assets/img/our-team/icons/icon_3.png" alt="Icon 3" className="our-team__icon-img" />
                    </a>

                    <a href="#" className="our-team__link">
                      <img src="/assets/img/our-team/icons/icon_4.png" alt="Icon 4" className="our-team__icon-img" />
                    </a>
                  </div>

                  <p className="our-team__text">Ut donec suscipit nunc volutpat faucibus. </p>

                </div>
              </div>

              <div className="our-team__card">
                <img src="/assets/img/our-team/4.png" alt="4" className="our-team__img" />
                <div className="our-team__card-content">
                  <span className="our-team__position">Developer</span>
                  <span className="our-team__name">Melissa Clarkson</span>
                  <div className="our-team__icons">
                    <a href="#" className="our-team__link">
                      <img src="/assets/img/our-team/icons/icon_1.png" alt="Icon 1" className="our-team__icon-img" />
                    </a>

                    <a href="#" className="our-team__link">
                      <img src="/assets/img/our-team/icons/icon_2.png" alt="Icon 2" className="our-team__icon-img" />
                    </a>

                    <a href="#" className="our-team__link">
                      <img src="/assets/img/our-team/icons/icon_3.png" alt="Icon 3" className="our-team__icon-img" />
                    </a>

                    <a href="#" className="our-team__link">
                      <img src="/assets/img/our-team/icons/icon_4.png" alt="Icon 4" className="our-team__icon-img" />
                    </a>
                  </div>

                  <p className="our-team__text">Ut donec suscipit nunc volutpat faucibus. </p>

                </div>
              </div>

            </div>

            <div className="our-team__actions">
              <button className="our-team__btn btn btn--grey">Show More</button>
            </div>

          </div>
        </div>
      </section>

      <section className="what-people-say">
        <div className="container">
          <div className="what-people-say__inner">
            <h3 className="what-people-say__heading">what people say about us</h3>

            <div className="what-people-say__slider">
              <button className="what-people-say__left-arrow">
                <img src="/assets/img/what-people-say/left.png" alt="Left arrow" />
              </button>

              <div className="what-people-say__slider-content">
                <p className="what-people-say__text">
                  “Eu dolor at venenatis aliquam velit et in consequat. Nam dui pulvinar consequat eleifend malesuada.
                  Eu
                  dolor at venenatis aliquam velit et in consequat. Nam dui pulvinar consequat eleifend malesuada. Eu
                  dolor at
                  venenatis aliquam velit et in consequat. Nam dui pulvinar consequat eleifend malesuada.”
                </p>
                <p className="what-people-say__author">
                  -Andrew Charlston
                </p>
              </div>

              <button className="what-people-say__right-arrow">
                <img src="/assets/img/what-people-say/right.png" alt="Right arrow" />
              </button>
            </div>

            <div className="what-people-say__controls">
              <button className="what-people-say__control btn--slider active">&nbsp;</button>
              <button className="what-people-say__control btn--slider">&nbsp;</button>
              <button className="what-people-say__control btn--slider">&nbsp;</button>
              <button className="what-people-say__control btn--slider">&nbsp;</button>
            </div>

          </div>
        </div>
      </section>

      <section className="partners">
        <div className="container">
          <div className="partners__inner">
            <div className="partners__item">
              <img src="/assets/img/partners/1.png" alt="Partner 1" className="partners__img" />
            </div>

            <div className="partners__item">
              <img src="/assets/img/partners/2.png" alt="Partner 2" className="partners__img" />
            </div>

            <div className="partners__item">
              <img src="/assets/img/partners/3.png" alt="Partner 3" className="partners__img" />
            </div>

            <div className="partners__item">
              <img src="/assets/img/partners/4.png" alt="Partner 4" className="partners__img" />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
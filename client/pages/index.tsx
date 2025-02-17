import { useEffect } from "react";

import { Newsletter } from "@/components/shared/Newsletter/Newsletter";
import { MainSlider } from "@/components/slider/MainSlider/MainSlider";
import { Product } from "@/components/shared/Product/Product";
import { fetchAllProducts } from "@/store/products/products.actions";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { selectProductItems } from "@/store/products/products.selectors";

const LIMIT_FOR_PRODUCTS_MAPPED = 8;

export default function Home() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProductItems);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  return (
    <>
      <section className="main">
        <div className="container">
          <div className="main__inner">
            <MainSlider />
          </div>
        </div>
      </section>

      <section className="shop-by-categories">
        <div className="container">
          <div className="shop-by-categories__inner">
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

      <section className="our-products">
        <div className="container">
          <div className="our-products__inner">
            <h2 className="our-products__heading">
              our products
            </h2>

            <main className="our-products__items">
              {
                products.slice(0, LIMIT_FOR_PRODUCTS_MAPPED).map(item => {
                  return <Product key={item.id} image={item.image} imageAlternativeText={item.name} brand={item.brand}
                                  name={item.name} price={item.price} id={item.id} />;
                })
              }
            </main>

            <div className="our-products__show-more-wrapper">
              <button className="our-products__show-more btn btn--grey">Show more</button>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <div className="about__inner">
            <div className="about__left">
              <img src="/assets/img/about/1.png" alt="1" className="about__img" />
            </div>
            <div className="about__right">
              <h3 className="about__heading">About Evdy</h3>
              <p className="about__text">Ut donec suscipit nunc volutpat faucibus. Ut penatibus etiam diam facilisi at
                nibh nulla
                auctor lorem. Accumsan vulputate euismod massa sit egestas. Aliquet a scelerisque enim, arcu rutrum
                adipiscing
                fringilla risus. Eget fringilla curabitur sed vulputate pretium, habitasse amet. Elementum odio
                sagittis,
                interdum elit ipsum. Volutpat erat ac eu aliquam turpis.</p>
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

      <section className="latest-news">
        <div className="container">
          <div className="latest-news__inner">

            <div className="latest-news__top-text">
              <h3 className="latest-news__heading">
                latest news
              </h3>
              <p className="latest-news__text">
                Nunc rhoncus auctor risus tempor lacus urna, id laoreet sed. Euismod nisl pellentesque risus cursus
                fringilla
                tincidunt volutpat, non.
              </p>
            </div>

            <div className="latest-news__items">

              <div className="latest-news__item">
                <div className="latest-news__picture">
                  <img src="/assets/img/latest-news/1.png" alt="1" className="latest-news__img" />
                </div>

                <div className="latest-news__item-inner">
                  <span className="latest-news__date">Jan 12, 2021 </span>
                  <h4 className="latest-news__title">Quis egestas consectetur </h4>
                  <button className="latest-news__btn btn btn--white btn--padding-0">Read more
                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5H15M8.875 0.5L15 5L8.875 9.5" stroke="black" strokeLinecap="round"
                            strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="latest-news__item">
                <div className="latest-news__picture">
                  <img src="/assets/img/latest-news/2.png" alt="2" className="latest-news__img" />
                </div>

                <div className="latest-news__item-inner">
                  <span className="latest-news__date">Jan 12, 2021 </span>
                  <h4 className="latest-news__title">Auctor etiam elit</h4>
                  <button className="latest-news__btn btn btn--white btn--padding-0">Read more
                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5H15M8.875 0.5L15 5L8.875 9.5" stroke="black" strokeLinecap="round"
                            strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="latest-news__item">
                <div className="latest-news__picture">
                  <img src="/assets/img/latest-news/3.png" alt="3" className="latest-news__img" />
                </div>

                <div className="latest-news__item-inner">
                  <span className="latest-news__date">Jan 12, 2021 </span>
                  <h4 className="latest-news__title">Eu morbi suspendisse</h4>
                  <button className="latest-news__btn btn btn--white btn--padding-0">Read more
                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5H15M8.875 0.5L15 5L8.875 9.5" stroke="black" strokeLinecap="round"
                            strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="latest-news__slider">
              <button className="latest-news__slider-btn btn--slider active">&nbsp;</button>
              <button className="latest-news__slider-btn btn--slider">&nbsp;</button>
              <button className="latest-news__slider-btn btn--slider">&nbsp;</button>
              <button className="latest-news__slider-btn btn--slider">&nbsp;</button>
            </div>

          </div>
        </div>
      </section>

      <section className="instagram">
        <div className="container">
          <div className="instagram__inner">
            <div className="instagram__grid">
              <div className="instagram__item">
                <img src="/assets/img/instagram/1.png" alt="1 insta" className="instagram__img" />
              </div>
              <div className="instagram__item">
                <img src="/assets/img/instagram/2.png" alt="2 insta" className="instagram__img" />
              </div>
              <div className="instagram__item">
                <img src="/assets/img/instagram/3.png" alt="3 insta" className="instagram__img" />
              </div>
              <div className="instagram__item">
                <img src="/assets/img/instagram/4.png" alt="4 insta" className="instagram__img" />
              </div>
              <div className="instagram__item">
                <img src="/assets/img/instagram/5.png" alt="5 insta" className="instagram__img" />
              </div>
              <div className="instagram__item">
                <img src="/assets/img/instagram/6.png" alt="6 insta" className="instagram__img" />
              </div>
              <div className="instagram__item">
                <img src="/assets/img/instagram/7.png" alt="7 insta" className="instagram__img" />
              </div>
              <div className="instagram__item">
                <img src="/assets/img/instagram/8.png" alt="8 insta" className="instagram__img" />
              </div>
              <div className="instagram__item">
                <img src="/assets/img/instagram/9.png" alt="9 insta" className="instagram__img" />
              </div>
              <div className="instagram__item">
                <img src="/assets/img/instagram/10.png" alt="10 insta" className="instagram__img" />
              </div>
              <div className="instagram__item">
                <img src="/assets/img/instagram/11.png" alt="11 insta" className="instagram__img" />
              </div>
              <div className="instagram__item">
                <img src="/assets/img/instagram/12.png" alt="12 insta" className="instagram__img" />
              </div>
              <div className="instagram__item">
                <img src="/assets/img/instagram/13.png" alt="13 insta" className="instagram__img" />
              </div>
              <div className="instagram__item">
                <img src="/assets/img/instagram/14.png" alt="14 insta" className="instagram__img" />
              </div>
            </div>

            <button className="instagram__btn btn btn--white">@evdycommerce
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Group 59">
                  <path id="Vector"
                        d="M8.49339 4.12085C7.33568 4.12085 6.22538 4.58004 5.40675 5.39739C4.58812 6.21475 4.12822 7.32333 4.12822 8.47924C4.12822 9.63516 4.58812 10.7437 5.40675 11.5611C6.22538 12.3785 7.33568 12.8376 8.49339 12.8376C9.65111 12.8376 10.7614 12.3785 11.58 11.5611C12.3987 10.7437 12.8586 9.63516 12.8586 8.47924C12.8586 7.32333 12.3987 6.21475 11.58 5.39739C10.7614 4.58004 9.65111 4.12085 8.49339 4.12085V4.12085ZM8.49339 11.3097C7.74128 11.3097 7.01997 11.0114 6.48815 10.4804C5.95632 9.94944 5.65754 9.22925 5.65754 8.4783C5.65754 7.72735 5.95632 7.00717 6.48815 6.47617C7.01997 5.94517 7.74128 5.64685 8.49339 5.64685C9.24551 5.64685 9.96682 5.94517 10.4986 6.47617C11.0305 7.00717 11.3292 7.72735 11.3292 8.4783C11.3292 9.22925 11.0305 9.94944 10.4986 10.4804C9.96682 11.0114 9.24551 11.3097 8.49339 11.3097V11.3097Z"
                        fill="black" />
                  <path id="Vector_2"
                        d="M13.0318 4.97674C13.5941 4.97674 14.0499 4.52182 14.0499 3.96066C14.0499 3.39949 13.5941 2.94458 13.0318 2.94458C12.4695 2.94458 12.0137 3.39949 12.0137 3.96066C12.0137 4.52182 12.4695 4.97674 13.0318 4.97674Z"
                        fill="black" />
                  <path id="Vector_3"
                        d="M16.5497 2.92759C16.3312 2.36411 15.9972 1.8524 15.5692 1.42521C15.1412 0.998015 14.6285 0.66476 14.0641 0.446773C13.4036 0.199216 12.7058 0.0653581 12.0004 0.0508981C11.0913 0.0113106 10.8034 0 8.49811 0C6.1928 0 5.89732 -9.48053e-08 4.99578 0.0508981C4.29096 0.0646188 3.59367 0.198504 2.93403 0.446773C2.36944 0.664506 1.85667 0.997671 1.42863 1.42489C1.00058 1.85212 0.666697 2.36396 0.448412 2.92759C0.200421 3.58702 0.0666619 4.28378 0.0528654 4.98802C0.0122723 5.89477 0 6.18225 0 8.48492C0 10.7866 -7.03353e-09 11.0798 0.0528654 11.9818C0.0670258 12.6868 0.200133 13.3825 0.448412 14.0432C0.66731 14.6066 1.00151 15.1183 1.42967 15.5454C1.85782 15.9726 2.37051 16.3059 2.93497 16.524C3.59337 16.7815 4.29094 16.925 4.99767 16.9482C5.90676 16.9877 6.19469 17 8.5 17C10.8053 17 11.1008 17 12.0023 16.9482C12.7076 16.9338 13.4054 16.8003 14.066 16.5532C14.6303 16.3347 15.1427 16.0012 15.5707 15.5739C15.9987 15.1466 16.3328 14.6349 16.5516 14.0715C16.7999 13.4117 16.933 12.7161 16.9471 12.011C16.9877 11.1043 17 10.8168 17 8.51414C17 6.21147 17 5.91927 16.9471 5.01724C16.9361 4.30304 16.8017 3.5961 16.5497 2.92759V2.92759ZM15.3999 11.9121C15.3938 12.4553 15.2945 12.9934 15.1063 13.5031C14.9645 13.8696 14.7475 14.2025 14.4691 14.4802C14.1908 14.758 13.8573 14.9745 13.4901 15.1158C12.9853 15.3029 12.452 15.402 11.9136 15.409C11.0168 15.4504 10.7638 15.4608 8.46413 15.4608C6.1626 15.4608 5.92753 15.4608 5.01372 15.409C4.47555 15.4024 3.94256 15.3032 3.43814 15.1158C3.06967 14.9754 2.73484 14.7592 2.4553 14.4814C2.17577 14.2036 1.95775 13.8703 1.81536 13.5031C1.62981 12.9989 1.53056 12.4671 1.52177 11.93C1.48117 11.0345 1.47173 10.7819 1.47173 8.48586C1.47173 6.18884 1.47173 5.95415 1.52177 5.04081C1.52787 4.49791 1.62717 3.96009 1.81536 3.45071C2.10329 2.70703 2.6933 2.1217 3.43814 1.83705C3.9428 1.65055 4.47565 1.55142 5.01372 1.54391C5.91148 1.50338 6.16354 1.49207 8.46413 1.49207C10.7647 1.49207 11.0007 1.49207 11.9136 1.54391C12.4521 1.55038 12.9854 1.64955 13.4901 1.83705C13.8573 1.97869 14.1907 2.19541 14.469 2.4733C14.7474 2.7512 14.9644 3.08412 15.1063 3.45071C15.2918 3.95493 15.3911 4.48673 15.3999 5.02384C15.4405 5.92022 15.4509 6.17188 15.4509 8.4689C15.4509 10.765 15.4509 11.0119 15.4103 11.913H15.3999V11.9121Z"
                        fill="black" />
                </g>
              </svg>
            </button>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}

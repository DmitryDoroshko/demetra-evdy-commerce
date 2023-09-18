import products from "@/data/shop-items.json";
import { Product } from "@/components/shared/Product/Product";

export function Shop() {
  return (
    <main className="shop">
      <section className="our-products">
        <div className="container">
          <div className="shop__actions">
            <div className="shop__actions-left">

              <div className="shop__sort-by-dropdown">
                <div className="shop__sort-by-head">
                  <svg className="shop__sort-by-icon" width="18" height="16" viewBox="0 0 18 16" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M17 3H6M4 3H1M17 13H6M4 13H1M12 8H1M17 8H14M5 1C5.26522 1 5.51957 1.10536 5.70711 1.29289C5.89464 1.48043 6 1.73478 6 2V4C6 4.26522 5.89464 4.51957 5.70711 4.70711C5.51957 4.89464 5.26522 5 5 5C4.73478 5 4.48043 4.89464 4.29289 4.70711C4.10536 4.51957 4 4.26522 4 4V2C4 1.73478 4.10536 1.48043 4.29289 1.29289C4.48043 1.10536 4.73478 1 5 1V1ZM5 11C5.26522 11 5.51957 11.1054 5.70711 11.2929C5.89464 11.4804 6 11.7348 6 12V14C6 14.2652 5.89464 14.5196 5.70711 14.7071C5.51957 14.8946 5.26522 15 5 15C4.73478 15 4.48043 14.8946 4.29289 14.7071C4.10536 14.5196 4 14.2652 4 14V12C4 11.7348 4.10536 11.4804 4.29289 11.2929C4.48043 11.1054 4.73478 11 5 11ZM13 6C13.2652 6 13.5196 6.10536 13.7071 6.29289C13.8946 6.48043 14 6.73478 14 7V9C14 9.26522 13.8946 9.51957 13.7071 9.70711C13.5196 9.89464 13.2652 10 13 10C12.7348 10 12.4804 9.89464 12.2929 9.70711C12.1054 9.51957 12 9.26522 12 9V7C12 6.73478 12.1054 6.48043 12.2929 6.29289C12.4804 6.10536 12.7348 6 13 6V6Z"
                      stroke="#989898" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="shop__sort-by-text">Sort by</span>
                  <svg className="shop__sort-by-arrow-down" width="6" height="4" viewBox="0 0 6 4" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L3 3L5 1" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="shop__sort-by-content">
                  <button className="shop__sort-by-item">Name</button>
                  <button className="shop__sort-by-item">Price</button>
                </div>
              </div>

              <div className="shop__showing-items">Showing 1-16 of 437</div>

            </div>
            <div className="shop__actions-right">
              <div className="shop__storing-dropdown">
                <div className="shop__storing-head">
                  <span className="shop__storing-name">Default Storing</span>
                  <svg className="shop__storing-arrow" width="6" height="4" viewBox="0 0 6 4" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L3 3L5 1" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="shop__storing-content-items">
                  <button className="shop__storing-content-item">Placeholder 1</button>
                  <button className="shop__storing-content-item">Placeholder 2</button>
                  <button className="shop__storing-content-item">Placeholder 3</button>
                </div>
              </div>
            </div>
          </div>

          <div className="our-products__inner">

            <main className="our-products__items">
              {
                products.items.map(item => {
                  return <Product key={item.id} image={item.image} imageAlternativeText={item.name} brand={item.brand}
                                  name={item.name} price={item.price} id={item.id} />;
                })
              }
            </main>
            <div className="pagination__pagination">
              <button className="pagination__pagination-btn pagination__pagination-btn--left">
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8" viewBox="0 0 6 8" fill="none">
                  <path d="M5 1L1 4L5 7" stroke="#989898" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <button className="pagination__pagination-btn active">1</button>
              <button className="pagination__pagination-btn">2</button>
              <button className="pagination__pagination-btn">3</button>
              <button className="pagination__pagination-btn">4</button>
              <button className="pagination__pagination-btn pagination__pagination-btn--dots">...</button>
              <button className="pagination__pagination-btn">21</button>

              <button className="pagination__pagination-btn pagination__pagination-btn--right">
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8" viewBox="0 0 6 8" fill="none">
                  <path d="M1 7L5 4L1 1" stroke="#EF3636" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

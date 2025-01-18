import { MainSecondary } from "@/components/shared/MainSecondary/MainSecondary";

export default function Wishlist() {
  return (
    <>
      <MainSecondary
        image={"/assets/img/main-secondary/wishlist.png"}
        imageAlternativeText={"Wishlist page picture"}
        subtitle={"Home / Wishlist"}
        title={"Wishlist"} />

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
              <tr className="wishlist-full__item">
                <td>
                  <div className="wishlist-full__picture">
                    <img src="/assets/img/wishlist/1.png" alt="1" className="wishlist-full__img" />
                  </div>
                  <span className="wishlist-full__shoe-name">Jordan Delta 3 SP</span>
                </td>
                <td>
                  <span className="wishlist-full__price">$110</span>
                </td>
                <td>
                  <span className="wishlist-full__status wishlist-full__status--in-stock">in stock</span>
                </td>
                <td>
                  <button className="btn btn--grey wishlist-full__btn">Add to the cart</button>
                </td>
              </tr>
              <tr className="wishlist-full__item">
                <td>
                  <div className="wishlist-full__picture">
                    <img src="/assets/img/wishlist/2.png" alt="2" className="wishlist-full__img" />
                  </div>
                  <span className="wishlist-full__shoe-name">nike air force 1 ‘07</span>
                </td>
                <td>
                  <span className="wishlist-full__price">$114</span>
                </td>
                <td>
                  <span className="wishlist-full__status wishlist-full__status--in-stock">in stock</span>
                </td>
                <td>
                  <button className="btn btn--grey wishlist-full__btn">Add to the cart</button>
                </td>
              </tr>
              <tr className="wishlist-full__item">
                <td>
                  <div className="wishlist-full__picture">
                    <img src="/assets/img/wishlist/3.png" alt="3" className="wishlist-full__img" />
                  </div>
                  <span className="wishlist-full__shoe-name">Jordan Delta 3 SP</span>
                </td>
                <td>
                  <span className="wishlist-full__price wishlist-full__price--out-ouf-stock">$189</span>
                </td>
                <td>
                  <span className="wishlist-full__status wishlist-full__status--out-of-stock">out of stock</span>
                </td>
                <td>
                  <button className="btn btn--grey wishlist-full__btn">Add to the cart</button>
                </td>
              </tr>
            </table>

            <div className="wishlist-full__actions">
              <button className="btn btn--grey wishlist-full__back-to-shop-btn">Back to shop</button>
            </div>

          </div>
        </div>
      </main>

      <main className="wishlist-empty">
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
              <button className="btn btn&#45;&#45;grey wishlist-empty__go-to-shop-btn">Go to shop</button>
            </div>
          </div>
        </div>
      </main>

    </>
  );
}
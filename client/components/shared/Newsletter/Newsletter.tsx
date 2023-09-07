export function Newsletter() {
  return (
      <section className="newsletter">
        <div className="container">
          <div className="newsletter__inner">
            <div className="newsletter__left">
              <h5 className="newsletter__heading">our newsletter</h5>
              <p className="newsletter__text">Subscribe to get more useful information about us and to get you <span
                  className="newsletter__text-highlighted">15% discount</span> off your next purchase </p>
            </div>

            <div className="newsletter__right">
              <form className="newsletter__form form">
                <input type="email" placeholder="Enter your e-mail" className="newsletter__input form__input"/>
                <button className="newsletter__btn btn btn--red form__submit-btn" type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>
  );
}

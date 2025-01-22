import { MainSecondary } from "@/components/shared/MainSecondary/MainSecondary";

export default function ContactUsPage() {
  return (
    <>
      <MainSecondary
        image={"/assets/img/main-secondary/contact_us.png"}
        imageAlternativeText={"Shop picture"}
        subtitle={"Home / Contact Us"}
        title={"Contact Us"}
      />

      <main className="contact-us">
        <div className="container">
          <div className="contact-us__inner">
            <div className="contact-us__map">
              <div className="contact-us__left">
                <div className="contact-us__location contact-us__location--1">
                  <h2 className="contact-us__heading">Evdy Commerce #1</h2>

                  <div className="contact-us__info">
                    <img src="/assets/img/contact-us/location.png" alt="Location image" className="contact-us__img" />
                    <span className="contact-us__info-text">2715 Ash Dr. San Jose, South Dakota 83475</span>
                  </div>

                  <div className="contact-us__info">
                    <img src="/assets/img/contact-us/phone.png" alt="Phone image" className="contact-us__img" />
                    <span className="contact-us__info-text">(808) 555-0111</span>
                  </div>

                  <div className="contact-us__info">
                    <img src="/assets/img/contact-us/mail.png" alt="Mail image" className="contact-us__img" />
                    <span className="contact-us__info-text">evdy.contacts@example.com</span>
                  </div>

                </div>

                <div className="contact-us__location contact-us__location--2">
                  <h2 className="contact-us__heading">Evdy Commerce #2</h2>

                  <div className="contact-us__info">
                    <img src="/assets/img/contact-us/location.png" alt="Location image" className="contact-us__img" />
                    <span className="contact-us__info-text">445 MLK Street, South Dakota 55631</span>
                  </div>

                  <div className="contact-us__info">
                    <img src="/assets/img/contact-us/phone.png" alt="Phone image" className="contact-us__img" />
                    <span className="contact-us__info-text">(808) 333-0888</span>
                  </div>

                  <div className="contact-us__info">
                    <img src="/assets/img/contact-us/mail.png" alt="Mail image" className="contact-us__img" />
                    <span className="contact-us__info-text">evdy.contacts@example.com</span>
                  </div>

                </div>

                <ul className="contact-us__icons">
                  <li className="contact-us__list-item">
                    <a href="#" className="contact-us__link">
                      <img src="/assets/img/contact-us/social.png" alt="Social" className="contact-us__link-img" />
                    </a>
                  </li>
                </ul>

              </div>

              <div className="contact-us__right">
                <img src="/assets/img/contact-us/map.png" alt="Map image" className="contact-us__map-img" />
              </div>

            </div>
          </div>
        </div>
      </main>

      <section className="get-in-touch">
        <div className="container">
          <div className="get-in-touch__inner">
            <div className="get-in-touch__left">
              <h3 className="get-in-touch__title">Get in touch</h3>
              <p className="get-in-touch__text">Aliquet a scelerisque enim, arcu rutrum adipiscing fringilla risus. Eget
                fringilla
                curabitur sed vulputate pretium, habitasse amet. Elementum odio sagittis, interdum elit ipsum. Volutpat
                erat
                ac eu aliquam turpis. Ullamcorper consequat donec euismod mi pulvinar.</p>
            </div>

            <div className="get-in-touch__right">
              <form className="get-in-touch__questions-form questions-form">
                <input type="email" placeholder="Enter Your E-mail"
                       className="get-in-touch__questions-form-input questions-form__input-white" />
                <input type="text" placeholder="Enter Name"
                       className="get-in-touch__questions-form-input questions-form__input-white" />
                <textarea className="get-in-touch__questions-textarea questions-form__textarea-white"
                          placeholder="Your question..."></textarea>

                <div className="get-in-touch__question-form-actions questions-form__actions">
                  <button type="submit"
                          className="get-in-touch__questions-form-btn questions-form__btn btn btn--grey">Submit
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
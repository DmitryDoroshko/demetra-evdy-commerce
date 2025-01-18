import { MainSecondary } from "@/components/shared/MainSecondary/MainSecondary";
import { Newsletter } from "@/components/shared/Newsletter/Newsletter";

export default function FaqPage() {
  return (
    <>
      <MainSecondary image={"/assets/img/main-secondary/faq.png"} imageAlternativeText={"Frequently asked questions"}
                     subtitle={"Home / FAQ"} title={"F.A.Q."} />
      <main className="faq-main">
        <div className="container">
          <div className="faq-main__inner">

            <div className="faq-main__form-wrapper">
              <form className="faq-main__form form">
                <input type="text" placeholder="What can we help you to find?"
                       className="faq-main__input form__input" />
                <button className="faq-main__btn btn btn--red form__submit-btn" type="submit">Search</button>
              </form>
            </div>

            <div className="faq-main__dropdowns faq-main__dropdowns--first">
              <h2 className="faq-main__title">Evdy Commerce 2025</h2>
              <ul className="faq-main__dropdowns-contents">

                <li className="faq-main__dropdown active">
                  <button className="faq-main__drop-btn">
                    <span className="faq-main__drop-text">Elementum odio sagittis, interdum</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="11" viewBox="0 0 16 11"
                         fill="none">
                      <path d="M7.125 1L1 5.5L7.125 10M1 5.5H15" stroke="white" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                  </button>
                  <div className="faq-main__drop-content">
                    Ut donec suscipit nunc volutpat faucibus. Ut penatibus etiam diam facilisi at nibh nulla
                    auctor lorem. Accumsan vulputate euismod massa sit egestas. Aliquet a scelerisque enim, arcu
                    rutrum adipiscing fringilla risus. Eget fringilla curabitur sed vulputate pretium, habitasse
                    amet.
                  </div>
                </li>

                <li className="faq-main__dropdown">
                  <button className="faq-main__drop-btn">
                    <span className="faq-main__drop-text">Elementum odio sagittis, interdum elit ipsum</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="11" viewBox="0 0 16 11"
                         fill="none">
                      <path d="M8.875 10L15 5.5L8.875 0.999999M15 5.5L1 5.5" stroke="black"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </li>

                <li className="faq-main__dropdown">
                  <button className="faq-main__drop-btn">
                    <span className="faq-main__drop-text">Ullamcorper consequat donec euismod</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="11" viewBox="0 0 16 11"
                         fill="none">
                      <path d="M8.875 10L15 5.5L8.875 0.999999M15 5.5L1 5.5" stroke="black"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </li>

                <li className="faq-main__dropdown">
                  <button className="faq-main__drop-btn">
                    <span className="faq-main__drop-text">Volutpat erat ac eu aliquam</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="11" viewBox="0 0 16 11"
                         fill="none">
                      <path d="M8.875 10L15 5.5L8.875 0.999999M15 5.5L1 5.5" stroke="black"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>

            <div className="faq-main__dropdowns faq-main__dropdowns--second">
              <h2 className="faq-main__title">About Orders</h2>
              <ul className="faq-main__dropdowns-contents">

                <li className="faq-main__dropdown">
                  <button className="faq-main__drop-btn">
                    <span className="faq-main__drop-text">Elementum odio sagittis, interdum</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="11" viewBox="0 0 16 11"
                         fill="none">
                      <path d="M8.875 10L15 5.5L8.875 0.999999M15 5.5L1 5.5" stroke="black"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </li>

                <li className="faq-main__dropdown">
                  <button className="faq-main__drop-btn">
                    <span className="faq-main__drop-text">Elementum odio sagittis, interdum elit ipsum</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="11" viewBox="0 0 16 11"
                         fill="none">
                      <path d="M8.875 10L15 5.5L8.875 0.999999M15 5.5L1 5.5" stroke="black"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </li>

                <li className="faq-main__dropdown">
                  <button className="faq-main__drop-btn">
                    <span className="faq-main__drop-text">Ullamcorper consequat donec euismod</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="11" viewBox="0 0 16 11"
                         fill="none">
                      <path d="M8.875 10L15 5.5L8.875 0.999999M15 5.5L1 5.5" stroke="black"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </li>

                <li className="faq-main__dropdown">
                  <button className="faq-main__drop-btn">
                    <span className="faq-main__drop-text">Volutpat erat ac eu aliquam</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="11" viewBox="0 0 16 11"
                         fill="none">
                      <path d="M8.875 10L15 5.5L8.875 0.999999M15 5.5L1 5.5" stroke="black"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>

            <div className="faq-main__dropdowns-actions">
              <button className="btn btn--grey">Show All</button>
            </div>

            <div className="faq-main__questions-form-wrapper">
              <h2 className="faq-main__title-red">Have any questions?</h2>

              <form className="faq-main__questions-form questions-form">
                <input type="email" placeholder="Enter Your E-mail"
                       className="faq-main__questions-form-input questions-form__input-white" />
                <input type="text" placeholder="Enter Name"
                       className="faq-main__questions-form-input questions-form__input-white" />
                <textarea className="faq-main__questions-textarea questions-form__textarea-white"
                          placeholder="Your question..."></textarea>

                <div className="faq-main__question-form-actions questions-form__actions">
                  <button type="submit"
                          className="faq-main__questions-form-btn questions-form__btn btn btn--grey">Submit
                  </button>
                </div>
              </form>

            </div>

          </div>
        </div>
      </main>

      <Newsletter />
    </>
  );
}
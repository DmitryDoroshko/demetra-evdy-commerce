import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__main">
            <div className="footer__col footer__col--1">
              <h2 className="footer__heading">Evdy Commerce</h2>
              <p className="footer__text-small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="footer__links-social">
                <a href="#" className="footer__link-social">
                  <img src="/assets/icons/links.png" alt="Links" />
                </a>
              </div>
            </div>

            <div className="footer__col footer__col--2">
              <div className="footer__heading footer__heading--red">
                Information
              </div>

              <div className="footer__links">
                <Link href="/about-us" className="footer__link">
                  About Evdy Commerce
                </Link>
                <Link href="/faq" className="footer__link">
                  FAQ
                </Link>
                <Link href="/contact-us" className="footer__link">
                  Contact us
                </Link>
              </div>
            </div>

            <div className="footer__col footer__col--3">
              <div className="footer__heading footer__heading--red">
                Quick Links
              </div>

              <div className="footer__links">
                <Link href="/wishlist" className="footer__link">
                  Wishlist
                </Link>
                <Link href="/checkout" className="footer__link">
                  Checkout
                </Link>
                <Link href="/shopping-cart" className="footer__link">
                  Cart
                </Link>
              </div>
            </div>

            <div className="footer__col footer__col--4">
              <div className="footer__heading footer__heading--red">
                Information
              </div>

              <div className="footer__links">
                <a href="#" className="footer__link">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="ep:location">
                      <path
                        id="Vector"
                        d="M15.625 8.53125C15.625 6.96482 15.0324 5.46254 13.9775 4.3549C12.9226 3.24726 11.4919 2.625 10 2.625C8.50819 2.625 7.07745 3.24726 6.02255 4.3549C4.96766 5.46254 4.37503 6.96482 4.37503 8.53125C4.37503 10.9541 6.22128 14.112 10 17.8946C13.7788 14.112 15.625 10.9541 15.625 8.53125ZM10 19.6875C5.41628 15.3129 3.12503 11.5933 3.12503 8.53125C3.12503 6.61672 3.84936 4.7806 5.13867 3.42682C6.42798 2.07304 8.17667 1.3125 10 1.3125C11.8234 1.3125 13.5721 2.07304 14.8614 3.42682C16.1507 4.7806 16.875 6.61672 16.875 8.53125C16.875 11.5933 14.5838 15.3129 10 19.6875Z"
                        fill="#EF3636"
                      />
                      <path
                        id="Vector_2"
                        d="M10 10.5C10.4973 10.5 10.9742 10.2926 11.3259 9.92337C11.6775 9.55415 11.875 9.05339 11.875 8.53125C11.875 8.0091 11.6775 7.50835 11.3259 7.13913C10.9742 6.76992 10.4973 6.5625 10 6.5625C9.50275 6.5625 9.02584 6.76992 8.67421 7.13913C8.32257 7.50835 8.12503 8.0091 8.12503 8.53125C8.12503 9.05339 8.32257 9.55415 8.67421 9.92337C9.02584 10.2926 9.50275 10.5 10 10.5ZM10 11.8125C9.17123 11.8125 8.37637 11.4668 7.79032 10.8514C7.20427 10.2361 6.87503 9.40149 6.87503 8.53125C6.87503 7.66101 7.20427 6.82641 7.79032 6.21106C8.37637 5.5957 9.17123 5.25 10 5.25C10.8288 5.25 11.6237 5.5957 12.2097 6.21106C12.7958 6.82641 13.125 7.66101 13.125 8.53125C13.125 9.40149 12.7958 10.2361 12.2097 10.8514C11.6237 11.4668 10.8288 11.8125 10 11.8125Z"
                        fill="#EF3636"
                      />
                    </g>
                  </svg>
                  2715 Ash Dr. San Jose, South Dakota 83475
                </a>
                <a href="#" className="footer__link">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="cil:phone">
                      <path
                        id="Vector"
                        d="M2.44668 3.67699L2.47344 3.65944L5.85597 1.90967L9.50687 7.02091L7.82719 9.37263C7.87745 10.2595 8.23565 11.0963 8.83397 11.7245C9.43229 12.3527 10.2292 12.7288 11.0739 12.7816L13.3136 11.0179L18.1814 14.8513L16.5288 18.3733L16.5149 18.403L16.4981 18.431C16.4099 18.5803 16.2868 18.7033 16.1406 18.7884C15.9943 18.8735 15.8297 18.9179 15.6625 18.9174H14.7896C13.1079 18.9174 11.4427 18.5696 9.88896 17.8938C8.33525 17.2181 6.92351 16.2276 5.73436 14.979C4.5452 13.7304 3.60191 12.2481 2.95835 10.6167C2.31479 8.98526 1.98355 7.23674 1.98355 5.47093V4.55444C1.98302 4.37884 2.0253 4.20602 2.10636 4.05243C2.18743 3.89884 2.30459 3.76959 2.44668 3.67699ZM3.23355 5.47093C3.23355 12.1616 8.41762 17.6049 14.7896 17.6049H15.4959L16.6016 15.248L13.3133 12.6585L11.4826 14.1001H11.2743C10.0273 14.0987 8.83189 13.5779 7.95019 12.6521C7.06848 11.7263 6.57253 10.4711 6.57113 9.16185V8.94311L7.94414 7.02087L5.4782 3.56838L3.23355 4.72957V5.47093Z"
                        fill="#EF3636"
                      />
                    </g>
                  </svg>
                  (808) 555-0111
                </a>
                <a href="#" className="footer__link">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="fontisto:email" clipPath="url(#clip0_7_343)">
                      <path
                        id="Vector"
                        d="M13.7367 10.479L18.8625 5.803V15.1016L13.7367 10.479ZM7.13167 11.2709L8.93167 12.9115C9.21417 13.1635 9.5825 13.3158 9.985 13.3158H9.99917H9.99833H10.01C10.4133 13.3158 10.7817 13.1626 11.0675 12.9089L11.065 12.9106L12.865 11.27L18.3367 16.2041H1.6625L7.13167 11.2709ZM1.655 4.69437H18.3467L10.3292 12.0059C10.239 12.0807 10.1274 12.1214 10.0125 12.1214H10.0008H10.0017H9.99C9.87466 12.1215 9.76269 12.0805 9.6725 12.005L9.67333 12.0059L1.655 4.69437ZM1.1375 5.80212L6.2625 10.4781L1.1375 15.0981V5.80212ZM19.1375 3.66625C18.9375 3.56125 18.7025 3.5 18.4533 3.5H1.54917C1.30763 3.50006 1.06942 3.55907 0.853333 3.67238L0.8625 3.668C0.603811 3.80197 0.385956 4.00923 0.233545 4.26636C0.0811339 4.5235 0.000239457 4.82026 0 5.12313L0 15.7736C0.00044117 16.2047 0.16371 16.6179 0.453984 16.9227C0.744257 17.2275 1.13783 17.3989 1.54833 17.3994H18.4508C18.8613 17.3989 19.2549 17.2275 19.5452 16.9227C19.8355 16.6179 19.9987 16.2047 19.9992 15.7736V5.12313C19.9992 4.487 19.65 3.93575 19.1417 3.67063L19.1325 3.66625H19.1375Z"
                        fill="#EF3636"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_7_343">
                        <rect width="20" height="21" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  evdycommerce@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="footer__copy">
            <p className="footer__copy-text">Copyright © {new Date().getUTCFullYear()} Evdy Commerce</p>

            <p className="footer__copy-text">All right reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

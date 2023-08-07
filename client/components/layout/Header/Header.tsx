import {useState} from "react";

export function Header() {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState<boolean>(false);

  const openHamburgerMenuHandler = () => {
    setIsHamburgerMenuOpen(prevState => !prevState);
  };

  return (
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <div className="header__logo">
              Evdy Commerce
            </div>

            <div className="header__nav">
              <nav className="header__dropdowns">
                <ul className="header__dropdown-list">

                  <li className="header__dropdown">
                    <a href="#" className="header__link active">Home</a>
                    <span className="header__drop-icon"></span>
                  </li>

                  <li className="header__dropdown">
                    <a href="#" className="header__link">Shop</a>
                    <span className="header__drop-icon"></span>
                  </li>

                  <li className="header__dropdown">
                    <a href="#" className="header__link">Product</a>
                    <span className="header__drop-icon"></span>
                  </li>

                  <li className="header__dropdown">
                    <a href="#" className="header__link">Blog</a>
                    <span className="header__drop-icon"></span>
                  </li>

                  <li className="header__dropdown">
                    <a href="#" className="header__link">Page</a>
                  </li>

                </ul>
              </nav>

              <ul className="header__actions">
                <li className="header__action">
                  <button className="header__btn">
                    <svg className="header__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black"
                         xmlns="http://www.w3.org/2000/svg">
                      <rect width="24" height="24" fill="#F5F5F5"/>
                      <g id="Landing" clipPath="url(#clip0_5_91)">
                        <rect width="1920" height="5119" transform="translate(-1408 -40)" fill="white"/>
                        <g id="Header / Default">
                          <rect id="Rectangle 33" x="-1408" y="-40" width="1920" height="104" fill="white"/>
                          <g id="Frame 7">
                            <g id="search">
                              <path id="Vector"
                                    d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                                    stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path id="Vector_2" d="M21 21L16.65 16.65" stroke="black" strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"/>
                            </g>
                          </g>
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_5_91">
                          <rect width="1920" height="5119" fill="white" transform="translate(-1408 -40)"/>
                        </clipPath>
                      </defs>
                    </svg>

                  </button>
                </li>

                <li className="header__action">
                  <button className="header__btn">
                    <svg className="header__icon" xmlns="http://www.w3.org/2000/svg" height="24"
                         viewBox="0 -960 960 960"
                         width="24">
                      <path
                          d="M222-255q63-44 125-67.5T480-346q71 0 133.5 23.5T739-255q44-54 62.5-109T820-480q0-145-97.5-242.5T480-820q-145 0-242.5 97.5T140-480q0 61 19 116t63 109Zm257.814-195Q422-450 382.5-489.686q-39.5-39.686-39.5-97.5t39.686-97.314q39.686-39.5 97.5-39.5t97.314 39.686q39.5 39.686 39.5 97.5T577.314-489.5q-39.686 39.5-97.5 39.5Zm.654 370Q398-80 325-111.5q-73-31.5-127.5-86t-86-127.266Q80-397.532 80-480.266T111.5-635.5q31.5-72.5 86-127t127.266-86q72.766-31.5 155.5-31.5T635.5-848.5q72.5 31.5 127 86t86 127.032q31.5 72.532 31.5 155T848.5-325q-31.5 73-86 127.5t-127.032 86q-72.532 31.5-155 31.5ZM480-140q55 0 107.5-16T691-212q-51-36-104-55t-107-19q-54 0-107 19t-104 55q51 40 103.5 56T480-140Zm0-370q34 0 55.5-21.5T557-587q0-34-21.5-55.5T480-664q-34 0-55.5 21.5T403-587q0 34 21.5 55.5T480-510Zm0-77Zm0 374Z"/>
                    </svg>
                  </button>
                </li>

                <li className="header__action">
                  <button className="header__btn">
                    <svg className="header__icon" stroke="black" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                      <g id="heart">
                        <path id="Vector"
                              d="M20.84 4.60999C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.60999L12 5.66999L10.94 4.60999C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.60999C2.1283 5.64169 1.54871 7.04096 1.54871 8.49999C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.49999C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.60999V4.60999Z"
                              stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </g>
                    </svg>

                  </button>
                </li>

                <li className="header__action">
                  <button className="header__btn">
                    <svg className="header__icon" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                      <g id="shopping-cart">
                        <path id="Vector"
                              d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
                              stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path id="Vector_2"
                              d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
                              stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path id="Vector_3"
                              d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
                              stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </g>
                    </svg>

                  </button>
                </li>
              </ul>
            </div>

            <button className={`header__hamburger-menu ${isHamburgerMenuOpen && "active"}`} onClick={openHamburgerMenuHandler}>
              <span className="header__hamburger-bar"></span>
            </button>

            <div className={`header__mobile-nav ${isHamburgerMenuOpen && "active"}`}>
              <nav className="header__dropdowns header__dropdowns--mobile">
                <ul className="header__dropdown-list header__dropdown-list--mobile">

                  <li className="header__dropdown header__dropdown--mobile">
                    <a href="#" className="header__link header__link--mobile active">Home</a>
                    <span className="header__drop-icon header__drop-icon--mobile"></span>
                  </li>

                  <li className="header__dropdown header__dropdown--mobile">
                    <a href="#" className="header__link header__link--mobile">Shop</a>
                    <span className="header__drop-icon header__drop-icon--mobile"></span>
                  </li>

                  <li className="header__dropdown header__dropdown--mobile">
                    <a href="#" className="header__link header__link--mobile">Product</a>
                    <span className="header__drop-icon header__drop-icon--mobile"></span>
                  </li>

                  <li className="header__dropdown header__dropdown--mobile">
                    <a href="#" className="header__link header__link--mobile">Blog</a>
                    <span className="header__drop-icon header__drop-icon--mobile"></span>
                  </li>

                  <li className="header__dropdown header__dropdown--mobile">
                    <a href="#" className="header__link header__link--mobile">Page</a>
                  </li>

                </ul>
              </nav>

              <ul className="header__actions header__actions--mobile">
                <li className="header__action">
                  <button className="header__btn">
                    <svg className="header__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none"
                         xmlns="http://www.w3.org/2000/svg">
                      <rect width="24" height="24" fill="none"/>
                      <g id="Landing" clipPath="url(#clip0_5_91)">
                        <rect width="1920" height="5119" transform="translate(-1408 -40)" fill="none"/>
                        <g id="Header / Default">
                          <rect id="Rectangle 33" x="-1408" y="-40" width="1920" height="104" fill="none"/>
                          <g id="Frame 7">
                            <g id="search">
                              <path id="Vector"
                                    d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                                    stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path id="Vector_2" d="M21 21L16.65 16.65" stroke="white" strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"/>
                            </g>
                          </g>
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_5_91">
                          <rect width="1920" height="5119" fill="white" transform="translate(-1408 -40)"/>
                        </clipPath>
                      </defs>
                    </svg>

                  </button>
                </li>

                <li className="header__action">
                  <button className="header__btn">
                    <svg className="header__icon" xmlns="http://www.w3.org/2000/svg" height="24"
                         viewBox="0 -960 960 960"
                         width="24">
                      <path fill="white" stroke="white"
                            d="M222-255q63-44 125-67.5T480-346q71 0 133.5 23.5T739-255q44-54 62.5-109T820-480q0-145-97.5-242.5T480-820q-145 0-242.5 97.5T140-480q0 61 19 116t63 109Zm257.814-195Q422-450 382.5-489.686q-39.5-39.686-39.5-97.5t39.686-97.314q39.686-39.5 97.5-39.5t97.314 39.686q39.5 39.686 39.5 97.5T577.314-489.5q-39.686 39.5-97.5 39.5Zm.654 370Q398-80 325-111.5q-73-31.5-127.5-86t-86-127.266Q80-397.532 80-480.266T111.5-635.5q31.5-72.5 86-127t127.266-86q72.766-31.5 155.5-31.5T635.5-848.5q72.5 31.5 127 86t86 127.032q31.5 72.532 31.5 155T848.5-325q-31.5 73-86 127.5t-127.032 86q-72.532 31.5-155 31.5ZM480-140q55 0 107.5-16T691-212q-51-36-104-55t-107-19q-54 0-107 19t-104 55q51 40 103.5 56T480-140Zm0-370q34 0 55.5-21.5T557-587q0-34-21.5-55.5T480-664q-34 0-55.5 21.5T403-587q0 34 21.5 55.5T480-510Zm0-77Zm0 374Z"/>
                    </svg>
                  </button>
                </li>

                <li className="header__action">
                  <button className="header__btn">
                    <svg className="header__icon" stroke="white" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                      <g id="heart">
                        <path id="Vector"
                              d="M20.84 4.60999C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.60999L12 5.66999L10.94 4.60999C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.60999C2.1283 5.64169 1.54871 7.04096 1.54871 8.49999C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.49999C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.60999V4.60999Z"
                              stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </g>
                    </svg>

                  </button>
                </li>

                <li className="header__action">
                  <button className="header__btn">
                    <svg className="header__icon" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                      <g id="shopping-cart">
                        <path id="Vector"
                              d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
                              stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path id="Vector_2"
                              d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
                              stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path id="Vector_3"
                              d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
                              stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </g>
                    </svg>

                  </button>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </header>
  );
}

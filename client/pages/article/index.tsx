import { MainSecondary } from "@/components/shared/MainSecondary/MainSecondary";
import { Newsletter } from "@/components/shared/Newsletter/Newsletter";

export default function ArticlePage() {
  return (
    <>
      <MainSecondary image={"/assets/img/main-secondary/blog.png"} imageAlternativeText={"Article picture"}
                     subtitle={"Home / Blog / Article"} title={"Article"} />

      <main className="blog">
        <div className="container">
          <div className="blog__main-inner">

            <div className="blog__categories">

              <div className="blog__categories-col blog__categories-col--1">
                <div className="blog__categories-input-wrapper">
                  <input type="text" className="blog__categories-search-input" placeholder="Search" />
                  <svg className="blog__categories-search-icon" xmlns="http://www.w3.org/2000/svg" width="12"
                       height="12"
                       viewBox="0 0 12 12" fill="none">
                    <path
                      d="M5.44466 9.88865C7.89911 9.88865 9.88884 7.89893 9.88884 5.44448C9.88884 2.99003 7.89911 1.00031 5.44466 1.00031C2.99021 1.00031 1.00049 2.99003 1.00049 5.44448C1.00049 7.89893 2.99021 9.88865 5.44466 9.88865Z"
                      stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M11 10.9997L8.5835 8.58318" stroke="white" stroke-linecap="round"
                          stroke-linejoin="round" />
                  </svg>
                </div>
              </div>

              <div className="blog__categories-col">
                <h4 className="blog__categories-heading">Categories</h4>
                <ul className="blog__categories-links-list">
                  <li className="blog__categories__list-item"><a href="#"
                                                                 className="blog__categories-link">Lifestyle</a></li>
                  <li className="blog__categories__list-item"><a href="#" className="blog__categories-link">Fashion</a>
                  </li>
                  <li className="blog__categories__list-item"><a href="#" className="blog__categories-link">Sport</a>
                  </li>
                  <li className="blog__categories__list-item"><a href="#"
                                                                 className="blog__categories-link">Development</a></li>
                </ul>
              </div>

              <div className="blog__categories-col">
                <h4 className="blog__categories-heading">Social Media</h4>
                <ul className="blog__categories-links-list">
                  <li className="blog__categories__list-item"><a href="#" className="blog__categories-link">Twitter</a>
                  </li>
                  <li className="blog__categories__list-item"><a href="#" className="blog__categories-link">Facebook</a>
                  </li>
                  <li className="blog__categories__list-item"><a href="#"
                                                                 className="blog__categories-link">Instagram</a></li>
                  <li className="blog__categories__list-item"><a href="#" className="blog__categories-link">Vimeo</a>
                  </li>
                </ul>
              </div>

              <div className="blog__categories-col">
                <h4 className="blog__categories-heading">Brands</h4>
                <ul className="blog__categories-links-list">
                  <li className="blog__categories__list-item"><a href="#" className="blog__categories-link">Nike</a>
                  </li>
                  <li className="blog__categories__list-item"><a href="#" className="blog__categories-link">Air
                    Jordan</a></li>
                  <li className="blog__categories__list-item"><a href="#" className="blog__categories-link">Adidas</a>
                  </li>
                  <li className="blog__categories__list-item"><a href="#" className="blog__categories-link">Converse</a>
                  </li>
                </ul>
              </div>

              <div className="blog__categories-col">
                <h4 className="blog__categories-heading">Archives</h4>
                <ul className="blog__categories-links-list">
                  <li className="blog__categories__list-item"><a href="#" className="blog__categories-link">June</a>
                  </li>
                  <li className="blog__categories__list-item"><a href="#" className="blog__categories-link">Air
                    Jordan</a></li>
                  <li className="blog__categories__list-item"><a href="#" className="blog__categories-link">Adidas</a>
                  </li>
                  <li className="blog__categories__list-item"><a href="#" className="blog__categories-link">Converse</a>
                  </li>
                </ul>
              </div>

              <div className="blog__categories-col">
                <h4 className="blog__categories-heading">Recent posts</h4>
                <ul className="blog__categories-links-list">
                  <li className="blog__categories__list-item"><a href="#" className="blog__categories-link">Quis egestas
                    consectetur </a></li>
                  <li className="blog__categories__list-item"><a href="#" className="blog__categories-link">Auctor etiam
                    elit</a></li>
                </ul>
              </div>
            </div>

            <div className="blog__main-content">
              <div className="blog__article">
                <div className="blog__article-main-picture">
                  <img src="/assets/img/article/1.png" alt="1" className="blog__article-main-img" />
                </div>

                <div className="blog__date-and-author blog__date-and-author-with-margin">
                  <span className="blog__date">JUN 19, 2021</span>
                  <span className="blog__dot">&nbsp;</span>
                  <span className="blog__author">by Admin</span>

                  <div className="blog__watchers">
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M13.9073 4.64387C12.3852 1.88727 10.0843 0.5 7 0.5C3.91404 0.5 1.61482 1.88727 0.0927157 4.64525C0.0316634 4.75639 0 4.87778 0 5.00069C0 5.1236 0.0316634 5.24499 0.0927157 5.35613C1.61482 8.11273 3.91564 9.5 7 9.5C10.086 9.5 12.3852 8.11273 13.9073 5.35475C14.0309 5.13114 14.0309 4.87163 13.9073 4.64387ZM7 8.50613C4.41017 8.50613 2.51396 7.37699 1.17649 5C2.51396 2.62301 4.41017 1.49387 7 1.49387C9.58982 1.49387 11.486 2.62301 12.8235 5C11.4876 7.37699 9.59143 8.50613 7 8.50613ZM6.93577 2.57055C5.37513 2.57055 4.10992 3.65828 4.10992 5C4.10992 6.34172 5.37513 7.42945 6.93577 7.42945C8.49641 7.42945 9.76162 6.34172 9.76162 5C9.76162 3.65828 8.49641 2.57055 6.93577 2.57055ZM6.93577 6.54601C5.94191 6.54601 5.1375 5.85445 5.1375 5C5.1375 4.14555 5.94191 3.45399 6.93577 3.45399C7.92964 3.45399 8.73404 4.14555 8.73404 5C8.73404 5.85445 7.92964 6.54601 6.93577 6.54601Z"
                        fill="#989898" />
                    </svg>
                    <div className="blog__watchers-count">446</div>
                  </div>

                </div>

                <p className="blog__article-text">
                  Ut donec suscipit nunc volutpat faucibus. Ut penatibus etiam diam facilisi at nibh nulla auctor lorem.
                  Accumsan vulputate euismod massa sit egestas. Aliquet a scelerisque enim, arcu rutrum adipiscing
                  fringilla
                  risus. t Ullamcorper consequat donec euismod mi pulvinar.
                  Elit et ac commodo cursus in. Magna accumsan lacinia mauris, metus, at interdum aliquam. Congue
                  sollicitudin
                  et placerat et sed arcu, id in lectus.
                </p>

                <p className="blog__article-text">
                  Tempor etiam ipsum pellentesque eget pretium consectetur pellentesque ultrices sagittis. Elit ut
                  ultricies
                  donec a at odio ultricies tellus. Elit faucibus et, in tristique. Id ullamcorper ut mauris massa sit
                  in ut
                  sagittis hendrerit. Proin venenatis et sodales sollicitudin. Massa tempus, turpis elit, eget
                  suspendisse
                  tincidunt facilisis non nam. Purus dictumst consectetur amet ipsum.
                </p>

                <div className="blog__article-pictures">
                  <div className="blog__article-picture">
                    <img src="/assets/img/article/2.png" alt="1"
                         className="blog__article-secondary-img blog__article-secondary-img--1" />
                  </div>

                  <div className="blog__article-picture">
                    <img src="/assets/img/article/3.png" alt="2"
                         className="blog__article-secondary-img blog__article-secondary-img--2" />
                  </div>
                </div>

                <h2 className="blog__article-red-heading">Egestas diam neque</h2>

                <p className="blog__article-text">
                  Ut donec suscipit nunc volutpat faucibus. Ut penatibus etiam diam facilisi at nibh nulla auctor lorem.
                  Accumsan vulputate euismod massa sit egestas. Aliquet a scelerisque enim, arcu rutrum adipiscing
                  fringilla
                  risus. t Ullamcorper consequat donec euismod mi pulvinar.
                  Elit et ac commodo cursus in. Magna accumsan lacinia mauris, metus, at interdum aliquam. Congue
                  sollicitudin
                  et placerat et sed arcu, id in lectus.
                </p>

                <p className="blog__article-text">
                  Tempor etiam ipsum pellentesque eget pretium consectetur pellentesque ultrices sagittis. Elit ut
                  ultricies
                  donec a at odio ultricies tellus. Elit faucibus et, in tristique. Id ullamcorper ut mauris massa sit
                  in ut
                  sagittis hendrerit. Proin venenatis et sodales sollicitudin. Massa tempus, turpis elit, eget
                  suspendisse
                  tincidunt facilisis non nam. Purus dictumst consectetur amet ipsum.
                </p>

                <div className="blog__article-quote">
                  <p className="blog__article-author">-Andrew Stockton</p>
                  <blockquote className="blog__article-text">
                    “Malesuada penatibus pharetra ullamcorper a dictumst. Bibendum consequat blandit viverra integer
                    vel. Ac
                    dui odio ultricies posuere. Donec proin varius mus in eget et urna, ultrices faucibus. Volutpat
                    laoreet
                    pellentesque volutpat at gravida et, at. Sed et, suspendisse tortor, porttitor enim, penatibus sit.”
                  </blockquote>
                </div>

                <p className="blog__article-text">
                  Ut donec suscipit nunc volutpat faucibus. Ut penatibus etiam diam facilisi at nibh nulla auctor lorem.
                  Accumsan vulputate euismod massa sit egestas. Aliquet a scelerisque enim, arcu rutrum adipiscing
                  fringilla
                  risus. t Ullamcorper consequat donec euismod mi pulvinar.
                  Elit et ac commodo cursus in. Magna accumsan lacinia mauris, metus, at interdum aliquam. Congue
                  sollicitudin
                  et placerat et sed arcu, id in lectus.
                </p>

                <p className="blog__article-text">
                  Tempor etiam ipsum pellentesque eget pretium consectetur pellentesque ultrices sagittis. Elit ut
                  ultricies
                  donec a at odio ultricies tellus. Elit faucibus et, in tristique. Id ullamcorper ut mauris massa sit
                  in ut
                  sagittis hendrerit. Proin venenatis et sodales sollicitudin. Massa tempus, turpis elit, eget
                  suspendisse
                  tincidunt facilisis non nam. Purus dictumst consectetur amet ipsum.
                </p>

                <div className="blog__article-comments">
                  <h2 className="blog__article-comments-heading">Comments on Nunc rhoncus auctor risus tempor (4)</h2>

                  <div className="blog__article-comments-item">
                    <div className="blog__article-comments-item-left">
                      <img src="/assets/img/article/authors/1.png" alt="" className="blog__article-comments-item-left-img" />
                    </div>
                    <div className="blog__article-comments-item-right">
                      <h3 className="blog__article-comments-author">Cristina Jenson</h3>
                      <p className="blog__article-comments-author-text">Eget fringilla curabitur sed vulputate pretium,
                        habitasse
                        amet. Elementum odio sagittis, interdum elit ipsum. Volutpat erat ac eu aliquam turpis.</p>
                    </div>
                  </div>

                  <div className="blog__article-comments-item">
                    <div className="blog__article-comments-item-left">
                      <img src="/assets/img/article/authors/2.png" alt="" className="blog__article-comments-item-left-img" />
                    </div>
                    <div className="blog__article-comments-item-right">
                      <h3 className="blog__article-comments-author">Cristina Jenson</h3>
                      <p className="blog__article-comments-author-text">Eget fringilla curabitur sed vulputate pretium,
                        habitasse
                        amet. Elementum odio sagittis, interdum elit ipsum. Volutpat erat ac eu aliquam turpis.</p>
                    </div>
                  </div>

                  <div className="blog__article-comments-item">
                    <div className="blog__article-comments-item-left">
                      <img src="/assets/img/article/authors/3.png" alt="" className="blog__article-comments-item-left-img" />
                    </div>
                    <div className="blog__article-comments-item-right">
                      <h3 className="blog__article-comments-author">Cristina Jenson</h3>
                      <p className="blog__article-comments-author-text">Eget fringilla curabitur sed vulputate pretium,
                        habitasse
                        amet. Elementum odio sagittis, interdum elit ipsum. Volutpat erat ac eu aliquam turpis.</p>
                    </div>
                  </div>

                  <div className="blog__article-comments-item">
                    <div className="blog__article-comments-item-left">
                      <img src="/assets/img/article/authors/4.png" alt="" className="blog__article-comments-item-left-img" />
                    </div>
                    <div className="blog__article-comments-item-right">
                      <h3 className="blog__article-comments-author">Cristina Jenson</h3>
                      <p className="blog__article-comments-author-text">Eget fringilla curabitur sed vulputate pretium,
                        habitasse
                        amet. Elementum odio sagittis, interdum elit ipsum. Volutpat erat ac eu aliquam turpis.</p>
                    </div>
                  </div>

                </div>

                <div className="blog__questions-form-wrapper">


                  <form className="blog__questions-form questions-form">
                    <h3 className="blog__questions-form-heading questions-form__heading">Write A Comment</h3>
                    <input type="email" placeholder="Enter Your E-mail"
                           className="blog__questions-form-input questions-form__input-white" />
                    <input type="text" placeholder="Enter Name"
                           className="blog__questions-form-input questions-form__input-white" />
                    <textarea className="blog__questions-textarea questions-form__textarea-white"
                              placeholder="Comment..."></textarea>

                    <div className="blog__question-form-actions questions-form__actions">
                      <button type="submit"
                              className="blog__questions-form-btn questions-form__btn btn btn--grey">Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <aside className="blog__main-recent-posts">
                <h3 className="blog__main-recent-posts-title">recent posts</h3>

                <div className="blog__main-recent-posts-item">
                  <div className="blog__main-recent-posts-item-left">
                    <img src="/assets/img/article/recent-posts/1.png" alt="" className="blog__main-recent-posts-item-img" />
                  </div>

                  <div className="blog__main-recent-posts-item-right">
                    <h5 className="blog__main-recent-posts-item-right-heading">Quis egestas consectetur</h5>
                    <div className="blog__date-and-author">
                      <span className="blog__date">JUN 19, 2021</span>
                      <span className="blog__dot">&nbsp;</span>
                      <span className="blog__author">by Admin</span>
                    </div>
                  </div>
                </div>

                <div className="blog__main-recent-posts-item">
                  <div className="blog__main-recent-posts-item-left">
                    <img src="/assets/img/article/recent-posts/2.png" alt="" className="blog__main-recent-posts-item-img" />
                  </div>

                  <div className="blog__main-recent-posts-item-right">
                    <h5 className="blog__main-recent-posts-item-right-heading">Quis egestas consectetur</h5>
                    <div className="blog__date-and-author">
                      <span className="blog__date">JUN 19, 2021</span>
                      <span className="blog__dot">&nbsp;</span>
                      <span className="blog__author">by Admin</span>
                    </div>
                  </div>
                </div>

                <div className="blog__main-recent-posts-item">
                  <div className="blog__main-recent-posts-item-left">
                    <img src="/assets/img/article/recent-posts/3.png" alt="" className="blog__main-recent-posts-item-img" />
                  </div>

                  <div className="blog__main-recent-posts-item-right">
                    <h5 className="blog__main-recent-posts-item-right-heading">Quis egestas consectetur</h5>
                    <div className="blog__date-and-author">
                      <span className="blog__date">JUN 19, 2021</span>
                      <span className="blog__dot">&nbsp;</span>
                      <span className="blog__author">by Admin</span>
                    </div>
                  </div>
                </div>

                <div className="blog__main-recent-posts-item">
                  <div className="blog__main-recent-posts-item-left">
                    <img src="/assets/img/article/recent-posts/4.png" alt="" className="blog__main-recent-posts-item-img" />
                  </div>

                  <div className="blog__main-recent-posts-item-right">
                    <h5 className="blog__main-recent-posts-item-right-heading">Quis egestas consectetur</h5>
                    <div className="blog__date-and-author">
                      <span className="blog__date">JUN 19, 2021</span>
                      <span className="blog__dot">&nbsp;</span>
                      <span className="blog__author">by Admin</span>
                    </div>
                  </div>
                </div>

                <div className="blog__main-recent-posts-item">
                  <div className="blog__main-recent-posts-item-left">
                    <img src="/assets/img/article/recent-posts/5.png" alt="" className="blog__main-recent-posts-item-img" />
                  </div>

                  <div className="blog__main-recent-posts-item-right">
                    <h5 className="blog__main-recent-posts-item-right-heading">Quis egestas consectetur</h5>
                    <div className="blog__date-and-author">
                      <span className="blog__date">JUN 19, 2021</span>
                      <span className="blog__dot">&nbsp;</span>
                      <span className="blog__author">by Admin</span>
                    </div>
                  </div>
                </div>
              </aside>
            </div>

          </div>
        </div>
      </main>

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
                      <path d="M1 5H15M8.875 0.5L15 5L8.875 9.5" stroke="black" stroke-linecap="round"
                            stroke-linejoin="round" />
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
                      <path d="M1 5H15M8.875 0.5L15 5L8.875 9.5" stroke="black" stroke-linecap="round"
                            stroke-linejoin="round" />
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
                      <path d="M1 5H15M8.875 0.5L15 5L8.875 9.5" stroke="black" stroke-linecap="round"
                            stroke-linejoin="round" />
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

      <Newsletter />
    </>
  );
}
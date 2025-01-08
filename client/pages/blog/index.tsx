import { MainSecondary } from "@/components/shared/MainSecondary/MainSecondary";

export default function BlogPage() {
  return (<>
      <MainSecondary image={"/assets/img/main-secondary/blog.png"} imageAlternativeText={"Blog picture"}
                     subtitle={"Home / Blog"} title={"Blog"} />

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
                    elit</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="blog__posts">

              <article className="blog__post">
                <div className="blog__post-picture">
                  <h3 className="blog__post-picture-title">Lifestyle</h3>
                  <img src="/assets/img/blog/1.png" alt="1" className="blog__post-img" />
                </div>

                <div className="blog__content">
                  <div className="blog__date-and-author">
                    <span className="blog__date">JUN 19, 2021</span>
                    <span className="blog__dot">&nbsp;</span>
                    <span className="blog__author">by Admin</span>
                  </div>
                  <h3 className="blog__post-title">Nunc rhoncus auctor risus tempor</h3>
                  <p className="blog__text">Ut donec suscipit nunc volutpat faucibus. Ut penatibus etiam diam facilisi
                    at nibh
                    nulla auctor lorem. Accumsan vulputate euismod massa sit egestas. Aliquet a scelerisque enim, arcu
                    rutrum
                    adipiscing fringilla risus. t Ullamcorper consequat donec euismod mi pulvinar...</p>
                  <button className="blog__btn btn btn--white">Read more
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
                      <path d="M1 5H15M8.875 0.5L15 5L8.875 9.5" stroke="black" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>

              </article>

              <article className="blog__post">
                <div className="blog__post-picture">
                  <h3 className="blog__post-picture-title">Fashion</h3>
                  <img src="/assets/img/blog/2.png" alt="2" className="blog__post-img" />
                </div>

                <div className="blog__content">
                  <div className="blog__date-and-author">
                    <span className="blog__date">JUN 19, 2021</span>
                    <span className="blog__dot">&nbsp;</span>
                    <span className="blog__author">by Admin</span>
                  </div>
                  <h3 className="blog__post-title">Nunc rhoncus auctor risus tempor</h3>
                  <p className="blog__text">Ut donec suscipit nunc volutpat faucibus. Ut penatibus etiam diam facilisi
                    at nibh
                    nulla auctor lorem. Accumsan vulputate euismod massa sit egestas. Aliquet a scelerisque enim, arcu
                    rutrum
                    adipiscing fringilla risus. t Ullamcorper consequat donec euismod mi pulvinar...</p>
                  <button className="blog__btn btn btn--white">Read more
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
                      <path d="M1 5H15M8.875 0.5L15 5L8.875 9.5" stroke="black" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>

              </article>

              <article className="blog__post">
                <div className="blog__post-picture">
                  <h3 className="blog__post-picture-title">Sport</h3>
                  <img src="/assets/img/blog/3.png" alt="3" className="blog__post-img" />
                </div>

                <div className="blog__content">
                  <div className="blog__date-and-author">
                    <span className="blog__date">JUN 19, 2021</span>
                    <span className="blog__dot">&nbsp;</span>
                    <span className="blog__author">by Admin</span>
                  </div>
                  <h3 className="blog__post-title">Nunc rhoncus auctor risus tempor</h3>
                  <p className="blog__text">Ut donec suscipit nunc volutpat faucibus. Ut penatibus etiam diam facilisi
                    at nibh
                    nulla auctor lorem. Accumsan vulputate euismod massa sit egestas. Aliquet a scelerisque enim, arcu
                    rutrum
                    adipiscing fringilla risus. t Ullamcorper consequat donec euismod mi pulvinar...</p>
                  <button className="blog__btn btn btn--white">Read more
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
                      <path d="M1 5H15M8.875 0.5L15 5L8.875 9.5" stroke="black" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>

              </article>

              <article className="blog__post">
                <div className="blog__post-picture">
                  <h3 className="blog__post-picture-title">Development</h3>
                  <img src="/assets/img/blog/4.png" alt="4" className="blog__post-img" />
                </div>

                <div className="blog__content">
                  <div className="blog__date-and-author">
                    <span className="blog__date">JUN 19, 2021</span>
                    <span className="blog__dot">&nbsp;</span>
                    <span className="blog__author">by Admin</span>
                  </div>
                  <h3 className="blog__post-title">Nunc rhoncus auctor risus tempor</h3>
                  <p className="blog__text">Ut donec suscipit nunc volutpat faucibus. Ut penatibus etiam diam facilisi
                    at nibh
                    nulla auctor lorem. Accumsan vulputate euismod massa sit egestas. Aliquet a scelerisque enim, arcu
                    rutrum
                    adipiscing fringilla risus. t Ullamcorper consequat donec euismod mi pulvinar...</p>
                  <button className="blog__btn btn btn--white">Read more
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
                      <path d="M1 5H15M8.875 0.5L15 5L8.875 9.5" stroke="black" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </article>

              <button className="blog__action-btn btn btn--grey">Show More</button>

              <div className="blog__pagination">
                <button className="blog__pagination-btn blog__pagination-btn--left">
                  <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8" viewBox="0 0 6 8" fill="none">
                    <path d="M5 1L1 4L5 7" stroke="#989898" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>

                <button className="blog__pagination-btn active">1</button>
                <button className="blog__pagination-btn">2</button>
                <button className="blog__pagination-btn">3</button>
                <button className="blog__pagination-btn">4</button>
                <button className="blog__pagination-btn blog__pagination-btn--dots">...</button>
                <button className="blog__pagination-btn">21</button>

                <button className="blog__pagination-btn blog__pagination-btn--right">
                  <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8" viewBox="0 0 6 8" fill="none">
                    <path d="M1 7L5 4L1 1" stroke="#EF3636" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>

              </div>

            </div>

          </div>
        </div>
      </main>
    </>
  );
}
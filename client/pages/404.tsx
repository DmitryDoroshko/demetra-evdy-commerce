import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <main className="not-found-main">
        <div className="container">
          <div className="not-found-main__inner">
            <h1 className="not-found-main__sup-title">
              404
            </h1>
            <h2 className="not-found-main__sub-title">
              page not found
            </h2>
            <p className="not-found-main__text">We haven’t found this page, there is something wrong with your internet
              connection.</p>
            <div className="not-found-main__input-wrapper">
              <input type="text" className="not-found-main__input" placeholder="Search what you were interested in"/>
                <button className="not-found-main__button">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                       className="not-found-main__icon">
                    <path
                      d="M6.33325 11.6663C9.27872 11.6663 11.6665 9.27857 11.6665 6.33315C11.6665 3.38773 9.27872 1 6.33325 1C3.38778 1 1 3.38773 1 6.33315C1 9.27857 3.38778 11.6663 6.33325 11.6663Z"
                      stroke="#989898" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.0005 12.9995L10.1006 10.0996" stroke="#989898" strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round" />
                  </svg>
                </button>
            </div>

            <div className="not-found-main__redirects">
              <span className="not-found-main__text-secondary">Go back to </span>
              <Link href={"/blog"} className="not-found-main__redirect-link">blog</Link>
              <span className="not-found-main__text-secondary"> or </span>
              <Link href={"/"} className="not-found-main__redirect-link">home</Link>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}

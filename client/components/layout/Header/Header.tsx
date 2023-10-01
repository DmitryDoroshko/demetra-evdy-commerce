import { useState } from "react";

import { MobileNavigationMenu } from "@/components/layout/MobileNavigationMenu/MobileNavigationMenu";
import { HeaderNavigation } from "@/components/layout/HeaderNavigation/HeaderNavigation";

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

          <HeaderNavigation />

          <button className={`header__hamburger-menu ${isHamburgerMenuOpen ? "active" : ""}`}
                  onClick={openHamburgerMenuHandler}>
            <span className="header__hamburger-bar"></span>
          </button>
          <MobileNavigationMenu active={isHamburgerMenuOpen} />
        </div>
      </div>
    </header>
  );
}

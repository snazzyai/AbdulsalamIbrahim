import React, { useState } from "react"
import { Link } from "gatsby"
import * as headerStyles from "./header.module.sass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  const [navClick, setNavClick] = useState(false)

  function menuClick() {
    setNavClick(!navClick)
  }

  return (
    <>
      <header>
        <div className={headerStyles.top}>
          <div className={headerStyles.brandName}>
            <div>
              <Link to="/">
                <h2 className={headerStyles.brandInitials}>AI</h2>
              </Link>
            </div>
          </div>
          <nav className={headerStyles.navNormal}>
            <ul>
              <li>
                <Link className={headerStyles.navItem} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className={headerStyles.navItem} to="/about">
                  About Me
                </Link>
              </li>
              <li>
                <Link className={headerStyles.navItem} to="/projects">
                  Projects
                </Link>
              </li>
              {/* <li>
            <Link className={headerStyles.navItem} to="/contact">
              Contact Me
            </Link>
          </li> */}
            </ul>
          </nav>

          <nav className={headerStyles.navBurger} onClick={menuClick} onKeyDown>
            {!navClick ? (
              <FontAwesomeIcon
                className={headerStyles.menu}
                icon={faBars}
                size="3x"
              />
            ) : (
              <div></div>
            )}

            {navClick ? (
              <FontAwesomeIcon
                className={headerStyles.menu}
                icon={faTimes}
                size="3x"
              />
            ) : (
              <div></div>
            )}
          </nav>
        </div>
        <div className={headerStyles.bottom}>
          {navClick ? (
            <div>
              <ul>
                <li>
                  <Link className={headerStyles.navItemBottom} to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className={headerStyles.navItemBottom} to="/about">
                    About Me
                  </Link>
                </li>
                <li>
                  <Link className={headerStyles.navItemBottom} to="/projects">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link className={headerStyles.navItemBottom} to="/contact">
                    Contact Me
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </header>
    </>
  )
}

export default Header

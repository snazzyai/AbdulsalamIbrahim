import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.sass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  return (
    <header>
      <div className={headerStyles.brandName}>
        <div>
          <h2 className={headerStyles.brandInitials}>AI</h2>
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
          <li>
            <Link className={headerStyles.navItem} to="/contact">
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
      <nav className={headerStyles.navBurger}>
      <FontAwesomeIcon
      className={headerStyles.menu}
      icon={faBars}
    />
      </nav>
    </header>
  )
}

export default Header

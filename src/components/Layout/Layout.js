import React from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import * as layoutStyles from "./layout.module.sass"

const Layout = props => {
  return (
    <div className={layoutStyles.layout}>
      <div className={layoutStyles.content}>
        <Header />
        {props.children}
      </div>

      <Footer />
    </div>
  )
}

export default Layout

import React from "react"
import Layout from "../components/Layout/Layout"
import "../styles/index.sass"

import ScreenLeft from "../components/ScreenLeft/ScreenLeft"
import ScreenRight from "../components/ScreenRight/ScreenRight"

const Home = () => {
  return (
    <Layout>
      <div className="main">
        <div className="screenLeft">
          <ScreenLeft />
        </div>
        <div className="screenRight">
          <ScreenRight />
        </div>
      </div>
    </Layout>
  )
}

export default Home

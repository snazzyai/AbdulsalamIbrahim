import React from "react"
import Layout from "../components/Layout/Layout"
import "../styles/index.sass"
import AboutMe from "../components/About/About"




const About = () => {
  return (
    <Layout>
      <div className="main">
        <AboutMe />
      </div>
    </Layout>
  )
}

export default About
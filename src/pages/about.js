import React from "react"
import "../styles/index.sass"
import AboutMe from "../components/About/About"
import ScreenLeft from "../components/ScreenLeft/ScreenLeft"
import { motion } from "framer-motion"

const About = () => {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
      className="main"
    >
      <aside>
        <ScreenLeft />
      </aside>
      <main>
        <AboutMe />
      </main>
    </motion.div>
  )
}

export default About

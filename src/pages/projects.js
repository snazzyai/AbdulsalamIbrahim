import React from "react"
import Layout from "../components/Layout/Layout"
import "../styles/index.sass"
import Project from '../components/Project/Project'
import projectData from '../content/project'
import { motion } from 'framer-motion'



const Projects = () => {
  return (
      <motion.div
        initial={{scaleY: 0}}
        animate={{scaleY: 1}}
        exit={{scaleY: 0}}
       className="main">
        <Project  projectData = {projectData} />
      </motion.div>
  )
}

export default Projects
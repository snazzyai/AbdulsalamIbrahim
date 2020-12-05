import React from "react"
import Layout from "../components/Layout/Layout"
import "../styles/index.sass"
import Project from '../components/Project/Project'
import projectData from '../content/project'



const Projects = () => {
  return (
    <Layout>
      <div className="main">
      <Project  projectData = {projectData} />
      </div>
    </Layout>
  )
}

export default Projects
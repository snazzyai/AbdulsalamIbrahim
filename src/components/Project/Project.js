import React from "react"
import * as projectStyles from "./project.module.sass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faToolbox } from "@fortawesome/free-solid-svg-icons"

const Project = ({ projectData }) => {
  return (
    <div className={projectStyles.main}>
      <h1 className={projectStyles.heading}>Projects</h1>
      <div>
        {projectData.map((data, key) => {
          return (
            <div className={projectStyles.container}>
              <img
                src={data.imageUrl}
                border="0"
                className={projectStyles.image}
                alt="projects"
              />
              <p className={projectStyles.projectName}>{data.name}</p>
              <p className={projectStyles.darker}>{data.info}</p>
              <p className={projectStyles.lighter}>
                <FontAwesomeIcon
                  className={projectStyles.calendarIcon}
                  icon={faGithub}
                  title="github icon"
                />
                <a href={data.github} target="_blank" rel="noreferrer">
                  {data.github}
                </a>{" "}
              </p>
              <p className={projectStyles.lighter}>
                <FontAwesomeIcon
                  className={projectStyles.calendarIcon}
                  icon={faToolbox}
                />
                {data.techstack}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Project

import React from "react"
import * as experienceStyles from "./experience.module.sass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCalendarAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"

const Experience = ({ experienceData }) => {
  return (
    <div className={experienceStyles.main}>
      <h1 className={experienceStyles.heading}>Experience</h1>
      <motion.div
        animate={{ x: 10, y: 10, rotate: 360 }}
        transition={{ type: "spring" }}
      >
        {experienceData &&
          experienceData.map(experience => {
            return (
              <div className={experienceStyles.container}>
                <p className={experienceStyles.darker}>{experience.position}</p>
                <p className={experienceStyles.darker}>
                  {experience.workplace}
                </p>
                <p className={experienceStyles.lighter}>
                  <FontAwesomeIcon
                    className={experienceStyles.calendarIcon}
                    icon={faCalendarAlt}
                  />

                  {experience.date}
                </p>
                <p className={experienceStyles.lighter}>
                  <FontAwesomeIcon
                    className={experienceStyles.calendarIcon}
                    icon={faMapMarkerAlt}
                  />
                  {experience.location}
                </p>
              </div>
            )
          })}
      </motion.div>
    </div>
  )
}

export default Experience

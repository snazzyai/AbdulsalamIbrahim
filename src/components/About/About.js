import React, { useState, useEffect } from "react"
import * as aboutStyles from "./about.module.sass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faDownload
} from "@fortawesome/free-solid-svg-icons"
import { motion } from 'framer-motion'

const AboutMe = () => {
  return (
    <>
      <div className={aboutStyles.main}>
        <h1 className={aboutStyles.heading}>About Me</h1>
        <div className={aboutStyles.aboutView}>
          <div className={aboutStyles.aboutText}>
            <p>
              Abdulsalam Ibrahim is a software engineeer with more than 3
              years of experience in Software Development and Cross Platform Mobile
              Application Development. Abdulsalam is a
              technology enthusiast with flare for developing usable solutions
              with focus on code readability and performance. He is business-focused, communicative
              and a team player with good leadership skills.
              He is also an advocate
              of open source contribution with a passion to keep learning and using new technologies technologies
              profer solutions effectively.
            </p>
            <p>
             
            </p>
            <div className={aboutStyles.buttonView}>
              <motion.button 
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.8 },
                }}
                whileTap={{ scale: 0.8 }}
                className={aboutStyles.buttonTwo}>
              <FontAwesomeIcon
                className={aboutStyles.downloadIcon}
                icon={faDownload}
              />
                <a
                  href={`ResumeDev.pdf`}
                  className={aboutStyles.buttonTwoLink}
                  download
                >
                  Download My CV
                </a>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMe

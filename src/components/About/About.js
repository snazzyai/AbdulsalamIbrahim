import React, { useState, useEffect } from "react"
import * as aboutStyles from "./about.module.sass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faDownload
} from "@fortawesome/free-solid-svg-icons"
import { motion } from 'framer-motion'
import profilesummary from '../../content/profilesummary.js'

const AboutMe = () => {
  return (
    <>
      <div className={aboutStyles.main}>
        <h1 className={aboutStyles.heading}>About Me</h1>
        <div className={aboutStyles.aboutView}>
          <div className={aboutStyles.aboutText}>
            <p>
              { profilesummary }
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
                  href="https://drive.google.com/file/d/1bRfC0sD-UVz3yrNW8f7WX-_EMjL7HjJn/view?usp=sharing"
                  className={aboutStyles.buttonTwoLink}
                  download
                >
                  Check CV
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

import React, { useState, useEffect } from "react"
import aboutStyles from "./about.module.sass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCalendarAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons"

const AboutMe = () => {
  return (
    <>
      <div className={aboutStyles.main}>
        <h1 className={aboutStyles.heading}>About Me</h1>
        <div className={aboutStyles.aboutView}>
          <div className={aboutStyles.aboutImage}></div>
          <div className={aboutStyles.aboutText}>
            <h2>About Abdulsalam Ibrahim</h2>
            <p>
              Abdulsalam Ibrahim is currently a masters student of Software
              Engineering for Industrial Applications from Nigeria with over 1
              year of experience in Web Development and Cross Platform Mobile
              Application Development using state of the art technologies to
              build solutions across different fields. Abdulsalam is a
              technology enthusiast with flare for developing usable solutions
              with focus on code readability and performance. He is an advocate
              of open source contribution and a great team player.
            </p>
            <p>
              Abdulsalam is currently seeking a mandatory internship for the
              completion of his masters and would be willing to open positions
              in the field of Software Development(Web Development and Hybrid
              Mobile Application Development)
            </p>
            <div className={aboutStyles.buttonView}>
              <button className={aboutStyles.buttonTwo}>
                <a
                  href={`ResumeDev.pdf`}
                  className={aboutStyles.buttonTwoLink}
                  download
                >
                  Download My CV
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMe

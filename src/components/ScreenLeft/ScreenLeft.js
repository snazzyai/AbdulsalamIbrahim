import React from "react"
import * as screenLeftStyles from "./screenLeft.module.sass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { motion } from 'framer-motion'

const ScreenLeft = () => {
  return (
    <div className={screenLeftStyles.main}>
      <div>
        <div>
          {/* {" "} */}
          <span className={screenLeftStyles.title}>
            Frontend Developer
          </span>
        </div>

        <div className={screenLeftStyles.name}>
          <h1>Abdulsalam Ibrahim</h1>
        </div>
      </div>
      <motion.div 
        animate={{x:10, y:10, rotate:360}}
        transition={{
         type: "spring"
        }}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.8 },
        }}
        className={screenLeftStyles.image}>
        <div className={screenLeftStyles.imageAuthor}>
          <div className={screenLeftStyles.imageGlow}></div>
        </div>
      </motion.div>

      <div className={screenLeftStyles.location}>
        <FontAwesomeIcon
          className={screenLeftStyles.locationIcon}
          icon={faMapMarkerAlt}
        />
        <span className={screenLeftStyles.locationFont}>Hof, Germany</span>
      </div>
    </div>
  )
}

export default ScreenLeft

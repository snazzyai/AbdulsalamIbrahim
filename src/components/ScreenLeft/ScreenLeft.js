import React from "react"
import screenLeftStyles from "./screenLeft.module.sass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"

const ScreenLeft = () => {
  return (
    <div className={screenLeftStyles.main}>
      <div>
        <div>
          {" "}
          <span className={screenLeftStyles.title}>
            Web Developer / React Native Developer
          </span>
        </div>

        <div className={screenLeftStyles.name}>
          <h1>Abdulsalam Ibrahim</h1>
        </div>
      </div>
      <div className={screenLeftStyles.image}>
        <div className={screenLeftStyles.imageAuthor}>
          <div className={screenLeftStyles.imageGlow}></div>
        </div>
      </div>

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

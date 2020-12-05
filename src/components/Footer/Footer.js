import React from "react"
import footerStyles from "./footer.module.sass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"


const Footer = () => {
  return (
    <footer>
      <div className={footerStyles.main}>
      <div className={footerStyles.iconView}>
      <FontAwesomeIcon
      className={footerStyles.icon}
      icon={faGithub}
      title='github icon'
      size="2x"
    />
    <FontAwesomeIcon
                className={footerStyles.icon}
                icon={faLinkedin}
                title='github icon'
                size="2x"
              />
              <FontAwesomeIcon
                className={footerStyles.icon}
                icon={faTwitter}
                title='github icon'
                size="2x"
              />
      </div>
      <div className={footerStyles.copyView}>
      <p>By Abdulsalam Ibrahim</p>
        <p>Copyright 2020.</p>
      </div>
        
      </div>
    </footer>
  )
}

export default Footer

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

      <a href="https://github.com/snazzyai">
      <FontAwesomeIcon
      className={footerStyles.icon}
      icon={faGithub}
      title='github icon'
      size="2x"
    />
      </a>
      <a href="https://www.linkedin.com/in/abdulsalam-ibrahim-58701a77/">
      <FontAwesomeIcon
      className={footerStyles.icon}
      icon={faLinkedin}
      title='github icon'
      size="2x"
    />

      </a>
   <a href="https://twitter.com/snazzyAI">
   <FontAwesomeIcon
   className={footerStyles.icon}
   icon={faTwitter}
   title='github icon'
   size="2x"
 />
   </a>
              
      </div>
      <div className={footerStyles.copyView}>
      <p>Built by Abdulsalam Ibrahim</p>
        <p>Copyright 2020.</p>
      </div>
        
      </div>
    </footer>
  )
}

export default Footer

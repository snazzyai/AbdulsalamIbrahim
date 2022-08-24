import React from "react"
// import screenRightStyles from './screenRight.module.sass'
import skillData from '../../content/skills'
import experienceData from '../../content/experience'

import Skills from '../Skills/Skills'
import Experience from '../Experience/Experience'



const ScreenRight = (props) => {
 
  return (
    <div>
      {props.children}
    </div>
  )
}

export default ScreenRight


import React from "react"
// import screenRightStyles from './screenRight.module.sass'
import skillData from '../../content/skills'
import experienceData from '../../content/experience'

import Skills from '../Skills/Skills'
import Experience from '../Experience/Experience'



const ScreenRight = () => {
 
  return (
    <div>
      <Experience experienceData = {experienceData}/>
      <Skills skillData = {skillData} />
    </div>
  )
}

export default ScreenRight


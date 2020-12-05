import React from "react"
// import screenRightStyles from './screenRight.module.sass'
import skillData from '../../content/skills'
import experienceData from '../../content/experience'

import Skills from '../Skills/Skills'
import Experience from '../Experience/Experience'



const ScreenRight = () => {
 
  return (
    <div>
      <Skills skillData = {skillData} />
      <Experience experienceData = {experienceData}/>
  
    </div>
  )
}

export default ScreenRight


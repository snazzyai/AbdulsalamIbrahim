import React from "react"
import "../styles/index.sass"
import Experience from "../components/Experience/Experience"
import Skills from "../components/Skills/Skills"
import experienceData from "../content/experience"
import skillData from "../content/skills"

import ScreenLeft from "../components/ScreenLeft/ScreenLeft"
import ScreenRight from "../components/ScreenRight/ScreenRight"

const Home = () => {
  return (
    <>
      <div className="main">
        <aside>
          <ScreenLeft />
        </aside>
        <div>
          <ScreenRight>
            <Experience experienceData = {experienceData}/>
            <Skills skillData = {skillData} />
          </ScreenRight>
        </div>
      </div>
    </>
  )
}

export default Home

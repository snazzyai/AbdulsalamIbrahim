import React, {useState, useEffect} from "react"
import skillStyles from './skills.module.sass'



const Skills = ({skillData}) => {

    const [skills, setSkills] = useState([])
    useEffect(()=>{
        setSkills(skillData)
      }, [])

      return (
        <div className={skillStyles.main}>
        <h1  className={skillStyles.heading}>Skills</h1>
        <div className={skillStyles.container}>
        {
        
          skills && skills.map((skill)=>{
            return(
              <div className={skillStyles.skill}>
                {skill}
              </div>
            )
          })
        }

      </div>
      </div>
      )

}

export default Skills
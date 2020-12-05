import React, {useState, useEffect} from 'react'
import experienceStyles from './experience.module.sass'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"


const Experience = ({experienceData}) => {

    const [experience, setExperience] = useState([])
    useEffect(()=>{
        setExperience(experienceData)
      }, [])

      return (
        <div className={experienceStyles.main} >
        <h1 className={experienceStyles.heading}>Experience</h1>
        <div>
        {
        
          experience && experience.map((experience)=>{
            return(
              <div className={experienceStyles.container}>
                <p className={experienceStyles.darker}>{experience.position}</p>
                <p className={experienceStyles.darker}>{experience.workplace}</p>
                <p className={experienceStyles.lighter}>
                <FontAwesomeIcon
                className={experienceStyles.calendarIcon}
                icon={faCalendarAlt}
              />
                
                {experience.date}</p>
                <p className={experienceStyles.lighter}>
                <FontAwesomeIcon
                className={experienceStyles.calendarIcon}
                icon={faMapMarkerAlt}
              />{experience.location}</p>
              </div>
            )
          })
        }

      </div>
      </div>
      )
    
    
}

export default Experience
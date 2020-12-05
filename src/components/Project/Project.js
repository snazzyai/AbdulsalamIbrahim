import React from 'react'
import projectStyles from './project.module.sass'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faToolbox } from "@fortawesome/free-solid-svg-icons"





const Project = ({projectData}) => {

      return (
        <div className={projectStyles.main} >
          <h1 className={projectStyles.heading}>Projects</h1>
          <div className={projectStyles.containerView}>

          {
            projectData.map((data, key)=>{
              return (
                // <div className={projectStyles.container} key={key}>
                //   <img src={data.imageUrl} border="0" className={projectStyles.image}/>
                //   <div className={projectStyles.projectMore}>
                //   <label>Built With: {data.techstack}</label>
                //   </div>
                //   <p className={projectStyles.projectName}>{data.name}</p>
                //   <span>Github: </span><p className={projectStyles.projectName}>{data.github}</p>
                //   <p className={projectStyles.projectName}>{data.name}</p>

                // </div>
                <div className={projectStyles.container}>
                <img src={data.imageUrl} border="0" className={projectStyles.image}/>
                <p className={projectStyles.projectName}>{data.name}</p>
                <p className={projectStyles.darker}>{data.info}</p>
                <p className={projectStyles.lighter}>
                <FontAwesomeIcon
                className={projectStyles.calendarIcon}
                icon={faGithub}
                title='github icon'
              />
                
               <a href={data.github} target='_blank'>{data.github}</a> </p>
                <p className={projectStyles.lighter}>
                <FontAwesomeIcon
                className={projectStyles.calendarIcon}
                icon={faToolbox}
              />{data.techstack}</p>
              </div>
              )


            })

          }   
          </div>
         
      </div>
      )
    
    
}

export default Project
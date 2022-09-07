import React from "react"
import * as skillStyles from "./skills.module.sass"
import { motion } from "framer-motion"

const Skills = ({ skillData }) => {
  return (
    <div>
      <h1 className={skillStyles.heading}>Skills</h1>
      <div className={skillStyles.container}>
        {skillData &&
          skillData.map(skill => {
            return (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  type: "spring",
                  damping: 10,
                  mass: 0.75,
                  stiffness: 100,
                }}
                className={skillStyles.skill}
              >
                {skill}
              </motion.div>
            )
          })}
      </div>
    </div>
  )
}

export default Skills

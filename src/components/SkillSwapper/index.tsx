import * as React from "react"
import { useSkillsSwapper } from "../../utils/useSkillsSwapper"
import styles from "./index.module.scss"

interface Props {
  skills: string[]
  copy: string
}

const maxSkills = 4;

export const SkillsSwapper = ({ copy, skills }: Props) => {
  const { skillsRandomized } = useSkillsSwapper(skills)

  const skillsList = skillsRandomized.slice(0, maxSkills).concat("and more").map((skill, index) => (
    <span className={styles.skillItem} key={index} style={{
      opacity: 1 - (1 / (maxSkills + 1)) * index
    }}>
      {skill}{index === maxSkills ? "." : ","}
    </span>
  ))

  return (
    <div className={styles.skillsSwapper}>
      <div className={styles.copyWrapper}>
        <span className={styles.frontCopy}>{copy}</span>
        {skillsList}
      </div>
    </div>
  )
}

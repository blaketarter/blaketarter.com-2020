import { useState, useCallback, useEffect, useLayoutEffect } from "react"
import { shuffle } from "./shuffle"

const keystrokeLength = 20
const wordLength = 4000

export const useSkillsSwapper = (
  skills: string[],
): { skillsRandomized: string[] } => {
  const [{ skillsRandomized, currentSkill }, setState] = useState(() => {
    // const skillsRandomized = shuffle(skills)
    return {
      skillsRandomized: skills,
      currentSkill: skills[0],
    }
  })

  const addLetterOrWord = useCallback(() => {
    const mode = currentSkill === skillsRandomized[0] ? "word" : "letter"
    switch (mode) {
      case "word":
        setTimeout(() => {
          const lastWord = skillsRandomized[skillsRandomized.length - 1]

          setState({
            skillsRandomized: [
              "",
              currentSkill,
              ...skillsRandomized.slice(1, skillsRandomized.length - 1),
            ],
            currentSkill: lastWord,
          })
        }, wordLength)
        break
      case "letter":
        setTimeout(() => {
          const firstWord = skillsRandomized[0]

          setState({
            skillsRandomized: [firstWord + currentSkill.replace(firstWord, "")[0], ...skillsRandomized.slice(1)],
            currentSkill,
          })
        }, keystrokeLength)
    }
  }, [skillsRandomized, currentSkill])

  useEffect(() => {
    const id = window.requestAnimationFrame(
      process.env.NODE_ENV !== "test" ? addLetterOrWord : () => {},
    )

    return () => window.cancelAnimationFrame(id)
  }, [addLetterOrWord])

  return {
    skillsRandomized,
  }
}

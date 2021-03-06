import { ReactNode } from "react"
import { AnimatedPattern } from "../AnimatedPattern"
import { BodyParagraph } from "../BodyParagraph"
import styles from "./index.module.scss"

interface Props {
  title: string
  children: ReactNode
  pattern: string
}

export function PassionSection({ title, children, pattern }: Props) {
  return (
    <div className={styles.passionSection}>
      <AnimatedPattern pattern={pattern} className={styles.passionBackground}>
        <h3 className={styles.passion}>{title}</h3>
      </AnimatedPattern>
      <div className={styles.bodyWrapper}>
        <div className={styles.bar} />
        <BodyParagraph>{children}</BodyParagraph>
      </div>
    </div>
  )
}

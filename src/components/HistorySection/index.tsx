import { ReactNode } from "react"
import { AnimatedPattern } from "../AnimatedPattern"
import { BodyParagraph } from "../BodyParagraph"
import styles from "./index.module.scss"

interface Props {
  title: string
  job: string
  dates: string
  children: ReactNode
  pattern: string
}

export function HistorySection({
  title,
  job,
  dates,
  children,
  pattern,
}: Props) {
  return (
    <div className={styles.historySection}>
      <AnimatedPattern pattern={pattern} className={styles.jobBackground}>
        <h3 className={styles.job}>{job}</h3>
      </AnimatedPattern>
      <p className={styles.title}>{title}</p>
      <div className={styles.bodyWrapper}>
        <div className={styles.bar} />
        <div>
          <BodyParagraph className={styles.dates}>{dates}</BodyParagraph>
          <BodyParagraph>{children}</BodyParagraph>
        </div>
      </div>
    </div>
  )
}

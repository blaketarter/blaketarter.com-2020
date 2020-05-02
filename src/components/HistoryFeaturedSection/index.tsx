import * as React from "react"
import { AnimatedPattern } from "../AnimatedPattern"
import { BodyParagraph } from "../BodyParagraph"
import styles from "./index.module.scss"

interface Props {
  title: string
  job: string
  dates: string
  children: React.ReactNode
  pattern: string
}

export function HistoryFeaturedSection({
  title,
  job,
  dates,
  children,
  pattern,
}: Props) {
  return (
    <AnimatedPattern pattern={pattern} className={styles.featured}>
      <div className={styles.background}>
        <div className={styles.job}>{job}</div>
        <div className={styles.title}>- {title}</div>
        <div className={styles.bottom}>
          <BodyParagraph className={styles.dates}>{dates}</BodyParagraph>
          <BodyParagraph>{children}</BodyParagraph>
        </div>
      </div>
    </AnimatedPattern>
  )
}

import styles from "./index.module.scss"
import { AnimatedPattern } from "../AnimatedPattern"

interface Props {
  title: string
  job: string
  dates: string
  children: string
  pattern: string
}

export function HistoryFeaturedSection({ title, job, dates, children, pattern }: Props) {
  return (
    <AnimatedPattern pattern={pattern} className={styles.currentJob}>
      <div className={styles.historySection}>
        <div className={styles.historyHeader}>
          <div className={styles.historyJob}>{job}</div>
          <div className={styles.historyTitle}>- {title}</div>
        </div>
        <div className={styles.bodyWrapper}>
          <div className={styles.right}>
            <p className={`${styles.body} ${styles.dates}`}>{dates}</p>
            <p className={styles.body}>{children}</p>
          </div>
        </div>
      </div>
    </AnimatedPattern>
  )
}

import { AnimatedPattern } from "../AnimatedPattern"
import styles from "./index.module.scss"

interface Props {
  title: string
  job: string
  dates: string
  children: string
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
      <div className={styles.historyHeader}>
        <AnimatedPattern
          pattern={pattern}
          className={styles.historyBackground}
          offsetMultiplier={5}
        >
          <div className={styles.historyJob}>{job}</div>
        </AnimatedPattern>
        <div className={styles.historyTitle}>{title}</div>
      </div>
      <div className={styles.bodyWrapper}>
        <div className={styles.bar} />
        <div className={styles.right}>
          <p className={`${styles.body} ${styles.dates}`}>{dates}</p>
          <p className={styles.body}>{children}</p>
        </div>
      </div>
    </div>
  )
}

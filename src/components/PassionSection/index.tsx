import styles from "./index.module.scss"
import { AnimatedPattern } from "../AnimatedPattern"

interface Props {
  title: string
  children: string
  pattern: string
}

export function PassionSection({ title, children, pattern }: Props) {
  return (
    <div className={styles.passionSection}>
      <AnimatedPattern pattern={pattern} className={styles.passionBackground} offsetMultiplier={5}>
        <div className={`${styles.passion}`}>{title}</div>
        </AnimatedPattern>
      <div className={styles.bodyWrapper}>
        <div className={styles.bar} />
        <p className={styles.body}>{children}</p>
      </div>
    </div>
  )
}

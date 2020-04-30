import styles from "./index.module.scss"

interface Props {
  title: string
  children: string
  pattern: string
}

export function PassionSection({ title, children, pattern }: Props) {
  return (
    <div className={styles.passionSection}>
      <div className={`${styles.passionBackground} pattern-${pattern}`}>
        <div className={`${styles.passion}`}>{title}</div>
      </div>
      <div className={styles.bodyWrapper}>
        <div className={styles.bar} />
        <p className={styles.body}>{children}</p>
      </div>
    </div>
  )
}

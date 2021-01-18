import { Work } from "../../types/Work"
import { AnimatedPattern } from "../AnimatedPattern"
import { BodyParagraph } from "../BodyParagraph"
import styles from "./index.module.scss"

type Props = {
  pattern: string
} & Work

export function WorkItem({
  alt,
  pattern,
  src,
  description,
  title,
  href,
  service,
}: Props) {
  return (
    <div className={styles.workItem}>
      <AnimatedPattern pattern={pattern} className={styles.imageWrapper}>
        <img className={styles.image} alt={alt} src={src} loading="lazy" />
      </AnimatedPattern>
      <div className={styles.copy}>
        <BodyParagraph className={styles.title}>{title}</BodyParagraph>
        <BodyParagraph className={styles.description}>
          {description}
        </BodyParagraph>
        <a className={styles.link} href={href}>
          See it on {service}
        </a>
      </div>
    </div>
  )
}

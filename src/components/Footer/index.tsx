import classNames from "classnames"
import { AnimatedPattern } from "../AnimatedPattern"
import { BodyParagraph } from "../BodyParagraph"
import { MaxWidth } from "../MaxWidth"
import { ScrollLink } from "../ScrollLink"
import styles from "./index.module.scss"

interface Props {
  pattern: string
}

export function Footer({ pattern }: Props) {
  return (
    <footer className={styles.footer}>
      <AnimatedPattern pattern={pattern} className={styles.background} />
      <MaxWidth className={styles.content}>
        <BodyParagraph className={styles.footerText}>
          © 2020 Blake Tarter
        </BodyParagraph>
        <ScrollLink
          href="#top"
          className={classNames(styles.footerText, styles.top)}
        >
          ↑ Back to the Top.
        </ScrollLink>
      </MaxWidth>
    </footer>
  )
}

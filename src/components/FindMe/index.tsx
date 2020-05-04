import { AnimatedPattern } from "../AnimatedPattern"
import { ContentSection } from "../ContentSection"
import { MaxWidth } from "../MaxWidth"
import { SectionTitle } from "../SectionTitle"
import styles from "./index.module.scss"

interface Props {
  pattern: string
}

export function FindMe({ pattern }: Props) {
  return (
    <MaxWidth className={styles.findMe} component="section">
      <SectionTitle>Find Me on the Internet.</SectionTitle>
      <ContentSection size="small">
        <div className={styles.externalSection}>
          <AnimatedPattern
            pattern={pattern}
            className={styles.externalBackground}
            offsetMultiplier={2.5}
          >
            <div className={styles.external}>Github</div>
          </AnimatedPattern>
          <a className={styles.link} href="https://github.com/blaketarter">
            https://github.com/blaketarter
          </a>
        </div>
        <div className={styles.externalSection}>
          <AnimatedPattern
            pattern={pattern}
            className={styles.externalBackground}
            offsetMultiplier={2.5}
          >
            <div className={styles.external}>Linkedin</div>
          </AnimatedPattern>
          <a
            className={styles.link}
            href="https://www.linkedin.com/in/blaketarter"
          >
            https://www.linkedin.com/in/blaketarter
          </a>
        </div>
        <div className={styles.externalSection}>
          <AnimatedPattern
            pattern={pattern}
            className={styles.externalBackground}
            offsetMultiplier={2.5}
          >
            <div className={styles.external}>Codepen</div>
          </AnimatedPattern>
          <a className={styles.link} href="https://codepen.io/blaketarter/">
            https://codepen.io/blaketarter/
          </a>
        </div>
        <div className={styles.externalSection}>
          <AnimatedPattern
            pattern={pattern}
            className={styles.externalBackground}
            offsetMultiplier={2.5}
          >
            <div className={styles.external}>NPM</div>
          </AnimatedPattern>
          <a className={styles.link} href="https://www.npmjs.com/~blaketarter">
            https://www.npmjs.com/~blaketarter
          </a>
        </div>
        <div className={styles.externalSection}>
          <AnimatedPattern
            pattern={pattern}
            className={styles.externalBackground}
            offsetMultiplier={2.5}
          >
            <div className={styles.external}>Twitter</div>
          </AnimatedPattern>
          <a className={styles.link} href="https://twitter.com/itsblaketarter">
            https://twitter.com/itsblaketarter
          </a>
        </div>
      </ContentSection>
    </MaxWidth>
  )
}

import { AnimatedPattern } from "../AnimatedPattern"
import { ContentSection } from "../ContentSection"
import { MaxWidth } from "../MaxWidth"
import { Title } from "../Title"
import styles from "./index.module.scss"

interface Props {
  pattern: string
}

export function SectionFindMe({ pattern }: Props) {
  return (
    <MaxWidth id="find" className={styles.findMe} component="section">
      <MaxWidth className={styles.titleWrapper}>
        <Title>Find Me on the Internet.</Title>
      </MaxWidth>
      <ContentSection size="small">
        <div className={styles.externalSection}>
          <AnimatedPattern
            pattern={pattern}
            className={styles.externalBackground}
            offsetMultiplier={2.5}
          >
            <p className={styles.external}>Github</p>
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
            <p className={styles.external}>Linkedin</p>
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
            <p className={styles.external}>Codepen</p>
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
            <p className={styles.external}>NPM</p>
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
            <p className={styles.external}>Twitter</p>
          </AnimatedPattern>
          <a className={styles.link} href="https://twitter.com/itsblaketarter">
            https://twitter.com/itsblaketarter
          </a>
        </div>
      </ContentSection>
    </MaxWidth>
  )
}

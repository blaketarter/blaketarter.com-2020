import * as React from "react"
import { AnimatedPattern } from "../AnimatedPattern"
import { MaxWidth } from "../MaxWidth"
import styles from "./index.module.scss"

interface Props {
  pattern: string
  nextPattern: () => unknown
}

export function SectionHero({ pattern, nextPattern }: Props) {
  return (
    <section id="top" className={styles.hero}>
      <AnimatedPattern
        pattern={pattern}
        className={styles.background}
        onClick={nextPattern}
        testId="change-pattern"
      />
      <MaxWidth className={styles.content}>
        <h1 className={styles.title}>Hi, I&apos;m Blake Tarter.</h1>
        <h2 className={styles.subtitle}>
          A Kansas City, MO-based TypeScript developer with 6+ years of
          experience.
        </h2>
      </MaxWidth>
    </section>
  )
}

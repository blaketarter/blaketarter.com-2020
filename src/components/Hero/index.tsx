import * as React from "react";
import styles from "./index.module.scss";
import { MaxWidth } from "../MaxWidth";
import { AnimatedPattern } from "../AnimatedPattern";

interface Props {
  pattern: string;
  nextPattern: () => unknown;
  changeTheme: () => unknown;
}

export function Hero({ pattern, nextPattern, changeTheme }: Props) {
  return (
    <section
      className={styles.hero}
    >
      <AnimatedPattern pattern={pattern} className={styles.heroBackground} />
      <MaxWidth className={styles.heroContent}>
        <h1 className={styles.title}>Hi, I'm Blake Tarter.</h1>
        <h2 className={styles.subtitle}>A Kansas City, MO based TypeScript developer with 6+ years of experience.</h2>
      </MaxWidth>
      <span className={styles.new} onClick={nextPattern}>
        new pattern
      </span>
      <span className={styles.theme} onClick={changeTheme}>
        change theme
      </span>
    </section>
  );
}

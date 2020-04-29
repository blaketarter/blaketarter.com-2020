import * as React from "react";
import styles from "./index.module.scss";
import { MaxWidth } from "../MaxWidth";

interface Props {
  pattern: string;
  nextPattern: () => unknown;
  changeTheme: () => unknown;
}

export function Hero({ pattern, nextPattern, changeTheme }: Props) {
  const [offset, setOffset] = React.useState([0, 0]);

  return (
    <section
      className={styles.hero}
      onMouseMove={e => {
        const offset = [
          Math.min(e.pageX * -0.01, 20),
          Math.min(e.pageY * -0.01, 20)
        ];
        setOffset(offset);
      }}
    >
      <div
        style={{
          transform: `translate(${offset[0]}px, ${offset[1]}px)`
        }}
        className={`${styles.heroBackground} pattern-${pattern}`}
      />
      <MaxWidth className={styles.heroContent}>
        <h1 className={styles.title}>Hi, I'm Blake Tarter.</h1>
        <h2 className={styles.subtitle}>A Kansas City based web developer</h2>
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

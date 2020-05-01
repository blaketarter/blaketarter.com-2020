import * as React from "react";
import styles from "./index.module.scss";
import { MaxWidth } from "../MaxWidth";
import { SectionTitle } from "../SectionTitle";
import { HistorySection } from "../HistorySection";

interface Props {
  pattern: string
}

export function History({ pattern }: Props) {
  return (
    <MaxWidth className={styles.history} component="section">
      <SectionTitle>My History.</SectionTitle>
      <div className={styles.historyContent}>
        <p className={styles.body}>
          Blake is a TypeScript developer with 6+ years of experience
          planning, creating, and maintaining websites and various application
          platforms. Some technologies that he uses on a regular basis are
          React, Redux, TypeScript, and Node. His projects include client and
          consumer facing websites, as well as react-native and hybrid
          applications. He has experience working in a team environment,
          exceeds in time management skills, and strives to remain on the
          cutting-edge of the front-end development scene.
        </p>
        <p className={styles.body}>
          Currently Blake works at{" "}
          <a href="https://crema.us" className="link">
            Crema
          </a>
          , a product agency that partners with funded startups and existing
          brands to create technology solutions and new digital ventures. He
          also does some freelance work in his spare time with{" "}
          <a href="https://crema.us" className="link">
            Midwestern Originals
          </a>
          .
        </p>
      </div>
      <div className={styles.historyContent}>
        <HistorySection pattern={pattern} title="Senior Application Developer" job="Crema" dates="Nov 2018 - Present">
          His projects include client and consumer facing websites, as well as react-native and hybrid
          applications. He has experience working in a team environment,
          exceeds in time management skills, and strives to remain on the
          cutting-edge of the front-end development scene.
        </HistorySection>
      </div>
    </MaxWidth>
  );
}

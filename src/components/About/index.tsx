import * as React from "react";
import styles from "./index.module.css";
import { MaxWidth } from "../MaxWidth";
import { Seperator } from "../Seperator";

interface Props {
  pattern: string;
}

export function About({ pattern }: Props) {
  return (
    <MaxWidth className={styles.about} component="section">
      <h2 className={styles.title}>About Me.</h2>
      <div>
        {/* <div
          className={`pattern-${pattern}`}
          style={{
            display: "inline-block",
            marginLeft: "4rem",
            textAlign: "left",
            color: "var(--color-primary)"
          }}
        >
          <div
            style={{
              height: 200,
              width: 200,
              background: "var(--color-text)",
              transform: "translate(1rem, -1rem)"
            }}
          />
        </div> */}
        <div>
          <p className={styles.body}>
            Blake is a Javascript developer with 6+ years of experience
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
      </div>
      <Seperator pattern={pattern} />
    </MaxWidth>
  );
}

import * as React from "react";
import styles from "./index.module.scss";
import { MaxWidth } from "../MaxWidth";
import { Seperator } from "../Seperator";
import { SectionTitle } from "../SectionTitle";
import { SkillsSwapper } from "../SkillSwapper";
import { PassionSection } from "../PassionSection";

interface Props {
  pattern: string;
}

const skills = [
  "React",
  "Redux",
  "TypeScript",
  "ReasonML",
  "React-Native",
  "Functional Programming",
  "GraphQL",
  "HTML",
  "CSS",
  "Git",
  "Node",
]

export function About({ pattern }: Props) {
  return (
    <MaxWidth className={styles.about} component="section">
      <MaxWidth className={styles.titleWrapper}>
        <SectionTitle>About Me.</SectionTitle>
      </MaxWidth>
      <div className={styles.aboutContent}>
        <div
          className={`${styles.pictureWrapper} pattern-${pattern}`}
        >
          <img className={styles.picture} src="/me.jpeg" alt="A picture of Blake" loading="lazy" />
        </div>
        <div className={styles.right}>
          <p className={styles.body}>
            I'm a TypeScript developer with 6+ years of experience
            planning, creating, and maintaining websites and various application
            platforms. Some technologies that I use on a regular basis are
            React, Redux, TypeScript, and Node. Some of my projects include client and
            consumer facing websites, as well as react-native and hybrid
            applications. I have experience working in a team environment,
            exceeds in time management skills, and strives to remain on the
            cutting-edge of the front-end development scene.
          </p>
          <p className={styles.body}>
            Currently I work at{" "}
            <a href="https://crema.us" className="link">
              Crema
            </a>
            , a product agency that partners with funded startups and existing
            brands to create technology solutions and new digital ventures. I
            also do some freelance work in my spare time with{" "}
            <a href="https://crema.us" className="link">
              Midwestern Originals
            </a>
            .
          </p>
        </div>
      </div>
      <div className={styles.skillsSection}>
        <SkillsSwapper copy="I know" skills={skills} />
      </div>
      <div className={`${styles.aboutContent} ${styles.smaller}`}>
        <p className={styles.body}>
          I'm really passionate about many things but a couple of the things that I've been the most passionate about during work are:
        </p>
        <PassionSection title="TypeScript" pattern={pattern}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</PassionSection>
        <PassionSection title="React" pattern={pattern}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</PassionSection>
        <p className={styles.body}>
          I wouldn't count myself an expert in these yet but I'm spending time exploring:
        </p>
        <PassionSection title="Functional Programming" pattern={pattern}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</PassionSection>
        <PassionSection title="GraphQL" pattern={pattern}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</PassionSection>
      </div>
    </MaxWidth>
  );
}

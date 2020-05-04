import * as React from "react"
import { AnimatedPattern } from "../AnimatedPattern"
import { BodyParagraph } from "../BodyParagraph"
import { ContentSection } from "../ContentSection"
import { MaxWidth } from "../MaxWidth"
import { PassionSection } from "../PassionSection"
import { SectionTitle } from "../SectionTitle"
import { SkillsSwapper } from "../SkillsSwapper"
import styles from "./index.module.scss"

interface Props {
  pattern: string
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
        <SectionTitle className={styles.title}>About Me.</SectionTitle>
      </MaxWidth>
      <ContentSection className={styles.summary}>
        <AnimatedPattern
          pattern={pattern}
          className={styles.pictureBackground}
          offsetMultiplier={5}
        >
          <img
            className={styles.picture}
            src="/me.jpeg"
            alt="blake smiling"
            loading="lazy"
          />
        </AnimatedPattern>
        <div className={styles.right}>
          <BodyParagraph>
            I&apos;m a TypeScript developer with 6+ years of experience
            planning, creating, and maintaining websites and various application
            platforms. Some technologies that I use on a regular basis are
            React, Redux, TypeScript, and Node. Some of my projects include
            client and consumer facing websites, as well as react-native and
            hybrid applications. I have experience working in a team
            environment, exceeds in time management skills, and strives to
            remain on the cutting-edge of the front-end development scene.
          </BodyParagraph>
          <BodyParagraph>
            Currently I work at <a href="https://crema.us">Crema</a>, a product
            agency that partners with funded startups and existing brands to
            create technology solutions and new digital ventures. I also do some
            freelance work in my spare time with{" "}
            <a href="https://www.midwesternoriginals.com">
              Midwestern Originals
            </a>
            .
          </BodyParagraph>
        </div>
      </ContentSection>
      <div className={styles.skillsSection}>
        <SkillsSwapper copy="I know" skills={skills} />
      </div>
      <ContentSection size="small">
        <BodyParagraph>
          I&apos;m really passionate about many things but a couple of the
          things that I&apos;ve been the most passionate about during work are:
        </BodyParagraph>
        <PassionSection title="TypeScript" pattern={pattern}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </PassionSection>
        <PassionSection title="React" pattern={pattern}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </PassionSection>
        <BodyParagraph>
          I wouldn&apos;t count myself an expert in these yet but I&apos;m
          spending time exploring:
        </BodyParagraph>
        <PassionSection title="Functional Programming" pattern={pattern}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </PassionSection>
        <PassionSection title="GraphQL" pattern={pattern}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </PassionSection>
      </ContentSection>
    </MaxWidth>
  )
}

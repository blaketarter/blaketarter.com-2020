import * as React from "react"
import { AnimatedPattern } from "../AnimatedPattern"
import { BodyParagraph } from "../BodyParagraph"
import { ContentSection } from "../ContentSection"
import { MaxWidth } from "../MaxWidth"
import { PassionSection } from "../PassionSection"
import { SkillsSwapper } from "../SkillsSwapper"
import { Title } from "../Title"
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

export function SectionAbout({ pattern }: Props) {
  return (
    <MaxWidth id="about" className={styles.about} component="section">
      <MaxWidth className={styles.titleWrapper}>
        <Title className={styles.title}>About Me.</Title>
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
            loading="eager"
          />
        </AnimatedPattern>
        <div className={styles.right}>
          <BodyParagraph>
            I&apos;m a TypeScript developer with 6+ years of experience
            planning, creating, and maintaining websites and various application
            platforms. Some technologies that I use on a regular basis are
            React, Redux, TypeScript, and Node. Some of my projects include
            client and consumer facing websites, as well as react-native and
            hybrid applications. I have experience working in a team environment
            and strive to remain on the cutting-edge of the front-end
            development scene.
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
        <BodyParagraph className={styles.passionLabel}>
          <em>
            I&apos;m really passionate about many things but a couple of the
            things that I&apos;ve been the most passionate about are:
          </em>
        </BodyParagraph>
        <PassionSection title="TypeScript" pattern={pattern}>
          TypeScript is a statically-typed superset of JavaScript that enables
          developers to focus more on building sound systems, with less runtime
          errors. This up front investment in the development process is a
          tradeoff that has a net benefit. It allows the compiler to catch
          common errors and other things allowing the developer to focus on the
          bespoke problem they are solving.
        </PassionSection>
        <PassionSection title="React" pattern={pattern}>
          React is one of the myriad front-end frameworks, and to be honest they
          each achieve roughly the same goal. But the difference in each is how
          familiar you are with them and the way they go about expressing UI and
          interop with the language you use while developing with them. In this
          regard I think React expresses interfaces in a way that corresponds
          equally well with how they are designed, and how we think about them.
          The way data flows is predictable and flexible. And React errs on the
          side of using language features instead of inventing magic syntax.
        </PassionSection>
        <BodyParagraph className={styles.passionLabel}>
          <em>
            I wouldn&apos;t count myself an expert in these yet but I&apos;m
            spending time exploring:
          </em>
        </BodyParagraph>
        <PassionSection title="Functional Programming" pattern={pattern}>
          Functional Programming while being opposed to object-oriented
          programming in a lot of ways is still fascinating. A lot of the traits
          of functional-programming can be beneficial when applied even to
          object-oriented systems. Immutability in non-performance hot paths can
          be incredibly useful to eliminate programming errors and show intent.
          Declarative code can be much more easier to understand and reason
          about, leading to less errors.
        </PassionSection>
        <PassionSection title="GraphQL" pattern={pattern}>
          GraphQL is intriguing to me because it&apos;s a different way to think
          about communicating with the back end in regards to data. Having a
          separate schema file that enforces type-safety and other validations
          on both client-side and back end is wonderful, and thinking of the
          data as a graph more closely aligns to how I&apos;ve ended up working
          with the data on the client-side. I&apos;ve used it in production on a
          couple of projects and I&apos;ve had positive experiences positive so
          far.
        </PassionSection>
      </ContentSection>
    </MaxWidth>
  )
}

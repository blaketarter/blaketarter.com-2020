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
            Hi, I’m Blake{" "}
            <span role="img" aria-label="waving">
              👋
            </span>
          </BodyParagraph>
          <BodyParagraph>
            I&apos;m a TypeScript developer with over six years of experience
            planning, creating, and maintaining various types of apps and
            websites. My current weapons of choice include React, Redux,
            TypeScript, and Node. I spend my days building enterprise-grade web
            apps, consumer facing websites, and mobile apps. I kick back on my
            nights and weekends by honing my skills and working on passion
            projects.
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
            I don&apos;t want to toot my own horn, but I do know a little
            something about these (toot-toot{" "}
            <span role="img" aria-label="train">
              🚂
            </span>
            ):
          </em>
        </BodyParagraph>

        <PassionSection title="TypeScript" pattern={pattern}>
          TypeScript is a statically-typed superset of JavaScript that enables
          developers to focus more on building sound systems with fewer runtime
          errors. This upfront investment in the development process is a
          tradeoff that has a net benefit to the quality of any product. It
          allows the compiler to catch syntax errors and other common issues
          allowing the developer to focus on the bespoke problem they are
          solving.
        </PassionSection>
        <PassionSection title="React" pattern={pattern}>
          React is one of the myriad front-end JavaScript frameworks, and to be
          honest they each achieve roughly the same goal. However, the
          difference in each is how familiar you are with them and the way they
          allow you to build the UI. In this regard I think React allows you to
          build interfaces in a way that equates with how they are designed and
          how we think about them intuitively. The way data flows is predictable
          and flexible. I love that React uses existing language features
          instead of inventing magic syntax.
        </PassionSection>
        <br />
        <BodyParagraph className={styles.passionLabel}>
          <em>
            I may know some already, but I’m working to level up these skills{" "}
            <span role="img" aria-label="video game controller">
              🎮
            </span>
            :
          </em>
        </BodyParagraph>
        <PassionSection title="Functional Programming" pattern={pattern}>
          To many developers functional programming is very much opposed to
          object-oriented programming. Although, I think a lot of the traits of
          functional-programming can be beneficial when applied even to
          object-oriented systems. Immutability in non-performance limited areas
          can be incredibly useful to eliminate programming errors and show
          intent. Declarative code can be easier to understand and read which
          can lead to fewer errors. Pure functions can be used to build easy to
          reuse parts of any codebase.
        </PassionSection>
        <PassionSection title="GraphQL" pattern={pattern}>
          GraphQL is intriguing to me because it&apos;s a different way to think
          about communicating with the back-end. Having a separate schema file
          that enforces type-safety and other validations on both the
          client-side and back-end is wonderful, and representing the data as a
          graph more closely aligns with how the data is used on the
          client-side. I&apos;ve used it in production on a couple of projects
          and I&apos;ve had positive experiences so far.
        </PassionSection>
      </ContentSection>
    </MaxWidth>
  )
}

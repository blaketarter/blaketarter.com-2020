import * as React from "react"
import { BodyParagraph } from "../BodyParagraph"
import { ContentSection } from "../ContentSection"
import { HistoryFeaturedSection } from "../HistoryFeaturedSection"
import { HistorySection } from "../HistorySection"
import { MaxWidth } from "../MaxWidth"
import { SectionTitle } from "../SectionTitle"
import styles from "./index.module.scss"

interface Props {
  pattern: string
}

export function History({ pattern }: Props) {
  return (
    <MaxWidth id="history" className={styles.history} component="section">
      <SectionTitle>My History.</SectionTitle>
      <ContentSection>
        <BodyParagraph>
          Blake is a TypeScript developer with 6+ years of experience planning,
          creating, and maintaining websites and various application platforms.
          Some technologies that he uses on a regular basis are React, Redux,
          TypeScript, and Node. His projects include client and consumer facing
          websites, as well as react-native and hybrid applications. He has
          experience working in a team environment, exceeds in time management
          skills, and strives to remain on the cutting-edge of the front-end
          development scene.
        </BodyParagraph>
        <BodyParagraph>
          Currently Blake works at <a href="https://crema.us">Crema</a>, a
          product agency that partners with funded startups and existing brands
          to create technology solutions and new digital ventures. He also does
          some freelance work in his spare time with{" "}
          <a href="https://crema.us">Midwestern Originals</a>.
        </BodyParagraph>
      </ContentSection>
      <HistoryFeaturedSection
        pattern={pattern}
        title="Senior Application developer"
        job="Crema"
        dates="Dec 2019 - Present"
      >
        His projects include client and consumer facing websites, as well as
        react-native and hybrid applications. He has experience working in a
        team environment, exceeds in time management skills, and strives to
        remain on the cutting-edge of the front-end development scene.
      </HistoryFeaturedSection>
      <ContentSection size="small">
        <HistorySection
          pattern={pattern}
          title="Application Developer"
          job="Crema"
          dates="Nov 2017 - Dec 2019"
        >
          His projects include client and consumer facing websites, as well as
          react-native and hybrid applications. He has experience working in a
          team environment, exceeds in time management skills, and strives to
          remain on the cutting-edge of the front-end development scene.
        </HistorySection>
        <HistorySection
          pattern={pattern}
          title="Team Lead"
          job="Code Koalas"
          dates="Sep 2016 - Nov 2017"
        >
          His projects include client and consumer facing websites, as well as
          react-native and hybrid applications. He has experience working in a
          team environment, exceeds in time management skills, and strives to
          remain on the cutting-edge of the front-end development scene.
        </HistorySection>
        <HistorySection
          pattern={pattern}
          title="Web Developer"
          job="Code Koalas"
          dates="Aug 2014 - Sep 2016"
        >
          His projects include client and consumer facing websites, as well as
          react-native and hybrid applications. He has experience working in a
          team environment, exceeds in time management skills, and strives to
          remain on the cutting-edge of the front-end development scene.
        </HistorySection>
        <HistorySection
          pattern={pattern}
          title="UX Engineer"
          job="The Briefcase"
          dates="May 2014 - Aug 2014"
        >
          His projects include client and consumer facing websites, as well as
          react-native and hybrid applications. He has experience working in a
          team environment, exceeds in time management skills, and strives to
          remain on the cutting-edge of the front-end development scene.
        </HistorySection>
        <HistorySection
          pattern={pattern}
          title="UX Intern"
          job="The Briefcase"
          dates="Dec 2013 - May 2014"
        >
          His projects include client and consumer facing websites, as well as
          react-native and hybrid applications. He has experience working in a
          team environment, exceeds in time management skills, and strives to
          remain on the cutting-edge of the front-end development scene.
        </HistorySection>
      </ContentSection>
    </MaxWidth>
  )
}

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
      <MaxWidth className={styles.titleWrapper}>
        <SectionTitle>My History.</SectionTitle>
      </MaxWidth>
      <ContentSection>
        <BodyParagraph>
          Like most everyone in their lives I&apos;ve had an interesting journey
          to where I am now. Originally I set out to be a Graphic Designer as my
          career of choice, eventually switching to web design, then realizing
          web development was my real passion. I had always been interested in
          computers, and took as much time while in school to self teach
          programming and design. In reality I just have a passion to create and
          the web is my medium of choice.
        </BodyParagraph>
        <BodyParagraph>
          My career so far has taken me from startup to agency. From building
          web applications, marketing websites, hybrid applications, native
          applications, and back again. Using a myriad of different
          technologies, frameworks, and methodologies. Currently I find myself
          mainly working on web and native applications using React and
          TypeScript.
        </BodyParagraph>
      </ContentSection>
      <HistoryFeaturedSection
        pattern={pattern}
        title="Senior Application developer"
        job="Crema"
        dates="Dec 2019 - Present"
      >
        During this role I help build web and mobile applications as a member of
        the production team while also helping mentor and give direction to the
        development team as a whole. As a Senior developer I&apos;m expected to
        have areas of expertise and be able to advise the development direction
        of projects.
      </HistoryFeaturedSection>
      <ContentSection size="small">
        <HistorySection
          pattern={pattern}
          title="Application Developer"
          job="Crema"
          dates="Nov 2017 - Dec 2019"
        >
          While in this role I developed, implemented, and updated software
          solutions for web and mobile applications.
        </HistorySection>
        <HistorySection
          pattern={pattern}
          title="Team Lead"
          job="Code Koalas"
          dates="Sep 2016 - Nov 2017"
        >
          I lead the team that is the Web/Hybrid Application team at CodeKoalas,
          we used web technologies such as Javascript, Angular, Ionic, Cordova,
          React, and React Native to build and launch experiences for clients
          and consumers on multiple platforms.
        </HistorySection>
        <HistorySection
          pattern={pattern}
          title="Web Developer"
          job="Code Koalas"
          dates="Aug 2014 - Sep 2016"
        >
          I was on the team team that developed web sites using HTML, CSS,
          Javascript, PHP, Drupal
        </HistorySection>
        <HistorySection
          pattern={pattern}
          title="UX Engineer"
          job="The Briefcase"
          dates="May 2014 - Aug 2014"
        >
          I developed and integrated the front-end of Briefcase with the
          back-end and also made design/usability decisions. I focused on
          HTML/CSS/JS but also tended to use PHP to do my job.
        </HistorySection>
        <HistorySection
          pattern={pattern}
          title="UX Intern"
          job="The Briefcase"
          dates="Dec 2013 - May 2014"
        >
          I was a front-end user-experience intern that helped implement the
          web-app and advised on usability decisions.
        </HistorySection>
      </ContentSection>
    </MaxWidth>
  )
}

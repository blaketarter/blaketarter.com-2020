import { Work } from "../../types/Work"
import { BodyParagraph } from "../BodyParagraph"
import { ContentSection } from "../ContentSection"
import { MaxWidth } from "../MaxWidth"
import { SectionTitle } from "../SectionTitle"
import { WorkItem } from "../WorkItem"
import styles from "./index.module.scss"

interface Props {
  pattern: string
}

const work: Work[] = [
  {
    title: "hello World",
    alt: "hello world",
    description:
      "Currently I work at Crema, a product agency that partners with funded startups and existing brands to create technology solutions and new digital ventures. I also do some freelance work in my spare time with Midwestern Originals.",
    src: "",
    href: "http://example.com",
    service: "example",
  },
  {
    title: "hello World",
    alt: "hello world",
    description:
      "Currently I work at Crema, a product agency that partners with funded startups and existing brands to create technology solutions and new digital ventures. I also do some freelance work in my spare time with Midwestern Originals.",
    src: "",
    href: "http://example.com",
    service: "example",
  },
  {
    title: "hello World",
    alt: "hello world",
    description:
      "Currently I work at Crema, a product agency that partners with funded startups and existing brands to create technology solutions and new digital ventures. I also do some freelance work in my spare time with Midwestern Originals.",
    src: "",
    href: "http://example.com",
    service: "example",
  },
  {
    title: "hello World",
    alt: "hello world",
    description:
      "Currently I work at Crema, a product agency that partners with funded startups and existing brands to create technology solutions and new digital ventures. I also do some freelance work in my spare time with Midwestern Originals.",
    src: "",
    href: "http://example.com",
    service: "example",
  },
]

export function SomeWork({ pattern }: Props) {
  return (
    <MaxWidth className={styles.someWork} component="section">
      <SectionTitle>Some Work.</SectionTitle>
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
      </ContentSection>
      <ContentSection size="small" className={styles.workItems}>
        {work.map((props) => (
          <WorkItem {...props} pattern={pattern} key={props.title} />
        ))}
      </ContentSection>
    </MaxWidth>
  )
}

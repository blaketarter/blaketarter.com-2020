import { Work } from "../../types/Work"
import { BodyParagraph } from "../BodyParagraph"
import { ContentSection } from "../ContentSection"
import { MaxWidth } from "../MaxWidth"
import { Title } from "../Title"
import { WorkItem } from "../WorkItem"
import styles from "./index.module.scss"

interface Props {
  pattern: string
}

const work: Work[] = [
  {
    title: "reticky-tacky",
    alt: "The reticky-tacky game board",
    description: "A native ReasonML tic-tac-toe game built with reprocessing.",
    src: "/images/reticky-tacky.png",
    href: "https://github.com/blaketarter/reticky-tacky",
    service: "GitHub",
  },
  {
    title: "simple-fp",
    alt: "A simple-fp code snippet",
    description:
      "A simple, small, no dependency functional programming library used as a tool to explore functional programming concepts.",
    src: "/images/simple-fp.png",
    href: "https://github.com/blaketarter/simple-fp",
    service: "GitHub",
  },
  {
    title: "blaketarter.com",
    alt: "blaketarter.com screenshot",
    description:
      "Did this website need to be over-engineered? No. But it was fun, and a place to explore new technologies and techniques.",
    src: "/images/blaketarter.com.png",
    href: "https://github.com/blaketarter/blaketarter.com-2020",
    service: "GitHub",
  },
  {
    title: "KCMO Bus Stops",
    alt: "hello world",
    description:
      "A React Native application that shows bus stops in the Kansas City area around your current location and hands-off navigation to them using the system navigation app.",
    src: "/images/kcbus.png",
    href: "https://play.google.com/store/apps/details?id=com.blaketarter.kcbus",
    service: "the Play Store",
  },
]

export function SectionSomeWork({ pattern }: Props) {
  return (
    <MaxWidth id="work" className={styles.someWork} component="section">
      <MaxWidth className={styles.titleWrapper}>
        <Title>Some Work.</Title>
      </MaxWidth>
      <ContentSection>
        <BodyParagraph>
          While most of what I do on a day-to-day basis I can&apos;t share here
          for one reason or another, I do find myself sometimes creating stuff
          worth putting here. It&apos;s not always flashy, but I&apos;ve found
          that often the fun-stuff doesn&apos;t have to be flashy.
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

import classnames from "classnames"
import * as React from "react"
import { BorderWrapper } from "../components/BorderWrapper"
import { Nav } from "../components/Nav"
import { SectionAbout } from "../components/SectionAbout"
import { SectionFindMe } from "../components/SectionFindMe"
import { SectionFooter } from "../components/SectionFooter"
import { SectionHero } from "../components/SectionHero"
import { SectionHistory } from "../components/SectionHistory"
import { SectionSomeWork } from "../components/SectionSomeWork"
import { useTheme } from "../utils/theme"
import { usePattern } from "../utils/usePattern"

export default function App() {
  const [pattern, nextPattern] = usePattern()
  const [theme, setTheme] = useTheme()

  return (
    <div className={classnames("App", `theme-${theme}`)}>
      <Nav theme={theme} setTheme={setTheme} />
      <SectionHero pattern={pattern} nextPattern={nextPattern} />
      <BorderWrapper component="main">
        <SectionAbout pattern={pattern} />
        <SectionHistory pattern={pattern} />
        <SectionSomeWork pattern={pattern} />
        <SectionFindMe pattern={pattern} />
      </BorderWrapper>
      <SectionFooter pattern={pattern} />
    </div>
  )
}
